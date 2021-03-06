import * as d3 from "d3";
import { inject, noView, bindable, bindingMode, BindingEngine } from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class stackedBarChart {
  // One-Way
  @bindable margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
  @bindable x_attribute = "x";
  @bindable y_attribute = "y";
  @bindable redraw = 0;

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;

  // Observed Variables
  @bindable data = [];

  // Aurelia variables
  private element;
  private subscription;
  private resize_sub;

  // D3 variables
  private svg;
  private barchart;
  private x;
  private y;
  private z;
  private legend;

  // set the dimensions and margins of the graph
  private width;
  private height;
  private x_size = 900;
  private y_size = 500;

  constructor(element, private bindingEngine) {
    this.element = element;
  }

  // This is called after binding attributes
  attached() {
    if (this.data) {
      // subscribe to the data array and watch for changes
      this.subscription = this.bindingEngine
        .collectionObserver(this.data)
        .subscribe(splices => this.dataMutated(splices));
    }

    this.resize_sub = this.bindingEngine
      .propertyObserver(this.element.parentElement, "offsetWidth")
      .subscribe(n => this.resize())

    // set the dimensions and margins of the graph
    this.x_size = this.element.parentElement.offsetWidth;
    this.y_size = this.element.parentElement.offsetHeight;

    this.width = this.x_size - this.margin.left - this.margin.right;
    this.height = this.y_size - this.margin.top - this.margin.bottom;

    this.initChart()
    this.updateChart();
  }

  resize() {
    this.x_size = this.element.parentElement.offsetWidth;
    this.y_size = this.element.parentElement.offsetHeight;

    this.width = this.x_size - this.margin.left - this.margin.right;
    this.height = this.y_size - this.margin.top - this.margin.bottom;

    this.resizeChart();
    this.updateChart();
  }

  // Update the chart if the data changes
  dataMutated(splices) {
    if (this.data.length > 0) {
      this.updateChart();
    }
    else {
      this.svg.selectAll(".medikament").remove()
    }
  }

  unbind() {
    this.subscription.dispose();
    this.resize_sub.dispose();
  }

  initChart() {
    // Complete drawing area
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Linechart area
    this.barchart = this.svg
      .append("g")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("transform",
      "translate(" + this.margin.left + ", " + this.margin.top + ")");

    // set the ranges
    this.x = d3.scaleBand()
      .padding(0.1)
      .range([0, this.width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);
    this.z = d3.scaleOrdinal()
      .range(["#33CA7F" ,"#ECE4B7", "#FC9F5B"])

    // add the x Axis
    this.barchart.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .attr("class", "xAxis");

    // add the y Axis
    this.barchart.append("g")
      .attr("class", "yAxis")

    // y axis label
    this.barchart.append("text")
      .style("text-anchor", "middle")
      .attr("y", -4)
      .text("Kosten");


    // // Add text
    // this.barchart.append("text")
    //   .attr("class", "bar_text")
    //   .style("text-anchor", "middle")
    //   // .attr("x", function(d) { return this.x(d.data.x); })
    //   .text("test")
    //   // .text(function(d) { return totals[d.data.x]; })

    // add legend
    this.legend = this.barchart.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
      .attr("class", "legend");
  }

  resizeChart() {
    this.svg
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Linechart area
    this.barchart
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("transform",
      "translate(" + this.margin.left + ", " + this.margin.top + ")");

    // set the ranges
    this.x
      .range([0, this.width]);
    this.y
      .range([this.height, 0]);

    // add the x Axis
    this.barchart.append("g")
      .attr("transform", "translate(0," + this.height + ")")
  }
  updateChart() {
    let self = this

    let keys = []
    if (this.data.length > 0) keys = Object.getOwnPropertyNames(this.data[0]).slice(1);

    let totals = this.data.map(x => {
      let s = { key: x.x, value: 0 };
      keys.forEach(y => {
        s.value = s.value + +x[y];
      })
      return s;
    })

    this.x.domain(this.data.map(function(d) { return d.x; }));
    this.y.domain([0, d3.max(totals, x => x.value)]).nice();
    this.z.domain(keys);

    let t = d3.transition("default")
      .duration(500);

    let stack = d3.stack().keys(keys)(self.data)

    // Delete all bars before rerendering them
    this.barchart.selectAll(".medikament").remove()

    // Join
    let chart = this.barchart.selectAll(".medikament")
      .data(stack, x => x.key)

    // Enter
    let bars = chart.enter().append("g")
      .attr("class", "medikament")
      .attr("fill", function(d) { return self.z(d.key); })

    bars.selectAll("rect")
             .data(function(d) { return d; })
             .enter().append("rect")
               .attr("x", function(d) { return self.x(d.data.x); })
               .attr("width", self.x.bandwidth())
               .attr("y", this.height)
               .attr("height", 0)

    // Update
    bars.selectAll("rect")
      .transition(t)
      .attr("y", function(d) { return self.y(d[1]); })
      .attr("height", function(d) { return self.y(d[0]) - self.y(d[1]); })

    // Exit
    chart.exit().remove();

    // Add texts
    let labels = this.barchart.selectAll(".labels")
      .data(totals, x => x.key)

    labels.enter().append("text")
      .attr("class", "labels")
      .style("text-anchor", "middle")
        .merge(labels)
      .attr("x", function(d) { return self.x(d.key) + self.x.bandwidth()/2; })
      .attr("y", function(d) { return self.y(d.value) - 3; })
      .text(function(d) { return d.value; })

    labels.exit().remove();

    this.barchart.selectAll(".xAxis")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(this.x));

    this.barchart.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));

    // Join
    let legend_group = this.legend
      .selectAll("g")
      .data(keys.reverse(), x => x)

    // Enter
    let legends = legend_group.enter().append("g")

    legends.append("rect")
      .attr("x", this.width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", this.z);

    legends.append("text")
      .attr("x", this.width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });

    // Update
    legend_group.merge(legends).attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    // Exit
    legend_group.exit().remove();
  }
}

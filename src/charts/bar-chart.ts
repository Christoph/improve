import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class barChart {
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

  // D3 variables
  private svg;
  private barchart;
  private x;
  private y;

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

      // set the dimensions and margins of the graph
      this.x_size = this.element.parentElement.offsetWidth;
      this.y_size = this.element.parentElement.offsetHeight;

      this.width = this.x_size - this.margin.left - this.margin.right;
      this.height = this.y_size - this.margin.top - this.margin.bottom;

      this.initChart()
      this.updateChart();
  }

  // Update the chart if the data changes
  dataMutated(splices) {
      if(this.data.length > 1) {
          this.updateChart();
      }
      else {
          this.svg.selectAll(".bar").remove()
      }
  }

  redrawChanged() {
      if(this.data.length > 1) {
          this.updateHighlight();
      }
  }

  unbind() {
      this.subscription.dispose();
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
        "translate(" + this.margin.left + ", "+ this.margin.top +")");

    // set the ranges
    this.x = d3.scaleBand()
      .padding(0.1)
      .range([0, this.width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);

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
  }

  updateHighlight() {

      // this.barchart.selectAll(".bar")
      //     .classed("highlight", function(this, d) {
      //         if(d["highlight"] == 1) { return true; }
      //         else { return false; }
      //     })
      //     .classed("background", function(this, d) {
      //         if(d["highlight"] == 2) { return true; }
      //         else { return false; }
      //     });
      //
      //   this.linechart.selectAll("path.line.highlight").moveToFront();
  }

  updateChart() {
    let self = this
    // Update domains
    let keys = ["UV"]

    this.x.domain(this.data.map(function(d) { return d.x; }));
    this.y.domain([0, d3.max(this.data, function(d) { return d["total"]; })]).nice();

    this.barchart.append("g").selectAll("g")
           .data(d3.stack().keys(keys)(self.data))
           .enter().append("g")
             .attr("fill", "steelblue")
           .selectAll("rect")
           .data(function(d) { console.log(d); return d; })
           .enter().append("rect")
             .attr("x", function(d) { return self.x(d.data.x); })
             .attr("y", function(d) { return self.y(d[1]); })
             .attr("height", function(d) { return self.y(d[0]) - self.y(d[1]); })
             .attr("width", self.x.bandwidth());

       this.barchart.append("g")
           .attr("class", "axis")
           .attr("transform", "translate(0," + this.height + ")")
           .call(d3.axisBottom(this.x));

       this.barchart.append("g")
           .attr("class", "axis")
           .call(d3.axisLeft(this.y));
    // this.barchart.exit().remove();

  }
}

import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineChartGauss {
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
  private linechart;
  private focus;
  private x;
  private y;
  private focus_x;
  private gauss_x;
  private gauss_y;
  private gradientColor;
  private valueline;
  private focusline;
  private histogram;
  private brush;
  private center = 1.0;
  private sigma = 0.5;

  // set the dimensions and margins of the graph
  private width;
  private height;
  private x_size = 900;
  private y_size = 500;
  private lc_width = 50;
  private lc_height = 500;
  private focus_width = 50;
  private focus_height = 500;
  private focus_offset = 100;

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
      this.lc_width = this.width * 0.8;
      this.focus_width = this.width * 0.2 - this.margin.left;

      this.height = this.y_size - this.margin.top - this.margin.bottom;
      this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
      this.focus_height = this.y_size - this.margin.top - this.margin.bottom;

      this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;

      this.initChart()
      this.updateChart();
  }

  // Update the chart if the data changes
  dataMutated(splices) {
      if(this.data.length > 1) {
          this.updateChart();
          this.focus.selectAll("path.focusline").remove()
      }
      else {
          this.svg.selectAll(".line").remove()
          this.focus.selectAll(".bar").remove()
          this.focus.selectAll("path.focusline").remove()
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

  getGaussian() {
    let data = [];
    // let rnd = d3.randomNormal();
    let rnd = d3.randomUniform(-3, 3);

  // loop to populate data array with
  // probabily - quantile pairs
  for (var i = 0; i < 10000; i++) {
      let q = rnd() // calc random draw from uniform dist
      let p = this.gaussian(q, this.gauss_y.invert(this.center), this.sigma) // calc prob of rand draw
      let el = {
          "y": q,
          "x": p
      }
      data.push(el)
  };

  this.gradientColor.domain([0, d3.max(data, x => x["x"])])

  // need to sort for plotting
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     data.sort(function(a,b) {return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0);} );
     return data;

  };

  //taken from Jason Davies science library
  // https://github.com/jasondavies/science.js/
  gaussian(x, mean,  sigma) {
  	let gaussianConstant = 1 / Math.sqrt(2 * Math.PI);

      x = (x - mean) / sigma;
      return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
  }

  initChart() {
    let self = this;

    // Complete drawing area
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Linechart area
    this.linechart = this.svg
        .append("g")
        .attr("width", this.lc_width)
        .attr("height", this.lc_height)
        .attr("transform",
        "translate(" + this.margin.left + ", "+ this.margin.top +")");

    this.focus = this.svg
        .append("g")
        .attr("transform",
        "translate(" + this.focus_offset + ", "+ this.margin.top +")")

    this.focus
        .append("rect")
        .attr("width", this.focus_width)
        .attr("height", this.focus_height)
        .style("opacity", 0)
        .on("click", function(d) {
          let y = d3.mouse(this)[1];
          let out = new Map();

          self.center = self.y.invert(y);
          self.updateGauss();

          self.data.forEach(d => {
            out.set(
              d["id"],
              self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length-1][self.y_attribute]), self.gauss_y.invert(self.center), self.sigma))
            )
          })

          self.brushing = out;

          self.updateHighlight();
        })
        .moveToFront()

    // set the ranges
    this.x = d3.scaleLinear()
      .range([0, this.lc_width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);

    this.focus_x = d3.scaleLinear()
        .range([0, this.focus_width]);

    this.gauss_x = d3.scaleLinear()
    this.gauss_y = d3.scaleLinear()
      .domain([-3, 3])

    this.gradientColor = d3.scaleLinear()
      .range([0, 1])

    // add the x Axis
    this.linechart.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .attr("class", "xAxis");

      // x axis label
      this.linechart.append("text")
          .style("text-anchor", "middle")
          .attr("y", this.height+26)
          .attr("x", this.width/2)
          .text("days");

      // add the x Axis
      this.focus.append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .attr("class", "xAxis");

        // x axis label
        this.focus.append("text")
            .style("text-anchor", "middle")
            .attr("y", this.height+26)
            .attr("x", this.width/2)
            .text("day");

    // add the y Axis
    this.linechart.append("g")
      .attr("class", "yAxis")

      // y axis label
    this.linechart.append("text")
        .style("text-anchor", "middle")
        .attr("y", -4)
        .text((d) => { return this.y_attribute});

    // add the y Axis
    this.focus.append("g")
      .attr("transform", "translate("+ this.focus_width +", 0)")
      .attr("class", "yAxis")

      // y axis label
    this.focus.append("text")
        .style("text-anchor", "middle")
        .attr("y", -4)
        .attr("x", this.focus_width)
        .text((d) => { return this.y_attribute});

    // define the line
    this.valueline = d3.line()
        .x((d) => this.x(d[this.x_attribute]))
        .y((d) => this.y(d[this.y_attribute]));

    this.focusline = d3.line()
        .x((d) => this.focus_x(this.gauss_x(d["x"])))
        .y((d) => this.y(this.gauss_y(d["y"])));

    let y_attribute = this.y_attribute
  }

  updateHighlight() {
      let self = this;

      this.linechart.selectAll("path.line")
          .attr("opacity", function(d) {
            return d["highlight"]
          })
  }

  updateGauss() {
    let line_data = this.getGaussian();
    this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, d => d["x"]))

    this.focus.selectAll("path.focusline").remove();
    let focus_line = this.focus.selectAll("path.focusline")
        .data([line_data])

    // Distribution line
    focus_line.exit().remove();

    focus_line.enter()
      .append("path")
      .attr("class", "focusline")
      .attr("d", (d) => this.focusline(d))
      .moveToFront();
  }

  updateChart() {
    // Update domains
    let x_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[this.x_attribute]))
    let y_max = d3.max(this.data, (array) => d3.max<any, any>(array["data"], (d) => d[this.y_attribute]))
    let x_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[this.x_attribute]))
    let y_min = d3.min(this.data, (array) => d3.min<any, any>(array["data"], (d) => d[this.y_attribute]))

    let focus_data = <any> [];

     this.data.forEach((d: any[]) => {
         focus_data.push(d["data"][d["data"].length-1])
     })

    this.x.domain([x_min, x_max]);
    this.y.domain([y_min, y_max]);

    this.gauss_y.range(this.y.domain())

    // let bins = this.histogram(focus_data)
    let bins = d3.histogram()
        .value((d) => d[this.y_attribute])
        .domain(this.y.domain())
        .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))
        (focus_data);

    this.focus_x.domain([0, d3.max(bins, (d: any[]) => d.length)]);


    // Select chart
    this.linechart.selectAll("path.line").remove();
    let chart = this.linechart.selectAll("path.line")
        .data(this.data)


    this.focus.selectAll(".bar").remove();
    let focus_chart = this.focus.selectAll("rect.bars")
        .data(bins)

    // Update axis
    this.linechart.selectAll(".xAxis")
      .call(d3.axisBottom(this.x));
    this.linechart.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));

    this.focus.selectAll(".yAxis")
        .call(d3.axisRight(this.y));
    this.focus.selectAll(".xAxis")
        .call(d3.axisBottom(this.focus_x).ticks(2));

    // Linechart
    chart.exit().remove();

    chart.enter()
      .append("path")
      .attr("class", "line")
      .classed("highlight", function(this, d) {
          if(d["highlight"] == 1) { return true; }
          else { return false; }
      })
      .classed("background", function(this, d) {
          if(d["highlight"] == 2) { return true; }
          else { return false; }
      })
      .attr("d", (d) => this.valueline(d["data"]));

    // Barchart
    // Remove bars
    focus_chart.exit().remove();

    // Add bars
    focus_chart.enter().append("rect")
      .attr("class", "bar")
      .attr("transform", (d) => {
		  return "translate(0," + this.y(d.x1) + ")"; })
      .attr("width", (d) => { return  this.focus_x(d.length); })
      .attr("height", (d) => {
          return this.y(d.x0) - this.y(d.x1) - 1;
      })
      .moveToBack();

  }
}

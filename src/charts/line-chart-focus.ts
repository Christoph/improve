import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineChartFocus {
  // One-Way
  @bindable margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
  @bindable x_attribute = "x";
  @bindable y_attribute = "y";

  // Two-Way
  @bindable({ defaultBindingMode: bindingMode.twoWay }) mo;

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
  private focus_y;
  private focus_x;
  private valueline;
  private histogram;

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
    this.updateChart();
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
    this.linechart = this.svg
        .append("g")
        .attr("width", this.lc_width)
        .attr("height", this.lc_height)
        .attr("transform",
        "translate(" + this.margin.left + ", "+ this.margin.top +")");

    this.focus = this.svg
        .append("g")
        .attr("transform",
        "translate(" + this.focus_offset + ", "+ this.margin.top +")");

    // set the ranges
    this.x = d3.scaleLinear()
      .range([0, this.lc_width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);

    this.focus_x = d3.scaleLinear()
        .range([0, this.focus_width]);
    this.focus_y = d3.scaleLinear()
        .rangeRound([this.focus_height, 0]);

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
        .text((d) => { return this.y_attribute});

    // define the line
    this.valueline = d3.line()
        .x((d) => this.x(d[this.x_attribute]))
        .y((d) => this.y(d[this.y_attribute]));
  }

  updateChart() {
    // Update domains
    let x_max = d3.max(this.data, (array) => d3.max<any, any>(array, (d) => d[this.x_attribute]))
    let y_max = d3.max(this.data, (array) => d3.max<any, any>(array, (d) => d[this.y_attribute]))
    let x_min = d3.min(this.data, (array) => d3.min<any, any>(array, (d) => d[this.x_attribute]))
    let y_min = d3.min(this.data, (array) => d3.min<any, any>(array, (d) => d[this.y_attribute]))

    let focus_data = <any> []
     this.data.forEach((d: any[]) => {
         focus_data.push(d[d.length-1])
     })

    this.x.domain([x_min, x_max]);
    this.y.domain([y_min, y_max]);

    this.focus_y.domain([y_min, y_max]);

    // let bins = this.histogram(focus_data)
    let bins = d3.histogram()
        .value((d) => d[this.y_attribute])
        .domain(this.focus_y.domain())
        .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 10))
        (focus_data);

    this.focus_x.domain([0, d3.max(bins, (d: any[]) => d.length)]);

    // Select chart
    let chart = this.linechart.selectAll(".linechart")
      .data(this.data)

    let focus_chart = this.focus.selectAll(".focus")
        .data(bins)

    // Update axis
    this.linechart.selectAll(".xAxis")
      .call(d3.axisBottom(this.x));
    this.linechart.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));

    this.focus.selectAll(".yAxis")
        .call(d3.axisRight(this.focus_y));
    this.focus.selectAll(".xAxis")
        .call(d3.axisBottom(this.focus_x).ticks(2));

    // Linechart
    // Add and update bars
    chart.enter()
      .append("path")
      .attr("class", "line")
    //   .on("mouseover", (d) => {
    //     this.mo = d[this.x_attribute];
      //
    //     this.tooltip.transition()
    //       .duration(100)
    //       .style("opacity", .9);
    //     this.tooltip.html(d[this.x_attribute])
    //       .style("left", (this.x(d[this.x_attribute]) + this.x.bandwidth() / 2) + "px")
    //       .style("top", (this.y(d[this.y_attribute]) + 60) + "px");
    //   })
    //   .on("mouseout", (d) => {
    //     this.tooltip.transition()
    //       .duration(500)
    //       .style("opacity", 0);
    //   })
      .merge(chart)
      .attr("d", (d) => this.valueline(d));

    // Remove bars
    chart.exit().remove();

    // Barchart
    // Add and update bars
    focus_chart.enter()
      .append("rect")
      .attr("class", "bar")
      .merge(focus_chart)
      .attr("x", 1)
      .attr("transform", (d) => {
		  return "translate(0," + this.focus_y(d.x1) + ")"; })
      .attr("width", (d) => { return this.focus_width - this.focus_x(d.length); })
      .attr("height", (d) => {
          return this.focus_y(d.x0) - this.focus_y(d.x1) - 1;
      });

    // Remove bars
    focus_chart.exit().remove();
  }
}

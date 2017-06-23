import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

@inject(Element, BindingEngine)
@noView()
export class LineChart {
  // One-Way
  @bindable margin = { top: 20, right: 20, bottom: 35, left: 60 };
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
  private x;
  private y;
  private valueline;

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
      this.x_size = this.element.parentElement.offsetWidth
      this.y_size = this.element.parentElement.offsetHeight

      this.width = this.x_size - this.margin.left - this.margin.right;
      this.height = this.y_size - this.margin.top - this.margin.bottom;

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
    // append the svg object to the chart div of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
      "translate(" + this.margin.left + "," + this.margin.top + ")");

    // set the ranges
    this.x = d3.scaleLinear()
      .range([0, this.width]);
    this.y = d3.scaleLinear()
      .range([this.height, 0]);

    // add the x Axis
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .attr("class", "xAxis");

      // x axis label
      this.svg.append("text")
          .style("text-anchor", "middle")
          .attr("y", this.height+26)
          .attr("x", this.width/2)
          .text("days");

    // add the y Axis
    this.svg.append("g")
      .attr("class", "yAxis")

      // y axis label
    this.svg.append("text")
        .style("text-anchor", "middle")
        .attr("y", -4)
        .text((d) => { return this.y_attribute}));

    // define the line
    this.valueline = d3.line()
        .x((d) => this.x(d[this.x_attribute]))
        .y((d) => this.y(d[this.y_attribute]));
  }

  updateChart() {
    // Update domains
    let x_max = d3.max(this.data, (array) => d3.max<any, any>(array, (d) => d[this.x_attribute]))
    let y_max = d3.max(this.data, (array) => d3.max<any, any>(array, (d) => d[this.y_attribute]))

    this.x.domain([0, x_max]);
    this.y.domain([0, y_max]);

    // Select chart
    let chart = this.svg.selectAll(".svg")
      .data(this.data)

    // Update axis
    this.svg.selectAll(".xAxis")
      .call(d3.axisBottom(this.x));
    this.svg.selectAll(".yAxis")
      .call(d3.axisLeft(this.y));

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
  }
}

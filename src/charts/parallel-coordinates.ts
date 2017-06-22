import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

declare var ParCoords: any;

@inject(Element, BindingEngine)
@noView()
export class parallelCoordinates {
    // One-Way
    @bindable margin = { top: 20, right: 20, bottom: 30, left: 40 };
    @bindable x_size = 900;
    @bindable y_size = 500;
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
    // private tooltip;
    private x;
    private y = {};
    private dragging = {};
    private dimensions;
    // private actives;
    // private brush;
    // private brushstart;
    private line;
    private axis;
    private background;
    private foreground;

    // set the dimensions and margins of the graph
    private width;
    private height;

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

    // Global d3 functions
    position(d) {
        var v = this.dragging[d];
        return v == null ? this.x(d) : v;
    }

    path(d) {
        return this.line(this.dimensions.map((p) => {
            return [this.position(p), this.y[p](d[p])]; }));
    }

    brushHighlight(g, y, foreground) {
        let actives = [];
        let extents = [];

        g.selectAll(".brush")
          .filter(function(d) {
            return d3.brushSelection(this);
          })
          .each(function(d) {
            actives.push(d)
            extents.push([y[d].invert(d3.brushSelection(this)[1]), y[d].invert(d3.brushSelection(this)[0])])
          });

          foreground.style("display", function(d) {
              return actives.every(function(p, i) {
                return extents[i][0] <= d[p] && d[p] <= extents[i][1];
              }) ? null : "none";
          });
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
        this.x = d3.scalePoint()
            .range([0, this.width]);

        this.axis = d3.axisLeft()
        this.line = d3.line();
    }

    updateChart() {

        this.dimensions = d3.keys(this.data[0]).filter((d) => {
            return d != "name"
        });

        this.dimensions.map((dim) => {
            this.y[dim] = d3.scaleLinear()
                    .range([this.height, 0])
                    .domain(d3.extent(this.data, (data) => {
                        return data[dim];
                    }))
        });

        this.x.domain(this.dimensions);

        // Add grey background lines for context.
        this.background = this.svg.append("g")
            .attr("class", "background")
            .selectAll("path")
            .data(this.data)
            .enter().append("path")
            .attr("d", (d) => { return this.path(d)});

        // Add blue foreground lines for focus.
        this.foreground = this.svg.append("g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(this.data)
            .enter().append("path")
            .attr("d", (d) => { return this.path(d)});

        // Create local versions of class variables
        let height = this.height;
        let x = this.x;
        let y = this.y;
        let axis = this.axis;
        let foreground = this.foreground;
        let brushHighlight = this.brushHighlight;

        let g = this.svg.selectAll(".dimension")
            .data(this.dimensions)
          .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", (d) => {
                return "translate(" + x(d) + ")"; });

        g.append("g")
            .each(function(d) {
                 d3.select(this).call(axis.scale(y[d])););

        g.append("text")
            .style("text-anchor", "middle")
            .attr("y", -9)
            .text((d) => { return d; });

        // Add and store a brush for each axis.
        g.append("g")
            .attr("class", "brush")
            .each(function(d) {
                 d3.select(this).call(d3.brushY()
                .extent([[-9,0], [9, height]])
                 .on("start", (d, i) => {
                     d3.event.sourceEvent.stopPropagation();
                 })
                 .on("brush", (d, i) => {
                     if (!d3.event.sourceEvent) return; // Only transition after input.
                    if (!d3.event.selection) return; // Ignore empty selections.

                    brushHighlight(g, y, foreground)
                })
                .on("end", (d, i) => {
                    if (d3.brushSelection(this) == null) {
                        brushHighlight(g, y, foreground)
                    }

                })
            ));
            }
        }
    }
}

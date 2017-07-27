import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

declare var ParCoords: any;

@inject(Element, BindingEngine)
@noView()
export class parallelCoordinatesVertical {
    // One-Way
    @bindable margin = { top: 60, right: 20, bottom: 30, left: 40 };

    // Two-Way
    @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing;

    // Observed Variables
    @bindable data = [];

    // Aurelia variables
    private element;
    private subscription;

    // D3 variables
    private svg;
    private x = {};
    private y;
    private dimensions = <any>[];
    private line;
    private background;
    private foreground;

    // set the dimensions and margins of the graph
    private x_size = 500;
    private y_size = 500;
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
        this.x_size = this.element.parentElement.offsetWidth
        this.y_size = this.element.parentElement.offsetHeight

        this.width = this.x_size - this.margin.left - this.margin.right;
        this.height = this.y_size - this.margin.top - this.margin.bottom;

        // Draw the graph
        this.initChart()
        this.updateChart();
    }

    // Update the chart if the data changes
    dataMutated(splices) {
        this.updateChart();
    }

    // Remove the watcher after disposing the class
    unbind() {
        this.subscription.dispose();
    }

    // D3 functions
    private exportBrushing(brushing) {
        this.brushing = brushing;
    }

    // Draw the lines
    private path(d) {
        return this.line(this.dimensions.map((p) => {
            return [this.x[p](d[p]), this.y(p)]; }));
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

        // set the x range
        this.y = d3.scalePoint()
            .range([0, this.height]);

        // Basic initialization
        this.line = d3.line()
        .curve(d3.curveMonotoneY);
    }

    updateChart() {
        // Get current dataset dimensions: Keys of the map
        if(this.data.length > 0) {
            this.dimensions = d3.keys(this.data[0]["data"]).filter((d) => {
                return d != "name"
            });
        }

        // Create corresponding y axis
        // Currently only linear values
        this.dimensions.map((dim) => {
            let ext = <any> d3.extent(this.data, (data) => {
                return data["data"][dim];
            })

            if(ext[0] == ext[1]) {
                ext[0] -= ext[0]*0.1;
                ext[1] += ext[1]*0.1;
            }

            this.x[dim] = d3.scaleLinear()
                    .range([this.width, 0])
                    .domain(ext)
        });

        // Create the x axis
        this.y.domain(this.dimensions);

        // Add grey background lines for context.
        this.background = this.svg.append("g")
            .attr("class", "line")
            .selectAll("path")
            .data(this.data)
            .enter().append("path")
            .attr("d", (d) => { return this.path(d["data"])});

        // Create local versions of class variables
        // This is necessary due to the nature of TS and D3

        let width = this.width
        let x = this.x;
        let exportBrushing = this.exportBrushing;
        let dat = this.data

        // Create drawing area
        let g = this.svg.selectAll(".dimension")
            .data(this.dimensions)
          .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", (d) => {
                return "translate(0," + this.y(d) + ")"; });

        // Add axis
        g.append("g")
            .each(function(this, d) {
                 d3.select(this).call(d3.axisTop(x[d]));
             });

        // Add tiltes for the axis
        g.append("text")
            .style("text-anchor", "middle")
            .attr("y", -9)
            .attr("transform", "rotate(-90)")
            .text((d) => { return d; });

        // Add and store a brush for each axis.
        g.append("g")
            .attr("class", "brush")
            .each(function(this, d) {
                 d3.select(this).call(d3.brushX()
                .extent([[0, -9], [width, 9]])
                .on("end", () => {
                     if (!d3.event.sourceEvent) return; // Only transition after input.

                    let temp = new Set();

                    g.selectAll(".brush")
                      .filter(function(this, d) {
                        return d3.brushSelection(this);
                      })
                      .each(function(this, d) {
                          let brush_selection =  d3.brushSelection(this)
                          let extent = <any>[]
                          if(brush_selection != null) {
                              extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])]
                            }

                          dat.forEach((datum) => {
                              if(datum["data"][d] >= extent[0] && datum["data"][d] <= extent[1]) {
                                  temp.add(datum["id"])
                              }
                          })

                      });

                    exportBrushing(Array.from(temp));
                })
            );
        })
    }
}

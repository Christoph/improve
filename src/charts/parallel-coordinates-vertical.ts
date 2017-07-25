import * as d3 from "d3";
import {inject, noView, bindable, bindingMode, BindingEngine} from 'aurelia-framework';

declare var ParCoords: any;

@inject(Element, BindingEngine)
@noView()
export class parallelCoordinatesVertical {
    // One-Way
    @bindable margin = { top: 60, right: 20, bottom: 30, left: 40 };

    // Two-Way
    @bindable({ defaultBindingMode: bindingMode.twoWay }) brushing = new Map();

    // Observed Variables
    @bindable data = [];

    // Aurelia variables
    private element;
    private subscription;

    // D3 variables
    private svg;
    private x = {};
    private y;
    private dimensions;
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

    // Draw the lines
    private path(d) {
        return this.line(this.dimensions.map((p) => {
            return [this.x[p](d[p]), this.y(p)]; }));
    }

    // Display active lines
    private brushHighlight(g, x, foreground) {
        let actives = <any>[];
        let extents = <any>[];

        // Find out what is within the brushes
        g.selectAll(".brush")
          .filter(function(this, d) {
            return d3.brushSelection(this);
          })
          .each(function(this, d) {
            let brush_selection =  d3.brushSelection(this)

            if(brush_selection != null)
            {
                actives.push(d)
                extents.push([x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])])
            }
          });

          // Bring brushed lines into foreground
          foreground.style("display", function(d) {
              return actives.every(function(p, i) {
                return extents[i][0] <= d[p] && d[p] <= extents[i][1];
              }) ? null : "none";
          });
    }

    // Update external variables with current brushes
    private getBrushing(g, x, brushing) {
        g.selectAll(".brush")
          .filter(function(this, d) {
            return d3.brushSelection(this);
          })
          .each(function(this, d) {
              let brush_selection =  d3.brushSelection(this)

              if(brush_selection != null){
                brushing.set(d, [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])])
            }

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

        // set the x range
        this.y = d3.scalePoint()
            .range([0, this.height]);

        // Basic initialization
        this.line = d3.line()
        .curve(d3.curveMonotoneY);
    }

    updateChart() {
        // Get current dataset dimensions: Keys of the map
        this.dimensions = d3.keys(this.data[0]).filter((d) => {
            return d != "name"
        });

        // Create corresponding y axis
        // Currently only linear values
        this.dimensions.map((dim) => {
            let ext = <any> d3.extent(this.data, (data) => {
                return data[dim];
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
        // This is necessary due to the nature of TS and D3
        let height = this.height;
        let width = this.width;
        let x = this.x;
        let y = this.y;
        let foreground = this.foreground;
        let brushHighlight = this.brushHighlight;
        let getBrushing = this.getBrushing;
        let brushing = this.brushing;

        // Create drawing area
        let g = this.svg.selectAll(".dimension")
            .data(this.dimensions)
          .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", (d) => {
                return "translate(0," + y(d) + ")"; });

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
            // This part is very important!
            // function(d) is used instead of (d) =>
            // The reason is that within function(d) this is the element
            // and this within (d) => is the TS class which means you need a local version of class variables
            // for everything used within function(d)
            .each(function(this, d) {
                 d3.select(this).call(d3.brushX()
                .extent([[0, -9], [width, 9]])
                 .on("start", (d, i) => {
                     d3.event.sourceEvent.stopPropagation();
                 })
                 .on("brush", (d, i) => {
                     if (!d3.event.sourceEvent) return; // Only transition after input.
                    if (!d3.event.selection) return; // Ignore empty selections.

                    brushHighlight(g, x, foreground)
                })
                .on("end", (d, i) => {
                    // Check if brush was removed
                    if (d3.brushSelection(this) == null) {
                        brushHighlight(g, x, foreground)

                        brushing.delete(d)
                    }

                    getBrushing(g, x, brushing)
                })
            );
        })
    }
}

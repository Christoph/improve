import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {SmallWorld} from "../models/small-world"
import * as d3 from "d3"

@autoinject
export class Playground {
    @observable brushing_p;
    redraw;

    inFilter = []
    outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);

    // Population count
    grid_selected = 100;
    mating_selected = 1;

    data_grid = <any[]> []
    data_FScore = <any[]> []

    current_filter = new Set();

    collapsed_input = false;
    collapsed_grid = false;
    collapsed_out = true;

    timeout;

    switch() {
      this.collapsed_input = this.collapsed_input == true ? false : true;
      this.collapsed_grid = this.collapsed_grid == true ? false : true;
      this.collapsed_out = this.collapsed_out == true ? false : true;
    }

    attached() {
        // Attaching range sliders
        $("#mating").ionRangeSlider({
            min: 1,
            max: 100,
            from: 1,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
              this.mating_selected = data["from"]
        }});
        $("#grid_length").ionRangeSlider({
            min: 10,
            max: 1000,
            from: 100,
            step: 1,
            type: "single",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
              this.redrawGrid()
              this.grid_selected = data["from"]
        }});
    }

    redrawGrid() {
        this.redraw = this.redraw == 0 ? 1 : 0;
    }

    stopSimulation() {
      clearTimeout(this.timeout);
    }

    compute() {
        this.collapsed_input = true;
        this.collapsed_out = false;
        this.collapsed_grid = false;

        // Initialize Spatial Migration Simulation
        let spatial = new SmallWorld(this.mating_selected, this.grid_selected)

        spatial.init_simulation(this.data_grid)

        this.timeout = setInterval( () => {spatial.run_simulation(this.data_grid, this.data_FScore)}, 200)
      }
}

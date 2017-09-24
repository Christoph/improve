import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {SpatialSir} from "../models/spatial-sir"
import * as d3 from "d3"
import * as _ from "lodash"

@autoinject
export class Epidemics {
    @observable brushing_sus;
    @observable brushing_inf;
    @observable brushing_rec;
    redraw_sus;
    redraw_rec;
    redraw_inf;

    @observable brushing_parallel;
    @observable selected_line;
    simulation_button_text = "Select a line above!";
    simulation_button_activated = true;
    redraw_parallel;

    timeout;

    inFilter = []
    outFilterList = new Map([
      ["sus", new Map()],
      ["inf", new Map()],
      ["rec", new Map()]
    ]);

    // Grid
    grid_selected = 100;
    generations = 40;
    samples = 100;

    // Alpha
    alpha_from = 0.05;
    alpha_to = 0.1;

    // Beta
    beta_from = 0.1;
    beta_to = 0.2;

    // Gamma
    gamma_from = 0.05;
    gamma_to = 0.1;

    // Data
    data_grid = <any[]> []
    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_lines_original = <any[]> []
    data_length = 0;

    current_filter = new Set();

    collapsed_input = false;
    collapsed_parallel = false;
    collapsed_grid = false;

    spatial;
    simulation_counter;

    switch() {
      this.collapsed_input = this.collapsed_input == true ? false : true;
      this.collapsed_grid = this.collapsed_grid == true ? false : true;
      this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
    }

    attached() {
        // Attaching range sliders
        $("#alpha").ionRangeSlider({
            min: 0,
            max: 0.2,
            from: 0.05,
            to: 0.1,
            step: 0.001,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.alpha_from = data["from"]
            this.alpha_to = data["to"]
        }});
        $("#beta").ionRangeSlider({
            min: 0,
            max: 1,
            from: 0.1,
            to: 0.2,
            step: 0.01,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.beta_from = data["from"]
            this.beta_to = data["to"]
        }});
        $("#gamma").ionRangeSlider({
            min: 0,
            max: 1,
            from: 0.05,
            to: 0.1,
            step: 0.01,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.gamma_from = data["from"]
            this.gamma_to = data["to"]
        }});
    }

    brushing_susChanged() {
        this.updateOutData(this.brushing_sus, "sus");
        this.updateInData(this.brushing_sus);
    }

    brushing_recChanged() {
        this.updateOutData(this.brushing_rec, "rec");
        this.updateInData(this.brushing_rec);
    }

    brushing_infChanged() {
        this.updateOutData(this.brushing_inf, "inf");
        this.updateInData(this.brushing_inf);
    }

    brushing_parallelChanged() {
        this.updateParallelData(this.brushing_parallel);
        this.filterOutData(this.brushing_parallel);
    }

    selected_lineChanged() {
      this.simulation_button_text = "Show Simulation: "
      this.simulation_button_activated = false;
    }

    redrawLinecharts() {
        this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
        this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
        this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
    }

    private updateOutData(mapping, attribute) {
      let average = new Map();

      // Set current filter
      this.outFilterList.set(attribute, mapping);

      // Update average filter
      mapping.forEach((v, k) => {
        let temp = 0;

        this.outFilterList.forEach((iv, ik) => {
          if(iv.size > 0) temp  = temp + iv.get(k);
        })

        temp = temp/this.outFilterList.size;

        average.set(k, temp)
      })

      // Set line highlight
      this.data_lines.forEach(x => {
        x["highlight"] = average.get(x["id"])
      })

      this.redrawLinecharts();
      }

    private updateInData(mapping) {
      if(this.inFilter.length > 0) {
        this.data_parallel
          .filter(x => this.inFilter.includes(x["id"]))
          .forEach(x => {
            x["highlight"] = mapping.get(x["id"])
          })
      }
      else {
        this.data_parallel
          .forEach(x => {
            x["highlight"] = mapping.get(x["id"])
          })
      }

        this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    }

    private updateParallelData(ids) {
        this.inFilter = ids;

        if(ids.length > 0) {
          this.data_parallel.forEach(x => {
            if(ids.includes(x["id"])) {
              x["highlight"] = 1;
            }
            else {
              x["highlight"] = 0;
            }
          })
        }
        else {
          this.data_parallel.forEach(x => {
            x["highlight"] = 1;
          })
        }

        this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    }

    private filterOutData(ids) {
        if(ids.length > 1) {
            let highlight_list = new Set(ids);

            this.data_lines.length = 0

            this.data_lines.push(...this.data_lines_original.filter(x => highlight_list.has(x["id"])))

            // Save current filter
            this.current_filter = highlight_list;
        }
        else {
            this.data_lines.length = 0
            this.data_lines.push(...this.data_lines_original)
        }
    }

    update_Grid(){
      this.data_grid.length = 0;
      this.data_grid.push(..._.clone(this.spatial.grids[this.selected_line][this.simulation_counter]))

      if(this.simulation_counter < this.spatial.grids[this.selected_line].length) {
        setTimeout(() => this.update_Grid(), 50);
        this.simulation_counter++;
      }
    }


    simulate() {
        this.simulation_counter = 0;
        this.update_Grid();
    }

    compute() {
        this.collapsed_parallel = false;
        this.collapsed_input = true;
        this.collapsed_grid = false;

        // Initialize Spatial Migration Simulation
        this.spatial = new SpatialSir(this.grid_selected, [this.alpha_from, this.alpha_to], [this.beta_from, this.beta_to], [this.gamma_from, this.gamma_to])
        this.spatial.compute_model(this.samples, this.generations)

        this.spatial.simulation_data.forEach( (sol, run) => {
          let temp = <any[]> []
          for (let i = 0; i < sol.length; i++) {
              temp.push({
                  x: i,
                  rec: sol[i].rec,
                  inf: sol[i].inf,
                  sus: sol[i].sus
              })
          }

          this.data_parallel.push({
                  id: run,
                  highlight: 0,
                  data: {
                      alpha: this.spatial.params[run][0],
                      beta: this.spatial.params[run][1],
                      gamma: this.spatial.params[run][2]
                  }
          })

          this.data_lines_original.push({
                  id: run,
                  highlight: 0,
                  data: temp
          })
        })

        this.data_length = this.data_lines_original.length;
        this.filterOutData([])
      }
}

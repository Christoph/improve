import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {Genetic} from "../models/genetic"
import {SpatialMigration} from "../models/spatial-migration"
import * as d3 from "d3"

@autoinject
export class Migration {
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

    // brushing_pChanged() {
    //     this.updateOutData(this.brushing_p, "p");
    //     this.updateInData(this.brushing_p);
    // }
    //
    // brushing_popChanged() {
    //     this.updateOutData(this.brushing_pop, "pop");
    //     this.updateInData(this.brushing_pop);
    // }
    //
    // brushing_parallelChanged() {
    //     this.updateParallelData(this.brushing_parallel);
    //     this.filterOutData(this.brushing_parallel);
    // }

    redrawGrid() {
        this.redraw = this.redraw == 0 ? 1 : 0;
    }

    // private updateOutData(mapping, attribute) {
    //   let average = new Map();
    //
    //   // Set current filter
    //   this.outFilterList.set(attribute, mapping);
    //
    //   // Update average filter
    //   mapping.forEach((v, k) => {
    //     let temp = 0;
    //
    //     this.outFilterList.forEach((iv, ik) => {
    //       if(iv.size > 0) temp  = temp + iv.get(k);
    //     })
    //
    //     temp = temp/this.outFilterList.size;
    //
    //     average.set(k, temp)
    //   })

      // Set line highlight
      // this.data_lines.forEach(x => {
      //   x["highlight"] = average.get(x["id"])
      // })

    // private updateInData(mapping) {
    //   if(this.inFilter.length > 0) {
    //     this.data_parallel
    //       .filter(x => this.inFilter.includes(x["id"]))
    //       .forEach(x => {
    //         x["highlight"] = mapping.get(x["id"])
    //       })
    //   }
    //   else {
    //     this.data_parallel
    //       .forEach(x => {
    //         x["highlight"] = mapping.get(x["id"])
    //       })
    //   }
    //
    //     this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    // }
    //
    // private updateParallelData(ids) {
    //     this.inFilter = ids;
    //
    //     if(ids.length > 0) {
    //       this.data_parallel.forEach(x => {
    //         if(ids.includes(x["id"])) {
    //           x["highlight"] = 1;
    //         }
    //         else {
    //           x["highlight"] = 0;
    //         }
    //       })
    //     }
    //     else {
    //       this.data_parallel.forEach(x => {
    //         x["highlight"] = 1;
    //       })
    //     }
    //
    //     this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    // }
    //
    // private filterOutData(ids) {
    //     if(ids.length > 1) {
    //         let highlight_list = new Set(ids);
    //
    //         this.data_lines.length = 0
    //
    //         this.data_lines.push(...this.data_lines_original.filter(x => highlight_list.has(x["id"])))
    //
    //         // Save current filter
    //         this.current_filter = highlight_list;
    //     }
    //     else {
    //         this.data_lines.length = 0
    //         this.data_lines.push(...this.data_lines_original)
    //     }
    // }

    stopSimulation() {
      clearTimeout(this.timeout);
    }

    compute() {
        this.collapsed_input = true;
        this.collapsed_out = false;
        this.collapsed_grid = false;

        // Initialize Spatial Migration Simulation
        let spatial = new SpatialMigration(this.mating_selected, this.grid_selected)

        spatial.init_simulation(this.data_grid)

        this.timeout = setInterval( () => {spatial.run_simulation(this.data_grid, this.data_FScore)}, 200)

        // Create model params
        // let gen = new Genetic([this.event_from, this.event_to],[this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations)
        //
        // let model = gen.compute_model()

        // model.forEach( (sol, run) => {
        //   let temp = <any[]> []
        //   for (let i = 0; i < sol.length; i++) {
        //       temp.push({
        //           "x": gen.time_range[i],
        //           "p": sol[i].p,
        //           "pop": sol[i].pop
        //       })
        //   }

        //   this.data_parallel.push({
        //           "id": run,
        //           "highlight": 0,
        //           "data": {
        //               "pop": gen.params[run][0],
        //               "P(event)": gen.params[run][1],
        //               "Remaining": gen.params[run][2]
        //           }
        //   })
        //
        //   this.data_lines_original.push({
        //           "id": run,
        //           "highlight": 0,
        //           "data": temp
        //   })
        // })
        //
        // this.data_length = this.data_lines_original.length;
        // this.filterOutData([])
      }
}

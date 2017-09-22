import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {Genetic} from "../models/genetic"
import * as d3 from "d3"

@autoinject
export class Drift {
    @observable brushing_p;
    @observable brushing_pop;
    redraw_p;
    redraw_pop;

    @observable brushing_parallel;
    redraw_parallel;

    inFilter = []

    // Genetic Model
    simulations = 100;
    generations = 100;

    // Population count
    pop_from = 0;
    pop_to = 1000;

    // Probability of event
    event_from = 0.1;
    event_to = 0.2;

    // Sobol sampling
    sobol_n = 100

    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_lines_original = <any[]> []
    data_length = 0;

    current_filter = new Set();

    attached() {
        // Attaching range sliders
        $("#pop").ionRangeSlider({
            min: 1,
            max: 10000,
            from: 500,
            to: 1000,
            step: 1,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.pop_from = data["from"]
            this.pop_to = data["to"]
        }});
        $("#event").ionRangeSlider({
            min: 0.01,
            max: 1,
            from: 0.1,
            to: 0.2,
            step: 0.01,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.event_from = data["from"]
            this.event_to = data["to"]
        }});
    }

    brushing_pChanged() {
        this.updateOutData(this.brushing_p);
        this.updateInData(this.brushing_p);
    }

    brushing_popChanged() {
        this.updateOutData(this.brushing_pop);
        this.updateInData(this.brushing_pop);
    }

    redrawLinecharts() {
        this.redraw_p = this.redraw_p == 0 ? 1 : 0;
        this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
    }

    private updateOutData(mapping) {
        this.data_lines.forEach(x => {
          x["highlight"] = mapping.get(x["id"])
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

    compute() {
        // Create model params
        let gen = new Genetic([this.event_from, this.event_to],[this.pop_from, this.pop_to], this.generations)

        let model = gen.compute_model(this.simulations)

        model.forEach( (sol, run) => {
          let temp = <any[]> []
          for (let i = 0; i < sol.length; i++) {
              temp.push({
                  "x": gen.time_range[i],
                  "p": sol[i].p,
                  "pop": sol[i].pop
              })
          }

          this.data_parallel.push({
                  "id": run,
                  "highlight": 0,
                  "data": {
                      "pop": gen.params[run][0],
                      "prob": gen.params[run][1]
                  }
          })

          this.data_lines_original.push({
                  "id": run,
                  "highlight": 0,
                  "data": temp
          })
        })

        this.data_length = this.data_lines_original.length;
        this.filterOutData([])
      }
}

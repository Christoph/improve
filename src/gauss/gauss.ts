import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {SIR} from "../models/sir"
import * as d3 from "d3"

// This magic line removed the error messages for numeric
declare var numeric: any;
declare var lobos: any;

@autoinject
export class Gauss {
    @observable brushing_pop;
    @observable brushing_sus;
    @observable brushing_inf;
    @observable brushing_rec;
    redraw_pop;
    redraw_sus;
    redraw_inf;
    redraw_rec;

    @observable brushing_parallel;
    redraw_parallel;

    inFilter = []

    // SIR Model
    TS = 1.0
    NY = 1
    ND = this.NY*365

    S0 = 0.1
    I0 = 1e-4
    R0 = 1 - this.S0 - this.I0

    // Mortality probabilty, I dies before natural death or recovery
    rho = 0.5
    rho_n = 5;
    rho_from = 40;
    rho_to = 60;
    // Per captia death rate  from natural causes
    v = 1/(70*365.0)
    v_n = 5;
    v_from = 70
    v_to = 80
    // Population birth rate
    mu = 1/(70*365.0);
    mu_n = 5;
    mu_from = 70;
    mu_to = 180;
    // Transmission rate: I -> S. Includes encounter and transmission rate
    beta = 520/365.0
    beta_n = 5;
    beta_from = 0.9
    beta_to = 1.1
    // Recovery rate
    gamma=1/7.0
    gamma_n = 5;
    gamma_from = 4;
    gamma_to = 6;

    // Sobol sampling
    sobol_n = 100

    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_lines_original = <any[]> []
    data_length = 0;

    current_filter = new Set();

    attached() {
        // Attaching range sliders
        $("#rho").ionRangeSlider({
            min: 0,
            max: 100,
            from: 40,
            to: 60,
            step: 1,
            type: "double",
            postfix: "%",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.rho_from = data["from_pretty"]
            this.rho_to = data["to_pretty"]
        }});
        $("#v").ionRangeSlider({
            min: 10,
            max: 150,
            from: 70,
            to: 80,
            step: 1,
            type: "double",
            prefix: "1/",
            postfix: " per year",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.v_from = data["from_pretty"]
            this.v_to = data["to_pretty"]
        }});
        $("#mu").ionRangeSlider({
            min: 10,
            max: 150,
            from: 70,
            to: 80,
            step: 1,
            type: "double",
            prefix: "1/",
            postfix: " per year",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.mu_from = data["from_pretty"]
            this.mu_to = data["to_pretty"]
        }});
        $("#beta").ionRangeSlider({
            min: 0,
            max: 2,
            from: 0.9,
            to: 1.1,
            step: 0.1,
            type: "double",
            postfix: " per day",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.gamma_from = data["from_pretty"]
            this.gamma_to = data["to_pretty"]
        }});
        $("#gamma").ionRangeSlider({
            min: 1,
            max: 20,
            from: 4,
            to: 6,
            step: 1,
            type: "double",
            prefix: "1/",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.gamma_from = data["from_pretty"]
            this.gamma_to = data["to_pretty"]
        }});
    }

    brushing_popChanged() {
        this.updateOutData(this.brushing_pop);
        this.updateInData(this.brushing_pop);
    }

    brushing_susChanged() {
        this.updateOutData(this.brushing_sus);
        this.updateInData(this.brushing_sus);
    }

    brushing_recChanged() {
        this.updateOutData(this.brushing_rec);
        this.updateInData(this.brushing_rec);
    }

    brushing_infChanged() {
        this.updateOutData(this.brushing_inf);
        this.updateInData(this.brushing_inf);
    }

    brushing_parallelChanged() {
        this.updateParallelData(this.brushing_parallel);
        this.filterOutData(this.brushing_parallel);
        // this.redrawLinecharts();
    }

    redrawLinecharts() {
        this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
        this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
        this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
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

    vspa() {
        // Create model params
        let sir = new SIR(
          [this.rho_from, this.rho_to],
          [this.v_from, this.v_to],
          [this.mu_from, this.mu_to],
          [this.beta_from, this.beta_to],
          [this.gamma_from, this.gamma_to],
          this.NY, this.S0, this.I0)

          let model = sir.compute_model(this.sobol_n)

          model.forEach( (sol, run) => {
            let temp = <any[]> []
            for (let i = 0; i < sol.length; i++) {
                temp.push({
                    "x": sir.time_range[i],
                    "sus": sol[i][0],
                    "inf": sol[i][1],
                    "rec": sol[i][2],
                    "pop": sol[i][0] + sol[i][1] + sol[i][2]
                })
            }

            this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "rho": sir.params[run][0],
                        "v": sir.params[run][1],
                        "mu": sir.params[run][2],
                        "beta": sir.params[run][3],
                        "gamma": sir.params[run][4]
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

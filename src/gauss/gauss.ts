import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import * as d3 from "d3"

// This magic line removed the error messages for numeric
declare var numeric: any;
declare var lobos: any;

@autoinject
export class Gauss {
    // VPSA
    param1 = 1;
    param2 = 1;
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

    test = 100
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

    INPUT = [this.S0, this.I0, this.R0]

    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_lines_original = <any[]> []
    data_length = 0;

    lines = <any[]> []
    parallel = <any[]> []

    all_ids = new Set();
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
        // Update variables
        this.ND = this.NY*365
        this.R0 = 1 - this.S0 - this.I0
        this.INPUT = [+this.S0, +this.I0, +this.R0]

        let params = this.get_params("sobol")
        let time_range = <any[]> []

        for (let i = 0; i < this.ND; i++) {
            time_range.push(i)
        }

        params.forEach( (d, run) => {
            this.rho = d[0];
            this.v = d[1];
            this.mu = d[2];
            this.beta = d[3];
            this.gamma = d[4];

            let sol = numeric.dopri(0, this.ND, this.INPUT, this.SIR, 1e-6, 5000);

            let out = sol.at(time_range)

            let temp = <any[]> []
            for (let i = 0; i < out.length; i++) {
                temp.push({
                    "x": time_range[i],
                    "sus": out[i][0],
                    "inf": out[i][1],
                    "rec": out[i][2],
                    "pop": out[i][0] + out[i][1] + out[i][2]
                })
            }

            this.all_ids.add(run)

            this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "rho": this.rho,
                        "v": this.v,
                        "mu": this.mu,
                        "beta": this.beta,
                        "gamma": this.gamma
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


    private SIR = (t, INP) => {
    	let Y = [0, 0 ,0]
    	let V = INP

        Y[0] = this.v - this.beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - this.mu * V[0]
    	Y[1] = this.beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - (this.gamma + this.mu) * V[1]/(1-this.rho)
    	Y[2] = this.gamma * V[1] - this.mu * V[2]

    	return Y
    }

    cartesian(arg) {
        let r = <any[]> [];
        // let arg = arguments;
        let max = arg.length-1;

        function helper(arr, i) {
            for (var j=0, l=arg[i].length; j<l; j++) {
                var a = arr.slice(0); // clone arr
                a.push(arg[i][j]);
                if (i==max)
                    r.push(a);
                else
                    helper(a, i+1);
            }
        }
        helper([], 0);
        return r;
    }

    getRandom(n, min, max) {
        return Array.from({length: n}, () => Math.random() * (max - min) + min);
    }

    getRandomInt(n, min, max) {
        return Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }

    getParamsFromSobol(points) {
        let params = <any>[];

        let rho_scale = d3.scaleLinear()
          .domain([0, 1])
          .range([this.rho_from, this.rho_to]);
        let v_scale = d3.scaleLinear()
          .domain([0, 1])
          .range([this.v_from, this.v_to]);
        let mu_scale = d3.scaleLinear()
          .domain([0, 1])
          .range([this.mu_from, this.mu_to]);
        let beta_scale = d3.scaleLinear()
          .domain([0, 1])
          .range([this.beta_from, this.beta_to]);
        let gamma_scale = d3.scaleLinear()
          .domain([0, 1])
          .range([this.gamma_from, this.gamma_to]);

        points.forEach( d => {
            params.push([
                Math.round(rho_scale(d[0]))/100,
                1/(Math.round(v_scale(d[1]))*365),
                1/(Math.round(mu_scale(d[2]))*365),
                beta_scale(d[3]),
                1/Math.round(gamma_scale(d[4]))
            ])
        })

        return params
    }

    get_params(sampling) {
        if(sampling == "rnd") {
            let rho = this.getRandom(this.rho_n, this.rho_from/100, this.rho_to/100)
            let v = this.getRandom(this.v_n, 1/(this.v_from*365), 1/(this.v_to*365))
            let mu = this.getRandom(this.mu_n, 1/(this.mu_from*365), 1/(this.mu_to*365))
            let beta = this.getRandom(this.beta_n, this.beta_from, this.beta_to)
            let gamma = this.getRandom(this.gamma_n, 1/this.gamma_from, 1/this.gamma_to)

            return this.cartesian([rho, v, mu, beta, gamma]);
        }

        if(sampling == "sobol") {
            let seq = lobos.Sobol(5)

            return this.getParamsFromSobol(seq.take(this.sobol_n))
        }
    }
}

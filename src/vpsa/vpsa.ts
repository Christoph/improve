import {autoinject, observable} from 'aurelia-framework';

// This magic line removed the error messages for numeric
declare var numeric: any;

@autoinject
export class Vspa {
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

    // SIR Model
    TS = 1.0
    NY = 1
    ND = this.NY*365

    S0 = 0.1
    I0 = 1e-4
    R0 = 1 - this.S0 - this.I0

    // Mortality probabilty, I dies before natural death or recovery
    rho = 0.5
    // Per captia death rate  from natural causes
    v = 1/(70*365.0)
    // Population birth rate
    mu = 1/(70*365.0)
    // Transmission rate: I -> S. Includes encounter and transmission rate
    beta=520/365.0
    // Recovery rate
    gamma=1/7.0

    INPUT = [this.S0, this.I0, this.R0]

    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_length = 0;

    lines = <any[]> []
    parallel = <any[]> []

    brushing_popChanged() {
        this.updateData(this.brushing_pop, "pop");
        this.redrawLinecharts()
    }

    brushing_susChanged() {
        this.updateData(this.brushing_sus, "sus");
        this.redrawLinecharts()
    }

    brushing_recChanged() {
        this.updateData(this.brushing_rec, "rec");
        this.redrawLinecharts()
    }

    brushing_infChanged() {
        this.updateData(this.brushing_inf, "inf");
        this.redrawLinecharts()
    }

    brushing_parallelChanged() {
        console.log(this.brushing_parallel)
    }

    redrawLinecharts() {
        this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
        this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
        this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
    }

    private updateData(ids, attribute) {
        console.log("Update Data")

        for(let i = 0; i < this.data_length; i++) {
            if(ids.length > 0) {
                if(ids.includes(this.data_lines[i]["id"])) {
                    this.data_lines[i]["highlight"] = 1
                }
                else {
                    this.data_lines[i]["highlight"] = 2
                }
            }
            else {
                this.data_lines[i]["highlight"] = 1
            }
        }

    }

    vspa() {
        // Update variables
        this.ND = this.NY*365
        this.R0 = 1 - this.S0 - this.I0
        this.INPUT = [+this.S0, +this.I0, +this.R0]

        let params = this.get_params()
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

            this.data_lines.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
            })
        })

        this.data_length = this.data_lines.length;
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

    get_params() {
        let params = <any[]> []

        // Mortality probabilty, I dies before natural death or recovery
        // let rho = [0.3, 0.4, 0.5, 0.6, 0.7]
        let rho = [0.4, 0.5, 0.7]
        // Per captia death rate  from natural causes
        let v = [1/(60*365.0), 1/(70*365.0), 1/(75*365.0)]
        // Population birth rate
        let mu = [1/(70*365.0),1/(65*365.0), 1/(60*365.0)]
        // Transmission rate: I -> S. Includes encounter and transmission rate
        // let beta = [200/365.0, 365/365.0, 520/365.0]
        let beta = [400/365.0, 520/365.0, 600/365.0]
        // Recovery rate
        // let gamma = [1/6.0, 1/7.0, 1/8.0]
        let gamma = [1/6.0, 1/7.0, 1/8.0]

        return this.cartesian([rho, v, mu, beta, gamma])
    }

}

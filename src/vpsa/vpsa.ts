import {autoinject} from 'aurelia-framework';

// This magic line removed the error messages for numeric
declare var numeric: any;

@autoinject
export class Vspa {
    // VPSA
    param1 = 1;
    param2 = 1;


    // SIR Model
    TS = 1.0
    ND = 60*365

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

    data = <any[]> []

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
        let rho = [0.4, 0.5, 0.6]
        // Per captia death rate  from natural causes
        let v = [1/(70*365.0), 1/(80*365.0), 1/(90*365.0)]
        // Population birth rate
        let mu = [1/(70*365.0), 1/(80*365.0), 1/(90*365.0)]
        // Transmission rate: I -> S. Includes encounter and transmission rate
        // let beta = [200/365.0, 365/365.0, 520/365.0]
        let beta = [365/365.0, 520/365.0]
        // Recovery rate
        // let gamma = [1/6.0, 1/7.0, 1/8.0]
        let gamma = [1/6.0, 1/7.0]

        return this.cartesian([rho, v, mu, beta, gamma])
    }

    vspa() {

        let params = this.get_params()

        params.forEach( (d) => {
            this.rho = d[0];
            this.v = d[1];
            this.mu = d[2];
            this.beta = d[3];
            this.gamma = d[4];

            let sol = numeric.dopri(0, this.ND, this.INPUT, this.SIR, 1e-6, 1000);

            let temp = <any[]> []
            for (let i = 0; i < sol.x.length; i++) {
                temp.push({
                    "x": sol.x[i],
                    "sus": sol.y[i][0],
                    "inf": sol.y[i][1],
                    "rec": sol.y[i][2],
                    "pop": sol.y[i][0] + sol.y[i][1] + sol.y[i][2]
                })
            }

            this.data.push(temp)
        })
    }
}

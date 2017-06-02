import {autoinject} from 'aurelia-framework';

// This magic line removed the error messages for numeric
declare var numeric: any;

@autoinject
export class Vspa {
    // VPSA
    param1 = 1;
    param2 = 1;


    TS = 1.0
    ND = 60*365

    S0 = 0.1
    I0 = 1e-4
    R0 = 1 - this.S0 - this.I0
    INPUT = [this.S0, this.I0, this.R0]

    data = <any[]> []

    SIR(t, INP) {
        let rho = 0.5
        let mu=1/(70*365.0)
        let beta=520/365.0
        let gamma=1/7.0

    	let Y = [0, 0 ,0]
    	let V = INP

        Y[0] = mu - beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - mu * V[0]
    	Y[1] = beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - (gamma + mu) * V[1]/(1-rho)
    	Y[2] = gamma * V[1] - mu * V[2]

    	return Y
    }

    out() {
        let sol = numeric.dopri(0, this.ND, this.INPUT, this.SIR, 1e-6, 1000);

        for (let i = 0; i < sol.x.length; i++) {
            this.data.push({
                "x": sol.x[i],
                "sus": sol.y[i][0],
                "inf": sol.y[i][1],
                "rec": sol.y[i][2],
                "pop": sol.y[i][0] + sol.y[i][1] + sol.y[i][2]
            })
        }
    }
}

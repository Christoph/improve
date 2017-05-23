import {inject} from 'aurelia-framework';
import {LocalLoader} from '../resources/sources/local-loader';

@inject(LocalLoader)
export class Vspa {
    // VPSA
    param1 = 1;
    param2 = 1;
    private loader;

    data = [
        {"salesperson" : "Bob", "sales": 12},
        {"salesperson" : "Robin", "sales": 1},
        {"salesperson" : "Anne", "sales": 8},
        {"salesperson" : "Chris", "sales": 5}
    ]

    constructor(loader) {
        this.loader = loader;

        this.model();
    }

    model() {
        this.loader.load_file("regio.json");
    }

    out() {
        console.log(this.loader.data)
    }
}

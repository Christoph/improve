import {inject} from 'aurelia-framework';
import {LocalLoader} from '../resources/sources/local-loader';

@inject(LocalLoader)
export class Vspa {
    param1 = 1;
    param2 = 1;
    private loader;

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

import { autoinject, observable } from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class Abb {
    // Data
    data = <any>[];
    praeparate = <any>[];

    // Dropdowns
    other_list = <any>[];
    costs_list = [
      "Jahres-Fabriksabgabepreis",
      "Jahres-Kassenkaufpreis"
    ];

    // Observing changes in the ui
    @observable uv_selected = true;
    @observable ibd_selected = true;

    uv_selectedChanged() {
      this.prepareData();
    }

    ibd_selectedChanged() {
      this.prepareData();
    }

    // Loading csv files
    attached() {
      let self = this
      let getData = $.get("data/data.csv", function(data) {
        papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: function(results) {
            self.data = results.data
          }
        });
      });

      let getPrep = $.get("data/Praeperate.csv", function(data) {
        papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: function(results) {
            self.praeparate = results.data
            self.other_list = results.data.map(x => x["Produktname"]).slice(1)
          }
        });
      });

      $.when(getData, getPrep).done(x => self.prepareData())
    }

    prepareData() {
      let meds = ["HUMIRA"]
      // meds.push(this.mitbewerber)

      console.log(meds)
    }
}

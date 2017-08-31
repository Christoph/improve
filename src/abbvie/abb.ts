import { autoinject, observable } from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class Abb {
    // Constants
    data_types = ["HUMIRA", "MITBEWERB"];
    costs_list = [
      "Jahres-Fabriksabgabepreis",
      "Jahres-Kassenkaufpreis"
    ];

    // Status
    data_loaded = false;

    // Data
    dataset = <any>[];
    praeparate = <any>[];
    data_dual = <any>[];

    // Dropdowns
    other_list = <any>[];

    // Observing changes in the ui
    @observable uv_selected = true;
    @observable ibd_selected = true;
    @observable other;
    @observable costs;

    uv_selectedChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    ibd_selectedChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    otherChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    costsChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    // Loading csv files
    attached() {
      let self = this
      let getData = $.get("data/data.csv", function(data) {
        papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: function(results) {
            self.dataset = results.data
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
            self.other = self.other_list[0];
          }
        });
      });

      $.when(getData, getPrep).done(x => {
        self.data_loaded = true;
        self.prepareData()
      })

      self.costs = self.costs_list[0];
    }

    prepareData() {
      let self = this;

      // Empty plotting datasets
      self.data_dual.length = 0;

      // Medications list
      let meds = ["HUMIRA"]
      meds.push(this.other)

      // Fill plotting datasets
      meds.forEach(m => {
        // Create basic object
        let out = {
          x: m,
          Basis: +this.praeparate.filter(x => x["Produktname"] == m)[0][self.costs]
        }
        let std = {};
        let max = {};

        // Change encoding for data.csv file style names
        if(m != "HUMIRA") {
          m = "MITBEWERB"
        }

        // Get temorary datasets
        let standart = this.dataset.filter(d => d["Med"] == m && d["Typ"] == "Standart")
        let maximal = this.dataset.filter(d => d["Med"] == m && d["Typ"] == "Max")

        // Get Standart costs
        standart.forEach(x => {
          if (self.ibd_selected && x["Add"] == "IBD") {
            std["IBD"] = +x.KA + +x.FA + +x.MA;
          }

          if (self.uv_selected && x["Add"] == "UV") {
            std["UV"] = +x.KA + +x.FA + +x.MA;
          }
        })

        out["Standart"] = std

        // Get maximal costs
        maximal.forEach(x => {
          if (this.ibd_selected && x["Add"] == "IBD") {
            max["IBD"] = +x.KA + +x.FA + +x.MA;
          }

          if (this.uv_selected && x["Add"] == "UV") {
            max["UV"] = +x.KA + +x.FA + +x.MA;
          }
        })

        out["Max"] = max

        this.data_dual.push(out)
      })
    }
}

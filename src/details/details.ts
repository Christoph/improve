import { autoinject, observable } from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class Details {
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
    data_stacked = <any>[];

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
      let getData = $.get("data/data_2.csv", function(data) {
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
      self.data_stacked.length = 0;

      // Medications list
      let meds =  Array.from(new Set(self.dataset.map(item => item.Area)));

      // Fill plotting datasets
      meds.forEach(m => {
        // Create basic object
        let out = {
          x: m,
        }

        // Get temorary datasets
        let standart = this.dataset.filter(
          d => d["Area"] == m &&
          d["Typ"] == "Standart" &&
          d["Add"] == "UV" &&
          d["Med"] == "MITBEWERB")
        let maximal = this.dataset.filter(
          d => d["Area"] == m &&
          d["Typ"] == "Max" &&
          d["Add"] == "UV" &&
          d["Med"] == "MITBEWERB")

        // Get Standart costs
        standart.forEach(x => {
          out[x.Name] = +x.costs;
        })

        self.data_stacked.push(out)
      })

      console.log(self.data_stacked)
    }
}

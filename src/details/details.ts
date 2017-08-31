import { autoinject, observable } from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class Details {
    // Constants
    med_list = [
      "HUMIRA",
      "MITBEWERB"
    ];
    add_list = [
      "UV",
      "IBD"
    ];
    scenario_list = [
      "Standart",
      "Max"
    ];

    // Status
    data_loaded = false;

    // Data
    dataset = <any>[];
    praeparate = <any>[];
    data_stacked = <any>[];

    // Dropdowns

    // Observing changes in the ui
    @observable scenario;
    @observable add;
    @observable med;

    scenarioChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    addChanged() {
      this.data_loaded ? this.prepareData() : null;
    }

    medChanged() {
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
          }
        });
      });

      $.when(getData, getPrep).done(x => {
        self.data_loaded = true;
        self.prepareData()
      })

      self.add = self.add_list[0];
      self.scenario = self.scenario_list[0];
      self.med = self.med_list[0];
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
        let standart = []

        // Get temorary datasets
        standart = this.dataset.filter(
          d => d["Area"] == m &&
          d["Typ"] == self.scenario &&
          d["Add"] == self.add &&
          d["Med"] == self.med)

        // Get Standart costs
        standart.forEach(x => {
          out[x.Name] = +x.costs;
        })

        self.data_stacked.push(out)
      })
    }
}

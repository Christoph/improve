import {autoinject} from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class bars {
  message = "SA"
  data = <any>[];
  data_prepared = <any>[];

  uv_selected = true;
  ibd_selected = true;

  attached() {
    let self = this
    $.get("data/data.csv", function (data) {
      papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          self.data = results.data
          self.prepareData()
        }
      });
    });
  }

  prepareData() {
    let meds = Array.from(new Set(this.data.map(x => { return x["Med"]})));

    meds.forEach(m => {
      let all_meds = this.data.filter(d => d["Med"] == m && d["Typ"] == "Standart")
      let med = {};
      med["x"] = m;

      all_meds.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          med["IBD"] = +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          med["UV"] = +x.KA + +x.FA;
        }
      })

      if(Object.keys(med).length > 1) {
        this.data_prepared.push(med)
      }
    })
  }
}

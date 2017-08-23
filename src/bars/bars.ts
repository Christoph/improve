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
        skipEmptyLines: false,
        complete: function(results) {
          self.data = results.data
          self.prepareData()
        }
      });
    });
  }

  prepareData() {
    this.data.forEach(x => {
      let temp = {};
      let total = 0;

      temp["x"] = x["Med"]

      if(x["Typ"] == "Standart") {
        if(this.ibd_selected && x["Add"] == "IDB") {
          temp["IBD"] = +x.KA + +x.FA;
          total = total + temp["IBD"]
        }

        if(this.uv_selected && x["Add"] == "UV") {
          temp["UV"] = +x.KA + +x.FA;
          total = total + temp["UV"]
        }
      }

      temp["total"] = total

      if(Object.keys(temp).length > 2) {
        this.data_prepared.push(temp)
      }
    })
    console.log(this.data_prepared)
  }
}

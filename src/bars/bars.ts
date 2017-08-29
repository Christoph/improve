import {autoinject, observable} from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class bars {
  active = 1;

  message = "SA"
  data = <any>[];
  praeparate = <any>[];
  data_prepared = <any>[];
  data_prepared_dual = <any>[];
  data_total = <any>[];

  @observable uv_selected = true;
  @observable ibd_selected = true;

  attached() {
    let self = this
    let getData = $.get("data/data.csv", function (data) {
      papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          self.data = results.data
          // self.prepareData()
        }
      });
    });

    let getPrep = $.get("data/Praeperate.csv", function (data) {
      papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          self.praeparate = results.data
          // self.prepareData()
        }
      });
    });

    $.when(getData, getPrep).done(x => self.prepareData())
  }

  uv_selectedChanged() {
      this.prepareData();
  }

  ibd_selectedChanged() {
      this.prepareData();
  }

  prepareData() {
    console.log(this.data)
    let meds = Array.from(new Set(this.data.map(x => { return x["Med"]})));
    this.data_prepared.length = 0;
    this.data_prepared_dual.length = 0;
    this.data_total.length = 0;

    meds.forEach(m => {
      let all_meds = this.data.filter(d => d["Med"] == m && d["Typ"] == "Standart")
      let med = {};
      med["x"] = m;
      med["Basis"] = +this.praeparate.filter(x => x["Produktname"] == m)[0]["Jahres-Kassenkaufpreis"]

      all_meds.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          med["IBD"] = +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          med["UV"] = +x.KA + +x.FA;
        }
      })

      this.data_prepared.push(med)
    })

    meds.forEach(m => {
      let standart = this.data.filter(d => d["Med"] == m && d["Typ"] == "Standart")
      let maximal = this.data.filter(d => d["Med"] == m && d["Typ"] == "Max")

      let med = {};
      let std = {};
      let max = {};
      med["x"] = m;
      med["Basis"] = +this.praeparate.filter(x => x["Produktname"] == m)[0]["Jahres-Kassenkaufpreis"]

      standart.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          std["IBD"] = +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          std["UV"] = +x.KA + +x.FA;
        }
      })

      med["Standart"] = std

      maximal.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          max["IBD"] = +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          max["UV"] = +x.KA + +x.FA;
        }
      })

      med["Max"] = max

      this.data_prepared_dual.push(med)
    })

    meds.forEach(m => {
      let standart = this.data.filter(d => d["Med"] == m && d["Typ"] == "Standart")
      let maximal = this.data.filter(d => d["Med"] == m && d["Typ"] == "Max")

      let med = {};
      let std = 0;
      let max = 0;
      med["x"] = m;
      let basis = +this.praeparate.filter(x => x["Produktname"] == m)[0]["Jahres-Kassenkaufpreis"]

      standart.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          std += +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          std += +x.KA + +x.FA;
        }
      })

      med["Standart"] = basis + std

      maximal.forEach(x => {
        if(this.ibd_selected && x["Add"] == "IBD") {
          max += +x.KA + +x.FA;
        }

        if(this.uv_selected && x["Add"] == "UV") {
          max += +x.KA + +x.FA;
        }
      })

      med["Max"] = max

      this.data_total.push(med)
    })
  }
}

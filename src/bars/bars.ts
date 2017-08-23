import {autoinject} from 'aurelia-framework';
import * as papa from 'papaparse'
import "jquery"

@autoinject
export class bars {
  message = "No Selection"
  selectedFiles;
  data = <any>[];

  attached() {
    let self = this
    $.get("data/data.csv", function (data) {
      papa.parse(data, {
        header: true,
        skipEmptyLines: false,
        complete: function(results) {
          self.data = results.data
        }
      });
    });
  }

  show() {
    console.log(this.data)
  }
}

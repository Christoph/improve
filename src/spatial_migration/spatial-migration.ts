import {autoinject, observable} from 'aurelia-framework';
import "ion-rangeslider"
import {Genetic} from "../models/genetic"
import * as d3 from "d3"

@autoinject
export class SpatialMigration {
    @observable brushing_p;
    @observable brushing_pop;
    redraw_p;
    redraw_pop;

    @observable brushing_parallel;
    redraw_parallel;

    inFilter = []
    outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);

    // Genetic Model
    simulations = 100;
    generations = 100;

    // Grid
    grid_length = 100;
    grid = [];
    p = 0.5;
    max_mating_distance = 1;
    generation_counter = 0;

    // Population count
    pop_from = 0;
    pop_to = 1000;

    // Probability of event
    event_from = 0.1;
    event_to = 0.2;

    // Leftover individuals after event
    leftover_from = 1;
    leftover_to = 10;

    // Sobol sampling
    sobol_n = 100

    data_parallel = <any[]> []
    data_lines = <any[]> []
    data_lines_original = <any[]> []
    data_length = 0;

    current_filter = new Set();

    collapsed_input = false;
    collapsed_parallel = false;

    switch() {
      this.collapsed_input = this.collapsed_input == true ? false : true;
      this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
    }

    attached() {
        // Attaching range sliders
        $("#pop").ionRangeSlider({
            min: 1,
            max: 2000,
            from: 500,
            to: 1000,
            step: 1,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.pop_from = data["from"]
            this.pop_to = data["to"]
        }});
        $("#event").ionRangeSlider({
            min: 0.01,
            max: 1,
            from: 0.1,
            to: 0.2,
            step: 0.01,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.event_from = data["from"]
            this.event_to = data["to"]
        }});
        $("#leftover").ionRangeSlider({
            min: 1,
            max: 50,
            from: 1,
            to: 10,
            step: 1,
            type: "double",
            grid: true,
            grid_num: 10,
            onFinish: (data) => {
            this.leftover_from = data["from"]
            this.leftover_to = data["to"]
        }});
    }

    brushing_pChanged() {
        this.updateOutData(this.brushing_p, "p");
        this.updateInData(this.brushing_p);
    }

    brushing_popChanged() {
        this.updateOutData(this.brushing_pop, "pop");
        this.updateInData(this.brushing_pop);
    }

    brushing_parallelChanged() {
        this.updateParallelData(this.brushing_parallel);
        this.filterOutData(this.brushing_parallel);
    }

    redrawLinecharts() {
        this.redraw_p = this.redraw_p == 0 ? 1 : 0;
        this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
    }

    private updateOutData(mapping, attribute) {
      let average = new Map();

      // Set current filter
      this.outFilterList.set(attribute, mapping);

      // Update average filter
      mapping.forEach((v, k) => {
        let temp = 0;

        this.outFilterList.forEach((iv, ik) => {
          if(iv.size > 0) temp  = temp + iv.get(k);
        })

        temp = temp/this.outFilterList.size;

        average.set(k, temp)
      })

      // Set line highlight
      this.data_lines.forEach(x => {
        x["highlight"] = average.get(x["id"])
      })

      this.redrawLinecharts();
      }

    private updateInData(mapping) {
      if(this.inFilter.length > 0) {
        this.data_parallel
          .filter(x => this.inFilter.includes(x["id"]))
          .forEach(x => {
            x["highlight"] = mapping.get(x["id"])
          })
      }
      else {
        this.data_parallel
          .forEach(x => {
            x["highlight"] = mapping.get(x["id"])
          })
      }

        this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    }

    private updateParallelData(ids) {
        this.inFilter = ids;

        if(ids.length > 0) {
          this.data_parallel.forEach(x => {
            if(ids.includes(x["id"])) {
              x["highlight"] = 1;
            }
            else {
              x["highlight"] = 0;
            }
          })
        }
        else {
          this.data_parallel.forEach(x => {
            x["highlight"] = 1;
          })
        }

        this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
    }

    private filterOutData(ids) {
        if(ids.length > 1) {
            let highlight_list = new Set(ids);

            this.data_lines.length = 0

            this.data_lines.push(...this.data_lines_original.filter(x => highlight_list.has(x["id"])))

            // Save current filter
            this.current_filter = highlight_list;
        }
        else {
            this.data_lines.length = 0
            this.data_lines.push(...this.data_lines_original)
        }
    }

    get_random_int(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    init_grid() {
      for(let i = 0; i < this.grid_length; i++) {
        let temp = []

        for (var j = 0; j < this.grid_length; j++) {
          let random_number = Math.random();

          if (random_number < this.p*this.p) {
              temp[j] = "A1A1";
          }
          else if (random_number > 1 - (1-this.p) * (1-this.p)) {
              temp[j] = "A2A2";
          }
          else {
              temp[j] = "A1A2";
          }
        }

        this.grid.push(temp)
      }
    }

    get_bounded_index(index) {
      let bounded_index = index;

      if(index < 0) {
        bounded_index = index + this.grid_length;
      }
      if(index >= this.grid_length) {
        bounded_index = index - this.grid_length;
      }

      return bounded_index
    }

    pick_mating_partner(i, j) {
      let mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
      let mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);

      mating_i = this.get_bounded_index(mating_i);
      mating_j = this.get_bounded_index(mating_j);

      return this.grid[mating_i][mating_j]
    }

    get_offspring(parent1, parent2) {
        var p1 = parent1;
        var p2 = parent2;
        if (p1 == "A1A1" && p2 == "A1A1") {
            return "A1A1";
        }
        else if ((p1 == "A1A1" && p2 == "A1A2") || (p1 == "A1A2" && p2 == "A1A1")) {
            if (Math.random() < 0.5) {
                return "A1A1";
            }
            else {
                return "A1A2";
            }
        }
        else if ((p1 == "A1A1" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A1")) {
            return "A1A2";
        }
        else if (p1 == "A1A2" && p2 == "A1A2") {
            var random_number = Math.random();
            if (random_number < 0.25) {
                return "A1A1";
            }
            else if (random_number > 0.75){
                return "A2A2";
            }
            else {
                return "A1A2";
            }
        }
        else if ((p1 == "A1A2" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A2")) {
            if (Math.random() < 0.5) {
                return "A1A2";
            }
            else {
                return "A2A2";
            }
        }
        else if (p1 == "A2A2" && p2 == "A2A2") {
            return "A2A2";
        }
     }

    run_generation = () => {
      let temp_grid = [];

      for(let i = 0; i < this.grid_length; i++) {
        temp_grid[i] = [];

        for(let j = 0; j < this.grid_length; j++) {
          // Select mating partner
          let mating_partner = this.pick_mating_partner(i, j);

          // Return offspring genotype
          temp_grid[i][j] = this.get_offspring(this.grid[i][j], mating_partner);
        }
      }

      this.grid.length = 0;

      for(let i = 0; i < this.grid_length; i++) {
        let temp = []
        for(let j = 0; j < this.grid_length; j++) {
          temp[j] = temp_grid[i][j]
        }
        this.grid.push(temp)
      }

      this.generation_counter++;
    }

    compute() {
        this.collapsed_input = true;

        // Initialize Grid
        this.init_grid()
        setInterval(this.run_generation, 100);
        // console.log(this.grid)
        // for(let i = 0; i < 100; i++) {
        //   this.run_generation();
        // }
        // console.log(this.grid)

        // Create model params
        let gen = new Genetic([this.event_from, this.event_to],[this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations)

        let model = gen.compute_model()

        model.forEach( (sol, run) => {
          let temp = <any[]> []
          for (let i = 0; i < sol.length; i++) {
              temp.push({
                  "x": gen.time_range[i],
                  "p": sol[i].p,
                  "pop": sol[i].pop
              })
          }

          this.data_parallel.push({
                  "id": run,
                  "highlight": 0,
                  "data": {
                      "pop": gen.params[run][0],
                      "P(event)": gen.params[run][1],
                      "Remaining": gen.params[run][2]
                  }
          })

          this.data_lines_original.push({
                  "id": run,
                  "highlight": 0,
                  "data": temp
          })
        })

        this.data_length = this.data_lines_original.length;
        this.filterOutData([])
      }
}

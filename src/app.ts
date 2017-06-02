import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Improve";
      config.map([
        //   { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
        //   { route: "vis/", moduleId: "vis/vis", nav: true, title: "Vis", name: "vis" },
          { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR", name: "vpsa" }
      ]);

      this.router = router;
  }
}

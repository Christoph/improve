import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Improve";
      config.map([
          { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
          { route: "abb/", moduleId: "abbvie/abb", nav: true, title: "Abb", name: "abb" },
          { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR", name: "vpsa" }
      ]);

      this.router = router;
  }
}

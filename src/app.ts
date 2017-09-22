import {Router, RouterConfiguration} from "aurelia-router"

export class App {
  router = Router;

  configureRouter(config: RouterConfiguration, router) {
      config.title = "Improve";
      config.map([
          { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
          // { route: "abb/", moduleId: "abbvie/abb", nav: true, title: "Abb", name: "abb" },
          // { route: "det/", moduleId: "details/details", nav: true, title: "Details", name: "det" },
          // { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR", name: "vpsa" },
          { route: "gauss/", moduleId: "gauss/gauss", nav: true, title: "SIR", name: "sir" },
          { route: "drift/", moduleId: "drift/drift", nav: true, title: "Genetic Drift", name: "drift" }
      ]);

      this.router = router;
  }
}

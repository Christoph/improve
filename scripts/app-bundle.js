define('app',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.router = aurelia_router_1.Router;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Improve";
            config.map([
                { route: "", moduleId: "empty/no-selection", nav: true, title: "Select" },
                { route: "abb/", moduleId: "abbvie/abb", nav: false, title: "Abb", name: "abb" },
                { route: "det/", moduleId: "details/details", nav: false, title: "Details", name: "det" },
                { route: "sir/", moduleId: "gauss/gauss", nav: true, title: "SIR", name: "sir" },
                { route: "spatialsir/", moduleId: "spatial_sir/epidemics", nav: true, title: "Spatial - SIR", name: "sir" },
                { route: "drift/", moduleId: "drift/drift", nav: true, title: "Genetic Drift", name: "drift" },
                { route: "migration/", moduleId: "spatial_migration/migration", nav: true, title: "Spatial Migration", name: "migration" }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsV0FBTSxHQUFHLHVCQUFNLENBQUM7UUFpQmxCLENBQUM7UUFmQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBTTtZQUMvQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUN6RSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFDaEYsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFFM0YsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ2hGLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ3pHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2dCQUM5RixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7YUFDN0gsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIlxuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcm91dGVyID0gUm91dGVyO1xuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcikge1xuICAgICAgY29uZmlnLnRpdGxlID0gXCJJbXByb3ZlXCI7XG4gICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICB7IHJvdXRlOiBcIlwiLCBtb2R1bGVJZDogXCJlbXB0eS9uby1zZWxlY3Rpb25cIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTZWxlY3RcIiB9LFxuICAgICAgICAgIHsgcm91dGU6IFwiYWJiL1wiLCBtb2R1bGVJZDogXCJhYmJ2aWUvYWJiXCIsIG5hdjogZmFsc2UsIHRpdGxlOiBcIkFiYlwiLCBuYW1lOiBcImFiYlwiIH0sXG4gICAgICAgICAgeyByb3V0ZTogXCJkZXQvXCIsIG1vZHVsZUlkOiBcImRldGFpbHMvZGV0YWlsc1wiLCBuYXY6IGZhbHNlLCB0aXRsZTogXCJEZXRhaWxzXCIsIG5hbWU6IFwiZGV0XCIgfSxcbiAgICAgICAgICAvLyB7IHJvdXRlOiBcInZwc2EvXCIsIG1vZHVsZUlkOiBcInZwc2EvdnBzYVwiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNJUlwiLCBuYW1lOiBcInZwc2FcIiB9LFxuICAgICAgICB7IHJvdXRlOiBcInNpci9cIiwgbW9kdWxlSWQ6IFwiZ2F1c3MvZ2F1c3NcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTSVJcIiwgbmFtZTogXCJzaXJcIiB9LFxuICAgICAgICB7IHJvdXRlOiBcInNwYXRpYWxzaXIvXCIsIG1vZHVsZUlkOiBcInNwYXRpYWxfc2lyL2VwaWRlbWljc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNwYXRpYWwgLSBTSVJcIiwgbmFtZTogXCJzaXJcIiB9LFxuICAgICAgICAgIHsgcm91dGU6IFwiZHJpZnQvXCIsIG1vZHVsZUlkOiBcImRyaWZ0L2RyaWZ0XCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiR2VuZXRpYyBEcmlmdFwiLCBuYW1lOiBcImRyaWZ0XCIgfSxcbiAgICAgICAgICB7IHJvdXRlOiBcIm1pZ3JhdGlvbi9cIiwgbW9kdWxlSWQ6IFwic3BhdGlhbF9taWdyYXRpb24vbWlncmF0aW9uXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU3BhdGlhbCBNaWdyYXRpb25cIiwgbmFtZTogXCJtaWdyYXRpb25cIiB9XG4gICAgICBdKTtcblxuICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin("aurelia-computed")
            .plugin("d3-extended")
            .plugin("d3-random")
            .plugin("aurelia-bootstrap")
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDM0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbEJELDhCQWtCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtY29tcHV0ZWRcIilcbiAgICAucGx1Z2luKFwiZDMtZXh0ZW5kZWRcIilcbiAgICAucGx1Z2luKFwiZDMtcmFuZG9tXCIpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtYm9vdHN0cmFwXCIpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('navbar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
            this.router = null;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], NavBar.prototype, "router", void 0);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1lBQ1ksV0FBTSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBRFc7WUFBVCw0QkFBUTs7OENBQWU7UUFDMUIsYUFBQztLQUZELEFBRUMsSUFBQTtJQUZZLHdCQUFNIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gIEBiaW5kYWJsZSByb3V0ZXIgPSBudWxsO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('abbvie/abb',["require", "exports", "aurelia-framework", "papaparse", "jquery"], function (require, exports, aurelia_framework_1, papa) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Abb = (function () {
        function Abb() {
            this.data_types = ["HUMIRA", "MITBEWERB"];
            this.costs_list = [
                "Jahres-Fabriksabgabepreis",
                "Jahres-Kassenkaufpreis"
            ];
            this.data_loaded = false;
            this.dataset = [];
            this.praeparate = [];
            this.data_dual = [];
            this.data_dual_total = [];
            this.other_list = [];
            this.uv_selected = true;
            this.ibd_selected = true;
        }
        Abb.prototype.uv_selectedChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Abb.prototype.ibd_selectedChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Abb.prototype.otherChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Abb.prototype.costsChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Abb.prototype.attached = function () {
            var self = this;
            var getData = $.get("data/data.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.dataset = results.data;
                    }
                });
            });
            var getPrep = $.get("data/Praeperate.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.praeparate = results.data;
                        self.other_list = results.data.map(function (x) { return x["Produktname"]; }).slice(1);
                        self.other = self.other_list[0];
                    }
                });
            });
            $.when(getData, getPrep).done(function (x) {
                self.data_loaded = true;
                self.prepareData();
            });
            self.costs = self.costs_list[0];
        };
        Abb.prototype.prepareData = function () {
            var _this = this;
            var self = this;
            self.data_dual.length = 0;
            self.data_dual_total.length = 0;
            var meds = ["HUMIRA"];
            meds.push(this.other);
            meds.forEach(function (m) {
                var out = {
                    x: m,
                    Basis: +_this.praeparate.filter(function (x) { return x["Produktname"] == m; })[0][self.costs]
                };
                var std = {};
                var max = {};
                if (m != "HUMIRA") {
                    m = "MITBEWERB";
                }
                var standart = _this.dataset.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var maximal = _this.dataset.filter(function (d) { return d["Med"] == m && d["Typ"] == "Max"; });
                standart.forEach(function (x) {
                    if (self.ibd_selected && x["Add"] == "IBD") {
                        std["IBD"] = +x.KA + +x.FA + +x.MA;
                    }
                    if (self.uv_selected && x["Add"] == "UV") {
                        std["UV"] = +x.KA + +x.FA + +x.MA;
                    }
                });
                out["Standart"] = std;
                maximal.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        max["IBD"] = +x.KA + +x.FA + +x.MA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        max["UV"] = +x.KA + +x.FA + +x.MA;
                    }
                });
                out["Max"] = max;
                _this.data_dual.push(out);
            });
            var all_meds = ["HUMIRA"];
            all_meds.push.apply(all_meds, self.other_list);
            all_meds.forEach(function (m) {
                var out = {
                    x: m,
                    Basis: +_this.praeparate.filter(function (x) { return x["Produktname"] == m; })[0][self.costs]
                };
                var std = {};
                var max = {};
                if (m != "HUMIRA") {
                    m = "MITBEWERB";
                }
                var standart = _this.dataset.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var maximal = _this.dataset.filter(function (d) { return d["Med"] == m && d["Typ"] == "Max"; });
                standart.forEach(function (x) {
                    if (self.ibd_selected && x["Add"] == "IBD") {
                        std["IBD"] = +x.KA + +x.FA + +x.MA;
                    }
                    if (self.uv_selected && x["Add"] == "UV") {
                        std["UV"] = +x.KA + +x.FA + +x.MA;
                    }
                });
                out["Standart"] = std;
                maximal.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        max["IBD"] = +x.KA + +x.FA + +x.MA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        max["UV"] = +x.KA + +x.FA + +x.MA;
                    }
                });
                out["Max"] = max;
                _this.data_dual_total.push(out);
            });
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Abb.prototype, "uv_selected", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Abb.prototype, "ibd_selected", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Abb.prototype, "other", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Abb.prototype, "costs", void 0);
        Abb = __decorate([
            aurelia_framework_1.autoinject
        ], Abb);
        return Abb;
    }());
    exports.Abb = Abb;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFiYnZpZS9hYmIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUFEQTtZQUdJLGVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyQyxlQUFVLEdBQUc7Z0JBQ1gsMkJBQTJCO2dCQUMzQix3QkFBd0I7YUFDekIsQ0FBQztZQUdGLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1lBR3BCLFlBQU8sR0FBUSxFQUFFLENBQUM7WUFDbEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztZQUNyQixjQUFTLEdBQVEsRUFBRSxDQUFDO1lBQ3BCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1lBRzFCLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFHVCxnQkFBVyxHQUFHLElBQUksQ0FBQztZQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQWtLcEMsQ0FBQztRQTlKRyxnQ0FBa0IsR0FBbEI7WUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDL0MsQ0FBQztRQUVELGlDQUFtQixHQUFuQjtZQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDO1FBRUQsMEJBQVksR0FBWjtZQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDO1FBRUQsMEJBQVksR0FBWjtZQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDO1FBR0Qsc0JBQVEsR0FBUjtZQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNmLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVMsSUFBSTtnQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLElBQUk7b0JBQ1osY0FBYyxFQUFFLElBQUk7b0JBQ3BCLFFBQVEsRUFBRSxVQUFTLE9BQU87d0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtvQkFDN0IsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsVUFBUyxJQUFJO2dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDZixNQUFNLEVBQUUsSUFBSTtvQkFDWixjQUFjLEVBQUUsSUFBSTtvQkFDcEIsUUFBUSxFQUFFLFVBQVMsT0FBTzt3QkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO3dCQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2dCQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1lBRUYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCx5QkFBVyxHQUFYO1lBQUEsaUJBNEdDO1lBM0dDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUdoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBR2hDLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFHckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBRVosSUFBSSxHQUFHLEdBQUc7b0JBQ1IsQ0FBQyxFQUFFLENBQUM7b0JBQ0osS0FBSyxFQUFFLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDMUUsQ0FBQTtnQkFDRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUdiLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNqQixDQUFDLEdBQUcsV0FBVyxDQUFBO2dCQUNqQixDQUFDO2dCQUdELElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxFQUF2QyxDQUF1QyxDQUFDLENBQUE7Z0JBQ2hGLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFsQyxDQUFrQyxDQUFDLENBQUE7Z0JBRzFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUVGLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUE7Z0JBR3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUNmLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDckMsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTtnQkFFaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLE9BQWIsUUFBUSxFQUFVLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFFbEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBRWhCLElBQUksR0FBRyxHQUFHO29CQUNSLENBQUMsRUFBRSxDQUFDO29CQUNKLEtBQUssRUFBRSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzFFLENBQUE7Z0JBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFHYixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxHQUFHLFdBQVcsQ0FBQTtnQkFDakIsQ0FBQztnQkFHRCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFBO2dCQUNoRixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBbEMsQ0FBa0MsQ0FBQyxDQUFBO2dCQUcxRSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNyQyxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFFRixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFBO2dCQUdyQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDZixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNwQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUVGLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUE7Z0JBRWhCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQWxLVztZQUFYLDhCQUFVOztnREFBb0I7UUFDbkI7WUFBWCw4QkFBVTs7aURBQXFCO1FBQ3BCO1lBQVgsOEJBQVU7OzBDQUFPO1FBQ047WUFBWCw4QkFBVTs7MENBQU87UUF4QlQsR0FBRztZQURmLDhCQUFVO1dBQ0UsR0FBRyxDQXdMZjtRQUFELFVBQUM7S0F4TEQsQUF3TEMsSUFBQTtJQXhMWSxrQkFBRyIsImZpbGUiOiJhYmJ2aWUvYWJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgb2JzZXJ2YWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICogYXMgcGFwYSBmcm9tICdwYXBhcGFyc2UnXHJcbmltcG9ydCBcImpxdWVyeVwiXHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQWJiIHtcclxuICAgIC8vIENvbnN0YW50c1xyXG4gICAgZGF0YV90eXBlcyA9IFtcIkhVTUlSQVwiLCBcIk1JVEJFV0VSQlwiXTtcclxuICAgIGNvc3RzX2xpc3QgPSBbXHJcbiAgICAgIFwiSmFocmVzLUZhYnJpa3NhYmdhYmVwcmVpc1wiLFxyXG4gICAgICBcIkphaHJlcy1LYXNzZW5rYXVmcHJlaXNcIlxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBTdGF0dXNcclxuICAgIGRhdGFfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRGF0YVxyXG4gICAgZGF0YXNldCA9IDxhbnk+W107XHJcbiAgICBwcmFlcGFyYXRlID0gPGFueT5bXTtcclxuICAgIGRhdGFfZHVhbCA9IDxhbnk+W107XHJcbiAgICBkYXRhX2R1YWxfdG90YWwgPSA8YW55PltdO1xyXG5cclxuICAgIC8vIERyb3Bkb3duc1xyXG4gICAgb3RoZXJfbGlzdCA9IDxhbnk+W107XHJcblxyXG4gICAgLy8gT2JzZXJ2aW5nIGNoYW5nZXMgaW4gdGhlIHVpXHJcbiAgICBAb2JzZXJ2YWJsZSB1dl9zZWxlY3RlZCA9IHRydWU7XHJcbiAgICBAb2JzZXJ2YWJsZSBpYmRfc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgQG9ic2VydmFibGUgb3RoZXI7XHJcbiAgICBAb2JzZXJ2YWJsZSBjb3N0cztcclxuXHJcbiAgICB1dl9zZWxlY3RlZENoYW5nZWQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YV9sb2FkZWQgPyB0aGlzLnByZXBhcmVEYXRhKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGliZF9zZWxlY3RlZENoYW5nZWQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YV9sb2FkZWQgPyB0aGlzLnByZXBhcmVEYXRhKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQ2hhbmdlZCgpIHtcclxuICAgICAgdGhpcy5kYXRhX2xvYWRlZCA/IHRoaXMucHJlcGFyZURhdGEoKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29zdHNDaGFuZ2VkKCkge1xyXG4gICAgICB0aGlzLmRhdGFfbG9hZGVkID8gdGhpcy5wcmVwYXJlRGF0YSgpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkaW5nIGNzdiBmaWxlc1xyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgZ2V0RGF0YSA9ICQuZ2V0KFwiZGF0YS9kYXRhLmNzdlwiLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgcGFwYS5wYXJzZShkYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGF0YXNldCA9IHJlc3VsdHMuZGF0YVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBnZXRQcmVwID0gJC5nZXQoXCJkYXRhL1ByYWVwZXJhdGUuY3N2XCIsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBwYXBhLnBhcnNlKGRhdGEsIHtcclxuICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgc2VsZi5wcmFlcGFyYXRlID0gcmVzdWx0cy5kYXRhXHJcbiAgICAgICAgICAgIHNlbGYub3RoZXJfbGlzdCA9IHJlc3VsdHMuZGF0YS5tYXAoeCA9PiB4W1wiUHJvZHVrdG5hbWVcIl0pLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIHNlbGYub3RoZXIgPSBzZWxmLm90aGVyX2xpc3RbMF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJC53aGVuKGdldERhdGEsIGdldFByZXApLmRvbmUoeCA9PiB7XHJcbiAgICAgICAgc2VsZi5kYXRhX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgc2VsZi5wcmVwYXJlRGF0YSgpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZWxmLmNvc3RzID0gc2VsZi5jb3N0c19saXN0WzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVEYXRhKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBFbXB0eSBwbG90dGluZyBkYXRhc2V0c1xyXG4gICAgICBzZWxmLmRhdGFfZHVhbC5sZW5ndGggPSAwO1xyXG4gICAgICBzZWxmLmRhdGFfZHVhbF90b3RhbC5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgLy8gTWVkaWNhdGlvbnMgbGlzdFxyXG4gICAgICBsZXQgbWVkcyA9IFtcIkhVTUlSQVwiXVxyXG4gICAgICBtZWRzLnB1c2godGhpcy5vdGhlcilcclxuXHJcbiAgICAgIC8vIEZpbGwgcGxvdHRpbmcgZGF0YXNldHNcclxuICAgICAgbWVkcy5mb3JFYWNoKG0gPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBiYXNpYyBvYmplY3RcclxuICAgICAgICBsZXQgb3V0ID0ge1xyXG4gICAgICAgICAgeDogbSxcclxuICAgICAgICAgIEJhc2lzOiArdGhpcy5wcmFlcGFyYXRlLmZpbHRlcih4ID0+IHhbXCJQcm9kdWt0bmFtZVwiXSA9PSBtKVswXVtzZWxmLmNvc3RzXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RkID0ge307XHJcbiAgICAgICAgbGV0IG1heCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgZW5jb2RpbmcgZm9yIGRhdGEuY3N2IGZpbGUgc3R5bGUgbmFtZXNcclxuICAgICAgICBpZihtICE9IFwiSFVNSVJBXCIpIHtcclxuICAgICAgICAgIG0gPSBcIk1JVEJFV0VSQlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgdGVtb3JhcnkgZGF0YXNldHNcclxuICAgICAgICBsZXQgc3RhbmRhcnQgPSB0aGlzLmRhdGFzZXQuZmlsdGVyKGQgPT4gZFtcIk1lZFwiXSA9PSBtICYmIGRbXCJUeXBcIl0gPT0gXCJTdGFuZGFydFwiKVxyXG4gICAgICAgIGxldCBtYXhpbWFsID0gdGhpcy5kYXRhc2V0LmZpbHRlcihkID0+IGRbXCJNZWRcIl0gPT0gbSAmJiBkW1wiVHlwXCJdID09IFwiTWF4XCIpXHJcblxyXG4gICAgICAgIC8vIEdldCBTdGFuZGFydCBjb3N0c1xyXG4gICAgICAgIHN0YW5kYXJ0LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5pYmRfc2VsZWN0ZWQgJiYgeFtcIkFkZFwiXSA9PSBcIklCRFwiKSB7XHJcbiAgICAgICAgICAgIHN0ZFtcIklCRFwiXSA9ICt4LktBICsgK3guRkEgKyAreC5NQTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoc2VsZi51dl9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiVVZcIikge1xyXG4gICAgICAgICAgICBzdGRbXCJVVlwiXSA9ICt4LktBICsgK3guRkEgKyAreC5NQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvdXRbXCJTdGFuZGFydFwiXSA9IHN0ZFxyXG5cclxuICAgICAgICAvLyBHZXQgbWF4aW1hbCBjb3N0c1xyXG4gICAgICAgIG1heGltYWwuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmliZF9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiSUJEXCIpIHtcclxuICAgICAgICAgICAgbWF4W1wiSUJEXCJdID0gK3guS0EgKyAreC5GQSArICt4Lk1BO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XHJcbiAgICAgICAgICAgIG1heFtcIlVWXCJdID0gK3guS0EgKyAreC5GQSArICt4Lk1BO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG91dFtcIk1heFwiXSA9IG1heFxyXG5cclxuICAgICAgICB0aGlzLmRhdGFfZHVhbC5wdXNoKG91dClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBhbGxfbWVkcyA9IFtcIkhVTUlSQVwiXVxyXG4gICAgICBhbGxfbWVkcy5wdXNoKCAuLi5zZWxmLm90aGVyX2xpc3QpXHJcblxyXG4gICAgICBhbGxfbWVkcy5mb3JFYWNoKG0gPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBiYXNpYyBvYmplY3RcclxuICAgICAgICBsZXQgb3V0ID0ge1xyXG4gICAgICAgICAgeDogbSxcclxuICAgICAgICAgIEJhc2lzOiArdGhpcy5wcmFlcGFyYXRlLmZpbHRlcih4ID0+IHhbXCJQcm9kdWt0bmFtZVwiXSA9PSBtKVswXVtzZWxmLmNvc3RzXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RkID0ge307XHJcbiAgICAgICAgbGV0IG1heCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgZW5jb2RpbmcgZm9yIGRhdGEuY3N2IGZpbGUgc3R5bGUgbmFtZXNcclxuICAgICAgICBpZihtICE9IFwiSFVNSVJBXCIpIHtcclxuICAgICAgICAgIG0gPSBcIk1JVEJFV0VSQlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgdGVtb3JhcnkgZGF0YXNldHNcclxuICAgICAgICBsZXQgc3RhbmRhcnQgPSB0aGlzLmRhdGFzZXQuZmlsdGVyKGQgPT4gZFtcIk1lZFwiXSA9PSBtICYmIGRbXCJUeXBcIl0gPT0gXCJTdGFuZGFydFwiKVxyXG4gICAgICAgIGxldCBtYXhpbWFsID0gdGhpcy5kYXRhc2V0LmZpbHRlcihkID0+IGRbXCJNZWRcIl0gPT0gbSAmJiBkW1wiVHlwXCJdID09IFwiTWF4XCIpXHJcblxyXG4gICAgICAgIC8vIEdldCBTdGFuZGFydCBjb3N0c1xyXG4gICAgICAgIHN0YW5kYXJ0LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5pYmRfc2VsZWN0ZWQgJiYgeFtcIkFkZFwiXSA9PSBcIklCRFwiKSB7XHJcbiAgICAgICAgICAgIHN0ZFtcIklCRFwiXSA9ICt4LktBICsgK3guRkEgKyAreC5NQTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoc2VsZi51dl9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiVVZcIikge1xyXG4gICAgICAgICAgICBzdGRbXCJVVlwiXSA9ICt4LktBICsgK3guRkEgKyAreC5NQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvdXRbXCJTdGFuZGFydFwiXSA9IHN0ZFxyXG5cclxuICAgICAgICAvLyBHZXQgbWF4aW1hbCBjb3N0c1xyXG4gICAgICAgIG1heGltYWwuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmliZF9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiSUJEXCIpIHtcclxuICAgICAgICAgICAgbWF4W1wiSUJEXCJdID0gK3guS0EgKyAreC5GQSArICt4Lk1BO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XHJcbiAgICAgICAgICAgIG1heFtcIlVWXCJdID0gK3guS0EgKyAreC5GQSArICt4Lk1BO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG91dFtcIk1heFwiXSA9IG1heFxyXG5cclxuICAgICAgICB0aGlzLmRhdGFfZHVhbF90b3RhbC5wdXNoKG91dClcclxuICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dual-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dualBarChart = (function () {
        function dualBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dualBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dualBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dualBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dualBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dualBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.x_inner = d3.scaleBand()
                .padding(0.05);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#98C1D9", "#EE6C4D"])
                .domain(["Standart", "Max"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        dualBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dualBarChart.prototype.updateChart = function () {
            var self = this;
            var types = [];
            var keys = [];
            var costs = ["Standart", "Max"];
            if (this.data.length > 0)
                types = Object.getOwnPropertyNames(this.data[0]).slice(1);
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]["Standart"]);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.x_inner.domain(costs).rangeRound([0, this.x.bandwidth()]);
            this.y.domain([0, d3.max(this.data, function (d) { return d3.max(costs, function (key) { return Object.values(__assign({ Basis: d["Basis"] }, d[key])).reduce(function (a, b) { return a + b; }); }); })]).nice();
            var t = d3.transition("default")
                .duration(500);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.append("g")
                .attr("class", "medikament")
                .selectAll("g")
                .data(this.data)
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x(d.x) + ",0)"; })
                .selectAll("rect")
                .data(function (d) { return costs.map(function (key) { return { key: key, value: Object.values(__assign({ Basis: d["Basis"] }, d[key])).reduce(function (a, b) { return a + b; }) }; }); });
            chart.enter().append("rect")
                .attr("x", function (d) { return self.x_inner(d.key); })
                .attr("y", function (d) { return self.y(d.value); })
                .attr("width", self.x_inner.bandwidth())
                .attr("fill", function (d) { return self.z(d.key); })
                .attr("y", this.height)
                .attr("height", 0)
                .merge(chart).transition(t)
                .attr("height", function (d) { return self.height - self.y(d.value); })
                .attr("y", function (d) { return self.y(d.value); });
            chart.enter().append("text")
                .style("text-anchor", "middle")
                .attr("x", function (d) { return self.x_inner(d.key) + self.x_inner.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            chart.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(costs.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualBarChart.prototype, "data", void 0);
        dualBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dualBarChart);
        return dualBarChart;
    }());
    exports.dualBarChart = dualBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9kdWFsLWJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBa0NFLHNCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFoQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBb0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBR25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCwrQkFBUSxHQUFSO1lBQUEsaUJBcUJDO1lBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYTtpQkFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUMzRCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVB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QUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdEwsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7aUJBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBRS9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZ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QUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2lCQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUduQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUd4RyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQXhQUztZQUFULDRCQUFROztvREFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7eURBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O3lEQUFtQjtRQUNsQjtZQUFULDRCQUFROztvREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0RBQVU7UUFHckQ7WUFBVCw0QkFBUTs7a0RBQVc7UUFYVCxZQUFZO1lBRnhCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxZQUFZLENBMlB4QjtRQUFELG1CQUFDO0tBM1BELEFBMlBDLElBQUE7SUEzUFksb0NBQVkiLCJmaWxlIjoiY2hhcnRzL2R1YWwtYmFyLWNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBkdWFsQmFyQ2hhcnQge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzaXplX3N1YjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgYmFyY2hhcnQ7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB4X2lubmVyO1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgejtcbiAgcHJpdmF0ZSB6X2lubmVyO1xuICBwcml2YXRlIGxlZ2VuZDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplX3N1YiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgLnByb3BlcnR5T2JzZXJ2ZXIodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIFwib2Zmc2V0V2lkdGhcIilcbiAgICAgIC5zdWJzY3JpYmUobiA9PiB0aGlzLnJlc2l6ZSgpKVxuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIHRoaXMucmVzaXplX3N1Yi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAucGFkZGluZygwLjEpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcbiAgICB0aGlzLnhfaW5uZXIgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4wNSlcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG4gICAgdGhpcy56ID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5yYW5nZShbXCIjOThDMUQ5XCIgLFwiI0VFNkM0RFwiXSlcbiAgICAgIC5kb21haW4oW1wiU3RhbmRhcnRcIiwgXCJNYXhcIl0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLnRleHQoXCJLb3N0ZW5cIik7XG5cbiAgICAvLyBhZGQgbGVnZW5kXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMClcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIik7XG4gIH1cblxuICByZXNpemVDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2Z1xuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0XG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueFxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy55XG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgIGxldCB0eXBlcyA9IFtdXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGxldCBjb3N0cyA9IFtcIlN0YW5kYXJ0XCIsIFwiTWF4XCJdXG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB0eXBlcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5kYXRhWzBdW1wiU3RhbmRhcnRcIl0pO1xuXG4gICAgbGV0IHRvdGFscyA9IHRoaXMuZGF0YS5tYXAoeCA9PiB7XG4gICAgICBsZXQgcyA9IHsga2V5OiB4LngsIHZhbHVlOiAwIH07XG4gICAgICBrZXlzLmZvckVhY2goeSA9PiB7XG4gICAgICAgIHMudmFsdWUgPSBzLnZhbHVlICsgK3hbeV07XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSlcbiAgICBcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KSk7XG4gICAgdGhpcy54X2lubmVyLmRvbWFpbihjb3N0cykucmFuZ2VSb3VuZChbMCwgdGhpcy54LmJhbmR3aWR0aCgpXSk7XG4gICAgdGhpcy55LmRvbWFpbihbMCwgZDMubWF4KHRoaXMuZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZDMubWF4KGNvc3RzLCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW2tleV19KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTsgfSk7IH0pXSkubmljZSgpO1xuXG4gICAgbGV0IHQgPSBkMy50cmFuc2l0aW9uKFwiZGVmYXVsdFwiKVxuICAgICAgLmR1cmF0aW9uKDUwMCk7XG5cbiAgICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcblxuICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1lZGlrYW1lbnRcIilcbiAgICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBzZWxmLngoZC54KSArIFwiLDApXCI7IH0pXG4gICAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvc3RzLm1hcChmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW2tleV19KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKX19KTsgfSlcblxuICAgICAgY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnhfaW5uZXIoZC5rZXkpOyB9KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpOyB9KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueihkLmtleSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgICAgICAubWVyZ2UoY2hhcnQpLnRyYW5zaXRpb24odClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnkoZC52YWx1ZSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZC52YWx1ZSk7IH0pO1xuXG4gICAgICBjaGFydC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsc1wiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi54X2lubmVyKGQua2V5KSArIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKS8yOyB9KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpIC0gMzsgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuXG4gICAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gSm9pblxuICAgIGxldCBsZWdlbmRfZ3JvdXAgPSB0aGlzLmxlZ2VuZFxuICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgIC5kYXRhKGNvc3RzLnJldmVyc2UoKSwgeCA9PiB4KVxuXG4gICAgLy8gRW50ZXJcbiAgICBsZXQgbGVnZW5kcyA9IGxlZ2VuZF9ncm91cC5lbnRlcigpLmFwcGVuZChcImdcIilcblxuICAgIGxlZ2VuZHMuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLSAxOSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAxOSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCB0aGlzLnopO1xuXG4gICAgbGVnZW5kcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAtIDI0KVxuICAgICAgLmF0dHIoXCJ5XCIsIDkuNSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjMyZW1cIilcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgLy8gVXBkYXRlXG4gICAgbGVnZW5kX2dyb3VwLm1lcmdlKGxlZ2VuZHMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIGkgKiAyMCArIFwiKVwiOyB9KTtcblxuICAgIC8vIEV4aXRcbiAgICBsZWdlbmRfZ3JvdXAuZXhpdCgpLnJlbW92ZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dual-stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dualStackedBarChart = (function () {
        function dualStackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dualStackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dualStackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dualStackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dualStackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dualStackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.x_inner = d3.scaleBand()
                .padding(0.05);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"])
                .domain(["Basis", "UV", "IBD"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        dualStackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dualStackedBarChart.prototype.updateChart = function () {
            var self = this;
            var types = [];
            var keys = [];
            var costs = ["Standart", "Max"];
            if (this.data.length > 0)
                types = Object.getOwnPropertyNames(this.data[0]).slice(1);
            if (this.data.length > 0)
                keys = ["Basis"].concat(Object.getOwnPropertyNames(this.data[0]["Standart"]));
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.x_inner.domain(costs).rangeRound([0, this.x.bandwidth()]);
            this.y.domain([0, d3.max(this.data, function (d) { return Object.values(__assign({ Basis: d["Basis"] }, d["Max"])).reduce(function (a, b) { return a + b; }); })]).nice();
            var t = d3.transition("default")
                .duration(500);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.append("g")
                .attr("class", "medikament")
                .selectAll("g")
                .data(this.data)
                .enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x(d.x) + ",0)"; })
                .selectAll(".groups")
                .data(function (d) { return costs.map(function (key) { return { key: key, value: __assign({ Basis: d.Basis }, d[key]) }; }); });
            var groups = chart.enter().append("g")
                .attr("transform", function (d) { return "translate(" + self.x_inner(d.key) + ",0)"; })
                .attr("class", "groups");
            var bars = groups.selectAll("rect")
                .data(function (d) { return d3.stack().keys(keys)([d.value]); });
            bars.enter().append("rect")
                .attr("x", 0)
                .attr("width", self.x_inner.bandwidth())
                .attr("fill", function (d) { return self.z(d.key); })
                .attr("y", this.height)
                .attr("height", 0)
                .merge(groups).transition(t)
                .attr("y", function (d) { return self.y(d[0][1]); })
                .attr("height", function (d) { return self.y(d[0][0]) - self.y(d[0][1]); });
            bars.enter().append("text")
                .style("text-anchor", "middle")
                .attr("x", function (d) { return self.x_inner.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(Object.values(d[0].data).reduce(function (a, b) { return a + b; })) - 3; })
                .text(function (d) { return Object.values(d[0].data).reduce(function (a, b) { return a + b; }); });
            chart.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(keys.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dualStackedBarChart.prototype, "data", void 0);
        dualStackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dualStackedBarChart);
        return dualStackedBarChart;
    }());
    exports.dualStackedBarChart = dualStackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9kdWFsLXN0YWNrZWQtYmFyLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0E7UUFrQ0UsNkJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQWhDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEUsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsV0FBTSxHQUFHLENBQUMsQ0FBQztZQU1YLFNBQUksR0FBRyxFQUFFLENBQUM7WUFvQlosV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFHbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELHNDQUFRLEdBQVI7WUFBQSxpQkFxQkM7WUFwQkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO2lCQUNqQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7aUJBQzNELFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFN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O1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs2REFBVTtRQUdyRDtZQUFULDRCQUFROzt5REFBVztRQVhULG1CQUFtQjtZQUYvQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksbUJBQW1CLENBNlAvQjtRQUFELDBCQUFDO0tBN1BELEFBNlBDLElBQUE7SUE3UFksa0RBQW1CIiwiZmlsZSI6ImNoYXJ0cy9kdWFsLXN0YWNrZWQtYmFyLWNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBkdWFsU3RhY2tlZEJhckNoYXJ0IHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2l6ZV9zdWI7XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGJhcmNoYXJ0O1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeF9pbm5lcjtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIHo7XG4gIHByaXZhdGUgel9pbm5lcjtcbiAgcHJpdmF0ZSBsZWdlbmQ7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZV9zdWIgPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgIC5wcm9wZXJ0eU9ic2VydmVyKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LCBcIm9mZnNldFdpZHRoXCIpXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5yZXNpemUoKSlcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlc2l6ZV9zdWIuZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4xKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy54X2lubmVyID0gZDMuc2NhbGVCYW5kKClcbiAgICAgIC5wYWRkaW5nKDAuMDUpXG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuICAgIHRoaXMueiA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuICAgICAgLmRvbWFpbihbXCJCYXNpc1wiLCBcIlVWXCIsIFwiSUJEXCJdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgIC50ZXh0KFwiS29zdGVuXCIpO1xuXG4gICAgLy8gYWRkIGxlZ2VuZFxuICAgIHRoaXMubGVnZW5kID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpO1xuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICBsZXQgdHlwZXMgPSBbXVxuICAgIGxldCBrZXlzID0gW11cbiAgICBsZXQgY29zdHMgPSBbXCJTdGFuZGFydFwiLCBcIk1heFwiXVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkgdHlwZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmRhdGFbMF0pLnNsaWNlKDEpO1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IFtcIkJhc2lzXCIsIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXVtcIlN0YW5kYXJ0XCJdKV07XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgcy52YWx1ZSA9IHMudmFsdWUgKyAreFt5XTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcztcbiAgICB9KVxuXG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmRhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkpO1xuICAgIHRoaXMueF9pbm5lci5kb21haW4oY29zdHMpLnJhbmdlUm91bmQoWzAsIHRoaXMueC5iYW5kd2lkdGgoKV0pO1xuICAgIHRoaXMueS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIE9iamVjdC52YWx1ZXMoeyBCYXNpczogZFtcIkJhc2lzXCJdLCAuLi5kW1wiTWF4XCJdfSkucmVkdWNlKChhLCBiKSA9PiBhICsgYik7IH0pXSkubmljZSgpO1xuICAgIGxldCB0ID0gZDMudHJhbnNpdGlvbihcImRlZmF1bHRcIilcbiAgICAgIC5kdXJhdGlvbig1MDApO1xuXG4gICAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG5cbiAgICAgIGxldCBjaGFydCA9IHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgc2VsZi54KGQueCkgKyBcIiwwKVwiOyB9KVxuICAgICAgICAuc2VsZWN0QWxsKFwiLmdyb3Vwc1wiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBjb3N0cy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiB7IEJhc2lzOiBkLkJhc2lzLCAuLi5kW2tleV19IH19KTsgfSlcblxuICAgICAgbGV0IGdyb3VwcyA9IGNoYXJ0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIHNlbGYueF9pbm5lcihkLmtleSkgKyBcIiwwKVwiOyB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JvdXBzXCIpXG5cbiAgICAgIGxldCBiYXJzID0gZ3JvdXBzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDMuc3RhY2soKS5rZXlzKGtleXMpKFtkLnZhbHVlXSk7IH0pXG5cbiAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueF9pbm5lci5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueihkLmtleSk7IH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgICAgLm1lcmdlKGdyb3VwcykudHJhbnNpdGlvbih0KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMF1bMV0pOyB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZFswXVswXSkgLSBzZWxmLnkoZFswXVsxXSk7IH0pXG5cbiAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnhfaW5uZXIuYmFuZHdpZHRoKCkvMjsgfSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShPYmplY3QudmFsdWVzKGRbMF0uZGF0YSkucmVkdWNlKChhLCBiKSA9PiBhICsgYikpIC0gMzsgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gT2JqZWN0LnZhbHVlcyhkWzBdLmRhdGEpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpOyB9KVxuXG4gICAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gSm9pblxuICAgIGxldCBsZWdlbmRfZ3JvdXAgPSB0aGlzLmxlZ2VuZFxuICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgIC5kYXRhKGtleXMucmV2ZXJzZSgpLCB4ID0+IHgpXG5cbiAgICAvLyBFbnRlclxuICAgIGxldCBsZWdlbmRzID0gbGVnZW5kX2dyb3VwLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXG4gICAgbGVnZW5kcy5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aCAtIDE5KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxOSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE5KVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIHRoaXMueik7XG5cbiAgICBsZWdlbmRzLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoIC0gMjQpXG4gICAgICAuYXR0cihcInlcIiwgOS41KVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuMzJlbVwiKVxuICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSk7XG5cbiAgICAvLyBVcGRhdGVcbiAgICBsZWdlbmRfZ3JvdXAubWVyZ2UobGVnZW5kcykuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgaSAqIDIwICsgXCIpXCI7IH0pO1xuXG4gICAgLy8gRXhpdFxuICAgIGxlZ2VuZF9ncm91cC5leGl0KCkucmVtb3ZlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dynamic-stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamicStackedBarChart = (function () {
        function dynamicStackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        dynamicStackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        dynamicStackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        dynamicStackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        dynamicStackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        dynamicStackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.format = d3.format(",.2f");
        };
        dynamicStackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        dynamicStackedBarChart.prototype.updateChart = function () {
            var _this = this;
            var self = this;
            var keys = [];
            var elements = [];
            var colors = new Map();
            keys = Array.from(new Set(self.data.map(function (item) { return item.x; })));
            keys.forEach(function (k) {
                elements = Object.getOwnPropertyNames(_this.data[0]).slice(1);
            });
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]).slice(1);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys = Object.getOwnPropertyNames(x).slice(1);
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.y.domain([0, d3.max(totals, function (x) { return x.value; })]).nice();
            this.z.domain(keys);
            var t = d3.transition("default")
                .duration(500);
            var stacks = [];
            this.data.forEach(function (d) {
                keys = Object.getOwnPropertyNames(d).slice(1);
                stacks.push({ key: d.x, stack: d3.stack().keys(keys)([d]) });
                var c = d3.scaleOrdinal()
                    .range(["#33CA7F", "#ECE4B7", "#FC9F5B"])
                    .domain(keys);
                colors.set(d.x, c);
            });
            var stack = d3.stack().keys(keys)(self.data);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.selectAll(".medikament")
                .data(stacks, function (x) { return x.key; });
            var bars = chart.enter().append("g")
                .attr("class", "medikament");
            bars.selectAll("rect")
                .data(function (d) { return d.stack; })
                .enter().append("rect")
                .attr("x", function (d) { return self.x(d[0].data.x); })
                .attr("width", self.x.bandwidth())
                .attr("y", this.height)
                .attr("height", 0);
            bars.selectAll("rect")
                .transition(t)
                .attr("y", function (d) { return self.y(d[0][1]); })
                .attr("height", function (d) { return self.y(d[0][0]) - self.y(d[0][1]); })
                .attr("fill", function (d) { return colors.get(d[0].data.x)(d.key); });
            bars.selectAll("text")
                .data(function (d) { return d.stack; })
                .enter().append("text")
                .style("text-anchor", "middle")
                .style("fill", "black")
                .attr("x", function (d) { return self.x(d[0].data.x) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d[0][1] + (d[0][0] - d[0][1]) / 2) + 5; })
                .text(function (d) { return d.key + " (" + self.format(100 / d3.sum(Object.values(d[0].data).slice(1)) * d[0].data[d.key]) + "%)"; });
            chart.exit().remove();
            var labels = this.barchart.selectAll(".labels")
                .data(totals, function (x) { return x.key; });
            labels.enter().append("text")
                .attr("class", "labels")
                .style("text-anchor", "middle")
                .merge(labels)
                .attr("x", function (d) { return self.x(d.key) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            labels.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], dynamicStackedBarChart.prototype, "data", void 0);
        dynamicStackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], dynamicStackedBarChart);
        return dynamicStackedBarChart;
    }());
    exports.dynamicStackedBarChart = dynamicStackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9keW5hbWljLXN0YWNrZWQtYmFyLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBZ0NFLGdDQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUE5QmhDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBa0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBR25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCx5Q0FBUSxHQUFSO1lBQUEsaUJBcUJDO1lBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYTtpQkFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUMzRCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFF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QUFDLENBQUMsU0FBUyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1RSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVFLElBQUksQ0FBQyxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO1lBR3ZJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUd0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7aUJBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxDQUFBO1lBRTNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBUyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFeEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ3JELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHL0IsQ0FBQztRQS9QUztZQUFULDRCQUFROzs4REFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7bUVBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O21FQUFtQjtRQUNsQjtZQUFULDRCQUFROzs4REFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0VBQVU7UUFHckQ7WUFBVCw0QkFBUTs7NERBQVc7UUFYVCxzQkFBc0I7WUFGbEMsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLHNCQUFzQixDQWtRbEM7UUFBRCw2QkFBQztLQWxRRCxBQWtRQyxJQUFBO0lBbFFZLHdEQUFzQiIsImZpbGUiOiJjaGFydHMvZHluYW1pYy1zdGFja2VkLWJhci1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgZHluYW1pY1N0YWNrZWRCYXJDaGFydCB7XG4gIC8vIE9uZS1XYXlcbiAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDYwLCBib3R0b206IDM1LCBsZWZ0OiA2MCwgbWlkZGxlOiAyMCB9O1xuICBAYmluZGFibGUgeF9hdHRyaWJ1dGUgPSBcInhcIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG4gIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNpemVfc3ViO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBiYXJjaGFydDtcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgejtcbiAgcHJpdmF0ZSBmb3JtYXQ7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZV9zdWIgPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgIC5wcm9wZXJ0eU9ic2VydmVyKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LCBcIm9mZnNldFdpZHRoXCIpXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5yZXNpemUoKSlcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlc2l6ZV9zdWIuZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4xKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuICAgIHRoaXMueiA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgLnRleHQoXCJLb3N0ZW5cIik7XG5cbiAgICAvLyBUZXh0IGZvcm1hdFxuICAgIHRoaXMuZm9ybWF0ID0gZDMuZm9ybWF0KFwiLC4yZlwiKVxuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGxldCBlbGVtZW50cyA9IFtdXG4gICAgbGV0IGNvbG9ycyA9IG5ldyBNYXAoKVxuICAgIC8vIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG4gICAga2V5cyA9ICBBcnJheS5mcm9tKG5ldyBTZXQoc2VsZi5kYXRhLm1hcChpdGVtID0+IGl0ZW0ueCkpKTtcblxuICAgIGtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGVsZW1lbnRzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5kYXRhWzBdKS5zbGljZSgxKTtcbiAgICB9KVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh4KS5zbGljZSgxKTtcblxuICAgICAga2V5cy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICBzLnZhbHVlID0gcy52YWx1ZSArICt4W3ldO1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHM7XG4gICAgfSlcblxuICAgIHRoaXMueC5kb21haW4odGhpcy5kYXRhLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pKTtcbiAgICB0aGlzLnkuZG9tYWluKFswLCBkMy5tYXgodG90YWxzLCB4ID0+IHgudmFsdWUpXSkubmljZSgpO1xuICAgIHRoaXMuei5kb21haW4oa2V5cyk7XG5cbiAgICBsZXQgdCA9IGQzLnRyYW5zaXRpb24oXCJkZWZhdWx0XCIpXG4gICAgICAuZHVyYXRpb24oNTAwKTtcblxuICAgIGxldCBzdGFja3MgPSBbXVxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGQpLnNsaWNlKDEpO1xuICAgICAgc3RhY2tzLnB1c2goe2tleTogZC54LCBzdGFjazogZDMuc3RhY2soKS5rZXlzKGtleXMpKFtkXSl9KTtcblxuICAgICAgbGV0IGMgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgICAucmFuZ2UoW1wiIzMzQ0E3RlwiICxcIiNFQ0U0QjdcIiwgXCIjRkM5RjVCXCJdKVxuICAgICAgICAuZG9tYWluKGtleXMpXG5cbiAgICAgIGNvbG9ycy5zZXQoZC54LCBjKVxuICAgIH0pXG5cbiAgICBsZXQgc3RhY2sgPSBkMy5zdGFjaygpLmtleXMoa2V5cykoc2VsZi5kYXRhKVxuXG4gICAgLy8gRGVsZXRlIGFsbCBiYXJzIGJlZm9yZSByZXJlbmRlcmluZyB0aGVtXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIubWVkaWthbWVudFwiKS5yZW1vdmUoKVxuXG4gICAgLy8gSm9pblxuICAgIGxldCBjaGFydCA9IHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIilcbiAgICAgIC5kYXRhKHN0YWNrcywgeCA9PiB4LmtleSlcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGJhcnMgPSBjaGFydC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG5cbiAgICBiYXJzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YWNrOyB9KVxuICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZFswXS5kYXRhLngpOyB9KVxuICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLnguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuXG4gICAgLy8gVXBkYXRlXG4gICAgYmFycy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkWzBdWzFdKTsgfSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkWzBdWzBdKSAtIHNlbGYueShkWzBdWzFdKTsgfSlcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb2xvcnMuZ2V0KGRbMF0uZGF0YS54KShkLmtleSk7IH0pXG5cbiAgICBiYXJzLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YWNrOyB9KVxuICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZFswXS5kYXRhLngpICtzZWxmLnguYmFuZHdpZHRoKCkvMjsgfSlcbiAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZFswXVsxXSsoZFswXVswXSAtIGRbMF1bMV0pLzIpICsgNTsgfSlcbiAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQua2V5ICsgXCIgKFwiKyBzZWxmLmZvcm1hdCgxMDAvZDMuc3VtKE9iamVjdC52YWx1ZXMoZFswXS5kYXRhKS5zbGljZSgxKSkqZFswXS5kYXRhW2Qua2V5XSkgK1wiJSlcIn0pXG5cbiAgICAvLyBFeGl0XG4gICAgY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gQWRkIHRleHRzXG4gICAgbGV0IGxhYmVscyA9IHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLmxhYmVsc1wiKVxuICAgICAgLmRhdGEodG90YWxzLCB4ID0+IHgua2V5KVxuXG4gICAgbGFiZWxzLmVudGVyKCkuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsc1wiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLm1lcmdlKGxhYmVscylcbiAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLngoZC5rZXkpICsgc2VsZi54LmJhbmR3aWR0aCgpLzI7IH0pXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGQudmFsdWUpIC0gMzsgfSlcbiAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWU7IH0pXG5cbiAgICBsYWJlbHMuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcblxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcblxuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-focus',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartFocus = (function () {
        function LineChartFocus(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartFocus.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
            this.updateChart();
        };
        LineChartFocus.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
            }
        };
        LineChartFocus.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartFocus.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartFocus.prototype.initChart = function () {
            var _this = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("days");
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(function (d) { return _this.y_attribute; });
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            var y_attribute = this.y_attribute;
            this.focus.append("g")
                .attr("class", "brush")
                .call(d3.brushY()
                .extent([[0, 0], [this.focus_width, this.focus_height]])
                .on("brush", function (e) {
                if (!d3.event.sourceEvent)
                    return;
                if (!d3.event.selection) {
                    _this.brushing = [];
                    return;
                }
                ;
                var extent = d3.event.selection.map(_this.y.invert);
                var out = [];
                _this.linechart.selectAll(".line")
                    .filter(function (d) {
                    if (d["data"][d["data"].length - 1][y_attribute] >= extent[1] && d["data"][d["data"].length - 1][y_attribute] <= extent[0]) {
                        out.push(d["id"]);
                    }
                });
                _this.brushing = out;
            })
                .on("end", function (e) {
                if (!d3.event.sourceEvent)
                    return;
                if (!d3.event.selection) {
                    _this.brushing = [];
                    return;
                }
                ;
                var extent = d3.event.selection.map(_this.y.invert);
                var out = [];
                _this.linechart.selectAll(".line")
                    .filter(function (d) {
                    if (d["data"][d["data"].length - 1][y_attribute] >= extent[1] && d["data"][d["data"].length - 1][y_attribute] <= extent[0]) {
                        out.push(d["id"]);
                    }
                });
                _this.brushing = out;
            }));
        };
        LineChartFocus.prototype.updateHighlight = function () {
            this.linechart.selectAll("path.line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            });
            this.linechart.selectAll("path.line.highlight").moveToFront();
        };
        LineChartFocus.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartFocus.prototype, "data", void 0);
        LineChartFocus = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartFocus);
        return LineChartFocus;
    }());
    exports.LineChartFocus = LineChartFocus;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBdUNFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFyQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBb0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLGNBQVMsR0FBRyxHQUFHLENBQUM7WUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFDbkIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELGlDQUFRLEdBQVI7WUFBQSxpQkF3QkM7WUF2QkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFHSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUV0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRXZELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRXZFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUUxRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFHRCxvQ0FBVyxHQUFYLFVBQVksT0FBTztZQUNmLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ3pDLENBQUM7UUFDTCxDQUFDO1FBRUQsc0NBQWEsR0FBYjtZQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQixDQUFDO1FBQ0wsQ0FBQztRQUVELCtCQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxrQ0FBUyxHQUFUO1lBQUEsaUJBOEhDO1lBNUhDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDaEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRztpQkFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLFdBQVcsRUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRSxHQUFHLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHO2lCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxXQUFXLEVBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRSxHQUFHLENBQUMsQ0FBQztZQUduRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQ3RCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQ3RCLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQzFCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUdsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNyRCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBR3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDeEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUdsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNyRCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBR3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDcEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUdyQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUN4QixLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDYixJQUFJLENBQUMsVUFBQyxDQUFDLElBQU8sTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztZQUc3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFFLElBQUksQ0FBQyxXQUFXLEdBQUUsTUFBTSxDQUFDO2lCQUN6RCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBR3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDcEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUMzQixJQUFJLENBQUMsVUFBQyxDQUFDLElBQU8sTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztZQUc3QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUU7aUJBQ3JCLENBQUMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDO2lCQUNyQyxDQUFDLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBRTNDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUE7WUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDdEIsSUFBSSxDQUNELEVBQUUsQ0FBQyxNQUFNLEVBQUU7aUJBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUN2RCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztnQkFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO29CQUFDLE1BQU0sQ0FBQztnQkFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLEdBQVEsRUFBRSxDQUFBO29CQUN2QixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFBQSxDQUFDO2dCQUVGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUE7Z0JBRWpCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztxQkFDOUIsTUFBTSxDQUFDLFVBQVMsQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEgsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtvQkFDckIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFFSixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtZQUMzQixDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFJLENBQUMsUUFBUSxHQUFRLEVBQUUsQ0FBQTtvQkFDdkIsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQUEsQ0FBQztnQkFFRixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFBO2dCQUVqQixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7cUJBQzlCLE1BQU0sQ0FBQyxVQUFTLENBQUM7b0JBQ2QsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BILEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7b0JBQ3JCLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7Z0JBRUosS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7WUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7UUFFRCx3Q0FBZSxHQUFmO1lBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2lCQUNoQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQWUsQ0FBQztnQkFDbEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBZSxDQUFDO2dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUVMLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEUsQ0FBQztRQUVELG9DQUFXLEdBQVg7WUFBQSxpQkE4RUM7WUE1RUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFuQixDQUFtQixDQUFDLEVBQTNELENBQTJELENBQUMsQ0FBQTtZQUNyRyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxFQUFFLENBQUMsR0FBRyxDQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQW5CLENBQW1CLENBQUMsRUFBM0QsQ0FBMkQsQ0FBQyxDQUFBO1lBQ3JHLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEVBQUUsQ0FBQyxHQUFHLENBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxFQUEzRCxDQUEyRCxDQUFDLENBQUE7WUFDckcsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFuQixDQUFtQixDQUFDLEVBQTNELENBQTJELENBQUMsQ0FBQTtZQUVyRyxJQUFJLFVBQVUsR0FBUyxFQUFFLENBQUM7WUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFRO2dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEQsQ0FBQyxDQUFDLENBQUE7WUFFSCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFHOUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRTtpQkFDcEIsS0FBSyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztpQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3ZCLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDeEQsVUFBVSxDQUFDLENBQUM7WUFFakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFRLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUcvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7aUJBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2lCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFHZixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7aUJBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2lCQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUloRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFHdEIsS0FBSyxDQUFDLEtBQUssRUFBRTtpQkFDVixNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixPQUFPLENBQUMsV0FBVyxFQUFFLFVBQWUsQ0FBQztnQkFDbEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2lCQUNELE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBZSxDQUFDO2dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQUMsQ0FBQztZQUMxQixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUkvQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFHNUIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2lCQUVwQixJQUFJLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFBQyxDQUFDLENBQUM7aUJBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sTUFBTSxDQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQztpQkFDRCxVQUFVLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBdFRTO1lBQVQsNEJBQVE7O3NEQUFtRTtRQUNsRTtZQUFULDRCQUFROzsyREFBbUI7UUFDbEI7WUFBVCw0QkFBUTs7MkRBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O3NEQUFZO1FBR2lDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt3REFBVTtRQUdyRDtZQUFULDRCQUFROztvREFBVztRQVhULGNBQWM7WUFGMUIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLGNBQWMsQ0F5VDFCO1FBQUQscUJBQUM7S0F6VEQsQUF5VEMsSUFBQTtJQXpUWSx3Q0FBYyIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydC1mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydEZvY3VzIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBsaW5lY2hhcnQ7XG4gIHByaXZhdGUgZm9jdXM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIGZvY3VzX3g7XG4gIHByaXZhdGUgdmFsdWVsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmxjX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuODtcbiAgICAgIHRoaXMuZm9jdXNfd2lkdGggPSB0aGlzLndpZHRoICogMC4yIC0gdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMubGNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmZvY3VzX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmZvY3VzX29mZnNldCA9IHRoaXMubGNfd2lkdGggKyB0aGlzLm1hcmdpbi5taWRkbGUgKyB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMubGluZWNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmxjX2hlaWdodClcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIHRoaXMuZm9jdXMgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfb2Zmc2V0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdGhpcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmxjX3dpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5mb2N1c194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoWzAsIHRoaXMuZm9jdXNfd2lkdGhdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQoXCJkYXlzXCIpO1xuXG4gICAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZX0pO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiKyB0aGlzLmZvY3VzX3dpZHRoICtcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIHRoaXMueV9hdHRyaWJ1dGV9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnJ1c2hcIilcbiAgICAgIC5jYWxsKFxuICAgICAgICAgIGQzLmJydXNoWSgpXG4gICAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbdGhpcy5mb2N1c193aWR0aCwgdGhpcy5mb2N1c19oZWlnaHRdXSlcbiAgICAgICAgICAub24oXCJicnVzaFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSA8YW55PltdXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH07IC8vIElnbm9yZSBlbXB0eSBzZWxlY3Rpb25zLlxuXG4gICAgICAgICAgICAgIGxldCBleHRlbnQgPSBkMy5ldmVudC5zZWxlY3Rpb24ubWFwKHRoaXMueS5pbnZlcnQpO1xuICAgICAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChkW1wiaWRcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBvdXRcbiAgICAgIH0pXG4gICAgICAub24oXCJlbmRcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmJydXNoaW5nID0gPGFueT5bXVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfTsgLy8gSWdub3JlIGVtcHR5IHNlbGVjdGlvbnMuXG5cbiAgICAgICAgICBsZXQgZXh0ZW50ID0gZDMuZXZlbnQuc2VsZWN0aW9uLm1hcCh0aGlzLnkuaW52ZXJ0KTtcbiAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGRbXCJpZFwiXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IG91dFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSGlnaGxpZ2h0KCkge1xuXG4gICAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeF9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuXG4gICAgbGV0IGZvY3VzX2RhdGEgPSA8YW55PiBbXTtcblxuICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgIGZvY3VzX2RhdGEucHVzaChkW1wiZGF0YVwiXVtkW1wiZGF0YVwiXS5sZW5ndGgtMV0pXG4gICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIC8vIGxldCBiaW5zID0gdGhpcy5oaXN0b2dyYW0oZm9jdXNfZGF0YSlcbiAgICBsZXQgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAgIC52YWx1ZSgoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSlcbiAgICAgICAgLmRvbWFpbih0aGlzLnkuZG9tYWluKCkpXG4gICAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgICAoZm9jdXNfZGF0YSk7XG5cbiAgICB0aGlzLmZvY3VzX3guZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAgIC5kYXRhKGJpbnMpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGJhcnNcbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgLy8gICAuYXR0cihcInhcIiwgMSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiB7XG5cdFx0ICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkLngxKSArIFwiKVwiOyB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geyByZXR1cm4gIHRoaXMuZm9jdXNfeChkLmxlbmd0aCk7IH0pXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnkoZC54MCkgLSB0aGlzLnkoZC54MSkgLSAxO1xuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9CYWNrKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-gauss',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartGauss = (function () {
        function LineChartGauss(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
        };
        LineChartGauss.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
                this.focus.selectAll("path.focusline").remove();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
                this.focus.selectAll("path.focusline").remove();
            }
        };
        LineChartGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartGauss.prototype.getGaussian = function () {
            var data = [];
            var rnd = d3.randomUniform(-3, 3);
            for (var i = 0; i < 5000; i++) {
                var q = rnd();
                var p = this.gaussian(q, this.gauss_y.invert(this.center), this.gauss_sigma(this.weight));
                var el = {
                    "y": q,
                    "x": p
                };
                data.push(el);
            }
            ;
            this.gradientColor.domain([0, d3.max(data, function (x) { return x["x"]; })]);
            data.sort(function (a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });
            return data;
        };
        ;
        LineChartGauss.prototype.gaussian = function (x, mean, sigma) {
            var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
            x = (x - mean) / sigma;
            var g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;
            if (g < 0.001)
                g = 0;
            return g;
        };
        LineChartGauss.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.focus
                .append("rect")
                .attr("width", this.focus_width)
                .attr("height", this.focus_height)
                .style("opacity", 0)
                .on("mousedown", function (d) {
                var out = new Map();
                self.center = self.y.invert(d3.mouse(this)[1]);
                self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                self.updateGauss();
                self.mouse_event = d3.select(this)
                    .on("mousemove", function (d) {
                    var out = new Map();
                    self.center = self.y.invert(d3.mouse(this)[1]);
                    self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                    self.updateGauss();
                    self.data.forEach(function (d) {
                        out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.brushing = out;
                    self.updateHighlight();
                })
                    .on("mouseup", function (d) {
                    self.mouse_event.on("mousemove", null).on("mouseup", null);
                });
            })
                .moveToFront();
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.gauss_x = d3.scaleLinear();
            this.gauss_y = d3.scaleLinear()
                .domain([-3, 3]);
            this.gauss_sigma = d3.scaleLinear()
                .range([0.1, 5])
                .domain([2, this.focus_width]);
            this.gradientColor = d3.scaleLinear()
                .range([0, 1]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(this.y_label);
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            this.focusline = d3.line()
                .x(function (d) { return _this.focus_x(_this.gauss_x(d["x"])); })
                .y(function (d) { return _this.y(_this.gauss_y(d["y"])); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
        };
        LineChartGauss.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        LineChartGauss.prototype.updateGauss = function () {
            var _this = this;
            var line_data = this.getGaussian();
            this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.focus.selectAll("path.focusline").remove();
            var focus_line = this.focus.selectAll("path.focusline")
                .data([line_data]);
            focus_line.exit().remove();
            focus_line.enter()
                .append("path")
                .attr("class", "focusline")
                .attr("d", function (d) { return _this.focusline(d); })
                .moveToFront();
        };
        LineChartGauss.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.gauss_y.range(this.y.domain());
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "data", void 0);
        LineChartGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartGauss);
        return LineChartGauss;
    }());
    exports.LineChartGauss = LineChartGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBaURFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUEvQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFlBQU8sR0FBRyxNQUFNLENBQUM7WUFDakIsWUFBTyxHQUFHLEdBQUcsQ0FBQztZQUNkLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBc0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBS2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsY0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztZQUNqQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUNuQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztZQUd6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0QsaUNBQVEsR0FBUjtZQUFBLGlCQXVCQztZQXRCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUks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QUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3dEQUFVO1FBR3JEO1lBQVQsNEJBQVE7O29EQUFXO1FBYlQsY0FBYztZQUYxQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1lBQzlCLDBCQUFNLEVBQUU7O1dBQ0ksY0FBYyxDQTZZMUI7UUFBRCxxQkFBQztLQTdZRCxBQTZZQyxJQUFBO0lBN1lZLHdDQUFjIiwiZmlsZSI6ImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0R2F1c3Mge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgeV9sYWJlbCA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGxpbmVjaGFydDtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ3JhZGllbnRDb2xvcjtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgZm9jdXNsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcbiAgcHJpdmF0ZSBjZW50ZXIgPSAxLjA7XG4gIHByaXZhdGUgd2VpZ2h0ID0gMS4wO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgcHJpdmF0ZSBsY193aWR0aCA9IDUwO1xuICBwcml2YXRlIGxjX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c193aWR0aCA9IDUwO1xuICBwcml2YXRlIGZvY3VzX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c19vZmZzZXQgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICAgIHRoaXMubGNfd2lkdGggPSB0aGlzLndpZHRoICogMC44O1xuICAgICAgdGhpcy5mb2N1c193aWR0aCA9IHRoaXMud2lkdGggKiAwLjIgLSB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgdGhpcy5sY19oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMuZm9jdXNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICAgIHRoaXMuZm9jdXNfb2Zmc2V0ID0gdGhpcy5sY193aWR0aCArIHRoaXMubWFyZ2luLm1pZGRsZSArIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgICBpZih0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICAgICAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKClcbiAgICAgIH1cbiAgfVxuXG4gIHJlZHJhd0NoYW5nZWQoKSB7XG4gICAgICBpZih0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0KCk7XG4gICAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBnZXRHYXVzc2lhbigpIHtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIC8vIGxldCBybmQgPSBkMy5yYW5kb21Ob3JtYWwoKTtcbiAgICBsZXQgcm5kID0gZDMucmFuZG9tVW5pZm9ybSgtMywgMyk7XG5cbiAgLy8gbG9vcCB0byBwb3B1bGF0ZSBkYXRhIGFycmF5IHdpdGhcbiAgLy8gcHJvYmFiaWx5IC0gcXVhbnRpbGUgcGFpcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDAwOyBpKyspIHtcbiAgICAgIGxldCBxID0gcm5kKCkgLy8gY2FsYyByYW5kb20gZHJhdyBmcm9tIHVuaWZvcm0gZGlzdFxuICAgICAgbGV0IHAgPSB0aGlzLmdhdXNzaWFuKHEsIHRoaXMuZ2F1c3NfeS5pbnZlcnQodGhpcy5jZW50ZXIpLCB0aGlzLmdhdXNzX3NpZ21hKHRoaXMud2VpZ2h0KSkgLy8gY2FsYyBwcm9iIG9mIHJhbmQgZHJhd1xuICAgICAgbGV0IGVsID0ge1xuICAgICAgICAgIFwieVwiOiBxLFxuICAgICAgICAgIFwieFwiOiBwXG4gICAgICB9XG4gICAgICBkYXRhLnB1c2goZWwpXG4gIH07XG5cbiAgdGhpcy5ncmFkaWVudENvbG9yLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIHggPT4geFtcInhcIl0pXSlcblxuICAvLyBuZWVkIHRvIHNvcnQgZm9yIHBsb3R0aW5nXG4gIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICAgICBkYXRhLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChhLnkgPiBiLnkpID8gMSA6ICgoYi55ID4gYS55KSA/IC0xIDogMCk7fSApO1xuICAgICByZXR1cm4gZGF0YTtcblxuICB9O1xuXG4gIC8vdGFrZW4gZnJvbSBKYXNvbiBEYXZpZXMgc2NpZW5jZSBsaWJyYXJ5XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbmRhdmllcy9zY2llbmNlLmpzL1xuICBnYXVzc2lhbih4LCBtZWFuLCAgc2lnbWEpIHtcbiAgXHRsZXQgZ2F1c3NpYW5Db25zdGFudCA9IDEgLyBNYXRoLnNxcnQoMiAqIE1hdGguUEkpO1xuXG4gICAgICB4ID0gKHggLSBtZWFuKSAvIHNpZ21hO1xuICAgICAgbGV0IGcgPSBnYXVzc2lhbkNvbnN0YW50ICogTWF0aC5leHAoLS41ICogeCAqIHgpIC8gc2lnbWE7XG5cbiAgICAgIGlmKGcgPCAwLjAwMSkgZyA9IDA7XG5cbiAgICAgIHJldHVybiBnO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5saW5lY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMubGNfaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIrIHRoaXMubWFyZ2luLnRvcCArXCIpXCIpO1xuXG4gICAgdGhpcy5mb2N1cyA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5mb2N1c19vZmZzZXQgKyBcIiwgXCIrIHRoaXMubWFyZ2luLnRvcCArXCIpXCIpXG5cbiAgICB0aGlzLmZvY3VzXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5mb2N1c19oZWlnaHQpXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgICAgLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBsZXQgb3V0ID0gbmV3IE1hcCgpO1xuICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG4gICAgICAgICAgc2VsZi53ZWlnaHQgPSBzZWxmLmZvY3VzX3guaW52ZXJ0KGQzLm1vdXNlKHRoaXMpWzBdKTtcbiAgICAgICAgICBzZWxmLnVwZGF0ZUdhdXNzKCk7XG5cbiAgICAgICAgICBzZWxmLm1vdXNlX2V2ZW50ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGxldCBvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBzZWxmLmNlbnRlciA9IHNlbGYueS5pbnZlcnQoZDMubW91c2UodGhpcylbMV0pO1xuICAgICAgICAgICAgc2VsZi53ZWlnaHQgPSBzZWxmLmZvY3VzX3guaW52ZXJ0KGQzLm1vdXNlKHRoaXMpWzBdKTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlR2F1c3MoKTtcblxuICAgICAgICAgICAgc2VsZi5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIG91dC5zZXQoXG4gICAgICAgICAgICAgICAgZFtcImlkXCJdLFxuICAgICAgICAgICAgICAgIHNlbGYuZ3JhZGllbnRDb2xvcihzZWxmLmdhdXNzaWFuKHNlbGYuZ2F1c3NfeS5pbnZlcnQoZC5kYXRhW2QuZGF0YS5sZW5ndGgtMV1bc2VsZi55X2F0dHJpYnV0ZV0pLCBzZWxmLmdhdXNzX3kuaW52ZXJ0KHNlbGYuY2VudGVyKSwgc2VsZi5nYXVzc19zaWdtYShzZWxmLndlaWdodCkpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmJydXNoaW5nID0gb3V0O1xuXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBzZWxmLm1vdXNlX2V2ZW50Lm9uKFwibW91c2Vtb3ZlXCIsIG51bGwpLm9uKFwibW91c2V1cFwiLCBudWxsKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIC8vICAgc2VsZi5tb3VzZV9ldmVudC5vbihcIm1vdXNlbW92ZVwiLCBudWxsKS5vbihcIm1vdXNldXBcIiwgbnVsbCk7XG4gICAgICAgICAgLy8gfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm1vdmVUb0Zyb250KClcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdGhpcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmxjX3dpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5mb2N1c194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoWzAsIHRoaXMuZm9jdXNfd2lkdGhdKTtcblxuICAgIHRoaXMuZ2F1c3NfeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICB0aGlzLmdhdXNzX3kgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFstMywgM10pXG4gICAgdGhpcy5nYXVzc19zaWdtYSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMC4xLCA1XSlcbiAgICAgIC5kb21haW4oWzIsIHRoaXMuZm9jdXNfd2lkdGhdKVxuXG4gICAgdGhpcy5ncmFkaWVudENvbG9yID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCAxXSlcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQodGhpcy54X2xhYmVsKTtcblxuICAgICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQrMjYpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aC8yKVxuICAgICAgICAgICAgLnRleHQoXCJkYXlcIik7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgLnRleHQodGhpcy55X2xhYmVsKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIisgdGhpcy5mb2N1c193aWR0aCArXCIsIDApXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMuZm9jdXNfd2lkdGgpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiB0aGlzLnlfYXR0cmlidXRlfSk7XG5cbiAgICAvLyBkZWZpbmUgdGhlIGxpbmVcbiAgICB0aGlzLnZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueCgoZCkgPT4gdGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgICAgICAueSgoZCkgPT4gdGhpcy55KGRbdGhpcy55X2F0dHJpYnV0ZV0pKTtcblxuICAgIHRoaXMuZm9jdXNsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLmZvY3VzX3godGhpcy5nYXVzc194KGRbXCJ4XCJdKSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkodGhpcy5nYXVzc195KGRbXCJ5XCJdKSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgLy8gVXBkYXRlIGF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcblxuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodCh0aGlzLnkpKTtcbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMuZm9jdXNfeCkudGlja3MoMikpO1xuICB9XG5cbiAgdXBkYXRlSGlnaGxpZ2h0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRbXCJoaWdobGlnaHRcIl1cbiAgICAgICAgICB9KVxuICB9XG5cbiAgdXBkYXRlR2F1c3MoKSB7XG4gICAgbGV0IGxpbmVfZGF0YSA9IHRoaXMuZ2V0R2F1c3NpYW4oKTtcbiAgICB0aGlzLmdhdXNzX3gucmFuZ2UodGhpcy5mb2N1c194LmRvbWFpbigpKS5kb21haW4oZDMuZXh0ZW50KGxpbmVfZGF0YSwgZCA9PiBkW1wieFwiXSkpXG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19saW5lID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKVxuICAgICAgICAuZGF0YShbbGluZV9kYXRhXSlcblxuICAgIC8vIERpc3RyaWJ1dGlvbiBsaW5lXG4gICAgZm9jdXNfbGluZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBmb2N1c19saW5lLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZm9jdXNsaW5lXCIpXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMuZm9jdXNsaW5lKGQpKVxuICAgICAgLm1vdmVUb0Zyb250KCk7XG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICAvLyBVcGRhdGUgZG9tYWluc1xuICAgIGxldCB4X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeV9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcblxuICAgIGxldCBmb2N1c19kYXRhID0gPGFueT4gW107XG5cbiAgICAgdGhpcy5kYXRhLmZvckVhY2goKGQ6IGFueVtdKSA9PiB7XG4gICAgICAgICBmb2N1c19kYXRhLnB1c2goZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoLTFdKVxuICAgICB9KVxuXG4gICAgdGhpcy54LmRvbWFpbihbeF9taW4sIHhfbWF4XSk7XG4gICAgdGhpcy55LmRvbWFpbihbeV9taW4sIHlfbWF4XSk7XG5cbiAgICB0aGlzLmdhdXNzX3kucmFuZ2UodGhpcy55LmRvbWFpbigpKVxuXG4gICAgLy8gbGV0IGJpbnMgPSB0aGlzLmhpc3RvZ3JhbShmb2N1c19kYXRhKVxuICAgIGxldCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgICAgLnZhbHVlKChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKVxuICAgICAgICAuZG9tYWluKHRoaXMueS5kb21haW4oKSlcbiAgICAgICAgLnRocmVzaG9sZHMoZDMucmFuZ2UoeV9taW4sIHlfbWF4LCAoeV9tYXggLSB5X21pbikgLyAyMCkpXG4gICAgICAgIChmb2N1c19kYXRhKTtcblxuICAgIHRoaXMuZm9jdXNfeC5kb21haW4oWzAsIGQzLm1heChiaW5zLCAoZDogYW55W10pID0+IGQubGVuZ3RoKV0pO1xuXG5cbiAgICAvLyBTZWxlY3QgY2hhcnRcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIikucmVtb3ZlKCk7XG4gICAgbGV0IGNoYXJ0ID0gdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcblxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAgIC5kYXRhKGJpbnMpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuXHRcdCAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLnkoZC54MSkgKyBcIilcIjsgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgKGQpID0+IHsgcmV0dXJuICB0aGlzLmZvY3VzX3goZC5sZW5ndGgpOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy55KGQueDApIC0gdGhpcy55KGQueDEpIC0gMTtcbiAgICAgIH0pXG4gICAgICAubW92ZVRvQmFjaygpO1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-gauss',["require", "exports", "d3", "lodash", "aurelia-framework"], function (require, exports, d3, _, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesGauss = (function () {
        function parallelCoordinatesGauss(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.redraw = 0;
            this.data = [];
            this.x = {};
            this.dimensions = [];
            this.x_size = 500;
            this.y_size = 500;
            this.getBrushing = function (g, x, dat) {
                var temp = [];
                var brushes = new Map();
                g.selectAll(".brush")
                    .filter(function (d) {
                    return d3.brushSelection(this);
                })
                    .each(function (d) {
                    var brush_selection = d3.brushSelection(this);
                    var extent = [];
                    var selection = [];
                    if (brush_selection != null) {
                        extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])];
                    }
                    var brushed_elements = dat.filter(function (x) { return x["data"][d] >= extent[1] && x["data"][d] <= extent[0]; });
                    brushes.set(d, brushed_elements.map(function (x) { return x["id"]; }));
                });
                var brushed = _.intersection.apply(_, Array.from(brushes.values()));
                if (brushes.size > 0 && brushed.length == 0) {
                    brushed.push("x");
                }
                _this.brushing = brushed;
            };
            this.element = element;
        }
        parallelCoordinatesGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        parallelCoordinatesGauss.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        parallelCoordinatesGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        parallelCoordinatesGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesGauss.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesGauss.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.y = d3.scalePoint()
                .range([0, this.height]);
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
        };
        parallelCoordinatesGauss.prototype.updateHighlight = function () {
            this.svg.selectAll(".line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        parallelCoordinatesGauss.prototype.updateChart = function () {
            var _this = this;
            if (this.data.length > 0) {
                this.dimensions = d3.keys(this.data[0]["data"]).filter(function (d) {
                    return d != "name";
                });
            }
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data["data"][dim];
                });
                if (ext[0] == ext[1]) {
                    ext[0] -= ext[0] * 0.1;
                    ext[1] += ext[1] * 0.1;
                }
                _this.x[dim] = d3.scaleLinear()
                    .range([_this.width, 0])
                    .domain([ext[1], ext[0]]);
            });
            this.y.domain(this.dimensions);
            this.background = this.svg.append("g")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.path(d["data"]); });
            var width = this.width;
            var x = this.x;
            var dat = this.data;
            var getBrushing = this.getBrushing;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                d3.select(this).call(d3.axisTop(x[d]));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .attr("transform", "rotate(-90)")
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("brush", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                })
                    .on("end", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                }));
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesGauss.prototype, "data", void 0);
        parallelCoordinatesGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], parallelCoordinatesGauss);
        return parallelCoordinatesGauss;
    }());
    exports.parallelCoordinatesGauss = parallelCoordinatesGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy1nYXVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQThCSSxrQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTVCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBUVosTUFBQyxHQUFHLEVBQUUsQ0FBQztZQUVQLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFNckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFzRGIsZ0JBQVcsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztnQkFDNUIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFVBQWUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBZSxDQUFDO29CQUNsQixJQUFJLGVBQWUsR0FBSSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM5QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7b0JBQ3BCLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFeEIsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sR0FBRyxD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QUMsTUFBTSxFQUFFLENBQUM7O2tFQUFVO1FBR3JEO1lBQVQsNEJBQVE7OzhEQUFXO1FBVFgsd0JBQXdCO1lBRnBDLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSx3QkFBd0IsQ0EwT3BDO1FBQUQsK0JBQUM7S0ExT0QsQUEwT0MsSUFBQTtJQTFPWSw0REFBd0IiLCJmaWxlIjoiY2hhcnRzL3BhcmFsbGVsLWNvb3JkaW5hdGVzLWdhdXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgcGFyYWxsZWxDb29yZGluYXRlc0dhdXNzIHtcbiAgICAvLyBPbmUtV2F5XG4gICAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiA2MCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA0MCB9O1xuICAgIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gICAgLy8gVHdvLVdheVxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gICAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gICAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAgIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gICAgLy8gRDMgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBzdmc7XG4gICAgcHJpdmF0ZSB4ID0ge307XG4gICAgcHJpdmF0ZSB5O1xuICAgIHByaXZhdGUgZGltZW5zaW9ucyA9IDxhbnk+W107XG4gICAgcHJpdmF0ZSBsaW5lO1xuICAgIHByaXZhdGUgYmFja2dyb3VuZDtcbiAgICBwcml2YXRlIGZvcmVncm91bmQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgcHJpdmF0ZSB4X3NpemUgPSA1MDA7XG4gICAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gICAgcHJpdmF0ZSB3aWR0aDtcbiAgICBwcml2YXRlIGhlaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBncmFwaFxuICAgICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICB9XG5cbiAgICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgICBpZih0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgd2F0Y2hlciBhZnRlciBkaXNwb3NpbmcgdGhlIGNsYXNzXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gRDMgZnVuY3Rpb25zXG5cbiAgICAvLyBEcmF3IHRoZSBsaW5lc1xuICAgIHByaXZhdGUgcGF0aChkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmUodGhpcy5kaW1lbnNpb25zLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnhbcF0oZFtwXSksIHRoaXMueShwKV07IH0pKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXh0ZXJuYWwgdmFyaWFibGVzIHdpdGggY3VycmVudCBicnVzaGVzXG4gICAgcHJpdmF0ZSBnZXRCcnVzaGluZyA9IChnLCB4LCBkYXQpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSA8YW55PltdO1xuICAgICAgICBsZXQgYnJ1c2hlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICBnLnNlbGVjdEFsbChcIi5icnVzaFwiKVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICBsZXQgYnJ1c2hfc2VsZWN0aW9uID0gIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpXG4gICAgICAgICAgICAgIGxldCBleHRlbnQgPSA8YW55PltdXG4gICAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSA8YW55PltdO1xuXG4gICAgICAgICAgICAgIGlmKGJydXNoX3NlbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBleHRlbnQgPSBbeFtkXS5pbnZlcnQoYnJ1c2hfc2VsZWN0aW9uWzFdKSwgeFtkXS5pbnZlcnQoYnJ1c2hfc2VsZWN0aW9uWzBdKV1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGJydXNoZWRfZWxlbWVudHMgPSBkYXQuZmlsdGVyKHggPT4geFtcImRhdGFcIl1bZF0gPj0gZXh0ZW50WzFdICYmIHhbXCJkYXRhXCJdW2RdIDw9IGV4dGVudFswXSlcblxuICAgICAgICAgICAgICBicnVzaGVzLnNldChkLCBicnVzaGVkX2VsZW1lbnRzLm1hcCh4ID0+IHhbXCJpZFwiXSkpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsZXQgYnJ1c2hlZCA9IF8uaW50ZXJzZWN0aW9uKC4uLkFycmF5LmZyb20oYnJ1c2hlcy52YWx1ZXMoKSkpO1xuXG4gICAgICAgICAgLy8gSWYgbm8gZWxlbWVudCBpcyBicnVzaGVkIHJldHVybiBhIHggdG8gbGV0IHRoZSBzeXN0ZW0ga25vdyB0aGF0XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGJydXNoZXMgYWN0aXZlXG4gICAgICAgICAgaWYoYnJ1c2hlcy5zaXplID4gMCAmJiBicnVzaGVkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgIGJydXNoZWQucHVzaChcInhcIilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmJydXNoaW5nID0gYnJ1c2hlZDtcbiAgICB9XG5cbiAgICBpbml0Q2hhcnQoKSB7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgY2hhcnQgZGl2IG9mIHRoZSBwYWdlXG4gICAgICAgIC8vIGFwcGVuZCBhICdncm91cCcgZWxlbWVudCB0byAnc3ZnJ1xuICAgICAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICAgICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgeCByYW5nZVxuICAgICAgICB0aGlzLnkgPSBkMy5zY2FsZVBvaW50KClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKTtcblxuICAgICAgICAvLyBCYXNpYyBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVZKTtcbiAgICB9XG5cbiAgICB1cGRhdGVIaWdobGlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCgpIHtcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0YXNldCBkaW1lbnNpb25zOiBLZXlzIG9mIHRoZSBtYXBcbiAgICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdW1wiZGF0YVwiXSkuZmlsdGVyKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQgIT0gXCJuYW1lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvcnJlc3BvbmRpbmcgeSBheGlzXG4gICAgICAgIC8vIEN1cnJlbnRseSBvbmx5IGxpbmVhciB2YWx1ZXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ID0gPGFueT4gZDMuZXh0ZW50KHRoaXMuZGF0YSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtcImRhdGFcIl1bZGltXTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGV4dFswXSA9PSBleHRbMV0pIHtcbiAgICAgICAgICAgICAgICBleHRbMF0gLT0gZXh0WzBdKjAuMTtcbiAgICAgICAgICAgICAgICBleHRbMV0gKz0gZXh0WzFdKjAuMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy54W2RpbV0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbdGhpcy53aWR0aCwgMF0pXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oW2V4dFsxXSwgZXh0WzBdXSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB4IGF4aXNcbiAgICAgICAgdGhpcy55LmRvbWFpbih0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBncmV5IGJhY2tncm91bmQgbGluZXMgZm9yIGNvbnRleHQuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIilcblxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGRbXCJkYXRhXCJdKX0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZHVlIHRvIHRoZSBuYXR1cmUgb2YgVFMgYW5kIEQzXG5cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IGRhdCA9IHRoaXMuZGF0YVxuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYXhpc1RvcCh4W2RdKSk7XG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbHRlcyBmb3IgdGhlIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFgoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1swLCAtOV0sIFt3aWR0aCwgOV1dKVxuICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuXG4gICAgICAgICAgICAgICAgICAgICBnZXRCcnVzaGluZyhnLCB4LCBkYXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-vertical',["require", "exports", "d3", "lodash", "aurelia-framework"], function (require, exports, d3, _, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesVertical = (function () {
        function parallelCoordinatesVertical(element, bindingEngine) {
            var _this = this;
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.redraw = 0;
            this.data = [];
            this.x = {};
            this.dimensions = [];
            this.x_size = 500;
            this.y_size = 500;
            this.getBrushing = function (g, x, dat) {
                var temp = [];
                var brushes = new Map();
                g.selectAll(".brush")
                    .filter(function (d) {
                    return d3.brushSelection(this);
                })
                    .each(function (d) {
                    var brush_selection = d3.brushSelection(this);
                    var extent = [];
                    var selection = [];
                    if (brush_selection != null) {
                        extent = [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])];
                    }
                    var brushed_elements = dat.filter(function (x) { return x["data"][d] >= extent[0] && x["data"][d] <= extent[1]; });
                    brushes.set(d, brushed_elements.map(function (x) { return x["id"]; }));
                });
                var brushed = _.intersection.apply(_, Array.from(brushes.values()));
                if (brushes.size > 0 && brushed.length == 0) {
                    brushed.push("x");
                }
                _this.brushing = brushed;
            };
            this.element = element;
        }
        parallelCoordinatesVertical.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        parallelCoordinatesVertical.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        parallelCoordinatesVertical.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        parallelCoordinatesVertical.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesVertical.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesVertical.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.y = d3.scalePoint()
                .range([0, this.height]);
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
        };
        parallelCoordinatesVertical.prototype.updateHighlight = function () {
            this.svg.selectAll(".line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            });
            this.svg.selectAll(".line.highlight").moveToFront();
        };
        parallelCoordinatesVertical.prototype.updateChart = function () {
            var _this = this;
            if (this.data.length > 0) {
                this.dimensions = d3.keys(this.data[0]["data"]).filter(function (d) {
                    return d != "name";
                });
            }
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data["data"][dim];
                });
                if (ext[0] == ext[1]) {
                    ext[0] -= ext[0] * 0.1;
                    ext[1] += ext[1] * 0.1;
                }
                _this.x[dim] = d3.scaleLinear()
                    .range([_this.width, 0])
                    .domain([ext[1], ext[0]]);
            });
            this.y.domain(this.dimensions);
            this.background = this.svg.append("g")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.path(d["data"]); });
            var width = this.width;
            var x = this.x;
            var dat = this.data;
            var getBrushing = this.getBrushing;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                d3.select(this).call(d3.axisTop(x[d]));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .attr("transform", "rotate(-90)")
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("brush", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                })
                    .on("end", function () {
                    if (!d3.event.sourceEvent)
                        return;
                    getBrushing(g, x, dat);
                }));
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], parallelCoordinatesVertical.prototype, "data", void 0);
        parallelCoordinatesVertical = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], parallelCoordinatesVertical);
        return parallelCoordinatesVertical;
    }());
    exports.parallelCoordinatesVertical = parallelCoordinatesVertical;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy12ZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQThCSSxxQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTVCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBUVosTUFBQyxHQUFHLEVBQUUsQ0FBQztZQUVQLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFNckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFzRGIsZ0JBQVcsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztnQkFDNUIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFVBQWUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBZSxDQUFDO29CQUNsQixJQUFJLGVBQWUsR0FBSSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM5QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7b0JBQ3BCLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFeEIsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sR0FB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QUssQ0FBQyxXQUFXLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUVsQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxLQUFLLEVBQUU7b0JBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzt3QkFBQyxNQUFNLENBQUM7b0JBRWxDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQixDQUFDLENBQUMsQ0FDTCxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBOU9TO1lBQVQsNEJBQVE7O21FQUF1RDtRQUN0RDtZQUFULDRCQUFROzttRUFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7cUVBQVU7UUFHckQ7WUFBVCw0QkFBUTs7aUVBQVc7UUFUWCwyQkFBMkI7WUFGdkMsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLDJCQUEyQixDQWlQdkM7UUFBRCxrQ0FBQztLQWpQRCxBQWlQQyxJQUFBO0lBalBZLGtFQUEyQiIsImZpbGUiOiJjaGFydHMvcGFyYWxsZWwtY29vcmRpbmF0ZXMtdmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBwYXJhbGxlbENvb3JkaW5hdGVzVmVydGljYWwge1xuICAgIC8vIE9uZS1XYXlcbiAgICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDYwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gICAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgICAvLyBUd28tV2F5XG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gICAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgICAvLyBEMyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIHN2ZztcbiAgICBwcml2YXRlIHggPSB7fTtcbiAgICBwcml2YXRlIHk7XG4gICAgcHJpdmF0ZSBkaW1lbnNpb25zID0gPGFueT5bXTtcbiAgICBwcml2YXRlIGxpbmU7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICAgIHByaXZhdGUgZm9yZWdyb3VuZDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICBwcml2YXRlIHhfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHdpZHRoO1xuICAgIHByaXZhdGUgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICAgIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIHJlZHJhd0NoYW5nZWQoKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSB3YXRjaGVyIGFmdGVyIGRpc3Bvc2luZyB0aGUgY2xhc3NcbiAgICB1bmJpbmQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBEMyBmdW5jdGlvbnNcblxuICAgIC8vIERyYXcgdGhlIGxpbmVzXG4gICAgcHJpdmF0ZSBwYXRoKGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZSh0aGlzLmRpbWVuc2lvbnMubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMueFtwXShkW3BdKSwgdGhpcy55KHApXTsgfSkpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBleHRlcm5hbCB2YXJpYWJsZXMgd2l0aCBjdXJyZW50IGJydXNoZXNcbiAgICBwcml2YXRlIGdldEJydXNoaW5nID0gKGcsIHgsIGRhdCkgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IDxhbnk+W107XG4gICAgICAgIGxldCBicnVzaGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmJydXNoXCIpXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMuYnJ1c2hTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGxldCBicnVzaF9zZWxlY3Rpb24gPSAgZDMuYnJ1c2hTZWxlY3Rpb24odGhpcylcbiAgICAgICAgICAgICAgbGV0IGV4dGVudCA9IDxhbnk+W11cbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IDxhbnk+W107XG5cbiAgICAgICAgICAgICAgaWYoYnJ1c2hfc2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVudCA9IFt4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMV0pLCB4W2RdLmludmVydChicnVzaF9zZWxlY3Rpb25bMF0pXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgYnJ1c2hlZF9lbGVtZW50cyA9IGRhdC5maWx0ZXIoeCA9PiB4W1wiZGF0YVwiXVtkXSA+PSBleHRlbnRbMF0gJiYgeFtcImRhdGFcIl1bZF0gPD0gZXh0ZW50WzFdKVxuXG4gICAgICAgICAgICAgIGJydXNoZXMuc2V0KGQsIGJydXNoZWRfZWxlbWVudHMubWFwKHggPT4geFtcImlkXCJdKSlcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxldCBicnVzaGVkID0gXy5pbnRlcnNlY3Rpb24oLi4uQXJyYXkuZnJvbShicnVzaGVzLnZhbHVlcygpKSk7XG5cbiAgICAgICAgICAvLyBJZiBubyBlbGVtZW50IGlzIGJydXNoZWQgcmV0dXJuIGEgeCB0byBsZXQgdGhlIHN5c3RlbSBrbm93IHRoYXRcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYnJ1c2hlcyBhY3RpdmVcbiAgICAgICAgICBpZihicnVzaGVzLnNpemUgPiAwICYmIGJydXNoZWQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgYnJ1c2hlZC5wdXNoKFwieFwiKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBicnVzaGVkO1xuICAgIH1cblxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAgICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4gICAgICAgIC8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAgICAgLy8gc2V0IHRoZSB4IHJhbmdlXG4gICAgICAgIHRoaXMueSA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pO1xuXG4gICAgICAgIC8vIEJhc2ljIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMubGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUhpZ2hsaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCgpIHtcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0YXNldCBkaW1lbnNpb25zOiBLZXlzIG9mIHRoZSBtYXBcbiAgICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdW1wiZGF0YVwiXSkuZmlsdGVyKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQgIT0gXCJuYW1lXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvcnJlc3BvbmRpbmcgeSBheGlzXG4gICAgICAgIC8vIEN1cnJlbnRseSBvbmx5IGxpbmVhciB2YWx1ZXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ID0gPGFueT4gZDMuZXh0ZW50KHRoaXMuZGF0YSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtcImRhdGFcIl1bZGltXTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGV4dFswXSA9PSBleHRbMV0pIHtcbiAgICAgICAgICAgICAgICBleHRbMF0gLT0gZXh0WzBdKjAuMTtcbiAgICAgICAgICAgICAgICBleHRbMV0gKz0gZXh0WzFdKjAuMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy54W2RpbV0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbdGhpcy53aWR0aCwgMF0pXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oW2V4dFsxXSwgZXh0WzBdXSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB4IGF4aXNcbiAgICAgICAgdGhpcy55LmRvbWFpbih0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBncmV5IGJhY2tncm91bmQgbGluZXMgZm9yIGNvbnRleHQuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIilcblxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGRbXCJkYXRhXCJdKX0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZHVlIHRvIHRoZSBuYXR1cmUgb2YgVFMgYW5kIEQzXG5cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IGRhdCA9IHRoaXMuZGF0YVxuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYXhpc1RvcCh4W2RdKSk7XG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbHRlcyBmb3IgdGhlIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFgoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1swLCAtOV0sIFt3aWR0aCwgOV1dKVxuICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuXG4gICAgICAgICAgICAgICAgICAgICBnZXRCcnVzaGluZyhnLCB4LCBkYXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/spatial-grid',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialGrid = (function () {
        function SpatialGrid(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 20, bottom: 20, left: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 640;
            this.y_size = 640;
            this.redrawGridNecessary = false;
            this.element = element;
        }
        SpatialGrid.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
        };
        SpatialGrid.prototype.dataMutated = function (splices) {
            if (!this.svg) {
                this.draw_grid();
            }
            if (this.data.length > 1) {
                if (this.redrawGridNecessary) {
                    this.svg.remove();
                    this.draw_grid();
                    this.redrawGridNecessary = false;
                }
                this.update_grid();
            }
        };
        SpatialGrid.prototype.redrawChanged = function () {
            if (this.svg) {
                this.redrawGridNecessary = true;
            }
        };
        SpatialGrid.prototype.unbind = function () {
            this.subscription.dispose();
        };
        SpatialGrid.prototype.updateGridSize = function () {
            var self = this;
            var grid_length = this.data.length;
            var rw = Math.floor(this.width / grid_length);
            var rh = Math.floor(this.height / grid_length);
            this.drawing_area.selectAll('g').remove();
            this.drawing_area.selectAll('g')
                .data(this.data)
                .enter()
                .append('g')
                .attr('transform', function (d, i) {
                return 'translate(0, ' + (self.width / grid_length) * i + ')';
            });
            this.drawing_area.selectAll('rect')
                .data(this.data)
                .data(function (d) {
                return d;
            })
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                return (self.width / grid_length) * i;
            })
                .attr('width', rw)
                .attr('height', rh)
                .attr('class', function (d) { return d; });
        };
        SpatialGrid.prototype.draw_grid = function () {
            var self = this;
            var grid_length = this.data.length;
            this.svg = d3.select(this.element)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            var rw = Math.floor(this.width / grid_length);
            var rh = Math.floor(this.height / grid_length);
            this.drawing_area = this.svg.selectAll('g')
                .data(this.data)
                .enter()
                .append('g')
                .attr('transform', function (d, i) {
                return 'translate(0, ' + (self.width / grid_length) * i + ')';
            });
            this.drawing_area.selectAll('rect')
                .data(this.data)
                .data(function (d) {
                return d;
            })
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                return (self.width / grid_length) * i;
            })
                .attr('width', rw)
                .attr('height', rh)
                .attr('class', function (d) { return d; });
        };
        SpatialGrid.prototype.update_grid = function () {
            this.svg.selectAll('g')
                .data(this.data)
                .selectAll('rect')
                .data(function (d) {
                return d;
            })
                .attr('class', function (d) { return d; });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SpatialGrid.prototype, "data", void 0);
        SpatialGrid = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialGrid);
        return SpatialGrid;
    }());
    exports.SpatialGrid = SpatialGrid;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9zcGF0aWFsLWdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUErQ0UscUJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTdDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFlBQU8sR0FBRyxNQUFNLENBQUM7WUFDakIsWUFBTyxHQUFHLEdBQUcsQ0FBQztZQUNkLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBdUJaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBS2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFFYix3QkFBbUIsR0FBRyxLQUFLLENBQUM7WUFHbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELDhCQUFRLEdBQVI7WUFBQSxpQkFnQkM7WUFmRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDbkQsQ0FBQztZQU1ILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFHckUsQ0FBQztRQUdELGlDQUFXLEdBQVgsVUFBWSxPQUFPO1lBQ2pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ2xCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUd4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO29CQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7b0JBQ2hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDO1FBRUQsbUNBQWEsR0FBYjtZQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFFRCw0QkFBTSxHQUFOO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBRUQsb0NBQWMsR0FBZDtZQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVuQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2YsS0FBSyxFQUFFO2lCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMvQixNQUFNLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlELENBQUMsQ0FBQyxDQUFDO1lBRVgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2lCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDZixJQUFJLENBQUUsVUFBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFO2lCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7aUJBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2lCQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQVEsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCwrQkFBUyxHQUFUO1lBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRW5DLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUMzQixJQUFJLENBQUMsV0FBVyxFQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRXJFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsV0FBVyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNmLEtBQUssRUFBRTtpQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztZQUVYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztpQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2YsSUFBSSxDQUFFLFVBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRTtpQkFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztpQkFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFRLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsaUNBQVcsR0FBWDtZQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2YsU0FBUyxDQUFDLE1BQU0sQ0FBQztpQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDZixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBUSxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUE7UUFDdEMsQ0FBQztRQTVLTztZQUFULDRCQUFROzttREFBdUQ7UUFDdEQ7WUFBVCw0QkFBUTs7d0RBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O3dEQUFtQjtRQUNsQjtZQUFULDRCQUFROztvREFBa0I7UUFDakI7WUFBVCw0QkFBUTs7b0RBQWU7UUFDZDtZQUFULDRCQUFROzttREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7cURBQVU7UUFHckQ7WUFBVCw0QkFBUTs7aURBQVc7UUFiVCxXQUFXO1lBRnZCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxXQUFXLENBZ0x2QjtRQUFELGtCQUFDO0tBaExELEFBZ0xDLElBQUE7SUFoTFksa0NBQVciLCJmaWxlIjoiY2hhcnRzL3NwYXRpYWwtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIFNwYXRpYWxHcmlkIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMjAsIGxlZnQ6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHhfbGFiZWwgPSBcImRheXNcIjtcbiAgQGJpbmRhYmxlIHlfbGFiZWwgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNlY29uZF9zdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGRyYXdpbmdfYXJlYTtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ3JhZGllbnRDb2xvcjtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgZm9jdXNsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcbiAgcHJpdmF0ZSBjZW50ZXIgPSAxLjA7XG4gIHByaXZhdGUgd2VpZ2h0ID0gMS4wO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gNjQwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDY0MDtcblxuICBwcml2YXRlIHJlZHJhd0dyaWROZWNlc3NhcnkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIC8vIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAvLyB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgLy8gdGhpcy5kcmF3X2dyaWQoW1wiU1wiLFwiI2RjZGNkY1wiLFwiSVwiLFwiI2M4MjYwNVwiLFwiUlwiLFwiIzZmYzA0MVwiXSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYoIXRoaXMuc3ZnKSB7XG4gICAgICB0aGlzLmRyYXdfZ3JpZCgpXG4gICAgfVxuICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAvLyB0aGlzLmRyYXdfZ3JpZChbXCJTXCIsXCIjZGNkY2RjXCIsXCJJXCIsXCIjYzgyNjA0XCIsXCJSXCIsXCIjNWZjNDBcIl0pXG4gICAgICAvLyB0aGlzLnVwZGF0ZV9ncmlkKFtcIlNcIixcIiNkY2RjZGNcIixcIklcIixcIiNjODI2MDVcIixcIlJcIixcIiM2ZmMwNDFcIl0pO1xuICAgICAgaWYodGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5KSB7XG4gICAgICAgIHRoaXMuc3ZnLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuZHJhd19ncmlkKClcbiAgICAgICAgdGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZV9ncmlkKCk7XG4gICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICBpZih0aGlzLnN2Zykge1xuICAgICAgdGhpcy5yZWRyYXdHcmlkTmVjZXNzYXJ5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICB1cGRhdGVHcmlkU2l6ZSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGdyaWRfbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIGxldCBydyA9IE1hdGguZmxvb3IodGhpcy53aWR0aC9ncmlkX2xlbmd0aCk7XG4gICAgbGV0IHJoID0gTWF0aC5mbG9vcih0aGlzLmhlaWdodC9ncmlkX2xlbmd0aCk7XG5cbiAgICB0aGlzLmRyYXdpbmdfYXJlYS5zZWxlY3RBbGwoJ2cnKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZHJhd2luZ19hcmVhLnNlbGVjdEFsbCgnZycpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMCwgJyArIChzZWxmLndpZHRoL2dyaWRfbGVuZ3RoKSAqIGkgKyAnKSc7XG4gICAgICAgICAgICB9KTtcblxuICAgIHRoaXMuZHJhd2luZ19hcmVhLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZGF0YSggKGQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gKHNlbGYud2lkdGgvZ3JpZF9sZW5ndGgpICogaTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBydylcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCByaClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gPHN0cmluZz5kKTtcbiAgfVxuXG4gIGRyYXdfZ3JpZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGdyaWRfbGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICBsZXQgcncgPSBNYXRoLmZsb29yKHRoaXMud2lkdGgvZ3JpZF9sZW5ndGgpO1xuICAgIGxldCByaCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQvZ3JpZF9sZW5ndGgpO1xuXG4gICAgdGhpcy5kcmF3aW5nX2FyZWEgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAsICcgKyAoc2VsZi53aWR0aC9ncmlkX2xlbmd0aCkgKiBpICsgJyknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLmRyYXdpbmdfYXJlYS5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmRhdGEoIChkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChzZWxmLndpZHRoL2dyaWRfbGVuZ3RoKSAqIGk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgcncpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgcmgpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IDxzdHJpbmc+ZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlX2dyaWQoKXtcbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiA8c3RyaW5nPmQpXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/stacked-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackedBarChart = (function () {
        function stackedBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.redraw = 0;
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        stackedBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.resize_sub = this.bindingEngine
                .propertyObserver(this.element.parentElement, "offsetWidth")
                .subscribe(function (n) { return _this.resize(); });
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        stackedBarChart.prototype.resize = function () {
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.resizeChart();
            this.updateChart();
        };
        stackedBarChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 0) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".medikament").remove();
            }
        };
        stackedBarChart.prototype.unbind = function () {
            this.subscription.dispose();
            this.resize_sub.dispose();
        };
        stackedBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleBand()
                .padding(0.1)
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.z = d3.scaleOrdinal()
                .range(["#33CA7F", "#ECE4B7", "#FC9F5B"]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
            this.legend = this.barchart.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .attr("class", "legend");
        };
        stackedBarChart.prototype.resizeChart = function () {
            this.svg
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.barchart
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x
                .range([0, this.width]);
            this.y
                .range([this.height, 0]);
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")");
        };
        stackedBarChart.prototype.updateChart = function () {
            var self = this;
            var keys = [];
            if (this.data.length > 0)
                keys = Object.getOwnPropertyNames(this.data[0]).slice(1);
            var totals = this.data.map(function (x) {
                var s = { key: x.x, value: 0 };
                keys.forEach(function (y) {
                    s.value = s.value + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.y.domain([0, d3.max(totals, function (x) { return x.value; })]).nice();
            this.z.domain(keys);
            var t = d3.transition("default")
                .duration(500);
            var stack = d3.stack().keys(keys)(self.data);
            this.barchart.selectAll(".medikament").remove();
            var chart = this.barchart.selectAll(".medikament")
                .data(stack, function (x) { return x.key; });
            var bars = chart.enter().append("g")
                .attr("class", "medikament")
                .attr("fill", function (d) { return self.z(d.key); });
            bars.selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("x", function (d) { return self.x(d.data.x); })
                .attr("width", self.x.bandwidth())
                .attr("y", this.height)
                .attr("height", 0);
            bars.selectAll("rect")
                .transition(t)
                .attr("y", function (d) { return self.y(d[1]); })
                .attr("height", function (d) { return self.y(d[0]) - self.y(d[1]); });
            chart.exit().remove();
            var labels = this.barchart.selectAll(".labels")
                .data(totals, function (x) { return x.key; });
            labels.enter().append("text")
                .attr("class", "labels")
                .style("text-anchor", "middle")
                .merge(labels)
                .attr("x", function (d) { return self.x(d.key) + self.x.bandwidth() / 2; })
                .attr("y", function (d) { return self.y(d.value) - 3; })
                .text(function (d) { return d.value; });
            labels.exit().remove();
            this.barchart.selectAll(".xAxis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            var legend_group = this.legend
                .selectAll("g")
                .data(keys.reverse(), function (x) { return x; });
            var legends = legend_group.enter().append("g");
            legends.append("rect")
                .attr("x", this.width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", this.z);
            legends.append("text")
                .attr("x", this.width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
            legend_group.merge(legends).attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend_group.exit().remove();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], stackedBarChart.prototype, "data", void 0);
        stackedBarChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], stackedBarChart);
        return stackedBarChart;
    }());
    exports.stackedBarChart = stackedBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9zdGFja2VkLWJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQWdDRSx5QkFBWSxPQUFPLEVBQVUsYUFBYTtZQUFiLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1lBOUJoQyxXQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsRSxnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1lBTVgsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQWtCWixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUduQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0Qsa0NBQVEsR0FBUjtZQUFBLGlCQXFCQztZQXBCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDckQsQ0FBQztZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWE7aUJBQ2pDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztpQkFDM0QsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENB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RCxBQXVRQyxJQUFBO0lBdlFZLDBDQUFlIiwiZmlsZSI6ImNoYXJ0cy9zdGFja2VkLWJhci1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgaW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3Mgc3RhY2tlZEJhckNoYXJ0IHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2l6ZV9zdWI7XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGJhcmNoYXJ0O1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeTtcbiAgcHJpdmF0ZSB6O1xuICBwcml2YXRlIGxlZ2VuZDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplX3N1YiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgLnByb3BlcnR5T2JzZXJ2ZXIodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIFwib2Zmc2V0V2lkdGhcIilcbiAgICAgIC5zdWJzY3JpYmUobiA9PiB0aGlzLnJlc2l6ZSgpKVxuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIHRoaXMucmVzaXplX3N1Yi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmJhcmNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAucGFkZGluZygwLjEpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG4gICAgdGhpcy56ID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5yYW5nZShbXCIjMzNDQTdGXCIgLFwiI0VDRTRCN1wiLCBcIiNGQzlGNUJcIl0pXG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMuYmFyY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAudGV4dChcIktvc3RlblwiKTtcblxuXG4gICAgLy8gLy8gQWRkIHRleHRcbiAgICAvLyB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJfdGV4dFwiKVxuICAgIC8vICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAvLyAgIC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB0aGlzLngoZC5kYXRhLngpOyB9KVxuICAgIC8vICAgLnRleHQoXCJ0ZXN0XCIpXG4gICAgLy8gICAvLyAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiB0b3RhbHNbZC5kYXRhLnhdOyB9KVxuXG4gICAgLy8gYWRkIGxlZ2VuZFxuICAgIHRoaXMubGVnZW5kID0gdGhpcy5iYXJjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpO1xuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgdGhpcy5zdmdcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5iYXJjaGFydFxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnhcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICB9XG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgbGV0IGtleXMgPSBbXVxuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZGF0YVswXSkuc2xpY2UoMSk7XG5cbiAgICBsZXQgdG90YWxzID0gdGhpcy5kYXRhLm1hcCh4ID0+IHtcbiAgICAgIGxldCBzID0geyBrZXk6IHgueCwgdmFsdWU6IDAgfTtcbiAgICAgIGtleXMuZm9yRWFjaCh5ID0+IHtcbiAgICAgICAgcy52YWx1ZSA9IHMudmFsdWUgKyAreFt5XTtcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcztcbiAgICB9KVxuXG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmRhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSkpO1xuICAgIHRoaXMueS5kb21haW4oWzAsIGQzLm1heCh0b3RhbHMsIHggPT4geC52YWx1ZSldKS5uaWNlKCk7XG4gICAgdGhpcy56LmRvbWFpbihrZXlzKTtcblxuICAgIGxldCB0ID0gZDMudHJhbnNpdGlvbihcImRlZmF1bHRcIilcbiAgICAgIC5kdXJhdGlvbig1MDApO1xuXG4gICAgbGV0IHN0YWNrID0gZDMuc3RhY2soKS5rZXlzKGtleXMpKHNlbGYuZGF0YSlcblxuICAgIC8vIERlbGV0ZSBhbGwgYmFycyBiZWZvcmUgcmVyZW5kZXJpbmcgdGhlbVxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLm1lZGlrYW1lbnRcIikucmVtb3ZlKClcblxuICAgIC8vIEpvaW5cbiAgICBsZXQgY2hhcnQgPSB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5tZWRpa2FtZW50XCIpXG4gICAgICAuZGF0YShzdGFjaywgeCA9PiB4LmtleSlcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGJhcnMgPSBjaGFydC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZWRpa2FtZW50XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi56KGQua2V5KTsgfSlcblxuICAgIGJhcnMuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQ7IH0pXG4gICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueChkLmRhdGEueCk7IH0pXG4gICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYueC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG5cbiAgICAvLyBVcGRhdGVcbiAgICBiYXJzLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMV0pOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55KGRbMF0pIC0gc2VsZi55KGRbMV0pOyB9KVxuXG4gICAgLy8gRXhpdFxuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCB0ZXh0c1xuICAgIGxldCBsYWJlbHMgPSB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi5sYWJlbHNcIilcbiAgICAgIC5kYXRhKHRvdGFscywgeCA9PiB4LmtleSlcblxuICAgIGxhYmVscy5lbnRlcigpLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbHNcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5tZXJnZShsYWJlbHMpXG4gICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi54KGQua2V5KSArIHNlbGYueC5iYW5kd2lkdGgoKS8yOyB9KVxuICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkLnZhbHVlKSAtIDM7IH0pXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgbGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuYmFyY2hhcnQuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICAvLyBKb2luXG4gICAgbGV0IGxlZ2VuZF9ncm91cCA9IHRoaXMubGVnZW5kXG4gICAgICAuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgLmRhdGEoa2V5cy5yZXZlcnNlKCksIHggPT4geClcblxuICAgIC8vIEVudGVyXG4gICAgbGV0IGxlZ2VuZHMgPSBsZWdlbmRfZ3JvdXAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cbiAgICBsZWdlbmRzLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoIC0gMTkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE5KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTkpXG4gICAgICAuYXR0cihcImZpbGxcIiwgdGhpcy56KTtcblxuICAgIGxlZ2VuZHMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGggLSAyNClcbiAgICAgIC5hdHRyKFwieVwiLCA5LjUpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMC4zMmVtXCIpXG4gICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcblxuICAgIC8vIFVwZGF0ZVxuICAgIGxlZ2VuZF9ncm91cC5tZXJnZShsZWdlbmRzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyBpICogMjAgKyBcIilcIjsgfSk7XG5cbiAgICAvLyBFeGl0XG4gICAgbGVnZW5kX2dyb3VwLmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('bars/bars',["require", "exports", "aurelia-framework", "papaparse", "jquery"], function (require, exports, aurelia_framework_1, papa) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bars = (function () {
        function bars() {
            this.active = 1;
            this.message = "SA";
            this.data = [];
            this.praeparate = [];
            this.data_prepared = [];
            this.data_prepared_dual = [];
            this.data_total = [];
            this.uv_selected = true;
            this.ibd_selected = true;
        }
        bars.prototype.attached = function () {
            var self = this;
            var getData = $.get("data/data.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.data = results.data;
                        console.log("asd");
                    }
                });
            });
            var getPrep = $.get("data/Praeperate.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.praeparate = results.data;
                    }
                });
            });
            $.when(getData, getPrep).done(function (x) { return self.prepareData(); });
        };
        bars.prototype.uv_selectedChanged = function () {
            this.prepareData();
        };
        bars.prototype.ibd_selectedChanged = function () {
            this.prepareData();
        };
        bars.prototype.prepareData = function () {
            var _this = this;
            var meds = Array.from(new Set(this.data.map(function (x) { return x["Med"]; })));
            this.data_prepared.length = 0;
            this.data_prepared_dual.length = 0;
            this.data_total.length = 0;
            meds.forEach(function (m) {
                var all_meds = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var med = {};
                med["x"] = m;
                med["Basis"] = +_this.praeparate.filter(function (x) { return x["Produktname"] == m; })[0]["Jahres-Kassenkaufpreis"];
                all_meds.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        med["IBD"] = +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        med["UV"] = +x.KA + +x.FA;
                    }
                });
                _this.data_prepared.push(med);
            });
            meds.forEach(function (m) {
                var standart = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var maximal = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Max"; });
                var med = {};
                var std = {};
                var max = {};
                med["x"] = m;
                med["Basis"] = +_this.praeparate.filter(function (x) { return x["Produktname"] == m; })[0]["Jahres-Kassenkaufpreis"];
                standart.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        std["IBD"] = +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        std["UV"] = +x.KA + +x.FA;
                    }
                });
                med["Standart"] = std;
                maximal.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        max["IBD"] = +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        max["UV"] = +x.KA + +x.FA;
                    }
                });
                med["Max"] = max;
                _this.data_prepared_dual.push(med);
            });
            meds.forEach(function (m) {
                var standart = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var maximal = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Max"; });
                var med = {};
                var std = 0;
                var max = 0;
                med["x"] = m;
                var basis = +_this.praeparate.filter(function (x) { return x["Produktname"] == m; })[0]["Jahres-Kassenkaufpreis"];
                standart.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        std += +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        std += +x.KA + +x.FA;
                    }
                });
                med["Standart"] = basis + std;
                maximal.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        max += +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        max += +x.KA + +x.FA;
                    }
                });
                med["Max"] = max;
                _this.data_total.push(med);
            });
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], bars.prototype, "uv_selected", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], bars.prototype, "ibd_selected", void 0);
        bars = __decorate([
            aurelia_framework_1.autoinject
        ], bars);
        return bars;
    }());
    exports.bars = bars;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTtnQkFFaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBeklXO1lBQVgsOEJBQVU7O2lEQUFvQjtRQUNuQjtZQUFYLDhCQUFVOztrREFBcUI7UUFYckIsSUFBSTtZQURoQiw4QkFBVTtXQUNFLElBQUksQ0FvSmhCO1FBQUQsV0FBQztLQXBKRCxBQW9KQyxJQUFBO0lBcEpZLG9CQUFJIiwiZmlsZSI6ImJhcnMvYmFycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdCwgb2JzZXJ2YWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICogYXMgcGFwYSBmcm9tICdwYXBhcGFyc2UnXG5pbXBvcnQgXCJqcXVlcnlcIlxuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIGJhcnMge1xuICBhY3RpdmUgPSAxO1xuXG4gIG1lc3NhZ2UgPSBcIlNBXCJcbiAgZGF0YSA9IDxhbnk+W107XG4gIHByYWVwYXJhdGUgPSA8YW55PltdO1xuICBkYXRhX3ByZXBhcmVkID0gPGFueT5bXTtcbiAgZGF0YV9wcmVwYXJlZF9kdWFsID0gPGFueT5bXTtcbiAgZGF0YV90b3RhbCA9IDxhbnk+W107XG5cbiAgQG9ic2VydmFibGUgdXZfc2VsZWN0ZWQgPSB0cnVlO1xuICBAb2JzZXJ2YWJsZSBpYmRfc2VsZWN0ZWQgPSB0cnVlO1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGxldCBnZXREYXRhID0gJC5nZXQoXCJkYXRhL2RhdGEuY3N2XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBwYXBhLnBhcnNlKGRhdGEsIHtcbiAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICBzZWxmLmRhdGEgPSByZXN1bHRzLmRhdGFcbiAgICAgICAgICAvLyBzZWxmLnByZXBhcmVEYXRhKClcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFzZFwiKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBnZXRQcmVwID0gJC5nZXQoXCJkYXRhL1ByYWVwZXJhdGUuY3N2XCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBwYXBhLnBhcnNlKGRhdGEsIHtcbiAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICBzZWxmLnByYWVwYXJhdGUgPSByZXN1bHRzLmRhdGFcbiAgICAgICAgICAvLyBzZWxmLnByZXBhcmVEYXRhKClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkLndoZW4oZ2V0RGF0YSwgZ2V0UHJlcCkuZG9uZSh4ID0+IHNlbGYucHJlcGFyZURhdGEoKSlcbiAgfVxuXG4gIHV2X3NlbGVjdGVkQ2hhbmdlZCgpIHtcbiAgICAgIHRoaXMucHJlcGFyZURhdGEoKTtcbiAgfVxuXG4gIGliZF9zZWxlY3RlZENoYW5nZWQoKSB7XG4gICAgICB0aGlzLnByZXBhcmVEYXRhKCk7XG4gIH1cblxuICBwcmVwYXJlRGF0YSgpIHtcbiAgICBsZXQgbWVkcyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmRhdGEubWFwKHggPT4geyByZXR1cm4geFtcIk1lZFwiXX0pKSk7XG4gICAgdGhpcy5kYXRhX3ByZXBhcmVkLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5kYXRhX3ByZXBhcmVkX2R1YWwubGVuZ3RoID0gMDtcbiAgICB0aGlzLmRhdGFfdG90YWwubGVuZ3RoID0gMDtcblxuICAgIG1lZHMuZm9yRWFjaChtID0+IHtcbiAgICAgIGxldCBhbGxfbWVkcyA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW1wiTWVkXCJdID09IG0gJiYgZFtcIlR5cFwiXSA9PSBcIlN0YW5kYXJ0XCIpXG4gICAgICBsZXQgbWVkID0ge307XG4gICAgICBtZWRbXCJ4XCJdID0gbTtcbiAgICAgIG1lZFtcIkJhc2lzXCJdID0gK3RoaXMucHJhZXBhcmF0ZS5maWx0ZXIoeCA9PiB4W1wiUHJvZHVrdG5hbWVcIl0gPT0gbSlbMF1bXCJKYWhyZXMtS2Fzc2Vua2F1ZnByZWlzXCJdXG5cbiAgICAgIGFsbF9tZWRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmKHRoaXMuaWJkX3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJJQkRcIikge1xuICAgICAgICAgIG1lZFtcIklCRFwiXSA9ICt4LktBICsgK3guRkE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XG4gICAgICAgICAgbWVkW1wiVVZcIl0gPSAreC5LQSArICt4LkZBO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmRhdGFfcHJlcGFyZWQucHVzaChtZWQpXG4gICAgfSlcblxuICAgIG1lZHMuZm9yRWFjaChtID0+IHtcbiAgICAgIGxldCBzdGFuZGFydCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW1wiTWVkXCJdID09IG0gJiYgZFtcIlR5cFwiXSA9PSBcIlN0YW5kYXJ0XCIpXG4gICAgICBsZXQgbWF4aW1hbCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW1wiTWVkXCJdID09IG0gJiYgZFtcIlR5cFwiXSA9PSBcIk1heFwiKVxuXG4gICAgICBsZXQgbWVkID0ge307XG4gICAgICBsZXQgc3RkID0ge307XG4gICAgICBsZXQgbWF4ID0ge307XG4gICAgICBtZWRbXCJ4XCJdID0gbTtcbiAgICAgIG1lZFtcIkJhc2lzXCJdID0gK3RoaXMucHJhZXBhcmF0ZS5maWx0ZXIoeCA9PiB4W1wiUHJvZHVrdG5hbWVcIl0gPT0gbSlbMF1bXCJKYWhyZXMtS2Fzc2Vua2F1ZnByZWlzXCJdXG5cbiAgICAgIHN0YW5kYXJ0LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmKHRoaXMuaWJkX3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJJQkRcIikge1xuICAgICAgICAgIHN0ZFtcIklCRFwiXSA9ICt4LktBICsgK3guRkE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XG4gICAgICAgICAgc3RkW1wiVVZcIl0gPSAreC5LQSArICt4LkZBO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBtZWRbXCJTdGFuZGFydFwiXSA9IHN0ZFxuXG4gICAgICBtYXhpbWFsLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGlmKHRoaXMuaWJkX3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJJQkRcIikge1xuICAgICAgICAgIG1heFtcIklCRFwiXSA9ICt4LktBICsgK3guRkE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XG4gICAgICAgICAgbWF4W1wiVVZcIl0gPSAreC5LQSArICt4LkZBO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBtZWRbXCJNYXhcIl0gPSBtYXhcblxuICAgICAgdGhpcy5kYXRhX3ByZXBhcmVkX2R1YWwucHVzaChtZWQpXG4gICAgfSlcblxuICAgIG1lZHMuZm9yRWFjaChtID0+IHtcbiAgICAgIGxldCBzdGFuZGFydCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW1wiTWVkXCJdID09IG0gJiYgZFtcIlR5cFwiXSA9PSBcIlN0YW5kYXJ0XCIpXG4gICAgICBsZXQgbWF4aW1hbCA9IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiBkW1wiTWVkXCJdID09IG0gJiYgZFtcIlR5cFwiXSA9PSBcIk1heFwiKVxuXG4gICAgICBsZXQgbWVkID0ge307XG4gICAgICBsZXQgc3RkID0gMDtcbiAgICAgIGxldCBtYXggPSAwO1xuICAgICAgbWVkW1wieFwiXSA9IG07XG4gICAgICBsZXQgYmFzaXMgPSArdGhpcy5wcmFlcGFyYXRlLmZpbHRlcih4ID0+IHhbXCJQcm9kdWt0bmFtZVwiXSA9PSBtKVswXVtcIkphaHJlcy1LYXNzZW5rYXVmcHJlaXNcIl1cblxuICAgICAgc3RhbmRhcnQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgaWYodGhpcy5pYmRfc2VsZWN0ZWQgJiYgeFtcIkFkZFwiXSA9PSBcIklCRFwiKSB7XG4gICAgICAgICAgc3RkICs9ICt4LktBICsgK3guRkE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnV2X3NlbGVjdGVkICYmIHhbXCJBZGRcIl0gPT0gXCJVVlwiKSB7XG4gICAgICAgICAgc3RkICs9ICt4LktBICsgK3guRkE7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIG1lZFtcIlN0YW5kYXJ0XCJdID0gYmFzaXMgKyBzdGRcblxuICAgICAgbWF4aW1hbC5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZih0aGlzLmliZF9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiSUJEXCIpIHtcbiAgICAgICAgICBtYXggKz0gK3guS0EgKyAreC5GQTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudXZfc2VsZWN0ZWQgJiYgeFtcIkFkZFwiXSA9PSBcIlVWXCIpIHtcbiAgICAgICAgICBtYXggKz0gK3guS0EgKyAreC5GQTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbWVkW1wiTWF4XCJdID0gbWF4XG5cbiAgICAgIHRoaXMuZGF0YV90b3RhbC5wdXNoKG1lZClcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('drift/drift',["require", "exports", "aurelia-framework", "../models/genetic", "ion-rangeslider"], function (require, exports, aurelia_framework_1, genetic_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Drift = (function () {
        function Drift() {
            this.inFilter = [];
            this.outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);
            this.simulations = 100;
            this.generations = 100;
            this.pop_from = 0;
            this.pop_to = 1000;
            this.event_from = 0.1;
            this.event_to = 0.2;
            this.leftover_from = 1;
            this.leftover_to = 10;
            this.sobol_n = 100;
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_parallel = false;
        }
        Drift.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
        };
        Drift.prototype.attached = function () {
            var _this = this;
            $("#pop").ionRangeSlider({
                min: 1,
                max: 2000,
                from: 500,
                to: 1000,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.pop_from = data["from"];
                    _this.pop_to = data["to"];
                }
            });
            $("#event").ionRangeSlider({
                min: 0.01,
                max: 1,
                from: 0.1,
                to: 0.2,
                step: 0.01,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.event_from = data["from"];
                    _this.event_to = data["to"];
                }
            });
            $("#leftover").ionRangeSlider({
                min: 1,
                max: 50,
                from: 1,
                to: 10,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.leftover_from = data["from"];
                    _this.leftover_to = data["to"];
                }
            });
        };
        Drift.prototype.brushing_pChanged = function () {
            this.updateOutData(this.brushing_p, "p");
            this.updateInData(this.brushing_p);
        };
        Drift.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop, "pop");
            this.updateInData(this.brushing_pop);
        };
        Drift.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        Drift.prototype.redrawLinecharts = function () {
            this.redraw_p = this.redraw_p == 0 ? 1 : 0;
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        };
        Drift.prototype.updateOutData = function (mapping, attribute) {
            var _this = this;
            var average = new Map();
            this.outFilterList.set(attribute, mapping);
            mapping.forEach(function (v, k) {
                var temp = 0;
                _this.outFilterList.forEach(function (iv, ik) {
                    if (iv.size > 0)
                        temp = temp + iv.get(k);
                });
                temp = temp / _this.outFilterList.size;
                average.set(k, temp);
            });
            this.data_lines.forEach(function (x) {
                x["highlight"] = average.get(x["id"]);
            });
            this.redrawLinecharts();
        };
        Drift.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Drift.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Drift.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        Drift.prototype.compute = function () {
            var _this = this;
            this.collapsed_input = true;
            var gen = new genetic_1.Genetic([this.event_from, this.event_to], [this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations);
            var model = gen.compute_model();
            model.forEach(function (sol, run) {
                var temp = [];
                for (var i = 0; i < sol.length; i++) {
                    temp.push({
                        "x": gen.time_range[i],
                        "p": sol[i].p,
                        "pop": sol[i].pop
                    });
                }
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "pop": gen.params[run][0],
                        "P(event)": gen.params[run][1],
                        "Remaining": gen.params[run][2]
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Drift.prototype, "brushing_p", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Drift.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Drift.prototype, "brushing_parallel", void 0);
        Drift = __decorate([
            aurelia_framework_1.autoinject
        ], Drift);
        return Drift;
    }());
    exports.Drift = Drift;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFNLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDO1FBck9TO1lBQVgsOEJBQVU7O2lEQUFZO1FBQ1g7WUFBWCw4QkFBVTs7bURBQWM7UUFJYjtZQUFYLDhCQUFVOzt3REFBbUI7UUFOckIsS0FBSztZQURqQiw4QkFBVTtXQUNFLEtBQUssQ0F1T2pCO1FBQUQsWUFBQztLQXZPRCxBQXVPQyxJQUFBO0lBdk9ZLHNCQUFLIiwiZmlsZSI6ImRyaWZ0L2RyaWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0LCBvYnNlcnZhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgXCJpb24tcmFuZ2VzbGlkZXJcIlxuaW1wb3J0IHtHZW5ldGljfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmV0aWNcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBEcmlmdCB7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcDtcbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wb3A7XG4gICAgcmVkcmF3X3A7XG4gICAgcmVkcmF3X3BvcDtcblxuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3BhcmFsbGVsO1xuICAgIHJlZHJhd19wYXJhbGxlbDtcblxuICAgIGluRmlsdGVyID0gW11cbiAgICBvdXRGaWx0ZXJMaXN0ID0gbmV3IE1hcChbW1wicFwiLCBuZXcgTWFwKCldLCBbXCJwb3BcIiwgbmV3IE1hcCgpXV0pO1xuXG4gICAgLy8gR2VuZXRpYyBNb2RlbFxuICAgIHNpbXVsYXRpb25zID0gMTAwO1xuICAgIGdlbmVyYXRpb25zID0gMTAwO1xuXG4gICAgLy8gUG9wdWxhdGlvbiBjb3VudFxuICAgIHBvcF9mcm9tID0gMDtcbiAgICBwb3BfdG8gPSAxMDAwO1xuXG4gICAgLy8gUHJvYmFiaWxpdHkgb2YgZXZlbnRcbiAgICBldmVudF9mcm9tID0gMC4xO1xuICAgIGV2ZW50X3RvID0gMC4yO1xuXG4gICAgLy8gTGVmdG92ZXIgaW5kaXZpZHVhbHMgYWZ0ZXIgZXZlbnRcbiAgICBsZWZ0b3Zlcl9mcm9tID0gMTtcbiAgICBsZWZ0b3Zlcl90byA9IDEwO1xuXG4gICAgLy8gU29ib2wgc2FtcGxpbmdcbiAgICBzb2JvbF9uID0gMTAwXG5cbiAgICBkYXRhX3BhcmFsbGVsID0gPGFueVtdPiBbXVxuICAgIGRhdGFfbGluZXMgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lc19vcmlnaW5hbCA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xlbmd0aCA9IDA7XG5cbiAgICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICAgIGNvbGxhcHNlZF9pbnB1dCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9wYXJhbGxlbCA9IGZhbHNlO1xuXG4gICAgc3dpdGNoKCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgdGhpcy5jb2xsYXBzZWRfcGFyYWxsZWwgPSB0aGlzLmNvbGxhcHNlZF9wYXJhbGxlbCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyBBdHRhY2hpbmcgcmFuZ2Ugc2xpZGVyc1xuICAgICAgICAkKFwiI3BvcFwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwMDAsXG4gICAgICAgICAgICBmcm9tOiA1MDAsXG4gICAgICAgICAgICB0bzogMTAwMCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3BfZnJvbSA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgICAgICB0aGlzLnBvcF90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjZXZlbnRcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAwLjAxLFxuICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgZnJvbTogMC4xLFxuICAgICAgICAgICAgdG86IDAuMixcbiAgICAgICAgICAgIHN0ZXA6IDAuMDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudF9mcm9tID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgICAgIHRoaXMuZXZlbnRfdG8gPSBkYXRhW1widG9cIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI2xlZnRvdmVyXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNTAsXG4gICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgdG86IDEwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRvdmVyX2Zyb20gPSBkYXRhW1wiZnJvbVwiXVxuICAgICAgICAgICAgdGhpcy5sZWZ0b3Zlcl90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3AsIFwicFwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wb3BDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19wb3AsIFwicG9wXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3BvcCk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcGFyYWxsZWxDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFsbGVsRGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICAgIH1cblxuICAgIHJlZHJhd0xpbmVjaGFydHMoKSB7XG4gICAgICAgIHRoaXMucmVkcmF3X3AgPSB0aGlzLnJlZHJhd19wID09IDAgPyAxIDogMDtcbiAgICAgICAgdGhpcy5yZWRyYXdfcG9wID0gdGhpcy5yZWRyYXdfcG9wID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU91dERhdGEobWFwcGluZywgYXR0cmlidXRlKSB7XG4gICAgICBsZXQgYXZlcmFnZSA9IG5ldyBNYXAoKTtcblxuICAgICAgLy8gU2V0IGN1cnJlbnQgZmlsdGVyXG4gICAgICB0aGlzLm91dEZpbHRlckxpc3Quc2V0KGF0dHJpYnV0ZSwgbWFwcGluZyk7XG5cbiAgICAgIC8vIFVwZGF0ZSBhdmVyYWdlIGZpbHRlclxuICAgICAgbWFwcGluZy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gMDtcblxuICAgICAgICB0aGlzLm91dEZpbHRlckxpc3QuZm9yRWFjaCgoaXYsIGlrKSA9PiB7XG4gICAgICAgICAgaWYoaXYuc2l6ZSA+IDApIHRlbXAgID0gdGVtcCArIGl2LmdldChrKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0ZW1wID0gdGVtcC90aGlzLm91dEZpbHRlckxpc3Quc2l6ZTtcblxuICAgICAgICBhdmVyYWdlLnNldChrLCB0ZW1wKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IGxpbmUgaGlnaGxpZ2h0XG4gICAgICB0aGlzLmRhdGFfbGluZXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IGF2ZXJhZ2UuZ2V0KHhbXCJpZFwiXSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmVkcmF3TGluZWNoYXJ0cygpO1xuICAgICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJbkRhdGEobWFwcGluZykge1xuICAgICAgaWYodGhpcy5pbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbFxuICAgICAgICAgIC5maWx0ZXIoeCA9PiB0aGlzLmluRmlsdGVyLmluY2x1ZGVzKHhbXCJpZFwiXSkpXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQYXJhbGxlbERhdGEoaWRzKSB7XG4gICAgICAgIHRoaXMuaW5GaWx0ZXIgPSBpZHM7XG5cbiAgICAgICAgaWYoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmKGlkcy5pbmNsdWRlcyh4W1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gMTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJPdXREYXRhKGlkcykge1xuICAgICAgICBpZihpZHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGhpZ2hsaWdodF9saXN0ID0gbmV3IFNldChpZHMpO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwuZmlsdGVyKHggPT4gaGlnaGxpZ2h0X2xpc3QuaGFzKHhbXCJpZFwiXSkpKVxuXG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgZmlsdGVyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfZmlsdGVyID0gaGlnaGxpZ2h0X2xpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuICAgICAgICAgICAgdGhpcy5kYXRhX2xpbmVzLnB1c2goLi4udGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0cnVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBtb2RlbCBwYXJhbXNcbiAgICAgICAgbGV0IGdlbiA9IG5ldyBHZW5ldGljKFt0aGlzLmV2ZW50X2Zyb20sIHRoaXMuZXZlbnRfdG9dLFt0aGlzLnBvcF9mcm9tLCB0aGlzLnBvcF90b10sIFt0aGlzLmxlZnRvdmVyX2Zyb20sIHRoaXMubGVmdG92ZXJfdG9dLCB0aGlzLmdlbmVyYXRpb25zLCB0aGlzLnNpbXVsYXRpb25zKVxuXG4gICAgICAgIGxldCBtb2RlbCA9IGdlbi5jb21wdXRlX21vZGVsKClcblxuICAgICAgICBtb2RlbC5mb3JFYWNoKCAoc29sLCBydW4pID0+IHtcbiAgICAgICAgICBsZXQgdGVtcCA9IDxhbnlbXT4gW11cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgXCJ4XCI6IGdlbi50aW1lX3JhbmdlW2ldLFxuICAgICAgICAgICAgICAgICAgXCJwXCI6IHNvbFtpXS5wLFxuICAgICAgICAgICAgICAgICAgXCJwb3BcIjogc29sW2ldLnBvcFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogcnVuLFxuICAgICAgICAgICAgICAgICAgXCJoaWdobGlnaHRcIjogMCxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJwb3BcIjogZ2VuLnBhcmFtc1tydW5dWzBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUChldmVudClcIjogZ2VuLnBhcmFtc1tydW5dWzFdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUmVtYWluaW5nXCI6IGdlbi5wYXJhbXNbcnVuXVsyXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImlkXCI6IHJ1bixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjogdGVtcFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kYXRhX2xlbmd0aCA9IHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0RGF0YShbXSlcbiAgICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('empty/no-selection',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "This site provides visual analysis dashboards for well known models from different fields.";
        }
        NoSelection = __decorate([
            aurelia_framework_1.autoinject
        ], NoSelection);
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5L25vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQURBO1lBRUUsWUFBTyxHQUFHLDRGQUE0RixDQUFBO1FBQ3hHLENBQUM7UUFGWSxXQUFXO1lBRHZCLDhCQUFVO1dBQ0UsV0FBVyxDQUV2QjtRQUFELGtCQUFDO0tBRkQsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoiZW1wdHkvbm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBOb1NlbGVjdGlvbiB7XG4gIG1lc3NhZ2UgPSBcIlRoaXMgc2l0ZSBwcm92aWRlcyB2aXN1YWwgYW5hbHlzaXMgZGFzaGJvYXJkcyBmb3Igd2VsbCBrbm93biBtb2RlbHMgZnJvbSBkaWZmZXJlbnQgZmllbGRzLlwiXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('details/details',["require", "exports", "aurelia-framework", "papaparse", "jquery"], function (require, exports, aurelia_framework_1, papa) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Details = (function () {
        function Details() {
            this.med_list = [
                "HUMIRA",
                "MITBEWERB"
            ];
            this.add_list = [
                "UV",
                "IBD"
            ];
            this.scenario_list = [
                "Standart",
                "Max"
            ];
            this.data_loaded = false;
            this.dataset = [];
            this.praeparate = [];
            this.data_stacked = [];
        }
        Details.prototype.scenarioChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Details.prototype.addChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Details.prototype.medChanged = function () {
            this.data_loaded ? this.prepareData() : null;
        };
        Details.prototype.attached = function () {
            var self = this;
            var getData = $.get("data/data_2.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.dataset = results.data;
                    }
                });
            });
            var getPrep = $.get("data/Praeperate.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.praeparate = results.data;
                    }
                });
            });
            $.when(getData, getPrep).done(function (x) {
                self.data_loaded = true;
                self.prepareData();
            });
            self.add = self.add_list[0];
            self.scenario = self.scenario_list[0];
            self.med = self.med_list[0];
        };
        Details.prototype.prepareData = function () {
            var _this = this;
            var self = this;
            self.data_stacked.length = 0;
            var meds = Array.from(new Set(self.dataset.map(function (item) { return item.Area; })));
            meds.forEach(function (m) {
                var out = {
                    x: m,
                };
                var standart = [];
                standart = _this.dataset.filter(function (d) { return d["Area"] == m &&
                    d["Typ"] == self.scenario &&
                    d["Add"] == self.add &&
                    d["Med"] == self.med; });
                standart.forEach(function (x) {
                    out[x.Name] = +x.costs;
                });
                self.data_stacked.push(out);
            });
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Details.prototype, "scenario", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Details.prototype, "add", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Details.prototype, "med", void 0);
        Details = __decorate([
            aurelia_framework_1.autoinject
        ], Details);
        return Details;
    }());
    exports.Details = Details;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFFWixJQUFJLEdBQUcsR0FBRztvQkFDUixDQUFDLEVBQUUsQ0FBQztpQkFDTCxDQUFBO2dCQUNELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtnQkFHakIsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUM1QixVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVE7b0JBQ3pCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRztvQkFDcEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBSGYsQ0FHZSxDQUFDLENBQUE7Z0JBR3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUNoQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBaEZXO1lBQVgsOEJBQVU7O2lEQUFVO1FBQ1Q7WUFBWCw4QkFBVTs7NENBQUs7UUFDSjtZQUFYLDhCQUFVOzs0Q0FBSztRQTVCUCxPQUFPO1lBRG5CLDhCQUFVO1dBQ0UsT0FBTyxDQTJHbkI7UUFBRCxjQUFDO0tBM0dELEFBMkdDLElBQUE7SUEzR1ksMEJBQU8iLCJmaWxlIjoiZGV0YWlscy9kZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgb2JzZXJ2YWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICogYXMgcGFwYSBmcm9tICdwYXBhcGFyc2UnXHJcbmltcG9ydCBcImpxdWVyeVwiXHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgRGV0YWlscyB7XHJcbiAgICAvLyBDb25zdGFudHNcclxuICAgIG1lZF9saXN0ID0gW1xyXG4gICAgICBcIkhVTUlSQVwiLFxyXG4gICAgICBcIk1JVEJFV0VSQlwiXHJcbiAgICBdO1xyXG4gICAgYWRkX2xpc3QgPSBbXHJcbiAgICAgIFwiVVZcIixcclxuICAgICAgXCJJQkRcIlxyXG4gICAgXTtcclxuICAgIHNjZW5hcmlvX2xpc3QgPSBbXHJcbiAgICAgIFwiU3RhbmRhcnRcIixcclxuICAgICAgXCJNYXhcIlxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBTdGF0dXNcclxuICAgIGRhdGFfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRGF0YVxyXG4gICAgZGF0YXNldCA9IDxhbnk+W107XHJcbiAgICBwcmFlcGFyYXRlID0gPGFueT5bXTtcclxuICAgIGRhdGFfc3RhY2tlZCA9IDxhbnk+W107XHJcblxyXG4gICAgLy8gRHJvcGRvd25zXHJcblxyXG4gICAgLy8gT2JzZXJ2aW5nIGNoYW5nZXMgaW4gdGhlIHVpXHJcbiAgICBAb2JzZXJ2YWJsZSBzY2VuYXJpbztcclxuICAgIEBvYnNlcnZhYmxlIGFkZDtcclxuICAgIEBvYnNlcnZhYmxlIG1lZDtcclxuXHJcbiAgICBzY2VuYXJpb0NoYW5nZWQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YV9sb2FkZWQgPyB0aGlzLnByZXBhcmVEYXRhKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoYW5nZWQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YV9sb2FkZWQgPyB0aGlzLnByZXBhcmVEYXRhKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG1lZENoYW5nZWQoKSB7XHJcbiAgICAgIHRoaXMuZGF0YV9sb2FkZWQgPyB0aGlzLnByZXBhcmVEYXRhKCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWRpbmcgY3N2IGZpbGVzXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBnZXREYXRhID0gJC5nZXQoXCJkYXRhL2RhdGFfMi5jc3ZcIiwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHBhcGEucGFyc2UoZGF0YSwge1xyXG4gICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXHJcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICBzZWxmLmRhdGFzZXQgPSByZXN1bHRzLmRhdGFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgZ2V0UHJlcCA9ICQuZ2V0KFwiZGF0YS9QcmFlcGVyYXRlLmNzdlwiLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgcGFwYS5wYXJzZShkYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHNlbGYucHJhZXBhcmF0ZSA9IHJlc3VsdHMuZGF0YVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQud2hlbihnZXREYXRhLCBnZXRQcmVwKS5kb25lKHggPT4ge1xyXG4gICAgICAgIHNlbGYuZGF0YV9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYucHJlcGFyZURhdGEoKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2VsZi5hZGQgPSBzZWxmLmFkZF9saXN0WzBdO1xyXG4gICAgICBzZWxmLnNjZW5hcmlvID0gc2VsZi5zY2VuYXJpb19saXN0WzBdO1xyXG4gICAgICBzZWxmLm1lZCA9IHNlbGYubWVkX2xpc3RbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZURhdGEoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIC8vIEVtcHR5IHBsb3R0aW5nIGRhdGFzZXRzXHJcbiAgICAgIHNlbGYuZGF0YV9zdGFja2VkLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAvLyBNZWRpY2F0aW9ucyBsaXN0XHJcbiAgICAgIGxldCBtZWRzID0gIEFycmF5LmZyb20obmV3IFNldChzZWxmLmRhdGFzZXQubWFwKGl0ZW0gPT4gaXRlbS5BcmVhKSkpO1xyXG5cclxuICAgICAgLy8gRmlsbCBwbG90dGluZyBkYXRhc2V0c1xyXG4gICAgICBtZWRzLmZvckVhY2gobSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGJhc2ljIG9iamVjdFxyXG4gICAgICAgIGxldCBvdXQgPSB7XHJcbiAgICAgICAgICB4OiBtLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhbmRhcnQgPSBbXVxyXG5cclxuICAgICAgICAvLyBHZXQgdGVtb3JhcnkgZGF0YXNldHNcclxuICAgICAgICBzdGFuZGFydCA9IHRoaXMuZGF0YXNldC5maWx0ZXIoXHJcbiAgICAgICAgICBkID0+IGRbXCJBcmVhXCJdID09IG0gJiZcclxuICAgICAgICAgIGRbXCJUeXBcIl0gPT0gc2VsZi5zY2VuYXJpbyAmJlxyXG4gICAgICAgICAgZFtcIkFkZFwiXSA9PSBzZWxmLmFkZCAmJlxyXG4gICAgICAgICAgZFtcIk1lZFwiXSA9PSBzZWxmLm1lZClcclxuXHJcbiAgICAgICAgLy8gR2V0IFN0YW5kYXJ0IGNvc3RzXHJcbiAgICAgICAgc3RhbmRhcnQuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgIG91dFt4Lk5hbWVdID0gK3guY29zdHM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2VsZi5kYXRhX3N0YWNrZWQucHVzaChvdXQpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('gauss/gauss',["require", "exports", "aurelia-framework", "../models/sir", "ion-rangeslider"], function (require, exports, aurelia_framework_1, sir_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gauss = (function () {
        function Gauss() {
            this.inFilter = [];
            this.outFilterList = new Map([
                ["pop", new Map()],
                ["sus", new Map()],
                ["inf", new Map()],
                ["rec", new Map()]
            ]);
            this.TS = 1.0;
            this.NY = 1;
            this.ND = this.NY * 365;
            this.S0 = 0.1;
            this.I0 = 1e-2;
            this.R0 = 1 - this.S0 - this.I0;
            this.rho = 0.5;
            this.rho_n = 5;
            this.rho_from = 40;
            this.rho_to = 60;
            this.v = 1 / (70 * 365.0);
            this.v_n = 5;
            this.v_from = 70;
            this.v_to = 80;
            this.mu = 1 / (70 * 365.0);
            this.mu_n = 5;
            this.mu_from = 70;
            this.mu_to = 180;
            this.beta = 520 / 365.0;
            this.beta_n = 5;
            this.beta_from = 0.9;
            this.beta_to = 1.1;
            this.gamma = 1 / 7.0;
            this.gamma_n = 5;
            this.gamma_from = 4;
            this.gamma_to = 6;
            this.sobol_n = 100;
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_parallel = false;
        }
        Gauss.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
        };
        Gauss.prototype.attached = function () {
            var _this = this;
            $("#rho").ionRangeSlider({
                min: 0,
                max: 100,
                from: 40,
                to: 60,
                step: 1,
                type: "double",
                postfix: "%",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.rho_from = data["from_pretty"];
                    _this.rho_to = data["to_pretty"];
                }
            });
            $("#v").ionRangeSlider({
                min: 10,
                max: 150,
                from: 70,
                to: 80,
                step: 1,
                type: "double",
                prefix: "1/",
                postfix: " per year",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.v_from = data["from_pretty"];
                    _this.v_to = data["to_pretty"];
                }
            });
            $("#mu").ionRangeSlider({
                min: 10,
                max: 150,
                from: 70,
                to: 80,
                step: 1,
                type: "double",
                prefix: "1/",
                postfix: " per year",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.mu_from = data["from_pretty"];
                    _this.mu_to = data["to_pretty"];
                }
            });
            $("#beta").ionRangeSlider({
                min: 0,
                max: 2,
                from: 0.9,
                to: 1.1,
                step: 0.1,
                type: "double",
                postfix: " per day",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.gamma_from = data["from_pretty"];
                    _this.gamma_to = data["to_pretty"];
                }
            });
            $("#gamma").ionRangeSlider({
                min: 1,
                max: 20,
                from: 4,
                to: 6,
                step: 1,
                type: "double",
                prefix: "1/",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.gamma_from = data["from_pretty"];
                    _this.gamma_to = data["to_pretty"];
                }
            });
        };
        Gauss.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop, "pop");
            this.updateInData(this.brushing_pop);
        };
        Gauss.prototype.brushing_susChanged = function () {
            this.updateOutData(this.brushing_sus, "sus");
            this.updateInData(this.brushing_sus);
        };
        Gauss.prototype.brushing_recChanged = function () {
            this.updateOutData(this.brushing_rec, "rec");
            this.updateInData(this.brushing_rec);
        };
        Gauss.prototype.brushing_infChanged = function () {
            this.updateOutData(this.brushing_inf, "inf");
            this.updateInData(this.brushing_inf);
        };
        Gauss.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        Gauss.prototype.redrawLinecharts = function () {
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
            this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
            this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
            this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
        };
        Gauss.prototype.updateOutData = function (mapping, attribute) {
            var _this = this;
            var average = new Map();
            this.outFilterList.set(attribute, mapping);
            mapping.forEach(function (v, k) {
                var temp = 0;
                _this.outFilterList.forEach(function (iv, ik) {
                    if (iv.size > 0)
                        temp = temp + iv.get(k);
                });
                temp = temp / _this.outFilterList.size;
                average.set(k, temp);
            });
            this.data_lines.forEach(function (x) {
                x["highlight"] = mapping.get(x["id"]);
            });
            this.redrawLinecharts();
        };
        Gauss.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Gauss.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Gauss.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        Gauss.prototype.vspa = function () {
            var _this = this;
            var sir = new sir_1.SIR([this.rho_from, this.rho_to], [this.v_from, this.v_to], [this.mu_from, this.mu_to], [this.beta_from, this.beta_to], [this.gamma_from, this.gamma_to], this.NY, this.S0, this.I0);
            var model = sir.compute_model(this.sobol_n);
            model.forEach(function (sol, run) {
                var temp = [];
                for (var i = 0; i < sol.length; i++) {
                    temp.push({
                        "x": sir.time_range[i],
                        "sus": sol[i][0],
                        "inf": sol[i][1],
                        "rec": sol[i][2],
                        "pop": sol[i][0] + sol[i][1] + sol[i][2]
                    });
                }
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "rho": sir.params[run][0],
                        "v": sir.params[run][1],
                        "mu": sir.params[run][2],
                        "beta": sir.params[run][3],
                        "gamma": sir.params[run][4]
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
            this.collapsed_input = true;
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_sus", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_inf", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_rec", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Gauss.prototype, "brushing_parallel", void 0);
        Gauss = __decorate([
            aurelia_framework_1.autoinject
        ], Gauss);
        return Gauss;
    }());
    exports.Gauss = Gauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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YztRQU1iO1lBQVgsOEJBQVU7O3dEQUFtQjtRQVZyQixLQUFLO1lBRGpCLDhCQUFVO1dBQ0UsS0FBSyxDQTRUakI7UUFBRCxZQUFDO0tBNVRELEFBNFRDLElBQUE7SUE1VFksc0JBQUsiLCJmaWxlIjoiZ2F1c3MvZ2F1c3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge1NJUn0gZnJvbSBcIi4uL21vZGVscy9zaXJcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBHYXVzcyB7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcG9wO1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3N1cztcbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19pbmY7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcmVjO1xuICAgIHJlZHJhd19wb3A7XG4gICAgcmVkcmF3X3N1cztcbiAgICByZWRyYXdfaW5mO1xuICAgIHJlZHJhd19yZWM7XG5cbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wYXJhbGxlbDtcbiAgICByZWRyYXdfcGFyYWxsZWw7XG5cbiAgICBpbkZpbHRlciA9IFtdXG4gICAgb3V0RmlsdGVyTGlzdCA9IG5ldyBNYXAoW1xuICAgICAgW1wicG9wXCIsIG5ldyBNYXAoKV0sXG4gICAgICBbXCJzdXNcIiwgbmV3IE1hcCgpXSxcbiAgICAgIFtcImluZlwiLCBuZXcgTWFwKCldLFxuICAgICAgW1wicmVjXCIsIG5ldyBNYXAoKV1cbiAgICBdKTtcblxuICAgIC8vIFNJUiBNb2RlbFxuICAgIFRTID0gMS4wXG4gICAgTlkgPSAxXG4gICAgTkQgPSB0aGlzLk5ZKjM2NVxuXG4gICAgUzAgPSAwLjFcbiAgICBJMCA9IDFlLTJcbiAgICBSMCA9IDEgLSB0aGlzLlMwIC0gdGhpcy5JMFxuXG4gICAgLy8gTW9ydGFsaXR5IHByb2JhYmlsdHksIEkgZGllcyBiZWZvcmUgbmF0dXJhbCBkZWF0aCBvciByZWNvdmVyeVxuICAgIHJobyA9IDAuNVxuICAgIHJob19uID0gNTtcbiAgICByaG9fZnJvbSA9IDQwO1xuICAgIHJob190byA9IDYwO1xuICAgIC8vIFBlciBjYXB0aWEgZGVhdGggcmF0ZSAgZnJvbSBuYXR1cmFsIGNhdXNlc1xuICAgIHYgPSAxLyg3MCozNjUuMClcbiAgICB2X24gPSA1O1xuICAgIHZfZnJvbSA9IDcwXG4gICAgdl90byA9IDgwXG4gICAgLy8gUG9wdWxhdGlvbiBiaXJ0aCByYXRlXG4gICAgbXUgPSAxLyg3MCozNjUuMCk7XG4gICAgbXVfbiA9IDU7XG4gICAgbXVfZnJvbSA9IDcwO1xuICAgIG11X3RvID0gMTgwO1xuICAgIC8vIFRyYW5zbWlzc2lvbiByYXRlOiBJIC0+IFMuIEluY2x1ZGVzIGVuY291bnRlciBhbmQgdHJhbnNtaXNzaW9uIHJhdGVcbiAgICBiZXRhID0gNTIwLzM2NS4wXG4gICAgYmV0YV9uID0gNTtcbiAgICBiZXRhX2Zyb20gPSAwLjlcbiAgICBiZXRhX3RvID0gMS4xXG4gICAgLy8gUmVjb3ZlcnkgcmF0ZVxuICAgIGdhbW1hPTEvNy4wXG4gICAgZ2FtbWFfbiA9IDU7XG4gICAgZ2FtbWFfZnJvbSA9IDQ7XG4gICAgZ2FtbWFfdG8gPSA2O1xuXG4gICAgLy8gU29ib2wgc2FtcGxpbmdcbiAgICBzb2JvbF9uID0gMTAwXG5cbiAgICBkYXRhX3BhcmFsbGVsID0gPGFueVtdPiBbXVxuICAgIGRhdGFfbGluZXMgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lc19vcmlnaW5hbCA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xlbmd0aCA9IDA7XG5cbiAgICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICAgIGNvbGxhcHNlZF9pbnB1dCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9wYXJhbGxlbCA9IGZhbHNlO1xuXG4gICAgc3dpdGNoKCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgdGhpcy5jb2xsYXBzZWRfcGFyYWxsZWwgPSB0aGlzLmNvbGxhcHNlZF9wYXJhbGxlbCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyBBdHRhY2hpbmcgcmFuZ2Ugc2xpZGVyc1xuICAgICAgICAkKFwiI3Job1wiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIGZyb206IDQwLFxuICAgICAgICAgICAgdG86IDYwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBwb3N0Zml4OiBcIiVcIixcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgICBncmlkX251bTogMTAsXG4gICAgICAgICAgICBvbkZpbmlzaDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmhvX2Zyb20gPSBkYXRhW1wiZnJvbV9wcmV0dHlcIl1cbiAgICAgICAgICAgIHRoaXMucmhvX3RvID0gZGF0YVtcInRvX3ByZXR0eVwiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjdlwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiAxNTAsXG4gICAgICAgICAgICBmcm9tOiA3MCxcbiAgICAgICAgICAgIHRvOiA4MCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgcHJlZml4OiBcIjEvXCIsXG4gICAgICAgICAgICBwb3N0Zml4OiBcIiBwZXIgeWVhclwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52X2Zyb20gPSBkYXRhW1wiZnJvbV9wcmV0dHlcIl1cbiAgICAgICAgICAgIHRoaXMudl90byA9IGRhdGFbXCJ0b19wcmV0dHlcIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI211XCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICBtYXg6IDE1MCxcbiAgICAgICAgICAgIGZyb206IDcwLFxuICAgICAgICAgICAgdG86IDgwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBwcmVmaXg6IFwiMS9cIixcbiAgICAgICAgICAgIHBvc3RmaXg6IFwiIHBlciB5ZWFyXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11X2Zyb20gPSBkYXRhW1wiZnJvbV9wcmV0dHlcIl1cbiAgICAgICAgICAgIHRoaXMubXVfdG8gPSBkYXRhW1widG9fcHJldHR5XCJdXG4gICAgICAgIH19KTtcbiAgICAgICAgJChcIiNiZXRhXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgIGZyb206IDAuOSxcbiAgICAgICAgICAgIHRvOiAxLjEsXG4gICAgICAgICAgICBzdGVwOiAwLjEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgcG9zdGZpeDogXCIgcGVyIGRheVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1tYV9mcm9tID0gZGF0YVtcImZyb21fcHJldHR5XCJdXG4gICAgICAgICAgICB0aGlzLmdhbW1hX3RvID0gZGF0YVtcInRvX3ByZXR0eVwiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjZ2FtbWFcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICAgIGZyb206IDQsXG4gICAgICAgICAgICB0bzogNixcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgcHJlZml4OiBcIjEvXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbW1hX2Zyb20gPSBkYXRhW1wiZnJvbV9wcmV0dHlcIl1cbiAgICAgICAgICAgIHRoaXMuZ2FtbWFfdG8gPSBkYXRhW1widG9fcHJldHR5XCJdXG4gICAgICAgIH19KTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wb3BDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19wb3AsIFwicG9wXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3BvcCk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfc3VzQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPdXREYXRhKHRoaXMuYnJ1c2hpbmdfc3VzLCBcInN1c1wiKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19zdXMpO1xuICAgIH1cblxuICAgIGJydXNoaW5nX3JlY0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3JlYywgXCJyZWNcIik7XG4gICAgICAgIHRoaXMudXBkYXRlSW5EYXRhKHRoaXMuYnJ1c2hpbmdfcmVjKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19pbmZDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19pbmYsIFwiaW5mXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX2luZik7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcGFyYWxsZWxDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFsbGVsRGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICAgICAgICAvLyB0aGlzLnJlZHJhd0xpbmVjaGFydHMoKTtcbiAgICB9XG5cbiAgICByZWRyYXdMaW5lY2hhcnRzKCkge1xuICAgICAgICB0aGlzLnJlZHJhd19wb3AgPSB0aGlzLnJlZHJhd19wb3AgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19pbmYgPSB0aGlzLnJlZHJhd19pbmYgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19yZWMgPSB0aGlzLnJlZHJhd19yZWMgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19zdXMgPSB0aGlzLnJlZHJhd19zdXMgPT0gMCA/IDEgOiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3V0RGF0YShtYXBwaW5nLCBhdHRyaWJ1dGUpIHtcbiAgICAgIGxldCBhdmVyYWdlID0gbmV3IE1hcCgpO1xuXG4gICAgICAvLyBTZXQgY3VycmVudCBmaWx0ZXJcbiAgICAgIHRoaXMub3V0RmlsdGVyTGlzdC5zZXQoYXR0cmlidXRlLCBtYXBwaW5nKTtcblxuICAgICAgLy8gVXBkYXRlIGF2ZXJhZ2UgZmlsdGVyXG4gICAgICBtYXBwaW5nLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSAwO1xuXG4gICAgICAgIHRoaXMub3V0RmlsdGVyTGlzdC5mb3JFYWNoKChpdiwgaWspID0+IHtcbiAgICAgICAgICBpZihpdi5zaXplID4gMCkgdGVtcCAgPSB0ZW1wICsgaXYuZ2V0KGspO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRlbXAgPSB0ZW1wL3RoaXMub3V0RmlsdGVyTGlzdC5zaXplO1xuXG4gICAgICAgIGF2ZXJhZ2Uuc2V0KGssIHRlbXApXG4gICAgICB9KVxuXG4gICAgICAvLyBTZXQgaGlnaGxpZ2h0IGNvbG9yc1xuICAgICAgdGhpcy5kYXRhX2xpbmVzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJlZHJhd0xpbmVjaGFydHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUluRGF0YShtYXBwaW5nKSB7XG4gICAgICBpZih0aGlzLmluRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgICAgLmZpbHRlcih4ID0+IHRoaXMuaW5GaWx0ZXIuaW5jbHVkZXMoeFtcImlkXCJdKSlcbiAgICAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWxcbiAgICAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVBhcmFsbGVsRGF0YShpZHMpIHtcbiAgICAgICAgdGhpcy5pbkZpbHRlciA9IGlkcztcblxuICAgICAgICBpZihpZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgaWYoaWRzLmluY2x1ZGVzKHhbXCJpZFwiXSkpIHtcbiAgICAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlck91dERhdGEoaWRzKSB7XG4gICAgICAgIGlmKGlkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgaGlnaGxpZ2h0X2xpc3QgPSBuZXcgU2V0KGlkcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5wdXNoKC4uLnRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5maWx0ZXIoeCA9PiBoaWdobGlnaHRfbGlzdC5oYXMoeFtcImlkXCJdKSkpXG5cbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBmaWx0ZXJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9maWx0ZXIgPSBoaWdobGlnaHRfbGlzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2c3BhKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBtb2RlbCBwYXJhbXNcbiAgICAgICAgbGV0IHNpciA9IG5ldyBTSVIoXG4gICAgICAgICAgW3RoaXMucmhvX2Zyb20sIHRoaXMucmhvX3RvXSxcbiAgICAgICAgICBbdGhpcy52X2Zyb20sIHRoaXMudl90b10sXG4gICAgICAgICAgW3RoaXMubXVfZnJvbSwgdGhpcy5tdV90b10sXG4gICAgICAgICAgW3RoaXMuYmV0YV9mcm9tLCB0aGlzLmJldGFfdG9dLFxuICAgICAgICAgIFt0aGlzLmdhbW1hX2Zyb20sIHRoaXMuZ2FtbWFfdG9dLFxuICAgICAgICAgIHRoaXMuTlksIHRoaXMuUzAsIHRoaXMuSTApXG5cbiAgICAgICAgICBsZXQgbW9kZWwgPSBzaXIuY29tcHV0ZV9tb2RlbCh0aGlzLnNvYm9sX24pXG5cbiAgICAgICAgICBtb2RlbC5mb3JFYWNoKCAoc29sLCBydW4pID0+IHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gPGFueVtdPiBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogc2lyLnRpbWVfcmFuZ2VbaV0sXG4gICAgICAgICAgICAgICAgICAgIFwic3VzXCI6IHNvbFtpXVswXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbmZcIjogc29sW2ldWzFdLFxuICAgICAgICAgICAgICAgICAgICBcInJlY1wiOiBzb2xbaV1bMl0sXG4gICAgICAgICAgICAgICAgICAgIFwicG9wXCI6IHNvbFtpXVswXSArIHNvbFtpXVsxXSArIHNvbFtpXVsyXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBydW4sXG4gICAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJob1wiOiBzaXIucGFyYW1zW3J1bl1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZcIjogc2lyLnBhcmFtc1tydW5dWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdVwiOiBzaXIucGFyYW1zW3J1bl1bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJldGFcIjogc2lyLnBhcmFtc1tydW5dWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1tYVwiOiBzaXIucGFyYW1zW3J1bl1bNF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJ1bixcbiAgICAgICAgICAgICAgICAgICAgXCJoaWdobGlnaHRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHRlbXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuZGF0YV9sZW5ndGggPSB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwubGVuZ3RoO1xuICAgICAgICAgIHRoaXMuZmlsdGVyT3V0RGF0YShbXSlcblxuICAgICAgICAgIHRoaXMuY29sbGFwc2VkX2lucHV0ID0gdHJ1ZTtcbiAgICAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/genetic',["require", "exports", "aurelia-framework", "../helper/sampling", "d3"], function (require, exports, aurelia_framework_1, sampling_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Genetic = (function () {
        function Genetic(event_range, population_range, leftover_range, generations, n_samples) {
            this.event_range = event_range;
            this.population_range = population_range;
            this.leftover_range = leftover_range;
            this.generations = generations;
            this.n_samples = n_samples;
            this.p = 0.5;
            this.params = [];
            this.time_range = [];
            this.populations = [];
            for (var i = 0; i < this.generations; i++) {
                this.time_range.push(i);
            }
            this.sampling = new sampling_1.Sampling("sobol");
            this.rnd = d3.randomUniform();
        }
        Genetic.prototype.compute_model = function () {
            var _this = this;
            var out = [];
            this.get_params(this.sampling.get_points(this.n_samples, 3));
            this.params.forEach(function (d) {
                _this.populations.length = 0;
                out.push(_this.simulation(d));
            });
            return out;
        };
        Genetic.prototype.simulation = function (params) {
            this.p = 0.5;
            var runs = [];
            var population_size = 0;
            for (var i = 1; i < this.generations + 1; i++) {
                if (this.rnd() < params[1]) {
                    population_size = Math.round(params[2]);
                }
                else {
                    population_size = params[0];
                }
                this.populations.push(population_size);
                runs.push({
                    pop: this.effective_population(),
                    p: this.next_generation(population_size)
                });
            }
            return runs;
        };
        Genetic.prototype.next_generation = function (population_size) {
            var draws = 2 * population_size;
            var a1 = 0;
            var a2 = 0;
            for (var i = 0; i < draws; i = i + 1) {
                if (Math.random() <= this.p) {
                    a1 = a1 + 1;
                }
                else {
                    a2 = a2 + 1;
                }
            }
            this.p = a1 / draws;
            return this.p;
        };
        Genetic.prototype.effective_population = function () {
            var denominator = 0;
            for (var i = 0; i < this.populations.length; i = i + 1) {
                denominator = denominator + (1 / this.populations[i]);
            }
            return Math.round(this.populations.length / denominator);
        };
        Genetic.prototype.get_params = function (points) {
            var _this = this;
            var pop_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.population_range);
            var event_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.event_range);
            var leftover_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.leftover_range);
            points.forEach(function (d) {
                _this.params.push([
                    pop_scale(d[0]),
                    event_scale(d[1]),
                    leftover_scale(d[2])
                ]);
            });
        };
        Genetic = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
        ], Genetic);
        return Genetic;
    }());
    exports.Genetic = Genetic;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVoQyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFO2lCQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUzQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFO2lCQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUEsQ0FBQztnQkFDYixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZCLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQXZHVSxPQUFPO1lBRG5CLDhCQUFVOztXQUNFLE9BQU8sQ0F3R25CO1FBQUQsY0FBQztLQXhHRCxBQXdHQyxJQUFBO0lBeEdZLDBCQUFPIiwiZmlsZSI6Im1vZGVscy9nZW5ldGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U2FtcGxpbmd9IGZyb20gXCIuLi9oZWxwZXIvc2FtcGxpbmdcIlxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxyXG5cclxuLy8gVGhpcyBtYWdpYyBsaW5lIHJlbW92ZWQgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciBudW1lcmljXHJcbmRlY2xhcmUgdmFyIG51bWVyaWM6IGFueTtcclxuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBHZW5ldGljIHtcclxuICBwID0gMC41O1xyXG4gIHBhcmFtcyA9IFtdO1xyXG4gIHRpbWVfcmFuZ2UgPSBbXTtcclxuICBwb3B1bGF0aW9ucyA9IFtdO1xyXG4gIHJuZDtcclxuICBzYW1wbGluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudF9yYW5nZSwgcHJpdmF0ZSBwb3B1bGF0aW9uX3JhbmdlLCBwcml2YXRlIGxlZnRvdmVyX3JhbmdlLCBwcml2YXRlIGdlbmVyYXRpb25zLCBwcml2YXRlIG5fc2FtcGxlcykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGlvbnM7IGkrKykge1xyXG4gICAgICB0aGlzLnRpbWVfcmFuZ2UucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNhbXBsaW5nID0gbmV3IFNhbXBsaW5nKFwic29ib2xcIik7XHJcbiAgICB0aGlzLnJuZCA9IGQzLnJhbmRvbVVuaWZvcm0oKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVfbW9kZWwoKSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcbiAgICB0aGlzLmdldF9wYXJhbXModGhpcy5zYW1wbGluZy5nZXRfcG9pbnRzKHRoaXMubl9zYW1wbGVzLCAzKSlcclxuXHJcbiAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKCBkID0+IHtcclxuICAgICAgdGhpcy5wb3B1bGF0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICBvdXQucHVzaCh0aGlzLnNpbXVsYXRpb24oZCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuXHJcbiAgc2ltdWxhdGlvbihwYXJhbXMpIHtcclxuICAgICAgLy8gUmVzZXQgcCBmb3IgYSBuZXcgc2ltdWxhdGlvblxyXG4gICAgICB0aGlzLnAgPSAwLjU7XHJcbiAgICAgIGxldCBydW5zID0gW107XHJcbiAgICAgIGxldCBwb3B1bGF0aW9uX3NpemUgPSAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmdlbmVyYXRpb25zKzE7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMucm5kKCk8cGFyYW1zWzFdKSB7XHJcbiAgICAgICAgICBwb3B1bGF0aW9uX3NpemUgPSBNYXRoLnJvdW5kKHBhcmFtc1syXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwb3B1bGF0aW9uX3NpemUgPSBwYXJhbXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbnMucHVzaChwb3B1bGF0aW9uX3NpemUpXHJcblxyXG4gICAgICAgIHJ1bnMucHVzaCh7XHJcbiAgICAgICAgICBwb3A6IHRoaXMuZWZmZWN0aXZlX3BvcHVsYXRpb24oKSxcclxuICAgICAgICAgIHA6IHRoaXMubmV4dF9nZW5lcmF0aW9uKHBvcHVsYXRpb25fc2l6ZSl9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJ1bnM7XHJcbiAgfVxyXG5cclxuICBuZXh0X2dlbmVyYXRpb24ocG9wdWxhdGlvbl9zaXplKSB7XHJcbiAgICAgIGxldCBkcmF3cyA9IDIgKiBwb3B1bGF0aW9uX3NpemU7XHJcbiAgICAgIGxldCBhMSA9IDA7XHJcbiAgICAgIGxldCBhMiA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdzOyBpID0gaSArIDEpIHtcclxuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IHRoaXMucCkge1xyXG4gICAgICAgICAgICAgIGExID0gYTEgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgYTIgPSBhMiArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucCA9IGExL2RyYXdzO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucDtcclxuICB9XHJcblxyXG4gIC8vIEhhcm1vbmljIG1lYW4gb2YgYWxsIHBvcHVsYXRpb25zXHJcbiAgZWZmZWN0aXZlX3BvcHVsYXRpb24oKSB7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3B1bGF0aW9ucy5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgIGRlbm9taW5hdG9yID0gZGVub21pbmF0b3IgKyAoMSAvIHRoaXMucG9wdWxhdGlvbnNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucG9wdWxhdGlvbnMubGVuZ3RoIC8gZGVub21pbmF0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0X3BhcmFtcyhwb2ludHMpIHtcclxuICAgIGxldCBwb3Bfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgICAucmFuZ2UodGhpcy5wb3B1bGF0aW9uX3JhbmdlKTtcclxuXHJcbiAgICBsZXQgZXZlbnRfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIDFdKVxyXG4gICAgICAucmFuZ2UodGhpcy5ldmVudF9yYW5nZSk7XHJcblxyXG4gICAgbGV0IGxlZnRvdmVyX3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAuZG9tYWluKFswLCAxXSlcclxuICAgICAgLnJhbmdlKHRoaXMubGVmdG92ZXJfcmFuZ2UpO1xyXG5cclxuICAgIHBvaW50cy5mb3JFYWNoKCBkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFtcclxuICAgICAgICAgICAgcG9wX3NjYWxlKGRbMF0pLFxyXG4gICAgICAgICAgICBldmVudF9zY2FsZShkWzFdKSxcclxuICAgICAgICAgICAgbGVmdG92ZXJfc2NhbGUoZFsyXSlcclxuICAgICAgICBdKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/migration',["require", "exports", "aurelia-framework", "../helper/sampling", "d3"], function (require, exports, aurelia_framework_1, sampling_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialMigration = (function () {
        function SpatialMigration(mating_distance_range, grid_length) {
            var _this = this;
            this.mating_distance_range = mating_distance_range;
            this.grid_length = grid_length;
            this.params = [];
            this.time_range = [];
            this.p = 0.5;
            this.max_mating_distance = 1;
            this.simulation_counter = 0;
            this.run_simulation = function (grid) {
                var temp_grid = [];
                for (var i = 0; i < _this.grid_length; i++) {
                    temp_grid[i] = [];
                    for (var j = 0; j < _this.grid_length; j++) {
                        var mating_partner = _this.pick_mating_partner(grid, i, j);
                        temp_grid[i][j] = _this.get_offspring(grid[i][j], mating_partner);
                    }
                }
                grid.length = 0;
                for (var i = 0; i < _this.grid_length; i++) {
                    var temp = [];
                    for (var j = 0; j < _this.grid_length; j++) {
                        temp[j] = temp_grid[i][j];
                    }
                    grid.push(temp);
                }
                _this.time_range.push(_this.simulation_counter++);
                return grid;
            };
            this.sampling = new sampling_1.Sampling("sobol");
            this.rnd = d3.randomUniform();
        }
        SpatialMigration.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialMigration.prototype.init_simulation = function (grid) {
            grid.length = 0;
            this.simulation_counter = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var random_number = Math.random();
                    if (random_number < this.p * this.p) {
                        temp[j] = "A1A1";
                    }
                    else if (random_number > 1 - (1 - this.p) * (1 - this.p)) {
                        temp[j] = "A2A2";
                    }
                    else {
                        temp[j] = "A1A2";
                    }
                }
                grid.push(temp);
            }
        };
        SpatialMigration.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialMigration.prototype.pick_mating_partner = function (grid, i, j) {
            var mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
            var mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);
            mating_i = this.get_bounded_index(mating_i);
            mating_j = this.get_bounded_index(mating_j);
            return grid[mating_i][mating_j];
        };
        SpatialMigration.prototype.get_offspring = function (parent1, parent2) {
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
                else if (random_number > 0.75) {
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
        };
        SpatialMigration = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialMigration);
        return SpatialMigration;
    }());
    exports.SpatialMigration = SpatialMigration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7UUFDSixDQUFDO1FBNUdTLGdCQUFnQjtZQUQ1Qiw4QkFBVTs7V0FDRSxnQkFBZ0IsQ0EySTVCO1FBQUQsdUJBQUM7S0EzSUQsQUEySUMsSUFBQTtJQTNJWSw0Q0FBZ0IiLCJmaWxlIjoibW9kZWxzL21pZ3JhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1NhbXBsaW5nfSBmcm9tIFwiLi4vaGVscGVyL3NhbXBsaW5nXCJcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcclxuXHJcbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xyXG5kZWNsYXJlIHZhciBsb2JvczogYW55O1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFNwYXRpYWxNaWdyYXRpb24ge1xyXG4gIHBhcmFtcyA9IFtdO1xyXG4gIHRpbWVfcmFuZ2UgPSBbXTtcclxuXHJcbiAgcm5kO1xyXG4gIHNhbXBsaW5nO1xyXG5cclxuICBwID0gMC41O1xyXG4gIG1heF9tYXRpbmdfZGlzdGFuY2UgPSAxO1xyXG4gIHNpbXVsYXRpb25fY291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0aW5nX2Rpc3RhbmNlX3JhbmdlLCBwcml2YXRlIGdyaWRfbGVuZ3RoKSB7XHJcbiAgICB0aGlzLnNhbXBsaW5nID0gbmV3IFNhbXBsaW5nKFwic29ib2xcIik7XHJcbiAgICB0aGlzLnJuZCA9IGQzLnJhbmRvbVVuaWZvcm0oKTtcclxuICB9XHJcblxyXG4gIGdldF9yYW5kb21faW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcblxyXG4gIGluaXRfc2ltdWxhdGlvbihncmlkKSB7XHJcbiAgICBncmlkLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnNpbXVsYXRpb25fY291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcCA9IFtdXHJcblxyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHJcbiAgICAgICAgaWYgKHJhbmRvbV9udW1iZXIgPCB0aGlzLnAqdGhpcy5wKSB7XHJcbiAgICAgICAgICAgIHRlbXBbal0gPSBcIkExQTFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmFuZG9tX251bWJlciA+IDEgLSAoMS10aGlzLnApICogKDEtdGhpcy5wKSkge1xyXG4gICAgICAgICAgICB0ZW1wW2pdID0gXCJBMkEyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wW2pdID0gXCJBMUEyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldF9ib3VuZGVkX2luZGV4KGluZGV4KSB7XHJcbiAgICBsZXQgYm91bmRlZF9pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIGlmKGluZGV4IDwgMCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggKyB0aGlzLmdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYoaW5kZXggPj0gdGhpcy5ncmlkX2xlbmd0aCkge1xyXG4gICAgICBib3VuZGVkX2luZGV4ID0gaW5kZXggLSB0aGlzLmdyaWRfbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib3VuZGVkX2luZGV4XHJcbiAgfVxyXG5cclxuICBwaWNrX21hdGluZ19wYXJ0bmVyKGdyaWQsIGksIGopIHtcclxuICAgIGxldCBtYXRpbmdfaSA9IHRoaXMuZ2V0X3JhbmRvbV9pbnQoaSAtIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSwgaSArIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSk7XHJcbiAgICBsZXQgbWF0aW5nX2ogPSB0aGlzLmdldF9yYW5kb21faW50KGogLSB0aGlzLm1heF9tYXRpbmdfZGlzdGFuY2UsIGogKyB0aGlzLm1heF9tYXRpbmdfZGlzdGFuY2UpO1xyXG5cclxuICAgIG1hdGluZ19pID0gdGhpcy5nZXRfYm91bmRlZF9pbmRleChtYXRpbmdfaSk7XHJcbiAgICBtYXRpbmdfaiA9IHRoaXMuZ2V0X2JvdW5kZWRfaW5kZXgobWF0aW5nX2opO1xyXG5cclxuICAgIHJldHVybiBncmlkW21hdGluZ19pXVttYXRpbmdfal1cclxuICB9XHJcblxyXG4gIGdldF9vZmZzcHJpbmcocGFyZW50MSwgcGFyZW50Mikge1xyXG4gICAgICB2YXIgcDEgPSBwYXJlbnQxO1xyXG4gICAgICB2YXIgcDIgPSBwYXJlbnQyO1xyXG4gICAgICBpZiAocDEgPT0gXCJBMUExXCIgJiYgcDIgPT0gXCJBMUExXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcIkExQTFcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgocDEgPT0gXCJBMUExXCIgJiYgcDIgPT0gXCJBMUEyXCIpIHx8IChwMSA9PSBcIkExQTJcIiAmJiBwMiA9PSBcIkExQTFcIikpIHtcclxuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTFBMVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTFBMlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwMSA9PSBcIkExQTFcIiAmJiBwMiA9PSBcIkEyQTJcIikgfHwgKHAxID09IFwiQTJBMlwiICYmIHAyID09IFwiQTFBMVwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQTFBMlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHAxID09IFwiQTFBMlwiICYmIHAyID09IFwiQTFBMlwiKSB7XHJcbiAgICAgICAgICB2YXIgcmFuZG9tX251bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICBpZiAocmFuZG9tX251bWJlciA8IDAuMjUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUExXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChyYW5kb21fbnVtYmVyID4gMC43NSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTJBMlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTFBMlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwMSA9PSBcIkExQTJcIiAmJiBwMiA9PSBcIkEyQTJcIikgfHwgKHAxID09IFwiQTJBMlwiICYmIHAyID09IFwiQTFBMlwiKSkge1xyXG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMkEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocDEgPT0gXCJBMkEyXCIgJiYgcDIgPT0gXCJBMkEyXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcIkEyQTJcIjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gIHJ1bl9zaW11bGF0aW9uID0gKGdyaWQpID0+IHtcclxuICAgIGxldCB0ZW1wX2dyaWQgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlbXBfZ3JpZFtpXSA9IFtdO1xyXG5cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIFNlbGVjdCBtYXRpbmcgcGFydG5lclxyXG4gICAgICAgIGxldCBtYXRpbmdfcGFydG5lciA9IHRoaXMucGlja19tYXRpbmdfcGFydG5lcihncmlkLGksIGopO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm4gb2Zmc3ByaW5nIGdlbm90eXBlXHJcbiAgICAgICAgdGVtcF9ncmlkW2ldW2pdID0gdGhpcy5nZXRfb2Zmc3ByaW5nKGdyaWRbaV1bal0sIG1hdGluZ19wYXJ0bmVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdyaWQubGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRlbXBbal0gPSB0ZW1wX2dyaWRbaV1bal1cclxuICAgICAgfVxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWVfcmFuZ2UucHVzaCh0aGlzLnNpbXVsYXRpb25fY291bnRlcisrKVxyXG5cclxuICAgIHJldHVybiBncmlkXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/sir',["require", "exports", "aurelia-framework", "../helper/sampling", "d3"], function (require, exports, aurelia_framework_1, sampling_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SIR = (function () {
        function SIR(rho_range, v_range, mu_range, beta_range, gamma_range, NY, S0, I0) {
            var _this = this;
            this.rho_range = rho_range;
            this.v_range = v_range;
            this.mu_range = mu_range;
            this.beta_range = beta_range;
            this.gamma_range = gamma_range;
            this.NY = NY;
            this.S0 = S0;
            this.I0 = I0;
            this.time_range = [];
            this.params = [];
            this.SIR_model = function (t, INP) {
                var Y = [0, 0, 0];
                var V = INP;
                Y[0] = _this.v - _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - _this.mu * V[0];
                Y[1] = _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - (_this.gamma + _this.mu) * V[1] / (1 - _this.rho);
                Y[2] = _this.gamma * V[1] - _this.mu * V[2];
                return Y;
            };
            this.ND = this.NY * 365;
            this.R0 = 1 - this.S0 - this.I0;
            this.INPUT = [+this.S0, +this.I0, +this.R0];
            for (var i = 0; i < this.ND; i++) {
                this.time_range.push(i);
            }
            this.sampling = new sampling_1.Sampling("sobol");
        }
        SIR.prototype.compute_model = function (n_samples) {
            var _this = this;
            var out = [];
            this.get_params(this.sampling.get_points(n_samples, 5));
            this.params.forEach(function (d) {
                _this.rho = d[0];
                _this.v = d[1];
                _this.mu = d[2];
                _this.beta = d[3];
                _this.gamma = d[4];
                var sol = numeric.dopri(0, _this.ND, _this.INPUT, _this.SIR_model, 1e-6, 5000);
                out.push(sol.at(_this.time_range));
            });
            return out;
        };
        SIR.prototype.get_params = function (points) {
            var _this = this;
            var rho_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.rho_range);
            var v_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.v_range);
            var mu_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.mu_range);
            var beta_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.beta_range);
            var gamma_scale = d3.scaleLinear()
                .domain([0, 1])
                .range(this.gamma_range);
            points.forEach(function (d) {
                _this.params.push([
                    Math.round(rho_scale(d[0])) / 100,
                    1 / (Math.round(v_scale(d[1])) * 365),
                    1 / (Math.round(mu_scale(d[2])) * 365),
                    beta_scale(d[3]),
                    1 / Math.round(gamma_scale(d[4]))
                ]);
            });
        };
        SIR = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object])
        ], SIR);
        return SIR;
    }());
    exports.SIR = SIR;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQXRGVSxHQUFHO1lBRGYsOEJBQVU7O1dBQ0UsR0FBRyxDQXVGZjtRQUFELFVBQUM7S0F2RkQsQUF1RkMsSUFBQTtJQXZGWSxrQkFBRyIsImZpbGUiOiJtb2RlbHMvc2lyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NhbXBsaW5nfSBmcm9tIFwiLi4vaGVscGVyL3NhbXBsaW5nXCJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5cbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xuZGVjbGFyZSB2YXIgbnVtZXJpYzogYW55O1xuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBTSVIge1xuICBwcml2YXRlIE5EO1xuICBwcml2YXRlIFIwO1xuICBwcml2YXRlIElOUFVUO1xuICBwdWJsaWMgdGltZV9yYW5nZSA9IDxhbnlbXT4gW107XG4gIHB1YmxpYyBwYXJhbXMgPSA8YW55W10+IFtdO1xuICBwcml2YXRlIHNhbXBsaW5nO1xuXG4gIC8vIFBhcmFtcyBmb3IgdGhlIGNvbXB1dGF0aW9uc1xuICBwcml2YXRlIHJobztcbiAgcHJpdmF0ZSB2O1xuICBwcml2YXRlIG11O1xuICBwcml2YXRlIGJldGE7XG4gIHByaXZhdGUgZ2FtbWE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByaG9fcmFuZ2UsIHByaXZhdGUgdl9yYW5nZSxcbiAgICBwcml2YXRlIG11X3JhbmdlLCBwcml2YXRlIGJldGFfcmFuZ2UsIHByaXZhdGUgZ2FtbWFfcmFuZ2UsXG4gICAgcHJpdmF0ZSBOWSwgcHJpdmF0ZSBTMCwgcHJpdmF0ZSBJMCkge1xuICAgICAgLy8gVXBkYXRlIHZhcmlhYmxlc1xuICAgICAgdGhpcy5ORCA9IHRoaXMuTlkqMzY1XG4gICAgICB0aGlzLlIwID0gMSAtIHRoaXMuUzAgLSB0aGlzLkkwXG4gICAgICB0aGlzLklOUFVUID0gWyt0aGlzLlMwLCArdGhpcy5JMCwgK3RoaXMuUjBdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ORDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy50aW1lX3JhbmdlLnB1c2goaSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zYW1wbGluZyA9IG5ldyBTYW1wbGluZyhcInNvYm9sXCIpO1xuICB9XG5cbiAgY29tcHV0ZV9tb2RlbChuX3NhbXBsZXMpIHtcbiAgICBsZXQgb3V0ID0gPGFueVtdPiBbXTtcbiAgICB0aGlzLmdldF9wYXJhbXModGhpcy5zYW1wbGluZy5nZXRfcG9pbnRzKG5fc2FtcGxlcywgNSkpXG5cbiAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKCBkID0+IHtcbiAgICAgICAgdGhpcy5yaG8gPSBkWzBdO1xuICAgICAgICB0aGlzLnYgPSBkWzFdO1xuICAgICAgICB0aGlzLm11ID0gZFsyXTtcbiAgICAgICAgdGhpcy5iZXRhID0gZFszXTtcbiAgICAgICAgdGhpcy5nYW1tYSA9IGRbNF07XG5cbiAgICAgICAgbGV0IHNvbCA9IG51bWVyaWMuZG9wcmkoMCwgdGhpcy5ORCwgdGhpcy5JTlBVVCwgdGhpcy5TSVJfbW9kZWwsIDFlLTYsIDUwMDApO1xuXG4gICAgICAgIG91dC5wdXNoKHNvbC5hdCh0aGlzLnRpbWVfcmFuZ2UpKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHByaXZhdGUgU0lSX21vZGVsID0gKHQsIElOUCkgPT4ge1xuICAgIGxldCBZID0gWzAsIDAgLDBdXG4gICAgbGV0IFYgPSBJTlBcblxuICAgICAgWVswXSA9IHRoaXMudiAtIHRoaXMuYmV0YSAqIFZbMF0gKiBWWzFdIC8gVi5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC0gdGhpcy5tdSAqIFZbMF1cbiAgICAgIFlbMV0gPSB0aGlzLmJldGEgKiBWWzBdICogVlsxXSAvIFYucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAtICh0aGlzLmdhbW1hICsgdGhpcy5tdSkgKiBWWzFdLygxLXRoaXMucmhvKVxuICAgICAgWVsyXSA9IHRoaXMuZ2FtbWEgKiBWWzFdIC0gdGhpcy5tdSAqIFZbMl1cblxuICAgIHJldHVybiBZXG4gIH1cblxuICBwcml2YXRlIGdldF9wYXJhbXMocG9pbnRzKSB7XG4gICAgbGV0IHJob19zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMucmhvX3JhbmdlKTtcbiAgICBsZXQgdl9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMudl9yYW5nZSk7XG4gICAgbGV0IG11X3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAucmFuZ2UodGhpcy5tdV9yYW5nZSk7XG4gICAgbGV0IGJldGFfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxXSlcbiAgICAgIC5yYW5nZSh0aGlzLmJldGFfcmFuZ2UpO1xuICAgIGxldCBnYW1tYV9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKHRoaXMuZ2FtbWFfcmFuZ2UpO1xuXG4gICAgcG9pbnRzLmZvckVhY2goIGQgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFtcbiAgICAgICAgICAgIE1hdGgucm91bmQocmhvX3NjYWxlKGRbMF0pKS8xMDAsXG4gICAgICAgICAgICAxLyhNYXRoLnJvdW5kKHZfc2NhbGUoZFsxXSkpKjM2NSksXG4gICAgICAgICAgICAxLyhNYXRoLnJvdW5kKG11X3NjYWxlKGRbMl0pKSozNjUpLFxuICAgICAgICAgICAgYmV0YV9zY2FsZShkWzNdKSxcbiAgICAgICAgICAgIDEvTWF0aC5yb3VuZChnYW1tYV9zY2FsZShkWzRdKSlcbiAgICAgICAgXSlcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('helper/sampling',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sampling = (function () {
        function Sampling(type) {
            this.type = type;
        }
        Sampling.prototype.get_points = function (n_samples, dimension) {
            if (this.type == "sobol") {
                var seq = lobos.Sobol(dimension);
                return seq.take(n_samples);
            }
        };
        return Sampling;
    }());
    exports.Sampling = Sampling;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci9zYW1wbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNFLGtCQUFvQixJQUFJO1lBQUosU0FBSSxHQUFKLElBQUksQ0FBQTtRQUN4QixDQUFDO1FBRUQsNkJBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxTQUFTO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFFaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUIsQ0FBQztRQUNILENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSw0QkFBUSIsImZpbGUiOiJoZWxwZXIvc2FtcGxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIG1hZ2ljIGxpbmUgcmVtb3ZlZCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIG51bWVyaWNcbmRlY2xhcmUgdmFyIGxvYm9zOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBTYW1wbGluZyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZSkge1xuICB9XG5cbiAgZ2V0X3BvaW50cyhuX3NhbXBsZXMsIGRpbWVuc2lvbikge1xuICAgIGlmKHRoaXMudHlwZSA9PSBcInNvYm9sXCIpIHtcbiAgICAgIGxldCBzZXEgPSBsb2Jvcy5Tb2JvbChkaW1lbnNpb24pXG5cbiAgICAgIHJldHVybiBzZXEudGFrZShuX3NhbXBsZXMpXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('spatial_migration/spatial-migration',["require", "exports", "aurelia-framework", "../models/genetic", "ion-rangeslider"], function (require, exports, aurelia_framework_1, genetic_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialMigration = (function () {
        function SpatialMigration() {
            this.inFilter = [];
            this.outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);
            this.simulations = 100;
            this.generations = 100;
            this.pop_from = 0;
            this.pop_to = 1000;
            this.event_from = 0.1;
            this.event_to = 0.2;
            this.leftover_from = 1;
            this.leftover_to = 10;
            this.sobol_n = 100;
            this.data_parallel = [];
            this.data_lines = [];
            this.data_grid = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_parallel = false;
        }
        SpatialMigration.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
        };
        SpatialMigration.prototype.attached = function () {
            var _this = this;
            $("#pop").ionRangeSlider({
                min: 1,
                max: 2000,
                from: 500,
                to: 1000,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.pop_from = data["from"];
                    _this.pop_to = data["to"];
                }
            });
            $("#event").ionRangeSlider({
                min: 0.01,
                max: 1,
                from: 0.1,
                to: 0.2,
                step: 0.01,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.event_from = data["from"];
                    _this.event_to = data["to"];
                }
            });
            $("#leftover").ionRangeSlider({
                min: 1,
                max: 50,
                from: 1,
                to: 10,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.leftover_from = data["from"];
                    _this.leftover_to = data["to"];
                }
            });
        };
        SpatialMigration.prototype.brushing_pChanged = function () {
            this.updateOutData(this.brushing_p, "p");
            this.updateInData(this.brushing_p);
        };
        SpatialMigration.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop, "pop");
            this.updateInData(this.brushing_pop);
        };
        SpatialMigration.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        SpatialMigration.prototype.redrawLinecharts = function () {
            this.redraw_p = this.redraw_p == 0 ? 1 : 0;
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        };
        SpatialMigration.prototype.updateOutData = function (mapping, attribute) {
            var _this = this;
            var average = new Map();
            this.outFilterList.set(attribute, mapping);
            mapping.forEach(function (v, k) {
                var temp = 0;
                _this.outFilterList.forEach(function (iv, ik) {
                    if (iv.size > 0)
                        temp = temp + iv.get(k);
                });
                temp = temp / _this.outFilterList.size;
                average.set(k, temp);
            });
            this.data_lines.forEach(function (x) {
                x["highlight"] = average.get(x["id"]);
            });
            this.redrawLinecharts();
        };
        SpatialMigration.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        SpatialMigration.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        SpatialMigration.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        SpatialMigration.prototype.compute = function () {
            var _this = this;
            this.collapsed_input = true;
            var gen = new genetic_1.Genetic([this.event_from, this.event_to], [this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations);
            var model = gen.compute_model();
            model.forEach(function (sol, run) {
                var temp = [];
                for (var i = 0; i < sol.length; i++) {
                    temp.push({
                        "x": gen.time_range[i],
                        "p": sol[i].p,
                        "pop": sol[i].pop
                    });
                }
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "pop": gen.params[run][0],
                        "P(event)": gen.params[run][1],
                        "Remaining": gen.params[run][2]
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialMigration.prototype, "brushing_p", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialMigration.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialMigration.prototype, "brushing_parallel", void 0);
        SpatialMigration = __decorate([
            aurelia_framework_1.autoinject
        ], SpatialMigration);
        return SpatialMigration;
    }());
    exports.SpatialMigration = SpatialMigration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXRpYWxfbWlncmF0aW9uL3NwYXRpYWwtbWlncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BO1FBREE7WUFVSSxhQUFRLEdBQUcsRUFBRSxDQUFBO1lBQ2Isa0JBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBR2hFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBR2xCLGFBQVEsR0FBRyxDQUFDLENBQUM7WUFDYixXQUFNLEdBQUcsSUFBSSxDQUFDO1lBR2QsZUFBVSxHQUFHLEdBQUcsQ0FBQztZQUNqQixhQUFRLEdBQUcsR0FBRyxDQUFDO1lBR2Ysa0JBQWEsR0FBRyxDQUFDLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7WUFHakIsWUFBTyxHQUFHLEdBQUcsQ0FBQTtZQUViLGtCQUFhLEdBQVcsRUFBRSxDQUFBO1lBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUE7WUFDdkIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtZQUN0Qix3QkFBbUIsR0FBVyxFQUFFLENBQUE7WUFDaEMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7WUFFaEIsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRTNCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQXNNL0IsQ0FBQztRQXBNRyxpQ0FBTSxHQUFOO1lBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJ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b0JBQ3RCLElBQUksRUFBRSxHQUFHO29CQUNULFdBQVcsRUFBRSxDQUFDO29CQUNkLE1BQU0sRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUE1T1M7WUFBWCw4QkFBVTs7NERBQVk7UUFDWDtZQUFYLDhCQUFVOzs4REFBYztRQUliO1lBQVgsOEJBQVU7O21FQUFtQjtRQU5yQixnQkFBZ0I7WUFENUIsOEJBQVU7V0FDRSxnQkFBZ0IsQ0E4TzVCO1FBQUQsdUJBQUM7S0E5T0QsQUE4T0MsSUFBQTtJQTlPWSw0Q0FBZ0IiLCJmaWxlIjoic3BhdGlhbF9taWdyYXRpb24vc3BhdGlhbC1taWdyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge0dlbmV0aWN9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXRpY1wiXG4vLyBpbXBvcnQge01pZ3JhdGlvbn0gZnJvbSBcIi4uL21vZGVscy9taWdyYXRpb25cIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBTcGF0aWFsTWlncmF0aW9uIHtcbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wO1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3BvcDtcbiAgICByZWRyYXdfcDtcbiAgICByZWRyYXdfcG9wO1xuXG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcGFyYWxsZWw7XG4gICAgcmVkcmF3X3BhcmFsbGVsO1xuXG4gICAgaW5GaWx0ZXIgPSBbXVxuICAgIG91dEZpbHRlckxpc3QgPSBuZXcgTWFwKFtbXCJwXCIsIG5ldyBNYXAoKV0sIFtcInBvcFwiLCBuZXcgTWFwKCldXSk7XG5cbiAgICAvLyBHZW5ldGljIE1vZGVsXG4gICAgc2ltdWxhdGlvbnMgPSAxMDA7XG4gICAgZ2VuZXJhdGlvbnMgPSAxMDA7XG5cbiAgICAvLyBQb3B1bGF0aW9uIGNvdW50XG4gICAgcG9wX2Zyb20gPSAwO1xuICAgIHBvcF90byA9IDEwMDA7XG5cbiAgICAvLyBQcm9iYWJpbGl0eSBvZiBldmVudFxuICAgIGV2ZW50X2Zyb20gPSAwLjE7XG4gICAgZXZlbnRfdG8gPSAwLjI7XG5cbiAgICAvLyBMZWZ0b3ZlciBpbmRpdmlkdWFscyBhZnRlciBldmVudFxuICAgIGxlZnRvdmVyX2Zyb20gPSAxO1xuICAgIGxlZnRvdmVyX3RvID0gMTA7XG5cbiAgICAvLyBTb2JvbCBzYW1wbGluZ1xuICAgIHNvYm9sX24gPSAxMDBcblxuICAgIGRhdGFfcGFyYWxsZWwgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lcyA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2dyaWQgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lc19vcmlnaW5hbCA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xlbmd0aCA9IDA7XG5cbiAgICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICAgIGNvbGxhcHNlZF9pbnB1dCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9wYXJhbGxlbCA9IGZhbHNlO1xuXG4gICAgc3dpdGNoKCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgdGhpcy5jb2xsYXBzZWRfcGFyYWxsZWwgPSB0aGlzLmNvbGxhcHNlZF9wYXJhbGxlbCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyBBdHRhY2hpbmcgcmFuZ2Ugc2xpZGVyc1xuICAgICAgICAkKFwiI3BvcFwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwMDAsXG4gICAgICAgICAgICBmcm9tOiA1MDAsXG4gICAgICAgICAgICB0bzogMTAwMCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3BfZnJvbSA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgICAgICB0aGlzLnBvcF90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjZXZlbnRcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAwLjAxLFxuICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgZnJvbTogMC4xLFxuICAgICAgICAgICAgdG86IDAuMixcbiAgICAgICAgICAgIHN0ZXA6IDAuMDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudF9mcm9tID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgICAgIHRoaXMuZXZlbnRfdG8gPSBkYXRhW1widG9cIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI2xlZnRvdmVyXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNTAsXG4gICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgdG86IDEwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRvdmVyX2Zyb20gPSBkYXRhW1wiZnJvbVwiXVxuICAgICAgICAgICAgdGhpcy5sZWZ0b3Zlcl90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3AsIFwicFwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wb3BDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19wb3AsIFwicG9wXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3BvcCk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcGFyYWxsZWxDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFsbGVsRGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICAgIH1cblxuICAgIHJlZHJhd0xpbmVjaGFydHMoKSB7XG4gICAgICAgIHRoaXMucmVkcmF3X3AgPSB0aGlzLnJlZHJhd19wID09IDAgPyAxIDogMDtcbiAgICAgICAgdGhpcy5yZWRyYXdfcG9wID0gdGhpcy5yZWRyYXdfcG9wID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU91dERhdGEobWFwcGluZywgYXR0cmlidXRlKSB7XG4gICAgICBsZXQgYXZlcmFnZSA9IG5ldyBNYXAoKTtcblxuICAgICAgLy8gU2V0IGN1cnJlbnQgZmlsdGVyXG4gICAgICB0aGlzLm91dEZpbHRlckxpc3Quc2V0KGF0dHJpYnV0ZSwgbWFwcGluZyk7XG5cbiAgICAgIC8vIFVwZGF0ZSBhdmVyYWdlIGZpbHRlclxuICAgICAgbWFwcGluZy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gMDtcblxuICAgICAgICB0aGlzLm91dEZpbHRlckxpc3QuZm9yRWFjaCgoaXYsIGlrKSA9PiB7XG4gICAgICAgICAgaWYoaXYuc2l6ZSA+IDApIHRlbXAgID0gdGVtcCArIGl2LmdldChrKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0ZW1wID0gdGVtcC90aGlzLm91dEZpbHRlckxpc3Quc2l6ZTtcblxuICAgICAgICBhdmVyYWdlLnNldChrLCB0ZW1wKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IGxpbmUgaGlnaGxpZ2h0XG4gICAgICB0aGlzLmRhdGFfbGluZXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IGF2ZXJhZ2UuZ2V0KHhbXCJpZFwiXSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmVkcmF3TGluZWNoYXJ0cygpO1xuICAgICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJbkRhdGEobWFwcGluZykge1xuICAgICAgaWYodGhpcy5pbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbFxuICAgICAgICAgIC5maWx0ZXIoeCA9PiB0aGlzLmluRmlsdGVyLmluY2x1ZGVzKHhbXCJpZFwiXSkpXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQYXJhbGxlbERhdGEoaWRzKSB7XG4gICAgICAgIHRoaXMuaW5GaWx0ZXIgPSBpZHM7XG5cbiAgICAgICAgaWYoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmKGlkcy5pbmNsdWRlcyh4W1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gMTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJPdXREYXRhKGlkcykge1xuICAgICAgICBpZihpZHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGhpZ2hsaWdodF9saXN0ID0gbmV3IFNldChpZHMpO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwuZmlsdGVyKHggPT4gaGlnaGxpZ2h0X2xpc3QuaGFzKHhbXCJpZFwiXSkpKVxuXG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgZmlsdGVyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfZmlsdGVyID0gaGlnaGxpZ2h0X2xpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuICAgICAgICAgICAgdGhpcy5kYXRhX2xpbmVzLnB1c2goLi4udGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0cnVlO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgR3JpZFxuICAgICAgICAvLyBsZXQgc3BhdGlhbCA9IG5ldyBNaWdyYXRpb24oWzAsIDFdLCAxMDApXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNwYXRpYWwuaW5pdF9zaW11bGF0aW9uKHRoaXMuZGF0YV9ncmlkKVxuICAgICAgICAvLyBzcGF0aWFsLnJ1bl9zaW11bGF0aW9uKHRoaXMuZGF0YV9ncmlkKVxuXG4gICAgICAgIC8vIENyZWF0ZSBtb2RlbCBwYXJhbXNcbiAgICAgICAgbGV0IGdlbiA9IG5ldyBHZW5ldGljKFt0aGlzLmV2ZW50X2Zyb20sIHRoaXMuZXZlbnRfdG9dLFt0aGlzLnBvcF9mcm9tLCB0aGlzLnBvcF90b10sIFt0aGlzLmxlZnRvdmVyX2Zyb20sIHRoaXMubGVmdG92ZXJfdG9dLCB0aGlzLmdlbmVyYXRpb25zLCB0aGlzLnNpbXVsYXRpb25zKVxuXG4gICAgICAgIGxldCBtb2RlbCA9IGdlbi5jb21wdXRlX21vZGVsKClcblxuICAgICAgICBtb2RlbC5mb3JFYWNoKCAoc29sLCBydW4pID0+IHtcbiAgICAgICAgICBsZXQgdGVtcCA9IDxhbnlbXT4gW11cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgXCJ4XCI6IGdlbi50aW1lX3JhbmdlW2ldLFxuICAgICAgICAgICAgICAgICAgXCJwXCI6IHNvbFtpXS5wLFxuICAgICAgICAgICAgICAgICAgXCJwb3BcIjogc29sW2ldLnBvcFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogcnVuLFxuICAgICAgICAgICAgICAgICAgXCJoaWdobGlnaHRcIjogMCxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJwb3BcIjogZ2VuLnBhcmFtc1tydW5dWzBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUChldmVudClcIjogZ2VuLnBhcmFtc1tydW5dWzFdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUmVtYWluaW5nXCI6IGdlbi5wYXJhbXNbcnVuXVsyXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImlkXCI6IHJ1bixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjogdGVtcFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kYXRhX2xlbmd0aCA9IHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0RGF0YShbXSlcbiAgICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('spatial_sir/spatial-sir',["require", "exports", "aurelia-framework", "../models/genetic", "ion-rangeslider"], function (require, exports, aurelia_framework_1, genetic_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialSir = (function () {
        function SpatialSir() {
            this.inFilter = [];
            this.outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);
            this.simulations = 100;
            this.generations = 100;
            this.grid_length = 100;
            this.grid = [];
            this.temp_grid = [];
            this.beta = 0.05;
            this.gamma = 0.15;
            this.pop_from = 0;
            this.pop_to = 1000;
            this.event_from = 0.1;
            this.event_to = 0.2;
            this.leftover_from = 1;
            this.leftover_to = 10;
            this.sobol_n = 100;
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_parallel = false;
        }
        SpatialSir.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
        };
        SpatialSir.prototype.attached = function () {
            var _this = this;
            $("#pop").ionRangeSlider({
                min: 1,
                max: 2000,
                from: 500,
                to: 1000,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.pop_from = data["from"];
                    _this.pop_to = data["to"];
                }
            });
            $("#event").ionRangeSlider({
                min: 0.01,
                max: 1,
                from: 0.1,
                to: 0.2,
                step: 0.01,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.event_from = data["from"];
                    _this.event_to = data["to"];
                }
            });
            $("#leftover").ionRangeSlider({
                min: 1,
                max: 50,
                from: 1,
                to: 10,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.leftover_from = data["from"];
                    _this.leftover_to = data["to"];
                }
            });
        };
        SpatialSir.prototype.brushing_pChanged = function () {
            this.updateOutData(this.brushing_p, "p");
            this.updateInData(this.brushing_p);
        };
        SpatialSir.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop, "pop");
            this.updateInData(this.brushing_pop);
        };
        SpatialSir.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        SpatialSir.prototype.redrawLinecharts = function () {
            this.redraw_p = this.redraw_p == 0 ? 1 : 0;
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        };
        SpatialSir.prototype.updateOutData = function (mapping, attribute) {
            var _this = this;
            var average = new Map();
            this.outFilterList.set(attribute, mapping);
            mapping.forEach(function (v, k) {
                var temp = 0;
                _this.outFilterList.forEach(function (iv, ik) {
                    if (iv.size > 0)
                        temp = temp + iv.get(k);
                });
                temp = temp / _this.outFilterList.size;
                average.set(k, temp);
            });
            this.data_lines.forEach(function (x) {
                x["highlight"] = average.get(x["id"]);
            });
            this.redrawLinecharts();
        };
        SpatialSir.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        SpatialSir.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        SpatialSir.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        SpatialSir.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialSir.prototype.init_grid = function () {
            for (var i = 0; i < this.grid_length; i++) {
                this.grid.push(new Array(this.grid_length).fill("S"));
            }
            this.grid[this.get_random_int(0, this.grid_length - 1)][this.get_random_int(0, this.grid_length - 1)] = "I";
        };
        SpatialSir.prototype.compute = function () {
            var _this = this;
            this.collapsed_input = true;
            this.init_grid();
            var gen = new genetic_1.Genetic([this.event_from, this.event_to], [this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations);
            var model = gen.compute_model();
            model.forEach(function (sol, run) {
                var temp = [];
                for (var i = 0; i < sol.length; i++) {
                    temp.push({
                        "x": gen.time_range[i],
                        "p": sol[i].p,
                        "pop": sol[i].pop
                    });
                }
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "pop": gen.params[run][0],
                        "P(event)": gen.params[run][1],
                        "Remaining": gen.params[run][2]
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialSir.prototype, "brushing_p", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialSir.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], SpatialSir.prototype, "brushing_parallel", void 0);
        SpatialSir = __decorate([
            aurelia_framework_1.autoinject
        ], SpatialSir);
        return SpatialSir;
    }());
    exports.SpatialSir = SpatialSir;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXRpYWxfc2lyL3NwYXRpYWwtc2lyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBREE7WUFVSSxhQUFRLEdBQUcsRUFBRSxDQUFBO1lBQ2Isa0JBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBR2hFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBR2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFNBQUksR0FBRyxFQUFFLENBQUM7WUFDVixjQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ2YsU0FBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQUssR0FBRyxJQUFJLENBQUM7WUFHYixhQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsV0FBTSxHQUFHLElBQUksQ0FBQztZQUdkLGVBQVUsR0FBRyxHQUFHLENBQUM7WUFDakIsYUFBUSxHQUFHLEdBQUcsQ0FBQztZQUdmLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1lBR2pCLFlBQU8sR0FBRyxHQUFHLENBQUE7WUFFYixrQkFBYSxHQUFXLEVBQUUsQ0FBQTtZQUMxQixlQUFVLEdBQVcsRUFBRSxDQUFBO1lBQ3ZCLHdCQUFtQixHQUFXLEVBQUUsQ0FBQTtZQUNoQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztZQUVoQixtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFM0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBK00vQixDQUFDO1FBN01HLDJCQUFNLEdBQU47WUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxHQUFHLEtBQUss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eEIsQ0FBQztRQTNQUztZQUFYLDhCQUFVOztzREFBWTtRQUNYO1lBQVgsOEJBQVU7O3dEQUFjO1FBSWI7WUFBWCw4QkFBVTs7NkRBQW1CO1FBTnJCLFVBQVU7WUFEdEIsOEJBQVU7V0FDRSxVQUFVLENBNlB0QjtRQUFELGlCQUFDO0tBN1BELEFBNlBDLElBQUE7SUE3UFksZ0NBQVUiLCJmaWxlIjoic3BhdGlhbF9zaXIvc3BhdGlhbC1zaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge0dlbmV0aWN9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXRpY1wiXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFNwYXRpYWxTaXIge1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3A7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcG9wO1xuICAgIHJlZHJhd19wO1xuICAgIHJlZHJhd19wb3A7XG5cbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wYXJhbGxlbDtcbiAgICByZWRyYXdfcGFyYWxsZWw7XG5cbiAgICBpbkZpbHRlciA9IFtdXG4gICAgb3V0RmlsdGVyTGlzdCA9IG5ldyBNYXAoW1tcInBcIiwgbmV3IE1hcCgpXSwgW1wicG9wXCIsIG5ldyBNYXAoKV1dKTtcblxuICAgIC8vIEdlbmV0aWMgTW9kZWxcbiAgICBzaW11bGF0aW9ucyA9IDEwMDtcbiAgICBnZW5lcmF0aW9ucyA9IDEwMDtcblxuICAgIC8vIEdyaWRcbiAgICBncmlkX2xlbmd0aCA9IDEwMDtcbiAgICBncmlkID0gW107XG4gICAgdGVtcF9ncmlkID0gW107XG4gICAgYmV0YSA9IDAuMDU7XG4gICAgZ2FtbWEgPSAwLjE1O1xuXG4gICAgLy8gUG9wdWxhdGlvbiBjb3VudFxuICAgIHBvcF9mcm9tID0gMDtcbiAgICBwb3BfdG8gPSAxMDAwO1xuXG4gICAgLy8gUHJvYmFiaWxpdHkgb2YgZXZlbnRcbiAgICBldmVudF9mcm9tID0gMC4xO1xuICAgIGV2ZW50X3RvID0gMC4yO1xuXG4gICAgLy8gTGVmdG92ZXIgaW5kaXZpZHVhbHMgYWZ0ZXIgZXZlbnRcbiAgICBsZWZ0b3Zlcl9mcm9tID0gMTtcbiAgICBsZWZ0b3Zlcl90byA9IDEwO1xuXG4gICAgLy8gU29ib2wgc2FtcGxpbmdcbiAgICBzb2JvbF9uID0gMTAwXG5cbiAgICBkYXRhX3BhcmFsbGVsID0gPGFueVtdPiBbXVxuICAgIGRhdGFfbGluZXMgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lc19vcmlnaW5hbCA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xlbmd0aCA9IDA7XG5cbiAgICBjdXJyZW50X2ZpbHRlciA9IG5ldyBTZXQoKTtcblxuICAgIGNvbGxhcHNlZF9pbnB1dCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9wYXJhbGxlbCA9IGZhbHNlO1xuXG4gICAgc3dpdGNoKCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWRfaW5wdXQgPSB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgdGhpcy5jb2xsYXBzZWRfcGFyYWxsZWwgPSB0aGlzLmNvbGxhcHNlZF9wYXJhbGxlbCA9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyBBdHRhY2hpbmcgcmFuZ2Ugc2xpZGVyc1xuICAgICAgICAkKFwiI3BvcFwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwMDAsXG4gICAgICAgICAgICBmcm9tOiA1MDAsXG4gICAgICAgICAgICB0bzogMTAwMCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3BfZnJvbSA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgICAgICB0aGlzLnBvcF90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjZXZlbnRcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAwLjAxLFxuICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgZnJvbTogMC4xLFxuICAgICAgICAgICAgdG86IDAuMixcbiAgICAgICAgICAgIHN0ZXA6IDAuMDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudF9mcm9tID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgICAgIHRoaXMuZXZlbnRfdG8gPSBkYXRhW1widG9cIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI2xlZnRvdmVyXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNTAsXG4gICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgdG86IDEwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRvdmVyX2Zyb20gPSBkYXRhW1wiZnJvbVwiXVxuICAgICAgICAgICAgdGhpcy5sZWZ0b3Zlcl90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3AsIFwicFwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wb3BDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19wb3AsIFwicG9wXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3BvcCk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcGFyYWxsZWxDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFsbGVsRGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICAgIH1cblxuICAgIHJlZHJhd0xpbmVjaGFydHMoKSB7XG4gICAgICAgIHRoaXMucmVkcmF3X3AgPSB0aGlzLnJlZHJhd19wID09IDAgPyAxIDogMDtcbiAgICAgICAgdGhpcy5yZWRyYXdfcG9wID0gdGhpcy5yZWRyYXdfcG9wID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU91dERhdGEobWFwcGluZywgYXR0cmlidXRlKSB7XG4gICAgICBsZXQgYXZlcmFnZSA9IG5ldyBNYXAoKTtcblxuICAgICAgLy8gU2V0IGN1cnJlbnQgZmlsdGVyXG4gICAgICB0aGlzLm91dEZpbHRlckxpc3Quc2V0KGF0dHJpYnV0ZSwgbWFwcGluZyk7XG5cbiAgICAgIC8vIFVwZGF0ZSBhdmVyYWdlIGZpbHRlclxuICAgICAgbWFwcGluZy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gMDtcblxuICAgICAgICB0aGlzLm91dEZpbHRlckxpc3QuZm9yRWFjaCgoaXYsIGlrKSA9PiB7XG4gICAgICAgICAgaWYoaXYuc2l6ZSA+IDApIHRlbXAgID0gdGVtcCArIGl2LmdldChrKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0ZW1wID0gdGVtcC90aGlzLm91dEZpbHRlckxpc3Quc2l6ZTtcblxuICAgICAgICBhdmVyYWdlLnNldChrLCB0ZW1wKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IGxpbmUgaGlnaGxpZ2h0XG4gICAgICB0aGlzLmRhdGFfbGluZXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IGF2ZXJhZ2UuZ2V0KHhbXCJpZFwiXSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmVkcmF3TGluZWNoYXJ0cygpO1xuICAgICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJbkRhdGEobWFwcGluZykge1xuICAgICAgaWYodGhpcy5pbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbFxuICAgICAgICAgIC5maWx0ZXIoeCA9PiB0aGlzLmluRmlsdGVyLmluY2x1ZGVzKHhbXCJpZFwiXSkpXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgICAgLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gbWFwcGluZy5nZXQoeFtcImlkXCJdKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQYXJhbGxlbERhdGEoaWRzKSB7XG4gICAgICAgIHRoaXMuaW5GaWx0ZXIgPSBpZHM7XG5cbiAgICAgICAgaWYoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmKGlkcy5pbmNsdWRlcyh4W1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gMTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdfcGFyYWxsZWwgPSB0aGlzLnJlZHJhd19wYXJhbGxlbCA9PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJPdXREYXRhKGlkcykge1xuICAgICAgICBpZihpZHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IGhpZ2hsaWdodF9saXN0ID0gbmV3IFNldChpZHMpO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwuZmlsdGVyKHggPT4gaGlnaGxpZ2h0X2xpc3QuaGFzKHhbXCJpZFwiXSkpKVxuXG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgZmlsdGVyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfZmlsdGVyID0gaGlnaGxpZ2h0X2xpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMubGVuZ3RoID0gMFxuICAgICAgICAgICAgdGhpcy5kYXRhX2xpbmVzLnB1c2goLi4udGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0X3JhbmRvbV9pbnQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIGluaXRfZ3JpZCgpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ncmlkLnB1c2gobmV3IEFycmF5KHRoaXMuZ3JpZF9sZW5ndGgpLmZpbGwoXCJTXCIpKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmdyaWRbdGhpcy5nZXRfcmFuZG9tX2ludCgwLHRoaXMuZ3JpZF9sZW5ndGgtMSldW3RoaXMuZ2V0X3JhbmRvbV9pbnQoMCx0aGlzLmdyaWRfbGVuZ3RoLTEpXSA9IFwiSVwiO1xuICAgIH1cblxuICAgIGNvbXB1dGUoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkX2lucHV0ID0gdHJ1ZTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIEdyaWRcbiAgICAgICAgdGhpcy5pbml0X2dyaWQoKTtcblxuICAgICAgICAvLyBDcmVhdGUgbW9kZWwgcGFyYW1zXG4gICAgICAgIGxldCBnZW4gPSBuZXcgR2VuZXRpYyhbdGhpcy5ldmVudF9mcm9tLCB0aGlzLmV2ZW50X3RvXSxbdGhpcy5wb3BfZnJvbSwgdGhpcy5wb3BfdG9dLCBbdGhpcy5sZWZ0b3Zlcl9mcm9tLCB0aGlzLmxlZnRvdmVyX3RvXSwgdGhpcy5nZW5lcmF0aW9ucywgdGhpcy5zaW11bGF0aW9ucylcblxuICAgICAgICBsZXQgbW9kZWwgPSBnZW4uY29tcHV0ZV9tb2RlbCgpXG5cbiAgICAgICAgbW9kZWwuZm9yRWFjaCggKHNvbCwgcnVuKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXAgPSA8YW55W10+IFtdXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGVtcC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIFwieFwiOiBnZW4udGltZV9yYW5nZVtpXSxcbiAgICAgICAgICAgICAgICAgIFwicFwiOiBzb2xbaV0ucCxcbiAgICAgICAgICAgICAgICAgIFwicG9wXCI6IHNvbFtpXS5wb3BcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImlkXCI6IHJ1bixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwicG9wXCI6IGdlbi5wYXJhbXNbcnVuXVswXSxcbiAgICAgICAgICAgICAgICAgICAgICBcIlAoZXZlbnQpXCI6IGdlbi5wYXJhbXNbcnVuXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICBcIlJlbWFpbmluZ1wiOiBnZW4ucGFyYW1zW3J1bl1bMl1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBydW4sXG4gICAgICAgICAgICAgICAgICBcImhpZ2hsaWdodFwiOiAwLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHRlbXBcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZGF0YV9sZW5ndGggPSB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwubGVuZ3RoO1xuICAgICAgICB0aGlzLmZpbHRlck91dERhdGEoW10pXG4gICAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('vpsa/vpsa',["require", "exports", "aurelia-framework", "d3", "ion-rangeslider"], function (require, exports, aurelia_framework_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vspa = (function () {
        function Vspa() {
            var _this = this;
            this.param1 = 1;
            this.param2 = 1;
            this.test = 100;
            this.TS = 1.0;
            this.NY = 1;
            this.ND = this.NY * 365;
            this.S0 = 0.1;
            this.I0 = 1e-4;
            this.R0 = 1 - this.S0 - this.I0;
            this.rho = 0.5;
            this.rho_n = 5;
            this.rho_from = 40;
            this.rho_to = 60;
            this.v = 1 / (70 * 365.0);
            this.v_n = 5;
            this.v_from = 70;
            this.v_to = 80;
            this.mu = 1 / (70 * 365.0);
            this.mu_n = 5;
            this.mu_from = 70;
            this.mu_to = 180;
            this.beta = 520 / 365.0;
            this.beta_n = 5;
            this.beta_from = 0.9;
            this.beta_to = 1.1;
            this.gamma = 1 / 7.0;
            this.gamma_n = 5;
            this.gamma_from = 4;
            this.gamma_to = 6;
            this.sobol_n = 100;
            this.INPUT = [this.S0, this.I0, this.R0];
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.lines = [];
            this.parallel = [];
            this.all_ids = new Set();
            this.current_filter = new Set();
            this.SIR = function (t, INP) {
                var Y = [0, 0, 0];
                var V = INP;
                Y[0] = _this.v - _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - _this.mu * V[0];
                Y[1] = _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - (_this.gamma + _this.mu) * V[1] / (1 - _this.rho);
                Y[2] = _this.gamma * V[1] - _this.mu * V[2];
                return Y;
            };
        }
        Vspa.prototype.attached = function () {
            var _this = this;
            $("#rho").ionRangeSlider({
                min: 0,
                max: 100,
                from: 40,
                to: 60,
                step: 1,
                type: "double",
                postfix: "%",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.rho_from = data["from_pretty"];
                    _this.rho_to = data["to_pretty"];
                }
            });
            $("#v").ionRangeSlider({
                min: 10,
                max: 150,
                from: 70,
                to: 80,
                step: 1,
                type: "double",
                prefix: "1/",
                postfix: " per year",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.v_from = data["from_pretty"];
                    _this.v_to = data["to_pretty"];
                }
            });
            $("#mu").ionRangeSlider({
                min: 10,
                max: 150,
                from: 70,
                to: 80,
                step: 1,
                type: "double",
                prefix: "1/",
                postfix: " per year",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.mu_from = data["from_pretty"];
                    _this.mu_to = data["to_pretty"];
                }
            });
            $("#beta").ionRangeSlider({
                min: 0,
                max: 2,
                from: 0.9,
                to: 1.1,
                step: 0.1,
                type: "double",
                postfix: " per day",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.gamma_from = data["from_pretty"];
                    _this.gamma_to = data["to_pretty"];
                }
            });
            $("#gamma").ionRangeSlider({
                min: 1,
                max: 20,
                from: 4,
                to: 6,
                step: 1,
                type: "double",
                prefix: "1/",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.gamma_from = data["from_pretty"];
                    _this.gamma_to = data["to_pretty"];
                }
            });
        };
        Vspa.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop);
            this.updateInData(this.brushing_pop);
        };
        Vspa.prototype.brushing_susChanged = function () {
            this.updateOutData(this.brushing_sus);
            this.updateInData(this.brushing_sus);
        };
        Vspa.prototype.brushing_recChanged = function () {
            this.updateOutData(this.brushing_rec);
            this.updateInData(this.brushing_rec);
        };
        Vspa.prototype.brushing_infChanged = function () {
            this.updateOutData(this.brushing_inf);
            this.updateInData(this.brushing_inf);
        };
        Vspa.prototype.brushing_parallelChanged = function () {
            this.updateInData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        Vspa.prototype.redrawLinecharts = function () {
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
            this.redraw_inf = this.redraw_inf == 0 ? 1 : 0;
            this.redraw_rec = this.redraw_rec == 0 ? 1 : 0;
            this.redraw_sus = this.redraw_sus == 0 ? 1 : 0;
        };
        Vspa.prototype.updateOutData = function (ids) {
            for (var i = 0; i < this.data_lines.length; i++) {
                if (ids.length > 0) {
                    if (ids.includes(this.data_lines[i]["id"])) {
                        this.data_lines[i]["highlight"] = 1;
                    }
                    else {
                        this.data_lines[i]["highlight"] = 2;
                    }
                }
                else {
                    this.data_lines[i]["highlight"] = 1;
                }
            }
            this.redrawLinecharts();
        };
        Vspa.prototype.updateInData = function (ids) {
            for (var i = 0; i < this.data_length; i++) {
                if (ids.length > 0) {
                    if (ids.includes(this.data_parallel[i]["id"])) {
                        this.data_parallel[i]["highlight"] = 1;
                    }
                    else {
                        this.data_parallel[i]["highlight"] = 2;
                    }
                }
                else {
                    this.data_parallel[i]["highlight"] = 1;
                }
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Vspa.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        Vspa.prototype.vspa = function () {
            var _this = this;
            this.ND = this.NY * 365;
            this.R0 = 1 - this.S0 - this.I0;
            this.INPUT = [+this.S0, +this.I0, +this.R0];
            var params = this.get_params("sobol");
            var time_range = [];
            for (var i = 0; i < this.ND; i++) {
                time_range.push(i);
            }
            params.forEach(function (d, run) {
                _this.rho = d[0];
                _this.v = d[1];
                _this.mu = d[2];
                _this.beta = d[3];
                _this.gamma = d[4];
                var sol = numeric.dopri(0, _this.ND, _this.INPUT, _this.SIR, 1e-6, 5000);
                var out = sol.at(time_range);
                var temp = [];
                for (var i = 0; i < out.length; i++) {
                    temp.push({
                        "x": time_range[i],
                        "sus": out[i][0],
                        "inf": out[i][1],
                        "rec": out[i][2],
                        "pop": out[i][0] + out[i][1] + out[i][2]
                    });
                }
                _this.all_ids.add(run);
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "rho": _this.rho,
                        "v": _this.v,
                        "mu": _this.mu,
                        "beta": _this.beta,
                        "gamma": _this.gamma
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        Vspa.prototype.cartesian = function (arg) {
            var r = [];
            var max = arg.length - 1;
            function helper(arr, i) {
                for (var j = 0, l = arg[i].length; j < l; j++) {
                    var a = arr.slice(0);
                    a.push(arg[i][j]);
                    if (i == max)
                        r.push(a);
                    else
                        helper(a, i + 1);
                }
            }
            helper([], 0);
            return r;
        };
        Vspa.prototype.getRandom = function (n, min, max) {
            return Array.from({ length: n }, function () { return Math.random() * (max - min) + min; });
        };
        Vspa.prototype.getRandomInt = function (n, min, max) {
            return Array.from({ length: n }, function () { return Math.floor(Math.random() * (max - min + 1)) + min; });
        };
        Vspa.prototype.getParamsFromSobol = function (points) {
            var params = [];
            var rho_scale = d3.scaleLinear()
                .domain([0, 1])
                .range([this.rho_from, this.rho_to]);
            var v_scale = d3.scaleLinear()
                .domain([0, 1])
                .range([this.v_from, this.v_to]);
            var mu_scale = d3.scaleLinear()
                .domain([0, 1])
                .range([this.mu_from, this.mu_to]);
            var beta_scale = d3.scaleLinear()
                .domain([0, 1])
                .range([this.beta_from, this.beta_to]);
            var gamma_scale = d3.scaleLinear()
                .domain([0, 1])
                .range([this.gamma_from, this.gamma_to]);
            points.forEach(function (d) {
                params.push([
                    Math.round(rho_scale(d[0])) / 100,
                    1 / (Math.round(v_scale(d[1])) * 365),
                    1 / (Math.round(mu_scale(d[2])) * 365),
                    beta_scale(d[3]),
                    1 / Math.round(gamma_scale(d[4]))
                ]);
            });
            return params;
        };
        Vspa.prototype.get_params = function (sampling) {
            if (sampling == "rnd") {
                var rho = this.getRandom(this.rho_n, this.rho_from / 100, this.rho_to / 100);
                var v = this.getRandom(this.v_n, 1 / (this.v_from * 365), 1 / (this.v_to * 365));
                var mu = this.getRandom(this.mu_n, 1 / (this.mu_from * 365), 1 / (this.mu_to * 365));
                var beta = this.getRandom(this.beta_n, this.beta_from, this.beta_to);
                var gamma = this.getRandom(this.gamma_n, 1 / this.gamma_from, 1 / this.gamma_to);
                return this.cartesian([rho, v, mu, beta, gamma]);
            }
            if (sampling == "sobol") {
                var seq = lobos.Sobol(5);
                return this.getParamsFromSobol(seq.take(this.sobol_n));
            }
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Vspa.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Vspa.prototype, "brushing_sus", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Vspa.prototype, "brushing_inf", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Vspa.prototype, "brushing_rec", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Vspa.prototype, "brushing_parallel", void 0);
        Vspa = __decorate([
            aurelia_framework_1.autoinject
        ], Vspa);
        return Vspa;
    }());
    exports.Vspa = Vspa;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDMUQsQ0FBQztRQUNMLENBQUM7UUFyWFc7WUFBWCw4QkFBVTs7a0RBQWM7UUFDYjtZQUFYLDhCQUFVOztrREFBYztRQUNiO1lBQVgsOEJBQVU7O2tEQUFjO1FBQ2I7WUFBWCw4QkFBVTs7a0RBQWM7UUFNYjtZQUFYLDhCQUFVOzt1REFBbUI7UUFickIsSUFBSTtZQURoQiw4QkFBVTtXQUNFLElBQUksQ0EwWGhCO1FBQUQsV0FBQztLQTFYRCxBQTBYQyxJQUFBO0lBMVhZLG9CQUFJIiwiZmlsZSI6InZwc2EvdnBzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdCwgb2JzZXJ2YWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IFwiaW9uLXJhbmdlc2xpZGVyXCJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5cbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xuZGVjbGFyZSB2YXIgbnVtZXJpYzogYW55O1xuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBWc3BhIHtcbiAgICAvLyBWUFNBXG4gICAgcGFyYW0xID0gMTtcbiAgICBwYXJhbTIgPSAxO1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3BvcDtcbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19zdXM7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfaW5mO1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3JlYztcbiAgICByZWRyYXdfcG9wO1xuICAgIHJlZHJhd19zdXM7XG4gICAgcmVkcmF3X2luZjtcbiAgICByZWRyYXdfcmVjO1xuXG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcGFyYWxsZWw7XG4gICAgcmVkcmF3X3BhcmFsbGVsO1xuXG4gICAgdGVzdCA9IDEwMFxuXG4gICAgLy8gU0lSIE1vZGVsXG4gICAgVFMgPSAxLjBcbiAgICBOWSA9IDFcbiAgICBORCA9IHRoaXMuTlkqMzY1XG5cbiAgICBTMCA9IDAuMVxuICAgIEkwID0gMWUtNFxuICAgIFIwID0gMSAtIHRoaXMuUzAgLSB0aGlzLkkwXG5cbiAgICAvLyBNb3J0YWxpdHkgcHJvYmFiaWx0eSwgSSBkaWVzIGJlZm9yZSBuYXR1cmFsIGRlYXRoIG9yIHJlY292ZXJ5XG4gICAgcmhvID0gMC41XG4gICAgcmhvX24gPSA1O1xuICAgIHJob19mcm9tID0gNDA7XG4gICAgcmhvX3RvID0gNjA7XG4gICAgLy8gUGVyIGNhcHRpYSBkZWF0aCByYXRlICBmcm9tIG5hdHVyYWwgY2F1c2VzXG4gICAgdiA9IDEvKDcwKjM2NS4wKVxuICAgIHZfbiA9IDU7XG4gICAgdl9mcm9tID0gNzBcbiAgICB2X3RvID0gODBcbiAgICAvLyBQb3B1bGF0aW9uIGJpcnRoIHJhdGVcbiAgICBtdSA9IDEvKDcwKjM2NS4wKTtcbiAgICBtdV9uID0gNTtcbiAgICBtdV9mcm9tID0gNzA7XG4gICAgbXVfdG8gPSAxODA7XG4gICAgLy8gVHJhbnNtaXNzaW9uIHJhdGU6IEkgLT4gUy4gSW5jbHVkZXMgZW5jb3VudGVyIGFuZCB0cmFuc21pc3Npb24gcmF0ZVxuICAgIGJldGEgPSA1MjAvMzY1LjBcbiAgICBiZXRhX24gPSA1O1xuICAgIGJldGFfZnJvbSA9IDAuOVxuICAgIGJldGFfdG8gPSAxLjFcbiAgICAvLyBSZWNvdmVyeSByYXRlXG4gICAgZ2FtbWE9MS83LjBcbiAgICBnYW1tYV9uID0gNTtcbiAgICBnYW1tYV9mcm9tID0gNDtcbiAgICBnYW1tYV90byA9IDY7XG5cbiAgICAvLyBTb2JvbCBzYW1wbGluZ1xuICAgIHNvYm9sX24gPSAxMDBcblxuICAgIElOUFVUID0gW3RoaXMuUzAsIHRoaXMuSTAsIHRoaXMuUjBdXG5cbiAgICBkYXRhX3BhcmFsbGVsID0gPGFueVtdPiBbXVxuICAgIGRhdGFfbGluZXMgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lc19vcmlnaW5hbCA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xlbmd0aCA9IDA7XG5cbiAgICBsaW5lcyA9IDxhbnlbXT4gW11cbiAgICBwYXJhbGxlbCA9IDxhbnlbXT4gW11cblxuICAgIGFsbF9pZHMgPSBuZXcgU2V0KCk7XG4gICAgY3VycmVudF9maWx0ZXIgPSBuZXcgU2V0KCk7XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgLy8gQXR0YWNoaW5nIHJhbmdlIHNsaWRlcnNcbiAgICAgICAgJChcIiNyaG9cIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBmcm9tOiA0MCxcbiAgICAgICAgICAgIHRvOiA2MCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgcG9zdGZpeDogXCIlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJob19mcm9tID0gZGF0YVtcImZyb21fcHJldHR5XCJdXG4gICAgICAgICAgICB0aGlzLnJob190byA9IGRhdGFbXCJ0b19wcmV0dHlcIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI3ZcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgIG1heDogMTUwLFxuICAgICAgICAgICAgZnJvbTogNzAsXG4gICAgICAgICAgICB0bzogODAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdHlwZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIHByZWZpeDogXCIxL1wiLFxuICAgICAgICAgICAgcG9zdGZpeDogXCIgcGVyIHllYXJcIixcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgICBncmlkX251bTogMTAsXG4gICAgICAgICAgICBvbkZpbmlzaDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMudl9mcm9tID0gZGF0YVtcImZyb21fcHJldHR5XCJdXG4gICAgICAgICAgICB0aGlzLnZfdG8gPSBkYXRhW1widG9fcHJldHR5XCJdXG4gICAgICAgIH19KTtcbiAgICAgICAgJChcIiNtdVwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiAxNTAsXG4gICAgICAgICAgICBmcm9tOiA3MCxcbiAgICAgICAgICAgIHRvOiA4MCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICB0eXBlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgcHJlZml4OiBcIjEvXCIsXG4gICAgICAgICAgICBwb3N0Zml4OiBcIiBwZXIgeWVhclwiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tdV9mcm9tID0gZGF0YVtcImZyb21fcHJldHR5XCJdXG4gICAgICAgICAgICB0aGlzLm11X3RvID0gZGF0YVtcInRvX3ByZXR0eVwiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjYmV0YVwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICBmcm9tOiAwLjksXG4gICAgICAgICAgICB0bzogMS4xLFxuICAgICAgICAgICAgc3RlcDogMC4xLFxuICAgICAgICAgICAgdHlwZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIHBvc3RmaXg6IFwiIHBlciBkYXlcIixcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgICBncmlkX251bTogMTAsXG4gICAgICAgICAgICBvbkZpbmlzaDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtbWFfZnJvbSA9IGRhdGFbXCJmcm9tX3ByZXR0eVwiXVxuICAgICAgICAgICAgdGhpcy5nYW1tYV90byA9IGRhdGFbXCJ0b19wcmV0dHlcIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI2dhbW1hXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICBmcm9tOiA0LFxuICAgICAgICAgICAgdG86IDYsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdHlwZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIHByZWZpeDogXCIxL1wiLFxuICAgICAgICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyaWRfbnVtOiAxMCxcbiAgICAgICAgICAgIG9uRmluaXNoOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1tYV9mcm9tID0gZGF0YVtcImZyb21fcHJldHR5XCJdXG4gICAgICAgICAgICB0aGlzLmdhbW1hX3RvID0gZGF0YVtcInRvX3ByZXR0eVwiXVxuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfcG9wQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcG9wKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wb3ApO1xuICAgIH1cblxuICAgIGJydXNoaW5nX3N1c0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3N1cyk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5EYXRhKHRoaXMuYnJ1c2hpbmdfc3VzKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19yZWNDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19yZWMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3JlYyk7XG4gICAgfVxuXG4gICAgYnJ1c2hpbmdfaW5mQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPdXREYXRhKHRoaXMuYnJ1c2hpbmdfaW5mKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19pbmYpO1xuICAgIH1cblxuICAgIGJydXNoaW5nX3BhcmFsbGVsQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wYXJhbGxlbCk7XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0RGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICB9XG5cbiAgICByZWRyYXdMaW5lY2hhcnRzKCkge1xuICAgICAgICB0aGlzLnJlZHJhd19wb3AgPSB0aGlzLnJlZHJhd19wb3AgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19pbmYgPSB0aGlzLnJlZHJhd19pbmYgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19yZWMgPSB0aGlzLnJlZHJhd19yZWMgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19zdXMgPSB0aGlzLnJlZHJhd19zdXMgPT0gMCA/IDEgOiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3V0RGF0YShpZHMpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YV9saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZihpZHMuaW5jbHVkZXModGhpcy5kYXRhX2xpbmVzW2ldW1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lc1tpXVtcImhpZ2hsaWdodFwiXSA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lc1tpXVtcImhpZ2hsaWdodFwiXSA9IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfbGluZXNbaV1bXCJoaWdobGlnaHRcIl0gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd0xpbmVjaGFydHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUluRGF0YShpZHMpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YV9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZihpZHMuaW5jbHVkZXModGhpcy5kYXRhX3BhcmFsbGVsW2ldW1wiaWRcIl0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbFtpXVtcImhpZ2hsaWdodFwiXSA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbFtpXVtcImhpZ2hsaWdodFwiXSA9IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWxbaV1bXCJoaWdobGlnaHRcIl0gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlck91dERhdGEoaWRzKSB7XG4gICAgICAgIGlmKGlkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgaGlnaGxpZ2h0X2xpc3QgPSBuZXcgU2V0KGlkcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5wdXNoKC4uLnRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5maWx0ZXIoeCA9PiBoaWdobGlnaHRfbGlzdC5oYXMoeFtcImlkXCJdKSkpXG5cbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBmaWx0ZXJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9maWx0ZXIgPSBoaWdobGlnaHRfbGlzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2c3BhKCkge1xuICAgICAgICAvLyBVcGRhdGUgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuTkQgPSB0aGlzLk5ZKjM2NVxuICAgICAgICB0aGlzLlIwID0gMSAtIHRoaXMuUzAgLSB0aGlzLkkwXG4gICAgICAgIHRoaXMuSU5QVVQgPSBbK3RoaXMuUzAsICt0aGlzLkkwLCArdGhpcy5SMF1cblxuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRfcGFyYW1zKFwic29ib2xcIilcbiAgICAgICAgbGV0IHRpbWVfcmFuZ2UgPSA8YW55W10+IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk5EOyBpKyspIHtcbiAgICAgICAgICAgIHRpbWVfcmFuZ2UucHVzaChpKVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2goIChkLCBydW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMucmhvID0gZFswXTtcbiAgICAgICAgICAgIHRoaXMudiA9IGRbMV07XG4gICAgICAgICAgICB0aGlzLm11ID0gZFsyXTtcbiAgICAgICAgICAgIHRoaXMuYmV0YSA9IGRbM107XG4gICAgICAgICAgICB0aGlzLmdhbW1hID0gZFs0XTtcblxuICAgICAgICAgICAgbGV0IHNvbCA9IG51bWVyaWMuZG9wcmkoMCwgdGhpcy5ORCwgdGhpcy5JTlBVVCwgdGhpcy5TSVIsIDFlLTYsIDUwMDApO1xuXG4gICAgICAgICAgICBsZXQgb3V0ID0gc29sLmF0KHRpbWVfcmFuZ2UpXG5cbiAgICAgICAgICAgIGxldCB0ZW1wID0gPGFueVtdPiBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogdGltZV9yYW5nZVtpXSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdXNcIjogb3V0W2ldWzBdLFxuICAgICAgICAgICAgICAgICAgICBcImluZlwiOiBvdXRbaV1bMV0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVjXCI6IG91dFtpXVsyXSxcbiAgICAgICAgICAgICAgICAgICAgXCJwb3BcIjogb3V0W2ldWzBdICsgb3V0W2ldWzFdICsgb3V0W2ldWzJdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hbGxfaWRzLmFkZChydW4pXG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBydW4sXG4gICAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJob1wiOiB0aGlzLnJobyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidlwiOiB0aGlzLnYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11XCI6IHRoaXMubXUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJldGFcIjogdGhpcy5iZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1tYVwiOiB0aGlzLmdhbW1hXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBydW4sXG4gICAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB0ZW1wXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZGF0YV9sZW5ndGggPSB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwubGVuZ3RoO1xuICAgICAgICB0aGlzLmZpbHRlck91dERhdGEoW10pXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIFNJUiA9ICh0LCBJTlApID0+IHtcbiAgICBcdGxldCBZID0gWzAsIDAgLDBdXG4gICAgXHRsZXQgViA9IElOUFxuXG4gICAgICAgIFlbMF0gPSB0aGlzLnYgLSB0aGlzLmJldGEgKiBWWzBdICogVlsxXSAvIFYucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAtIHRoaXMubXUgKiBWWzBdXG4gICAgXHRZWzFdID0gdGhpcy5iZXRhICogVlswXSAqIFZbMV0gLyBWLnJlZHVjZSgoYSxiKSA9PiBhICsgYiwgMCkgLSAodGhpcy5nYW1tYSArIHRoaXMubXUpICogVlsxXS8oMS10aGlzLnJobylcbiAgICBcdFlbMl0gPSB0aGlzLmdhbW1hICogVlsxXSAtIHRoaXMubXUgKiBWWzJdXG5cbiAgICBcdHJldHVybiBZXG4gICAgfVxuXG4gICAgY2FydGVzaWFuKGFyZykge1xuICAgICAgICBsZXQgciA9IDxhbnlbXT4gW107XG4gICAgICAgIC8vIGxldCBhcmcgPSBhcmd1bWVudHM7XG4gICAgICAgIGxldCBtYXggPSBhcmcubGVuZ3RoLTE7XG5cbiAgICAgICAgZnVuY3Rpb24gaGVscGVyKGFyciwgaSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaj0wLCBsPWFyZ1tpXS5sZW5ndGg7IGo8bDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhcnIuc2xpY2UoMCk7IC8vIGNsb25lIGFyclxuICAgICAgICAgICAgICAgIGEucHVzaChhcmdbaV1bal0pO1xuICAgICAgICAgICAgICAgIGlmIChpPT1tYXgpXG4gICAgICAgICAgICAgICAgICAgIHIucHVzaChhKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlcihhLCBpKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhlbHBlcihbXSwgMCk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGdldFJhbmRvbShuLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBufSwgKCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobiwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogbn0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4pO1xuICAgIH1cblxuICAgIGdldFBhcmFtc0Zyb21Tb2JvbChwb2ludHMpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IDxhbnk+W107XG5cbiAgICAgICAgbGV0IHJob19zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAuZG9tYWluKFswLCAxXSlcbiAgICAgICAgICAucmFuZ2UoW3RoaXMucmhvX2Zyb20sIHRoaXMucmhvX3RvXSk7XG4gICAgICAgIGxldCB2X3NjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgICAgIC5yYW5nZShbdGhpcy52X2Zyb20sIHRoaXMudl90b10pO1xuICAgICAgICBsZXQgbXVfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAgICAgLnJhbmdlKFt0aGlzLm11X2Zyb20sIHRoaXMubXVfdG9dKTtcbiAgICAgICAgbGV0IGJldGFfc2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAgICAgLnJhbmdlKFt0aGlzLmJldGFfZnJvbSwgdGhpcy5iZXRhX3RvXSk7XG4gICAgICAgIGxldCBnYW1tYV9zY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAuZG9tYWluKFswLCAxXSlcbiAgICAgICAgICAucmFuZ2UoW3RoaXMuZ2FtbWFfZnJvbSwgdGhpcy5nYW1tYV90b10pO1xuXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKCBkID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKFtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHJob19zY2FsZShkWzBdKSkvMTAwLFxuICAgICAgICAgICAgICAgIDEvKE1hdGgucm91bmQodl9zY2FsZShkWzFdKSkqMzY1KSxcbiAgICAgICAgICAgICAgICAxLyhNYXRoLnJvdW5kKG11X3NjYWxlKGRbMl0pKSozNjUpLFxuICAgICAgICAgICAgICAgIGJldGFfc2NhbGUoZFszXSksXG4gICAgICAgICAgICAgICAgMS9NYXRoLnJvdW5kKGdhbW1hX3NjYWxlKGRbNF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcGFyYW1zXG4gICAgfVxuXG4gICAgZ2V0X3BhcmFtcyhzYW1wbGluZykge1xuICAgICAgICBpZihzYW1wbGluZyA9PSBcInJuZFwiKSB7XG4gICAgICAgICAgICBsZXQgcmhvID0gdGhpcy5nZXRSYW5kb20odGhpcy5yaG9fbiwgdGhpcy5yaG9fZnJvbS8xMDAsIHRoaXMucmhvX3RvLzEwMClcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5nZXRSYW5kb20odGhpcy52X24sIDEvKHRoaXMudl9mcm9tKjM2NSksIDEvKHRoaXMudl90byozNjUpKVxuICAgICAgICAgICAgbGV0IG11ID0gdGhpcy5nZXRSYW5kb20odGhpcy5tdV9uLCAxLyh0aGlzLm11X2Zyb20qMzY1KSwgMS8odGhpcy5tdV90byozNjUpKVxuICAgICAgICAgICAgbGV0IGJldGEgPSB0aGlzLmdldFJhbmRvbSh0aGlzLmJldGFfbiwgdGhpcy5iZXRhX2Zyb20sIHRoaXMuYmV0YV90bylcbiAgICAgICAgICAgIGxldCBnYW1tYSA9IHRoaXMuZ2V0UmFuZG9tKHRoaXMuZ2FtbWFfbiwgMS90aGlzLmdhbW1hX2Zyb20sIDEvdGhpcy5nYW1tYV90bylcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FydGVzaWFuKFtyaG8sIHYsIG11LCBiZXRhLCBnYW1tYV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2FtcGxpbmcgPT0gXCJzb2JvbFwiKSB7XG4gICAgICAgICAgICBsZXQgc2VxID0gbG9ib3MuU29ib2woNSlcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1zRnJvbVNvYm9sKHNlcS50YWtlKHRoaXMuc29ib2xfbikpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('spatial_migration/migration',["require", "exports", "aurelia-framework", "../models/spatial-migration", "ion-rangeslider"], function (require, exports, aurelia_framework_1, spatial_migration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Migration = (function () {
        function Migration() {
            this.inFilter = [];
            this.outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);
            this.grid_selected = 100;
            this.mating_selected = 1;
            this.data_grid = [];
            this.data_FScore = [];
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_grid = false;
            this.collapsed_out = true;
        }
        Migration.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_grid = this.collapsed_grid == true ? false : true;
            this.collapsed_out = this.collapsed_out == true ? false : true;
        };
        Migration.prototype.attached = function () {
            var _this = this;
            $("#mating").ionRangeSlider({
                min: 1,
                max: 100,
                from: 1,
                step: 1,
                type: "single",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.mating_selected = data["from"];
                }
            });
            $("#grid_length").ionRangeSlider({
                min: 10,
                max: 1000,
                from: 100,
                step: 1,
                type: "single",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.redrawGrid();
                    _this.grid_selected = data["from"];
                }
            });
        };
        Migration.prototype.redrawGrid = function () {
            this.redraw = this.redraw == 0 ? 1 : 0;
        };
        Migration.prototype.stopSimulation = function () {
            clearTimeout(this.timeout);
        };
        Migration.prototype.compute = function () {
            var _this = this;
            this.collapsed_input = true;
            this.collapsed_out = false;
            this.collapsed_grid = false;
            var spatial = new spatial_migration_1.SpatialMigration(this.mating_selected, this.grid_selected);
            spatial.init_simulation(this.data_grid);
            this.timeout = setInterval(function () { spatial.run_simulation(_this.data_grid, _this.data_FScore); }, 200);
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Migration.prototype, "brushing_p", void 0);
        Migration = __decorate([
            aurelia_framework_1.autoinject
        ], Migration);
        return Migration;
    }());
    exports.Migration = Migration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXRpYWxfbWlncmF0aW9uL21pZ3JhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQURBO1lBS0ksYUFBUSxHQUFHLEVBQUUsQ0FBQTtZQUNiLGtCQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUdoRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQztZQUNwQixvQkFBZSxHQUFHLENBQUMsQ0FBQztZQUVwQixjQUFTLEdBQVcsRUFBRSxDQUFBO1lBQ3RCLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1lBRXhCLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUUzQixvQkFBZSxHQUFHLEtBQUssQ0FBQztZQUN4QixtQkFBYyxHQUFHLEtBQUssQ0FBQztZQUN2QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQTRMekIsQ0FBQztRQXhMRywwQkFBTSxHQUFOO1lBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakUsQ0FBQztRQUVELDRCQUFRLEdBQVI7WUFBQSxpQkF5QkM7WUF2QkcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztnQkFDeEIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLFVBQUMsSUFBSTtvQkFDYixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDekMsQ0FBQzthQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRSxVQUFDLElBQUk7b0JBQ2IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO29CQUNqQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQzthQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFpQkQsOEJBQVUsR0FBVjtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBbUZELGtDQUFjLEdBQWQ7WUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCwyQkFBTyxHQUFQO1lBQUEsaUJBOENHO1lBN0NDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBRzVCLElBQUksT0FBTyxHQUFHLElBQUksb0NBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFFNUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUUsY0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBb0NwRyxDQUFDO1FBNU1TO1lBQVgsOEJBQVU7O3FEQUFZO1FBRGQsU0FBUztZQURyQiw4QkFBVTtXQUNFLFNBQVMsQ0E4TXJCO1FBQUQsZ0JBQUM7S0E5TUQsQUE4TUMsSUFBQTtJQTlNWSw4QkFBUyIsImZpbGUiOiJzcGF0aWFsX21pZ3JhdGlvbi9taWdyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge0dlbmV0aWN9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXRpY1wiXG5pbXBvcnQge1NwYXRpYWxNaWdyYXRpb259IGZyb20gXCIuLi9tb2RlbHMvc3BhdGlhbC1taWdyYXRpb25cIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBNaWdyYXRpb24ge1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3A7XG4gICAgcmVkcmF3O1xuXG4gICAgaW5GaWx0ZXIgPSBbXVxuICAgIG91dEZpbHRlckxpc3QgPSBuZXcgTWFwKFtbXCJwXCIsIG5ldyBNYXAoKV0sIFtcInBvcFwiLCBuZXcgTWFwKCldXSk7XG5cbiAgICAvLyBQb3B1bGF0aW9uIGNvdW50XG4gICAgZ3JpZF9zZWxlY3RlZCA9IDEwMDtcbiAgICBtYXRpbmdfc2VsZWN0ZWQgPSAxO1xuXG4gICAgZGF0YV9ncmlkID0gPGFueVtdPiBbXVxuICAgIGRhdGFfRlNjb3JlID0gPGFueVtdPiBbXVxuXG4gICAgY3VycmVudF9maWx0ZXIgPSBuZXcgU2V0KCk7XG5cbiAgICBjb2xsYXBzZWRfaW5wdXQgPSBmYWxzZTtcbiAgICBjb2xsYXBzZWRfZ3JpZCA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZF9vdXQgPSB0cnVlO1xuXG4gICAgdGltZW91dDtcblxuICAgIHN3aXRjaCgpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkX2lucHV0ID0gdGhpcy5jb2xsYXBzZWRfaW5wdXQgPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIHRoaXMuY29sbGFwc2VkX2dyaWQgPSB0aGlzLmNvbGxhcHNlZF9ncmlkID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICB0aGlzLmNvbGxhcHNlZF9vdXQgPSB0aGlzLmNvbGxhcHNlZF9vdXQgPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgLy8gQXR0YWNoaW5nIHJhbmdlIHNsaWRlcnNcbiAgICAgICAgJChcIiNtYXRpbmdcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwic2luZ2xlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWF0aW5nX3NlbGVjdGVkID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgfX0pO1xuICAgICAgICAkKFwiI2dyaWRfbGVuZ3RoXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICBtYXg6IDEwMDAsXG4gICAgICAgICAgICBmcm9tOiAxMDAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdHlwZTogXCJzaW5nbGVcIixcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgICBncmlkX251bTogMTAsXG4gICAgICAgICAgICBvbkZpbmlzaDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZWRyYXdHcmlkKClcbiAgICAgICAgICAgICAgdGhpcy5ncmlkX3NlbGVjdGVkID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgfX0pO1xuICAgIH1cblxuICAgIC8vIGJydXNoaW5nX3BDaGFuZ2VkKCkge1xuICAgIC8vICAgICB0aGlzLnVwZGF0ZU91dERhdGEodGhpcy5icnVzaGluZ19wLCBcInBcIik7XG4gICAgLy8gICAgIHRoaXMudXBkYXRlSW5EYXRhKHRoaXMuYnJ1c2hpbmdfcCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gYnJ1c2hpbmdfcG9wQ2hhbmdlZCgpIHtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcG9wLCBcInBvcFwiKTtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVJbkRhdGEodGhpcy5icnVzaGluZ19wb3ApO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGJydXNoaW5nX3BhcmFsbGVsQ2hhbmdlZCgpIHtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVQYXJhbGxlbERhdGEodGhpcy5icnVzaGluZ19wYXJhbGxlbCk7XG4gICAgLy8gICAgIHRoaXMuZmlsdGVyT3V0RGF0YSh0aGlzLmJydXNoaW5nX3BhcmFsbGVsKTtcbiAgICAvLyB9XG5cbiAgICByZWRyYXdHcmlkKCkge1xuICAgICAgICB0aGlzLnJlZHJhdyA9IHRoaXMucmVkcmF3ID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIHVwZGF0ZU91dERhdGEobWFwcGluZywgYXR0cmlidXRlKSB7XG4gICAgLy8gICBsZXQgYXZlcmFnZSA9IG5ldyBNYXAoKTtcbiAgICAvL1xuICAgIC8vICAgLy8gU2V0IGN1cnJlbnQgZmlsdGVyXG4gICAgLy8gICB0aGlzLm91dEZpbHRlckxpc3Quc2V0KGF0dHJpYnV0ZSwgbWFwcGluZyk7XG4gICAgLy9cbiAgICAvLyAgIC8vIFVwZGF0ZSBhdmVyYWdlIGZpbHRlclxuICAgIC8vICAgbWFwcGluZy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgLy8gICAgIGxldCB0ZW1wID0gMDtcbiAgICAvL1xuICAgIC8vICAgICB0aGlzLm91dEZpbHRlckxpc3QuZm9yRWFjaCgoaXYsIGlrKSA9PiB7XG4gICAgLy8gICAgICAgaWYoaXYuc2l6ZSA+IDApIHRlbXAgID0gdGVtcCArIGl2LmdldChrKTtcbiAgICAvLyAgICAgfSlcbiAgICAvL1xuICAgIC8vICAgICB0ZW1wID0gdGVtcC90aGlzLm91dEZpbHRlckxpc3Quc2l6ZTtcbiAgICAvL1xuICAgIC8vICAgICBhdmVyYWdlLnNldChrLCB0ZW1wKVxuICAgIC8vICAgfSlcblxuICAgICAgLy8gU2V0IGxpbmUgaGlnaGxpZ2h0XG4gICAgICAvLyB0aGlzLmRhdGFfbGluZXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgIC8vICAgeFtcImhpZ2hsaWdodFwiXSA9IGF2ZXJhZ2UuZ2V0KHhbXCJpZFwiXSlcbiAgICAgIC8vIH0pXG5cbiAgICAvLyBwcml2YXRlIHVwZGF0ZUluRGF0YShtYXBwaW5nKSB7XG4gICAgLy8gICBpZih0aGlzLmluRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgLy8gICAgICAgLmZpbHRlcih4ID0+IHRoaXMuaW5GaWx0ZXIuaW5jbHVkZXMoeFtcImlkXCJdKSlcbiAgICAvLyAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAvLyAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmRhdGFfcGFyYWxsZWxcbiAgICAvLyAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAvLyAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIHVwZGF0ZVBhcmFsbGVsRGF0YShpZHMpIHtcbiAgICAvLyAgICAgdGhpcy5pbkZpbHRlciA9IGlkcztcbiAgICAvL1xuICAgIC8vICAgICBpZihpZHMubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5mb3JFYWNoKHggPT4ge1xuICAgIC8vICAgICAgICAgaWYoaWRzLmluY2x1ZGVzKHhbXCJpZFwiXSkpIHtcbiAgICAvLyAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDE7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDA7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAvLyAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIGZpbHRlck91dERhdGEoaWRzKSB7XG4gICAgLy8gICAgIGlmKGlkcy5sZW5ndGggPiAxKSB7XG4gICAgLy8gICAgICAgICBsZXQgaGlnaGxpZ2h0X2xpc3QgPSBuZXcgU2V0KGlkcyk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5wdXNoKC4uLnRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5maWx0ZXIoeCA9PiBoaWdobGlnaHRfbGlzdC5oYXMoeFtcImlkXCJdKSkpXG4gICAgLy9cbiAgICAvLyAgICAgICAgIC8vIFNhdmUgY3VycmVudCBmaWx0ZXJcbiAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudF9maWx0ZXIgPSBoaWdobGlnaHRfbGlzdDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgLy8gICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzdG9wU2ltdWxhdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGNvbXB1dGUoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkX2lucHV0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRfb3V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkX2dyaWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIFNwYXRpYWwgTWlncmF0aW9uIFNpbXVsYXRpb25cbiAgICAgICAgbGV0IHNwYXRpYWwgPSBuZXcgU3BhdGlhbE1pZ3JhdGlvbih0aGlzLm1hdGluZ19zZWxlY3RlZCwgdGhpcy5ncmlkX3NlbGVjdGVkKVxuXG4gICAgICAgIHNwYXRpYWwuaW5pdF9zaW11bGF0aW9uKHRoaXMuZGF0YV9ncmlkKVxuXG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldEludGVydmFsKCAoKSA9PiB7c3BhdGlhbC5ydW5fc2ltdWxhdGlvbih0aGlzLmRhdGFfZ3JpZCwgdGhpcy5kYXRhX0ZTY29yZSl9LCAyMDApXG5cbiAgICAgICAgLy8gQ3JlYXRlIG1vZGVsIHBhcmFtc1xuICAgICAgICAvLyBsZXQgZ2VuID0gbmV3IEdlbmV0aWMoW3RoaXMuZXZlbnRfZnJvbSwgdGhpcy5ldmVudF90b10sW3RoaXMucG9wX2Zyb20sIHRoaXMucG9wX3RvXSwgW3RoaXMubGVmdG92ZXJfZnJvbSwgdGhpcy5sZWZ0b3Zlcl90b10sIHRoaXMuZ2VuZXJhdGlvbnMsIHRoaXMuc2ltdWxhdGlvbnMpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCBtb2RlbCA9IGdlbi5jb21wdXRlX21vZGVsKClcblxuICAgICAgICAvLyBtb2RlbC5mb3JFYWNoKCAoc29sLCBydW4pID0+IHtcbiAgICAgICAgLy8gICBsZXQgdGVtcCA9IDxhbnlbXT4gW11cbiAgICAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAvLyAgICAgICAgICAgXCJ4XCI6IGdlbi50aW1lX3JhbmdlW2ldLFxuICAgICAgICAvLyAgICAgICAgICAgXCJwXCI6IHNvbFtpXS5wLFxuICAgICAgICAvLyAgICAgICAgICAgXCJwb3BcIjogc29sW2ldLnBvcFxuICAgICAgICAvLyAgICAgICB9KVxuICAgICAgICAvLyAgIH1cblxuICAgICAgICAvLyAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgLy8gICAgICAgICAgIFwiaWRcIjogcnVuLFxuICAgICAgICAvLyAgICAgICAgICAgXCJoaWdobGlnaHRcIjogMCxcbiAgICAgICAgLy8gICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgXCJwb3BcIjogZ2VuLnBhcmFtc1tydW5dWzBdLFxuICAgICAgICAvLyAgICAgICAgICAgICAgIFwiUChldmVudClcIjogZ2VuLnBhcmFtc1tydW5dWzFdLFxuICAgICAgICAvLyAgICAgICAgICAgICAgIFwiUmVtYWluaW5nXCI6IGdlbi5wYXJhbXNbcnVuXVsyXVxuICAgICAgICAvLyAgICAgICAgICAgfVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgdGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLnB1c2goe1xuICAgICAgICAvLyAgICAgICAgICAgXCJpZFwiOiBydW4sXG4gICAgICAgIC8vICAgICAgICAgICBcImhpZ2hsaWdodFwiOiAwLFxuICAgICAgICAvLyAgICAgICAgICAgXCJkYXRhXCI6IHRlbXBcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyB9KVxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLmRhdGFfbGVuZ3RoID0gdGhpcy5kYXRhX2xpbmVzX29yaWdpbmFsLmxlbmd0aDtcbiAgICAgICAgLy8gdGhpcy5maWx0ZXJPdXREYXRhKFtdKVxuICAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/spatial-migration',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialMigration = (function () {
        function SpatialMigration(max_mating_distance, grid_length) {
            this.max_mating_distance = max_mating_distance;
            this.grid_length = grid_length;
            this.params = [];
            this.time_range = [];
            this.p = 0.5;
            this.simulation_counter = 0;
        }
        SpatialMigration.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialMigration.prototype.init_simulation = function (grid) {
            grid.length = 0;
            this.simulation_counter = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var random_number = Math.random();
                    if (random_number < this.p * this.p) {
                        temp[j] = "A1A1";
                    }
                    else if (random_number > 1 - (1 - this.p) * (1 - this.p)) {
                        temp[j] = "A2A2";
                    }
                    else {
                        temp[j] = "A1A2";
                    }
                }
                grid.push(temp);
            }
        };
        SpatialMigration.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialMigration.prototype.pick_mating_partner = function (grid, i, j) {
            var mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
            var mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);
            mating_i = this.get_bounded_index(mating_i);
            mating_j = this.get_bounded_index(mating_j);
            return grid[mating_i][mating_j];
        };
        SpatialMigration.prototype.get_offspring = function (parent1, parent2) {
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
                else if (random_number > 0.75) {
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
        };
        SpatialMigration.prototype.compute_FScore = function (grid) {
            var A1A1 = 0;
            var A1A2 = 0;
            var A2A2 = 0;
            for (var i = 0; i < this.grid_length; i = i + 1) {
                for (var ii = 0; ii < this.grid_length; ii = ii + 1) {
                    if (grid[i][ii] == "A1A1") {
                        A1A1 = A1A1 + 1;
                    }
                    else if (grid[i][ii] == "A1A2") {
                        A1A2 = A1A2 + 1;
                    }
                    else {
                        A2A2 = A2A2 + 1;
                    }
                }
            }
            var N = A1A1 + A1A2 + A2A2;
            var h_o = A1A2 / N;
            var p = ((2 * A1A1) + A1A2) / (2 * N);
            var h_e = 2 * p * (1 - p);
            var F = (h_e - h_o) / h_e;
            return F;
        };
        SpatialMigration.prototype.run_simulation = function (grid, data_lines) {
            var temp_grid = [];
            for (var i = 0; i < this.grid_length; i++) {
                temp_grid[i] = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var mating_partner = this.pick_mating_partner(grid, i, j);
                    temp_grid[i][j] = this.get_offspring(grid[i][j], mating_partner);
                }
            }
            grid.length = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = temp_grid[i][j];
                }
                grid.push(temp);
            }
            data_lines.push({ x: this.simulation_counter++, F: this.compute_FScore(grid) });
        };
        SpatialMigration = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialMigration);
        return SpatialMigration;
    }());
    exports.SpatialMigration = SpatialMigration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcGF0aWFsLW1pZ3JhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQTtRQU9FLDBCQUFvQixtQkFBbUIsRUFBVSxXQUFXO1lBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBQTtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFBO1lBTjVELFdBQU0sR0FBRyxFQUFFLENBQUM7WUFDWixlQUFVLEdBQUcsRUFBRSxDQUFDO1lBRWhCLE1BQUMsR0FBRyxHQUFHLENBQUM7WUFDUix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFHdkIsQ0FBQztRQUVELHlDQUFjLEdBQWQsVUFBZSxHQUFHLEVBQUUsR0FBRztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUM7UUFFRCwwQ0FBZSxHQUFmLFVBQWdCLElBQUk7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztZQUU1QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO2dCQUViLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUMxQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRWxDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENB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QyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUM7WUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQTtRQUMvRSxDQUFDO1FBOUpVLGdCQUFnQjtZQUQ1Qiw4QkFBVTs7V0FDRSxnQkFBZ0IsQ0ErSjVCO1FBQUQsdUJBQUM7S0EvSkQsQUErSkMsSUFBQTtJQS9KWSw0Q0FBZ0IiLCJmaWxlIjoibW9kZWxzL3NwYXRpYWwtbWlncmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U2FtcGxpbmd9IGZyb20gXCIuLi9oZWxwZXIvc2FtcGxpbmdcIlxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxyXG5cclxuLy8gVGhpcyBtYWdpYyBsaW5lIHJlbW92ZWQgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciBudW1lcmljXHJcbmRlY2xhcmUgdmFyIGxvYm9zOiBhbnk7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgU3BhdGlhbE1pZ3JhdGlvbiB7XHJcbiAgcGFyYW1zID0gW107XHJcbiAgdGltZV9yYW5nZSA9IFtdO1xyXG5cclxuICBwID0gMC41O1xyXG4gIHNpbXVsYXRpb25fY291bnRlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF4X21hdGluZ19kaXN0YW5jZSwgcHJpdmF0ZSBncmlkX2xlbmd0aCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0X3JhbmRvbV9pbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxuXHJcbiAgaW5pdF9zaW11bGF0aW9uKGdyaWQpIHtcclxuICAgIGdyaWQubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuc2ltdWxhdGlvbl9jb3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuXHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5ncmlkX2xlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbV9udW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICBpZiAocmFuZG9tX251bWJlciA8IHRoaXMucCp0aGlzLnApIHtcclxuICAgICAgICAgICAgdGVtcFtqXSA9IFwiQTFBMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb21fbnVtYmVyID4gMSAtICgxLXRoaXMucCkgKiAoMS10aGlzLnApKSB7XHJcbiAgICAgICAgICAgIHRlbXBbal0gPSBcIkEyQTJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBbal0gPSBcIkExQTJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdyaWQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0X2JvdW5kZWRfaW5kZXgoaW5kZXgpIHtcclxuICAgIGxldCBib3VuZGVkX2luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCArIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZihpbmRleCA+PSB0aGlzLmdyaWRfbGVuZ3RoKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCAtIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvdW5kZWRfaW5kZXhcclxuICB9XHJcblxyXG4gIHBpY2tfbWF0aW5nX3BhcnRuZXIoZ3JpZCwgaSwgaikge1xyXG4gICAgbGV0IG1hdGluZ19pID0gdGhpcy5nZXRfcmFuZG9tX2ludChpIC0gdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlLCBpICsgdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlKTtcclxuICAgIGxldCBtYXRpbmdfaiA9IHRoaXMuZ2V0X3JhbmRvbV9pbnQoaiAtIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSwgaiArIHRoaXMubWF4X21hdGluZ19kaXN0YW5jZSk7XHJcblxyXG4gICAgbWF0aW5nX2kgPSB0aGlzLmdldF9ib3VuZGVkX2luZGV4KG1hdGluZ19pKTtcclxuICAgIG1hdGluZ19qID0gdGhpcy5nZXRfYm91bmRlZF9pbmRleChtYXRpbmdfaik7XHJcblxyXG4gICAgcmV0dXJuIGdyaWRbbWF0aW5nX2ldW21hdGluZ19qXVxyXG4gIH1cclxuXHJcbiAgZ2V0X29mZnNwcmluZyhwYXJlbnQxLCBwYXJlbnQyKSB7XHJcbiAgICAgIHZhciBwMSA9IHBhcmVudDE7XHJcbiAgICAgIHZhciBwMiA9IHBhcmVudDI7XHJcbiAgICAgIGlmIChwMSA9PSBcIkExQTFcIiAmJiBwMiA9PSBcIkExQTFcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQTFBMVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChwMSA9PSBcIkExQTFcIiAmJiBwMiA9PSBcIkExQTJcIikgfHwgKHAxID09IFwiQTFBMlwiICYmIHAyID09IFwiQTFBMVwiKSkge1xyXG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUExXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHAxID09IFwiQTFBMVwiICYmIHAyID09IFwiQTJBMlwiKSB8fCAocDEgPT0gXCJBMkEyXCIgJiYgcDIgPT0gXCJBMUExXCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocDEgPT0gXCJBMUEyXCIgJiYgcDIgPT0gXCJBMUEyXCIpIHtcclxuICAgICAgICAgIHZhciByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgIGlmIChyYW5kb21fbnVtYmVyIDwgMC4yNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHJhbmRvbV9udW1iZXIgPiAwLjc1KXtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMkEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJBMUEyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHAxID09IFwiQTFBMlwiICYmIHAyID09IFwiQTJBMlwiKSB8fCAocDEgPT0gXCJBMkEyXCIgJiYgcDIgPT0gXCJBMUEyXCIpKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkEyQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwMSA9PSBcIkEyQTJcIiAmJiBwMiA9PSBcIkEyQTJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwiQTJBMlwiO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNvbXB1dGVfRlNjb3JlKGdyaWQpIHtcclxuICAgICBsZXQgQTFBMSA9IDA7XHJcbiAgICAgbGV0IEExQTIgPSAwO1xyXG4gICAgIGxldCBBMkEyID0gMDtcclxuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaWkgPSBpaSArIDEpIHtcclxuICAgICAgICAgICAgIGlmIChncmlkW2ldW2lpXSA9PSBcIkExQTFcIikge1xyXG4gICAgICAgICAgICAgICAgIEExQTEgPSBBMUExICsgMTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGVsc2UgaWYgKGdyaWRbaV1baWldID09IFwiQTFBMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgQTFBMiA9IEExQTIgKyAxO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgQTJBMiA9IEEyQTIgKyAxO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBsZXQgTiA9IEExQTEgKyBBMUEyICsgQTJBMjtcclxuICAgICBsZXQgaF9vID0gQTFBMiAvIE47XHJcbiAgICAgbGV0IHAgPSAoKDIgKiBBMUExKSArIEExQTIpIC8gKDIgKiBOKTtcclxuICAgICBsZXQgaF9lID0gMiAqIHAgKiAoMS1wKTtcclxuICAgICBsZXQgRiA9IChoX2UgLSBoX28pIC8gaF9lO1xyXG5cclxuXHJcbiAgICAgcmV0dXJuIEY7XHJcbiAgfVxyXG5cclxuICBydW5fc2ltdWxhdGlvbihncmlkLCBkYXRhX2xpbmVzKSB7XHJcbiAgICBsZXQgdGVtcF9ncmlkID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZW1wX2dyaWRbaV0gPSBbXTtcclxuXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvLyBTZWxlY3QgbWF0aW5nIHBhcnRuZXJcclxuICAgICAgICBsZXQgbWF0aW5nX3BhcnRuZXIgPSB0aGlzLnBpY2tfbWF0aW5nX3BhcnRuZXIoZ3JpZCxpLCBqKTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIG9mZnNwcmluZyBnZW5vdHlwZVxyXG4gICAgICAgIHRlbXBfZ3JpZFtpXVtqXSA9IHRoaXMuZ2V0X29mZnNwcmluZyhncmlkW2ldW2pdLCBtYXRpbmdfcGFydG5lcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmlkLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZF9sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcCA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB0ZW1wW2pdID0gdGVtcF9ncmlkW2ldW2pdXHJcbiAgICAgIH1cclxuICAgICAgZ3JpZC5wdXNoKHRlbXApXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YV9saW5lcy5wdXNoKHt4OiB0aGlzLnNpbXVsYXRpb25fY291bnRlcisrLCBGOiB0aGlzLmNvbXB1dGVfRlNjb3JlKGdyaWQpfSlcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-gauss0',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartGauss = (function () {
        function LineChartGauss(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.lc_width = 50;
            this.lc_height = 500;
            this.focus_width = 50;
            this.focus_height = 500;
            this.focus_offset = 100;
            this.element = element;
        }
        LineChartGauss.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.lc_width = this.width * 0.8;
            this.focus_width = this.width * 0.2 - this.margin.left;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.lc_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_height = this.y_size - this.margin.top - this.margin.bottom;
            this.focus_offset = this.lc_width + this.margin.middle + this.margin.left;
            this.initChart();
        };
        LineChartGauss.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
                this.focus.selectAll("path.focusline").remove();
            }
            else {
                this.svg.selectAll(".line").remove();
                this.focus.selectAll(".bar").remove();
                this.focus.selectAll("path.focusline").remove();
            }
        };
        LineChartGauss.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        LineChartGauss.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartGauss.prototype.getGaussian = function () {
            var data = [];
            var rnd = d3.randomUniform(-3, 3);
            for (var i = 0; i < 5000; i++) {
                var q = rnd();
                var p = this.gaussian(q, this.gauss_y.invert(this.center), this.gauss_sigma(this.weight));
                var el = {
                    "y": q,
                    "x": p
                };
                data.push(el);
            }
            ;
            this.gradientColor.domain([0, d3.max(data, function (x) { return x["x"]; })]);
            data.sort(function (a, b) { return (a.y > b.y) ? 1 : ((b.y > a.y) ? -1 : 0); });
            return data;
        };
        ;
        LineChartGauss.prototype.gaussian = function (x, mean, sigma) {
            var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
            x = (x - mean) / sigma;
            var g = gaussianConstant * Math.exp(-.5 * x * x) / sigma;
            if (g < 0.001)
                g = 0;
            return g;
        };
        LineChartGauss.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.lc_width)
                .attr("height", this.lc_height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", " + this.margin.top + ")");
            this.focus
                .append("rect")
                .attr("width", this.focus_width)
                .attr("height", this.focus_height)
                .style("opacity", 0)
                .on("mousedown", function (d) {
                var out = new Map();
                self.center = self.y.invert(d3.mouse(this)[1]);
                self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                self.updateGauss();
                self.mouse_event = d3.select(this)
                    .on("mousemove", function (d) {
                    var out = new Map();
                    self.center = self.y.invert(d3.mouse(this)[1]);
                    self.weight = self.focus_x.invert(d3.mouse(this)[0]);
                    self.updateGauss();
                    self.data.forEach(function (d) {
                        out.set(d["id"], self.gradientColor(self.gaussian(self.gauss_y.invert(d.data[d.data.length - 1][self.y_attribute]), self.gauss_y.invert(self.center), self.gauss_sigma(self.weight))));
                    });
                    self.brushing = out;
                    self.updateHighlight();
                })
                    .on("mouseup", function (d) {
                    self.mouse_event.on("mousemove", null).on("mouseup", null);
                });
            })
                .moveToFront();
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.gauss_x = d3.scaleLinear();
            this.gauss_y = d3.scaleLinear()
                .domain([-3, 3]);
            this.gauss_sigma = d3.scaleLinear()
                .range([0.1, 5])
                .domain([2, this.focus_width]);
            this.gradientColor = d3.scaleLinear()
                .range([0, 1]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.focus.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("day");
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(this.y_label);
            this.focus.append("g")
                .attr("transform", "translate(" + this.focus_width + ", 0)")
                .attr("class", "yAxis");
            this.focus.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .attr("x", this.focus_width)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            this.focusline = d3.line()
                .x(function (d) { return _this.focus_x(_this.gauss_x(d["x"])); })
                .y(function (d) { return _this.y(_this.gauss_y(d["y"])); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
        };
        LineChartGauss.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        LineChartGauss.prototype.updateGauss = function () {
            var _this = this;
            var line_data = this.getGaussian();
            this.gauss_x.range(this.focus_x.domain()).domain(d3.extent(line_data, function (d) { return d["x"]; }));
            this.focus.selectAll("path.focusline").remove();
            var focus_line = this.focus.selectAll("path.focusline")
                .data([line_data]);
            focus_line.exit().remove();
            focus_line.enter()
                .append("path")
                .attr("class", "focusline")
                .attr("d", function (d) { return _this.focusline(d); })
                .moveToFront();
        };
        LineChartGauss.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array["data"], function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d["data"][d["data"].length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.gauss_y.range(this.y.domain());
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 20))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data(this.data);
            this.focus.selectAll(".bar").remove();
            var focus_chart = this.focus.selectAll("rect.bars")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .attr("d", function (d) { return _this.valueline(d["data"]); });
            focus_chart.exit().remove();
            focus_chart.enter().append("rect")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + _this.y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.y(d.x0) - _this.y(d.x1) - 1;
            })
                .moveToBack();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartGauss.prototype, "data", void 0);
        LineChartGauss = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartGauss);
        return LineChartGauss;
    }());
    exports.LineChartGauss = LineChartGauss;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWdhdXNzMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQWlERSx3QkFBWSxPQUFPLEVBQVUsYUFBYTtZQUFiLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1lBL0NoQyxXQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsRSxnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixZQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2pCLFlBQU8sR0FBRyxHQUFHLENBQUM7WUFDZCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1lBTVgsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQXNCWixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUtiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLGNBQVMsR0FBRyxHQUFHLENBQUM7WUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFDbkIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELGlDQUFRLEdBQVI7WUFBQSxpQkF1QkM7WUF0QkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJ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QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt3REFBVTtRQUdyRDtZQUFULDRCQUFROztvREFBVztRQWJULGNBQWM7WUFGMUIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLGNBQWMsQ0E2WTFCO1FBQUQscUJBQUM7S0E3WUQsQUE2WUMsSUFBQTtJQTdZWSx3Q0FBYyIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydC1nYXVzczAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRHYXVzcyB7XG4gIC8vIE9uZS1XYXlcbiAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDYwLCBib3R0b206IDM1LCBsZWZ0OiA2MCwgbWlkZGxlOiAyMCB9O1xuICBAYmluZGFibGUgeF9hdHRyaWJ1dGUgPSBcInhcIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG4gIEBiaW5kYWJsZSB4X2xhYmVsID0gXCJkYXlzXCI7XG4gIEBiaW5kYWJsZSB5X2xhYmVsID0gXCJ5XCI7XG4gIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBtb3VzZV9ldmVudDtcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgbGluZWNoYXJ0O1xuICBwcml2YXRlIGZvY3VzO1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeTtcbiAgcHJpdmF0ZSBmb2N1c194O1xuICBwcml2YXRlIGdhdXNzX3g7XG4gIHByaXZhdGUgZ2F1c3NfeTtcbiAgcHJpdmF0ZSBnYXVzc19zaWdtYTtcbiAgcHJpdmF0ZSBncmFkaWVudENvbG9yO1xuICBwcml2YXRlIHZhbHVlbGluZTtcbiAgcHJpdmF0ZSBmb2N1c2xpbmU7XG4gIHByaXZhdGUgaGlzdG9ncmFtO1xuICBwcml2YXRlIGJydXNoO1xuICBwcml2YXRlIGNlbnRlciA9IDEuMDtcbiAgcHJpdmF0ZSB3ZWlnaHQgPSAxLjA7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcbiAgcHJpdmF0ZSB4X3NpemUgPSA5MDA7XG4gIHByaXZhdGUgeV9zaXplID0gNTAwO1xuICBwcml2YXRlIGxjX3dpZHRoID0gNTA7XG4gIHByaXZhdGUgbGNfaGVpZ2h0ID0gNTAwO1xuICBwcml2YXRlIGZvY3VzX3dpZHRoID0gNTA7XG4gIHByaXZhdGUgZm9jdXNfaGVpZ2h0ID0gNTAwO1xuICBwcml2YXRlIGZvY3VzX29mZnNldCA9IDEwMDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5sY193aWR0aCA9IHRoaXMud2lkdGggKiAwLjg7XG4gICAgICB0aGlzLmZvY3VzX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuMiAtIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmxjX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgdGhpcy5mb2N1c19oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgdGhpcy5mb2N1c19vZmZzZXQgPSB0aGlzLmxjX3dpZHRoICsgdGhpcy5tYXJnaW4ubWlkZGxlICsgdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpXG4gICAgICAgICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJwYXRoLmZvY3VzbGluZVwiKS5yZW1vdmUoKVxuICAgICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGdldEdhdXNzaWFuKCkge1xuICAgIGxldCBkYXRhID0gW107XG4gICAgLy8gbGV0IHJuZCA9IGQzLnJhbmRvbU5vcm1hbCgpO1xuICAgIGxldCBybmQgPSBkMy5yYW5kb21Vbmlmb3JtKC0zLCAzKTtcblxuICAvLyBsb29wIHRvIHBvcHVsYXRlIGRhdGEgYXJyYXkgd2l0aFxuICAvLyBwcm9iYWJpbHkgLSBxdWFudGlsZSBwYWlyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDA7IGkrKykge1xuICAgICAgbGV0IHEgPSBybmQoKSAvLyBjYWxjIHJhbmRvbSBkcmF3IGZyb20gdW5pZm9ybSBkaXN0XG4gICAgICBsZXQgcCA9IHRoaXMuZ2F1c3NpYW4ocSwgdGhpcy5nYXVzc195LmludmVydCh0aGlzLmNlbnRlciksIHRoaXMuZ2F1c3Nfc2lnbWEodGhpcy53ZWlnaHQpKSAvLyBjYWxjIHByb2Igb2YgcmFuZCBkcmF3XG4gICAgICBsZXQgZWwgPSB7XG4gICAgICAgICAgXCJ5XCI6IHEsXG4gICAgICAgICAgXCJ4XCI6IHBcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChlbClcbiAgfTtcblxuICB0aGlzLmdyYWRpZW50Q29sb3IuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgeCA9PiB4W1wieFwiXSldKVxuXG4gIC8vIG5lZWQgdG8gc29ydCBmb3IgcGxvdHRpbmdcbiAgLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0XG4gICAgIGRhdGEuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEueSA+IGIueSkgPyAxIDogKChiLnkgPiBhLnkpID8gLTEgOiAwKTt9ICk7XG4gICAgIHJldHVybiBkYXRhO1xuXG4gIH07XG5cbiAgLy90YWtlbiBmcm9tIEphc29uIERhdmllcyBzY2llbmNlIGxpYnJhcnlcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2phc29uZGF2aWVzL3NjaWVuY2UuanMvXG4gIGdhdXNzaWFuKHgsIG1lYW4sICBzaWdtYSkge1xuICBcdGxldCBnYXVzc2lhbkNvbnN0YW50ID0gMSAvIE1hdGguc3FydCgyICogTWF0aC5QSSk7XG5cbiAgICAgIHggPSAoeCAtIG1lYW4pIC8gc2lnbWE7XG4gICAgICBsZXQgZyA9IGdhdXNzaWFuQ29uc3RhbnQgKiBNYXRoLmV4cCgtLjUgKiB4ICogeCkgLyBzaWdtYTtcblxuICAgICAgaWYoZyA8IDAuMDAxKSBnID0gMDtcblxuICAgICAgcmV0dXJuIGc7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmxpbmVjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy5sY193aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5sY19oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLCBcIisgdGhpcy5tYXJnaW4udG9wICtcIilcIik7XG5cbiAgICB0aGlzLmZvY3VzID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLmZvY3VzX29mZnNldCArIFwiLCBcIisgdGhpcy5tYXJnaW4udG9wICtcIilcIilcblxuICAgIHRoaXMuZm9jdXNcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmZvY3VzX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmZvY3VzX2hlaWdodClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGxldCBvdXQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgc2VsZi5jZW50ZXIgPSBzZWxmLnkuaW52ZXJ0KGQzLm1vdXNlKHRoaXMpWzFdKTtcbiAgICAgICAgICBzZWxmLndlaWdodCA9IHNlbGYuZm9jdXNfeC5pbnZlcnQoZDMubW91c2UodGhpcylbMF0pO1xuICAgICAgICAgIHNlbGYudXBkYXRlR2F1c3MoKTtcblxuICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IG91dCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHNlbGYuY2VudGVyID0gc2VsZi55LmludmVydChkMy5tb3VzZSh0aGlzKVsxXSk7XG4gICAgICAgICAgICBzZWxmLndlaWdodCA9IHNlbGYuZm9jdXNfeC5pbnZlcnQoZDMubW91c2UodGhpcylbMF0pO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVHYXVzcygpO1xuXG4gICAgICAgICAgICBzZWxmLmRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgb3V0LnNldChcbiAgICAgICAgICAgICAgICBkW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgc2VsZi5ncmFkaWVudENvbG9yKHNlbGYuZ2F1c3NpYW4oc2VsZi5nYXVzc195LmludmVydChkLmRhdGFbZC5kYXRhLmxlbmd0aC0xXVtzZWxmLnlfYXR0cmlidXRlXSksIHNlbGYuZ2F1c3NfeS5pbnZlcnQoc2VsZi5jZW50ZXIpLCBzZWxmLmdhdXNzX3NpZ21hKHNlbGYud2VpZ2h0KSkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYuYnJ1c2hpbmcgPSBvdXQ7XG5cbiAgICAgICAgICAgIHNlbGYudXBkYXRlSGlnaGxpZ2h0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNlbGYubW91c2VfZXZlbnQub24oXCJtb3VzZW1vdmVcIiwgbnVsbCkub24oXCJtb3VzZXVwXCIsIG51bGwpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gICBzZWxmLm1vdXNlX2V2ZW50Lm9uKFwibW91c2Vtb3ZlXCIsIG51bGwpLm9uKFwibW91c2V1cFwiLCBudWxsKTtcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuICAgICAgICAubW92ZVRvRnJvbnQoKVxuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMubGNfd2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICB0aGlzLmZvY3VzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbMCwgdGhpcy5mb2N1c193aWR0aF0pO1xuXG4gICAgdGhpcy5nYXVzc194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIHRoaXMuZ2F1c3NfeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWy0zLCAzXSlcbiAgICB0aGlzLmdhdXNzX3NpZ21hID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLjEsIDVdKVxuICAgICAgLmRvbWFpbihbMiwgdGhpcy5mb2N1c193aWR0aF0pXG5cbiAgICB0aGlzLmdyYWRpZW50Q29sb3IgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIDFdKVxuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQrMjYpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAudGV4dCh0aGlzLnhfbGFiZWwpO1xuXG4gICAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCh0aGlzLnlfbGFiZWwpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiKyB0aGlzLmZvY3VzX3dpZHRoICtcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIHRoaXMueV9hdHRyaWJ1dGV9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgdGhpcy5mb2N1c2xpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoKGQpID0+IHRoaXMuZm9jdXNfeCh0aGlzLmdhdXNzX3goZFtcInhcIl0pKSlcbiAgICAgICAgLnkoKGQpID0+IHRoaXMueSh0aGlzLmdhdXNzX3koZFtcInlcIl0pKSk7XG5cbiAgICBsZXQgeV9hdHRyaWJ1dGUgPSB0aGlzLnlfYXR0cmlidXRlXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG4gIH1cblxuICB1cGRhdGVIaWdobGlnaHQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZFtcImhpZ2hsaWdodFwiXVxuICAgICAgICAgIH0pXG4gIH1cblxuICB1cGRhdGVHYXVzcygpIHtcbiAgICBsZXQgbGluZV9kYXRhID0gdGhpcy5nZXRHYXVzc2lhbigpO1xuICAgIHRoaXMuZ2F1c3NfeC5yYW5nZSh0aGlzLmZvY3VzX3guZG9tYWluKCkpLmRvbWFpbihkMy5leHRlbnQobGluZV9kYXRhLCBkID0+IGRbXCJ4XCJdKSlcblxuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicGF0aC5mb2N1c2xpbmVcIikucmVtb3ZlKCk7XG4gICAgbGV0IGZvY3VzX2xpbmUgPSB0aGlzLmZvY3VzLnNlbGVjdEFsbChcInBhdGguZm9jdXNsaW5lXCIpXG4gICAgICAgIC5kYXRhKFtsaW5lX2RhdGFdKVxuXG4gICAgLy8gRGlzdHJpYnV0aW9uIGxpbmVcbiAgICBmb2N1c19saW5lLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGZvY3VzX2xpbmUuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmb2N1c2xpbmVcIilcbiAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gdGhpcy5mb2N1c2xpbmUoZCkpXG4gICAgICAubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeF9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuXG4gICAgbGV0IGZvY3VzX2RhdGEgPSA8YW55PiBbXTtcblxuICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgIGZvY3VzX2RhdGEucHVzaChkW1wiZGF0YVwiXVtkW1wiZGF0YVwiXS5sZW5ndGgtMV0pXG4gICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIHRoaXMuZ2F1c3NfeS5yYW5nZSh0aGlzLnkuZG9tYWluKCkpXG5cbiAgICAvLyBsZXQgYmlucyA9IHRoaXMuaGlzdG9ncmFtKGZvY3VzX2RhdGEpXG4gICAgbGV0IGJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgICAudmFsdWUoKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG4gICAgICAgIC5kb21haW4odGhpcy55LmRvbWFpbigpKVxuICAgICAgICAudGhyZXNob2xkcyhkMy5yYW5nZSh5X21pbiwgeV9tYXgsICh5X21heCAtIHlfbWluKSAvIDIwKSlcbiAgICAgICAgKGZvY3VzX2RhdGEpO1xuXG4gICAgdGhpcy5mb2N1c194LmRvbWFpbihbMCwgZDMubWF4KGJpbnMsIChkOiBhbnlbXSkgPT4gZC5sZW5ndGgpXSk7XG5cblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuXG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKCk7XG4gICAgbGV0IGZvY3VzX2NoYXJ0ID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJyZWN0LmJhcnNcIilcbiAgICAgICAgLmRhdGEoYmlucylcblxuICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzUmlnaHQodGhpcy55KSk7XG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLmZvY3VzX3gpLnRpY2tzKDIpKTtcblxuICAgIC8vIExpbmVjaGFydFxuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGNoYXJ0LmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmNsYXNzZWQoXCJoaWdobGlnaHRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMudmFsdWVsaW5lKGRbXCJkYXRhXCJdKSk7XG5cbiAgICAvLyBCYXJjaGFydFxuICAgIC8vIFJlbW92ZSBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gQWRkIGJhcnNcbiAgICBmb2N1c19jaGFydC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiB7XG5cdFx0ICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkLngxKSArIFwiKVwiOyB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geyByZXR1cm4gIHRoaXMuZm9jdXNfeChkLmxlbmd0aCk7IH0pXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnkoZC54MCkgLSB0aGlzLnkoZC54MSkgLSAxO1xuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9CYWNrKCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart-live',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartLive = (function () {
        function LineChartLive(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.x_label = "days";
            this.y_label = "y";
            this.redraw = 0;
            this.data = [];
            this.center = 1.0;
            this.weight = 1.0;
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        LineChartLive.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.x_size = this.element.parentElement.offsetWidth;
            this.y_size = this.element.parentElement.offsetHeight;
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
        };
        LineChartLive.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".line").remove();
            }
        };
        LineChartLive.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateChart();
            }
        };
        LineChartLive.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChartLive.prototype.initChart = function () {
            var _this = this;
            var self = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);
            this.linechart = this.svg
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height)
                .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            this.x = d3.scaleLinear()
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.linechart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.linechart.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text(this.x_label);
            this.linechart.append("g")
                .attr("class", "yAxis");
            this.linechart.append("text")
                .style("text-anchor", "left")
                .attr("y", -4)
                .text(this.y_label);
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
            var y_attribute = this.y_attribute;
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
        };
        LineChartLive.prototype.updateHighlight = function () {
            var self = this;
            this.linechart.selectAll("path.line")
                .attr("opacity", function (d) {
                return d["highlight"];
            });
        };
        LineChartLive.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (d) { return d[_this.x_attribute]; });
            var y_max = d3.max(this.data, function (d) { return d[_this.y_attribute]; });
            var x_min = d3.min(this.data, function (d) { return d[_this.x_attribute]; });
            var y_min = d3.min(this.data, function (d) { return d[_this.y_attribute]; });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.linechart.selectAll("path.line").remove();
            var chart = this.linechart.selectAll("path.line")
                .data([this.data]);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            chart.exit().remove();
            chart.enter()
                .append("path")
                .attr("class", "line")
                .classed("highlight", function (d) {
                if (d["highlight"] == 1) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .classed("background", function (d) {
                if (d["highlight"] == 2) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .merge(chart)
                .attr("d", function (d) { return _this.valueline(d); });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "x_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "y_label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LineChartLive.prototype, "data", void 0);
        LineChartLive = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], LineChartLive);
        return LineChartLive;
    }());
    exports.LineChartLive = LineChartLive;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWxpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUE0Q0UsdUJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTFDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEUsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsWUFBTyxHQUFHLE1BQU0sQ0FBQztZQUNqQixZQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2QsV0FBTSxHQUFHLENBQUMsQ0FBQztZQU1YLFNBQUksR0FBRyxFQUFFLENBQUM7WUFzQlosV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFLYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUduQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBR0QsZ0NBQVEsR0FBUjtZQUFBLGlCQWlCQztZQWhCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUdILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFD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Q0QsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFlLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDekMsQ0FBQztRQWhNUztZQUFULDRCQUFROztxREFBbUU7UUFDbEU7WUFBVCw0QkFBUTs7MERBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7OzBEQUFtQjtRQUNsQjtZQUFULDRCQUFROztzREFBa0I7UUFDakI7WUFBVCw0QkFBUTs7c0RBQWU7UUFDZDtZQUFULDRCQUFROztxREFBWTtRQUdpQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7dURBQVU7UUFHckQ7WUFBVCw0QkFBUTs7bURBQVc7UUFiVCxhQUFhO1lBRnpCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSxhQUFhLENBbU16QjtRQUFELG9CQUFDO0tBbk1ELEFBbU1DLElBQUE7SUFuTVksc0NBQWEiLCJmaWxlIjoiY2hhcnRzL2xpbmUtY2hhcnQtbGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydExpdmUge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgeF9sYWJlbCA9IFwiZGF5c1wiO1xuICBAYmluZGFibGUgeV9sYWJlbCA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgbW91c2VfZXZlbnQ7XG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGxpbmVjaGFydDtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSBnYXVzc194O1xuICBwcml2YXRlIGdhdXNzX3k7XG4gIHByaXZhdGUgZ2F1c3Nfc2lnbWE7XG4gIHByaXZhdGUgZ3JhZGllbnRDb2xvcjtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgZm9jdXNsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcbiAgcHJpdmF0ZSBjZW50ZXIgPSAxLjA7XG4gIHByaXZhdGUgd2VpZ2h0ID0gMS4wO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ29tcGxldGUgZHJhd2luZyBhcmVhXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgLy8gTGluZWNoYXJ0IGFyZWFcbiAgICB0aGlzLmxpbmVjaGFydCA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLCBcIisgdGhpcy5tYXJnaW4udG9wICtcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQodGhpcy54X2xhYmVsKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJsZWZ0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAtNClcbiAgICAgICAgLnRleHQodGhpcy55X2xhYmVsKTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgLy8gVXBkYXRlIGF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnlBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKTtcbiAgfVxuXG4gIHVwZGF0ZUhpZ2hsaWdodCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkW1wiaGlnaGxpZ2h0XCJdXG4gICAgICAgICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEoW3RoaXMuZGF0YV0pXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLm1lcmdlKGNoYXJ0KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('spatial_sir/epidemics',["require", "exports", "aurelia-framework", "../models/genetic", "../models/spatial-sir", "ion-rangeslider"], function (require, exports, aurelia_framework_1, genetic_1, spatial_sir_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Epidemics = (function () {
        function Epidemics() {
            this.inFilter = [];
            this.outFilterList = new Map([["p", new Map()], ["pop", new Map()]]);
            this.simulations = 100;
            this.generations = 100;
            this.grid_selected = 100;
            this.pop_from = 0;
            this.pop_to = 1000;
            this.event_from = 0.1;
            this.event_to = 0.2;
            this.leftover_from = 1;
            this.leftover_to = 10;
            this.sobol_n = 100;
            this.data_grid = [];
            this.data_parallel = [];
            this.data_lines = [];
            this.data_lines_original = [];
            this.data_length = 0;
            this.current_filter = new Set();
            this.collapsed_input = false;
            this.collapsed_parallel = false;
        }
        Epidemics.prototype.switch = function () {
            this.collapsed_input = this.collapsed_input == true ? false : true;
            this.collapsed_parallel = this.collapsed_parallel == true ? false : true;
        };
        Epidemics.prototype.attached = function () {
            var _this = this;
            $("#pop").ionRangeSlider({
                min: 1,
                max: 2000,
                from: 500,
                to: 1000,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.pop_from = data["from"];
                    _this.pop_to = data["to"];
                }
            });
            $("#event").ionRangeSlider({
                min: 0.01,
                max: 1,
                from: 0.1,
                to: 0.2,
                step: 0.01,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.event_from = data["from"];
                    _this.event_to = data["to"];
                }
            });
            $("#leftover").ionRangeSlider({
                min: 1,
                max: 50,
                from: 1,
                to: 10,
                step: 1,
                type: "double",
                grid: true,
                grid_num: 10,
                onFinish: function (data) {
                    _this.leftover_from = data["from"];
                    _this.leftover_to = data["to"];
                }
            });
        };
        Epidemics.prototype.brushing_pChanged = function () {
            this.updateOutData(this.brushing_p, "p");
            this.updateInData(this.brushing_p);
        };
        Epidemics.prototype.brushing_popChanged = function () {
            this.updateOutData(this.brushing_pop, "pop");
            this.updateInData(this.brushing_pop);
        };
        Epidemics.prototype.brushing_parallelChanged = function () {
            this.updateParallelData(this.brushing_parallel);
            this.filterOutData(this.brushing_parallel);
        };
        Epidemics.prototype.redrawLinecharts = function () {
            this.redraw_p = this.redraw_p == 0 ? 1 : 0;
            this.redraw_pop = this.redraw_pop == 0 ? 1 : 0;
        };
        Epidemics.prototype.updateOutData = function (mapping, attribute) {
            var _this = this;
            var average = new Map();
            this.outFilterList.set(attribute, mapping);
            mapping.forEach(function (v, k) {
                var temp = 0;
                _this.outFilterList.forEach(function (iv, ik) {
                    if (iv.size > 0)
                        temp = temp + iv.get(k);
                });
                temp = temp / _this.outFilterList.size;
                average.set(k, temp);
            });
            this.data_lines.forEach(function (x) {
                x["highlight"] = average.get(x["id"]);
            });
            this.redrawLinecharts();
        };
        Epidemics.prototype.updateInData = function (mapping) {
            var _this = this;
            if (this.inFilter.length > 0) {
                this.data_parallel
                    .filter(function (x) { return _this.inFilter.includes(x["id"]); })
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            else {
                this.data_parallel
                    .forEach(function (x) {
                    x["highlight"] = mapping.get(x["id"]);
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Epidemics.prototype.updateParallelData = function (ids) {
            this.inFilter = ids;
            if (ids.length > 0) {
                this.data_parallel.forEach(function (x) {
                    if (ids.includes(x["id"])) {
                        x["highlight"] = 1;
                    }
                    else {
                        x["highlight"] = 0;
                    }
                });
            }
            else {
                this.data_parallel.forEach(function (x) {
                    x["highlight"] = 1;
                });
            }
            this.redraw_parallel = this.redraw_parallel == 0 ? 1 : 0;
        };
        Epidemics.prototype.filterOutData = function (ids) {
            if (ids.length > 1) {
                var highlight_list_1 = new Set(ids);
                this.data_lines.length = 0;
                (_a = this.data_lines).push.apply(_a, this.data_lines_original.filter(function (x) { return highlight_list_1.has(x["id"]); }));
                this.current_filter = highlight_list_1;
            }
            else {
                this.data_lines.length = 0;
                (_b = this.data_lines).push.apply(_b, this.data_lines_original);
            }
            var _a, _b;
        };
        Epidemics.prototype.compute = function () {
            var _this = this;
            this.collapsed_input = true;
            var spatial = new spatial_sir_1.SpatialSir(1, this.grid_selected);
            spatial.init_simulation(this.data_grid);
            this.timeout = setInterval(function () { spatial.run_simulation(_this.data_grid, []); }, 50);
            var gen = new genetic_1.Genetic([this.event_from, this.event_to], [this.pop_from, this.pop_to], [this.leftover_from, this.leftover_to], this.generations, this.simulations);
            var model = gen.compute_model();
            model.forEach(function (sol, run) {
                var temp = [];
                for (var i = 0; i < sol.length; i++) {
                    temp.push({
                        "x": gen.time_range[i],
                        "p": sol[i].p,
                        "pop": sol[i].pop
                    });
                }
                _this.data_parallel.push({
                    "id": run,
                    "highlight": 0,
                    "data": {
                        "pop": gen.params[run][0],
                        "P(event)": gen.params[run][1],
                        "Remaining": gen.params[run][2]
                    }
                });
                _this.data_lines_original.push({
                    "id": run,
                    "highlight": 0,
                    "data": temp
                });
            });
            this.data_length = this.data_lines_original.length;
            this.filterOutData([]);
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Epidemics.prototype, "brushing_p", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Epidemics.prototype, "brushing_pop", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], Epidemics.prototype, "brushing_parallel", void 0);
        Epidemics = __decorate([
            aurelia_framework_1.autoinject
        ], Epidemics);
        return Epidemics;
    }());
    exports.Epidemics = Epidemics;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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b0JBQ2QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO2lCQUNSLENBQUMsQ0FBQTtnQkFFRixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO29CQUN0QixJQUFJLEVBQUUsR0FBRztvQkFDVCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxNQUFNLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7WUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDO1FBclBTO1lBQVgsOEJBQVU7O3FEQUFZO1FBQ1g7WUFBWCw4QkFBVTs7dURBQWM7UUFJYjtZQUFYLDhCQUFVOzs0REFBbUI7UUFOckIsU0FBUztZQURyQiw4QkFBVTtXQUNFLFNBQVMsQ0F1UHJCO1FBQUQsZ0JBQUM7S0F2UEQsQUF1UEMsSUFBQTtJQXZQWSw4QkFBUyIsImZpbGUiOiJzcGF0aWFsX3Npci9lcGlkZW1pY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIG9ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBcImlvbi1yYW5nZXNsaWRlclwiXG5pbXBvcnQge0dlbmV0aWN9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXRpY1wiXG5pbXBvcnQge1NwYXRpYWxTaXJ9IGZyb20gXCIuLi9tb2RlbHMvc3BhdGlhbC1zaXJcIlxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBFcGlkZW1pY3Mge1xuICAgIEBvYnNlcnZhYmxlIGJydXNoaW5nX3A7XG4gICAgQG9ic2VydmFibGUgYnJ1c2hpbmdfcG9wO1xuICAgIHJlZHJhd19wO1xuICAgIHJlZHJhd19wb3A7XG5cbiAgICBAb2JzZXJ2YWJsZSBicnVzaGluZ19wYXJhbGxlbDtcbiAgICByZWRyYXdfcGFyYWxsZWw7XG5cbiAgICB0aW1lb3V0O1xuXG4gICAgaW5GaWx0ZXIgPSBbXVxuICAgIG91dEZpbHRlckxpc3QgPSBuZXcgTWFwKFtbXCJwXCIsIG5ldyBNYXAoKV0sIFtcInBvcFwiLCBuZXcgTWFwKCldXSk7XG5cbiAgICAvLyBHZW5ldGljIE1vZGVsXG4gICAgc2ltdWxhdGlvbnMgPSAxMDA7XG4gICAgZ2VuZXJhdGlvbnMgPSAxMDA7XG5cbiAgICAvLyBHcmlkXG4gICAgZ3JpZF9zZWxlY3RlZCA9IDEwMDtcblxuICAgIC8vIFBvcHVsYXRpb24gY291bnRcbiAgICBwb3BfZnJvbSA9IDA7XG4gICAgcG9wX3RvID0gMTAwMDtcblxuICAgIC8vIFByb2JhYmlsaXR5IG9mIGV2ZW50XG4gICAgZXZlbnRfZnJvbSA9IDAuMTtcbiAgICBldmVudF90byA9IDAuMjtcblxuICAgIC8vIExlZnRvdmVyIGluZGl2aWR1YWxzIGFmdGVyIGV2ZW50XG4gICAgbGVmdG92ZXJfZnJvbSA9IDE7XG4gICAgbGVmdG92ZXJfdG8gPSAxMDtcblxuICAgIC8vIFNvYm9sIHNhbXBsaW5nXG4gICAgc29ib2xfbiA9IDEwMFxuXG4gICAgZGF0YV9ncmlkID0gPGFueVtdPiBbXVxuICAgIGRhdGFfcGFyYWxsZWwgPSA8YW55W10+IFtdXG4gICAgZGF0YV9saW5lcyA9IDxhbnlbXT4gW11cbiAgICBkYXRhX2xpbmVzX29yaWdpbmFsID0gPGFueVtdPiBbXVxuICAgIGRhdGFfbGVuZ3RoID0gMDtcblxuICAgIGN1cnJlbnRfZmlsdGVyID0gbmV3IFNldCgpO1xuXG4gICAgY29sbGFwc2VkX2lucHV0ID0gZmFsc2U7XG4gICAgY29sbGFwc2VkX3BhcmFsbGVsID0gZmFsc2U7XG5cbiAgICBzd2l0Y2goKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9IHRoaXMuY29sbGFwc2VkX2lucHV0ID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICB0aGlzLmNvbGxhcHNlZF9wYXJhbGxlbCA9IHRoaXMuY29sbGFwc2VkX3BhcmFsbGVsID09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIC8vIEF0dGFjaGluZyByYW5nZSBzbGlkZXJzXG4gICAgICAgICQoXCIjcG9wXCIpLmlvblJhbmdlU2xpZGVyKHtcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjAwMCxcbiAgICAgICAgICAgIGZyb206IDUwMCxcbiAgICAgICAgICAgIHRvOiAxMDAwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcF9mcm9tID0gZGF0YVtcImZyb21cIl1cbiAgICAgICAgICAgIHRoaXMucG9wX3RvID0gZGF0YVtcInRvXCJdXG4gICAgICAgIH19KTtcbiAgICAgICAgJChcIiNldmVudFwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgICAgICAgICBtaW46IDAuMDEsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICBmcm9tOiAwLjEsXG4gICAgICAgICAgICB0bzogMC4yLFxuICAgICAgICAgICAgc3RlcDogMC4wMSxcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICAgICAgZ3JpZF9udW06IDEwLFxuICAgICAgICAgICAgb25GaW5pc2g6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50X2Zyb20gPSBkYXRhW1wiZnJvbVwiXVxuICAgICAgICAgICAgdGhpcy5ldmVudF90byA9IGRhdGFbXCJ0b1wiXVxuICAgICAgICB9fSk7XG4gICAgICAgICQoXCIjbGVmdG92ZXJcIikuaW9uUmFuZ2VTbGlkZXIoe1xuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA1MCxcbiAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICB0bzogMTAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdHlwZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgICBncmlkX251bTogMTAsXG4gICAgICAgICAgICBvbkZpbmlzaDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdG92ZXJfZnJvbSA9IGRhdGFbXCJmcm9tXCJdXG4gICAgICAgICAgICB0aGlzLmxlZnRvdmVyX3RvID0gZGF0YVtcInRvXCJdXG4gICAgICAgIH19KTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPdXREYXRhKHRoaXMuYnJ1c2hpbmdfcCwgXCJwXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluRGF0YSh0aGlzLmJydXNoaW5nX3ApO1xuICAgIH1cblxuICAgIGJydXNoaW5nX3BvcENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3V0RGF0YSh0aGlzLmJydXNoaW5nX3BvcCwgXCJwb3BcIik7XG4gICAgICAgIHRoaXMudXBkYXRlSW5EYXRhKHRoaXMuYnJ1c2hpbmdfcG9wKTtcbiAgICB9XG5cbiAgICBicnVzaGluZ19wYXJhbGxlbENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFyYWxsZWxEYXRhKHRoaXMuYnJ1c2hpbmdfcGFyYWxsZWwpO1xuICAgICAgICB0aGlzLmZpbHRlck91dERhdGEodGhpcy5icnVzaGluZ19wYXJhbGxlbCk7XG4gICAgfVxuXG4gICAgcmVkcmF3TGluZWNoYXJ0cygpIHtcbiAgICAgICAgdGhpcy5yZWRyYXdfcCA9IHRoaXMucmVkcmF3X3AgPT0gMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLnJlZHJhd19wb3AgPSB0aGlzLnJlZHJhd19wb3AgPT0gMCA/IDEgOiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3V0RGF0YShtYXBwaW5nLCBhdHRyaWJ1dGUpIHtcbiAgICAgIGxldCBhdmVyYWdlID0gbmV3IE1hcCgpO1xuXG4gICAgICAvLyBTZXQgY3VycmVudCBmaWx0ZXJcbiAgICAgIHRoaXMub3V0RmlsdGVyTGlzdC5zZXQoYXR0cmlidXRlLCBtYXBwaW5nKTtcblxuICAgICAgLy8gVXBkYXRlIGF2ZXJhZ2UgZmlsdGVyXG4gICAgICBtYXBwaW5nLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSAwO1xuXG4gICAgICAgIHRoaXMub3V0RmlsdGVyTGlzdC5mb3JFYWNoKChpdiwgaWspID0+IHtcbiAgICAgICAgICBpZihpdi5zaXplID4gMCkgdGVtcCAgPSB0ZW1wICsgaXYuZ2V0KGspO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRlbXAgPSB0ZW1wL3RoaXMub3V0RmlsdGVyTGlzdC5zaXplO1xuXG4gICAgICAgIGF2ZXJhZ2Uuc2V0KGssIHRlbXApXG4gICAgICB9KVxuXG4gICAgICAvLyBTZXQgbGluZSBoaWdobGlnaHRcbiAgICAgIHRoaXMuZGF0YV9saW5lcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICB4W1wiaGlnaGxpZ2h0XCJdID0gYXZlcmFnZS5nZXQoeFtcImlkXCJdKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yZWRyYXdMaW5lY2hhcnRzKCk7XG4gICAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUluRGF0YShtYXBwaW5nKSB7XG4gICAgICBpZih0aGlzLmluRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5kYXRhX3BhcmFsbGVsXG4gICAgICAgICAgLmZpbHRlcih4ID0+IHRoaXMuaW5GaWx0ZXIuaW5jbHVkZXMoeFtcImlkXCJdKSlcbiAgICAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWxcbiAgICAgICAgICAuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSBtYXBwaW5nLmdldCh4W1wiaWRcIl0pXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVBhcmFsbGVsRGF0YShpZHMpIHtcbiAgICAgICAgdGhpcy5pbkZpbHRlciA9IGlkcztcblxuICAgICAgICBpZihpZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgaWYoaWRzLmluY2x1ZGVzKHhbXCJpZFwiXSkpIHtcbiAgICAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgeFtcImhpZ2hsaWdodFwiXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGFfcGFyYWxsZWwuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHhbXCJoaWdobGlnaHRcIl0gPSAxO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd19wYXJhbGxlbCA9IHRoaXMucmVkcmF3X3BhcmFsbGVsID09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlck91dERhdGEoaWRzKSB7XG4gICAgICAgIGlmKGlkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgaGlnaGxpZ2h0X2xpc3QgPSBuZXcgU2V0KGlkcyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG5cbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5wdXNoKC4uLnRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5maWx0ZXIoeCA9PiBoaWdobGlnaHRfbGlzdC5oYXMoeFtcImlkXCJdKSkpXG5cbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBmaWx0ZXJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9maWx0ZXIgPSBoaWdobGlnaHRfbGlzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YV9saW5lcy5sZW5ndGggPSAwXG4gICAgICAgICAgICB0aGlzLmRhdGFfbGluZXMucHVzaCguLi50aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlKCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZF9pbnB1dCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuY29sbGFwc2VkX291dCA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmNvbGxhcHNlZF9ncmlkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBTcGF0aWFsIE1pZ3JhdGlvbiBTaW11bGF0aW9uXG4gICAgICAgIGxldCBzcGF0aWFsID0gbmV3IFNwYXRpYWxTaXIoMSwgdGhpcy5ncmlkX3NlbGVjdGVkKVxuXG4gICAgICAgIHNwYXRpYWwuaW5pdF9zaW11bGF0aW9uKHRoaXMuZGF0YV9ncmlkKVxuICAgICAgICAvLyBzcGF0aWFsLnJ1bl9zaW11bGF0aW9uKHRoaXMuZGF0YV9ncmlkLCBbXSlcblxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge3NwYXRpYWwucnVuX3NpbXVsYXRpb24odGhpcy5kYXRhX2dyaWQsIFtdKX0sIDUwKVxuXG4gICAgICAgIC8vIENyZWF0ZSBtb2RlbCBwYXJhbXNcbiAgICAgICAgbGV0IGdlbiA9IG5ldyBHZW5ldGljKFt0aGlzLmV2ZW50X2Zyb20sIHRoaXMuZXZlbnRfdG9dLFt0aGlzLnBvcF9mcm9tLCB0aGlzLnBvcF90b10sIFt0aGlzLmxlZnRvdmVyX2Zyb20sIHRoaXMubGVmdG92ZXJfdG9dLCB0aGlzLmdlbmVyYXRpb25zLCB0aGlzLnNpbXVsYXRpb25zKVxuXG4gICAgICAgIGxldCBtb2RlbCA9IGdlbi5jb21wdXRlX21vZGVsKClcblxuICAgICAgICBtb2RlbC5mb3JFYWNoKCAoc29sLCBydW4pID0+IHtcbiAgICAgICAgICBsZXQgdGVtcCA9IDxhbnlbXT4gW11cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgXCJ4XCI6IGdlbi50aW1lX3JhbmdlW2ldLFxuICAgICAgICAgICAgICAgICAgXCJwXCI6IHNvbFtpXS5wLFxuICAgICAgICAgICAgICAgICAgXCJwb3BcIjogc29sW2ldLnBvcFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGF0YV9wYXJhbGxlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogcnVuLFxuICAgICAgICAgICAgICAgICAgXCJoaWdobGlnaHRcIjogMCxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJwb3BcIjogZ2VuLnBhcmFtc1tydW5dWzBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUChldmVudClcIjogZ2VuLnBhcmFtc1tydW5dWzFdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUmVtYWluaW5nXCI6IGdlbi5wYXJhbXNbcnVuXVsyXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmRhdGFfbGluZXNfb3JpZ2luYWwucHVzaCh7XG4gICAgICAgICAgICAgICAgICBcImlkXCI6IHJ1bixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IDAsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjogdGVtcFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kYXRhX2xlbmd0aCA9IHRoaXMuZGF0YV9saW5lc19vcmlnaW5hbC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0RGF0YShbXSlcbiAgICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/spatial-migration0',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialMigration = (function () {
        function SpatialMigration(max_mating_distance, grid_length) {
            this.max_mating_distance = max_mating_distance;
            this.grid_length = grid_length;
            this.params = [];
            this.time_range = [];
            this.p = 0.5;
            this.simulation_counter = 0;
        }
        SpatialMigration.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialMigration.prototype.init_simulation = function (grid) {
            grid.length = 0;
            this.simulation_counter = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var random_number = Math.random();
                    if (random_number < this.p * this.p) {
                        temp[j] = "A1A1";
                    }
                    else if (random_number > 1 - (1 - this.p) * (1 - this.p)) {
                        temp[j] = "A2A2";
                    }
                    else {
                        temp[j] = "A1A2";
                    }
                }
                grid.push(temp);
            }
        };
        SpatialMigration.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialMigration.prototype.pick_mating_partner = function (grid, i, j) {
            var mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
            var mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);
            mating_i = this.get_bounded_index(mating_i);
            mating_j = this.get_bounded_index(mating_j);
            return grid[mating_i][mating_j];
        };
        SpatialMigration.prototype.get_offspring = function (parent1, parent2) {
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
                else if (random_number > 0.75) {
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
        };
        SpatialMigration.prototype.compute_FScore = function (grid) {
            var A1A1 = 0;
            var A1A2 = 0;
            var A2A2 = 0;
            for (var i = 0; i < this.grid_length; i = i + 1) {
                for (var ii = 0; ii < this.grid_length; ii = ii + 1) {
                    if (grid[i][ii] == "A1A1") {
                        A1A1 = A1A1 + 1;
                    }
                    else if (grid[i][ii] == "A1A2") {
                        A1A2 = A1A2 + 1;
                    }
                    else {
                        A2A2 = A2A2 + 1;
                    }
                }
            }
            var N = A1A1 + A1A2 + A2A2;
            var h_o = A1A2 / N;
            var p = ((2 * A1A1) + A1A2) / (2 * N);
            var h_e = 2 * p * (1 - p);
            var F = (h_e - h_o) / h_e;
            return F;
        };
        SpatialMigration.prototype.run_simulation = function (grid, data_lines) {
            var temp_grid = [];
            for (var i = 0; i < this.grid_length; i++) {
                temp_grid[i] = [];
                for (var j = 0; j < this.grid_length; j++) {
                    var mating_partner = this.pick_mating_partner(grid, i, j);
                    temp_grid[i][j] = this.get_offspring(grid[i][j], mating_partner);
                }
            }
            grid.length = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = temp_grid[i][j];
                }
                grid.push(temp);
            }
            data_lines.push({ x: this.simulation_counter++, F: this.compute_FScore(grid) });
        };
        SpatialMigration = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialMigration);
        return SpatialMigration;
    }());
    exports.SpatialMigration = SpatialMigration;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zcGF0aWFsLW1pZ3JhdGlvbjAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBUUE7UUFPRSwwQkFBb0IsbUJBQW1CLEVBQVUsV0FBVztZQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQUE7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBQTtZQU41RCxXQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osZUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVoQixNQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ1IsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBR3ZCLENBQUM7UUFFRCx5Q0FBYyxHQUFkLFVBQWUsR0FBRyxFQUFFLEdBQUc7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxDQUFDO1FBRUQsMENBQWUsR0FBZixVQUFnQixJQUFJO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7WUFFNUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtnQkFFYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUVsQyxFQUFFLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztRQUVELDRDQUFpQixHQUFqQixVQUFrQixLQUFLO1lBQ3JCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUxQixFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixhQUFhLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0MsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsYUFBYSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNLENBQUMsYUFBYSxDQUFBO1FBQ3RCLENBQUM7UUFFRCw4Q0FBbUIsR0FBbkIsVUFBb0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUUvRixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqQyxDQUFDO1FBRUQsd0NBQWEsR0FBYixVQUFjLE9BQU8sRUFBRSxPQUFPO1lBQzFCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUNqQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7UUFDSixDQUFDO1FBRUQseUNBQWMsR0FBZCxVQUFlLElBQUk7WUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUcxQixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUVELHlDQUFjLEdBQWQsVUFBZSxJQUFJLEVBQUUsVUFBVTtZQUM3QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFbkIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRWxCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUV6QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFHekQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWhCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7Z0JBQ2IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzNCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixDQUFDO1lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUE7UUFDL0UsQ0FBQztRQTlKVSxnQkFBZ0I7WUFENUIsOEJBQVU7O1dBQ0UsZ0JBQWdCLENBK0o1QjtRQUFELHVCQUFDO0tBL0pELEFBK0pDLElBQUE7SUEvSlksNENBQWdCIiwiZmlsZSI6Im1vZGVscy9zcGF0aWFsLW1pZ3JhdGlvbjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtTYW1wbGluZ30gZnJvbSBcIi4uL2hlbHBlci9zYW1wbGluZ1wiXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXHJcblxyXG4vLyBUaGlzIG1hZ2ljIGxpbmUgcmVtb3ZlZCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIG51bWVyaWNcclxuZGVjbGFyZSB2YXIgbG9ib3M6IGFueTtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBTcGF0aWFsTWlncmF0aW9uIHtcclxuICBwYXJhbXMgPSBbXTtcclxuICB0aW1lX3JhbmdlID0gW107XHJcblxyXG4gIHAgPSAwLjU7XHJcbiAgc2ltdWxhdGlvbl9jb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXhfbWF0aW5nX2Rpc3RhbmNlLCBwcml2YXRlIGdyaWRfbGVuZ3RoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRfcmFuZG9tX2ludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBpbml0X3NpbXVsYXRpb24oZ3JpZCkge1xyXG4gICAgZ3JpZC5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5zaW11bGF0aW9uX2NvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXAgPSBbXVxyXG5cclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgcmFuZG9tX251bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgIGlmIChyYW5kb21fbnVtYmVyIDwgdGhpcy5wKnRoaXMucCkge1xyXG4gICAgICAgICAgICB0ZW1wW2pdID0gXCJBMUExXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJhbmRvbV9udW1iZXIgPiAxIC0gKDEtdGhpcy5wKSAqICgxLXRoaXMucCkpIHtcclxuICAgICAgICAgICAgdGVtcFtqXSA9IFwiQTJBMlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcFtqXSA9IFwiQTFBMlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZ3JpZC5wdXNoKHRlbXApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRfYm91bmRlZF9pbmRleChpbmRleCkge1xyXG4gICAgbGV0IGJvdW5kZWRfaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICBpZihpbmRleCA8IDApIHtcclxuICAgICAgYm91bmRlZF9pbmRleCA9IGluZGV4ICsgdGhpcy5ncmlkX2xlbmd0aDtcclxuICAgIH1cclxuICAgIGlmKGluZGV4ID49IHRoaXMuZ3JpZF9sZW5ndGgpIHtcclxuICAgICAgYm91bmRlZF9pbmRleCA9IGluZGV4IC0gdGhpcy5ncmlkX2xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYm91bmRlZF9pbmRleFxyXG4gIH1cclxuXHJcbiAgcGlja19tYXRpbmdfcGFydG5lcihncmlkLCBpLCBqKSB7XHJcbiAgICBsZXQgbWF0aW5nX2kgPSB0aGlzLmdldF9yYW5kb21faW50KGkgLSB0aGlzLm1heF9tYXRpbmdfZGlzdGFuY2UsIGkgKyB0aGlzLm1heF9tYXRpbmdfZGlzdGFuY2UpO1xyXG4gICAgbGV0IG1hdGluZ19qID0gdGhpcy5nZXRfcmFuZG9tX2ludChqIC0gdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlLCBqICsgdGhpcy5tYXhfbWF0aW5nX2Rpc3RhbmNlKTtcclxuXHJcbiAgICBtYXRpbmdfaSA9IHRoaXMuZ2V0X2JvdW5kZWRfaW5kZXgobWF0aW5nX2kpO1xyXG4gICAgbWF0aW5nX2ogPSB0aGlzLmdldF9ib3VuZGVkX2luZGV4KG1hdGluZ19qKTtcclxuXHJcbiAgICByZXR1cm4gZ3JpZFttYXRpbmdfaV1bbWF0aW5nX2pdXHJcbiAgfVxyXG5cclxuICBnZXRfb2Zmc3ByaW5nKHBhcmVudDEsIHBhcmVudDIpIHtcclxuICAgICAgdmFyIHAxID0gcGFyZW50MTtcclxuICAgICAgdmFyIHAyID0gcGFyZW50MjtcclxuICAgICAgaWYgKHAxID09IFwiQTFBMVwiICYmIHAyID09IFwiQTFBMVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJBMUExXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHAxID09IFwiQTFBMVwiICYmIHAyID09IFwiQTFBMlwiKSB8fCAocDEgPT0gXCJBMUEyXCIgJiYgcDIgPT0gXCJBMUExXCIpKSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgocDEgPT0gXCJBMUExXCIgJiYgcDIgPT0gXCJBMkEyXCIpIHx8IChwMSA9PSBcIkEyQTJcIiAmJiBwMiA9PSBcIkExQTFcIikpIHtcclxuICAgICAgICAgIHJldHVybiBcIkExQTJcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwMSA9PSBcIkExQTJcIiAmJiBwMiA9PSBcIkExQTJcIikge1xyXG4gICAgICAgICAgdmFyIHJhbmRvbV9udW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgaWYgKHJhbmRvbV9udW1iZXIgPCAwLjI1KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTFBMVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAocmFuZG9tX251bWJlciA+IDAuNzUpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkEyQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIkExQTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICgocDEgPT0gXCJBMUEyXCIgJiYgcDIgPT0gXCJBMkEyXCIpIHx8IChwMSA9PSBcIkEyQTJcIiAmJiBwMiA9PSBcIkExQTJcIikpIHtcclxuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTFBMlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiQTJBMlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHAxID09IFwiQTJBMlwiICYmIHAyID09IFwiQTJBMlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJBMkEyXCI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY29tcHV0ZV9GU2NvcmUoZ3JpZCkge1xyXG4gICAgIGxldCBBMUExID0gMDtcclxuICAgICBsZXQgQTFBMiA9IDA7XHJcbiAgICAgbGV0IEEyQTIgPSAwO1xyXG4gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSA9IGkgKyAxKSB7XHJcbiAgICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpaSA9IGlpICsgMSkge1xyXG4gICAgICAgICAgICAgaWYgKGdyaWRbaV1baWldID09IFwiQTFBMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgQTFBMSA9IEExQTEgKyAxO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgZWxzZSBpZiAoZ3JpZFtpXVtpaV0gPT0gXCJBMUEyXCIpIHtcclxuICAgICAgICAgICAgICAgICBBMUEyID0gQTFBMiArIDE7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBBMkEyID0gQTJBMiArIDE7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIGxldCBOID0gQTFBMSArIEExQTIgKyBBMkEyO1xyXG4gICAgIGxldCBoX28gPSBBMUEyIC8gTjtcclxuICAgICBsZXQgcCA9ICgoMiAqIEExQTEpICsgQTFBMikgLyAoMiAqIE4pO1xyXG4gICAgIGxldCBoX2UgPSAyICogcCAqICgxLXApO1xyXG4gICAgIGxldCBGID0gKGhfZSAtIGhfbykgLyBoX2U7XHJcblxyXG5cclxuICAgICByZXR1cm4gRjtcclxuICB9XHJcblxyXG4gIHJ1bl9zaW11bGF0aW9uKGdyaWQsIGRhdGFfbGluZXMpIHtcclxuICAgIGxldCB0ZW1wX2dyaWQgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlbXBfZ3JpZFtpXSA9IFtdO1xyXG5cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIFNlbGVjdCBtYXRpbmcgcGFydG5lclxyXG4gICAgICAgIGxldCBtYXRpbmdfcGFydG5lciA9IHRoaXMucGlja19tYXRpbmdfcGFydG5lcihncmlkLGksIGopO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm4gb2Zmc3ByaW5nIGdlbm90eXBlXHJcbiAgICAgICAgdGVtcF9ncmlkW2ldW2pdID0gdGhpcy5nZXRfb2Zmc3ByaW5nKGdyaWRbaV1bal0sIG1hdGluZ19wYXJ0bmVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdyaWQubGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRlbXBbal0gPSB0ZW1wX2dyaWRbaV1bal1cclxuICAgICAgfVxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuXHJcbiAgICBkYXRhX2xpbmVzLnB1c2goe3g6IHRoaXMuc2ltdWxhdGlvbl9jb3VudGVyKyssIEY6IHRoaXMuY29tcHV0ZV9GU2NvcmUoZ3JpZCl9KVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('models/spatial-sir',["require", "exports", "aurelia-framework", "lodash"], function (require, exports, aurelia_framework_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpatialSir = (function () {
        function SpatialSir(max_mating_distance, grid_length) {
            this.max_mating_distance = max_mating_distance;
            this.grid_length = grid_length;
            this.params = [];
            this.time_range = [];
            this.p = 0.5;
            this.beta = 0.05;
            this.gamma = 0.15;
            this.simulation_counter = 0;
        }
        SpatialSir.prototype.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        SpatialSir.prototype.init_simulation = function (grid) {
            grid.length = 0;
            this.simulation_counter = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = "S";
                }
                grid.push(temp);
            }
            grid[this.get_random_int(0, this.grid_length - 1)][this.get_random_int(0, this.grid_length - 1)] = "I";
        };
        SpatialSir.prototype.get_bounded_index = function (index) {
            var bounded_index = index;
            if (index < 0) {
                bounded_index = index + this.grid_length;
            }
            if (index >= this.grid_length) {
                bounded_index = index - this.grid_length;
            }
            return bounded_index;
        };
        SpatialSir.prototype.expose_neighbours = function (grid, temp_grid, i, j) {
            for (var n_i = i - 1; n_i <= i + 1; n_i++) {
                for (var n_j = j - 1; n_j <= j + 1; n_j++) {
                    if (n_i == i && n_j == j) {
                        continue;
                    }
                    if (Math.random() <= 0.01) {
                        var r_i = this.get_random_int(0, this.grid_length - 1);
                        var r_j = this.get_random_int(0, this.grid_length - 1);
                        if (r_i == i && r_j == j) {
                            continue;
                        }
                        this.infection(grid, temp_grid, this.get_bounded_index(r_i), this.get_bounded_index(r_j));
                    }
                    else {
                        this.infection(grid, temp_grid, this.get_bounded_index(n_i), this.get_bounded_index(n_j));
                    }
                }
            }
        };
        SpatialSir.prototype.infection = function (grid, temp_grid, i, j) {
            if (grid[i][j] == "S") {
                if (Math.random() < this.beta) {
                    temp_grid[i][j] = "I";
                }
            }
        };
        SpatialSir.prototype.recovery = function (grid, temp_grid, i, j) {
            if (grid[i][j] == "I") {
                if (Math.random() < this.gamma) {
                    temp_grid[i][j] = "R";
                }
            }
        };
        SpatialSir.prototype.run_simulation = function (grid, data_lines) {
            var temp_grid = _.cloneDeep(grid);
            for (var i = 0; i < this.grid_length; i++) {
                for (var j = 0; j < this.grid_length; j++) {
                    if (grid[i][j] == "I") {
                        this.expose_neighbours(grid, temp_grid, i, j);
                        this.recovery(grid, temp_grid, i, j);
                    }
                }
            }
            grid.length = 0;
            for (var i = 0; i < this.grid_length; i++) {
                var temp = [];
                for (var j = 0; j < this.grid_length; j++) {
                    temp[j] = temp_grid[i][j];
                }
                grid.push(temp);
            }
        };
        SpatialSir = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Object, Object])
        ], SpatialSir);
        return SpatialSir;
    }());
    exports.SpatialSir = SpatialSir;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O2dCQUNILENBQUM7WUFDSCxDQUFDO1lBR0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtnQkFDYixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUM7UUFHSCxDQUFDO1FBaEhVLFVBQVU7WUFEdEIsOEJBQVU7O1dBQ0UsVUFBVSxDQWlIdEI7UUFBRCxpQkFBQztLQWpIRCxBQWlIQyxJQUFBO0lBakhZLGdDQUFVIiwiZmlsZSI6Im1vZGVscy9zcGF0aWFsLXNpci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1NhbXBsaW5nfSBmcm9tIFwiLi4vaGVscGVyL3NhbXBsaW5nXCJcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xyXG5kZWNsYXJlIHZhciBsb2JvczogYW55O1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFNwYXRpYWxTaXIge1xyXG4gIHBhcmFtcyA9IFtdO1xyXG4gIHRpbWVfcmFuZ2UgPSBbXTtcclxuXHJcbiAgcCA9IDAuNTtcclxuICBiZXRhID0gMC4wNTtcclxuICBnYW1tYSA9IDAuMTU7XHJcbiAgc2ltdWxhdGlvbl9jb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXhfbWF0aW5nX2Rpc3RhbmNlLCBwcml2YXRlIGdyaWRfbGVuZ3RoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRfcmFuZG9tX2ludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBpbml0X3NpbXVsYXRpb24oZ3JpZCkge1xyXG4gICAgZ3JpZC5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5zaW11bGF0aW9uX2NvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXAgPSBbXVxyXG5cclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmdyaWRfbGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB0ZW1wW2pdID0gXCJTXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdyaWQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG5cclxuICAgIGdyaWRbdGhpcy5nZXRfcmFuZG9tX2ludCgwLHRoaXMuZ3JpZF9sZW5ndGgtMSldW3RoaXMuZ2V0X3JhbmRvbV9pbnQoMCx0aGlzLmdyaWRfbGVuZ3RoLTEpXSA9IFwiSVwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0X2JvdW5kZWRfaW5kZXgoaW5kZXgpIHtcclxuICAgIGxldCBib3VuZGVkX2luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCArIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZihpbmRleCA+PSB0aGlzLmdyaWRfbGVuZ3RoKSB7XHJcbiAgICAgIGJvdW5kZWRfaW5kZXggPSBpbmRleCAtIHRoaXMuZ3JpZF9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvdW5kZWRfaW5kZXhcclxuICB9XHJcblxyXG4gIGV4cG9zZV9uZWlnaGJvdXJzKGdyaWQsIHRlbXBfZ3JpZCwgaSwgaikge1xyXG4gICAgZm9yKGxldCBuX2kgPSBpIC0gMTtuX2kgPD0gaSArIDE7IG5faSsrKSB7XHJcbiAgICAgIGZvcihsZXQgbl9qID0gaiAtIDE7bl9qIDw9IGogKyAxOyBuX2orKykge1xyXG4gICAgICAgIC8vIFRha2UgY2FyZSBvZiBwb3NzaWJsZSBzZWxmdCBpbmZlY3Rpb25cclxuICAgICAgICBpZihuX2kgPT0gaSAmJiBuX2ogPT0gaikge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPD0gMC4wMSkge1xyXG4gICAgICAgICAgbGV0IHJfaSA9IHRoaXMuZ2V0X3JhbmRvbV9pbnQoMCwgdGhpcy5ncmlkX2xlbmd0aCAtMSk7XHJcbiAgICAgICAgICBsZXQgcl9qID0gdGhpcy5nZXRfcmFuZG9tX2ludCgwLCB0aGlzLmdyaWRfbGVuZ3RoIC0xKTtcclxuXHJcbiAgICAgICAgICAvLyBUYWtlIGNhcmUgb2YgcG9zc2libGUgc2VsZnQgaW5mZWN0aW9uXHJcbiAgICAgICAgICBpZihyX2kgPT0gaSAmJiByX2ogPT0gaikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuaW5mZWN0aW9uKGdyaWQsIHRlbXBfZ3JpZCwgdGhpcy5nZXRfYm91bmRlZF9pbmRleChyX2kpLCB0aGlzLmdldF9ib3VuZGVkX2luZGV4KHJfaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaW5mZWN0aW9uKGdyaWQsIHRlbXBfZ3JpZCwgdGhpcy5nZXRfYm91bmRlZF9pbmRleChuX2kpLCB0aGlzLmdldF9ib3VuZGVkX2luZGV4KG5faikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5mZWN0aW9uKGdyaWQsIHRlbXBfZ3JpZCwgaSwgaikge1xyXG4gICAgaWYoZ3JpZFtpXVtqXSA9PSBcIlNcIikge1xyXG4gICAgICBpZihNYXRoLnJhbmRvbSgpIDwgdGhpcy5iZXRhKSB7XHJcbiAgICAgICAgdGVtcF9ncmlkW2ldW2pdID0gXCJJXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY292ZXJ5KGdyaWQsdGVtcF9ncmlkLGksIGopIHtcclxuICAgIGlmKGdyaWRbaV1bal0gPT0gXCJJXCIpIHtcclxuICAgICAgaWYoTWF0aC5yYW5kb20oKSA8IHRoaXMuZ2FtbWEpIHtcclxuICAgICAgICB0ZW1wX2dyaWRbaV1bal0gPSBcIlJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcnVuX3NpbXVsYXRpb24oZ3JpZCwgZGF0YV9saW5lcykge1xyXG4gICAgLy8gRHVwbGljYXRlIHRvIHRlbXBfZ3JpZFxyXG4gICAgbGV0IHRlbXBfZ3JpZCA9IF8uY2xvbmVEZWVwKGdyaWQpO1xyXG5cclxuICAgIC8vIFNpbXVsYXRpb25cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRfbGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vIEluZmVjdCBzdXJyb3VuZGluZyBob3N0c1xyXG4gICAgICAgIGlmKGdyaWRbaV1bal0gPT0gXCJJXCIpIHtcclxuICAgICAgICAgIHRoaXMuZXhwb3NlX25laWdoYm91cnMoZ3JpZCx0ZW1wX2dyaWQsaSwgaik7XHJcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5KGdyaWQsdGVtcF9ncmlkLGksIGopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBncmlkIHdpdGggdmFsdWVzIGZyb20gdGVtcF9ncmlkXHJcbiAgICBncmlkLmxlbmd0aCA9IDA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkX2xlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZF9sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRlbXBbal0gPSB0ZW1wX2dyaWRbaV1bal1cclxuICAgICAgfVxyXG4gICAgICBncmlkLnB1c2godGVtcClcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRhX2xpbmVzLnB1c2goe3g6IHRoaXMuc2ltdWxhdGlvbl9jb3VudGVyKyssIEY6IHRoaXMuY29tcHV0ZV9GU2NvcmUoZ3JpZCl9KVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.skinHTML5.css\"></require><require from=\"./app.css\"></require><require from=\"./navbar\"></require><nav-bar router.bind=\"router\"></nav-bar><loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!drift/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!gauss/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!abbvie/abb.html', ['module'], function(module) { module.exports = "<template><require from=\"../charts/dual-bar-chart\"></require><div>Mitbewerber:<select value.bind=\"other\"><option repeat.for=\"option of other_list\" model.bind=\"option\">${option}</option></select>Kosten:<select value.bind=\"costs\"><option repeat.for=\"option of costs_list\" model.bind=\"option\">${option}</option></select></div><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"uv_selected\">UV</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"ibd_selected\">IBD</label></div><div style=\"width:100%;height:300px\"><dual-bar-chart data.bind=\"data_dual\"></dual-bar-chart></div><div style=\"width:100%;height:300px\"><dual-bar-chart data.bind=\"data_dual_total\"></dual-bar-chart></div></template>"; });
define('text!spatial_sir/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\nrect.S {\n  fill: #dcdcdc;\n}\n\nrect.I {\n  fill: #c82605;\n}\n\nrect.R {\n  fill: #6fc041;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!bars/bars.html', ['module'], function(module) { module.exports = "<template><require from=\"../charts/bar-chart\"></require><require from=\"../charts/dual-bar-chart\"></require><require from=\"../charts/dual-stacked-bar-chart\"></require><div class=\"text-center\"><div class=\"row\"><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"uv_selected\">UV</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"ibd_selected\">IBD</label></div></div><div class=\"row\"><aubs-tabset active.bind=\"active\"><aubs-tab header=\"Stacked bars\"><div style=\"width:100%;height:300px\"><bar-chart data.bind=\"data_prepared\"></bar-chart></div></aubs-tab><aubs-tab header=\"Dual Bars\"><div style=\"width:100%;height:300px\"><dual-bar-chart data.bind=\"data_prepared_dual\"></dual-bar-chart></div></aubs-tab><aubs-tab header=\"Dual Stacked Bars\"><div style=\"width:100%;height:300px\"><dual-stacked-bar-chart data.bind=\"data_prepared_dual\"></dual-stacked-bar-chart></div></aubs-tab><aubs-tab header=\"Total Basis and Max Costs\"><div style=\"width:100%;height:300px\"><bar-chart data.bind=\"data_total\"></bar-chart></div></aubs-tab></aubs-tabset></div></div></template>"; });
define('text!drift/drift.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><h2>Compute Genetic Drift</h2><span>Genetic drift is the change in allele frequencies due to random chance events. The simulations are based on a \"one locus, two alleles\" model, and p denotes the frequency of one of the alleles. <a href=\"http://www.natureincode.com/code/3/visual_genetic_drift_multiple.html\">source</a></span><hr><div class=\"row\"><div class=\"col-md-4\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Total Population Size</label><div class=\"row\"><input type=\"text\" id=\"pop\"></div><label>Chance of a catastrophic event within a generation</label><div class=\"row\"><input type=\"text\" id=\"event\"></div><label>Number of remaining individuals after event</label><div class=\"row\"><input type=\"text\" id=\"leftover\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">Simulations:</label><input style=\"width:50px\" type=\"number\" value.bind=\"simulations\" id=\"param1\" step=\"1\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">Generations:</label><input style=\"width:60px\" type=\"number\" value.bind=\"generations\" id=\"param2\" step=\"1\"><br></div></div><br><button class=\"btn btn-primary btn-block\" click.delegate=\"compute()\">Compute Samples</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_parallel\"><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_p\" redraw.bind=\"redraw_p\" x_attribute=\"x\" y_attribute=\"p\" x_label=\"Generation\" y_label=\"Probability\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" x_label=\"Generation\" y_label=\"Effective Population\" data.bind=\"data_lines\"></line-chart-gauss></div></div></div></div><div></div></template>"; });
define('text!spatial_migration/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\nrect.A1A1 {\n  fill: #fff;\n}\n\nrect.A1A2{\n  fill: #2176c9;\n}\n\nrect.A2A2 {\n  fill: #042029;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1.5px;\n  shape-rendering: crispEdges;\n}\n\n.focusline {\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!empty/no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h3>${message}</h3><h2>Enjoy!</h2></div></template>"; });
define('text!vpsa/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n  opacity: 0.5;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!details/details.html', ['module'], function(module) { module.exports = "<template><require from=\"../charts/dynamic-stacked-bar-chart\"></require><div>Humira/Mitbewerb:<select value.bind=\"med\"><option repeat.for=\"option of med_list\" model.bind=\"option\">${option}</option></select>Szenario:<select value.bind=\"scenario\"><option repeat.for=\"option of scenario_list\" model.bind=\"option\">${option}</option></select>Zusatzerkrankung:<select value.bind=\"add\"><option repeat.for=\"option of add_list\" model.bind=\"option\">${option}</option></select></div><div style=\"width:100%;height:300px\"><dynamic-stacked-bar-chart data.bind=\"data_stacked\"></dynamic-stacked-bar-chart></div></template>"; });
define('text!gauss/gauss.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><h2>Compute SIR Model</h2><span>The SIR model is one of the simplest compartmental models, and many models are derivations of this basic form. The model consists of three compartments– S for the number susceptible, I for the number of infectious, and R for the number recovered (or immune). <a href=\"http://wiki.deductivethinking.com/wiki/Python_Programs_for_Modelling_Infectious_Diseases_book:Chapter_2:Program_2.2\">source</a></span><hr><div class=\"row\"><div class=\"col-md-4\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Rho: Probabilty that an infected person dies before natural death or recovery.</label><div class=\"row\"><input type=\"text\" id=\"rho\"></div><label>V: Per captia death rate from natural causes.</label><div class=\"row\"><input type=\"text\" id=\"v\"></div><label>Mu: Population birth rate.</label><div class=\"row\"><input type=\"text\" id=\"mu\"></div><label>Beta: Transmission rate: Infected -> Susceptible. Includes encounter and transmission rate.</label><div class=\"row\"><input type=\"text\" id=\"beta\"></div><label>Gamma: Recovery rate.</label><div class=\"row\"><input type=\"text\" id=\"gamma\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">S0:</label><input style=\"width:50px\" type=\"number\" value.bind=\"S0\" id=\"param1\" step=\"0.01\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">I0:</label><input style=\"width:60px\" type=\"number\" value.bind=\"I0\" id=\"param2\" step=\"0.0001\"><br></div><div class=\"col-sm-6\"><label for=\"#param5\">Time in years:</label><input style=\"width:50px\" type=\"number\" value.bind=\"NY\" id=\"param5\" step=\"1\"><br></div></div><br><label for=\"#sobol\">Number of sobol samples:</label><input type=\"number\" value.bind=\"sobol_n\" id=\"sobol\" step=\"1\"><br><button class=\"btn btn-primary btn-block\" click.delegate=\"vspa()\">Compute Samples</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_parallel\"><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" y_label=\"Population\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_sus\" redraw.bind=\"redraw_sus\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"sus\" y_label=\"Susceptibility\" data.bind=\"data_lines\"></line-chart-gauss></div></div><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_inf\" redraw.bind=\"redraw_inf\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"inf\" y_label=\"Infected\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_rec\" redraw.bind=\"redraw_rec\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"rec\" y_label=\"Recovered\" data.bind=\"data_lines\"></line-chart-gauss></div></div></div></div><div></div></template>"; });
define('text!spatial_sir/spatial-sir.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><require from=\"../charts/spatial-grid\"></require><h2>Compute Genetic Drift</h2><span>Genetic drift is the change in allele frequencies due to random chance events. The simulations are based on a \"one locus, two alleles\" model, and p denotes the frequency of one of the alleles. <a href=\"http://www.natureincode.com/code/3/visual_genetic_drift_multiple.html\">source</a></span><hr><div class=\"row\"><div class=\"col-md-4\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Total Population Size</label><div class=\"row\"><input type=\"text\" id=\"pop\"></div><label>Chance of a catastrophic event within a generation</label><div class=\"row\"><input type=\"text\" id=\"event\"></div><label>Number of remaining individuals after event</label><div class=\"row\"><input type=\"text\" id=\"leftover\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">Simulations:</label><input style=\"width:50px\" type=\"number\" value.bind=\"simulations\" id=\"param1\" step=\"1\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">Generations:</label><input style=\"width:60px\" type=\"number\" value.bind=\"generations\" id=\"param2\" step=\"1\"><br></div></div><br><button class=\"btn btn-primary btn-block\" click.delegate=\"compute()\">Compute Samples</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_parallel\"><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_p\" redraw.bind=\"redraw_p\" x_attribute=\"x\" y_attribute=\"p\" x_label=\"Generation\" y_label=\"Probability\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" x_label=\"Generation\" y_label=\"Effective Population\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"row\"><spatial-grid data.bind=\"grid\"></spatial-grid></div></div></div></div><div></div></template>"; });
define('text!spatial_migration/spatial-migration.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><require from=\"../charts/spatial-grid\"></require><h2>Compute Genetic Drift</h2><span>Genetic drift is the change in allele frequencies due to random chance events. The simulations are based on a \"one locus, two alleles\" model, and p denotes the frequency of one of the alleles. <a href=\"http://www.natureincode.com/code/3/visual_genetic_drift_multiple.html\">source</a></span><hr><div class=\"row\"><div class=\"col-md-4\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Total Population Size</label><div class=\"row\"><input type=\"text\" id=\"pop\"></div><label>Chance of a catastrophic event within a generation</label><div class=\"row\"><input type=\"text\" id=\"event\"></div><label>Number of remaining individuals after event</label><div class=\"row\"><input type=\"text\" id=\"leftover\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">Simulations:</label><input style=\"width:50px\" type=\"number\" value.bind=\"simulations\" id=\"param1\" step=\"1\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">Generations:</label><input style=\"width:60px\" type=\"number\" value.bind=\"generations\" id=\"param2\" step=\"1\"><br></div></div><br><button class=\"btn btn-primary btn-block\" click.delegate=\"compute()\">Compute Samples</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_parallel\"><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_p\" redraw.bind=\"redraw_p\" x_attribute=\"x\" y_attribute=\"p\" x_label=\"Generation\" y_label=\"Probability\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" x_label=\"Generation\" y_label=\"Effective Population\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"row\"><spatial-grid data.bind=\"grid\"></spatial-grid></div></div></div></div><div></div></template>"; });
define('text!vpsa/vpsa.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-focus\"></require><require from=\"../charts/parallel-coordinates-vertical\"></require><div class=\"row\"><div class=\"col-md-4\"><div><h2>Compute SIR</h2><label>Rho: Probabilty that an infected person dies before natural death or recovery.</label><div class=\"row\"><input type=\"text\" id=\"rho\"></div><label>V: Per captia death rate from natural causes.</label><div class=\"row\"><input type=\"text\" id=\"v\"></div><label>Mu: Population birth rate.</label><div class=\"row\"><input type=\"text\" id=\"mu\"></div><label>Beta: Transmission rate: Infected -> Susceptible. Includes encounter and transmission rate.</label><div class=\"row\"><input type=\"text\" id=\"beta\"></div><label>Gamma: Recovery rate.</label><div class=\"row\"><input type=\"text\" id=\"gamma\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">S0:</label><input style=\"width:50px\" type=\"number\" value.bind=\"S0\" id=\"param1\" step=\"0.01\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">I0:</label><input style=\"width:60px\" type=\"number\" value.bind=\"I0\" id=\"param2\" step=\"0.0001\"><br></div><div class=\"col-sm-6\"><label for=\"#param5\">Time in years:</label><input style=\"width:50px\" type=\"number\" value.bind=\"NY\" id=\"param5\" step=\"1\"><br></div></div><br><label for=\"#sobol\">Number of sobol samples:</label><input type=\"number\" value.bind=\"sobol_n\" id=\"sobol\" step=\"1\"><br><button type=\"button\" click.delegate=\"vspa()\">Compute Samples</button></div><div style=\"width:100%;height:500px\"><parallel-coordinates-vertical brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-vertical></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" data.bind=\"data_lines\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_sus\" redraw.bind=\"redraw_sus\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"sus\" data.bind=\"data_lines\"></line-chart-focus></div></div><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_inf\" redraw.bind=\"redraw_inf\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"inf\" data.bind=\"data_lines\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_rec\" redraw.bind=\"redraw_rec\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"rec\" data.bind=\"data_lines\"></line-chart-focus></div></div></div></div><div></div></template>"; });
define('text!spatial_migration/migration.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-live\"></require><require from=\"../charts/spatial-grid\"></require><h2>Simulate Allele Heredity</h2><span>When individuals mate with genetically similar individuals, inbreeding is the consequence. In this stochastic, individual-based spatial simulation, individuals can only mate with their immediate local neighbors. A higher mating distance shows distributions according to the Hardy-Weinberg principle. <a href=\"http://www.natureincode.com/code/5/spatial_model_inbreeding.html\">source</a></span><hr><div class=\"row\"><div class=\"col-md-6\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Grid Length</label><div class=\"row\"><input type=\"text\" id=\"grid_length\"></div><label>Maximum Mating Distance</label><div class=\"row\"><input type=\"text\" id=\"mating\"></div><br><button class=\"btn btn-primary btn-block\" click.delegate=\"compute()\">Start Simulation</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_grid\"><spatial-grid data.bind=\"data_grid\" redraw.bind=\"redraw\"></spatial-grid></div><br><div aubs-collapse=\"collapsed.bind: collapsed_out\"><button class=\"btn btn-warning btn-block\" click.delegate=\"stopSimulation()\">Stop Simulation</button></div></div><div class=\"col-md-6\"><div class=\"row\"><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-live brushing.bind=\"brushing_p\" redraw.bind=\"redraw_p\" x_attribute=\"x\" y_attribute=\"F\" x_label=\"Timestep\" y_label=\"FScore - Heterozygosity\" data.bind=\"data_FScore\"></line-chart-live></div><div class=\"row\"></div></div></div></div><div></div></template>"; });
define('text!spatial_sir/epidemics.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-gauss\"></require><require from=\"../charts/parallel-coordinates-gauss\"></require><require from=\"../charts/spatial-grid\"></require><h2>Compute Epidemics using SIR model</h2><span>This is a spatial simulation of an epidemic using the SIR (susceptible, infected, recovered) model. THe small world property is used to model long distance infections. <a href=\"http://www.natureincode.com/code/7/sir_small_world.html\">source</a></span><hr><div class=\"row\"><div class=\"col-md-4\"><button class=\"btn btn-default btn-block\" click.delegate=\"switch()\">Toggle Parameter Selection</button><div aubs-collapse=\"collapsed.bind: collapsed_input\"><div style=\"margin-left:15px;margin-right:15px\"><label>Total Population Size</label><div class=\"row\"><input type=\"text\" id=\"pop\"></div><label>Chance of a catastrophic event within a generation</label><div class=\"row\"><input type=\"text\" id=\"event\"></div><label>Number of remaining individuals after event</label><div class=\"row\"><input type=\"text\" id=\"leftover\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">Simulations:</label><input style=\"width:50px\" type=\"number\" value.bind=\"simulations\" id=\"param1\" step=\"1\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">Generations:</label><input style=\"width:60px\" type=\"number\" value.bind=\"generations\" id=\"param2\" step=\"1\"><br></div></div><br><button class=\"btn btn-primary btn-block\" click.delegate=\"compute()\">Compute Samples</button></div></div><div aubs-collapse=\"collapsed.bind: collapsed_parallel\"><div style=\"width:100%;height:500px\"><parallel-coordinates-gauss brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-gauss></div><spatial-grid data.bind=\"data_grid\"></spatial-grid></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_p\" redraw.bind=\"redraw_p\" x_attribute=\"x\" y_attribute=\"p\" x_label=\"Generation\" y_label=\"Probability\" data.bind=\"data_lines\"></line-chart-gauss></div><div class=\"row\" style=\"width:100%;height:300px\"><line-chart-gauss brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" x_label=\"Generation\" y_label=\"Effective Population\" data.bind=\"data_lines\"></line-chart-gauss></div></div></div></div><div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
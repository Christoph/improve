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
                { route: "abb/", moduleId: "bars/bars", nav: true, title: "Abb", name: "abb" },
                { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR", name: "vpsa" }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsV0FBTSxHQUFHLHVCQUFNLENBQUM7UUFZbEIsQ0FBQztRQVZDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFNO1lBQy9DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7Z0JBQ3pFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUM5RSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTthQUNuRixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQ0gsVUFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICByb3V0ZXIgPSBSb3V0ZXI7XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBcIkltcHJvdmVcIjtcbiAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgIHsgcm91dGU6IFwiXCIsIG1vZHVsZUlkOiBcImVtcHR5L25vLXNlbGVjdGlvblwiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlNlbGVjdFwiIH0sXG4gICAgICAgICAgeyByb3V0ZTogXCJhYmIvXCIsIG1vZHVsZUlkOiBcImJhcnMvYmFyc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIkFiYlwiLCBuYW1lOiBcImFiYlwiIH0sXG4gICAgICAgICAgeyByb3V0ZTogXCJ2cHNhL1wiLCBtb2R1bGVJZDogXCJ2cHNhL3Zwc2FcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTSVJcIiwgbmFtZTogXCJ2cHNhXCIgfVxuICAgICAgXSk7XG5cbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEJELDhCQWdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbihcImF1cmVsaWEtY29tcHV0ZWRcIilcbiAgICAucGx1Z2luKFwiZDMtZXh0ZW5kZWRcIilcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('bars/bars',["require", "exports", "aurelia-framework", "papaparse", "jquery"], function (require, exports, aurelia_framework_1, papa) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bars = (function () {
        function bars() {
            this.message = "SA";
            this.data = [];
            this.data_prepared = [];
            this.uv_selected = true;
            this.ibd_selected = true;
        }
        bars.prototype.attached = function () {
            var self = this;
            $.get("data/data.csv", function (data) {
                papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        self.data = results.data;
                        self.prepareData();
                    }
                });
            });
        };
        bars.prototype.prepareData = function () {
            var _this = this;
            var meds = Array.from(new Set(this.data.map(function (x) { return x["Med"]; })));
            meds.forEach(function (m) {
                var all_meds = _this.data.filter(function (d) { return d["Med"] == m && d["Typ"] == "Standart"; });
                var med = {};
                med["x"] = m;
                all_meds.forEach(function (x) {
                    if (_this.ibd_selected && x["Add"] == "IBD") {
                        med["IBD"] = +x.KA + +x.FA;
                    }
                    if (_this.uv_selected && x["Add"] == "UV") {
                        med["UV"] = +x.KA + +x.FA;
                    }
                });
                if (Object.keys(med).length > 1) {
                    _this.data_prepared.push(med);
                }
            });
        };
        bars = __decorate([
            aurelia_framework_1.autoinject
        ], bars);
        return bars;
    }());
    exports.bars = bars;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcnMvYmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFLQTtRQURBO1lBRUUsWUFBTyxHQUFHLElBQUksQ0FBQTtZQUNkLFNBQUksR0FBUSxFQUFFLENBQUM7WUFDZixrQkFBYSxHQUFRLEVBQUUsQ0FBQztZQUV4QixnQkFBVyxHQUFHLElBQUksQ0FBQztZQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQXVDdEIsQ0FBQztRQXJDQyx1QkFBUSxHQUFSO1lBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDZixNQUFNLEVBQUUsSUFBSTtvQkFDWixjQUFjLEVBQUUsSUFBSTtvQkFDcEIsUUFBUSxFQUFFLFVBQVMsT0FBTzt3QkFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO3dCQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7b0JBQ3BCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsMEJBQVcsR0FBWDtZQUFBLGlCQXNCQztZQXJCQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ1osSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLEVBQXZDLENBQXVDLENBQUMsQ0FBQTtnQkFDN0UsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUM3QixDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUM1QixDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUVGLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBNUNVLElBQUk7WUFEaEIsOEJBQVU7V0FDRSxJQUFJLENBNkNoQjtRQUFELFdBQUM7S0E3Q0QsQUE2Q0MsSUFBQTtJQTdDWSxvQkFBSSIsImZpbGUiOiJiYXJzL2JhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAqIGFzIHBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuaW1wb3J0IFwianF1ZXJ5XCJcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBiYXJzIHtcbiAgbWVzc2FnZSA9IFwiU0FcIlxuICBkYXRhID0gPGFueT5bXTtcbiAgZGF0YV9wcmVwYXJlZCA9IDxhbnk+W107XG5cbiAgdXZfc2VsZWN0ZWQgPSB0cnVlO1xuICBpYmRfc2VsZWN0ZWQgPSB0cnVlO1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgICQuZ2V0KFwiZGF0YS9kYXRhLmNzdlwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcGFwYS5wYXJzZShkYXRhLCB7XG4gICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICAgc2VsZi5kYXRhID0gcmVzdWx0cy5kYXRhXG4gICAgICAgICAgc2VsZi5wcmVwYXJlRGF0YSgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJlcGFyZURhdGEoKSB7XG4gICAgbGV0IG1lZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kYXRhLm1hcCh4ID0+IHsgcmV0dXJuIHhbXCJNZWRcIl19KSkpO1xuXG4gICAgbWVkcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbGV0IGFsbF9tZWRzID0gdGhpcy5kYXRhLmZpbHRlcihkID0+IGRbXCJNZWRcIl0gPT0gbSAmJiBkW1wiVHlwXCJdID09IFwiU3RhbmRhcnRcIilcbiAgICAgIGxldCBtZWQgPSB7fTtcbiAgICAgIG1lZFtcInhcIl0gPSBtO1xuXG4gICAgICBhbGxfbWVkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBpZih0aGlzLmliZF9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiSUJEXCIpIHtcbiAgICAgICAgICBtZWRbXCJJQkRcIl0gPSAreC5LQSArICt4LkZBO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy51dl9zZWxlY3RlZCAmJiB4W1wiQWRkXCJdID09IFwiVVZcIikge1xuICAgICAgICAgIG1lZFtcIlVWXCJdID0gK3guS0EgKyAreC5GQTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYoT2JqZWN0LmtleXMobWVkKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuZGF0YV9wcmVwYXJlZC5wdXNoKG1lZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
            this.message = "No Selection";
        }
        NoSelection = __decorate([
            aurelia_framework_1.autoinject
        ], NoSelection);
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5L25vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQURBO1lBRUUsWUFBTyxHQUFHLGNBQWMsQ0FBQTtRQUMxQixDQUFDO1FBRlksV0FBVztZQUR2Qiw4QkFBVTtXQUNFLFdBQVcsQ0FFdkI7UUFBRCxrQkFBQztLQUZELEFBRUMsSUFBQTtJQUZZLGtDQUFXIiwiZmlsZSI6ImVtcHR5L25vLXNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgTm9TZWxlY3Rpb24ge1xuICBtZXNzYWdlID0gXCJObyBTZWxlY3Rpb25cIlxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBdUNFLHdCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUFyQ2hDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xFLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBb0JaLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLGNBQVMsR0FBRyxHQUFHLENBQUM7WUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7WUFDakIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFDbkIsaUJBQVksR0FBRyxHQUFHLENBQUM7WUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUdELGlDQUFRLEdBQVI7WUFBQSxpQkF3QkM7WUF2QkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFHSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FB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TSxFQUFFOztXQUNJLGNBQWMsQ0F5VDFCO1FBQUQscUJBQUM7S0F6VEQsQUF5VEMsSUFBQTtJQXpUWSx3Q0FBYyIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydC1mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydEZvY3VzIHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogNjAsIGJvdHRvbTogMzUsIGxlZnQ6IDYwLCBtaWRkbGU6IDIwIH07XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICBAYmluZGFibGUgeV9hdHRyaWJ1dGUgPSBcInlcIjtcbiAgQGJpbmRhYmxlIHJlZHJhdyA9IDA7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBicnVzaGluZztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSBsaW5lY2hhcnQ7XG4gIHByaXZhdGUgZm9jdXM7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIGZvY3VzX3g7XG4gIHByaXZhdGUgdmFsdWVsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcbiAgcHJpdmF0ZSBicnVzaDtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmxjX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuODtcbiAgICAgIHRoaXMuZm9jdXNfd2lkdGggPSB0aGlzLndpZHRoICogMC4yIC0gdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMubGNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmZvY3VzX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmZvY3VzX29mZnNldCA9IHRoaXMubGNfd2lkdGggKyB0aGlzLm1hcmdpbi5taWRkbGUgKyB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKS5yZW1vdmUoKVxuICAgICAgICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMubGluZWNoYXJ0ID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLmxjX3dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmxjX2hlaWdodClcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIHRoaXMuZm9jdXMgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuZm9jdXNfb2Zmc2V0ICsgXCIsIFwiKyB0aGlzLm1hcmdpbi50b3AgK1wiKVwiKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdGhpcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmxjX3dpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5mb2N1c194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoWzAsIHRoaXMuZm9jdXNfd2lkdGhdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgIC8vIHggYXhpcyBsYWJlbFxuICAgICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgLnRleHQoXCJkYXlzXCIpO1xuXG4gICAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLndpZHRoLzIpXG4gICAgICAgICAgICAudGV4dChcImRheVwiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMubGluZWNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZX0pO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiKyB0aGlzLmZvY3VzX3dpZHRoICtcIiwgMClcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAuYXR0cihcInhcIiwgdGhpcy5mb2N1c193aWR0aClcbiAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIHRoaXMueV9hdHRyaWJ1dGV9KTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgbGV0IHlfYXR0cmlidXRlID0gdGhpcy55X2F0dHJpYnV0ZVxuXG4gICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnJ1c2hcIilcbiAgICAgIC5jYWxsKFxuICAgICAgICAgIGQzLmJydXNoWSgpXG4gICAgICAgICAgLmV4dGVudChbWzAsIDBdLCBbdGhpcy5mb2N1c193aWR0aCwgdGhpcy5mb2N1c19oZWlnaHRdXSlcbiAgICAgICAgICAub24oXCJicnVzaFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSA8YW55PltdXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH07IC8vIElnbm9yZSBlbXB0eSBzZWxlY3Rpb25zLlxuXG4gICAgICAgICAgICAgIGxldCBleHRlbnQgPSBkMy5ldmVudC5zZWxlY3Rpb24ubWFwKHRoaXMueS5pbnZlcnQpO1xuICAgICAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChkW1wiaWRcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBvdXRcbiAgICAgIH0pXG4gICAgICAub24oXCJlbmRcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmJydXNoaW5nID0gPGFueT5bXVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfTsgLy8gSWdub3JlIGVtcHR5IHNlbGVjdGlvbnMuXG5cbiAgICAgICAgICBsZXQgZXh0ZW50ID0gZDMuZXZlbnQuc2VsZWN0aW9uLm1hcCh0aGlzLnkuaW52ZXJ0KTtcbiAgICAgICAgICBsZXQgb3V0ID0gPGFueT5bXVxuXG4gICAgICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIGlmKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPj0gZXh0ZW50WzFdICYmIGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXVt5X2F0dHJpYnV0ZV0gPD0gZXh0ZW50WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGRbXCJpZFwiXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IG91dFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSGlnaGxpZ2h0KCkge1xuXG4gICAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeF9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuXG4gICAgbGV0IGZvY3VzX2RhdGEgPSA8YW55PiBbXTtcblxuICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZDogYW55W10pID0+IHtcbiAgICAgICAgIGZvY3VzX2RhdGEucHVzaChkW1wiZGF0YVwiXVtkW1wiZGF0YVwiXS5sZW5ndGgtMV0pXG4gICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIC8vIGxldCBiaW5zID0gdGhpcy5oaXN0b2dyYW0oZm9jdXNfZGF0YSlcbiAgICBsZXQgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAgIC52YWx1ZSgoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSlcbiAgICAgICAgLmRvbWFpbih0aGlzLnkuZG9tYWluKCkpXG4gICAgICAgIC50aHJlc2hvbGRzKGQzLnJhbmdlKHlfbWluLCB5X21heCwgKHlfbWF4IC0geV9taW4pIC8gMjApKVxuICAgICAgICAoZm9jdXNfZGF0YSk7XG5cbiAgICB0aGlzLmZvY3VzX3guZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueVtdKSA9PiBkLmxlbmd0aCldKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKS5yZW1vdmUoKTtcbiAgICBsZXQgY2hhcnQgPSB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCJwYXRoLmxpbmVcIilcbiAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpO1xuICAgIGxldCBmb2N1c19jaGFydCA9IHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwicmVjdC5iYXJzXCIpXG4gICAgICAgIC5kYXRhKGJpbnMpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHRoaXMueSkpO1xuICAgIHRoaXMuZm9jdXMuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy5mb2N1c194KS50aWNrcygyKSk7XG5cbiAgICAvLyBMaW5lY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGJhcnNcbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkW1wiZGF0YVwiXSkpO1xuXG4gICAgLy8gQmFyY2hhcnRcbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGZvY3VzX2NoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIC8vIEFkZCBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgLy8gICAuYXR0cihcInhcIiwgMSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiB7XG5cdFx0ICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkLngxKSArIFwiKVwiOyB9KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geyByZXR1cm4gIHRoaXMuZm9jdXNfeChkLmxlbmd0aCk7IH0pXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnkoZC54MCkgLSB0aGlzLnkoZC54MSkgLSAxO1xuICAgICAgfSlcbiAgICAgIC5tb3ZlVG9CYWNrKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
                    .domain(ext);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy12ZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQThCSSxxQ0FBWSxPQUFPLEVBQVUsYUFBYTtZQUExQyxpQkFFQztZQUY0QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTVCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7WUFNWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1lBUVosTUFBQyxHQUFHLEVBQUUsQ0FBQztZQUVQLGVBQVUsR0FBUSxFQUFFLENBQUM7WUFNckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLFdBQU0sR0FBRyxHQUFHLENBQUM7WUFzRGIsZ0JBQVcsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztnQkFDNUIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFVBQWUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBZSxDQUFDO29CQUNsQixJQUFJLGVBQWUsR0FBSSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM5QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7b0JBQ3BCLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFeEIsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sR0FB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LENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQzNCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUVsQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQTlPUztZQUFULDRCQUFROzttRUFBdUQ7UUFDdEQ7WUFBVCw0QkFBUTs7bUVBQVk7UUFHaUM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3FFQUFVO1FBR3JEO1lBQVQsNEJBQVE7O2lFQUFXO1FBVFgsMkJBQTJCO1lBRnZDLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7WUFDOUIsMEJBQU0sRUFBRTs7V0FDSSwyQkFBMkIsQ0FpUHZDO1FBQUQsa0NBQUM7S0FqUEQsQUFpUEMsSUFBQTtJQWpQWSxrRUFBMkIiLCJmaWxlIjoiY2hhcnRzL3BhcmFsbGVsLWNvb3JkaW5hdGVzLXZlcnRpY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgcGFyYWxsZWxDb29yZGluYXRlc1ZlcnRpY2FsIHtcbiAgICAvLyBPbmUtV2F5XG4gICAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiA2MCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA0MCB9O1xuICAgIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gICAgLy8gVHdvLVdheVxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gICAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gICAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAgIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gICAgLy8gRDMgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBzdmc7XG4gICAgcHJpdmF0ZSB4ID0ge307XG4gICAgcHJpdmF0ZSB5O1xuICAgIHByaXZhdGUgZGltZW5zaW9ucyA9IDxhbnk+W107XG4gICAgcHJpdmF0ZSBsaW5lO1xuICAgIHByaXZhdGUgYmFja2dyb3VuZDtcbiAgICBwcml2YXRlIGZvcmVncm91bmQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgcHJpdmF0ZSB4X3NpemUgPSA1MDA7XG4gICAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gICAgcHJpdmF0ZSB3aWR0aDtcbiAgICBwcml2YXRlIGhlaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBncmFwaFxuICAgICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICB9XG5cbiAgICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgICBpZih0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgd2F0Y2hlciBhZnRlciBkaXNwb3NpbmcgdGhlIGNsYXNzXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gRDMgZnVuY3Rpb25zXG5cbiAgICAvLyBEcmF3IHRoZSBsaW5lc1xuICAgIHByaXZhdGUgcGF0aChkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmUodGhpcy5kaW1lbnNpb25zLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnhbcF0oZFtwXSksIHRoaXMueShwKV07IH0pKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXh0ZXJuYWwgdmFyaWFibGVzIHdpdGggY3VycmVudCBicnVzaGVzXG4gICAgcHJpdmF0ZSBnZXRCcnVzaGluZyA9IChnLCB4LCBkYXQpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSA8YW55PltdO1xuICAgICAgICBsZXQgYnJ1c2hlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICBnLnNlbGVjdEFsbChcIi5icnVzaFwiKVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICBsZXQgYnJ1c2hfc2VsZWN0aW9uID0gIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpXG4gICAgICAgICAgICAgIGxldCBleHRlbnQgPSA8YW55PltdXG4gICAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSA8YW55PltdO1xuXG4gICAgICAgICAgICAgIGlmKGJydXNoX3NlbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBleHRlbnQgPSBbeFtkXS5pbnZlcnQoYnJ1c2hfc2VsZWN0aW9uWzFdKSwgeFtkXS5pbnZlcnQoYnJ1c2hfc2VsZWN0aW9uWzBdKV1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGJydXNoZWRfZWxlbWVudHMgPSBkYXQuZmlsdGVyKHggPT4geFtcImRhdGFcIl1bZF0gPj0gZXh0ZW50WzBdICYmIHhbXCJkYXRhXCJdW2RdIDw9IGV4dGVudFsxXSlcblxuICAgICAgICAgICAgICBicnVzaGVzLnNldChkLCBicnVzaGVkX2VsZW1lbnRzLm1hcCh4ID0+IHhbXCJpZFwiXSkpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsZXQgYnJ1c2hlZCA9IF8uaW50ZXJzZWN0aW9uKC4uLkFycmF5LmZyb20oYnJ1c2hlcy52YWx1ZXMoKSkpO1xuXG4gICAgICAgICAgLy8gSWYgbm8gZWxlbWVudCBpcyBicnVzaGVkIHJldHVybiBhIHggdG8gbGV0IHRoZSBzeXN0ZW0ga25vdyB0aGF0XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGJydXNoZXMgYWN0aXZlXG4gICAgICAgICAgaWYoYnJ1c2hlcy5zaXplID4gMCAmJiBicnVzaGVkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgIGJydXNoZWQucHVzaChcInhcIilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmJydXNoaW5nID0gYnJ1c2hlZDtcbiAgICB9XG5cbiAgICBpbml0Q2hhcnQoKSB7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgY2hhcnQgZGl2IG9mIHRoZSBwYWdlXG4gICAgICAgIC8vIGFwcGVuZCBhICdncm91cCcgZWxlbWVudCB0byAnc3ZnJ1xuICAgICAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICAgICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgeCByYW5nZVxuICAgICAgICB0aGlzLnkgPSBkMy5zY2FsZVBvaW50KClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKTtcblxuICAgICAgICAvLyBCYXNpYyBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVZKTtcbiAgICB9XG5cbiAgICB1cGRhdGVIaWdobGlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmxpbmUuaGlnaGxpZ2h0XCIpLm1vdmVUb0Zyb250KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGFzZXQgZGltZW5zaW9uczogS2V5cyBvZiB0aGUgbWFwXG4gICAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkMy5rZXlzKHRoaXMuZGF0YVswXVtcImRhdGFcIl0pLmZpbHRlcigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkICE9IFwibmFtZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjb3JyZXNwb25kaW5nIHkgYXhpc1xuICAgICAgICAvLyBDdXJyZW50bHkgb25seSBsaW5lYXIgdmFsdWVzXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5tYXAoKGRpbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4dCA9IDxhbnk+IGQzLmV4dGVudCh0aGlzLmRhdGEsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbXCJkYXRhXCJdW2RpbV07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihleHRbMF0gPT0gZXh0WzFdKSB7XG4gICAgICAgICAgICAgICAgZXh0WzBdIC09IGV4dFswXSowLjE7XG4gICAgICAgICAgICAgICAgZXh0WzFdICs9IGV4dFsxXSowLjE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMueFtkaW1dID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAucmFuZ2UoW3RoaXMud2lkdGgsIDBdKVxuICAgICAgICAgICAgICAgICAgICAuZG9tYWluKGV4dClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB4IGF4aXNcbiAgICAgICAgdGhpcy55LmRvbWFpbih0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBncmV5IGJhY2tncm91bmQgbGluZXMgZm9yIGNvbnRleHQuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIilcblxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImhpZ2hsaWdodFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGRbXCJkYXRhXCJdKX0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZHVlIHRvIHRoZSBuYXR1cmUgb2YgVFMgYW5kIEQzXG5cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IGRhdCA9IHRoaXMuZGF0YVxuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMueShkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYXhpc1RvcCh4W2RdKSk7XG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRpbHRlcyBmb3IgdGhlIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFgoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1swLCAtOV0sIFt3aWR0aCwgOV1dKVxuICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuXG4gICAgICAgICAgICAgICAgICAgICBnZXRCcnVzaGluZyhnLCB4LCBkYXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG5cbiAgICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHgsIGRhdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('charts/line-chart-focus0',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQXVDRSx3QkFBWSxPQUFPLEVBQVUsYUFBYTtZQUFiLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1lBckNoQyxXQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsRSxnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1lBTVgsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQW9CWixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxjQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ25CLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1lBR3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCxpQ0FBUSxHQUFSO1lBQUEsaUJBd0JDO1lBdkJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBR0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENB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QU0sRUFBRTs7V0FDSSxjQUFjLENBeVQxQjtRQUFELHFCQUFDO0tBelRELEFBeVRDLElBQUE7SUF6VFksd0NBQWMiLCJmaWxlIjoiY2hhcnRzL2xpbmUtY2hhcnQtZm9jdXMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Rm9jdXMge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuICBAYmluZGFibGUgcmVkcmF3ID0gMDtcblxuICAvLyBUd28tV2F5XG4gIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nO1xuXG4gIC8vIE9ic2VydmVkIFZhcmlhYmxlc1xuICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gIHByaXZhdGUgZWxlbWVudDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgLy8gRDMgdmFyaWFibGVzXG4gIHByaXZhdGUgc3ZnO1xuICBwcml2YXRlIGxpbmVjaGFydDtcbiAgcHJpdmF0ZSBmb2N1cztcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG4gIHByaXZhdGUgZm9jdXNfeDtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG4gIHByaXZhdGUgaGlzdG9ncmFtO1xuICBwcml2YXRlIGJydXNoO1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgcHJpdmF0ZSBsY193aWR0aCA9IDUwO1xuICBwcml2YXRlIGxjX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c193aWR0aCA9IDUwO1xuICBwcml2YXRlIGZvY3VzX2hlaWdodCA9IDUwMDtcbiAgcHJpdmF0ZSBmb2N1c19vZmZzZXQgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLnhfc2l6ZSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICAgIHRoaXMubGNfd2lkdGggPSB0aGlzLndpZHRoICogMC44O1xuICAgICAgdGhpcy5mb2N1c193aWR0aCA9IHRoaXMud2lkdGggKiAwLjIgLSB0aGlzLm1hcmdpbi5sZWZ0O1xuXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgdGhpcy5sY19oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgIHRoaXMuZm9jdXNfaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICAgIHRoaXMuZm9jdXNfb2Zmc2V0ID0gdGhpcy5sY193aWR0aCArIHRoaXMubWFyZ2luLm1pZGRsZSArIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICBkYXRhTXV0YXRlZChzcGxpY2VzKSB7XG4gICAgICBpZih0aGlzLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpLnJlbW92ZSgpXG4gICAgICAgICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuYmFyXCIpLnJlbW92ZSgpXG4gICAgICB9XG4gIH1cblxuICByZWRyYXdDaGFuZ2VkKCkge1xuICAgICAgaWYodGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hsaWdodCgpO1xuICAgICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5saW5lY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMubGNfaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIrIHRoaXMubWFyZ2luLnRvcCArXCIpXCIpO1xuXG4gICAgdGhpcy5mb2N1cyA9IHRoaXMuc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5mb2N1c19vZmZzZXQgKyBcIiwgXCIrIHRoaXMubWFyZ2luLnRvcCArXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMubGNfd2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICB0aGlzLmZvY3VzX3ggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbMCwgdGhpcy5mb2N1c193aWR0aF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQrMjYpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAudGV4dChcImRheXNcIik7XG5cbiAgICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAgIC50ZXh0KFwiZGF5XCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiB0aGlzLnlfYXR0cmlidXRlfSk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIrIHRoaXMuZm9jdXNfd2lkdGggK1wiLCAwKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgIC5hdHRyKFwieFwiLCB0aGlzLmZvY3VzX3dpZHRoKVxuICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZX0pO1xuXG4gICAgLy8gZGVmaW5lIHRoZSBsaW5lXG4gICAgdGhpcy52YWx1ZWxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoKGQpID0+IHRoaXMueChkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICAgICAgLnkoKGQpID0+IHRoaXMueShkW3RoaXMueV9hdHRyaWJ1dGVdKSk7XG5cbiAgICBsZXQgeV9hdHRyaWJ1dGUgPSB0aGlzLnlfYXR0cmlidXRlXG5cbiAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgLmNhbGwoXG4gICAgICAgICAgZDMuYnJ1c2hZKClcbiAgICAgICAgICAuZXh0ZW50KFtbMCwgMF0sIFt0aGlzLmZvY3VzX3dpZHRoLCB0aGlzLmZvY3VzX2hlaWdodF1dKVxuICAgICAgICAgIC5vbihcImJydXNoXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgdGhpcy5icnVzaGluZyA9IDxhbnk+W11cbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfTsgLy8gSWdub3JlIGVtcHR5IHNlbGVjdGlvbnMuXG5cbiAgICAgICAgICAgICAgbGV0IGV4dGVudCA9IGQzLmV2ZW50LnNlbGVjdGlvbi5tYXAodGhpcy55LmludmVydCk7XG4gICAgICAgICAgICAgIGxldCBvdXQgPSA8YW55PltdXG5cbiAgICAgICAgICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoLTFdW3lfYXR0cmlidXRlXSA+PSBleHRlbnRbMV0gJiYgZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoLTFdW3lfYXR0cmlidXRlXSA8PSBleHRlbnRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGRbXCJpZFwiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgdGhpcy5icnVzaGluZyA9IG91dFxuICAgICAgfSlcbiAgICAgIC5vbihcImVuZFwiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuICAgICAgICAgIGlmICghZDMuZXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSA8YW55PltdXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9OyAvLyBJZ25vcmUgZW1wdHkgc2VsZWN0aW9ucy5cblxuICAgICAgICAgIGxldCBleHRlbnQgPSBkMy5ldmVudC5zZWxlY3Rpb24ubWFwKHRoaXMueS5pbnZlcnQpO1xuICAgICAgICAgIGxldCBvdXQgPSA8YW55PltdXG5cbiAgICAgICAgICB0aGlzLmxpbmVjaGFydC5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgaWYoZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoLTFdW3lfYXR0cmlidXRlXSA+PSBleHRlbnRbMV0gJiYgZFtcImRhdGFcIl1bZFtcImRhdGFcIl0ubGVuZ3RoLTFdW3lfYXR0cmlidXRlXSA8PSBleHRlbnRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goZFtcImlkXCJdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmJydXNoaW5nID0gb3V0XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVIaWdobGlnaHQoKSB7XG5cbiAgICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKVxuICAgICAgICAgIC5jbGFzc2VkKFwiaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAxKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jbGFzc2VkKFwiYmFja2dyb3VuZFwiLCBmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lLmhpZ2hsaWdodFwiKS5tb3ZlVG9Gcm9udCgpO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgLy8gVXBkYXRlIGRvbWFpbnNcbiAgICBsZXQgeF9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5W1wiZGF0YVwiXSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB4X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheVtcImRhdGFcIl0sIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeV9taW4gPSBkMy5taW4odGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1pbjxhbnksIGFueT4oYXJyYXlbXCJkYXRhXCJdLCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG5cbiAgICBsZXQgZm9jdXNfZGF0YSA9IDxhbnk+IFtdO1xuXG4gICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkOiBhbnlbXSkgPT4ge1xuICAgICAgICAgZm9jdXNfZGF0YS5wdXNoKGRbXCJkYXRhXCJdW2RbXCJkYXRhXCJdLmxlbmd0aC0xXSlcbiAgICAgfSlcblxuICAgIHRoaXMueC5kb21haW4oW3hfbWluLCB4X21heF0pO1xuICAgIHRoaXMueS5kb21haW4oW3lfbWluLCB5X21heF0pO1xuXG4gICAgLy8gbGV0IGJpbnMgPSB0aGlzLmhpc3RvZ3JhbShmb2N1c19kYXRhKVxuICAgIGxldCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgICAgLnZhbHVlKChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKVxuICAgICAgICAuZG9tYWluKHRoaXMueS5kb21haW4oKSlcbiAgICAgICAgLnRocmVzaG9sZHMoZDMucmFuZ2UoeV9taW4sIHlfbWF4LCAoeV9tYXggLSB5X21pbikgLyAyMCkpXG4gICAgICAgIChmb2N1c19kYXRhKTtcblxuICAgIHRoaXMuZm9jdXNfeC5kb21haW4oWzAsIGQzLm1heChiaW5zLCAoZDogYW55W10pID0+IGQubGVuZ3RoKV0pO1xuXG4gICAgLy8gU2VsZWN0IGNoYXJ0XG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwicGF0aC5saW5lXCIpLnJlbW92ZSgpO1xuICAgIGxldCBjaGFydCA9IHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZVwiKVxuICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKCk7XG4gICAgbGV0IGZvY3VzX2NoYXJ0ID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCJyZWN0LmJhcnNcIilcbiAgICAgICAgLmRhdGEoYmlucylcblxuICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzUmlnaHQodGhpcy55KSk7XG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLmZvY3VzX3gpLnRpY2tzKDIpKTtcblxuICAgIC8vIExpbmVjaGFydFxuICAgIC8vIFJlbW92ZSBiYXJzXG4gICAgY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gQWRkIGFuZCB1cGRhdGUgYmFyc1xuICAgIGNoYXJ0LmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmNsYXNzZWQoXCJoaWdobGlnaHRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZChcImJhY2tncm91bmRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgIGlmKGRbXCJoaWdobGlnaHRcIl0gPT0gMikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH0pXG4gICAgICAuYXR0cihcImRcIiwgKGQpID0+IHRoaXMudmFsdWVsaW5lKGRbXCJkYXRhXCJdKSk7XG5cbiAgICAvLyBCYXJjaGFydFxuICAgIC8vIFJlbW92ZSBiYXJzXG4gICAgZm9jdXNfY2hhcnQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgLy8gQWRkIGJhcnNcbiAgICBmb2N1c19jaGFydC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAvLyAgIC5hdHRyKFwieFwiLCAxKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcblx0XHQgIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy55KGQueDEpICsgXCIpXCI7IH0pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB7IHJldHVybiAgdGhpcy5mb2N1c194KGQubGVuZ3RoKTsgfSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMueShkLngwKSAtIHRoaXMueShkLngxKSAtIDE7XG4gICAgICB9KVxuICAgICAgLm1vdmVUb0JhY2soKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var barChart = (function () {
        function barChart(element, bindingEngine) {
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
        barChart.prototype.attached = function () {
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
        barChart.prototype.dataMutated = function (splices) {
            if (this.data.length > 1) {
                this.updateChart();
            }
            else {
                this.svg.selectAll(".bar").remove();
            }
        };
        barChart.prototype.redrawChanged = function () {
            if (this.data.length > 1) {
                this.updateHighlight();
            }
        };
        barChart.prototype.unbind = function () {
            this.subscription.dispose();
        };
        barChart.prototype.initChart = function () {
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
            this.barchart.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.barchart.append("g")
                .attr("class", "yAxis");
            this.barchart.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text("Kosten");
        };
        barChart.prototype.updateHighlight = function () {
        };
        barChart.prototype.updateChart = function () {
            var self = this;
            var keys = ["UV", "IBD"];
            var totals = this.data.map(function (x) {
                var s = 0;
                keys.forEach(function (y) {
                    s = s + +x[y];
                });
                return s;
            });
            this.x.domain(this.data.map(function (d) { return d.x; }));
            this.y.domain([0, d3.max(totals)]).nice();
            this.barchart.selectAll("bars")
                .data(d3.stack().keys(keys)(self.data))
                .enter().append("g")
                .attr("class", "medikament")
                .attr("fill", "steelblue")
                .selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("x", function (d) { return self.x(d.data.x); })
                .attr("y", function (d) { return self.y(d[1]); })
                .attr("height", function (d) { return self.y(d[0]) - self.y(d[1]); })
                .attr("width", self.x.bandwidth());
            this.barchart.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(this.x));
            this.barchart.append("g")
                .attr("class", "axis")
                .call(d3.axisLeft(this.y));
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], barChart.prototype, "margin", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], barChart.prototype, "x_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], barChart.prototype, "y_attribute", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], barChart.prototype, "redraw", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], barChart.prototype, "brushing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], barChart.prototype, "data", void 0);
        barChart = __decorate([
            aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
            aurelia_framework_1.noView(),
            __metadata("design:paramtypes", [Object, Object])
        ], barChart);
        return barChart;
    }());
    exports.barChart = barChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdwQyxDQUFDO1FBbEtTO1lBQVQsNEJBQVE7O2dEQUFtRTtRQUNsRTtZQUFULDRCQUFROztxREFBbUI7UUFDbEI7WUFBVCw0QkFBUTs7cURBQW1CO1FBQ2xCO1lBQVQsNEJBQVE7O2dEQUFZO1FBR2lDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztrREFBVTtRQUdyRDtZQUFULDRCQUFROzs4Q0FBVztRQVhULFFBQVE7WUFGcEIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztZQUM5QiwwQkFBTSxFQUFFOztXQUNJLFFBQVEsQ0FxS3BCO1FBQUQsZUFBQztLQXJLRCxBQXFLQyxJQUFBO0lBcktZLDRCQUFRIiwiZmlsZSI6ImNoYXJ0cy9iYXItY2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBiYXJDaGFydCB7XG4gIC8vIE9uZS1XYXlcbiAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDYwLCBib3R0b206IDM1LCBsZWZ0OiA2MCwgbWlkZGxlOiAyMCB9O1xuICBAYmluZGFibGUgeF9hdHRyaWJ1dGUgPSBcInhcIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG4gIEBiaW5kYWJsZSByZWRyYXcgPSAwO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgYnJ1c2hpbmc7XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgYmFyY2hhcnQ7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgcHJpdmF0ZSB3aWR0aDtcbiAgcHJpdmF0ZSBoZWlnaHQ7XG4gIHByaXZhdGUgeF9zaXplID0gOTAwO1xuICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKVxuICAgICAgfVxuICB9XG5cbiAgcmVkcmF3Q2hhbmdlZCgpIHtcbiAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICAvLyBDb21wbGV0ZSBkcmF3aW5nIGFyZWFcbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSk7XG5cbiAgICAvLyBMaW5lY2hhcnQgYXJlYVxuICAgIHRoaXMuYmFyY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgXCIrIHRoaXMubWFyZ2luLnRvcCArXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLnBhZGRpbmcoMC4xKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKVxuXG4gICAgICAvLyB5IGF4aXMgbGFiZWxcbiAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dChcIktvc3RlblwiKTtcbiAgfVxuXG4gIHVwZGF0ZUhpZ2hsaWdodCgpIHtcblxuICAgICAgLy8gdGhpcy5iYXJjaGFydC5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAvLyAgICAgLmNsYXNzZWQoXCJoaWdobGlnaHRcIiwgZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgLy8gICAgICAgICBpZihkW1wiaGlnaGxpZ2h0XCJdID09IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIC8vICAgICAgICAgZWxzZSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgICAgLmNsYXNzZWQoXCJiYWNrZ3JvdW5kXCIsIGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgIC8vICAgICAgICAgaWYoZFtcImhpZ2hsaWdodFwiXSA9PSAyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAvLyAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcInBhdGgubGluZS5oaWdobGlnaHRcIikubW92ZVRvRnJvbnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IGtleXMgPSBbXCJVVlwiLCBcIklCRFwiXVxuICAgIGxldCB0b3RhbHMgPSB0aGlzLmRhdGEubWFwKHggPT4ge1xuICAgICAgbGV0IHMgPSAwO1xuICAgICAga2V5cy5mb3JFYWNoKHkgPT4ge1xuICAgICAgICBzID0gcyArICt4W3ldO1xuICAgICAgfSlcbiAgICAgIHJldHVybiBzO1xuICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KSk7XG4gICAgdGhpcy55LmRvbWFpbihbMCwgZDMubWF4KHRvdGFscyldKS5uaWNlKCk7XG5cbiAgICB0aGlzLmJhcmNoYXJ0LnNlbGVjdEFsbChcImJhcnNcIilcbiAgICAgICAgICAgLmRhdGEoZDMuc3RhY2soKS5rZXlzKGtleXMpKHNlbGYuZGF0YSkpXG4gICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibWVkaWthbWVudFwiKVxuICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcInN0ZWVsYmx1ZVwiKVxuICAgICAgICAgICAuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueChkLmRhdGEueCk7IH0pXG4gICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueShkWzFdKTsgfSlcbiAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnkoZFswXSkgLSBzZWxmLnkoZFsxXSk7IH0pXG4gICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLnguYmFuZHdpZHRoKCkpXG5cbiAgICAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG5cbiAgICAgICB0aGlzLmJhcmNoYXJ0LmFwcGVuZChcImdcIilcbiAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG4gICAgLy8gdGhpcy5iYXJjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.css\"></require><require from=\"ion-rangeslider/css/ion.rangeSlider.skinHTML5.css\"></require><require from=\"./app.css\"></require><require from=\"./navbar\"></require><nav-bar router.bind=\"router\"></nav-bar><loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!vpsa/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n  opacity: 0.5;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!bars/bars.html', ['module'], function(module) { module.exports = "<template><require from=\"../charts/bar-chart\"></require><div class=\"text-center\"><h2>${message}</h2><div class=\"row\"><div class=\"col-sm-3\"><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"uv_selected\">UV</label></div><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"ibd_selected\">IBD</label></div></div><div class=\"col-sm-9\" style=\"width:100%;height:300px\"><bar-chart data.bind=\"data_prepared\"></bar-chart></div></div></div></template>"; });
define('text!empty/no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
define('text!vpsa/vpsa.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-focus\"></require><require from=\"../charts/parallel-coordinates-vertical\"></require><div class=\"row\"><div class=\"col-md-4\"><div><h2>Compute SIR</h2><label>Rho: Probabilty that an infected person dies before natural death or recovery.</label><div class=\"row\"><input type=\"text\" id=\"rho\"></div><label>V: Per captia death rate from natural causes.</label><div class=\"row\"><input type=\"text\" id=\"v\"></div><label>Mu: Population birth rate.</label><div class=\"row\"><input type=\"text\" id=\"mu\"></div><label>Beta: Transmission rate: Infected -> Susceptible. Includes encounter and transmission rate.</label><div class=\"row\"><input type=\"text\" id=\"beta\"></div><label>Gamma: Recovery rate.</label><div class=\"row\"><input type=\"text\" id=\"gamma\"></div><br><label>Starting Conditions</label><div class=\"row\"><div class=\"col-sm-3\"><label for=\"#param1\">S0:</label><input style=\"width:50px\" type=\"number\" value.bind=\"S0\" id=\"param1\" step=\"0.01\"><br></div><div class=\"col-sm-3\"><label for=\"#param2\">I0:</label><input style=\"width:60px\" type=\"number\" value.bind=\"I0\" id=\"param2\" step=\"0.0001\"><br></div><div class=\"col-sm-6\"><label for=\"#param5\">Time in years:</label><input style=\"width:50px\" type=\"number\" value.bind=\"NY\" id=\"param5\" step=\"1\"><br></div></div><br><label for=\"#sobol\">Number of sobol samples:</label><input type=\"number\" value.bind=\"sobol_n\" id=\"sobol\" step=\"1\"><br><button type=\"button\" click.delegate=\"vspa()\">Compute Samples</button></div><div style=\"width:100%;height:500px\"><parallel-coordinates-vertical brushing.bind=\"brushing_parallel\" redraw.bind=\"redraw_parallel\" data.bind=\"data_parallel\"></parallel-coordinates-vertical></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_pop\" redraw.bind=\"redraw_pop\" x_attribute=\"x\" y_attribute=\"pop\" data.bind=\"data_lines\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_sus\" redraw.bind=\"redraw_sus\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"sus\" data.bind=\"data_lines\"></line-chart-focus></div></div><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_inf\" redraw.bind=\"redraw_inf\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"inf\" data.bind=\"data_lines\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus brushing.bind=\"brushing_rec\" redraw.bind=\"redraw_rec\" mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"rec\" data.bind=\"data_lines\"></line-chart-focus></div></div></div></div><div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
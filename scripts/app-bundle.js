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
                { route: "vpsa/", moduleId: "vpsa/vpsa", nav: true, title: "SIR", name: "vpsa" }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsV0FBTSxHQUFHLHVCQUFNLENBQUM7UUFZbEIsQ0FBQztRQVZDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFNO1lBQy9DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7Z0JBRXpFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO2FBQ25GLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FiQSxBQWFDLElBQUE7SUFiWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCJcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlciA9IFJvdXRlcjtcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXIpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IFwiSW1wcm92ZVwiO1xuICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgeyByb3V0ZTogXCJcIiwgbW9kdWxlSWQ6IFwiZW1wdHkvbm8tc2VsZWN0aW9uXCIsIG5hdjogdHJ1ZSwgdGl0bGU6IFwiU2VsZWN0XCIgfSxcbiAgICAgICAgLy8gICB7IHJvdXRlOiBcInZpcy9cIiwgbW9kdWxlSWQ6IFwidmlzL3Zpc1wiLCBuYXY6IHRydWUsIHRpdGxlOiBcIlZpc1wiLCBuYW1lOiBcInZpc1wiIH0sXG4gICAgICAgICAgeyByb3V0ZTogXCJ2cHNhL1wiLCBtb2R1bGVJZDogXCJ2cHNhL3Zwc2FcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJTSVJcIiwgbmFtZTogXCJ2cHNhXCIgfVxuICAgICAgXSk7XG5cbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2FBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAucGx1Z2luKFwiYXVyZWxpYS1jb21wdXRlZFwiKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        return NavBar;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], NavBar.prototype, "router", void 0);
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1lBQ1ksV0FBTSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBQUQsYUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRFc7UUFBVCw0QkFBUTs7MENBQWU7SUFEYix3QkFBTSIsImZpbGUiOiJuYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIge1xuICBAYmluZGFibGUgcm91dGVyID0gbnVsbDtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/dynamic-bar-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DynamicBarChart = (function () {
        function DynamicBarChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
            this.x_size = 900;
            this.y_size = 500;
            this.x_attribute = "salesperson";
            this.y_attribute = "sales";
            this.data = [];
            this.element = element;
        }
        DynamicBarChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        DynamicBarChart.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        DynamicBarChart.prototype.unbind = function () {
            this.subscription.dispose();
        };
        DynamicBarChart.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.x = d3.scaleBand()
                .range([0, this.width])
                .padding(0.1);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.svg.append("g")
                .attr("class", "yAxis");
            this.tooltip = d3.select(this.element).append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);
        };
        DynamicBarChart.prototype.updateChart = function () {
            var _this = this;
            this.x.domain(this.data.map(function (d) { return d[_this.x_attribute]; }));
            this.y.domain([0, d3.max(this.data, function (d) { return d[_this.y_attribute]; })]);
            var chart = this.svg.selectAll(".bar")
                .data(this.data);
            this.svg.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.svg.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            chart.enter()
                .append("rect")
                .attr("class", "bar")
                .on("mouseover", function (d) {
                _this.mo = d[_this.x_attribute];
                _this.tooltip.transition()
                    .duration(100)
                    .style("opacity", .9);
                _this.tooltip.html(d[_this.x_attribute])
                    .style("left", (_this.x(d[_this.x_attribute]) + _this.x.bandwidth() / 2) + "px")
                    .style("top", (_this.y(d[_this.y_attribute]) + 60) + "px");
            })
                .on("mouseout", function (d) {
                _this.tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
                .merge(chart)
                .attr("width", this.x.bandwidth())
                .attr("x", function (d) { return _this.x(d[_this.x_attribute]); })
                .transition()
                .attr("y", function (d) { return _this.y(d[_this.y_attribute]); })
                .attr("height", function (d) { return _this.height - _this.y(d[_this.y_attribute]); });
            chart.exit().remove();
        };
        return DynamicBarChart;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "margin", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "x_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "y_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "x_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "y_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "mo", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], DynamicBarChart.prototype, "data", void 0);
    DynamicBarChart = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.noView(),
        __metadata("design:paramtypes", [Object, Object])
    ], DynamicBarChart);
    exports.DynamicBarChart = DynamicBarChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9keW5hbWljLWJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLGVBQWU7UUE0QjFCLHlCQUFZLE9BQU8sRUFBVSxhQUFhO1lBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7WUExQmhDLFdBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN0RCxXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1lBQzVCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1lBTXRCLFNBQUksR0FBRyxFQUFFLENBQUM7WUFpQmxCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCxrQ0FBUSxHQUFSO1lBQUEsaUJBY0M7WUFiRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDckQsQ0FBQztZQUdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FB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QUM7OytDQUFJO0lBRy9DO1FBQVQsNEJBQVE7O2lEQUFXO0lBWlQsZUFBZTtRQUYzQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1FBQzlCLDBCQUFNLEVBQUU7O09BQ0ksZUFBZSxDQXdJM0I7SUF4SVksMENBQWUiLCJmaWxlIjoiY2hhcnRzL2R5bmFtaWMtYmFyLWNoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgRHluYW1pY0JhckNoYXJ0IHtcbiAgLy8gT25lLVdheVxuICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gIEBiaW5kYWJsZSB4X3NpemUgPSA5MDA7XG4gIEBiaW5kYWJsZSB5X3NpemUgPSA1MDA7XG4gIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwic2FsZXNwZXJzb25cIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJzYWxlc1wiO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW87XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgdG9vbHRpcDtcbiAgcHJpdmF0ZSB4O1xuICBwcml2YXRlIHk7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKVxuICAgICAgLnBhZGRpbmcoMC4xKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIik7XG5cbiAgICAvLyBjcmVhdGUgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcCA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpLmFwcGVuZChcImRpdlwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICAvLyBVcGRhdGUgZG9tYWluc1xuICAgIHRoaXMueC5kb21haW4odGhpcy5kYXRhLm1hcCgoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpO1xuICAgIHRoaXMueS5kb21haW4oWzAsIGQzLm1heDxhbnksIGFueT4odGhpcy5kYXRhLCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSldKTtcblxuICAgIC8vIFNlbGVjdCBjaGFydFxuICAgIGxldCBjaGFydCA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgIC5kYXRhKHRoaXMuZGF0YSlcblxuICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgdGhpcy5zdmcuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICAvLyBBZGQgYW5kIHVwZGF0ZSBiYXJzXG4gICAgY2hhcnQuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCkgPT4ge1xuICAgICAgICB0aGlzLm1vID0gZFt0aGlzLnhfYXR0cmlidXRlXTtcblxuICAgICAgICB0aGlzLnRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC45KTtcbiAgICAgICAgdGhpcy50b29sdGlwLmh0bWwoZFt0aGlzLnhfYXR0cmlidXRlXSlcbiAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsICh0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkgKyB0aGlzLnguYmFuZHdpZHRoKCkgLyAyKSArIFwicHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKHRoaXMueShkW3RoaXMueV9hdHRyaWJ1dGVdKSArIDYwKSArIFwicHhcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQpID0+IHtcbiAgICAgICAgdGhpcy50b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgIH0pXG4gICAgICAubWVyZ2UoY2hhcnQpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMueC5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKFwieFwiLCAoZCkgPT4gdGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gdGhpcy5oZWlnaHQgLSB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgLy8gUmVtb3ZlIGJhcnNcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/line-chart',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChart = (function () {
        function LineChart(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
            this.x_size = 900;
            this.y_size = 500;
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.data = [];
            this.element = element;
        }
        LineChart.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        LineChart.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        LineChart.prototype.unbind = function () {
            this.subscription.dispose();
        };
        LineChart.prototype.initChart = function () {
            var _this = this;
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.x = d3.scaleLinear()
                .range([0, this.width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .attr("class", "xAxis");
            this.svg.append("g")
                .attr("class", "yAxis");
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
        };
        LineChart.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.y_attribute]; }); });
            this.x.domain([0, x_max]);
            this.y.domain([0, y_max]);
            var chart = this.svg.selectAll(".svg")
                .data(this.data);
            this.svg.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.svg.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            chart.enter()
                .append("path")
                .attr("class", "line")
                .merge(chart)
                .attr("d", function (d) { return _this.valueline(d); });
            chart.exit().remove();
        };
        return LineChart;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "margin", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "x_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "y_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "x_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "y_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], LineChart.prototype, "mo", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChart.prototype, "data", void 0);
    LineChart = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.noView(),
        __metadata("design:paramtypes", [Object, Object])
    ], LineChart);
    exports.LineChart = LineChart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVE7OzZDQUFjO0lBQ2I7UUFBVCw0QkFBUTs7a0RBQW1CO0lBQ2xCO1FBQVQsNEJBQVE7O2tEQUFtQjtJQUcwQjtRQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7eUNBQUk7SUFHL0M7UUFBVCw0QkFBUTs7MkNBQVc7SUFaVCxTQUFTO1FBRnJCLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7UUFDOUIsMEJBQU0sRUFBRTs7T0FDSSxTQUFTLENBNElyQjtJQTVJWSw4QkFBUyIsImZpbGUiOiJjaGFydHMvbGluZS1jaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtpbmplY3QsIG5vVmlldywgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBCaW5kaW5nRW5naW5lfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydCB7XG4gIC8vIE9uZS1XYXlcbiAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA0MCB9O1xuICBAYmluZGFibGUgeF9zaXplID0gOTAwO1xuICBAYmluZGFibGUgeV9zaXplID0gNTAwO1xuICBAYmluZGFibGUgeF9hdHRyaWJ1dGUgPSBcInhcIjtcbiAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG5cbiAgLy8gVHdvLVdheVxuICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBtbztcblxuICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAvLyBBdXJlbGlhIHZhcmlhYmxlc1xuICBwcml2YXRlIGVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gIC8vIEQzIHZhcmlhYmxlc1xuICBwcml2YXRlIHN2ZztcbiAgcHJpdmF0ZSB0b29sdGlwO1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeTtcbiAgcHJpdmF0ZSB2YWx1ZWxpbmU7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBwcml2YXRlIHdpZHRoO1xuICBwcml2YXRlIGhlaWdodDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwcml2YXRlIGJpbmRpbmdFbmdpbmUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gIGF0dGFjaGVkKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNoYXJ0IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgIHRoaXMudXBkYXRlQ2hhcnQoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHRoaXMueCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuICAgIHRoaXMueSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIik7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5QXhpc1wiKTtcblxuICAgIC8vIGRlZmluZSB0aGUgbGluZVxuICAgIHRoaXMudmFsdWVsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkKSA9PiB0aGlzLngoZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgICAgIC55KChkKSA9PiB0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkpO1xuXG4gICAgLy8gY3JlYXRlIHRvb2x0aXBcbiAgICAvLyB0aGlzLnRvb2x0aXAgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KS5hcHBlbmQoXCJkaXZcIilcbiAgICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgLy8gICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgLy8gVXBkYXRlIGRvbWFpbnNcbiAgICBsZXQgeF9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXksIChkKSA9PiBkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICBsZXQgeV9tYXggPSBkMy5tYXgodGhpcy5kYXRhLCAoYXJyYXkpID0+IGQzLm1heDxhbnksIGFueT4oYXJyYXksIChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKSlcbiAgICBcbiAgICB0aGlzLnguZG9tYWluKFswLCB4X21heF0pO1xuICAgIHRoaXMueS5kb21haW4oWzAsIHlfbWF4XSk7XG5cbiAgICAvLyBTZWxlY3QgY2hhcnRcbiAgICBsZXQgY2hhcnQgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuc3ZnXCIpXG4gICAgICAuZGF0YSh0aGlzLmRhdGEpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gQWRkIGFuZCB1cGRhdGUgYmFyc1xuICAgIGNoYXJ0LmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgIC8vICAgLm9uKFwibW91c2VvdmVyXCIsIChkKSA9PiB7XG4gICAgLy8gICAgIHRoaXMubW8gPSBkW3RoaXMueF9hdHRyaWJ1dGVdO1xuICAgICAgLy9cbiAgICAvLyAgICAgdGhpcy50b29sdGlwLnRyYW5zaXRpb24oKVxuICAgIC8vICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgLy8gICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOSk7XG4gICAgLy8gICAgIHRoaXMudG9vbHRpcC5odG1sKGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgLy8gICAgICAgLnN0eWxlKFwibGVmdFwiLCAodGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pICsgdGhpcy54LmJhbmR3aWR0aCgpIC8gMikgKyBcInB4XCIpXG4gICAgLy8gICAgICAgLnN0eWxlKFwidG9wXCIsICh0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkgKyA2MCkgKyBcInB4XCIpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5vbihcIm1vdXNlb3V0XCIsIChkKSA9PiB7XG4gICAgLy8gICAgIHRoaXMudG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgLy8gICB9KVxuICAgICAgLm1lcmdlKGNoYXJ0KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkKSk7XG5cbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinates = (function () {
        function parallelCoordinates(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
            this.x_size = 900;
            this.y_size = 500;
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.data = [];
            this.y = {};
            this.dragging = {};
            this.element = element;
        }
        parallelCoordinates.prototype.attached = function () {
            var _this = this;
            if (this.data) {
                this.subscription = this.bindingEngine
                    .collectionObserver(this.data)
                    .subscribe(function (splices) { return _this.dataMutated(splices); });
            }
            this.width = this.x_size - this.margin.left - this.margin.right;
            this.height = this.y_size - this.margin.top - this.margin.bottom;
            this.initChart();
            this.updateChart();
        };
        parallelCoordinates.prototype.dataMutated = function (splices) {
            this.updateChart();
        };
        parallelCoordinates.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinates.prototype.position = function (d) {
            var v = this.dragging[d];
            return v == null ? this.x(d) : v;
        };
        parallelCoordinates.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.position(p), _this.y[p](d[p])];
            }));
        };
        parallelCoordinates.prototype.brushHighlight = function (g, y, foreground) {
            var actives = [];
            var extents = [];
            g.selectAll(".brush")
                .filter(function (d) {
                return d3.brushSelection(this);
            })
                .each(function (d) {
                actives.push(d);
                extents.push([y[d].invert(d3.brushSelection(this)[1]), y[d].invert(d3.brushSelection(this)[0])]);
            });
            foreground.style("display", function (d) {
                return actives.every(function (p, i) {
                    return extents[i][0] <= d[p] && d[p] <= extents[i][1];
                }) ? null : "none";
            });
        };
        parallelCoordinates.prototype.initChart = function () {
            this.svg = d3.select(this.element)
                .append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
            this.x = d3.scalePoint()
                .range([0, this.width]);
            this.axis = d3.axisLeft();
            this.line = d3.line();
        };
        parallelCoordinates.prototype.updateChart = function () {
            var _this = this;
            this.dimensions = d3.keys(this.data[0]).filter(function (d) {
                return d != "name";
            });
            this.dimensions.map(function (dim) {
                _this.y[dim] = d3.scaleLinear()
                    .range([_this.height, 0])
                    .domain(d3.extent(_this.data, function (data) {
                    return data[dim];
                }));
            });
            this.x.domain(this.dimensions);
            this.background = this.svg.append("g")
                .attr("class", "background")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("d", function (d) { return _this.path(d); });
            this.foreground = this.svg.append("g")
                .attr("class", "foreground")
                .selectAll("path")
                .data(this.data)
                .enter().append("path")
                .attr("d", function (d) { return _this.path(d); });
            var height = this.height;
            var x = this.x;
            var y = this.y;
            var axis = this.axis;
            var foreground = this.foreground;
            var brushHighlight = this.brushHighlight;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(" + x(d) + ")";
            });
            g.append("g")
                .each(function (d) {
                d3.select(this).call(axis.scale(y[d]));
            });
            g.append("text")
                .style("text-anchor", "middle")
                .attr("y", -9)
                .text(function (d) { return d; });
            g.append("g")
                .attr("class", "brush")
                .each(function (d) {
                var _this = this;
                d3.select(this).call(d3.brushY()
                    .extent([[-9, 0], [9, height]])
                    .on("start", function (d, i) {
                    d3.event.sourceEvent.stopPropagation();
                })
                    .on("brush", function (d, i) {
                    if (!d3.event.sourceEvent)
                        return;
                    if (!d3.event.selection)
                        return;
                    brushHighlight(g, y, foreground);
                })
                    .on("end", function (d, i) {
                    if (d3.brushSelection(_this) == null) {
                        brushHighlight(g, y, foreground);
                    }
                }));
            });
        };
        return parallelCoordinates;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "margin", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "x_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "y_size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "x_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "y_attribute", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "mo", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinates.prototype, "data", void 0);
    parallelCoordinates = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.noView(),
        __metadata("design:paramtypes", [Object, Object])
    ], parallelCoordinates);
    exports.parallelCoordinates = parallelCoordinates;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLG1CQUFtQjtRQXFDNUIsNkJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQW5DaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFNbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQVVaLE1BQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxhQUFRLEdBQUcsRUFBRSxDQUFDO1lBZWxCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFHRCxzQ0FBUSxHQUFSO1lBQUEsaUJBY0M7WUFiRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDekQsQ0FBQztZQUdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFN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REFBYztJQUNiO1FBQVQsNEJBQVE7OzREQUFtQjtJQUNsQjtRQUFULDRCQUFROzs0REFBbUI7SUFHMEI7UUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O21EQUFJO0lBRy9DO1FBQVQsNEJBQVE7O3FEQUFXO0lBWlgsbUJBQW1CO1FBRi9CLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7UUFDOUIsMEJBQU0sRUFBRTs7T0FDSSxtQkFBbUIsQ0FxTXZCO0lBck1JLGtEQUFtQiIsImZpbGUiOiJjaGFydHMvcGFyYWxsZWwtY29vcmRpbmF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5kZWNsYXJlIHZhciBQYXJDb29yZHM6IGFueTtcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgcGFyYWxsZWxDb29yZGluYXRlcyB7XG4gICAgLy8gT25lLVdheVxuICAgIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNDAgfTtcbiAgICBAYmluZGFibGUgeF9zaXplID0gOTAwO1xuICAgIEBiaW5kYWJsZSB5X3NpemUgPSA1MDA7XG4gICAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gICAgQGJpbmRhYmxlIHlfYXR0cmlidXRlID0gXCJ5XCI7XG5cbiAgICAvLyBUd28tV2F5XG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW87XG5cbiAgICAvLyBPYnNlcnZlZCBWYXJpYWJsZXNcbiAgICBAYmluZGFibGUgZGF0YSA9IFtdO1xuXG4gICAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG5cbiAgICAvLyBEMyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIHN2ZztcbiAgICAvLyBwcml2YXRlIHRvb2x0aXA7XG4gICAgcHJpdmF0ZSB4O1xuICAgIHByaXZhdGUgeSA9IHt9O1xuICAgIHByaXZhdGUgZHJhZ2dpbmcgPSB7fTtcbiAgICBwcml2YXRlIGRpbWVuc2lvbnM7XG4gICAgLy8gcHJpdmF0ZSBhY3RpdmVzO1xuICAgIC8vIHByaXZhdGUgYnJ1c2g7XG4gICAgLy8gcHJpdmF0ZSBicnVzaHN0YXJ0O1xuICAgIHByaXZhdGUgbGluZTtcbiAgICBwcml2YXRlIGF4aXM7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICAgIHByaXZhdGUgZm9yZWdyb3VuZDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICBwcml2YXRlIHdpZHRoO1xuICAgIHByaXZhdGUgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy54X3NpemUgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cbiAgICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gICAgZGF0YU11dGF0ZWQoc3BsaWNlcykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gICAgfVxuXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIGQzIGZ1bmN0aW9uc1xuICAgIHBvc2l0aW9uKGQpIHtcbiAgICAgICAgdmFyIHYgPSB0aGlzLmRyYWdnaW5nW2RdO1xuICAgICAgICByZXR1cm4gdiA9PSBudWxsID8gdGhpcy54KGQpIDogdjtcbiAgICB9XG5cbiAgICBwYXRoKGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZSh0aGlzLmRpbWVuc2lvbnMubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMucG9zaXRpb24ocCksIHRoaXMueVtwXShkW3BdKV07IH0pKTtcbiAgICB9XG5cbiAgICBicnVzaEhpZ2hsaWdodChnLCB5LCBmb3JlZ3JvdW5kKSB7XG4gICAgICAgIGxldCBhY3RpdmVzID0gW107XG4gICAgICAgIGxldCBleHRlbnRzID0gW107XG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYnJ1c2hcIilcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5icnVzaFNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGFjdGl2ZXMucHVzaChkKVxuICAgICAgICAgICAgZXh0ZW50cy5wdXNoKFt5W2RdLmludmVydChkMy5icnVzaFNlbGVjdGlvbih0aGlzKVsxXSksIHlbZF0uaW52ZXJ0KGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpWzBdKV0pXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmb3JlZ3JvdW5kLnN0eWxlKFwiZGlzcGxheVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY3RpdmVzLmV2ZXJ5KGZ1bmN0aW9uKHAsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZW50c1tpXVswXSA8PSBkW3BdICYmIGRbcF0gPD0gZXh0ZW50c1tpXVsxXTtcbiAgICAgICAgICAgICAgfSkgPyBudWxsIDogXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENoYXJ0KCkge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGNoYXJ0IGRpdiBvZiB0aGUgcGFnZVxuICAgICAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXG4gICAgICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIixcIiArIHRoaXMubWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgICAgICB0aGlzLnggPSBkMy5zY2FsZVBvaW50KClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgdGhpcy53aWR0aF0pO1xuXG4gICAgICAgIHRoaXMuYXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgdGhpcy5saW5lID0gZDMubGluZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNoYXJ0KCkge1xuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdKS5maWx0ZXIoKGQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkICE9IFwibmFtZVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5tYXAoKGRpbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy55W2RpbV0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKVxuICAgICAgICAgICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudCh0aGlzLmRhdGEsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtkaW1dO1xuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy54LmRvbWFpbih0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBncmV5IGJhY2tncm91bmQgbGluZXMgZm9yIGNvbnRleHQuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrZ3JvdW5kXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB7IHJldHVybiB0aGlzLnBhdGgoZCl9KTtcblxuICAgICAgICAvLyBBZGQgYmx1ZSBmb3JlZ3JvdW5kIGxpbmVzIGZvciBmb2N1cy5cbiAgICAgICAgdGhpcy5mb3JlZ3JvdW5kID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImZvcmVncm91bmRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHsgcmV0dXJuIHRoaXMucGF0aChkKX0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBsb2NhbCB2ZXJzaW9ucyBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG4gICAgICAgIGxldCBheGlzID0gdGhpcy5heGlzO1xuICAgICAgICBsZXQgZm9yZWdyb3VuZCA9IHRoaXMuZm9yZWdyb3VuZDtcbiAgICAgICAgbGV0IGJydXNoSGlnaGxpZ2h0ID0gdGhpcy5icnVzaEhpZ2hsaWdodDtcblxuICAgICAgICBsZXQgZyA9IHRoaXMuc3ZnLnNlbGVjdEFsbChcIi5kaW1lbnNpb25cIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGltZW5zaW9ucylcbiAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHgoZCkgKyBcIilcIjsgfSk7XG5cbiAgICAgICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jYWxsKGF4aXMuc2NhbGUoeVtkXSkpOyk7XG5cbiAgICAgICAgZy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIC05KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHsgcmV0dXJuIGQ7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgc3RvcmUgYSBicnVzaCBmb3IgZWFjaCBheGlzLlxuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicnVzaFwiKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2FsbChkMy5icnVzaFkoKVxuICAgICAgICAgICAgICAgIC5leHRlbnQoW1stOSwwXSwgWzksIGhlaWdodF1dKVxuICAgICAgICAgICAgICAgICAub24oXCJzdGFydFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgZDMuZXZlbnQuc291cmNlRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5vbihcImJydXNoXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNvdXJjZUV2ZW50KSByZXR1cm47IC8vIE9ubHkgdHJhbnNpdGlvbiBhZnRlciBpbnB1dC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zZWxlY3Rpb24pIHJldHVybjsgLy8gSWdub3JlIGVtcHR5IHNlbGVjdGlvbnMuXG5cbiAgICAgICAgICAgICAgICAgICAgYnJ1c2hIaWdobGlnaHQoZywgeSwgZm9yZWdyb3VuZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbihcImVuZFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZDMuYnJ1c2hTZWxlY3Rpb24odGhpcykgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJ1c2hIaWdobGlnaHQoZywgeSwgZm9yZWdyb3VuZClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('empty/no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "No Route Selected";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5L25vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksWUFBTyxHQUFHLG1CQUFtQixDQUFBO1FBQ2pDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoiZW1wdHkvbm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcbiAgICBtZXNzYWdlID0gXCJObyBSb3V0ZSBTZWxlY3RlZFwiXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './elements/loading-indicator'
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFDdEQsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUNuQiw4QkFBOEI7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUpELDhCQUlDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICAgICcuL2VsZW1lbnRzL2xvYWRpbmctaW5kaWNhdG9yJ1xuICBdKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('vis/vis',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vis = (function () {
        function Vis() {
            this.test = "Vis!";
            this.data = [
                { "salesperson": "Bob", "sales": 12 },
                { "salesperson": "Robin", "sales": 1 },
                { "salesperson": "Anne", "sales": 8 },
                { "salesperson": "Chris", "sales": 5 }
            ];
        }
        Vis.prototype.add = function () {
            this.data.push({ "salesperson": "Test", "sales": 20 });
        };
        return Vis;
    }());
    exports.Vis = Vis;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcy92aXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNJLFNBQUksR0FBRyxNQUFNLENBQUE7WUFFYixTQUFJLEdBQUc7Z0JBQ0gsRUFBQyxhQUFhLEVBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUM7Z0JBQ3BDLEVBQUMsYUFBYSxFQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO2dCQUNyQyxFQUFDLGFBQWEsRUFBRyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztnQkFDcEMsRUFBQyxhQUFhLEVBQUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7YUFDeEMsQ0FBQTtRQUtMLENBQUM7UUFIRyxpQkFBRyxHQUFIO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FiQSxBQWFDLElBQUE7SUFiWSxrQkFBRyIsImZpbGUiOiJ2aXMvdmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZpcyB7XG4gICAgdGVzdCA9IFwiVmlzIVwiXG5cbiAgICBkYXRhID0gW1xuICAgICAgICB7XCJzYWxlc3BlcnNvblwiIDogXCJCb2JcIiwgXCJzYWxlc1wiOiAxMn0sXG4gICAgICAgIHtcInNhbGVzcGVyc29uXCIgOiBcIlJvYmluXCIsIFwic2FsZXNcIjogMX0sXG4gICAgICAgIHtcInNhbGVzcGVyc29uXCIgOiBcIkFubmVcIiwgXCJzYWxlc1wiOiA4fSxcbiAgICAgICAge1wic2FsZXNwZXJzb25cIiA6IFwiQ2hyaXNcIiwgXCJzYWxlc1wiOiA1fVxuICAgIF1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goe1wic2FsZXNwZXJzb25cIiA6IFwiVGVzdFwiLCBcInNhbGVzXCI6IDIwfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('vpsa/vpsa',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vspa = (function () {
        function Vspa() {
            var _this = this;
            this.param1 = 1;
            this.param2 = 1;
            this.TS = 1.0;
            this.ND = 60 * 365;
            this.S0 = 0.1;
            this.I0 = 1e-4;
            this.R0 = 1 - this.S0 - this.I0;
            this.rho = 0.5;
            this.v = 1 / (70 * 365.0);
            this.mu = 1 / (70 * 365.0);
            this.beta = 520 / 365.0;
            this.gamma = 1 / 7.0;
            this.INPUT = [this.S0, this.I0, this.R0];
            this.data = [];
            this.cars = [
                { "name": "A", "economy (mpg)": 1, "cylinders": 1, "year": 1 },
                { "name": "A", "economy (mpg)": 2, "cylinders": 2, "year": 2 },
                { "name": "B", "economy (mpg)": 1, "cylinders": 2, "year": 3 },
                { "name": "C", "economy (mpg)": 4, "cylinders": 2, "year": 1 }
            ];
            this.SIR = function (t, INP) {
                var Y = [0, 0, 0];
                var V = INP;
                Y[0] = _this.v - _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - _this.mu * V[0];
                Y[1] = _this.beta * V[0] * V[1] / V.reduce(function (a, b) { return a + b; }, 0) - (_this.gamma + _this.mu) * V[1] / (1 - _this.rho);
                Y[2] = _this.gamma * V[1] - _this.mu * V[2];
                return Y;
            };
        }
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
        Vspa.prototype.get_params = function () {
            var params = [];
            var rho = [0.4, 0.5, 0.6];
            var v = [1 / (70 * 365.0), 1 / (80 * 365.0), 1 / (90 * 365.0)];
            var mu = [1 / (70 * 365.0), 1 / (80 * 365.0), 1 / (90 * 365.0)];
            var beta = [365 / 365.0, 520 / 365.0];
            var gamma = [1 / 6.0, 1 / 7.0];
            return this.cartesian([rho, v, mu, beta, gamma]);
        };
        Vspa.prototype.vspa = function () {
            var _this = this;
            var params = this.get_params();
            params.forEach(function (d) {
                _this.rho = d[0];
                _this.v = d[1];
                _this.mu = d[2];
                _this.beta = d[3];
                _this.gamma = d[4];
                var sol = numeric.dopri(0, _this.ND, _this.INPUT, _this.SIR, 1e-6, 1000);
                var temp = [];
                for (var i = 0; i < sol.x.length; i++) {
                    temp.push({
                        "x": sol.x[i],
                        "sus": sol.y[i][0],
                        "inf": sol.y[i][1],
                        "rec": sol.y[i][2],
                        "pop": sol.y[i][0] + sol.y[i][1] + sol.y[i][2]
                    });
                }
                _this.data.push(temp);
            });
        };
        return Vspa;
    }());
    Vspa = __decorate([
        aurelia_framework_1.autoinject
    ], Vspa);
    exports.Vspa = Vspa;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZwc2EvdnBzYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQSxJQUFhLElBQUk7UUFEakI7WUFBQSxpQkFrSUM7WUEvSEcsV0FBTSxHQUFHLENBQUMsQ0FBQztZQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7WUFJWCxPQUFFLEdBQUcsR0FBRyxDQUFBO1lBQ1IsT0FBRSxHQUFHLEVBQUUsR0FBQyxHQUFHLENBQUE7WUFFWCxPQUFFLEdBQUcsR0FBRyxDQUFBO1lBQ1IsT0FBRSxHQUFHLElBQUksQ0FBQTtZQUNULE9BQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO1lBRzFCLFFBQUcsR0FBRyxHQUFHLENBQUE7WUFFVCxNQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhCLE9BQUUsR0FBRyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDLENBQUE7WUFFakIsU0FBSSxHQUFDLEdBQUcsR0FBQyxLQUFLLENBQUE7WUFFZCxVQUFLLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQTtZQUVYLFVBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFbkMsU0FBSSxHQUFXLEVBQUUsQ0FBQTtZQUVqQixTQUFJLEdBQUc7Z0JBQ0gsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO2dCQUN6RCxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsZUFBZSxFQUFFLENBQUMsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7Z0JBQ3pELEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxlQUFlLEVBQUUsQ0FBQyxFQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQztnQkFDekQsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO2FBQzVELENBQUE7WUFFTyxRQUFHLEdBQUcsVUFBQyxDQUFDLEVBQUUsR0FBRztnQkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7Z0JBRVIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3pHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFekMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUNULENBQUMsQ0FBQTtRQW9GTCxDQUFDO1FBbEZHLHdCQUFTLEdBQVQsVUFBVSxHQUFHO1lBQ1QsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1lBRW5CLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBRXZCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLEdBQUcsQ0FBQzt3QkFDUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUk7d0JBQ0EsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO1FBRUQseUJBQVUsR0FBVjtZQUNJLElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQTtZQUl2QixJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFFekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBRWxELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUduRCxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFDLEtBQUssQ0FBQyxDQUFBO1lBR2pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUE7WUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxDQUFDO1FBRUQsbUJBQUksR0FBSjtZQUFBLGlCQTBDQztZQXhCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7WUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLElBQUksR0FBVyxFQUFFLENBQUE7Z0JBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDTixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakQsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0wsV0FBQztJQUFELENBaklBLEFBaUlDLElBQUE7SUFqSVksSUFBSTtRQURoQiw4QkFBVTtPQUNFLElBQUksQ0FpSWhCO0lBaklZLG9CQUFJIiwiZmlsZSI6InZwc2EvdnBzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG4vLyBUaGlzIG1hZ2ljIGxpbmUgcmVtb3ZlZCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIG51bWVyaWNcbmRlY2xhcmUgdmFyIG51bWVyaWM6IGFueTtcbmRlY2xhcmUgdmFyIFBhckNvb3JkczogYW55O1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFZzcGEge1xuICAgIC8vIFZQU0FcbiAgICBwYXJhbTEgPSAxO1xuICAgIHBhcmFtMiA9IDE7XG5cblxuICAgIC8vIFNJUiBNb2RlbFxuICAgIFRTID0gMS4wXG4gICAgTkQgPSA2MCozNjVcblxuICAgIFMwID0gMC4xXG4gICAgSTAgPSAxZS00XG4gICAgUjAgPSAxIC0gdGhpcy5TMCAtIHRoaXMuSTBcblxuICAgIC8vIE1vcnRhbGl0eSBwcm9iYWJpbHR5LCBJIGRpZXMgYmVmb3JlIG5hdHVyYWwgZGVhdGggb3IgcmVjb3ZlcnlcbiAgICByaG8gPSAwLjVcbiAgICAvLyBQZXIgY2FwdGlhIGRlYXRoIHJhdGUgIGZyb20gbmF0dXJhbCBjYXVzZXNcbiAgICB2ID0gMS8oNzAqMzY1LjApXG4gICAgLy8gUG9wdWxhdGlvbiBiaXJ0aCByYXRlXG4gICAgbXUgPSAxLyg3MCozNjUuMClcbiAgICAvLyBUcmFuc21pc3Npb24gcmF0ZTogSSAtPiBTLiBJbmNsdWRlcyBlbmNvdW50ZXIgYW5kIHRyYW5zbWlzc2lvbiByYXRlXG4gICAgYmV0YT01MjAvMzY1LjBcbiAgICAvLyBSZWNvdmVyeSByYXRlXG4gICAgZ2FtbWE9MS83LjBcblxuICAgIElOUFVUID0gW3RoaXMuUzAsIHRoaXMuSTAsIHRoaXMuUjBdXG5cbiAgICBkYXRhID0gPGFueVtdPiBbXVxuXG4gICAgY2FycyA9IFtcbiAgICAgICAge1wibmFtZVwiOiBcIkFcIixcImVjb25vbXkgKG1wZylcIjogMSxcImN5bGluZGVyc1wiOiAxLFwieWVhclwiOiAxfSxcbiAgICAgICAge1wibmFtZVwiOiBcIkFcIixcImVjb25vbXkgKG1wZylcIjogMixcImN5bGluZGVyc1wiOiAyLFwieWVhclwiOiAyfSxcbiAgICAgICAge1wibmFtZVwiOiBcIkJcIixcImVjb25vbXkgKG1wZylcIjogMSxcImN5bGluZGVyc1wiOiAyLFwieWVhclwiOiAzfSxcbiAgICAgICAge1wibmFtZVwiOiBcIkNcIixcImVjb25vbXkgKG1wZylcIjogNCxcImN5bGluZGVyc1wiOiAyLFwieWVhclwiOiAxfVxuICAgIF1cblxuICAgIHByaXZhdGUgU0lSID0gKHQsIElOUCkgPT4ge1xuICAgIFx0bGV0IFkgPSBbMCwgMCAsMF1cbiAgICBcdGxldCBWID0gSU5QXG5cbiAgICAgICAgWVswXSA9IHRoaXMudiAtIHRoaXMuYmV0YSAqIFZbMF0gKiBWWzFdIC8gVi5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC0gdGhpcy5tdSAqIFZbMF1cbiAgICBcdFlbMV0gPSB0aGlzLmJldGEgKiBWWzBdICogVlsxXSAvIFYucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAtICh0aGlzLmdhbW1hICsgdGhpcy5tdSkgKiBWWzFdLygxLXRoaXMucmhvKVxuICAgIFx0WVsyXSA9IHRoaXMuZ2FtbWEgKiBWWzFdIC0gdGhpcy5tdSAqIFZbMl1cblxuICAgIFx0cmV0dXJuIFlcbiAgICB9XG5cbiAgICBjYXJ0ZXNpYW4oYXJnKSB7XG4gICAgICAgIGxldCByID0gPGFueVtdPiBbXTtcbiAgICAgICAgLy8gbGV0IGFyZyA9IGFyZ3VtZW50cztcbiAgICAgICAgbGV0IG1heCA9IGFyZy5sZW5ndGgtMTtcblxuICAgICAgICBmdW5jdGlvbiBoZWxwZXIoYXJyLCBpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqPTAsIGw9YXJnW2ldLmxlbmd0aDsgajxsOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFyci5zbGljZSgwKTsgLy8gY2xvbmUgYXJyXG4gICAgICAgICAgICAgICAgYS5wdXNoKGFyZ1tpXVtqXSk7XG4gICAgICAgICAgICAgICAgaWYgKGk9PW1heClcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyKGEsIGkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGVscGVyKFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZ2V0X3BhcmFtcygpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IDxhbnlbXT4gW11cblxuICAgICAgICAvLyBNb3J0YWxpdHkgcHJvYmFiaWx0eSwgSSBkaWVzIGJlZm9yZSBuYXR1cmFsIGRlYXRoIG9yIHJlY292ZXJ5XG4gICAgICAgIC8vIGxldCByaG8gPSBbMC4zLCAwLjQsIDAuNSwgMC42LCAwLjddXG4gICAgICAgIGxldCByaG8gPSBbMC40LCAwLjUsIDAuNl1cbiAgICAgICAgLy8gUGVyIGNhcHRpYSBkZWF0aCByYXRlICBmcm9tIG5hdHVyYWwgY2F1c2VzXG4gICAgICAgIGxldCB2ID0gWzEvKDcwKjM2NS4wKSwgMS8oODAqMzY1LjApLCAxLyg5MCozNjUuMCldXG4gICAgICAgIC8vIFBvcHVsYXRpb24gYmlydGggcmF0ZVxuICAgICAgICBsZXQgbXUgPSBbMS8oNzAqMzY1LjApLCAxLyg4MCozNjUuMCksIDEvKDkwKjM2NS4wKV1cbiAgICAgICAgLy8gVHJhbnNtaXNzaW9uIHJhdGU6IEkgLT4gUy4gSW5jbHVkZXMgZW5jb3VudGVyIGFuZCB0cmFuc21pc3Npb24gcmF0ZVxuICAgICAgICAvLyBsZXQgYmV0YSA9IFsyMDAvMzY1LjAsIDM2NS8zNjUuMCwgNTIwLzM2NS4wXVxuICAgICAgICBsZXQgYmV0YSA9IFszNjUvMzY1LjAsIDUyMC8zNjUuMF1cbiAgICAgICAgLy8gUmVjb3ZlcnkgcmF0ZVxuICAgICAgICAvLyBsZXQgZ2FtbWEgPSBbMS82LjAsIDEvNy4wLCAxLzguMF1cbiAgICAgICAgbGV0IGdhbW1hID0gWzEvNi4wLCAxLzcuMF1cblxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0ZXNpYW4oW3JobywgdiwgbXUsIGJldGEsIGdhbW1hXSlcbiAgICB9XG5cbiAgICB2c3BhKCkge1xuXG4gICAgICAgIC8vIGxldCBwYXJjb29yZHMgPSBQYXJDb29yZHMoKShcIiNwYXJhbGxlbFwiKVxuICAgICAgICAvLyAgIC5hbHBoYSgwLjQpXG4gICAgICAgIC8vICAgLmRhdGEoW1xuICAgICAgICAvLyAgICAgWzAsLTAsMCwwLDAsMV0sXG4gICAgICAgIC8vICAgICBbMSwtMSwxLDIsMSwxXSxcbiAgICAgICAgLy8gICAgIFsyLC0yLDQsNCwwLjUsMV0sXG4gICAgICAgIC8vICAgICBbMywtMyw5LDYsMC4zMywxXSxcbiAgICAgICAgLy8gICAgIFs0LC00LDE2LDgsMC4yNSwxXVxuICAgICAgICAvLyAgICAgXSlcbiAgICAgICAgLy8gICAgIC5yZW5kZXIoKVxuICAgICAgICAvLyAgICAgLnJlb3JkZXJhYmxlKClcbiAgICAgICAgLy8gICAgIC5icnVzaE1vZGUoXCIxRC1heGVzXCIpXG4gICAgICAgIC8vICAgICAub24oXCJoaWdobGlnaHRcIiwgKGQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkKVxuICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0X3BhcmFtcygpXG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2goIChkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJobyA9IGRbMF07XG4gICAgICAgICAgICB0aGlzLnYgPSBkWzFdO1xuICAgICAgICAgICAgdGhpcy5tdSA9IGRbMl07XG4gICAgICAgICAgICB0aGlzLmJldGEgPSBkWzNdO1xuICAgICAgICAgICAgdGhpcy5nYW1tYSA9IGRbNF07XG5cbiAgICAgICAgICAgIGxldCBzb2wgPSBudW1lcmljLmRvcHJpKDAsIHRoaXMuTkQsIHRoaXMuSU5QVVQsIHRoaXMuU0lSLCAxZS02LCAxMDAwKTtcblxuICAgICAgICAgICAgbGV0IHRlbXAgPSA8YW55W10+IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbC54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IHNvbC54W2ldLFxuICAgICAgICAgICAgICAgICAgICBcInN1c1wiOiBzb2wueVtpXVswXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbmZcIjogc29sLnlbaV1bMV0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVjXCI6IHNvbC55W2ldWzJdLFxuICAgICAgICAgICAgICAgICAgICBcInBvcFwiOiBzb2wueVtpXVswXSArIHNvbC55W2ldWzFdICsgc29sLnlbaV1bMl1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh0ZW1wKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        return LoadingIndicator;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LoadingIndicator.prototype, "loading", void 0);
    LoadingIndicator = __decorate([
        aurelia_framework_1.noView(['nprogress/nprogress.css'])
    ], LoadingIndicator);
    exports.LoadingIndicator = LoadingIndicator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9sb2FkaW5nLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLGdCQUFnQjtRQUQ3QjtZQUVVLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFTMUIsQ0FBQztRQVBELHlDQUFjLEdBQWQsVUFBZSxRQUFRO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNELENBQUM7UUFDRCx1QkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVFM7UUFBVCw0QkFBUTs7cURBQWlCO0lBRGIsZ0JBQWdCO1FBRDVCLDBCQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO09BQ3ZCLGdCQUFnQixDQVU1QjtJQVZZLDRDQUFnQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbG9hZGluZy1pbmRpY2F0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIG5wcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IHtiaW5kYWJsZSwgbm9WaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBub1ZpZXcoWyducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyddKVxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3Ige1xuQGJpbmRhYmxlIGxvYWRpbmcgPSBmYWxzZTtcblxubG9hZGluZ0NoYW5nZWQobmV3VmFsdWUpIHtcbmlmIChuZXdWYWx1ZSkge1xuICBucHJvZ3Jlc3Muc3RhcnQoKTtcbn0gZWxzZSB7XG4gIG5wcm9ncmVzcy5kb25lKCk7XG59XG59XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/sources/local-loader',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LocalLoader = (function () {
        function LocalLoader(http) {
            this.client = http;
            this.client.configure(function (config) {
                config
                    .withBaseUrl('data/')
                    .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                });
            });
        }
        LocalLoader.prototype.load_file = function (filename) {
            var _this = this;
            this.client.fetch(filename)
                .then(function (response) { return response.json(); })
                .then(function (data) { return _this.data = data; });
        };
        return LocalLoader;
    }());
    LocalLoader = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        aurelia_framework_1.noView(),
        __metadata("design:paramtypes", [Object])
    ], LocalLoader);
    exports.LocalLoader = LocalLoader;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2VzL2xvY2FsLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFdBQVc7UUFJcEIscUJBQVksSUFBSTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDO1lBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDeEIsTUFBTTtxQkFDRCxXQUFXLENBQUMsT0FBTyxDQUFDO3FCQUNwQixZQUFZLENBQUM7b0JBQ1osV0FBVyxFQUFFLGFBQWE7b0JBQzFCLE9BQU8sRUFBRTt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixrQkFBa0IsRUFBRSxPQUFPO3FCQUM1QjtpQkFDRixDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCwrQkFBUyxHQUFULFVBQVUsUUFBUTtZQUFsQixpQkFJQztZQUhHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXpCQSxBQXlCQyxJQUFBO0lBekJZLFdBQVc7UUFGdkIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO1FBQ2xCLDBCQUFNLEVBQUU7O09BQ0ksV0FBVyxDQXlCdkI7SUF6Qlksa0NBQVciLCJmaWxlIjoicmVzb3VyY2VzL3NvdXJjZXMvbG9jYWwtbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIG5vVmlld30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cblxuQGluamVjdChIdHRwQ2xpZW50KVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgTG9jYWxMb2FkZXIge1xuICAgIHByaXZhdGUgY2xpZW50O1xuICAgIHB1YmxpYyBkYXRhO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9ICBodHRwO1xuXG4gICAgICAgIHRoaXMuY2xpZW50LmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgLndpdGhCYXNlVXJsKCdkYXRhLycpXG4gICAgICAgICAgICAgICAgLndpdGhEZWZhdWx0cyh7XG4gICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnRmV0Y2gnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRfZmlsZShmaWxlbmFtZSkge1xuICAgICAgICB0aGlzLmNsaWVudC5mZXRjaChmaWxlbmFtZSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLmRhdGEgPSBkYXRhKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./app.css\"></require><require from=\"./navbar\"></require><nav-bar router.bind=\"router\"></nav-bar><loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!vis/chart.css', ['module'], function(module) { module.exports = ".bar { fill: steelblue; }\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n}\n\ndiv.tooltip {\n  position: absolute;\n  text-align: center;\n  width: 60px;\n  height: 28px;\n  padding: 2px;\n  font: 12px sans-serif;\n  background: lightsteelblue;\n  border: 0px;\n  border-radius: 8px;\n  pointer-events: none;\n}\n"; });
define('text!empty/no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
define('text!vpsa/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n"; });
define('text!vis/vis.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/dynamic-bar-chart\"></require><div class=\"no-selection text-center\"><h2>${test}</h2></div><button class=\"btn btn-success\" click.trigger=\"add()\">Add</button><dynamic-bar-chart mo.bind=\"test\" x_size=\"500\" y_size=\"200\" data.bind=\"data\"></dynamic-bar-chart></template>"; });
define('text!vpsa/vpsa.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart\"></require><require from=\"../charts/parallel-coordinates\"></require><div class=\"row\"><parallel-coordinates data.bind=\"cars\"></parallel-coordinates></div><div class=\"row\"><div class=\"col-md-4\"><h2>Params</h2><label for=\"#param1\">Param1:</label><input type=\"number\" value.bind=\"param1\" id=\"param1\" step=\"0.01\"><br><label for=\"#param2\">Param2:</label><input type=\"number\" value.bind=\"param2\" id=\"param2\" step=\"0.01\"> <button type=\"button\" click.delegate=\"vspa()\">Compute</button></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\"><line-chart mo.bind=\"test\" x_size=\"400\" y_size=\"200\" x_attribute=\"x\" y_attribute=\"pop\" data.bind=\"data\"></line-chart></div><div class=\"col-md-6\"><line-chart mo.bind=\"test\" x_size=\"400\" y_size=\"200\" x_attribute=\"x\" y_attribute=\"sus\" data.bind=\"data\"></line-chart></div></div><div class=\"row\"><div class=\"col-md-6\"><line-chart mo.bind=\"test\" x_size=\"400\" y_size=\"200\" x_attribute=\"x\" y_attribute=\"inf\" data.bind=\"data\"></line-chart></div><div class=\"col-md-6\"><line-chart mo.bind=\"test\" x_size=\"400\" y_size=\"200\" x_attribute=\"x\" y_attribute=\"rec\" data.bind=\"data\"></line-chart></div></div></div></div><div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
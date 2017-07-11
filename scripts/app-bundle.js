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
define('charts/line-chart-focus',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineChartFocus = (function () {
        function LineChartFocus(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 20, right: 60, bottom: 35, left: 60, middle: 20 };
            this.x_attribute = "x";
            this.y_attribute = "y";
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
            this.updateChart();
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
                .attr("transform", "translate(" + this.margin.left + ", 0)");
            this.focus = this.svg
                .append("g")
                .attr("transform", "translate(" + this.focus_offset + ", 0)");
            this.x = d3.scaleLinear()
                .range([0, this.lc_width]);
            this.y = d3.scaleLinear()
                .range([this.height, 0]);
            this.focus_x = d3.scaleLinear()
                .range([0, this.focus_width]);
            this.focus_y = d3.scaleLinear()
                .rangeRound([this.focus_height, 0]);
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
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
        };
        LineChartFocus.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array, function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array, function (d) { return d[_this.y_attribute]; }); });
            var focus_data = [];
            this.data.forEach(function (d) {
                focus_data.push(d[d.length - 1]);
            });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
            this.focus_y.domain([y_min, y_max]);
            var bins = d3.histogram()
                .value(function (d) { return d[_this.y_attribute]; })
                .domain(this.focus_y.domain())
                .thresholds(d3.range(y_min, y_max, (y_max - y_min) / 10))(focus_data);
            this.focus_x.domain([0, d3.max(bins, function (d) { return d.length; })]);
            var chart = this.linechart.selectAll(".linechart")
                .data(this.data);
            var focus_chart = this.focus.selectAll(".focus")
                .data(bins);
            this.linechart.selectAll(".xAxis")
                .call(d3.axisBottom(this.x));
            this.linechart.selectAll(".yAxis")
                .call(d3.axisLeft(this.y));
            this.focus.selectAll(".yAxis")
                .call(d3.axisRight(this.focus_y));
            this.focus.selectAll(".xAxis")
                .call(d3.axisBottom(this.focus_x).ticks(2));
            chart.enter()
                .append("path")
                .attr("class", "line")
                .merge(chart)
                .attr("d", function (d) { return _this.valueline(d); });
            chart.exit().remove();
            focus_chart.enter()
                .append("rect")
                .attr("class", "bar")
                .merge(focus_chart)
                .attr("x", 1)
                .attr("transform", function (d) {
                return "translate(0," + _this.focus_y(d.x1) + ")";
            })
                .attr("width", function (d) { return _this.focus_width - _this.focus_x(d.length); })
                .attr("height", function (d) {
                return _this.focus_y(d.x0) - _this.focus_y(d.x1) - 1;
            });
            focus_chart.exit().remove();
        };
        return LineChartFocus;
    }());
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
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], LineChartFocus.prototype, "mo", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], LineChartFocus.prototype, "data", void 0);
    LineChartFocus = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.BindingEngine),
        aurelia_framework_1.noView(),
        __metadata("design:paramtypes", [Object, Object])
    ], LineChartFocus);
    exports.LineChartFocus = LineChartFocus;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsY0FBYztRQXNDekIsd0JBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQXBDaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEUsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFNbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQW9CWixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxjQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ25CLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1lBR3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFHRCxpQ0FBUSxHQUFSO1lBQUEsaUJBd0JDO1lBdkJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQ25DLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBR0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFB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QkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs4Q0FBSTtJQUcvQztRQUFULDRCQUFROztnREFBVztJQVZULGNBQWM7UUFGMUIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsaUNBQWEsQ0FBQztRQUM5QiwwQkFBTSxFQUFFOztPQUNJLGNBQWMsQ0F1UDFCO0lBdlBZLHdDQUFjIiwiZmlsZSI6ImNoYXJ0cy9saW5lLWNoYXJ0LWZvY3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Rm9jdXMge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA2MCwgYm90dG9tOiAzNSwgbGVmdDogNjAsIG1pZGRsZTogMjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW87XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgbGluZWNoYXJ0O1xuICBwcml2YXRlIGZvY3VzO1xuICBwcml2YXRlIHg7XG4gIHByaXZhdGUgeTtcbiAgcHJpdmF0ZSBmb2N1c195O1xuICBwcml2YXRlIGZvY3VzX3g7XG4gIHByaXZhdGUgdmFsdWVsaW5lO1xuICBwcml2YXRlIGhpc3RvZ3JhbTtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG4gIHByaXZhdGUgbGNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBsY19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfd2lkdGggPSA1MDtcbiAgcHJpdmF0ZSBmb2N1c19oZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgZm9jdXNfb2Zmc2V0ID0gMTAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBiaW5kaW5nIGF0dHJpYnV0ZXNcbiAgYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmVcbiAgICAgICAgICAuY29sbGVjdGlvbk9ic2VydmVyKHRoaXMuZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHNwbGljZXMgPT4gdGhpcy5kYXRhTXV0YXRlZChzcGxpY2VzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgIHRoaXMueF9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnlfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5sY193aWR0aCA9IHRoaXMud2lkdGggKiAwLjg7XG4gICAgICB0aGlzLmZvY3VzX3dpZHRoID0gdGhpcy53aWR0aCAqIDAuMiAtIHRoaXMubWFyZ2luLmxlZnQ7XG5cbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy55X3NpemUgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICB0aGlzLmxjX2hlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgdGhpcy5mb2N1c19oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgdGhpcy5mb2N1c19vZmZzZXQgPSB0aGlzLmxjX3dpZHRoICsgdGhpcy5tYXJnaW4ubWlkZGxlICsgdGhpcy5tYXJnaW4ubGVmdDtcblxuICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIENvbXBsZXRlIGRyYXdpbmcgYXJlYVxuICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuICAgIC8vIExpbmVjaGFydCBhcmVhXG4gICAgdGhpcy5saW5lY2hhcnQgPSB0aGlzLnN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMubGNfd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMubGNfaGVpZ2h0KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIiwgMClcIik7XG5cbiAgICB0aGlzLmZvY3VzID0gdGhpcy5zdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLmZvY3VzX29mZnNldCArIFwiLCAwKVwiKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdGhpcy54ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmxjX3dpZHRoXSk7XG4gICAgdGhpcy55ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5mb2N1c194ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoWzAsIHRoaXMuZm9jdXNfd2lkdGhdKTtcbiAgICB0aGlzLmZvY3VzX3kgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZVJvdW5kKFt0aGlzLmZvY3VzX2hlaWdodCwgMF0pO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgdGhpcy5oZWlnaHQgKyBcIilcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgLy8geCBheGlzIGxhYmVsXG4gICAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcInlcIiwgdGhpcy5oZWlnaHQrMjYpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAudGV4dChcImRheXNcIik7XG5cbiAgICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgICB0aGlzLmZvY3VzLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIHRoaXMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKTtcblxuICAgICAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICAgICAgdGhpcy5mb2N1cy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHRoaXMuaGVpZ2h0KzI2KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIHRoaXMud2lkdGgvMilcbiAgICAgICAgICAgIC50ZXh0KFwiZGF5XCIpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB0aGlzLmxpbmVjaGFydC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgICAgLy8geSBheGlzIGxhYmVsXG4gICAgdGhpcy5saW5lY2hhcnQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiB0aGlzLnlfYXR0cmlidXRlfSk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIrIHRoaXMuZm9jdXNfd2lkdGggK1wiLCAwKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMuZm9jdXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcInlcIiwgLTQpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiB0aGlzLnlfYXR0cmlidXRlfSk7XG5cbiAgICAvLyBkZWZpbmUgdGhlIGxpbmVcbiAgICB0aGlzLnZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueCgoZCkgPT4gdGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgICAgICAueSgoZCkgPT4gdGhpcy55KGRbdGhpcy55X2F0dHJpYnV0ZV0pKTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0KCkge1xuICAgIC8vIFVwZGF0ZSBkb21haW5zXG4gICAgbGV0IHhfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5LCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWF4ID0gZDMubWF4KHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5tYXg8YW55LCBhbnk+KGFycmF5LCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG4gICAgbGV0IHhfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5LCAoZCkgPT4gZFt0aGlzLnhfYXR0cmlidXRlXSkpXG4gICAgbGV0IHlfbWluID0gZDMubWluKHRoaXMuZGF0YSwgKGFycmF5KSA9PiBkMy5taW48YW55LCBhbnk+KGFycmF5LCAoZCkgPT4gZFt0aGlzLnlfYXR0cmlidXRlXSkpXG5cbiAgICBsZXQgZm9jdXNfZGF0YSA9IDxhbnk+IFtdXG4gICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkOiBhbnlbXSkgPT4ge1xuICAgICAgICAgZm9jdXNfZGF0YS5wdXNoKGRbZC5sZW5ndGgtMV0pXG4gICAgIH0pXG5cbiAgICB0aGlzLnguZG9tYWluKFt4X21pbiwgeF9tYXhdKTtcbiAgICB0aGlzLnkuZG9tYWluKFt5X21pbiwgeV9tYXhdKTtcblxuICAgIHRoaXMuZm9jdXNfeS5kb21haW4oW3lfbWluLCB5X21heF0pO1xuXG4gICAgLy8gbGV0IGJpbnMgPSB0aGlzLmhpc3RvZ3JhbShmb2N1c19kYXRhKVxuICAgIGxldCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgICAgLnZhbHVlKChkKSA9PiBkW3RoaXMueV9hdHRyaWJ1dGVdKVxuICAgICAgICAuZG9tYWluKHRoaXMuZm9jdXNfeS5kb21haW4oKSlcbiAgICAgICAgLnRocmVzaG9sZHMoZDMucmFuZ2UoeV9taW4sIHlfbWF4LCAoeV9tYXggLSB5X21pbikgLyAxMCkpXG4gICAgICAgIChmb2N1c19kYXRhKTtcblxuICAgIHRoaXMuZm9jdXNfeC5kb21haW4oWzAsIGQzLm1heChiaW5zLCAoZDogYW55W10pID0+IGQubGVuZ3RoKV0pO1xuXG4gICAgLy8gU2VsZWN0IGNoYXJ0XG4gICAgbGV0IGNoYXJ0ID0gdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLmxpbmVjaGFydFwiKVxuICAgICAgLmRhdGEodGhpcy5kYXRhKVxuXG4gICAgbGV0IGZvY3VzX2NoYXJ0ID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIuZm9jdXNcIilcbiAgICAgICAgLmRhdGEoYmlucylcblxuICAgIC8vIFVwZGF0ZSBheGlzXG4gICAgdGhpcy5saW5lY2hhcnQuc2VsZWN0QWxsKFwiLnhBeGlzXCIpXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueCkpO1xuICAgIHRoaXMubGluZWNoYXJ0LnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cbiAgICB0aGlzLmZvY3VzLnNlbGVjdEFsbChcIi55QXhpc1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzUmlnaHQodGhpcy5mb2N1c195KSk7XG4gICAgdGhpcy5mb2N1cy5zZWxlY3RBbGwoXCIueEF4aXNcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLmZvY3VzX3gpLnRpY2tzKDIpKTtcblxuICAgIC8vIExpbmVjaGFydFxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGJhcnNcbiAgICBjaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAvLyAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCkgPT4ge1xuICAgIC8vICAgICB0aGlzLm1vID0gZFt0aGlzLnhfYXR0cmlidXRlXTtcbiAgICAgIC8vXG4gICAgLy8gICAgIHRoaXMudG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjkpO1xuICAgIC8vICAgICB0aGlzLnRvb2x0aXAuaHRtbChkW3RoaXMueF9hdHRyaWJ1dGVdKVxuICAgIC8vICAgICAgIC5zdHlsZShcImxlZnRcIiwgKHRoaXMueChkW3RoaXMueF9hdHRyaWJ1dGVdKSArIHRoaXMueC5iYW5kd2lkdGgoKSAvIDIpICsgXCJweFwiKVxuICAgIC8vICAgICAgIC5zdHlsZShcInRvcFwiLCAodGhpcy55KGRbdGhpcy55X2F0dHJpYnV0ZV0pICsgNjApICsgXCJweFwiKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAub24oXCJtb3VzZW91dFwiLCAoZCkgPT4ge1xuICAgIC8vICAgICB0aGlzLnRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgLy8gICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAvLyAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgIC8vICAgfSlcbiAgICAgIC5tZXJnZShjaGFydClcbiAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gdGhpcy52YWx1ZWxpbmUoZCkpO1xuXG4gICAgLy8gUmVtb3ZlIGJhcnNcbiAgICBjaGFydC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAvLyBCYXJjaGFydFxuICAgIC8vIEFkZCBhbmQgdXBkYXRlIGJhcnNcbiAgICBmb2N1c19jaGFydC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgLm1lcmdlKGZvY3VzX2NoYXJ0KVxuICAgICAgLmF0dHIoXCJ4XCIsIDEpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4ge1xuXHRcdCAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmZvY3VzX3koZC54MSkgKyBcIilcIjsgfSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgKGQpID0+IHsgcmV0dXJuIHRoaXMuZm9jdXNfd2lkdGggLSB0aGlzLmZvY3VzX3goZC5sZW5ndGgpOyB9KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mb2N1c195KGQueDApIC0gdGhpcy5mb2N1c195KGQueDEpIC0gMTtcbiAgICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGJhcnNcbiAgICBmb2N1c19jaGFydC5leGl0KCkucmVtb3ZlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
            this.margin = { top: 20, right: 20, bottom: 35, left: 60 };
            this.x_attribute = "x";
            this.y_attribute = "y";
            this.data = [];
            this.x_size = 900;
            this.y_size = 500;
            this.element = element;
        }
        LineChart.prototype.attached = function () {
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
            this.svg.append("text")
                .style("text-anchor", "middle")
                .attr("y", this.height + 26)
                .attr("x", this.width / 2)
                .text("days");
            this.svg.append("g")
                .attr("class", "yAxis");
            this.svg.append("text")
                .style("text-anchor", "middle")
                .attr("y", -4)
                .text(function (d) { return _this.y_attribute; });
            this.valueline = d3.line()
                .x(function (d) { return _this.x(d[_this.x_attribute]); })
                .y(function (d) { return _this.y(d[_this.y_attribute]); });
        };
        LineChart.prototype.updateChart = function () {
            var _this = this;
            var x_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.x_attribute]; }); });
            var y_max = d3.max(this.data, function (array) { return d3.max(array, function (d) { return d[_this.y_attribute]; }); });
            var x_min = d3.min(this.data, function (array) { return d3.min(array, function (d) { return d[_this.x_attribute]; }); });
            var y_min = d3.min(this.data, function (array) { return d3.min(array, function (d) { return d[_this.y_attribute]; }); });
            this.x.domain([x_min, x_max]);
            this.y.domain([y_min, y_max]);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LElBQUE7SUF0Slc7UUFBVCw0QkFBUTs7NkNBQXVEO0lBQ3REO1FBQVQsNEJBQVE7O2tEQUFtQjtJQUNsQjtRQUFULDRCQUFROztrREFBbUI7SUFHMEI7UUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3lDQUFJO0lBRy9DO1FBQVQsNEJBQVE7OzJDQUFXO0lBVlQsU0FBUztRQUZyQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1FBQzlCLDBCQUFNLEVBQUU7O09BQ0ksU0FBUyxDQXdKckI7SUF4SlksOEJBQVMiLCJmaWxlIjoiY2hhcnRzL2xpbmUtY2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXG5Abm9WaWV3KClcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnQge1xuICAvLyBPbmUtV2F5XG4gIEBiaW5kYWJsZSBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzNSwgbGVmdDogNjAgfTtcbiAgQGJpbmRhYmxlIHhfYXR0cmlidXRlID0gXCJ4XCI7XG4gIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuXG4gIC8vIFR3by1XYXlcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW87XG5cbiAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gIEBiaW5kYWJsZSBkYXRhID0gW107XG5cbiAgLy8gQXVyZWxpYSB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBlbGVtZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcblxuICAvLyBEMyB2YXJpYWJsZXNcbiAgcHJpdmF0ZSBzdmc7XG4gIHByaXZhdGUgeDtcbiAgcHJpdmF0ZSB5O1xuICBwcml2YXRlIHZhbHVlbGluZTtcblxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIHByaXZhdGUgd2lkdGg7XG4gIHByaXZhdGUgaGVpZ2h0O1xuICBwcml2YXRlIHhfc2l6ZSA9IDkwMDtcbiAgcHJpdmF0ZSB5X3NpemUgPSA1MDA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICBhdHRhY2hlZCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBkYXRhIGFycmF5IGFuZCB3YXRjaCBmb3IgY2hhbmdlc1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgdGhpcy54X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy55X3NpemUgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnlfc2l6ZSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblxuICAgICAgdGhpcy5pbml0Q2hhcnQoKVxuICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjaGFydCBpZiB0aGUgZGF0YSBjaGFuZ2VzXG4gIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0KCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgaW5pdENoYXJ0KCkge1xuICAgIC8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgY2hhcnQgZGl2IG9mIHRoZSBwYWdlXG4gICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4gICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXG4gICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QodGhpcy5lbGVtZW50KVxuICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgdGhpcy5tYXJnaW4ubGVmdCArIFwiLFwiICsgdGhpcy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB0aGlzLnggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcbiAgICB0aGlzLnkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyB0aGlzLmhlaWdodCArIFwiKVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInhBeGlzXCIpO1xuXG4gICAgICAvLyB4IGF4aXMgbGFiZWxcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCB0aGlzLmhlaWdodCsyNilcbiAgICAgICAgICAuYXR0cihcInhcIiwgdGhpcy53aWR0aC8yKVxuICAgICAgICAgIC50ZXh0KFwiZGF5c1wiKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICAgIC8vIHkgYXhpcyBsYWJlbFxuICAgIHRoaXMuc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC00KVxuICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gdGhpcy55X2F0dHJpYnV0ZX0pO1xuXG4gICAgLy8gZGVmaW5lIHRoZSBsaW5lXG4gICAgdGhpcy52YWx1ZWxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoKGQpID0+IHRoaXMueChkW3RoaXMueF9hdHRyaWJ1dGVdKSlcbiAgICAgICAgLnkoKGQpID0+IHRoaXMueShkW3RoaXMueV9hdHRyaWJ1dGVdKSk7XG4gIH1cblxuICB1cGRhdGVDaGFydCgpIHtcbiAgICAvLyBVcGRhdGUgZG9tYWluc1xuICAgIGxldCB4X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21heCA9IGQzLm1heCh0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWF4PGFueSwgYW55PihhcnJheSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB4X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheSwgKGQpID0+IGRbdGhpcy54X2F0dHJpYnV0ZV0pKVxuICAgIGxldCB5X21pbiA9IGQzLm1pbih0aGlzLmRhdGEsIChhcnJheSkgPT4gZDMubWluPGFueSwgYW55PihhcnJheSwgKGQpID0+IGRbdGhpcy55X2F0dHJpYnV0ZV0pKVxuXG4gICAgdGhpcy54LmRvbWFpbihbeF9taW4sIHhfbWF4XSk7XG4gICAgdGhpcy55LmRvbWFpbihbeV9taW4sIHlfbWF4XSk7XG5cbiAgICAvLyBTZWxlY3QgY2hhcnRcbiAgICBsZXQgY2hhcnQgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuc3ZnXCIpXG4gICAgICAuZGF0YSh0aGlzLmRhdGEpXG5cbiAgICAvLyBVcGRhdGUgYXhpc1xuICAgIHRoaXMuc3ZnLnNlbGVjdEFsbChcIi54QXhpc1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcbiAgICB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIueUF4aXNcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG4gICAgLy8gQWRkIGFuZCB1cGRhdGUgYmFyc1xuICAgIGNoYXJ0LmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgIC8vICAgLm9uKFwibW91c2VvdmVyXCIsIChkKSA9PiB7XG4gICAgLy8gICAgIHRoaXMubW8gPSBkW3RoaXMueF9hdHRyaWJ1dGVdO1xuICAgICAgLy9cbiAgICAvLyAgICAgdGhpcy50b29sdGlwLnRyYW5zaXRpb24oKVxuICAgIC8vICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgLy8gICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOSk7XG4gICAgLy8gICAgIHRoaXMudG9vbHRpcC5odG1sKGRbdGhpcy54X2F0dHJpYnV0ZV0pXG4gICAgLy8gICAgICAgLnN0eWxlKFwibGVmdFwiLCAodGhpcy54KGRbdGhpcy54X2F0dHJpYnV0ZV0pICsgdGhpcy54LmJhbmR3aWR0aCgpIC8gMikgKyBcInB4XCIpXG4gICAgLy8gICAgICAgLnN0eWxlKFwidG9wXCIsICh0aGlzLnkoZFt0aGlzLnlfYXR0cmlidXRlXSkgKyA2MCkgKyBcInB4XCIpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5vbihcIm1vdXNlb3V0XCIsIChkKSA9PiB7XG4gICAgLy8gICAgIHRoaXMudG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgLy8gICB9KVxuICAgICAgLm1lcmdlKGNoYXJ0KVxuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiB0aGlzLnZhbHVlbGluZShkKSk7XG5cbiAgICAvLyBSZW1vdmUgYmFyc1xuICAgIGNoYXJ0LmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('charts/parallel-coordinates-vertical',["require", "exports", "d3", "aurelia-framework"], function (require, exports, d3, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parallelCoordinatesVertical = (function () {
        function parallelCoordinatesVertical(element, bindingEngine) {
            this.bindingEngine = bindingEngine;
            this.margin = { top: 60, right: 20, bottom: 30, left: 40 };
            this.brushing = new Map();
            this.data = [];
            this.x = {};
            this.x_size = 500;
            this.y_size = 500;
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
        parallelCoordinatesVertical.prototype.unbind = function () {
            this.subscription.dispose();
        };
        parallelCoordinatesVertical.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x[p](d[p]), _this.y(p)];
            }));
        };
        parallelCoordinatesVertical.prototype.brushHighlight = function (g, x, foreground) {
            var actives = [];
            var extents = [];
            g.selectAll(".brush")
                .filter(function (d) {
                return d3.brushSelection(this);
            })
                .each(function (d) {
                var brush_selection = d3.brushSelection(this);
                if (brush_selection != null) {
                    actives.push(d);
                    extents.push([x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])]);
                }
            });
            foreground.style("display", function (d) {
                return actives.every(function (p, i) {
                    return extents[i][0] <= d[p] && d[p] <= extents[i][1];
                }) ? null : "none";
            });
        };
        parallelCoordinatesVertical.prototype.getBrushing = function (g, x, brushing) {
            g.selectAll(".brush")
                .filter(function (d) {
                return d3.brushSelection(this);
            })
                .each(function (d) {
                var brush_selection = d3.brushSelection(this);
                if (brush_selection != null) {
                    brushing.set(d, [x[d].invert(brush_selection[1]), x[d].invert(brush_selection[0])]);
                }
            });
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
        parallelCoordinatesVertical.prototype.updateChart = function () {
            var _this = this;
            this.dimensions = d3.keys(this.data[0]).filter(function (d) {
                return d != "name";
            });
            this.dimensions.map(function (dim) {
                var ext = d3.extent(_this.data, function (data) {
                    return data[dim];
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
            var width = this.width;
            var x = this.x;
            var y = this.y;
            var foreground = this.foreground;
            var brushHighlight = this.brushHighlight;
            var getBrushing = this.getBrushing;
            var brushing = this.brushing;
            var g = this.svg.selectAll(".dimension")
                .data(this.dimensions)
                .enter().append("g")
                .attr("class", "dimension")
                .attr("transform", function (d) {
                return "translate(0," + y(d) + ")";
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
                var _this = this;
                d3.select(this).call(d3.brushX()
                    .extent([[0, -9], [width, 9]])
                    .on("start", function (d, i) {
                    d3.event.sourceEvent.stopPropagation();
                })
                    .on("brush", function (d, i) {
                    if (!d3.event.sourceEvent)
                        return;
                    if (!d3.event.selection)
                        return;
                    brushHighlight(g, x, foreground);
                })
                    .on("end", function (d, i) {
                    if (d3.brushSelection(_this) == null) {
                        brushHighlight(g, x, foreground);
                        brushing.delete(d);
                    }
                    getBrushing(g, x, brushing);
                }));
            });
        };
        return parallelCoordinatesVertical;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], parallelCoordinatesVertical.prototype, "margin", void 0);
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
    exports.parallelCoordinatesVertical = parallelCoordinatesVertical;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy12ZXJ0aWNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLDJCQUEyQjtRQTZCcEMscUNBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTNCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBR1YsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFHakUsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQVFaLE1BQUMsR0FBRyxFQUFFLENBQUM7WUFRUCxXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsV0FBTSxHQUFHLEdBQUcsQ0FBQztZQUtqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDO1FBR0QsOENBQVEsR0FBUjtZQUFBLGlCQWtCQztZQWpCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO3FCQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDekQsQ0FBQztZQUdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO1lBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFBO1lBRXJELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJ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QUQsQ0FwUEEsQUFvUEMsSUFBQTtJQWxQYTtRQUFULDRCQUFROzsrREFBdUQ7SUFHVjtRQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7aUVBQXNCO0lBR2pFO1FBQVQsNEJBQVE7OzZEQUFXO0lBUlgsMkJBQTJCO1FBRnZDLDBCQUFNLENBQUMsT0FBTyxFQUFFLGlDQUFhLENBQUM7UUFDOUIsMEJBQU0sRUFBRTs7T0FDSSwyQkFBMkIsQ0FvUHZDO0lBcFBZLGtFQUEyQiIsImZpbGUiOiJjaGFydHMvcGFyYWxsZWwtY29vcmRpbmF0ZXMtdmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7aW5qZWN0LCBub1ZpZXcsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5kZWNsYXJlIHZhciBQYXJDb29yZHM6IGFueTtcblxuQGluamVjdChFbGVtZW50LCBCaW5kaW5nRW5naW5lKVxuQG5vVmlldygpXG5leHBvcnQgY2xhc3MgcGFyYWxsZWxDb29yZGluYXRlc1ZlcnRpY2FsIHtcbiAgICAvLyBPbmUtV2F5XG4gICAgQGJpbmRhYmxlIG1hcmdpbiA9IHsgdG9wOiA2MCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA0MCB9O1xuXG4gICAgLy8gVHdvLVdheVxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gICAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAgIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gICAgLy8gRDMgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBzdmc7XG4gICAgcHJpdmF0ZSB4ID0ge307XG4gICAgcHJpdmF0ZSB5O1xuICAgIHByaXZhdGUgZGltZW5zaW9ucztcbiAgICBwcml2YXRlIGxpbmU7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICAgIHByaXZhdGUgZm9yZWdyb3VuZDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICBwcml2YXRlIHhfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHlfc2l6ZSA9IDUwMDtcbiAgICBwcml2YXRlIHdpZHRoO1xuICAgIHByaXZhdGUgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcHJpdmF0ZSBiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYmluZGluZyBhdHRyaWJ1dGVzXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgZGF0YSBhcnJheSBhbmQgd2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb25PYnNlcnZlcih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzcGxpY2VzID0+IHRoaXMuZGF0YU11dGF0ZWQoc3BsaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICAgICAgICB0aGlzLnhfc2l6ZSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIHRoaXMueV9zaXplID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICAgIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgd2F0Y2hlciBhZnRlciBkaXNwb3NpbmcgdGhlIGNsYXNzXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gRDMgZnVuY3Rpb25zXG5cbiAgICAvLyBEcmF3IHRoZSBsaW5lc1xuICAgIHByaXZhdGUgcGF0aChkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmUodGhpcy5kaW1lbnNpb25zLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnhbcF0oZFtwXSksIHRoaXMueShwKV07IH0pKTtcbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGFjdGl2ZSBsaW5lc1xuICAgIHByaXZhdGUgYnJ1c2hIaWdobGlnaHQoZywgeCwgZm9yZWdyb3VuZCkge1xuICAgICAgICBsZXQgYWN0aXZlcyA9IDxhbnk+W107XG4gICAgICAgIGxldCBleHRlbnRzID0gPGFueT5bXTtcblxuICAgICAgICAvLyBGaW5kIG91dCB3aGF0IGlzIHdpdGhpbiB0aGUgYnJ1c2hlc1xuICAgICAgICBnLnNlbGVjdEFsbChcIi5icnVzaFwiKVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24odGhpcywgZCkge1xuICAgICAgICAgICAgbGV0IGJydXNoX3NlbGVjdGlvbiA9ICBkMy5icnVzaFNlbGVjdGlvbih0aGlzKVxuXG4gICAgICAgICAgICBpZihicnVzaF9zZWxlY3Rpb24gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVzLnB1c2goZClcbiAgICAgICAgICAgICAgICBleHRlbnRzLnB1c2goW3hbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblsxXSksIHhbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblswXSldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gQnJpbmcgYnJ1c2hlZCBsaW5lcyBpbnRvIGZvcmVncm91bmRcbiAgICAgICAgICBmb3JlZ3JvdW5kLnN0eWxlKFwiZGlzcGxheVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY3RpdmVzLmV2ZXJ5KGZ1bmN0aW9uKHAsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZW50c1tpXVswXSA8PSBkW3BdICYmIGRbcF0gPD0gZXh0ZW50c1tpXVsxXTtcbiAgICAgICAgICAgICAgfSkgPyBudWxsIDogXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV4dGVybmFsIHZhcmlhYmxlcyB3aXRoIGN1cnJlbnQgYnJ1c2hlc1xuICAgIHByaXZhdGUgZ2V0QnJ1c2hpbmcoZywgeCwgYnJ1c2hpbmcpIHtcbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYnJ1c2hcIilcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5icnVzaFNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgbGV0IGJydXNoX3NlbGVjdGlvbiA9ICBkMy5icnVzaFNlbGVjdGlvbih0aGlzKVxuXG4gICAgICAgICAgICAgIGlmKGJydXNoX3NlbGVjdGlvbiAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBicnVzaGluZy5zZXQoZCwgW3hbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblsxXSksIHhbZF0uaW52ZXJ0KGJydXNoX3NlbGVjdGlvblswXSldKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENoYXJ0KCkge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGNoYXJ0IGRpdiBvZiB0aGUgcGFnZVxuICAgICAgICAvLyBhcHBlbmQgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXG4gICAgICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMubWFyZ2luLmxlZnQgKyBcIixcIiArIHRoaXMubWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHggcmFuZ2VcbiAgICAgICAgdGhpcy55ID0gZDMuc2NhbGVQb2ludCgpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSk7XG5cbiAgICAgICAgLy8gQmFzaWMgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5saW5lID0gZDMubGluZSgpXG4gICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhcnQoKSB7XG4gICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGFzZXQgZGltZW5zaW9uczogS2V5cyBvZiB0aGUgbWFwXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGQzLmtleXModGhpcy5kYXRhWzBdKS5maWx0ZXIoKGQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkICE9IFwibmFtZVwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjb3JyZXNwb25kaW5nIHkgYXhpc1xuICAgICAgICAvLyBDdXJyZW50bHkgb25seSBsaW5lYXIgdmFsdWVzXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5tYXAoKGRpbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4dCA9IDxhbnk+IGQzLmV4dGVudCh0aGlzLmRhdGEsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbZGltXTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGV4dFswXSA9PSBleHRbMV0pIHtcbiAgICAgICAgICAgICAgICBleHRbMF0gLT0gZXh0WzBdKjAuMTtcbiAgICAgICAgICAgICAgICBleHRbMV0gKz0gZXh0WzFdKjAuMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy54W2RpbV0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbdGhpcy53aWR0aCwgMF0pXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oZXh0KVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHggYXhpc1xuICAgICAgICB0aGlzLnkuZG9tYWluKHRoaXMuZGltZW5zaW9ucyk7XG5cbiAgICAgICAgLy8gQWRkIGdyZXkgYmFja2dyb3VuZCBsaW5lcyBmb3IgY29udGV4dC5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhY2tncm91bmRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHsgcmV0dXJuIHRoaXMucGF0aChkKX0pO1xuXG4gICAgICAgIC8vIEFkZCBibHVlIGZvcmVncm91bmQgbGluZXMgZm9yIGZvY3VzLlxuICAgICAgICB0aGlzLmZvcmVncm91bmQgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZm9yZWdyb3VuZFwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGQpfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxvY2FsIHZlcnNpb25zIG9mIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBkdWUgdG8gdGhlIG5hdHVyZSBvZiBUUyBhbmQgRDNcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG4gICAgICAgIGxldCBmb3JlZ3JvdW5kID0gdGhpcy5mb3JlZ3JvdW5kO1xuICAgICAgICBsZXQgYnJ1c2hIaWdobGlnaHQgPSB0aGlzLmJydXNoSGlnaGxpZ2h0O1xuICAgICAgICBsZXQgZ2V0QnJ1c2hpbmcgPSB0aGlzLmdldEJydXNoaW5nO1xuICAgICAgICBsZXQgYnJ1c2hpbmcgPSB0aGlzLmJydXNoaW5nO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nIGFyZWFcbiAgICAgICAgbGV0IGcgPSB0aGlzLnN2Zy5zZWxlY3RBbGwoXCIuZGltZW5zaW9uXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRpbWVuc2lvbnMpXG4gICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIHkoZCkgKyBcIilcIjsgfSk7XG5cbiAgICAgICAgLy8gQWRkIGF4aXNcbiAgICAgICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbih0aGlzLCBkKSB7XG4gICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jYWxsKGQzLmF4aXNUb3AoeFtkXSkpO1xuICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCB0aWx0ZXMgZm9yIHRoZSBheGlzXG4gICAgICAgIGcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCAtOSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiB7IHJldHVybiBkOyB9KTtcblxuICAgICAgICAvLyBBZGQgYW5kIHN0b3JlIGEgYnJ1c2ggZm9yIGVhY2ggYXhpcy5cbiAgICAgICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnJ1c2hcIilcbiAgICAgICAgICAgIC8vIFRoaXMgcGFydCBpcyB2ZXJ5IGltcG9ydGFudCFcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uKGQpIGlzIHVzZWQgaW5zdGVhZCBvZiAoZCkgPT5cbiAgICAgICAgICAgIC8vIFRoZSByZWFzb24gaXMgdGhhdCB3aXRoaW4gZnVuY3Rpb24oZCkgdGhpcyBpcyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gYW5kIHRoaXMgd2l0aGluIChkKSA9PiBpcyB0aGUgVFMgY2xhc3Mgd2hpY2ggbWVhbnMgeW91IG5lZWQgYSBsb2NhbCB2ZXJzaW9uIG9mIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICAgICAgLy8gZm9yIGV2ZXJ5dGhpbmcgdXNlZCB3aXRoaW4gZnVuY3Rpb24oZClcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKHRoaXMsIGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoZDMuYnJ1c2hYKClcbiAgICAgICAgICAgICAgICAuZXh0ZW50KFtbMCwgLTldLCBbd2lkdGgsIDldXSlcbiAgICAgICAgICAgICAgICAgLm9uKFwic3RhcnRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGQzLmV2ZW50LnNvdXJjZUV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAub24oXCJicnVzaFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkgcmV0dXJuOyAvLyBPbmx5IHRyYW5zaXRpb24gYWZ0ZXIgaW5wdXQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc2VsZWN0aW9uKSByZXR1cm47IC8vIElnbm9yZSBlbXB0eSBzZWxlY3Rpb25zLlxuXG4gICAgICAgICAgICAgICAgICAgIGJydXNoSGlnaGxpZ2h0KGcsIHgsIGZvcmVncm91bmQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYnJ1c2ggd2FzIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQzLmJydXNoU2VsZWN0aW9uKHRoaXMpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJydXNoSGlnaGxpZ2h0KGcsIHgsIGZvcmVncm91bmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJydXNoaW5nLmRlbGV0ZShkKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0QnJ1c2hpbmcoZywgeCwgYnJ1c2hpbmcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            this.brushing = new Map();
            this.data = [];
            this.y = {};
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
        parallelCoordinates.prototype.path = function (d) {
            var _this = this;
            return this.line(this.dimensions.map(function (p) {
                return [_this.x(p), _this.y[p](d[p])];
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
        parallelCoordinates.prototype.getBrushing = function (g, y, brushing) {
            g.selectAll(".brush")
                .filter(function (d) {
                return d3.brushSelection(this);
            })
                .each(function (d) {
                brushing.set(d, [y[d].invert(d3.brushSelection(this)[1]), y[d].invert(d3.brushSelection(this)[0])]);
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
            this.line = d3.line()
                .curve(d3.curveMonotoneY);
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
            var getBrushing = this.getBrushing;
            var brushing = this.brushing;
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
                        brushing.delete(d);
                    }
                    getBrushing(g, y, brushing);
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
    ], parallelCoordinates.prototype, "brushing", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9wYXJhbGxlbC1jb29yZGluYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLG1CQUFtQjtRQWdDNUIsNkJBQVksT0FBTyxFQUFVLGFBQWE7WUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtZQTlCaEMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RELFdBQU0sR0FBRyxHQUFHLENBQUM7WUFDYixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFDbEIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7WUFHMEIsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFHakUsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQVNaLE1BQUMsR0FBRyxFQUFFLENBQUM7WUFZWCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDO1FBR0Qsc0NBQVEsR0FBUjtZQUFBLGlCQWVDO1lBZEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRVosSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtxQkFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFHRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJ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QUFNLENBQUM7b0JBRWhDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUNwQyxDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUVaLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7d0JBRWhDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3RCLENBQUM7b0JBRUQsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQyxDQUNMLENBQUE7WUFBQSxDQUFBLEFBQUMsQ0FBQSxDQUFDO1FBQ0gsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FqT1IsQUFpT1MsSUFBQTtJQS9OSztRQUFULDRCQUFROzt1REFBdUQ7SUFDdEQ7UUFBVCw0QkFBUTs7dURBQWM7SUFDYjtRQUFULDRCQUFROzt1REFBYztJQUNiO1FBQVQsNEJBQVE7OzREQUFtQjtJQUNsQjtRQUFULDRCQUFROzs0REFBbUI7SUFHMEI7UUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3lEQUFzQjtJQUdqRTtRQUFULDRCQUFROztxREFBVztJQVpYLG1CQUFtQjtRQUYvQiwwQkFBTSxDQUFDLE9BQU8sRUFBRSxpQ0FBYSxDQUFDO1FBQzlCLDBCQUFNLEVBQUU7O09BQ0ksbUJBQW1CLENBaU92QjtJQWpPSSxrREFBbUIiLCJmaWxlIjoiY2hhcnRzL3BhcmFsbGVsLWNvb3JkaW5hdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2luamVjdCwgbm9WaWV3LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIEJpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZGVjbGFyZSB2YXIgUGFyQ29vcmRzOiBhbnk7XG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbkBub1ZpZXcoKVxuZXhwb3J0IGNsYXNzIHBhcmFsbGVsQ29vcmRpbmF0ZXMge1xuICAgIC8vIE9uZS1XYXlcbiAgICBAYmluZGFibGUgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG4gICAgQGJpbmRhYmxlIHhfc2l6ZSA9IDkwMDtcbiAgICBAYmluZGFibGUgeV9zaXplID0gNTAwO1xuICAgIEBiaW5kYWJsZSB4X2F0dHJpYnV0ZSA9IFwieFwiO1xuICAgIEBiaW5kYWJsZSB5X2F0dHJpYnV0ZSA9IFwieVwiO1xuXG4gICAgLy8gVHdvLVdheVxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIGJydXNoaW5nID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gT2JzZXJ2ZWQgVmFyaWFibGVzXG4gICAgQGJpbmRhYmxlIGRhdGEgPSBbXTtcblxuICAgIC8vIEF1cmVsaWEgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuXG4gICAgLy8gRDMgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBzdmc7XG4gICAgcHJpdmF0ZSB4O1xuICAgIHByaXZhdGUgeSA9IHt9O1xuICAgIHByaXZhdGUgZGltZW5zaW9ucztcbiAgICBwcml2YXRlIGxpbmU7XG4gICAgcHJpdmF0ZSBheGlzO1xuICAgIHByaXZhdGUgYmFja2dyb3VuZDtcbiAgICBwcml2YXRlIGZvcmVncm91bmQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gICAgcHJpdmF0ZSB3aWR0aDtcbiAgICBwcml2YXRlIGhlaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByaXZhdGUgYmluZGluZ0VuZ2luZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGJpbmRpbmcgYXR0cmlidXRlc1xuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAvLyBzdWJzY3JpYmUgdG8gdGhlIGRhdGEgYXJyYXkgYW5kIHdhdGNoIGZvciBjaGFuZ2VzXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uT2JzZXJ2ZXIodGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3BsaWNlcyA9PiB0aGlzLmRhdGFNdXRhdGVkKHNwbGljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMueF9zaXplIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMueV9zaXplIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgaWYgdGhlIGRhdGEgY2hhbmdlc1xuICAgIGRhdGFNdXRhdGVkKHNwbGljZXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydCgpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgd2F0Y2hlciBhZnRlciBkaXNwb3NpbmcgdGhlIGNsYXNzXG4gICAgdW5iaW5kKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gRDMgZnVuY3Rpb25zXG5cbiAgICAvLyBEcmF3IHRoZSBsaW5lc1xuICAgIHByaXZhdGUgcGF0aChkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmUodGhpcy5kaW1lbnNpb25zLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLngocCksIHRoaXMueVtwXShkW3BdKV07IH0pKTtcbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGFjdGl2ZSBsaW5lc1xuICAgIHByaXZhdGUgYnJ1c2hIaWdobGlnaHQoZywgeSwgZm9yZWdyb3VuZCkge1xuICAgICAgICBsZXQgYWN0aXZlcyA9IFtdO1xuICAgICAgICBsZXQgZXh0ZW50cyA9IFtdO1xuXG4gICAgICAgIC8vIEZpbmQgb3V0IHdoYXQgaXMgd2l0aGluIHRoZSBicnVzaGVzXG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmJydXNoXCIpXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMuYnJ1c2hTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBhY3RpdmVzLnB1c2goZClcbiAgICAgICAgICAgIGV4dGVudHMucHVzaChbeVtkXS5pbnZlcnQoZDMuYnJ1c2hTZWxlY3Rpb24odGhpcylbMV0pLCB5W2RdLmludmVydChkMy5icnVzaFNlbGVjdGlvbih0aGlzKVswXSldKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gQnJpbmcgYnJ1c2hlZCBsaW5lcyBpbnRvIGZvcmVncm91bmRcbiAgICAgICAgICBmb3JlZ3JvdW5kLnN0eWxlKFwiZGlzcGxheVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhY3RpdmVzLmV2ZXJ5KGZ1bmN0aW9uKHAsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZW50c1tpXVswXSA8PSBkW3BdICYmIGRbcF0gPD0gZXh0ZW50c1tpXVsxXTtcbiAgICAgICAgICAgICAgfSkgPyBudWxsIDogXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV4dGVybmFsIHZhcmlhYmxlcyB3aXRoIGN1cnJlbnQgYnJ1c2hlc1xuICAgIHByaXZhdGUgZ2V0QnJ1c2hpbmcoZywgeSwgYnJ1c2hpbmcpIHtcbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYnJ1c2hcIilcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5icnVzaFNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGJydXNoaW5nLnNldChkLCBbeVtkXS5pbnZlcnQoZDMuYnJ1c2hTZWxlY3Rpb24odGhpcylbMV0pLCB5W2RdLmludmVydChkMy5icnVzaFNlbGVjdGlvbih0aGlzKVswXSldKVxuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBjaGFydCBkaXYgb2YgdGhlIHBhZ2VcbiAgICAgICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4gICAgICAgIC8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyB0aGlzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAgICAgLy8gc2V0IHRoZSB4IHJhbmdlXG4gICAgICAgIHRoaXMueCA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG5cbiAgICAgICAgLy8gQmFzaWMgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICB0aGlzLmxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVZKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCgpIHtcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0YXNldCBkaW1lbnNpb25zOiBLZXlzIG9mIHRoZSBtYXBcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZDMua2V5cyh0aGlzLmRhdGFbMF0pLmZpbHRlcigoZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGQgIT0gXCJuYW1lXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvcnJlc3BvbmRpbmcgeSBheGlzXG4gICAgICAgIC8vIEN1cnJlbnRseSBvbmx5IGxpbmVhciB2YWx1ZXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLm1hcCgoZGltKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnlbZGltXSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHRoaXMuZGF0YSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2RpbV07XG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHggYXhpc1xuICAgICAgICB0aGlzLnguZG9tYWluKHRoaXMuZGltZW5zaW9ucyk7XG5cbiAgICAgICAgLy8gQWRkIGdyZXkgYmFja2dyb3VuZCBsaW5lcyBmb3IgY29udGV4dC5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhY2tncm91bmRcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHsgcmV0dXJuIHRoaXMucGF0aChkKX0pO1xuXG4gICAgICAgIC8vIEFkZCBibHVlIGZvcmVncm91bmQgbGluZXMgZm9yIGZvY3VzLlxuICAgICAgICB0aGlzLmZvcmVncm91bmQgPSB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZm9yZWdyb3VuZFwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4geyByZXR1cm4gdGhpcy5wYXRoKGQpfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxvY2FsIHZlcnNpb25zIG9mIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBkdWUgdG8gdGhlIG5hdHVyZSBvZiBUUyBhbmQgRDNcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG4gICAgICAgIGxldCBheGlzID0gdGhpcy5heGlzO1xuICAgICAgICBsZXQgZm9yZWdyb3VuZCA9IHRoaXMuZm9yZWdyb3VuZDtcbiAgICAgICAgbGV0IGJydXNoSGlnaGxpZ2h0ID0gdGhpcy5icnVzaEhpZ2hsaWdodDtcbiAgICAgICAgbGV0IGdldEJydXNoaW5nID0gdGhpcy5nZXRCcnVzaGluZztcbiAgICAgICAgbGV0IGJydXNoaW5nID0gdGhpcy5icnVzaGluZztcblxuICAgICAgICAvLyBDcmVhdGUgZHJhd2luZyBhcmVhXG4gICAgICAgIGxldCBnID0gdGhpcy5zdmcuc2VsZWN0QWxsKFwiLmRpbWVuc2lvblwiKVxuICAgICAgICAgICAgLmRhdGEodGhpcy5kaW1lbnNpb25zKVxuICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkaW1lbnNpb25cIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkKSArIFwiKVwiOyB9KTtcblxuICAgICAgICAvLyBBZGQgYXhpc1xuICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNhbGwoYXhpcy5zY2FsZSh5W2RdKSk7KTtcblxuICAgICAgICAvLyBBZGQgdGlsdGVzIGZvciB0aGUgYXhpc1xuICAgICAgICBnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgLTkpXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4geyByZXR1cm4gZDsgfSk7XG5cbiAgICAgICAgLy8gQWRkIGFuZCBzdG9yZSBhIGJydXNoIGZvciBlYWNoIGF4aXMuXG4gICAgICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJydXNoXCIpXG4gICAgICAgICAgICAvLyBUaGlzIHBhcnQgaXMgdmVyeSBpbXBvcnRhbnQhXG4gICAgICAgICAgICAvLyBmdW5jdGlvbihkKSBpcyB1c2VkIGluc3RlYWQgb2YgKGQpID0+XG4gICAgICAgICAgICAvLyBUaGUgcmVhc29uIGlzIHRoYXQgd2l0aGluIGZ1bmN0aW9uKGQpIHRoaXMgaXMgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGFuZCB0aGlzIHdpdGhpbiAoZCkgPT4gaXMgdGhlIFRTIGNsYXNzIHdoaWNoIG1lYW5zIHlvdSBuZWVkIGEgbG9jYWwgdmVyc2lvbiBvZiBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgICAgIC8vIGZvciBldmVyeXRoaW5nIHVzZWQgd2l0aGluIGZ1bmN0aW9uKGQpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jYWxsKGQzLmJydXNoWSgpXG4gICAgICAgICAgICAgICAgLmV4dGVudChbWy05LDBdLCBbOSwgaGVpZ2h0XV0pXG4gICAgICAgICAgICAgICAgIC5vbihcInN0YXJ0XCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBkMy5ldmVudC5zb3VyY2VFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgLm9uKFwiYnJ1c2hcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIGlmICghZDMuZXZlbnQuc291cmNlRXZlbnQpIHJldHVybjsgLy8gT25seSB0cmFuc2l0aW9uIGFmdGVyIGlucHV0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWQzLmV2ZW50LnNlbGVjdGlvbikgcmV0dXJuOyAvLyBJZ25vcmUgZW1wdHkgc2VsZWN0aW9ucy5cblxuICAgICAgICAgICAgICAgICAgICBicnVzaEhpZ2hsaWdodChnLCB5LCBmb3JlZ3JvdW5kKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwiZW5kXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGJydXNoIHdhcyByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChkMy5icnVzaFNlbGVjdGlvbih0aGlzKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicnVzaEhpZ2hsaWdodChnLCB5LCBmb3JlZ3JvdW5kKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicnVzaGluZy5kZWxldGUoZClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGdldEJydXNoaW5nKGcsIHksIGJydXNoaW5nKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('empty/no-selection',["require", "exports", "aurelia-event-aggregator", "aurelia-framework"], function (require, exports, aurelia_event_aggregator_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection(ea) {
            this.ea = ea;
            this.message = "No Route Selected";
            this.sendMessage();
        }
        NoSelection.prototype.sendMessage = function () {
            console.log("send:" + this.message);
            this.ea.publish('model_data', this.message);
        };
        return NoSelection;
    }());
    NoSelection = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], NoSelection);
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5L25vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLFdBQVc7UUFFcEIscUJBQVksRUFBbUI7WUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO1lBRW5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBRUQsaUNBQVcsR0FBWDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFTCxrQkFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksV0FBVztRQUR2Qiw4QkFBVTt5Q0FHUywwQ0FBZTtPQUZ0QixXQUFXLENBY3ZCO0lBZFksa0NBQVciLCJmaWxlIjoiZW1wdHkvbm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGVhOiBFdmVudEFnZ3JlZ2F0b3Ipe1xuICAgICB0aGlzLmVhID0gZWE7XG4gICAgIHRoaXMubWVzc2FnZSA9IFwiTm8gUm91dGUgU2VsZWN0ZWRcIjtcblxuICAgICB0aGlzLnNlbmRNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kOlwiK3RoaXMubWVzc2FnZSlcbiAgICAgICAgdGhpcy5lYS5wdWJsaXNoKCdtb2RlbF9kYXRhJywgdGhpcy5tZXNzYWdlKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
            this.NY = 1;
            this.ND = this.NY * 365;
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
            this.params = [];
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
            var rho = [0.4, 0.5, 0.7];
            var v = [1 / (60 * 365.0), 1 / (70 * 365.0), 1 / (75 * 365.0)];
            var mu = [1 / (70 * 365.0), 1 / (65 * 365.0), 1 / (60 * 365.0)];
            var beta = [400 / 365.0, 520 / 365.0, 600 / 365.0];
            var gamma = [1 / 6.0, 1 / 7.0, 1 / 8.0];
            return this.cartesian([rho, v, mu, beta, gamma]);
        };
        Vspa.prototype.vspa = function () {
            var _this = this;
            this.ND = this.NY * 365;
            this.R0 = 1 - this.S0 - this.I0;
            this.INPUT = [+this.S0, +this.I0, +this.R0];
            var params = this.get_params();
            var time_range = [];
            for (var i = 0; i < this.ND; i++) {
                time_range.push(i);
            }
            params.forEach(function (d) {
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
                _this.params.push({
                    "rho": _this.rho,
                    "v": _this.v,
                    "mu": _this.mu,
                    "beta": _this.beta,
                    "gamma": _this.gamma
                });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxLQUFJLENBQUMsQ0FBQztvQkFDWCxJQUFJLEVBQUUsS0FBSSxDQUFDLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJO29CQUNqQixPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUs7aUJBQ3RCLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0E3SEEsQUE2SEMsSUFBQTtJQTdIWSxJQUFJO1FBRGhCLDhCQUFVO09BQ0UsSUFBSSxDQTZIaEI7SUE3SFksb0JBQUkiLCJmaWxlIjoidnBzYS92cHNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbi8vIFRoaXMgbWFnaWMgbGluZSByZW1vdmVkIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgbnVtZXJpY1xuZGVjbGFyZSB2YXIgbnVtZXJpYzogYW55O1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFZzcGEge1xuICAgIC8vIFZQU0FcbiAgICBwYXJhbTEgPSAxO1xuICAgIHBhcmFtMiA9IDE7XG5cbiAgICAvLyBTSVIgTW9kZWxcbiAgICBUUyA9IDEuMFxuICAgIE5ZID0gMVxuICAgIE5EID0gdGhpcy5OWSozNjVcblxuICAgIFMwID0gMC4xXG4gICAgSTAgPSAxZS00XG4gICAgUjAgPSAxIC0gdGhpcy5TMCAtIHRoaXMuSTBcblxuICAgIC8vIE1vcnRhbGl0eSBwcm9iYWJpbHR5LCBJIGRpZXMgYmVmb3JlIG5hdHVyYWwgZGVhdGggb3IgcmVjb3ZlcnlcbiAgICByaG8gPSAwLjVcbiAgICAvLyBQZXIgY2FwdGlhIGRlYXRoIHJhdGUgIGZyb20gbmF0dXJhbCBjYXVzZXNcbiAgICB2ID0gMS8oNzAqMzY1LjApXG4gICAgLy8gUG9wdWxhdGlvbiBiaXJ0aCByYXRlXG4gICAgbXUgPSAxLyg3MCozNjUuMClcbiAgICAvLyBUcmFuc21pc3Npb24gcmF0ZTogSSAtPiBTLiBJbmNsdWRlcyBlbmNvdW50ZXIgYW5kIHRyYW5zbWlzc2lvbiByYXRlXG4gICAgYmV0YT01MjAvMzY1LjBcbiAgICAvLyBSZWNvdmVyeSByYXRlXG4gICAgZ2FtbWE9MS83LjBcblxuICAgIElOUFVUID0gW3RoaXMuUzAsIHRoaXMuSTAsIHRoaXMuUjBdXG5cbiAgICBkYXRhID0gPGFueVtdPiBbXVxuICAgIHBhcmFtcyA9IDxhbnlbXT4gW11cblxuICAgIHByaXZhdGUgU0lSID0gKHQsIElOUCkgPT4ge1xuICAgIFx0bGV0IFkgPSBbMCwgMCAsMF1cbiAgICBcdGxldCBWID0gSU5QXG5cbiAgICAgICAgWVswXSA9IHRoaXMudiAtIHRoaXMuYmV0YSAqIFZbMF0gKiBWWzFdIC8gVi5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC0gdGhpcy5tdSAqIFZbMF1cbiAgICBcdFlbMV0gPSB0aGlzLmJldGEgKiBWWzBdICogVlsxXSAvIFYucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAtICh0aGlzLmdhbW1hICsgdGhpcy5tdSkgKiBWWzFdLygxLXRoaXMucmhvKVxuICAgIFx0WVsyXSA9IHRoaXMuZ2FtbWEgKiBWWzFdIC0gdGhpcy5tdSAqIFZbMl1cblxuICAgIFx0cmV0dXJuIFlcbiAgICB9XG5cbiAgICBjYXJ0ZXNpYW4oYXJnKSB7XG4gICAgICAgIGxldCByID0gPGFueVtdPiBbXTtcbiAgICAgICAgLy8gbGV0IGFyZyA9IGFyZ3VtZW50cztcbiAgICAgICAgbGV0IG1heCA9IGFyZy5sZW5ndGgtMTtcblxuICAgICAgICBmdW5jdGlvbiBoZWxwZXIoYXJyLCBpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqPTAsIGw9YXJnW2ldLmxlbmd0aDsgajxsOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFyci5zbGljZSgwKTsgLy8gY2xvbmUgYXJyXG4gICAgICAgICAgICAgICAgYS5wdXNoKGFyZ1tpXVtqXSk7XG4gICAgICAgICAgICAgICAgaWYgKGk9PW1heClcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyKGEsIGkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGVscGVyKFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZ2V0X3BhcmFtcygpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IDxhbnlbXT4gW11cblxuICAgICAgICAvLyBNb3J0YWxpdHkgcHJvYmFiaWx0eSwgSSBkaWVzIGJlZm9yZSBuYXR1cmFsIGRlYXRoIG9yIHJlY292ZXJ5XG4gICAgICAgIC8vIGxldCByaG8gPSBbMC4zLCAwLjQsIDAuNSwgMC42LCAwLjddXG4gICAgICAgIGxldCByaG8gPSBbMC40LCAwLjUsIDAuN11cbiAgICAgICAgLy8gUGVyIGNhcHRpYSBkZWF0aCByYXRlICBmcm9tIG5hdHVyYWwgY2F1c2VzXG4gICAgICAgIGxldCB2ID0gWzEvKDYwKjM2NS4wKSwgMS8oNzAqMzY1LjApLCAxLyg3NSozNjUuMCldXG4gICAgICAgIC8vIFBvcHVsYXRpb24gYmlydGggcmF0ZVxuICAgICAgICBsZXQgbXUgPSBbMS8oNzAqMzY1LjApLDEvKDY1KjM2NS4wKSwgMS8oNjAqMzY1LjApXVxuICAgICAgICAvLyBUcmFuc21pc3Npb24gcmF0ZTogSSAtPiBTLiBJbmNsdWRlcyBlbmNvdW50ZXIgYW5kIHRyYW5zbWlzc2lvbiByYXRlXG4gICAgICAgIC8vIGxldCBiZXRhID0gWzIwMC8zNjUuMCwgMzY1LzM2NS4wLCA1MjAvMzY1LjBdXG4gICAgICAgIGxldCBiZXRhID0gWzQwMC8zNjUuMCwgNTIwLzM2NS4wLCA2MDAvMzY1LjBdXG4gICAgICAgIC8vIFJlY292ZXJ5IHJhdGVcbiAgICAgICAgLy8gbGV0IGdhbW1hID0gWzEvNi4wLCAxLzcuMCwgMS84LjBdXG4gICAgICAgIGxldCBnYW1tYSA9IFsxLzYuMCwgMS83LjAsIDEvOC4wXVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRlc2lhbihbcmhvLCB2LCBtdSwgYmV0YSwgZ2FtbWFdKVxuICAgIH1cblxuICAgIHZzcGEoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5ORCA9IHRoaXMuTlkqMzY1XG4gICAgICAgIHRoaXMuUjAgPSAxIC0gdGhpcy5TMCAtIHRoaXMuSTBcbiAgICAgICAgdGhpcy5JTlBVVCA9IFsrdGhpcy5TMCwgK3RoaXMuSTAsICt0aGlzLlIwXVxuXG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldF9wYXJhbXMoKVxuICAgICAgICBsZXQgdGltZV9yYW5nZSA9IDxhbnlbXT4gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTkQ7IGkrKykge1xuICAgICAgICAgICAgdGltZV9yYW5nZS5wdXNoKGkpXG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMuZm9yRWFjaCggKGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmhvID0gZFswXTtcbiAgICAgICAgICAgIHRoaXMudiA9IGRbMV07XG4gICAgICAgICAgICB0aGlzLm11ID0gZFsyXTtcbiAgICAgICAgICAgIHRoaXMuYmV0YSA9IGRbM107XG4gICAgICAgICAgICB0aGlzLmdhbW1hID0gZFs0XTtcblxuICAgICAgICAgICAgbGV0IHNvbCA9IG51bWVyaWMuZG9wcmkoMCwgdGhpcy5ORCwgdGhpcy5JTlBVVCwgdGhpcy5TSVIsIDFlLTYsIDUwMDApO1xuXG4gICAgICAgICAgICBsZXQgb3V0ID0gc29sLmF0KHRpbWVfcmFuZ2UpXG5cbiAgICAgICAgICAgIGxldCB0ZW1wID0gPGFueVtdPiBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogdGltZV9yYW5nZVtpXSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdXNcIjogb3V0W2ldWzBdLFxuICAgICAgICAgICAgICAgICAgICBcImluZlwiOiBvdXRbaV1bMV0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVjXCI6IG91dFtpXVsyXSxcbiAgICAgICAgICAgICAgICAgICAgXCJwb3BcIjogb3V0W2ldWzBdICsgb3V0W2ldWzFdICsgb3V0W2ldWzJdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYXJhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJyaG9cIjogdGhpcy5yaG8sXG4gICAgICAgICAgICAgICAgXCJ2XCI6IHRoaXMudixcbiAgICAgICAgICAgICAgICBcIm11XCI6IHRoaXMubXUsXG4gICAgICAgICAgICAgICAgXCJiZXRhXCI6IHRoaXMuYmV0YSxcbiAgICAgICAgICAgICAgICBcImdhbW1hXCI6IHRoaXMuZ2FtbWFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh0ZW1wKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./app.css\"></require><require from=\"./navbar\"></require><nav-bar router.bind=\"router\"></nav-bar><loading-indicator loading.bind=\"router.isNavigating\"></loading-indicator><div class=\"container\" style=\"width:100%\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!vis/chart.css', ['module'], function(module) { module.exports = ".bar { fill: steelblue; }\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n}\n\ndiv.tooltip {\n  position: absolute;\n  text-align: center;\n  width: 60px;\n  height: 28px;\n  padding: 2px;\n  font: 12px sans-serif;\n  background: lightsteelblue;\n  border: 0px;\n  border-radius: 8px;\n  pointer-events: none;\n}\n"; });
define('text!empty/no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
define('text!vpsa/chart.css', ['module'], function(module) { module.exports = ".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"; });
define('text!vis/vis.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/dynamic-bar-chart\"></require><div class=\"no-selection text-center\"><h2>${test}</h2></div><button class=\"btn btn-success\" click.trigger=\"add()\">Add</button><dynamic-bar-chart mo.bind=\"test\" x_size=\"500\" y_size=\"200\" data.bind=\"data\"></dynamic-bar-chart></template>"; });
define('text!vpsa/vpsa.html', ['module'], function(module) { module.exports = "<template><require from=\"./chart.css\"></require><require from=\"../charts/line-chart-focus\"></require><require from=\"../charts/parallel-coordinates-vertical\"></require><div class=\"row\"><div class=\"col-md-4\"><div style=\"width:100%;height:500px\"><parallel-coordinates-vertical data.bind=\"params\"></parallel-coordinates-vertical></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"pop\" data.bind=\"data\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"sus\" data.bind=\"data\"></line-chart-focus></div></div><div class=\"row\"><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"inf\" data.bind=\"data\"></line-chart-focus></div><div class=\"col-md-6\" style=\"width:100%;height:300px\"><line-chart-focus mo.bind=\"test\" x_attribute=\"x\" y_attribute=\"rec\" data.bind=\"data\"></line-chart-focus></div></div></div></div><div class=\"row\"><h2>Compute SIR</h2><label for=\"#param1\">S0:</label><input type=\"number\" value.bind=\"S0\" id=\"param1\" step=\"0.01\"><label for=\"#param2\">I0:</label><input type=\"number\" value.bind=\"I0\" id=\"param2\" step=\"0.0001\"><label for=\"#param5\">Time in years:</label><input type=\"number\" value.bind=\"NY\" id=\"param5\" step=\"1\"><br><label for=\"#param2\">Param2:</label><input type=\"number\" value.bind=\"param2\" id=\"param2\" step=\"0.01\"><br><button type=\"button\" click.delegate=\"vspa()\">Compute</button></div><div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
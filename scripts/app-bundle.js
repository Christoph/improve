define("app",["require","exports","aurelia-router"],function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){this.router=i.Router}return t.prototype.configureRouter=function(t,e){t.title="Improve",t.map([{route:"",moduleId:"empty/no-selection",nav:!0,title:"Select"},{route:"vpsa/",moduleId:"vpsa/vpsa",nav:!0,title:"SIR",name:"vpsa"}]),this.router=e},t}();e.App=a}),define("environment",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(t,e,i){"use strict";function a(t){t.use.standardConfiguration().plugin("aurelia-computed").plugin("d3-extended").feature("resources"),i.default.debug&&t.use.developmentLogging(),i.default.testing&&t.use.plugin("aurelia-testing"),t.start().then(function(){return t.setRoot()})}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=a});var __decorate=this&&this.__decorate||function(t,e,i,a){var n,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};define("navbar",["require","exports","aurelia-framework"],function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){this.router=null}return __decorate([i.bindable,__metadata("design:type",Object)],t.prototype,"router",void 0),t}();e.NavBar=a});var __decorate=this&&this.__decorate||function(t,e,i,a){var n,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};define("charts/line-chart-focus",["require","exports","d3","aurelia-framework"],function(t,e,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.bindingEngine=e,this.margin={top:20,right:60,bottom:35,left:60,middle:20},this.x_attribute="x",this.y_attribute="y",this.redraw=0,this.data=[],this.x_size=900,this.y_size=500,this.lc_width=50,this.lc_height=500,this.focus_width=50,this.focus_height=500,this.focus_offset=100,this.element=t}return t.prototype.attached=function(){var t=this;this.data&&(this.subscription=this.bindingEngine.collectionObserver(this.data).subscribe(function(e){return t.dataMutated(e)})),this.x_size=this.element.parentElement.offsetWidth,this.y_size=this.element.parentElement.offsetHeight,this.width=this.x_size-this.margin.left-this.margin.right,this.lc_width=.8*this.width,this.focus_width=.2*this.width-this.margin.left,this.height=this.y_size-this.margin.top-this.margin.bottom,this.lc_height=this.y_size-this.margin.top-this.margin.bottom,this.focus_height=this.y_size-this.margin.top-this.margin.bottom,this.focus_offset=this.lc_width+this.margin.middle+this.margin.left,this.initChart(),this.updateChart()},t.prototype.dataMutated=function(t){this.data.length>1?this.updateChart():(this.svg.selectAll(".line").remove(),this.focus.selectAll(".bar").remove())},t.prototype.redrawChanged=function(){this.data.length>1&&this.updateHighlight()},t.prototype.unbind=function(){this.subscription.dispose()},t.prototype.initChart=function(){var t=this;this.svg=i.select(this.element).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom),this.linechart=this.svg.append("g").attr("width",this.lc_width).attr("height",this.lc_height).attr("transform","translate("+this.margin.left+", "+this.margin.top+")"),this.focus=this.svg.append("g").attr("transform","translate("+this.focus_offset+", "+this.margin.top+")"),this.x=i.scaleLinear().range([0,this.lc_width]),this.y=i.scaleLinear().range([this.height,0]),this.focus_x=i.scaleLinear().range([0,this.focus_width]),this.linechart.append("g").attr("transform","translate(0,"+this.height+")").attr("class","xAxis"),this.linechart.append("text").style("text-anchor","middle").attr("y",this.height+26).attr("x",this.width/2).text("days"),this.focus.append("g").attr("transform","translate(0,"+this.height+")").attr("class","xAxis"),this.focus.append("text").style("text-anchor","middle").attr("y",this.height+26).attr("x",this.width/2).text("day"),this.linechart.append("g").attr("class","yAxis"),this.linechart.append("text").style("text-anchor","middle").attr("y",-4).text(function(e){return t.y_attribute}),this.focus.append("g").attr("transform","translate("+this.focus_width+", 0)").attr("class","yAxis"),this.focus.append("text").style("text-anchor","middle").attr("y",-4).attr("x",this.focus_width).text(function(e){return t.y_attribute}),this.valueline=i.line().x(function(e){return t.x(e[t.x_attribute])}).y(function(e){return t.y(e[t.y_attribute])});var e=this.y_attribute;this.focus.append("g").attr("class","brush").call(i.brushY().extent([[0,0],[this.focus_width,this.focus_height]]).on("brush",function(a){if(i.event.sourceEvent){if(!i.event.selection)return void(t.brushing=[]);var n=i.event.selection.map(t.y.invert),r=[];t.linechart.selectAll(".line").filter(function(t){t.data[t.data.length-1][e]>=n[1]&&t.data[t.data.length-1][e]<=n[0]&&r.push(t.id)}),t.brushing=r}}).on("end",function(a){if(i.event.sourceEvent){if(!i.event.selection)return void(t.brushing=[]);var n=i.event.selection.map(t.y.invert),r=[];t.linechart.selectAll(".line").filter(function(t){t.data[t.data.length-1][e]>=n[1]&&t.data[t.data.length-1][e]<=n[0]&&r.push(t.id)}),t.brushing=r}}))},t.prototype.updateHighlight=function(){this.linechart.selectAll("path.line").classed("highlight",function(t){return 1==t.highlight}).classed("background",function(t){return 2==t.highlight}),this.linechart.selectAll("path.line.highlight").moveToFront()},t.prototype.updateChart=function(){var t=this,e=i.max(this.data,function(e){return i.max(e.data,function(e){return e[t.x_attribute]})}),a=i.max(this.data,function(e){return i.max(e.data,function(e){return e[t.y_attribute]})}),n=i.min(this.data,function(e){return i.min(e.data,function(e){return e[t.x_attribute]})}),r=i.min(this.data,function(e){return i.min(e.data,function(e){return e[t.y_attribute]})}),s=[];this.data.forEach(function(t){s.push(t.data[t.data.length-1])}),this.x.domain([n,e]),this.y.domain([r,a]);var o=i.histogram().value(function(e){return e[t.y_attribute]}).domain(this.y.domain()).thresholds(i.range(r,a,(a-r)/20))(s);this.focus_x.domain([0,i.max(o,function(t){return t.length})]),this.linechart.selectAll("path.line").remove();var h=this.linechart.selectAll("path.line").data(this.data);this.focus.selectAll(".bar").remove();var l=this.focus.selectAll("rect.bars").data(o);this.linechart.selectAll(".xAxis").call(i.axisBottom(this.x)),this.linechart.selectAll(".yAxis").call(i.axisLeft(this.y)),this.focus.selectAll(".yAxis").call(i.axisRight(this.y)),this.focus.selectAll(".xAxis").call(i.axisBottom(this.focus_x).ticks(2)),h.exit().remove(),h.enter().append("path").attr("class","line").classed("highlight",function(t){return 1==t.highlight}).classed("background",function(t){return 2==t.highlight}).attr("d",function(e){return t.valueline(e.data)}),l.exit().remove(),l.enter().append("rect").attr("class","bar").attr("transform",function(e){return"translate(0,"+t.y(e.x1)+")"}).attr("width",function(e){return t.focus_x(e.length)}).attr("height",function(e){return t.y(e.x0)-t.y(e.x1)-1}).moveToBack()},__decorate([a.bindable,__metadata("design:type",Object)],t.prototype,"margin",void 0),__decorate([a.bindable,__metadata("design:type",Object)],t.prototype,"x_attribute",void 0),__decorate([a.bindable,__metadata("design:type",Object)],t.prototype,"y_attribute",void 0),__decorate([a.bindable,__metadata("design:type",Object)],t.prototype,"redraw",void 0),__decorate([a.bindable({defaultBindingMode:a.bindingMode.twoWay}),__metadata("design:type",Object)],t.prototype,"brushing",void 0),__decorate([a.bindable,__metadata("design:type",Object)],t.prototype,"data",void 0),t=__decorate([a.inject(Element,a.BindingEngine),a.noView(),__metadata("design:paramtypes",[Object,Object])],t)}();e.LineChartFocus=n});var __decorate=this&&this.__decorate||function(t,e,i,a){var n,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};define("charts/parallel-coordinates-vertical",["require","exports","d3","lodash","aurelia-framework"],function(t,e,i,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=this;this.bindingEngine=e,this.margin={top:60,right:20,bottom:30,left:40},this.redraw=0,this.data=[],this.x={},this.dimensions=[],this.x_size=500,this.y_size=500,this.getBrushing=function(t,e,r){var s=new Map;t.selectAll(".brush").filter(function(t){return i.brushSelection(this)}).each(function(t){var a=i.brushSelection(this),n=[];null!=a&&(n=[e[t].invert(a[1]),e[t].invert(a[0])]);var o=r.filter(function(e){return e.data[t]>=n[0]&&e.data[t]<=n[1]});s.set(t,o.map(function(t){return t.id}))});var o=a.intersection.apply(a,Array.from(s.values()));s.size>0&&0==o.length&&o.push("x"),n.brushing=o},this.element=t}return t.prototype.attached=function(){var t=this;this.data&&(this.subscription=this.bindingEngine.collectionObserver(this.data).subscribe(function(e){return t.dataMutated(e)})),this.x_size=this.element.parentElement.offsetWidth,this.y_size=this.element.parentElement.offsetHeight,this.width=this.x_size-this.margin.left-this.margin.right,this.height=this.y_size-this.margin.top-this.margin.bottom,this.initChart(),this.updateChart()},t.prototype.dataMutated=function(t){this.updateChart()},t.prototype.redrawChanged=function(){this.data.length>1&&this.updateHighlight()},t.prototype.unbind=function(){this.subscription.dispose()},t.prototype.path=function(t){var e=this;return this.line(this.dimensions.map(function(i){return[e.x[i](t[i]),e.y(i)]}))},t.prototype.initChart=function(){this.svg=i.select(this.element).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.y=i.scalePoint().range([0,this.height]),this.line=i.line().curve(i.curveMonotoneY)},t.prototype.updateHighlight=function(){this.svg.selectAll(".line").classed("highlight",function(t){return 1==t.highlight}).classed("background",function(t){return 2==t.highlight}),this.svg.selectAll(".line.highlight").moveToFront()},t.prototype.updateChart=function(){var t=this;this.data.length>0&&(this.dimensions=i.keys(this.data[0].data).filter(function(t){return"name"!=t})),this.dimensions.map(function(e){var a=i.extent(t.data,function(t){return t.data[e]});a[0]==a[1]&&(a[0]-=.1*a[0],a[1]+=.1*a[1]),t.x[e]=i.scaleLinear().range([t.width,0]).domain(a)}),this.y.domain(this.dimensions),this.background=this.svg.append("g").selectAll("path").data(this.data).enter().append("path").attr("class","line").classed("highlight",function(t){return 1==t.highlight}).classed("background",function(t){return 2==t.highlight}).attr("d",function(e){return t.path(e.data)});var e=this.width,a=this.x,n=this.data,r=this.getBrushing,s=this.svg.selectAll(".dimension").data(this.dimensions).enter().append("g").attr("class","dimension").attr("transform",function(e){return"translate(0,"+t.y(e)+")"});s.append("g").each(function(t){i.select(this).call(i.axisTop(a[t]))}),s.append("text").style("text-anchor","middle").attr("y",-9).attr("transform","rotate(-90)").text(function(t){return t}),s.append("g").attr("class","brush").each(function(t){i.select(this).call(i.brushX().extent([[0,-9],[e,9]]).on("brush",function(){i.event.sourceEvent&&r(s,a,n)}).on("end",function(){i.event.sourceEvent&&r(s,a,n)}))})},__decorate([n.bindable,__metadata("design:type",Object)],t.prototype,"margin",void 0),__decorate([n.bindable,__metadata("design:type",Object)],t.prototype,"redraw",void 0),__decorate([n.bindable({defaultBindingMode:n.bindingMode.twoWay}),__metadata("design:type",Object)],t.prototype,"brushing",void 0),__decorate([n.bindable,__metadata("design:type",Object)],t.prototype,"data",void 0),t=__decorate([n.inject(Element,n.BindingEngine),n.noView(),__metadata("design:paramtypes",[Object,Object])],t)}();e.parallelCoordinatesVertical=r});var __decorate=this&&this.__decorate||function(t,e,i,a){var n,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};define("vpsa/vpsa",["require","exports","aurelia-framework","d3","ion-rangeslider"],function(t,e,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){var t=this;this.param1=1,this.param2=1,this.test=100,this.TS=1,this.NY=1,this.ND=365*this.NY,this.S0=.1,this.I0=1e-4,this.R0=1-this.S0-this.I0,this.rho=.5,this.rho_n=5,this.rho_from=40,this.rho_to=60,this.v=1/25550,this.v_n=5,this.v_from=70,this.v_to=80,this.mu=1/25550,this.mu_n=5,this.mu_from=70,this.mu_to=180,this.beta=520/365,this.beta_n=5,this.beta_from=.9,this.beta_to=1.1,this.gamma=1/7,this.gamma_n=5,this.gamma_from=4,this.gamma_to=6,this.sobol_n=100,this.INPUT=[this.S0,this.I0,this.R0],this.data_parallel=[],this.data_lines=[],this.data_lines_original=[],this.data_length=0,this.lines=[],this.parallel=[],this.all_ids=new Set,this.current_filter=new Set,this.SIR=function(e,i){var a=[0,0,0],n=i;return a[0]=t.v-t.beta*n[0]*n[1]/n.reduce(function(t,e){return t+e},0)-t.mu*n[0],a[1]=t.beta*n[0]*n[1]/n.reduce(function(t,e){return t+e},0)-(t.gamma+t.mu)*n[1]/(1-t.rho),a[2]=t.gamma*n[1]-t.mu*n[2],a}}return t.prototype.attached=function(){var t=this;$("#rho").ionRangeSlider({min:0,max:100,from:40,to:60,step:1,type:"double",postfix:"%",grid:!0,grid_num:10,onFinish:function(e){t.rho_from=e.from_pretty,t.rho_to=e.to_pretty}}),$("#v").ionRangeSlider({min:10,max:150,from:70,to:80,step:1,type:"double",prefix:"1/",postfix:" per year",grid:!0,grid_num:10,onFinish:function(e){t.v_from=e.from_pretty,t.v_to=e.to_pretty}}),$("#mu").ionRangeSlider({min:10,max:150,from:70,to:80,step:1,type:"double",prefix:"1/",postfix:" per year",grid:!0,grid_num:10,onFinish:function(e){t.mu_from=e.from_pretty,t.mu_to=e.to_pretty}}),$("#beta").ionRangeSlider({min:0,max:2,from:.9,to:1.1,step:.1,type:"double",postfix:" per day",grid:!0,grid_num:10,onFinish:function(e){t.gamma_from=e.from_pretty,t.gamma_to=e.to_pretty}}),$("#gamma").ionRangeSlider({min:1,max:20,from:4,to:6,step:1,type:"double",prefix:"1/",grid:!0,grid_num:10,onFinish:function(e){t.gamma_from=e.from_pretty,t.gamma_to=e.to_pretty}})},t.prototype.brushing_popChanged=function(){this.updateOutData(this.brushing_pop),this.updateInData(this.brushing_pop)},t.prototype.brushing_susChanged=function(){this.updateOutData(this.brushing_sus),this.updateInData(this.brushing_sus)},t.prototype.brushing_recChanged=function(){this.updateOutData(this.brushing_rec),this.updateInData(this.brushing_rec)},t.prototype.brushing_infChanged=function(){this.updateOutData(this.brushing_inf),this.updateInData(this.brushing_inf)},t.prototype.brushing_parallelChanged=function(){this.updateInData(this.brushing_parallel),this.filterOutData(this.brushing_parallel)},t.prototype.redrawLinecharts=function(){this.redraw_pop=0==this.redraw_pop?1:0,this.redraw_inf=0==this.redraw_inf?1:0,this.redraw_rec=0==this.redraw_rec?1:0,this.redraw_sus=0==this.redraw_sus?1:0},t.prototype.updateOutData=function(t){for(var e=0;e<this.data_lines.length;e++)t.length>0?t.includes(this.data_lines[e].id)?this.data_lines[e].highlight=1:this.data_lines[e].highlight=2:this.data_lines[e].highlight=1;this.redrawLinecharts()},t.prototype.updateInData=function(t){for(var e=0;e<this.data_length;e++)t.length>0?t.includes(this.data_parallel[e].id)?this.data_parallel[e].highlight=1:this.data_parallel[e].highlight=2:this.data_parallel[e].highlight=1;this.redraw_parallel=0==this.redraw_parallel?1:0},t.prototype.filterOutData=function(t){if(t.length>1){var e=new Set(t);this.data_lines.length=0,(i=this.data_lines).push.apply(i,this.data_lines_original.filter(function(t){return e.has(t.id)})),this.current_filter=e}else this.data_lines.length=0,(a=this.data_lines).push.apply(a,this.data_lines_original);var i,a},t.prototype.vspa=function(){var t=this;this.ND=365*this.NY,this.R0=1-this.S0-this.I0,this.INPUT=[+this.S0,+this.I0,+this.R0];for(var e=this.get_params("sobol"),i=[],a=0;a<this.ND;a++)i.push(a);e.forEach(function(e,a){t.rho=e[0],t.v=e[1],t.mu=e[2],t.beta=e[3],t.gamma=e[4];for(var n=numeric.dopri(0,t.ND,t.INPUT,t.SIR,1e-6,5e3),r=n.at(i),s=[],o=0;o<r.length;o++)s.push({x:i[o],sus:r[o][0],inf:r[o][1],rec:r[o][2],pop:r[o][0]+r[o][1]+r[o][2]});t.all_ids.add(a),t.data_parallel.push({id:a,highlight:0,data:{rho:t.rho,v:t.v,mu:t.mu,beta:t.beta,gamma:t.gamma}}),t.data_lines_original.push({id:a,highlight:0,data:s})}),this.data_length=this.data_lines_original.length,this.filterOutData([])},t.prototype.cartesian=function(t){function e(n,r){for(var s=0,o=t[r].length;s<o;s++){var h=n.slice(0);h.push(t[r][s]),r==a?i.push(h):e(h,r+1)}}var i=[],a=t.length-1;return e([],0),i},t.prototype.getRandom=function(t,e,i){return Array.from({length:t},function(){return Math.random()*(i-e)+e})},t.prototype.getRandomInt=function(t,e,i){return Array.from({length:t},function(){return Math.floor(Math.random()*(i-e+1))+e})},t.prototype.getParamsFromSobol=function(t){var e=[],i=a.scaleLinear().domain([0,1]).range([this.rho_from,this.rho_to]),n=a.scaleLinear().domain([0,1]).range([this.v_from,this.v_to]),r=a.scaleLinear().domain([0,1]).range([this.mu_from,this.mu_to]),s=a.scaleLinear().domain([0,1]).range([this.beta_from,this.beta_to]),o=a.scaleLinear().domain([0,1]).range([this.gamma_from,this.gamma_to]);return t.forEach(function(t){e.push([Math.round(i(t[0]))/100,1/(365*Math.round(n(t[1]))),1/(365*Math.round(r(t[2]))),s(t[3]),1/Math.round(o(t[4]))])}),e},t.prototype.get_params=function(t){if("rnd"==t){var e=this.getRandom(this.rho_n,this.rho_from/100,this.rho_to/100),i=this.getRandom(this.v_n,1/(365*this.v_from),1/(365*this.v_to)),a=this.getRandom(this.mu_n,1/(365*this.mu_from),1/(365*this.mu_to)),n=this.getRandom(this.beta_n,this.beta_from,this.beta_to),r=this.getRandom(this.gamma_n,1/this.gamma_from,1/this.gamma_to);return this.cartesian([e,i,a,n,r])}if("sobol"==t){var s=lobos.Sobol(5);return this.getParamsFromSobol(s.take(this.sobol_n))}},__decorate([i.observable,__metadata("design:type",Object)],t.prototype,"brushing_pop",void 0),__decorate([i.observable,__metadata("design:type",Object)],t.prototype,"brushing_sus",void 0),__decorate([i.observable,__metadata("design:type",Object)],t.prototype,"brushing_inf",void 0),__decorate([i.observable,__metadata("design:type",Object)],t.prototype,"brushing_rec",void 0),__decorate([i.observable,__metadata("design:type",Object)],t.prototype,"brushing_parallel",void 0),t=__decorate([i.autoinject],t)}();e.Vspa=n});var __decorate=this&&this.__decorate||function(t,e,i,a){var n,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};define("empty/no-selection",["require","exports","aurelia-framework"],function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(){this.message="No Selection"}return t=__decorate([i.autoinject],t)}();e.NoSelection=a}),define("resources/index",["require","exports"],function(t,e){"use strict";function i(t){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=i}),define("text!app.html",["module"],function(t){t.exports='<template><require from="bootstrap/css/bootstrap.css"></require><require from="ion-rangeslider/css/ion.rangeSlider.css"></require><require from="ion-rangeslider/css/ion.rangeSlider.skinHTML5.css"></require><require from="./app.css"></require><require from="./navbar"></require><nav-bar router.bind="router"></nav-bar><loading-indicator loading.bind="router.isNavigating"></loading-indicator><div class="container" style="width:100%"><router-view></router-view></div></template>'}),define("text!app.css",["module"],function(t){t.exports="body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"}),define("text!navbar.html",["module"],function(t){t.exports='<template><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><i class="fa fa-home"></i> <span>${router.title}</span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href.bind="row.href">${row.title}</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="loader" if.bind="router.isNavigating"><i class="fa fa-spinner fa-spin fa-2x"></i></li></ul></div></nav></template>'}),define("text!vpsa/chart.css",["module"],function(t){t.exports=".background path {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.foreground path {\n  fill: none;\n  stroke: steelblue;\n}\n\n.brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.axis line,\n.axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.axis text {\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}\n\n.line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n  opacity: 0.5;\n}\n\n.line.highlight {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line.background {\n  fill: none;\n  stroke: #ddd;\n  stroke-width: 2px;\n  opacity: 0.5;\n  shape-rendering: crispEdges;\n}\n\n.focus_element {\n  fill: steelblue;\n  opacity: 0.1;\n}\n\nrect.bar { fill: steelblue; }\n"}),define("text!empty/no-selection.html",["module"],function(t){t.exports='<template><div class="no-selection text-center"><h2>${message}</h2></div></template>'}),define("text!vpsa/vpsa.html",["module"],function(t){t.exports='<template><require from="./chart.css"></require><require from="../charts/line-chart-focus"></require><require from="../charts/parallel-coordinates-vertical"></require><div class="row"><div class="col-md-4"><div><h2>Compute SIR</h2><label>Rho: Probabilty that an infected person dies before natural death or recovery.</label><div class="row"><input type="text" id="rho"></div><label>V: Per captia death rate from natural causes.</label><div class="row"><input type="text" id="v"></div><label>Mu: Population birth rate.</label><div class="row"><input type="text" id="mu"></div><label>Beta: Transmission rate: Infected -> Susceptible. Includes encounter and transmission rate.</label><div class="row"><input type="text" id="beta"></div><label>Gamma: Recovery rate.</label><div class="row"><input type="text" id="gamma"></div><br><label>Starting Conditions</label><div class="row"><div class="col-sm-3"><label for="#param1">S0:</label><input style="width:50px" type="number" value.bind="S0" id="param1" step="0.01"><br></div><div class="col-sm-3"><label for="#param2">I0:</label><input style="width:60px" type="number" value.bind="I0" id="param2" step="0.0001"><br></div><div class="col-sm-6"><label for="#param5">Time in years:</label><input style="width:50px" type="number" value.bind="NY" id="param5" step="1"><br></div></div><br><label for="#sobol">Number of sobol samples:</label><input type="number" value.bind="sobol_n" id="sobol" step="1"><br><button type="button" click.delegate="vspa()">Compute Samples</button></div><div style="width:100%;height:500px"><parallel-coordinates-vertical brushing.bind="brushing_parallel" redraw.bind="redraw_parallel" data.bind="data_parallel"></parallel-coordinates-vertical></div></div><div class="col-md-8"><div class="row"><div class="col-md-6" style="width:100%;height:300px"><line-chart-focus brushing.bind="brushing_pop" redraw.bind="redraw_pop" x_attribute="x" y_attribute="pop" data.bind="data_lines"></line-chart-focus></div><div class="col-md-6" style="width:100%;height:300px"><line-chart-focus brushing.bind="brushing_sus" redraw.bind="redraw_sus" mo.bind="test" x_attribute="x" y_attribute="sus" data.bind="data_lines"></line-chart-focus></div></div><div class="row"><div class="col-md-6" style="width:100%;height:300px"><line-chart-focus brushing.bind="brushing_inf" redraw.bind="redraw_inf" mo.bind="test" x_attribute="x" y_attribute="inf" data.bind="data_lines"></line-chart-focus></div><div class="col-md-6" style="width:100%;height:300px"><line-chart-focus brushing.bind="brushing_rec" redraw.bind="redraw_rec" mo.bind="test" x_attribute="x" y_attribute="rec" data.bind="data_lines"></line-chart-focus></div></div></div></div><div></div></template>'});
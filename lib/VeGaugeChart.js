!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("echarts/lib/echarts"),require("echarts/lib/component/title"),require("echarts/lib/component/tooltip"),require("echarts/lib/component/legend"),require("echarts/lib/component/dataset"),require("echarts/lib/chart/gauge")):"function"==typeof define&&define.amd?define(["vue","echarts/lib/echarts","echarts/lib/component/title","echarts/lib/component/tooltip","echarts/lib/component/legend","echarts/lib/component/dataset","echarts/lib/chart/gauge"],t):"object"==typeof exports?exports["ve-charts"]=t(require("vue"),require("echarts/lib/echarts"),require("echarts/lib/component/title"),require("echarts/lib/component/tooltip"),require("echarts/lib/component/legend"),require("echarts/lib/component/dataset"),require("echarts/lib/chart/gauge")):e["ve-charts"]=t(e.vue,e["echarts/lib/echarts"],e["echarts/lib/component/title"],e["echarts/lib/component/tooltip"],e["echarts/lib/component/legend"],e["echarts/lib/component/dataset"],e["echarts/lib/chart/gauge"])}("undefined"!=typeof self?self:this,function(e,t,r,n,a,i,o){return webpackJsonpve_charts([6],{1:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}},11:function(e,r){e.exports=t},117:function(e,t,r){"use strict";var n=r(10),a=r(4),i=r(280),o=r(281),s=(r.n(o),r(61));t.a={name:"VeGaugeChart",mixins:[n.a],data:function(){return{options:a.b}},created:function(){this.chartHandler=i.a},components:{BaseEcharts:s.a}}},12:function(e,t){e.exports=r},13:function(e,t){e.exports=n},14:function(e,t){e.exports=a},15:function(e,t){e.exports=i},2:function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(6),i=(n=a)&&n.__esModule?n:{default:n};t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(279);t.default=n.a},279:function(e,t,r){"use strict";var n=r(117),a=r(282),i=r(5)(n.a,a.a,!1,null,null,null);t.a=i.exports},280:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(42),a=(r.n(n),r(2)),i=r.n(a),o=r(1),s=r.n(o);var c=function(e,t,r){var n={tooltip:r.tooltipVisible&&{trigger:"item"},series:function(e){var t=e.data,r=e.settings,n=t&&t.measures&&t.measures[0],a=n.name,o=n.data,c=r.min,u=void 0===c?0:c,l=r.max,p=void 0===l?100:l,h=r.offsetY,f=r.radius,d=void 0===f?"75%":f,m=s()(r,["min","max","offsetY","radius"]);return[i()({name:a,type:"gauge",min:u,max:p,center:h?["50%",h]:["50%","50%"],radius:d,data:o},m)]}({data:e,settings:t})};return n}},281:function(e,t){e.exports=o},282:function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ve-charts-parent",style:e.parentStyle},[e.isEmptyData?e._e():r("base-echarts",e._g({attrs:{"init-options":e.initOptions,options:e.options,autoResize:!0,theme:e.theme,"chart-height":e.height}},e.delegateEvents)),e._v(" "),e.isEmptyData&&!e.loading?e._t("default",[r("empty-data",{attrs:{"empty-text":e.emptyText}})]):e._e(),e._v(" "),e.loading?r("loading-chart"):e._e()],2)},staticRenderFns:[]};t.a=n},8:function(t,r){t.exports=e}},[278])});
//# sourceMappingURL=VeGaugeChart.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dcbec9f"],{"116d":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-row"),s("v-row",{attrs:{"p-5":""}},[s("router-link",{staticStyle:{cursor:"pointer","text-decoration":"none",color:"inherit"},attrs:{to:"/dataclasses"}},[s("v-btn",{attrs:{text:"",color:"primary"}},[s("v-icon",[t._v("arrow_back")])],1)],1)],1),s("v-row",{attrs:{"align-content":"center","justify-content":"center"}},[s("v-col",[s("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1900 870"}},[s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9","data-name":"Ellipse 9",cx:"950",cy:"753",r:"70"}}),s("text",{staticClass:"cls-8",attrs:{transform:"translate(920 760)"}},[t._v("Gateway")]),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9-2","data-name":"Ellipse 9-2",cx:"1225.4",cy:"594",r:"70"}}),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9-3","data-name":"Ellipse 9-3",cx:"1225.4",cy:"276",r:"70"}}),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9-4","data-name":"Ellipse 9-4",cx:"950",cy:"117",r:"70"}}),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9-5","data-name":"Ellipse 9-5",cx:"674.6",cy:"276",r:"70"}}),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_9-6","data-name":"Ellipse 9-6",cx:"674.6",cy:"594",r:"70"}}),s("circle",{staticClass:"sec_color",attrs:{id:"Ellipse_1","data-name":"Ellipse 1",cx:"950",cy:"435",r:"173"}}),s("text",{staticClass:"cls-9",attrs:{transform:"translate(913.6 443)"}},[t._v("Security")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(1183.62 590)"}},[t._v(" Immobilizer ")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(1199.08 611)"}},[t._v("System")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(1179.6 283)"}},[t._v(" Infotainment ")]),s("text",{staticClass:"cls-10",attrs:{transform:"translate(913.19 103)"}},[s("tspan",{staticClass:"cls-11"},[t._v("T")]),s("tspan",{attrs:{x:"6.82",y:"0"}},[t._v("elematics")])]),s("text",{staticClass:"cls-10",attrs:{transform:"translate(923.32 124)"}},[t._v("Control")]),s("text",{staticClass:"cls-10",attrs:{transform:"translate(934.93 145)"}},[t._v("Unit")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(640.4 272)"}},[t._v(" End- "),s("tspan",{staticClass:"cls-12",attrs:{x:"31.36",y:"0"}},[t._v("P")]),s("tspan",{attrs:{x:"41.35",y:"0"}},[t._v("oint")])]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(650.93 293)"}},[t._v(" D "),s("tspan",{staticClass:"cls-12",attrs:{x:"10.49",y:"0"}},[t._v("e")]),s("tspan",{attrs:{x:"18.87",y:"0"}},[t._v("vice")])]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(649.32 580)"}},[t._v("Battery")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(647.78 601)"}},[t._v("Related")]),s("text",{staticClass:"cls-8",attrs:{transform:"translate(648.08 622)"}},[t._v("System")])])])],1)],1)},r=[],c={name:"Datatypes_Security"},l=c,n=(s("62bd"),s("2877")),o=s("6544"),i=s.n(o),u=s("8336"),f=s("62ad"),d=s("a523"),p=s("132d"),v=s("0fd9"),m=Object(n["a"])(l,e,r,!1,null,null,null);a["default"]=m.exports;i()(m,{VBtn:u["a"],VCol:f["a"],VContainer:d["a"],VIcon:p["a"],VRow:v["a"]})},"62ad":function(t,a,s){"use strict";var e=s("ade3"),r=s("5530"),c=(s("d3b7"),s("a9e3"),s("b64b"),s("ac1f"),s("5319"),s("4ec9"),s("3ca3"),s("ddb0"),s("caad"),s("159b"),s("2ca0"),s("4b85"),s("2b0e")),l=s("d9f7"),n=s("80d2"),o=["sm","md","lg","xl"],i=function(){return o.reduce((function(t,a){return t[a]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return o.reduce((function(t,a){return t["offset"+Object(n["u"])(a)]={type:[String,Number],default:null},t}),{})}(),f=function(){return o.reduce((function(t,a){return t["order"+Object(n["u"])(a)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(i),offset:Object.keys(u),order:Object.keys(f)};function p(t,a,s){var e=t;if(null!=s&&!1!==s){if(a){var r=a.replace(t,"");e+="-".concat(r)}return"col"!==t||""!==s&&!0!==s?(e+="-".concat(s),e.toLowerCase()):e.toLowerCase()}}var v=new Map;a["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},i),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,a){var s=a.props,r=a.data,c=a.children,n=(a.parent,"");for(var o in s)n+=String(s[o]);var i=v.get(n);return i||function(){var t,a;for(a in i=[],d)d[a].forEach((function(t){var e=s[t],r=p(a,t,e);r&&i.push(r)}));var r=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!r||!s.cols},Object(e["a"])(t,"col-".concat(s.cols),s.cols),Object(e["a"])(t,"offset-".concat(s.offset),s.offset),Object(e["a"])(t,"order-".concat(s.order),s.order),Object(e["a"])(t,"align-self-".concat(s.alignSelf),s.alignSelf),t)),v.set(n,i)}(),t(s.tag,Object(l["a"])(r,{class:i}),c)}})},"62bd":function(t,a,s){"use strict";s("b190")},b190:function(t,a,s){}}]);
//# sourceMappingURL=chunk-4dcbec9f.6e5e7ecb.js.map
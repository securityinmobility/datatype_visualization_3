(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-809933fc"],{"57be":function(t,a,s){"use strict";s("72eb")},"62ad":function(t,a,s){"use strict";var r=s("ade3"),e=s("5530"),l=(s("d3b7"),s("a9e3"),s("b64b"),s("ac1f"),s("5319"),s("4ec9"),s("3ca3"),s("ddb0"),s("caad"),s("159b"),s("2ca0"),s("4b85"),s("2b0e")),c=s("d9f7"),n=s("80d2"),i=["sm","md","lg","xl"],o=function(){return i.reduce((function(t,a){return t[a]={type:[Boolean,String,Number],default:!1},t}),{})}(),f=function(){return i.reduce((function(t,a){return t["offset"+Object(n["u"])(a)]={type:[String,Number],default:null},t}),{})}(),d=function(){return i.reduce((function(t,a){return t["order"+Object(n["u"])(a)]={type:[String,Number],default:null},t}),{})}(),u={col:Object.keys(o),offset:Object.keys(f),order:Object.keys(d)};function m(t,a,s){var r=t;if(null!=s&&!1!==s){if(a){var e=a.replace(t,"");r+="-".concat(e)}return"col"!==t||""!==s&&!0!==s?(r+="-".concat(s),r.toLowerCase()):r.toLowerCase()}}var p=new Map;a["a"]=l["a"].extend({name:"v-col",functional:!0,props:Object(e["a"])(Object(e["a"])(Object(e["a"])(Object(e["a"])({cols:{type:[Boolean,String,Number],default:!1}},o),{},{offset:{type:[String,Number],default:null}},f),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,a){var s=a.props,e=a.data,l=a.children,n=(a.parent,"");for(var i in s)n+=String(s[i]);var o=p.get(n);return o||function(){var t,a;for(a in o=[],u)u[a].forEach((function(t){var r=s[t],e=m(a,t,r);e&&o.push(e)}));var e=o.some((function(t){return t.startsWith("col-")}));o.push((t={col:!e||!s.cols},Object(r["a"])(t,"col-".concat(s.cols),s.cols),Object(r["a"])(t,"offset-".concat(s.offset),s.offset),Object(r["a"])(t,"order-".concat(s.order),s.order),Object(r["a"])(t,"align-self-".concat(s.alignSelf),s.alignSelf),t)),p.set(n,o)}(),t(s.tag,Object(c["a"])(e,{class:o}),l)}})},"72eb":function(t,a,s){},aa33:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-row"),s("v-row",{attrs:{"p-5":""}},[s("router-link",{staticStyle:{cursor:"pointer","text-decoration":"none",color:"inherit"},attrs:{to:"/dataclasses"}},[s("v-btn",{attrs:{text:"",color:"primary"}},[s("v-icon",[t._v("arrow_back")])],1)],1)],1),s("v-row",{staticClass:"svg"},[s("v-col",[s("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1900 870"}},[s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9","data-name":"Ellipse 9",cx:"632",cy:"436",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(615 443)"}},[t._v("eCall")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-2","data-name":"Ellipse 9-2",cx:"664",cy:"273",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(641 280)"}},[t._v("Airbag")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-3","data-name":"Ellipse 9-3",cx:"787",cy:"156",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(761.71 141.5)"}},[t._v("Battery")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(760.18 162.5)"}},[t._v("Related")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(760.48 183.5)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-4","data-name":"Ellipse 9-4",cx:"950",cy:"116",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(915.79 112)"}},[t._v(" End- "),s("tspan",{staticClass:"cls-3",attrs:{x:"31.36",y:"0"}},[t._v("P")]),s("tspan",{attrs:{x:"41.35",y:"0"}},[t._v("oint")])]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(926.32 133)"}},[t._v(" D "),s("tspan",{staticClass:"cls-3",attrs:{x:"10.49",y:"0"}},[t._v("e")]),s("tspan",{attrs:{x:"18.87",y:"0"}},[t._v("vice")])]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-5","data-name":"Ellipse 9-5",cx:"1114",cy:"156",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1074.58 142)"}},[t._v("Telematics")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1088.07 163)"}},[t._v(" Cont "),s("tspan",{staticClass:"cls-4",attrs:{x:"33.59",y:"0"}},[t._v("r")]),s("tspan",{attrs:{x:"38.85",y:"0"}},[t._v("ol")])]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1099.84 184)"}},[t._v("Unit")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-6","data-name":"Ellipse 9-6",cx:"1237",cy:"273",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1191.5 279.5)"}},[t._v("Infotainment")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-7","data-name":"Ellipse 9-7",cx:"1268",cy:"436",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1229.82 432)"}},[t._v(" N "),s("tspan",{staticClass:"cls-5",attrs:{x:"11.41",y:"0"}},[t._v("a")]),s("tspan",{attrs:{x:"19.99",y:"0"}},[t._v("vigation")])]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1241.48 453)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-8","data-name":"Ellipse 9-8",cx:"1237",cy:"599",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1207.36 595)"}},[t._v(" Comfo "),s("tspan",{staticClass:"cls-6",attrs:{x:"48.24",y:"0"}},[t._v("r")]),s("tspan",{attrs:{x:"54.05",y:"0"}},[t._v("t")])]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1210.48 616)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-9","data-name":"Ellipse 9-9",cx:"1107",cy:"716",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1065.02 712)"}},[t._v("Immobilizer")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(1080.48 733)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-10","data-name":"Ellipse 9-10",cx:"950",cy:"754",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(919 761)"}},[t._v("Gateway")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-11","data-name":"Ellipse 9-11",cx:"787",cy:"716",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(760.45 712)"}},[t._v("Ignition")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(760.48 733)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_9-12","data-name":"Ellipse 9-12",cx:"664",cy:"599",r:"70"}}),s("text",{staticClass:"cls-2",attrs:{transform:"translate(641.49 585)"}},[t._v("Safety")]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(625.45 606)"}},[t._v(" Moni "),s("tspan",{staticClass:"cls-4",attrs:{x:"35.8",y:"0"}},[t._v("t")]),s("tspan",{attrs:{x:"40.88",y:"0"}},[t._v("oring")])]),s("text",{staticClass:"cls-2",attrs:{transform:"translate(637.48 627)"}},[t._v("System")]),s("circle",{staticClass:"cls-1",attrs:{id:"Ellipse_1","data-name":"Ellipse 1",cx:"950",cy:"436",r:"173"}}),s("text",{staticClass:"cls-7",attrs:{transform:"translate(879.21 431)"}},[t._v("Communication")]),s("text",{staticClass:"cls-7",attrs:{transform:"translate(929.3 457)"}},[t._v("Data")])])])],1)],1)},e=[],l={name:"Datatypes_Communication"},c=l,n=(s("57be"),s("2877")),i=s("6544"),o=s.n(i),f=s("8336"),d=s("62ad"),u=s("a523"),m=s("132d"),p=s("0fd9"),v=Object(n["a"])(c,r,e,!1,null,null,null);a["default"]=v.exports;o()(v,{VBtn:f["a"],VCol:d["a"],VContainer:u["a"],VIcon:m["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-809933fc.4ae947ca.js.map
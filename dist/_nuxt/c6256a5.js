(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{344:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("aa0020ac",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("d8ff5536",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";var o=n(344);n.n(o).a},347:function(t,e,n){(e=n(35)(!1)).push([t.i,".text-clotaire{color:#eae0c4}",""]),t.exports=e},348:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{currentPath:"/"}},mounted:function(){this.currentPath=this.$route.path},props:{logoNavigationLink:void 0,navigationLinks:{default:function(){return[{title:"Sub-link 1",address:"/does/not/exist"},{title:"Sub-link 2",address:"/does/not/exist"},{title:"Sub-link 3",address:"/does/not/exist"}]}},quote:{type:String,default:"In the midst of chaos, there is also opportunity."},name:{type:String,default:"Sun Tzu"}},watch:{$route:function(t,e){this.currentPath=t.path}}},r=(n(350),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-20 sm:mt-10"},[n("div",{staticClass:" px-8 py-8 lg:bg-none flex lg:items-left justify-end"},[n("div",{staticClass:"max-w-sm mx-0 w-full md:mx-0 flex-row"},[n("ul",{staticClass:"bg-transparent"},t._l(t.navigationLinks,(function(link){return n("li",{key:link.title,staticClass:"text-xs flex items-left text-gray-200 "},[n("nuxt-link",{staticClass:" text-gray-50 text-left text-xs mx-8 track w-full rounded",class:{"customCol py-2 text-gray-900":t.currentPath===link.address},attrs:{to:link.address}},[t._v(t._s(link.title))])],1)})),0)])])])}),[],!1,null,"f9ebb2d8",null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var o={props:{quote:{type:String,quote:"In the midst of chaos, there is also opportunity."},author:{type:String,default:""}}},r=(n(346),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative mx-auto mt-20"},[n("div",{staticClass:" flex items-right  mb-20"},[n("h4",{staticClass:"flex pr-10 bg-transparent text-sm tracking-widest font-semibold  text-clotaire"},[t._v("\n      "+t._s(t.quote)+"\n    ")]),t._v(" "),n("h5",{staticClass:"flex-shrink-0 pr-12 bg-transparent text-sm tracking-wider font-semibold  text-yellow-500 "},[t._v("\n      "+t._s(t.author)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex-1 border-t-4 border-transparent"})])])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";var o=n(345);n.n(o).a},351:function(t,e,n){(e=n(35)(!1)).push([t.i,'.track[data-v-f9ebb2d8]{font-family:"Track"}.customCol[data-v-f9ebb2d8]{background-color:#eae0c4}',""]),t.exports=e},353:function(t,e,n){var content=n(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("01f0d851",content,!0,{sourceMap:!1})},356:function(t,e,n){"use strict";var o=n(353);n.n(o).a},357:function(t,e,n){(e=n(35)(!1)).push([t.i,".navBox[data-v-0b197f30]{position:-webkit-sticky;position:sticky;bottom:10px}",""]),t.exports=e},372:function(t,e,n){"use strict";n.r(e);n(41),n(86);var o,r=n(23),l=n(348),c={data:function(){return{logoNavigationLink:"/marketing",navigationLinks:[{title:"Marketing",address:"/marketing"},{title:"Search engine optimization",address:"/marketing/search-engine-optimization"},{title:"Conversion Optimization",address:"/marketing/conversion-optimization"}]}},props:{quote:{type:String,default:'"In the midst of chaos, there is also opportunity. ~ Sun TZU"'}},components:{SubNavigationBox:l.default},head:{link:[{rel:"canonical",href:"https://interfacedesign.dev/marketing"}],title:"Digital Marketing Agency Colorado Springs",meta:[(o={hid:"description",name:"description",content:"Clotaire Damy"},Object(r.a)(o,"hid","robots"),Object(r.a)(o,"name","robots"),Object(r.a)(o,"content","noindex"),o)],metaInfo:{script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Organization",name:"Clotaire Damy"}}]}},transition:function(t,e){var n="page";void 0!==e&&(n="marketing"===e.path.split("/")[1]?"page":"slide-left");return n}},d=(n(356),n(8)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-white"},[e("NuxtChild"),this._v(" "),e("SubNavigationBox",{staticClass:"navBox",attrs:{navigationLinks:this.navigationLinks,logoNavigationLink:this.logoNavigationLink}}),this._v(" "),e("Quote",{staticClass:"ml-8",attrs:{quote:"In the midst of chaos, there is also opportunity.",author:"~ Sun TZU"}})],1)}),[],!1,null,"0b197f30",null);e.default=component.exports;installComponents(component,{SubNavigationBox:n(348).default,Quote:n(349).default})}}]);
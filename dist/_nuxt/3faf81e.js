(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{342:function(t,e,n){var content=n(345);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("386da09c",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.r(e);var o={props:{logoNavigationLink:void 0,navigationLinks:{default:function(){return[{title:"Sub-link 1",address:"/does/not/exist"},{title:"Sub-link 2",address:"/does/not/exist"},{title:"Sub-link 3",address:"/does/not/exist"}]}},quote:{type:String,default:"In the midst of chaos, there is also opportunity."},name:{type:String,default:"Sun Tzu"}}},l=(n(344),n(8)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-30 sm:mt-20"},[n("div",{staticClass:"py-4 px-4 sm:py-4 sm:px-16 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-2"},[n("div",{staticClass:"max-w-sm mx-auto w-full space-y-2 md:mx-0"},[n("ul",{staticClass:"bg-yellow-500  sm:grid sm:grid-flow-col"},t._l(t.navigationLinks,(function(link){return n("li",{key:link.title,staticClass:"track border-b border-transparent py-4 px-2 flex items-right text-gray-900 rounded"},[n("nuxt-link",{staticClass:"ml-3 text-gray-50 text-center text-xs",attrs:{to:link.address}},[t._v(t._s(link.title))])],1)})),0)])])])}),[],!1,null,"21f96021",null);e.default=component.exports},344:function(t,e,n){"use strict";var o=n(342);n.n(o).a},345:function(t,e,n){(e=n(39)(!1)).push([t.i,'.track[data-v-21f96021]{font-family:"Track"}',""]),t.exports=e},360:function(t,e,n){"use strict";n.r(e);n(41),n(86);var o,l=n(23),r=n(343),c={data:function(){return{logoNavigationLink:"/marketing",navigationLinks:[{title:"SEO",address:"/marketing/search-engine-optimization"},{title:"Conversion Optimization",address:"/marketing/conversion-optimization"}]}},props:{quote:{type:String,default:'"In the midst of chaos, there is also opportunity. ~ Sun TZU"'}},components:{SubNavigationBox:r.default},head:{link:[{rel:"canonical",href:"https://interfacedesign.dev/marketing"}],title:"Digital Marketing Agency Colorado Springs",meta:[(o={hid:"description",name:"description",content:"Clotaire Damy"},Object(l.a)(o,"hid","robots"),Object(l.a)(o,"name","robots"),Object(l.a)(o,"content","noindex"),o)],metaInfo:{script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Organization",name:"Clotaire Damy"}}]}},transition:function(t,e){var n="page";void 0!==e&&(n="marketing"===e.path.split("/")[1]?"page":"slide-left");return n}},d=n(8),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-white"},[e("NuxtChild"),this._v(" "),e("SubNavigationBox",{attrs:{navigationLinks:this.navigationLinks,logoNavigationLink:this.logoNavigationLink}}),this._v(" "),e("div",{staticClass:"relative  mx-auto  "},[e("div",{staticClass:"bg-transparent rounded-lg  overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-auto"},[e("div",{staticClass:"mt-20  px-16 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"},[e("div",{staticClass:"lg:self-left"},[e("h4",{staticClass:"text-lg   sm:text-lg"},[e("span",{staticClass:"block special text-lg tracking-wide text-gray-600"},[this._v(this._s(this.quote))])])])])])])],1)}),[],!1,null,"4760e62c",null);e.default=component.exports;installComponents(component,{SubNavigationBox:n(343).default})}}]);
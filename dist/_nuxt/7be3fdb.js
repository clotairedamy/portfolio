(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{340:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("07a0ed3c",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";var l=n(340);n.n(l).a},342:function(t,e,n){(e=n(35)(!1)).push([t.i,'.clotaire{font-family:"Track";margin:0;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;line-height:1.5}.rotate{transform:rotate(180deg)}.title{height:15vh;font-family:"Track"}',""]),t.exports=e},343:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,default:"Clotaire Damy"},subtitle:{type:String,default:"Subtitle"},content:{type:String,default:"Content"}}},r=(n(341),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-start mt-10"},[n("div",{staticClass:"max-w-6xl mx-auto  sm:px-6 lg:px-8"},[n("div",{staticClass:"leading-8"},[n("h1",{staticClass:"sm:text-lg text-pink-600 text-xl  md:tracking-tighter text-center"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")]),t._v(" "),n("h2",{staticClass:"text-4xl title text-gray-400 text-center font-bold tracking-wide"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"lg:text-left max-w-2xl"},[n("p",{staticClass:"mt-20 text-sm leading-8  text-gray-300 sm:text-2xl"},[t._v("\n        "+t._s(t.content)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var l={props:{intros:{default:function(){return[{name:"UI/UX",description:"It’s about organizing the content and flow of a website based on research and planning. ",imgPath:null,inlineSVG:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},{name:"Web Design",description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",imgPath:null,inlineSVG:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},{name:"Motion Design",description:"lorem ipsum two",imgPath:null,inlineSVG:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},{name:"Information Architecture",description:"top",imgPath:null,inlineSVG:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}]}}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mt-10 align-baseline"},[n("dl",{staticClass:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"},t._l(t.intros,(function(e){return n("div",{key:e.name,staticClass:"flex"},[n("div",{staticClass:"flex-shrink-0"},[n("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-transparent text-white"},[e.inlineSVG?n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:e.inlineSVG}})]):e.imgPath?n("img",{staticClass:"h-6 w-6",attrs:{src:e.imgPath}}):n("p",[t._v("NI")])])]),t._v(" "),n("div",{staticClass:"ml-4"},[n("dt",{staticClass:"text-lg leading-6 font-medium text-gray-600"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n              "+t._s(e.description)+"\n            ")])])])})),0)])])}),[],!1,null,"eed41026",null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{subpointsData:[{name:"Test item 1",description:"Not too long, but longer than the title"},{name:"Test item 2",description:"This item has an inline SVG icon!",inlineSVG:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},{name:"Site icon",description:"This item has an externally loaded SVG icon.",imgPath:"/clotaire-01.svg"}]}}},r=n(8),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-4 bg-transparent"},[e("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[e("Title",{attrs:{title:"Motion",content:"A Developer and Digital Marketer based in Colorado Springs (US). I’m passionate about transforming complex problems into meaningful and engaging web interfaces.",subtitle:"Design"}}),this._v(" "),e("Subpoints",{attrs:{intros:this.subpointsData}})],1)])}),[],!1,null,"83b2371c",null);e.default=component.exports;installComponents(component,{Title:n(343).default,Subpoints:n(351).default})}}]);
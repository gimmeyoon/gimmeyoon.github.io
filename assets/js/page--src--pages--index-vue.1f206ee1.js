(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(t,e,n){},227:function(t,e){},233:function(t,e,n){"use strict";var i=n(226);n.n(i).a},234:function(t,e,n){"use strict";var i=n(227),s=n.n(i);e.default=s.a},239:function(t,e,n){"use strict";n.r(e);n(143),n(144);var i={props:{posts:{type:Array,required:!0}},methods:{formatDate:function(t){return new Date(t).toDateString().slice(4)},formatExcerpt:function(t){var e=t.slice(3,200).trim();return-1!==e.indexOf("</p>")?e.slice(0,e.indexOf("</p>")).trim()+"...":e+"..."}}},s=(n(233),n(43)),a={metaInfo:{title:"Home"},components:{BlogList:Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",{staticClass:"list"},t._l(t.posts,(function(e){return n("g-link",{key:e.node.title,attrs:{to:e.node.path}},[n("li",[n("div",{staticClass:"hero_image"},[n("g-image",{attrs:{src:e.node.hero_image,alt:e.node.title,width:"300",height:"300",quality:"75"}})],1),n("div",{staticClass:"blogList__info"},[n("h2",[t._v(t._s(e.node.title))]),n("h3",[t._v(t._s(t.formatDate(e.node.date)))]),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.formatExcerpt(e.node.content))}})])])])})),1)])}),[],!1,null,"3eec5063",null).exports}},o=n(234),r=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{page:"home"}},[e("BlogList",{attrs:{posts:this.$page.posts.edges}})],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(r);e.default=r.exports}}]);
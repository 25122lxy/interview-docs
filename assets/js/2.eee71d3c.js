(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(t,e,a){},284:function(t,e){t.exports=function(t){return null==t}},286:function(t,e,a){},287:function(t,e,a){},288:function(t,e,a){},290:function(t,e,a){"use strict";a(283)},291:function(t,e,a){"use strict";a.r(e);var s=a(304),i=a(293),n=a(277);function r(t,e){if("group"===e.type){const a=e.path&&Object(n.e)(t,e.path),s=e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(n.e)(t,e.path));return a||s}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:i.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let a=0;a<e.length;a++){const s=e[a];if(r(t,s))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.e)(this.$route,t.regularPath)}}},l=a(4),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(a,s){return e("li",{key:s},["group"===a.type?e("SidebarGroup",{attrs:{item:a,open:s===t.openGroupIndex,collapsable:a.collapsable||a.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:a}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},293:function(t,e,a){"use strict";a.r(e);var s=a(277);function i(t,e,a,s,i){const n={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(n.style={"padding-left":i+"rem"}),t("RouterLink",n,a)}function n(t,e,a,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(s.e)(r,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,a+"#"+e.slug,e.title,u,e.level-1),n(t,e.children,a,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:a,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:p}}){const c=Object(s.e)(r,u.path),d="auto"===u.type?c||u.children.some(t=>Object(s.e)(r,u.basePath+"#"+t.slug)):c,h="external"===u.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,u.path,u.title||u.path):i(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,p,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,n(t,u.children,u.basePath,r,f)];if((d||g)&&u.headers&&!s.d.test(u.path)){return[h,n(t,Object(s.c)(u.headers),u.path,r,f)]}return h}},o=(a(290),a(4)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},294:function(t,e,a){},297:function(t,e,a){"use strict";a(286)},298:function(t,e,a){var s=a(17),i=a(7),n=a(13);t.exports=function(t){return"string"==typeof t||!i(t)&&n(t)&&"[object String]"==s(t)}},299:function(t,e,a){"use strict";a(287)},300:function(t,e,a){},301:function(t,e,a){"use strict";a(288)},302:function(t,e,a){},304:function(t,e,a){"use strict";a.r(e);var s=a(277),i={name:"SidebarGroup",components:{DropdownTransition:a(280).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=a(291).default},methods:{isActive:s.e}},n=(a(301),a(4)),r=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},305:function(t,e,a){"use strict";a.r(e);var s=a(284),i=a.n(s),n=a(277),r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:s="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,a,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,s,i){if(/bitbucket.org/.test(e)){return e.replace(n.a,"")+"/src"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n.a,"")+"/-/edit"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i}return(n.i.test(e)?e:"https://github.com/"+e).replace(n.a,"")+"/edit"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i}}},o=(a(297),a(4)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},306:function(t,e,a){"use strict";a.r(e);a(53);var s=a(277),i=a(298),n=a.n(i),r=a(284),o=a.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return p(u.PREV,this)},next(){return p(u.NEXT,this)}}};const u={NEXT:{resolveLink:function(t,e){return c(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return c(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function p(t,{$themeConfig:e,$page:a,$route:i,$site:r,sidebarItems:l}){const{resolveLink:u,getThemeLinkConfig:p,getPageLinkConfig:c}=t,d=p(e),h=c(a),f=o()(h)?d:h;return!1===f?void 0:n()(f)?Object(s.k)(r.pages,f,i.path):u(a,l)}function c(t,e,a){const s=[];!function t(e,a){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+a]}}var d=l,h=(a(299),a(4)),f=Object(h.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},307:function(t,e,a){t.exports=a.p+"assets/img/icon_vuepress_default.406370f8.png"},308:function(t,e,a){"use strict";a(294)},310:function(t,e,a){"use strict";a(300)},311:function(t,e,a){"use strict";a(302)},319:function(t,e,a){},320:function(t,e,a){"use strict";a.r(e);var s={components:{NavLink:a(279).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(308),a(4)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[!1!==t.data.isShowHeroImage?e("img",{attrs:{src:t.data.heroImage?t.$withBase(t.data.heroImage):a(307),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null);e.default=n.exports},321:function(t,e,a){"use strict";a.r(e);var s=a(305),i=a(306),n={components:{PageEdit:s.default,PageNav:i.default},props:["sidebarItems"]},r=(a(310),a(4)),o=Object(r.a)(n,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},322:function(t,e,a){"use strict";a.r(e);var s=a(291),i=a(303),n={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:i.default},props:["items"]},r=(a(311),a(4)),o=Object(r.a)(n,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},333:function(t,e,a){"use strict";t.exports={log_app:!0}},334:function(t,e,a){"use strict";a(319)},338:function(t,e,a){"use strict";a.r(e);var s=a(320),i=a(335),n=a(321),r=a(322),o=a(277),l={name:"Layout",components:{Home:s.default,Page:n.default,Sidebar:r.default,Navbar:i.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=a(4),p=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null).exports;const c=a(333);var d={components:{ParentLayout:p},computed:{yilia_plus(){return this.$themeConfig.yilia_plus}},mounted(){c.log_app&&console.info&&console.log(this.$appDescription+" ➡️ "+this.$appName+" ➡️ "+this.$appUrl)}},h=(a(334),Object(u.a)(d,(function(){var t=this._self._c;return t("main",[this.yilia_plus?t("ForkMe",{attrs:{slot:"sidebar-top"},slot:"sidebar-top"}):this._e(),this._v(" "),t("ParentLayout"),this._v(" "),this.yilia_plus?t("Footer"):this._e()],1)}),[],!1,null,null,null));e.default=h.exports}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[1856],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>o});var n=r(2263),a=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7011:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>s,toc:()=>u,default:()=>p});var n=r(4034),a=r(9973),i=(r(7294),r(3905)),o=r(4996),c={id:"images-plugin",title:"Images"},s={unversionedId:"features/images-plugin",id:"features/images-plugin",isDocsHomePage:!1,title:"Images",description:"\u2192 See setup instructions for the images plugin",source:"@site/../docs/features/images-plugin.mdx",sourceDirName:"features",slug:"/features/images-plugin",permalink:"/docs/features/images-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/images-plugin.mdx",version:"current",frontMatter:{id:"images-plugin",title:"Images"},sidebar:"features",previous:{title:"Databases",permalink:"/docs/features/databases-plugin"},next:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"}},u=[{value:"Cache Inspector",id:"cache-inspector",children:[]},{value:"Attribution",id:"attribution",children:[]},{value:"Leak Tracking",id:"leak-tracking",children:[]}],l={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u2192 ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/images-plugin"},"See setup instructions for the images plugin")),(0,i.kt)("p",null,"The images plugin allows you to inspect what images were fetched, where they are\ncoming from and selectively clear caches. Currently, the plugin supports\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/fresco/"},"Fresco")," as backend."),(0,i.kt)("img",{alt:"Images plugin",src:(0,o.Z)("img/images-plugin.png")}),(0,i.kt)("h2",{id:"cache-inspector"},"Cache Inspector"),(0,i.kt)("p",null,"Images are grouped by the different caching layers they are stored in. The current\nfill rate of the cache is shown and you can choose to selectively clear caches."),(0,i.kt)("h2",{id:"attribution"},"Attribution"),(0,i.kt)("p",null,"Images can be annotated with attributes that can help to determine the context in\nwhich an image was loaded and displayed. You can use that information to filter\nby a particular surface or only inspect images that are in the critical path\nof your application, for instance during cold start."),(0,i.kt)("h2",{id:"leak-tracking"},"Leak Tracking"),(0,i.kt)("p",null,"Dealing with large resources can require special APIs to be used that circumvent\nusual garbage collection. The plugin allows tracking ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseableReference"),"s for\nFresco on Android that weren't properly closed, which can help you improve\nthe performance of your app."))}p.isMDXComponent=!0}}]);
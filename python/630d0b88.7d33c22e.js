(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(147)),i={id:"class-route",title:"Route"},l={unversionedId:"api/class-route",id:"api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with page.route(url, handler) or browsercontext.route(url, handler), the Route object allows to handle the route.",source:"@site/docs/api/class-route.md",slug:"/api/class-route",permalink:"/python/docs/api/class-route",version:"current",sidebar:"api",previous:{title:"Response",permalink:"/python/docs/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/api/class-selectors"}},c=[{value:"route.abort(**options)",id:"routeabortoptions",children:[]},{value:"route.continue_(**options)",id:"routecontinue_options",children:[]},{value:"route.fulfill(**options)",id:"routefulfilloptions",children:[]},{value:"route.request",id:"routerequest",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Whenever a network route is set up with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser_contextrouteurl-handler"}),"browser_context.route(url, handler)"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route#routeabortoptions"}),"route.abort(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route#routecontinue_options"}),"route.continue_(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route#routefulfilloptions"}),"route.fulfill(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route#routerequest"}),"route.request"))),Object(o.b)("h2",{id:"routeabortoptions"},"route.abort(**options)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error_code")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Optional error code. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred.")))),Object(o.b)("p",null,"Aborts the route's request."),Object(o.b)("h2",{id:"routecontinue_options"},"route.continue_(**options)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]","> If set changes the request HTTP headers. Header values will be converted to a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set changes the request method (e.g. GET or POST)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"post_data")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> If set changes the post data of request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set changes the request URL. New URL must have same protocol as original one.")),Object(o.b)("p",null,"Continues route's request with optional overrides."),Object(o.b)("h2",{id:"routefulfilloptions"},"route.fulfill(**options)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"body")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> Response body."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content_type")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set, equals to setting ",Object(o.b)("inlineCode",{parentName:"li"},"Content-Type")," response header."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]","> Response headers. Header values will be converted to a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","> File path to respond with. The content type will be inferred from file extension. If ",Object(o.b)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> Response status code, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"200"),".")),Object(o.b)("p",null,"Fulfills route's request with given response."),Object(o.b)("p",null,"An example of fulfilling all requests with 404 responses:"),Object(o.b)("p",null,"An example of serving static file:"),Object(o.b)("h2",{id:"routerequest"},"route.request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-request",title:"Request"}),"Request"),">")),Object(o.b)("p",null,"A request to be routed."))}p.isMDXComponent=!0},147:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(h,l(l({ref:t},s),{},{components:r})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
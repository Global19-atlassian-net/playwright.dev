(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{796:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(3),i=t(7),o=(t(0),t(876)),r={id:"navigations",title:"Navigations"},c={unversionedId:"navigations",id:"navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.md",slug:"/navigations",permalink:"/docs/next/navigations",version:"current",sidebar:"docs",previous:{title:"Verification",permalink:"/docs/next/verification"},next:{title:"Multi-page scenarios",permalink:"/docs/next/multi-pages"}},l=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[]}],p={rightToc:l};function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),Object(o.b)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),Object(o.b)("p",null,"Playwright splits the process of showing a new document in a page into ",Object(o.b)("strong",{parentName:"p"},"navigation")," and ",Object(o.b)("strong",{parentName:"p"},"loading"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",Object(o.b)("strong",{parentName:"p"},"loading")," the document."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageurl"}),Object(o.b)("inlineCode",{parentName:"a"},"page.url()"))," is set to the new url"),Object(o.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageondomcontentloaded"}),Object(o.b)("inlineCode",{parentName:"a"},"domcontentloaded"))," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageonload"}),Object(o.b)("inlineCode",{parentName:"a"},"load"))," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),Object(o.b)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),Object(o.b)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),Object(o.b)("h3",{id:"auto-wait"},"Auto-wait"),Object(o.b)("p",null,"Navigating to a URL auto-waits for the page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",Object(o.b)("inlineCode",{parentName:"p"},"load"),", ",Object(o.b)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate the page\nawait page.goto('https://example.com');\n")),Object(o.b)("h3",{id:"custom-wait"},"Custom wait"),Object(o.b)("p",null,"Override the default behavior to wait until a specific event, like ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate and wait until network is idle\nawait page.goto('https://example.com', { waitUntil: 'networkidle' });\n")),Object(o.b)("h3",{id:"wait-for-element"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForSelector")),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.click"))," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate and wait for element\nawait page.goto('https://example.com');\nawait page.waitForSelector('text=Example Domain');\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.goto('https://example.com');\nawait page.click('text=Example Domain');\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagegotourl-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.goto(url[, options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagereloadoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.reload([options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagegobackoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.goBack([options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagegoforwardoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.goForward([options])")))),Object(o.b)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),Object(o.b)("p",null,"In the scenarios below, ",Object(o.b)("inlineCode",{parentName:"p"},"page.click")," initiates a navigation and then waits for the navigation to complete."),Object(o.b)("h3",{id:"auto-wait-1"},"Auto-wait"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"page.click")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click will auto-wait for navigation to complete\nawait page.click('text=Login');\n// Fill will auto-wait for element on navigated page\nawait page.fill('#username', 'John Doe');\n")),Object(o.b)("h3",{id:"custom-wait-1"},"Custom wait"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagewaitforloadstatestate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForLoadState"))," to wait for a loading event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button'); // Click triggers navigation\nawait page.waitForLoadState('networkidle'); // This resolves after 'networkidle'\n")),Object(o.b)("h3",{id:"wait-for-element-1"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pagewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForSelector")),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pageclickselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.click"))," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click triggers navigation\nawait page.click('text=Login');\n // Click will auto-wait for the element\nawait page.waitForSelector('#username', 'John Doe');\n\n// Click triggers navigation\nawait page.click('text=Login');\n // Fill will auto-wait for element\nawait page.fill('#username', 'John Doe');\n")),Object(o.b)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),Object(o.b)("p",null,"Clicking an element could trigger asychronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForNavigation")),". For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigation is triggered from a ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(o.b)("li",{parentName:"ul"},"Page waits for network requests before navigation")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  page.click('a'), // Triggers a navigation after a timeout\n  page.waitForNavigation(), // Waits for the next navigation\n]);\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Promise.all")," pattern prevents a race condition between ",Object(o.b)("inlineCode",{parentName:"p"},"page.click")," and ",Object(o.b)("inlineCode",{parentName:"p"},"page.waitForNavigation")," when navigation happens quickly."),Object(o.b)("h3",{id:"multiple-navigations"},"Multiple navigations"),Object(o.b)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForNavigation"))," to a specific url. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Client-side redirects issued after the ",Object(o.b)("inlineCode",{parentName:"li"},"load")," event"),Object(o.b)("li",{parentName:"ul"},"Multiple pushes to history state")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  page.waitForNavigation({ url: '**/login' }),\n  page.click('a'), // Triggers a navigation with a script redirect\n]);\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Promise.all")," pattern prevents a race condition between ",Object(o.b)("inlineCode",{parentName:"p"},"page.click")," and ",Object(o.b)("inlineCode",{parentName:"p"},"page.waitForNavigation")," when navigation happens quickly."),Object(o.b)("h3",{id:"loading-a-popup"},"Loading a popup"),Object(o.b)("p",null,"When popup is opened, explicitly calling ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pagewaitforloadstatestate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForLoadState"))," ensures that popup is loaded to the desired state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ popup ] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('a[target=\"_blank\"]'),  // Opens popup\n]);\nawait popup.waitForLoadState('load');\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pageclickselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.click(selector[, options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pagewaitforloadstatestate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForLoadState([state[, options]])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pagewaitforselectorselector-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForSelector(selector[, options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForNavigation([options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagewaitforfunctionpagefunction-arg-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForFunction(pageFunction[, arg, options])")))),Object(o.b)("h2",{id:"advanced-patterns"},"Advanced patterns"),Object(o.b)("p",null,"For pages that have complicated loading patterns, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pagewaitforfunctionpagefunction-arg-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForFunction"))," is a powerful and extensible approach to define a custom wait criteria."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pagewaitforfunctionpagefunction-arg-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForFunction(pageFunction[, arg, options])")))))}b.isMDXComponent=!0},876:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var a=i.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=b(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=n,u=s["".concat(r,".").concat(d)]||s[d]||g[d]||o;return t?i.a.createElement(u,c(c({ref:a},p),{},{components:t})):i.a.createElement(u,c({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
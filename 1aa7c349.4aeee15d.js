(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{164:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(7),c=(t(0),t(876)),l={id:"verification",title:"Scraping and verification"},o={unversionedId:"verification",id:"version-1.1.0/verification",isDocsHomePage:!1,title:"Scraping and verification",description:"- Evaluating JavaScript",source:"@site/versioned_docs/version-1.1.0/verification.md",slug:"/verification",permalink:"/docs/1.1.0/verification",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"Network",permalink:"/docs/1.1.0/network"},next:{title:"Navigation and loading",permalink:"/docs/1.1.0/loading"}},i=[{value:"Evaluating JavaScript",id:"evaluating-javascript",children:[]},{value:"Capturing screenshot",id:"capturing-screenshot",children:[]},{value:"Page events",id:"page-events",children:[]},{value:"Handling exceptions",id:"handling-exceptions",children:[]}],p={rightToc:i};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#evaluating-javascript"}),"Evaluating JavaScript")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#capturing-screenshot"}),"Capturing screenshot")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#page-events"}),"Page events")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#handling-exceptions"}),"Handling exceptions"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"evaluating-javascript"},"Evaluating JavaScript"),Object(c.b)("p",null,"Execute JavaScript function in the page:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const href = await page.evaluate(() => document.location.href);\n")),Object(c.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),Object(c.b)("p",null,"Get object handle and use it in multiple evaluations:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create a new array in the page, write a reference to it in\n// window.myArray and get a handle to it.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get current length of the array using the handle.\nconst length = await page.evaluate(\n  (arg) => arg.myArray.length,\n  { myArray: myArrayHandle }\n);\n\n// Add one more element to the array using the handle\nawait page.evaluate((arg) => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Get current length of the array using window.myArray reference.\nconst newLength = await page.evaluate(() => window.myArray.length);\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),Object(c.b)("h4",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api#pageselector"}),"page.$(selector)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api#pageselector-1"}),"page.$$(selector)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api#pageevalselector-pagefunction-arg-1"}),"page.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle(pageFunction[, arg])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"capturing-screenshot"},"Capturing screenshot"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Save to file\nawait page.screenshot({path: 'screenshot.png'});\n\n// Capture full page\nawait page.screenshot({path: 'screenshot.png', fullPage: true});\n\n// Capture into buffer\nconst buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n\n// Capture given element\nconst elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),Object(c.b)("h4",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#pagescreenshotoptions"}),"page.screenshot([options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-elementhandle#elementhandlescreenshotoptions"}),"elementHandle.screenshot([options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"page-events"},"Page events"),Object(c.b)("p",null,"You can listen for various events on the ",Object(c.b)("inlineCode",{parentName:"p"},"page")," object. Following are just some of the examples of the events you can assert and handle:"),Object(c.b)("h4",{id:"console---get-all-console-messages-from-the-page"},Object(c.b)("inlineCode",{parentName:"h4"},'"console"')," - get all console messages from the page"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('console', msg => {\n  // Handle only errors.\n  if (msg.type() !== 'error')\n    return;\n  console.log(`text: \"${msg.text()}\"`);\n});\n")),Object(c.b)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(c.b)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),Object(c.b)("h4",{id:"popup---handle-popup-windows"},Object(c.b)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),Object(c.b)("h4",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-consolemessage#class-consolemessage"}),"class: ConsoleMessage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#class-page"}),"class: Page")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#event-console"}),"event: 'console'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#event-dialog"}),"event: 'dialog'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-page#event-popup"}),"event: 'popup'"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"handling-exceptions"},"Handling exceptions"),Object(c.b)("p",null,"Listen uncaught exceptions in the page:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),Object(c.b)("h4",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/api/class-browsercontext#event-pageerror"}),"event: 'pageerror'"))),Object(c.b)("br",null))}s.isMDXComponent=!0},876:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=s(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},g=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(t),g=n,d=b["".concat(l,".").concat(g)]||b[g]||u[g]||c;return t?r.a.createElement(d,o(o({ref:a},p),{},{components:t})):r.a.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=g;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<c;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);
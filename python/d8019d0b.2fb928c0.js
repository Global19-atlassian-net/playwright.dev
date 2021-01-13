(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),l=(n(0),n(147)),o={id:"selectors",title:"Element selectors"},r={unversionedId:"selectors",id:"selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors query elements on the web page for interactions, like page.click(selector, **options), and to obtain ElementHandle through page.queryselector(selector). Built-in selectors auto-pierce shadow DOM.",source:"@site/docs/selectors.md",slug:"/selectors",permalink:"/python/docs/selectors",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/python/docs/auth"},next:{title:"Device and environment emulation",permalink:"/python/docs/emulation"}},s=[{value:"Working with selectors",id:"working-with-selectors",children:[]},{value:"Syntax",id:"syntax",children:[{value:"Short-forms",id:"short-forms",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[]},{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]},{value:"CSS selector engine",id:"css-selector-engine",children:[{value:"Shadow piercing",id:"shadow-piercing",children:[]},{value:"CSS extension: visible",id:"css-extension-visible",children:[]},{value:"CSS extension: text",id:"css-extension-text",children:[]},{value:"CSS extension: has",id:"css-extension-has",children:[]},{value:"CSS extension: is",id:"css-extension-is",children:[]},{value:"CSS extension: light",id:"css-extension-light",children:[]},{value:"CSS extension: position",id:"css-extension-position",children:[]}]},{value:"Xpath selector engine",id:"xpath-selector-engine",children:[]},{value:"Text selector engine",id:"text-selector-engine",children:[{value:"id, data-testid, data-test-id, data-test selector engines",id:"id-data-testid-data-test-id-data-test-selector-engines",children:[]}]}],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Selectors query elements on the web page for interactions, like ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)"),", and to obtain ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle")," through ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)"),". Built-in selectors auto-pierce ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"shadow DOM"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#working-with-selectors"}),"Working with selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#syntax"}),"Syntax")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#best-practices"}),"Best practices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-selector-engine"}),"CSS selector engine")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#xpath-selector-engine"}),"Xpath selector engine")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#text-selector-engine"}),"Text selector engine"))),Object(l.b)("h2",{id:"working-with-selectors"},"Working with selectors"),Object(l.b)("p",null,"Selector describes an element in the page. It can be used to obtain ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle")," (see ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)")," for example) or shortcut element operations to avoid intermediate handle (see ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," for example)."),Object(l.b)("p",null,"Selector has the following format: ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body [>> engine=body]*"),". Here ",Object(l.b)("inlineCode",{parentName:"p"},"engine")," is one of the supported ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/selectors"}),"selector engines")," (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"css")," or ",Object(l.b)("inlineCode",{parentName:"p"},"xpath"),"), and ",Object(l.b)("inlineCode",{parentName:"p"},"body")," is a selector body in the format of the particular engine. When multiple ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body")," clauses are present (separated by ",Object(l.b)("inlineCode",{parentName:"p"},">>"),"), next one is queried relative to the previous one's result."),Object(l.b)("p",null,"Playwright supports various selector engines:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#text-selector-engine"}),"Text")," selectors, for example ",Object(l.b)("inlineCode",{parentName:"li"},'text="Log in"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-selector-engine"}),"CSS")," selectors, including the following extensions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#shadow-piercing"}),"Shadow piercing")," by default and ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-light"}),Object(l.b)("inlineCode",{parentName:"a"},":light"))," pseudo-class"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-visible"}),Object(l.b)("inlineCode",{parentName:"a"},":visible"))," pseudo-class"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-text"}),Object(l.b)("inlineCode",{parentName:"a"},":text"))," pseudo-class"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-has"}),Object(l.b)("inlineCode",{parentName:"a"},":has"))," and ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-is"}),Object(l.b)("inlineCode",{parentName:"a"},":is"))," pseudo-classes"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-extension-position"}),"Position selectors"),", for example ",Object(l.b)("inlineCode",{parentName:"li"},"button:right-of(article)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#xpath-selector-engine"}),"XPath")," selectors, for example ",Object(l.b)("inlineCode",{parentName:"li"},"xpath=//html/body/div")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-selector-engines"}),"id selectors"),", for example ",Object(l.b)("inlineCode",{parentName:"li"},"id=sign-in")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"/python/docs/extensibility"}),"Custom selector engines"))),Object(l.b)("p",null,"For convenience, selectors in the wrong format are heuristically converted to the right format:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"selector starting with ",Object(l.b)("inlineCode",{parentName:"li"},"//")," or ",Object(l.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"xpath=selector"),";"),Object(l.b)("li",{parentName:"ul"},"selector starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"li"},'"')," or ",Object(l.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"text=selector"),";"),Object(l.b)("li",{parentName:"ul"},"otherwise selector is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"css=selector"),".")),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Selectors are defined by selector engine name and selector body, ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"engine")," refers to one of the supported engines",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Built-in selector engines: ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#css-selector-engine"}),"css"),", ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#text-selector-engine"}),"text"),", ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#xpath-selector-engine"}),"xpath")," and ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-selector-engines"}),"id selectors")),Object(l.b)("li",{parentName:"ul"},"Learn more about ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"/python/docs/extensibility"}),"custom selector engines")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"body")," refers to the query string for the respective engine",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"text"),", body is the text content"),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"css"),", body is a ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"}),"css selector"))))),Object(l.b)("p",null,"Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability."),Object(l.b)("h3",{id:"short-forms"},"Short-forms"),Object(l.b)("p",null,"For convenience, common selectors have short-forms:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Selector starting with ",Object(l.b)("inlineCode",{parentName:"li"},"//")," or ",Object(l.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"xpath=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"'//html'")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"'xpath=//html'"),"."))),Object(l.b)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"li"},'"')," or ",Object(l.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"text=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"'\"foo\"'")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"'text=\"foo\"'"),"."))),Object(l.b)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"css=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"'div'")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"'css=div'"),".")))),Object(l.b)("h3",{id:"chaining-selectors"},"Chaining selectors"),Object(l.b)("p",null,"Selectors defined as ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",Object(l.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),Object(l.b)("p",null,"For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(l.b)("p",null,"If a selector needs to include ",Object(l.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(l.b)("h3",{id:"intermediate-matches"},"Intermediate matches"),Object(l.b)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),Object(l.b)("p",null,"For example, ",Object(l.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(l.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(l.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(l.b)("h2",{id:"best-practices"},"Best practices"),Object(l.b)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),Object(l.b)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),Object(l.b)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),Object(l.b)("p",null,"The following examples use the built-in ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#text-selector-engine"}),"text")," and ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#css-selector-engine"}),"css")," selector engines."),Object(l.b)("h3",{id:"define-explicit-contract"},"Define explicit contract"),Object(l.b)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id"),". These ",Object(l.b)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#css-selector-engine"}),"css")," and ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#id-data-testid-data-test-id-data-test-selector-engines"}),"id selectors"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<button data-test-id="directions">Itin\xe9raire</button>\n')),Object(l.b)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),Object(l.b)("p",null,Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#xpath-selector-engine"}),"xpath")," and ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#css-selector-engine"}),"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),Object(l.b)("h2",{id:"css-selector-engine"},"CSS selector engine"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",Object(l.b)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"'span > button'")," to ",Object(l.b)("inlineCode",{parentName:"p"},"'css=span > button'"),"."),Object(l.b)("p",null,"Playwright augments standard CSS selectors in two ways, see below for more details:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"css")," engine pierces open shadow DOM by default."),Object(l.b)("li",{parentName:"ul"},"Playwright adds a few custom pseudo-classes like ",Object(l.b)("inlineCode",{parentName:"li"},":visible"),".")),Object(l.b)("h3",{id:"shadow-piercing"},"Shadow piercing"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"}),Object(l.b)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM and Web Components"),". For that reason, ",Object(l.b)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, any ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," or ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"}),"Child combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",Object(l.b)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"css=article div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",Object(l.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(l.b)("inlineCode",{parentName:"li"},"article"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(l.b)("inlineCode",{parentName:"li"},"span"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(l.b)("inlineCode",{parentName:"li"},"article")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(l.b)("h3",{id:"css-extension-visible"},"CSS extension: visible"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," pseudo-class matches elements that are visible as defined in the ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/python/docs/actionability#visible"}),"actionability")," guide. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"input")," matches all the inputs on the page, while ",Object(l.b)("inlineCode",{parentName:"p"},"input:visible")," matches only visible inputs. This is useful to distinguish elements that are very similar but differ in visibility, however it's usually better to follow ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#best-practices"}),"best practices")," and find another way to select the element."),Object(l.b)("p",null,"Consider a page with two buttons, first invisible and second visible."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<button style='display: none'>Invisible</button>\n<button>Visible</button>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This will find the first button, because it is the first one in DOM order. Then it will wait for the button to become visible before clicking, or timeout while waiting:"),Object(l.b)("li",{parentName:"ul"},"This will find a second button, because it is visible, and then click it.")),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," with caution, because it has two major drawbacks:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When elements change their visibility dynamically, ",Object(l.b)("inlineCode",{parentName:"li"},":visible")," will give upredictable results based on the timing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":visible")," forces a layout and may lead to querying being slow, especially when used with ",Object(l.b)("inlineCode",{parentName:"li"},"page.waitForSelector(selector[, options])")," method.")),Object(l.b)("h3",{id:"css-extension-text"},"CSS extension: text"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":text")," pseudo-class matches elements that have a text node child with specific text. It is similar to the ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#text-selector-engine"}),"text")," engine. There are a few variations that support different arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text("substring")'),' - Matches when element\'s text contains "substring" somewhere. Matching is case-insensitive. Matching also normalizes whitespace, for example it turns multiple spaces into one, trusn line breaks into spaces and ignores leading and trailing whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-is("string")'),' - Matches when element\'s text equals the "string". Matching is case-insensitive and normalizes whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'button:text("Sign in")')," - Text selector may be combined with regular CSS."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("[+-]?\\\\d+")')," - Matches text against a regular expression. Note that special characters like back-slash ",Object(l.b)("inlineCode",{parentName:"li"},"\\"),", quotes ",Object(l.b)("inlineCode",{parentName:"li"},'"'),", square brackets ",Object(l.b)("inlineCode",{parentName:"li"},"[]")," and more should be escaped. Learn more about ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"regular expressions"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("value", "i")')," - Matches text against a regular expression with specified flags.")),Object(l.b)("h3",{id:"css-extension-has"},"CSS extension: has"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":has()")," pseudo-class is an ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:has"}),"experimental CSS pseudo-class")," that is supported by Playwright."),Object(l.b)("h3",{id:"css-extension-is"},"CSS extension: is"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":is()")," pseudo-class is an ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is"}),"experimental CSS pseudo-class")," that is supported by Playwright."),Object(l.b)("h3",{id:"css-extension-light"},"CSS extension: light"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," engine ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"#shadow-piercing"}),"pierces shadow")," by default. It is possible to disable this behavior by wrapping a selector in ",Object(l.b)("inlineCode",{parentName:"p"},":light")," pseudo-class: ",Object(l.b)("inlineCode",{parentName:"p"},":light(section > button.class)")," matches in light DOM only."),Object(l.b)("h3",{id:"css-extension-position"},"CSS extension: position"),Object(l.b)("p",null,"Playwright provides position selectors based on the page layout. These can be combined with regular CSS for better results, for example ",Object(l.b)("inlineCode",{parentName:"p"},'input:right-of(:text("Password"))'),' matches an input field that is to the right of text "Password".'),Object(l.b)("p",null,"Note that position selectors depend on the page layout and may produce unexpected results. For example, a different element could be matched when layout changes by one pixel."),Object(l.b)("p",null,"Position selectors use ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"}),"bounding client rect")," to compute distance and relative position of the elements."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":right-of(inner > selector)")," - Matches elements that are to the right of any element matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":left-of(inner > selector)")," - Matches elements that are to the left of any element matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":above(inner > selector)")," - Matches elements that are above any of the elements matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":below(inner > selector)")," - Matches elements that are below any of the elements matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":near(inner > selector)")," - Matches elements that are near (within 50 CSS pixels) any of the elements matching the inner selector.")),Object(l.b)("h2",{id:"xpath-selector-engine"},"Xpath selector engine"),Object(l.b)("p",null,"XPath engine is equivalent to ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(l.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(l.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(l.b)("p",null,"Malformed selector starting with ",Object(l.b)("inlineCode",{parentName:"p"},"//")," or ",Object(l.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"'//html/body'")," to ",Object(l.b)("inlineCode",{parentName:"p"},"'xpath=//html/body'"),"."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),Object(l.b)("h2",{id:"text-selector-engine"},"Text selector engine"),Object(l.b)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",Object(l.b)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",Object(l.b)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",Object(l.b)("inlineCode",{parentName:"li"},"text= Login")," matches ",Object(l.b)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),Object(l.b)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",Object(l.b)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",Object(l.b)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',Object(l.b)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",Object(l.b)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),Object(l.b)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",Object(l.b)("inlineCode",{parentName:"li"},"/")," symbols. This means ",Object(l.b)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",Object(l.b)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(l.b)("li",{parentName:"ul"},"Input elements of the type ",Object(l.b)("inlineCode",{parentName:"li"},"button")," and ",Object(l.b)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(l.b)("inlineCode",{parentName:"li"},"text=Login")," matches ",Object(l.b)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),Object(l.b)("p",null,"Malformed selector starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"p"},'"')," or ",Object(l.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",Object(l.b)("inlineCode",{parentName:"p"},"css"),", while ",Object(l.b)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(l.b)("h3",{id:"id-data-testid-data-test-id-data-test-selector-engines"},"id, data-testid, data-test-id, data-test selector engines"),Object(l.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(l.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}b.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.a.createElement(h,r(r({ref:t},c),{},{components:n})):a.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
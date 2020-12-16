(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(876)),c={id:"README",title:"Running Playwright in Docker"},o={unversionedId:"docker/README",id:"version-1.2.0/docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic is a playwright-ready image of playwright.",source:"@site/versioned_docs/version-1.2.0/docker/README.md",slug:"/docker/README",permalink:"/docs/1.2.0/docker/README",version:"1.2.0"},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Alpine",id:"alpine",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Dockerfile.bionic"}),"Dockerfile.bionic")," is a playwright-ready image of playwright.\nThis image includes all the dependencies needed to run browsers in a Docker\ncontainer."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#pull-the-image"}),"Pull the image")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#run-the-image"}),"Run the image")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#using-on-ci"}),"Using on CI")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#development"}),"Development"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#build-the-image"}),"Build the image")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#push"}),"Push")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#base-images"}),"Base images"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#alpine"}),"Alpine"))))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(i.b)("p",null,"This image is published on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(i.b)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(i.b)("h3",{id:"run-the-image"},"Run the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker container run -it --rm --ipc=host --security-opt seccomp=chrome.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.b)("p",null,"Note that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The seccomp profile is required to run Chrome without sandbox. Thanks to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jessfraz/dotfiles/blob/master/etc/docker/seccomp/chrome.json"}),"Jessie Frazelle"),"."),Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"--ipc=host")," is also recommended when using Chrome (",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),Object(i.b)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("h3",{id:"build-the-image"},"Build the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker build -t mcr.microsoft.com/playwright:bionic -f Dockerfile.bionic .\n")),Object(i.b)("h3",{id:"push"},"Push"),Object(i.b)("p",null,"Playwright on Docker Hub relies on"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker push playwright.azurecr.io/public/playwright:bionic\n")),Object(i.b)("h2",{id:"base-images"},"Base images"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.b)("h3",{id:"alpine"},"Alpine"),Object(i.b)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}p.isMDXComponent=!0},876:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(d,o(o({ref:t},b),{},{components:r})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
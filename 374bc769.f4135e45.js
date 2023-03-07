(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(470)),i={sidebar_label:"Networking",title:"Networking"},c={unversionedId:"guides/networking",id:"guides/networking",isDocsHomePage:!1,title:"Networking",description:"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/docs/guides/networking.md",slug:"/guides/networking",permalink:"/docs/guides/networking",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/guides/networking.md",version:"current",sidebar_label:"Networking",sidebar:"guides",previous:{title:"Drag and drop",permalink:"/docs/guides/drag-drop"},next:{title:"Helpful links",permalink:"/docs/guides/helpful-links"}},s=[{value:"Using Node Fetch",id:"using-node-fetch",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."),Object(a.b)("p",null,"Remember that NodeGui apps do not run in a browser and hence do not have access to browser apis. NodeGui app is essentially a Node.js app."),Object(a.b)("p",null,"And in a typical Node.js application you would use a third party library like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/axios/axios"}),"axios"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"node-fetch")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/niftylettuce/frisbee"}),"frisbee")," for achieving this functionality."),Object(a.b)("h2",{id:"using-node-fetch"},"Using Node Fetch"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"Node Fetch")," is a light-weight module that brings window.fetch to Node.js."),Object(a.b)("p",null,"An example usage would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fetch = require('node-fetch');\nasync function getData() {\n    try {\n        let response = await fetch('https://somewebsite.com/some.json');\n        let responseJson = await response.json();\n        return responseJson.somecontent;\n    } catch (error) {\n        console.error(error);\n    }\n}\n")),Object(a.b)("p",null,"Take a look at the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"Node Fetch docs")," for a full list of properties."))}p.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
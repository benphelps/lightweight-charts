"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=l,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},k),{},{components:r})):n.createElement(m,i({ref:t},k))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={id:"BaselineStyleOptions",title:"Interface: BaselineStyleOptions",sidebar_label:"BaselineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/BaselineStyleOptions",id:"api/interfaces/BaselineStyleOptions",title:"Interface: BaselineStyleOptions",description:"Represents style options for a baseline series.",source:"@site/docs/api/interfaces/BaselineStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BaselineStyleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BaselineStyleOptions",title:"Interface: BaselineStyleOptions",sidebar_label:"BaselineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"baseValue",id:"basevalue",level:3},{value:"topFillColor1",id:"topfillcolor1",level:3},{value:"topFillColor2",id:"topfillcolor2",level:3},{value:"topLineColor",id:"toplinecolor",level:3},{value:"bottomFillColor1",id:"bottomfillcolor1",level:3},{value:"bottomFillColor2",id:"bottomfillcolor2",level:3},{value:"bottomLineColor",id:"bottomlinecolor",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineType",id:"linetype",level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",level:3},{value:"crosshairMarkerBorderWidth",id:"crosshairmarkerborderwidth",level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",level:3}],k={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents style options for a baseline series."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"basevalue"},"baseValue"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"baseValue"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BaseValuePrice"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseValuePrice"))),(0,l.kt)("p",null,"Base value of the series."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{ type: 'price', price: 0 }")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"topfillcolor1"},"topFillColor1"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"topFillColor1"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The first color of the top area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(38, 166, 154, 0.28)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"topfillcolor2"},"topFillColor2"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"topFillColor2"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The second color of the top area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(38, 166, 154, 0.05)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toplinecolor"},"topLineColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"topLineColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The line color of the top area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(38, 166, 154, 1)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bottomfillcolor1"},"bottomFillColor1"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"bottomFillColor1"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The first color of the bottom area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(239, 83, 80, 0.05)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bottomfillcolor2"},"bottomFillColor2"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"bottomFillColor2"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The second color of the bottom area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(239, 83, 80, 0.28)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bottomlinecolor"},"bottomLineColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"bottomLineColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The line color of the bottom area."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(239, 83, 80, 1)'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linewidth"},"lineWidth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#linewidth"},(0,l.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.kt)("p",null,"Line width."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"3")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linestyle"},"lineStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.kt)("p",null,"Line style."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineStyle#solid"},"Solid")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"linetype"},"lineType"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lineType"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineType"},(0,l.kt)("inlineCode",{parentName:"a"},"LineType"))),(0,l.kt)("p",null,"Line type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineType#simple"},"Simple")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the crosshair marker."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Crosshair marker radius in pixels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"4")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"''")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"''")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshairmarkerborderwidth"},"crosshairMarkerBorderWidth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshairMarkerBorderWidth"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Crosshair marker border width in pixels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LastPriceAnimationMode"},(0,l.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,l.kt)("p",null,"Last price animation mode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LastPriceAnimationMode#disabled"},"Disabled")))}u.isMDXComponent=!0}}]);
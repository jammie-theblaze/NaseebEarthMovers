"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2258],{3517:function(e,l,n){n.d(l,{IP:function(){return o},dF:function(){return r},hA:function(){return s}});var a=n(85893),i=n(31996);function r(e){switch(null==e?void 0:e.type){case"color":case"gradient":return null==e?void 0:e.color;case"image":var l,n,a;return(null==e||null===(l=e.overlay)||void 0===l||null===(n=l.color)||void 0===n?void 0:n.includes("rgba"))?(0,i.s)(e.overlay.color):null==e||null===(a=e.overlay)||void 0===a?void 0:a.color;default:return e}}function o(e){switch(null==e?void 0:e.type){case"color":return{backgroundColor:e.color};case"gradient":var l,n,a;return{backgroundImage:"linear-gradient(".concat(null!==(l=e.direction)&&void 0!==l?l:"180deg",", ").concat(null!==(n=e.color)&&void 0!==n?n:"#FFFFFF",", ").concat(null!==(a=e.color2)&&void 0!==a?a:"#D1D5DB",")")};case"image":var i,r;return{backgroundImage:"url(".concat((null===(i=e.image)||void 0===i?void 0:i.preview)||(null===(r=e.image)||void 0===r?void 0:r.url)||e.image,")"),backgroundPosition:"".concat(e.imagePositionX||"center"," ").concat(e.imagePositionY||"center"),backgroundSize:"cover"};default:return{backgroundColor:e}}}n(67294);var s=function(e){var l,n,r,o,s,t=e.background,d=(null==t||null===(l=t.overlay)||void 0===l?void 0:l.color.includes("rgba"))?(0,i.s)(null==t||null===(n=t.overlay)||void 0===n?void 0:n.color):null==t||null===(r=t.overlay)||void 0===r?void 0:r.color;return"image"===(null==t?void 0:t.type)&&t.overlay?(0,a.jsx)("div",{className:(0,i.AK)("w-full h-full absolute top-0 left-0 z-0"),style:{backgroundColor:(0,i.mR)(null!=d?d:"#000000",null!==(s=null==t||null===(o=t.overlay)||void 0===o?void 0:o.amount)&&void 0!==s?s:50)}}):null}},52077:function(e,l,n){n.d(l,{Z:function(){return t}});var a=n(85893),i=n(41664),r=n.n(i),o=n(16494),s=n(31996);function t(e){var l,n,i,t,d=e.button,u=e.type,c=e.website,v=e.action,g=e.loading,m=e.className,b=(null==c||null===(l=c.button)||void 0===l?void 0:l.background)||(null==c?void 0:c.secondaryColor),h={background:"outline"===(null==c||null===(n=c.button)||void 0===n?void 0:n.style)?"transparent":b,borderRadius:isNaN(null==c||null===(i=c.button)||void 0===i?void 0:i.cornerRadius)?8:c.button.cornerRadius,color:"outline"===(null==c||null===(t=c.button)||void 0===t?void 0:t.style)?b:(0,s.$O)(b),border:"2px solid ".concat(b)};return v&&"function"==typeof v||"submit"===u?(0,a.jsx)("button",{type:"submit"===u?"submit":"button",onClick:v,className:(0,s.AK)("button primary",m),style:h,disabled:g,children:g?(0,a.jsx)(o.Z,{}):d.label}):(0,a.jsx)(r(),{href:function(e){if(e){if("email"===e.type)return"mailto:"+e.link;if("phone"===e.type)return"tel:"+e.link;if("section"===e.type)return"#"+e.link;if("page"===e.type){var l,n,a,i=null==c||null===(l=c.pages)||void 0===l?void 0:l.find((function(l){return l._id===e.page})),r=(null==i?void 0:i.Parent)?null==c||null===(n=c.pages)||void 0===n?void 0:n.find((function(e){return e._id===(null==i?void 0:i.Parent)})):null,o="";return r&&(o+="".concat(r.slug,"/")),o+(null!==(a=null==i?void 0:i.slug)&&void 0!==a?a:"/")}var s,t=null===(s=e.link)||void 0===s?void 0:s.replace(/https?:\/\//gi,"");return t&&"#"!==t?"https://"+t:"#"}return"/"}(d),scroll:"section"!==(null==d?void 0:d.type),children:(0,a.jsx)("a",{className:(0,s.AK)("button primary",m),target:function(e){var l,n,a,i=null==c||null===(l=c.pages)||void 0===l?void 0:l.find((function(l){return l._id===e.page}));return e.newPage?"_blank":(null==i?void 0:i.forceRender)?"_parent":(null==c||null===(n=c.button)||void 0===n?void 0:n.target)?null==c||null===(a=c.button)||void 0===a?void 0:a.target:"_self"}(d),style:h,children:d.label})})}},16494:function(e,l,n){n.d(l,{Z:function(){return r}});var a=n(85893),i=n(31996);function r(e){var l=e.text,n=e.className,r=e.classNameChild;switch(e.variant){case"form":return(0,a.jsx)("div",{className:"w-full max-w-screen-sm my-8",children:(0,a.jsxs)("div",{className:"animate-pulse flex space-y-8 flex-col",children:[(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/2"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,a.jsx)("div",{className:"h-2 bg-gray-100 rounded w-5/6"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,a.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,a.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/6"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,a.jsx)("div",{className:"h-2 bg-gray-100 rounded w-3/4"})]}),(0,a.jsx)("div",{className:"h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"})]})});case"skeleton":return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("div",{className:"animate-pulse",children:(0,a.jsx)("div",{className:(0,i.AK)("h-6 bg-gray-200 rounded",r)})})});case"table":return(0,a.jsx)("div",{className:"w-full my-8",children:(0,a.jsxs)("div",{className:"animate-pulse flex space-y-2 flex-col",children:[(0,a.jsxs)("div",{className:"space-x-2 flex",children:[(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"})]}),[1,2,3,4,5,6].map((function(e){return(0,a.jsxs)("div",{className:"space-x-2 flex",children:[(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,a.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"})]},e)}))]})});default:return(0,a.jsxs)("div",{className:(0,i.AK)("inline-flex items-center",n),children:[(0,a.jsxs)("svg",{className:(0,i.AK)("animate-spin ml-1 mr-3 h-4 w-4",n&&"text-indigo-600"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),l||""===l?l:"Loading..."]})}}},82258:function(e,l,n){n.r(l),n.d(l,{default:function(){return u}});var a=n(14251),i=n(52875),r=n(85893),o=n(31996),s=n(52077),t=n(399),d=n(3517);function u(e){var l,n,u=e.id,c=e.block,v=e.website,g=null==c?void 0:c.headline,m=null==c?void 0:c.content,b=null==c?void 0:c.button,h=null==c?void 0:c.align,x=null!==(l=null==c?void 0:c.background)&&void 0!==l?l:"#FFFFFF",f=(0,o.$O)(null!==(n=(0,d.dF)(x))&&void 0!==n?n:"#F3F4F6"),p=(0,t.Z)(c),y=p.minHeight,j=p.headerHeight;return(0,r.jsxs)("section",{id:u,"data-combine-with-header":1===(null==c?void 0:c.idx)&&(null==c?void 0:c.combineWithHeader),"data-text-color":f,className:(0,o.AK)("flex-shrink-0 flex relative z-10",function(e){switch(e){case"top":return"items-start";case"bottom":return"items-end";default:return"items-center"}}((null==c?void 0:c.verticalAlign)||"center")),style:(0,a.Z)((0,i.Z)((0,a.Z)({},(0,d.IP)(x)),{minHeight:y}),(null==c?void 0:c.combineWithHeader)?{marginTop:"-".concat(j,"px"),paddingTop:"".concat(j,"px")}:{}),children:[(0,r.jsx)(d.hA,{background:x}),(0,r.jsx)("div",{className:(0,o.AK)("relative container mx-auto px-6 z-10",function(e){var l="";switch(null==e?void 0:e.top){case"none":l+="pt-0 ";break;case"small":l+="pt-8 lg:pt-32 ";break;case"medium":l+="pt-12 lg:pt-40 ";break;case"large":l+="pt-20 lg:pt-48 ";break;default:l+="pt-12 lg:pt-32 xl:pt-40 "}switch(null==e?void 0:e.bottom){case"none":l+="pb-0";break;case"small":l+="pb-8 lg:pb-32";break;case"medium":l+="pb-12 lg:pb-40";break;case"large":l+="pb-20 lg:pb-48";break;default:l+="pb-12 lg:pb-32 xl:pb-40"}return l}(null==c?void 0:c.spacing)),children:(0,r.jsxs)("div",{className:(0,o.AK)("max-w-3xl","text-".concat(h),"left"===h?"ml-0 mr-auto":"right"===h?"ml-auto mr-0":"mx-auto"),children:[g&&(0,r.jsx)("h2",{className:(0,o.AK)("heading-xlarge mb-6 break-word","text-".concat(h)),style:(0,a.Z)({color:f},(0,o.j2)(v)),children:g}),m&&(0,r.jsx)("p",{className:(0,o.AK)("body-large"),style:(0,a.Z)({color:f},(0,o.SV)(v)),children:m}),b&&(0,r.jsx)(s.Z,{button:b,website:v,className:"xl mt-6 lg:mt-8 w-full md:w-max"})]})})]})}},399:function(e,l,n){n.d(l,{Z:function(){return i}});var a=n(67294);function i(e){var l,n,i=(0,a.useState)(0),r=i[0],o=i[1],s=(0,a.useState)([0,0]),t=s[0],d=s[1];return(0,a.useEffect)((function(){var e=function(){d([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,a.useEffect)((function(){var l;e&&o(1===e.idx?(null===(l=null===document||void 0===document?void 0:document.getElementById("website-header"))||void 0===l?void 0:l.offsetHeight)||80:0)}),[e,t]),{minHeight:(null==e||null===(l=e.spacing)||void 0===l?void 0:l.minHeight)?"calc(".concat("min-h-screen"===(null==e||null===(n=e.spacing)||void 0===n?void 0:n.minHeight)?"100vh":"240px"," - ").concat((null==e?void 0:e.combineWithHeader)?0:r,"px)"):"240px",headerHeight:r}}}}]);
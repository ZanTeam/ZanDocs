!(function(){"use strict";var Z=Object.defineProperty,q=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var V=(f,n,e)=>n in f?Z(f,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[n]=e,E=(f,n)=>{for(var e in n||(n={}))X.call(n,e)&&V(f,e,n[e]);if(F)for(var e of F(n))J.call(n,e)&&V(f,e,n[e]);return f},W=(f,n)=>q(f,ee(n));var N=(f,n)=>{var e={};for(var t in f)X.call(f,t)&&n.indexOf(t)<0&&(e[t]=f[t]);if(f!=null&&F)for(var t of F(f))n.indexOf(t)<0&&J.call(f,t)&&(e[t]=f[t]);return e};(self.webpackChunkzan_docs=self.webpackChunkzan_docs||[]).push([[400],{75932:function(f,n,e){e.d(n,{F4:function(){return y},xB:function(){return g}});var t=e(75808),a=e(36047),u=e(1828),d=e(33905),m=e(13404),_=e(73803),p=e(42219),l=e.n(p),o={name:"@emotion/react",version:"11.11.0",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.2","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.0","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},s=function(r,v){var c=arguments;if(v==null||!hasOwnProperty.call(v,"css"))return React.createElement.apply(void 0,c);var x=c.length,C=new Array(x);C[0]=Emotion,C[1]=createEmotionProps(r,v);for(var D=2;D<x;D++)C[D]=c[D];return React.createElement.apply(null,C)},i=!1,g=(0,t.w)(function(B,r){var v=B.styles,c=(0,m.O)([v],void 0,a.useContext(t.T));if(!t.i){for(var x,C=c.name,D=c.styles,R=c.next;R!==void 0;)C+=" "+R.name,D+=R.styles,R=R.next;var z=r.compat===!0,G=r.insert("",{name:C,styles:D},r.sheet,z);return z?null:a.createElement("style",(x={},x["data-emotion"]=r.key+"-global "+C,x.dangerouslySetInnerHTML={__html:G},x.nonce=r.sheet.nonce,x))}var U=a.useRef();return(0,d.j)(function(){var b=r.key+"-global",A=new r.sheet.constructor({key:b,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),K=!1,S=document.querySelector('style[data-emotion="'+b+" "+c.name+'"]');return r.sheet.tags.length&&(A.before=r.sheet.tags[0]),S!==null&&(K=!0,S.setAttribute("data-emotion",b),A.hydrate([S])),U.current=[A,K],function(){A.flush()}},[r]),(0,d.j)(function(){var b=U.current,A=b[0],K=b[1];if(K){b[1]=!1;return}if(c.next!==void 0&&(0,u.My)(r,c.next,!0),A.tags.length){var S=A.tags[A.tags.length-1].nextElementSibling;A.before=S,A.flush()}r.insert("",c,A,!1)},[r,c.name]),null});function h(){for(var B=arguments.length,r=new Array(B),v=0;v<B;v++)r[v]=arguments[v];return(0,m.O)(r)}var y=function(){var r=h.apply(void 0,arguments),v="animation-"+r.name;return{name:v,styles:"@keyframes "+v+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},I=function B(r){for(var v=r.length,c=0,x="";c<v;c++){var C=r[c];if(C!=null){var D=void 0;switch(typeof C){case"boolean":break;case"object":{if(Array.isArray(C))D=B(C);else{D="";for(var R in C)C[R]&&R&&(D&&(D+=" "),D+=R)}break}default:D=C}D&&(x&&(x+=" "),x+=D)}}return x};function P(B,r,v){var c=[],x=getRegisteredStyles(B,c,v);return c.length<2?v:x+r(c)}var j=function(r){var v=r.cache,c=r.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var x=0;x<c.length;x++)insertStyles(v,c[x],!1)}),null},O=null;if(!1)var M,L,k,T},58888:function(f,n,e){e.r(n),e.d(n,{default:function(){return h}});var t=e(36047),a=e(95717),u=e(59955),d=e(11417),m=e(16741),_=e(88143),p=e(9764),l=e(68666),o=e(17210),s=(0,l.I)({displayName:"QuestionOutlineIcon",path:(0,o.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,o.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,o.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})}),i=(0,l.I)({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"}),g=function(){var I=(0,a.bU)();return t.createElement(u.xu,{h:"full"},t.createElement(d.K,{h:"65%",align:"center"},t.createElement(m.x,{fontSize:"7xl",color:"brand.300",pt:28,pb:4},t.createElement(s,null)),t.createElement(_.X,{as:"h1",pb:8,textAlign:"center",fontSize:{base:"5xl",md:"7xl"},bgGradient:"linear(to-r, brand.200, brand.500)",color:"transparent",backgroundClip:"text",textShadow:"0 var(--chakra-sizes-2-5) var(--chakra-sizes-5) var(--chakra-colors-brand-200)"},t.createElement(a._H,{id:"404.title"})),t.createElement(p.z,{variant:"outline",colorScheme:"brand",rightIcon:t.createElement(i,null),lineHeight:10},t.createElement(a.rU,{to:"base"in I?I.base:"/",replace:!0},t.createElement(a._H,{id:"404.back"})))))},h=g},56617:function(f,n,e){e.d(n,{XQ:function(){return u}});var t=e(7307),a=Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(l,o){return Array.isArray(l)?l.map(s=>s===null?null:o(s)):(0,t.Kn)(l)?Object.keys(l).reduce((s,i)=>(s[i]=o(l[i]),s),{}):l!=null?o(l):null}function d(l,o=a){const s=o.map(g=>{var h;return(h=l[g])!=null?h:null}),i=s[s.length-1];for(;i===null;)s.pop();return s}function m(l,o=a){const s={};return l.forEach((i,g)=>{const h=o[g];i!=null&&(s[h]=i)}),s}function _(l,o=a){const s=Object.keys(l);return s.length>0&&s.every(i=>o.includes(i))}var p=l=>Number.isNaN(Number(l))},83138:function(f,n,e){e.d(n,{D:function(){return a},i:function(){return u}});var t=e(49424),[a,u]=(0,t.k)({strict:!1,name:"ButtonGroupContext"})},9764:function(f,n,e){e.d(n,{z:function(){return y}});var t=e(36047);function a(P){const[j,O]=(0,t.useState)(!P);return{ref:(0,t.useCallback)(k=>{k&&O(k.tagName==="BUTTON")},[]),type:j?"button":void 0}}var u=e(83138),d=e(43246),m=e(7307),_=e(17210);function p(P){const T=P,{children:j,className:O}=T,M=N(T,["children","className"]),L=(0,t.isValidElement)(j)?(0,t.cloneElement)(j,{"aria-hidden":!0,focusable:!1}):j,k=(0,m.cx)("chakra-button__icon",O);return(0,_.jsx)(d.m.span,W(E({display:"inline-flex",alignSelf:"center",flexShrink:0},M),{className:k,children:L}))}p.displayName="ButtonIcon";var l=e(24485);function o(P){const x=P,{label:j,placement:O,spacing:M="0.5rem",children:L=(0,_.jsx)(l.$,{color:"currentColor",width:"1em",height:"1em"}),className:k,__css:T}=x,B=N(x,["label","placement","spacing","children","className","__css"]),r=(0,m.cx)("chakra-button__spinner",k),v=O==="start"?"marginEnd":"marginStart",c=(0,t.useMemo)(()=>E({display:"flex",alignItems:"center",position:j?"relative":"absolute",[v]:j?M:0,fontSize:"1em",lineHeight:"normal"},T),[T,j,v,M]);return(0,_.jsx)(d.m.div,W(E({className:r},B),{__css:c,children:L}))}o.displayName="ButtonSpinner";var s=e(80021),i=e(93788),g=e(33152),h=e(64561),y=(0,i.G)((P,j)=>{const O=(0,u.i)(),M=(0,g.mq)("Button",E(E({},O),P)),w=(0,h.Lr)(P),{isDisabled:L=O==null?void 0:O.isDisabled,isLoading:k,isActive:T,children:B,leftIcon:r,rightIcon:v,loadingText:c,iconSpacing:x="0.5rem",type:C,spinner:D,spinnerPlacement:R="start",className:z,as:G}=w,U=N(w,["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),b=(0,t.useMemo)(()=>{const Q=W(E({},M==null?void 0:M._focus),{zIndex:1});return E(E({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},M),!!O&&{_focus:Q})},[M,O]),{ref:A,type:K}=a(G),S={rightIcon:v,leftIcon:r,iconSpacing:x,children:B};return(0,_.jsxs)(d.m.button,W(E({ref:(0,s.qq)(j,A),as:G,type:C!=null?C:K,"data-active":(0,m.PB)(T),"data-loading":(0,m.PB)(k),__css:b,className:(0,m.cx)("chakra-button",z)},U),{disabled:L||k,children:[k&&R==="start"&&(0,_.jsx)(o,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:x,children:D}),k?c||(0,_.jsx)(d.m.span,{opacity:0,children:(0,_.jsx)(I,E({},S))}):(0,_.jsx)(I,E({},S)),k&&R==="end"&&(0,_.jsx)(o,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:x,children:D})]}))});y.displayName="Button";function I(P){const{leftIcon:j,rightIcon:O,children:M,iconSpacing:L}=P;return(0,_.jsxs)(_.Fragment,{children:[j&&(0,_.jsx)(p,{marginEnd:L,children:j}),M,O&&(0,_.jsx)(p,{marginStart:L,children:O})]})}},55159:function(f,n,e){e.d(n,{J:function(){return p}});var t=e(93788),a=e(33152),u=e(43246),d=e(7307),m=e(17210),_={path:(0,m.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,m.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,m.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,m.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},p=(0,t.G)((o,s)=>{const v=o,{as:i,viewBox:g,color:h="currentColor",focusable:y=!1,children:I,className:P,__css:j}=v,O=N(v,["as","viewBox","color","focusable","children","className","__css"]),M=(0,d.cx)("chakra-icon",P),L=(0,a.mq)("Icon",o),k=E(E({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:h},j),L),T={ref:s,focusable:y,className:M,__css:k},B=g!=null?g:_.viewBox;if(i&&typeof i!="string")return(0,m.jsx)(u.m.svg,E(E({as:i},T),O));const r=I!=null?I:_.path;return(0,m.jsx)(u.m.svg,W(E(E({verticalAlign:"middle",viewBox:B},T),O),{children:r}))});p.displayName="Icon";var l=null},68666:function(f,n,e){e.d(n,{I:function(){return m}});var t=e(55159),a=e(93788),u=e(36047),d=e(17210);function m(_){const{viewBox:p="0 0 24 24",d:l,displayName:o,defaultProps:s={}}=_,i=u.Children.toArray(_.path),g=(0,a.G)((h,y)=>(0,d.jsx)(t.J,W(E(E({ref:y,viewBox:p},s),h),{children:i.length?i:(0,d.jsx)("path",{fill:"currentColor",d:l})})));return g.displayName=o,g}},59955:function(f,n,e){e.d(n,{xu:function(){return d}});var t=e(43246),a=e(93788),u=e(17210),d=(0,t.m)("div");d.displayName="Box";var m=(0,a.G)(function(l,o){const y=l,{size:s,centerContent:i=!0}=y,g=N(y,["size","centerContent"]),h=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,u.jsx)(d,E({ref:o,boxSize:s,__css:W(E({},h),{flexShrink:0,flexGrow:0})},g))});m.displayName="Square";var _=(0,a.G)(function(l,o){const g=l,{size:s}=g,i=N(g,["size"]);return(0,u.jsx)(m,E({size:s,ref:o,borderRadius:"9999px"},i))});_.displayName="Circle"},88143:function(f,n,e){e.d(n,{X:function(){return p}});var t=e(93788),a=e(33152),u=e(64561),d=e(43246),m=e(7307),_=e(17210),p=(0,t.G)(function(o,s){const i=(0,a.mq)("Heading",o),y=(0,u.Lr)(o),{className:g}=y,h=N(y,["className"]);return(0,_.jsx)(d.m.h2,W(E({ref:s,className:(0,m.cx)("chakra-heading",o.className)},h),{__css:i}))});p.displayName="Heading"},11417:function(f,n,e){e.d(n,{K:function(){return g}});var t=e(43246),a=e(17210),u=h=>(0,a.jsx)(t.m.div,W(E({className:"chakra-stack__item"},h),{__css:E({display:"inline-block",flex:"0 0 auto",minWidth:0},h.__css)}));u.displayName="StackItem";var d=e(56617),m="& > *:not(style) ~ *:not(style)";function _(h){const{spacing:y,direction:I}=h,P={column:{marginTop:y,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:y},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:y,marginStart:0},"row-reverse":{marginTop:0,marginEnd:y,marginBottom:0,marginStart:0}};return{flexDirection:I,[m]:(0,d.XQ)(I,j=>P[j])}}function p(h){const{spacing:y,direction:I}=h,P={column:{my:y,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:y,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:y,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:y,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,d.XQ)(I,j=>P[j])}}var l=e(93788),o=e(7307),s=e(67985),i=e(36047),g=(0,l.G)((h,y)=>{const U=h,{isInline:I,direction:P,align:j,justify:O,spacing:M="0.5rem",wrap:L,children:k,divider:T,className:B,shouldWrapChildren:r}=U,v=N(U,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),c=I?"row":P!=null?P:"column",x=(0,i.useMemo)(()=>_({direction:c,spacing:M}),[c,M]),C=(0,i.useMemo)(()=>p({spacing:M,direction:c}),[M,c]),D=!!T,R=!r&&!D,z=(0,i.useMemo)(()=>{const b=(0,s.W)(k);return R?b:b.map((A,K)=>{const S=typeof A.key!="undefined"?A.key:K,w=K+1===b.length,H=r?(0,a.jsx)(u,{children:A},S):A;if(!D)return H;const $=(0,i.cloneElement)(T,{__css:C}),Y=w?null:$;return(0,a.jsxs)(i.Fragment,{children:[H,Y]},S)})},[T,C,D,R,r,k]),G=(0,o.cx)("chakra-stack",B);return(0,a.jsx)(t.m.div,W(E({ref:y,display:"flex",alignItems:j,justifyContent:O,flexDirection:x.flexDirection,flexWrap:L,className:G,__css:D?{}:{[m]:x[m]}},v),{children:z}))});g.displayName="Stack"},16741:function(f,n,e){e.d(n,{x:function(){return l}});var t=e(93788),a=e(33152),u=e(64561),d=e(43246),m=e(7307),_=e(96459),p=e(17210),l=(0,t.G)(function(s,i){const g=(0,a.mq)("Text",s),M=(0,u.Lr)(s),{className:h,align:y,decoration:I,casing:P}=M,j=N(M,["className","align","decoration","casing"]),O=(0,_.o)({textAlign:s.align,textDecoration:s.decoration,textTransform:s.casing});return(0,p.jsx)(d.m.p,W(E(E({ref:i,className:(0,m.cx)("chakra-text",s.className)},O),j),{__css:g}))});l.displayName="Text"},96459:function(f,n,e){e.d(n,{o:function(){return t}});function t(a){const u=Object.assign({},a);for(let d in u)u[d]===void 0&&delete u[d];return u}},67985:function(f,n,e){e.d(n,{W:function(){return a}});var t=e(36047);function a(u){return t.Children.toArray(u).filter(d=>(0,t.isValidElement)(d))}},24485:function(f,n,e){e.d(n,{$:function(){return o}});var t=e(75932),a=e(93788),u=e(33152),d=e(64561),m=e(43246),_=e(7307),p=e(17210),l=(0,t.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),o=(0,a.G)((s,i)=>{const g=(0,u.mq)("Spinner",s),k=(0,d.Lr)(s),{label:h="Loading...",thickness:y="2px",speed:I="0.45s",emptyColor:P="transparent",className:j}=k,O=N(k,["label","thickness","speed","emptyColor","className"]),M=(0,_.cx)("chakra-spinner",j),L=E({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:y,borderBottomColor:P,borderLeftColor:P,animation:`${l} ${I} linear infinite`},g);return(0,p.jsx)(m.m.div,W(E({ref:i,__css:L,className:M},O),{children:h&&(0,p.jsx)(m.m.span,{srOnly:!0,children:h})}))});o.displayName="Spinner"}}]);
}());
!(function(){"use strict";var K=Object.defineProperty,Z=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var S=(a,r,t)=>r in a?K(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,M=(a,r)=>{for(var t in r||(r={}))W.call(r,t)&&S(a,t,r[t]);if(I)for(var t of I(r))U.call(r,t)&&S(a,t,r[t]);return a},L=(a,r)=>Z(a,N(r));var B=(a,r)=>{var t={};for(var v in a)W.call(a,v)&&r.indexOf(v)<0&&(t[v]=a[v]);if(a!=null&&I)for(var v of I(a))r.indexOf(v)<0&&U.call(a,v)&&(t[v]=a[v]);return t};(self.webpackChunkzan_docs=self.webpackChunkzan_docs||[]).push([[935],{35474:function(a,r,t){t.r(r);var v=t(69941),h=t(91172),j=t(35911),x=t(56682),c=t(15790),l=t(41455),f=t(47126),E=t(23414),D=t(23442),p=t(95717),s=t(36047),e=t(17210);function o(){var i=(0,p.eL)(),T=i.texts;return(0,e.jsx)(p.dY,{children:(0,e.jsx)(e.Fragment,{})})}r.default=o},69941:function(a,r,t){var v=t(59718),h=t(36047),j=t(95717),x=t(41455),c=t(95270),l=function(e){var o=e.children,i=useColorModeValue("gray.50","gray.800"),T=useColorModeValue("brand.500","brand.300");return React.createElement(chakra.code,{bgColor:i,textColor:T},o)},f={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var o=this,i=[];return Object.entries(e.properties||{}).forEach(function(T){var C,g=(0,v.Z)(T,2),A=g[0],P=g[1];i.push("".concat(A).concat((C=e.required)!==null&&C!==void 0&&C.includes(A)?"":"?",": ").concat(P.type==="object"?"object":o.toString(P)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var o=this.getValidClassName(e.items);return o?"".concat(o,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var o=this,i=e.signature;return"".concat(i.isAsync?"async ":"","(").concat(i.arguments.map(function(T){return"".concat(T.key,": ").concat(o.toString(T))}).join(", "),") => ").concat(this.toString(i.returnType))},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(o){return JSON.stringify(o)}).join(" | ")},oneOf:function(e){var o=this;return e.oneOf.map(function(i){return o.getValidClassName(i)||o.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},E=function(e){var o=useState(function(){return f.toString(e)}),i=_slicedToArray(o,2),T=i[0],C=i[1];return useEffect(function(){C(f.toString(e))},[e]),React.createElement(l,null,T)},D=function(e){var o,i=useRouteMeta(),T=i.frontmatter,C=useAtomAssets(),g=C.components,A=useLocale(),P=(o=e.id)!==null&&o!==void 0?o:T.atomId;if(!P)throw new Error("`id` properties if required for API component!");var b=g==null?void 0:g[P],O=useMemo(function(){return!g},[g]),_=useMemo(function(){var d;return O?{loading:{}}:b==null||(d=b.propsConfig)===null||d===void 0?void 0:d.properties},[b,O]),u=useMemo(function(){var d;return g&&!(b!=null&&(d=b.propsConfig)!==null&&d!==void 0&&d.properties)},[b,g]),n=useCallback(function(d,m){var R,y;return b!=null&&(R=b.propsConfig)!==null&&R!==void 0&&(y=R.required)!==null&&y!==void 0&&y.includes(d)?React.createElement(FormattedMessage,{id:"api.component.required"}):m||"--"},[b]);return React.createElement(Table,{parseChildren:!1},React.createElement(Thead,null,React.createElement(Tr,null,React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.name"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.description"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.type"})),React.createElement(Th,null,React.createElement(FormattedMessage,{id:"api.component.default"})))),React.createElement(Tbody,null,u?React.createElement(Tr,null,React.createElement(Td,{colSpan:4},React.createElement(Center,null,React.createElement(Text,{as:"p"},React.createElement(FormattedMessage,{id:"api.component.not.found"}))))):Object.entries(_).map(function(d){var m,R=_slicedToArray(d,2),y=R[0],k=R[1];return React.createElement(Tr,{key:y},React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},y)),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},getLocalValue(A,(m=k==null?void 0:k.tags)!==null&&m!==void 0?m:{},"description")||"--")),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},React.createElement(E,k))),React.createElement(Td,null,React.createElement(Skeleton,{isLoaded:!O,fadeDuration:4},React.createElement(l,null,n(y,k.default)))))})))},p=null},47126:function(a,r,t){var v=t(36047),h=function(c){var l=c.image,f=c.children,E=c.description,D=c.submit,p=c.title,s=c.link;return React.createElement(Card,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",shadow:"md"},!!(l!=null&&l.length)&&React.createElement(Image,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:l,alt:"ad image"}),React.createElement(Stack,null,React.createElement(CardBody,null,!!p&&React.createElement(Heading,{size:"md"},p),React.createElement(Text,{py:"2"},f!=null?f:E)),(!!D||!!s)&&React.createElement(CardFooter,null,React.createElement(Button,{as:"a",href:s,target:"_blank",referrerPolicy:"no-referrer",variant:"solid",colorScheme:"brand",rightIcon:React.createElement(ExternalLinkIcon,null)},D))))},j=null},23414:function(a,r,t){var v=t(36047),h=null,j=function(l){var f=l.title,E=l.content,D=l.children,p=_objectWithoutProperties(l,h);return React.createElement(ChakraAlert,_extends({mb:4},p),React.createElement(AlertIcon,null),React.createElement(AlertTitle,null,f),React.createElement(AlertDescription,null,D!=null?D:E))},x=null},41455:function(a,r,t){var v=t(36047),h=t(93788),j=t(33152),x=t(64561),c=t(43246),l=t(7307),f=t(49424),E=t(17210),[D,p]=(0,f.k)({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),s=(0,h.G)((_,u)=>{const n=(0,j.jC)("Table",_),y=(0,x.Lr)(_),{className:d,layout:m}=y,R=B(y,["className","layout"]);return(0,E.jsx)(D,{value:n,children:(0,E.jsx)(c.m.table,M({ref:u,__css:M({tableLayout:m},n.table),className:(0,l.cx)("chakra-table",d)},R))})});s.displayName="Table";var e=(0,h.G)((_,u)=>{const n=p();return(0,E.jsx)(c.m.thead,L(M({},_),{ref:u,__css:n.thead}))}),o=(0,h.G)((_,u)=>{const n=p();return(0,E.jsx)(c.m.tbody,L(M({},_),{ref:u,__css:n.tbody}))}),i=(0,h.G)((d,n)=>{var m=d,{isNumeric:_}=m,u=B(m,["isNumeric"]);const R=p();return(0,E.jsx)(c.m.th,L(M({},u),{ref:n,__css:R.th,"data-is-numeric":_}))}),T=(0,h.G)((d,n)=>{var m=d,{isNumeric:_}=m,u=B(m,["isNumeric"]);const R=p();return(0,E.jsx)(c.m.td,L(M({},u),{ref:n,__css:R.td,"data-is-numeric":_}))}),C=(0,h.G)((_,u)=>{const n=p();return(0,E.jsx)(c.m.tr,L(M({},_),{ref:u,__css:n.tr}))}),g={thead:e,tbody:o,th:i,td:T,tr:C};function A(_){var u=_.type,n=_.props,d=n!=null&&n.children?P(n.children):[],m=g[u];return m?cloneElement(React.createElement(m,null),_objectSpread(_objectSpread({},n),{},{children:d})):_}function P(_){var u=Children.count(_);return u?Children.map(_,A):A(_)}var b=function(u){var n=u.children,d=u.parseChildren,m=d===void 0?!0:d,R=useMemo(function(){return m?P(n):n},[m,n]);return React.createElement(TableContainer,{mt:6,mb:8},React.createElement(ChakraTable,null,R))},O=null},91172:function(a,r,t){var v=t(36047);function h(){return h=Object.assign?Object.assign.bind():function(c){for(var l=1;l<arguments.length;l++){var f=arguments[l];for(var E in f)Object.prototype.hasOwnProperty.call(f,E)&&(c[E]=f[E])}return c},h.apply(this,arguments)}var j=function(l){return React.createElement("span",h({className:"dumi-default-badge"},l))},x=null}}]);
}());
"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[6603],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||p;return t?n.createElement(f,u(u({ref:r},l),{},{components:t})):n.createElement(f,u({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,u=new Array(p);u[0]=m;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<p;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81110:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=t(87462),o=t(63366),p=(t(67294),t(3905)),u=["components"],i={},a=void 0,c={unversionedId:"okp4d_query_group_group-members",id:"okp4d_query_group_group-members",title:"okp4d_query_group_group-members",description:"okp4d query group group-members",source:"@site/commands/okp4d_query_group_group-members.md",sourceDirName:".",slug:"/okp4d_query_group_group-members",permalink:"/commands/okp4d_query_group_group-members",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_group-info",permalink:"/commands/okp4d_query_group_group-info"},next:{title:"okp4d_query_group_group-policies-by-admin",permalink:"/commands/okp4d_query_group_group-policies-by-admin"}},l={},s=[{value:"okp4d query group group-members",id:"okp4d-query-group-group-members",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,u);return(0,p.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"okp4d-query-group-group-members"},"okp4d query group group-members"),(0,p.kt)("p",null,"Query for group members by group id with pagination flags"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"okp4d query group group-members [id] [flags]\n")),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for group-members\n      --node string     &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}d.isMDXComponent=!0}}]);
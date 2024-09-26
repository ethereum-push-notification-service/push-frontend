"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[65893],{964481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=n(474848),l=n(28453),s=n(411470),r=n(119365),i=n(641622);n(113490);const d={id:"docs-notifications-develop-channel-delegates",title:"Channel Delegates",hide_title:!0,slug:"./channel-delegates",displayed_sidebar:"pushNotificationSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_notifications_develop--channel_delegates.png"},o="Channel delegates overview",c={id:"notifications/build/docs-notifications-develop-channel-delegates",title:"Channel Delegates",description:"This section covers all APIs related to managing channel delegate including add / remove and get list of all delegates.",source:"@site/docs/notifications/01-build/06-Develop-Channel-Delegates.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/channel-delegates",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/channel-delegates",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/06-Develop-Channel-Delegates.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-notifications-develop-channel-delegates",title:"Channel Delegates",hide_title:!0,slug:"./channel-delegates",displayed_sidebar:"pushNotificationSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_notifications_develop--channel_delegates.png"},sidebar:"pushNotificationSidebar",previous:{title:"Channel Settings",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/create-channel-settings"},next:{title:"Manage Channel",permalink:"/push-website/pr-preview/pr-889/docs/notifications/build/manage-channel"}},u={},h=[{value:"What is Channel Delegate",id:"what-is-channel-delegate",level:2},{value:"Get delegate API",id:"get-delegate-api",level:2},{value:"Get delegate parameters",id:"get-delegate-parameters",level:3},{value:"Add delegate API",id:"add-delegate-api",level:2},{value:"Add delegate parameters",id:"add-delegate-parameters",level:3},{value:"Remove delegate API",id:"remove-delegate-api",level:2},{value:"Remove delegate parameters",id:"remove-delegate-parameters",level:3}];function p(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"channel-delegates-overview",children:"Channel delegates overview"}),"\n",(0,a.jsx)(t.p,{children:"This section covers all APIs related to managing channel delegate including add / remove and get list of all delegates."}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)("title",{children:"Manage Channel Delegate | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"what-is-channel-delegate",children:"What is Channel Delegate"}),"\n",(0,a.jsx)(t.p,{children:"Channel Delegates are additional wallets that the channel creators have authorised to send notifications on the channels behalf on a specific chain.\nThey are extremely useful to expand on sending notification capabilities and helps in ensuring an additional level of security besides enabling multiple wallets to send notifications on your behalf."}),"\n",(0,a.jsx)(t.h2,{id:"get-delegate-api",children:"Get delegate API"}),"\n",(0,a.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const delegates = await userAlice.channel.delegate.get();\n"})})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"get-delegate-parameters",children:"Get delegate parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Param"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Subtype"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"options"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"object"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"Configuration options for retrieving delegator information."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"options.channel"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"Channel address in CAIP"})]})]})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,a.jsx)(i.A,{summary:"Expected response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"[\n  'eip155:11155111:0x35B84d6848D16415177c64D64504663b998A6ab4',\n  'eip155:80001:0xD8634C39BBFd4033c0d3289C4515275102423681',\n];\n"})})}),"\n",(0,a.jsx)(t.h2,{id:"add-delegate-api",children:"Add delegate API"}),"\n",(0,a.jsx)(t.p,{children:"To add a delegate to a channel, on ethereum or alias chain of the channel."}),"\n",(0,a.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const addedDelegate = await userAlice.channel.delegate.add(\n  `eip155:11155111:${walletAddress}`\n);\n"})})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"add-delegate-parameters",children:"Add delegate parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Param"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Subtype"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"delegate"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"delegator address in CAIP"})]})})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,a.jsx)(i.A,{summary:"Expected response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"{\n  transactionHash: '0xd4a65a474ea7bd12bae887df43ebe8531ab211e498925cfad6599c5758880c33';\n}\n"})})}),"\n",(0,a.jsx)(t.h2,{id:"remove-delegate-api",children:"Remove delegate API"}),"\n",(0,a.jsx)(t.p,{children:"To remove a delegate to a channel, on ethereum or alias chain of the channel."}),"\n",(0,a.jsx)(s.A,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const removeDelegate = await userAlice.channel.delegate.remove(\n  `eip155:11155111:${walletAddress}`\n);\n"})})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"remove-delegate-parameters",children:"Remove delegate parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Param"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Subtype"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"delegate"})})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"-"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"delegator address in CAIP"})]})})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: Parameters ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,a.jsx)(i.A,{summary:"Expected response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"{\n  transactionHash: '0x85327b3d24772f4b424eb959fe01bf5ca5e6148bfde93cc1fa7cb7f4ebcf7c41';\n}\n"})})})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},641622:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(296540),l=n(618215),s=n(15066),r=n(992303),i=n(41422);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var o=n(474848);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function h(e){let{summary:t,children:n,...l}=e;const h=(0,r.A)(),p=(0,a.useRef)(null),{collapsed:m,setCollapsed:x}=(0,i.u)({initialState:!l.open}),[g,b]=(0,a.useState)(l.open),j=a.isValidElement(t)?t:(0,o.jsx)("summary",{children:null!=t?t:"Details"});return(0,o.jsxs)("details",{...l,ref:p,open:g,"data-collapsed":m,className:(0,s.A)(d.details,h&&d.isBrowser,l.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&u(t,p.current)&&(e.preventDefault(),m?(x(!1),b(!0)):x(!0))},children:[j,(0,o.jsx)(i.N,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),b(!e)},children:(0,o.jsx)("div",{className:d.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},m="alert alert--info";function x(e){let{...t}=e;return(0,o.jsx)(h,{...t,className:(0,l.A)(m,p.details,t.className)})}},119365:(e,t,n)=>{n.d(t,{A:()=>r});n(296540);var a=n(618215);const l={tabItem:"tabItem_Ymn6"};var s=n(474848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(296540),l=n(618215),s=n(823104),r=n(956347),i=n(300205),d=n(757485),o=n(231682),c=n(289466);function u(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=h(e),[r,d]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:l}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,c.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),b=(()=>{const e=null!=o?o:x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&d(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(474848);function f(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),l=i[n].value;l!==a&&(o(t),r(l))},u=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!==(a=d[t])&&void 0!==a?a:d[0];break}case"ArrowLeft":{var l;const t=d.indexOf(e.currentTarget)-1;n=null!==(l=d[t])&&void 0!==l?l:d[d.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,l.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(296540);const l={},s=a.createContext(l);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
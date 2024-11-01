"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[40109],{528646:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=s(474848),i=s(28453),r=s(411470),a=s(119365),l=s(641622);s(113490);const c={id:"docs-notifications-develop-manage-subscriptions",title:"Manage Subscriptions",hide_title:!0,slug:"./manage-subscriptions",displayed_sidebar:"pushNotificationSidebar",sidebar_position:9,image:"/assets/docs/previews/docs_notifications_develop--manage_subscriptions.png"},o="Manage subscriptions overview",d={id:"notifications/build/docs-notifications-develop-manage-subscriptions",title:"Manage Subscriptions",description:"These APIs are useful for managing subscriptions for specific channels including subscribing to a channel, indicating settings for a channel or unsubscribing from a channel.",source:"@site/docs/notifications/01-build/09-Develop-Manage-Subscriptions.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/manage-subscriptions",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/manage-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/09-Develop-Manage-Subscriptions.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"docs-notifications-develop-manage-subscriptions",title:"Manage Subscriptions",hide_title:!0,slug:"./manage-subscriptions",displayed_sidebar:"pushNotificationSidebar",sidebar_position:9,image:"/assets/docs/previews/docs_notifications_develop--manage_subscriptions.png"},sidebar:"pushNotificationSidebar",previous:{title:"Fetch Subscriptions",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/fetch-subscriptions"},next:{title:"Fetch Notifications",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/fetch-notifications"}},u={},h=[{value:"Subscribe channel API",id:"subscribe-channel-api",level:2},{value:"Subscribe channel parameters",id:"subscribe-channel-parameters",level:3},{value:"Individual setting object",id:"individual-setting-object",level:3},{value:"Unsubscribe channel API",id:"unsubscribe-channel-api",level:2},{value:"Unsubscribe channel parameters",id:"unsubscribe-channel-parameters",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"manage-subscriptions-overview",children:"Manage subscriptions overview"}),"\n",(0,t.jsx)(n.p,{children:"These APIs are useful for managing subscriptions for specific channels including subscribing to a channel, indicating settings for a channel or unsubscribing from a channel."}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("title",{children:"Manage Subscriptions | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"subscribe-channel-api",children:"Subscribe channel API"}),"\n",(0,t.jsx)(n.p,{children:"Channel is any protocol that has activated themselves to send notifications. User needs to subscribe to a channel to enable that channel notifications to come to their inbox (and not land in spam). User can also setup settings along with a channel subscription though it's upto the channel to honor those."}),"\n",(0,t.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,t.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// userAlice.notification.subscribe(channel, {settings?})\nconst response = await userAlice.notification.subscribe(\n  `eip155:11155111:${channelAddress}`\n);\n\n// Another example but with settings\nconst response = await userAlice.notification.subscribe(\n  `eip155:11155111:${channelAddress}`,\n  {\n    settings: [\n      // settings are dependent on channel\n      { enabled: true, value: '1' }, // setting 1\n      { enabled: false }, // setting 2\n      { enabled: true, value: '50' }, // setting 3\n    ],\n  }\n);\n"})})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"subscribe-channel-parameters",children:"Subscribe channel parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Subtype"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"channel"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsxs)(n.td,{children:["Channel/Alias address in ",(0,t.jsx)(n.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",children:"chain specific wallet format"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"settings"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array of objects"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsxs)(n.td,{children:["Contain array of individual ",(0,t.jsx)(n.code,{children:"setting"})," object"]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Parameters ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"individual-setting-object",children:"Individual setting object"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Subtype"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"setting"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Individual setting object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{children:"Indicates if setting is enabled or disabled"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"The value set by the user"})]})]})]}),"\n",(0,t.jsx)(l.A,{summary:"Expected response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"{ status: 204, message: 'successfully opted into channel' }\n"})})}),"\n",(0,t.jsx)(n.h2,{id:"unsubscribe-channel-api",children:"Unsubscribe channel API"}),"\n",(0,t.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,t.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// userAlice.notification.unsubscribe(channel)\nconst unsubscribeResponse = await userAlice.notification.unsubscribe(\n  `eip155:11155111:${channelAddress}` // channel to unsubscribe\n);\n"})})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"unsubscribe-channel-parameters",children:"Unsubscribe channel parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Subtype"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"channel"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Channel/Alias address in CAIP format"})]})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Parameters ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,t.jsx)(l.A,{summary:"Expected response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"{ status: 204, message: 'successfully opted out channel' }\n"})})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},641622:(e,n,s)=>{s.d(n,{A:()=>x});var t=s(296540),i=s(618215),r=s(15066),a=s(992303),l=s(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var o=s(474848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function u(e,n){return!!e&&(e===n||u(e.parentElement,n))}function h(e){let{summary:n,children:s,...i}=e;const h=(0,a.A)(),b=(0,t.useRef)(null),{collapsed:p,setCollapsed:x}=(0,l.u)({initialState:!i.open}),[j,m]=(0,t.useState)(i.open),f=t.isValidElement(n)?n:(0,o.jsx)("summary",{children:null!=n?n:"Details"});return(0,o.jsxs)("details",{...i,ref:b,open:j,"data-collapsed":p,className:(0,r.A)(c.details,h&&c.isBrowser,i.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;d(n)&&u(n,b.current)&&(e.preventDefault(),p?(x(!1),m(!0)):x(!0))},children:[f,(0,o.jsx)(l.N,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),m(!e)},children:(0,o.jsx)("div",{className:c.collapsibleContent,children:s})})]})}const b={details:"details_b_Ee"},p="alert alert--info";function x(e){let{...n}=e;return(0,o.jsx)(h,{...n,className:(0,i.A)(p,b.details,n.className)})}},119365:(e,n,s)=>{s.d(n,{A:()=>a});s(296540);var t=s(618215);const i={tabItem:"tabItem_Ymn6"};var r=s(474848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:s,children:n})}},411470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(296540),i=s(618215),r=s(823104),a=s(956347),l=s(300205),c=s(757485),o=s(231682),d=s(289466);function u(e){var n,s;return null!==(n=null===(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==n?n:[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function b(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=h(e),[a,c]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!b({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const i=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[o,u]=p({queryString:s,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),m=(()=>{const e=null!=o?o:x;return b({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=s(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(474848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),i=l[s].value;i!==t&&(o(n),a(i))},u=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=c.indexOf(e.currentTarget)+1;s=null!==(t=c[n])&&void 0!==t?t:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;s=null!==(i=c[n])&&void 0!==i?i:c[c.length-1];break}}null===(n=s)||void 0===n||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(296540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
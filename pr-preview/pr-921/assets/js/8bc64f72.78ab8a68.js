"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[48447],{298544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var s=n(474848),i=n(28453),r=n(411470),a=n(119365),o=n(641622);n(113490);const l={id:"docs-notifications-develop-fetch-subscriptions",title:"Fetch Subscriptions",hide_title:!0,slug:"./fetch-subscriptions",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_notifications_develop--fetch_subscriptions.png"},c="Fetch subscriptions overview",u={id:"notifications/build/docs-notifications-develop-fetch-subscriptions",title:"Fetch Subscriptions",description:"These APIs are useful for fetching list of all channels subscribed by a user and their settings (if any).",source:"@site/docs/notifications/01-build/08-Develop-Fetch-Subscriptions.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/fetch-subscriptions",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/fetch-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/08-Develop-Fetch-Subscriptions.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"docs-notifications-develop-fetch-subscriptions",title:"Fetch Subscriptions",hide_title:!0,slug:"./fetch-subscriptions",displayed_sidebar:"pushNotificationSidebar",sidebar_position:8,image:"/assets/docs/previews/docs_notifications_develop--fetch_subscriptions.png"},sidebar:"pushNotificationSidebar",previous:{title:"Manage Channel",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/manage-channel"},next:{title:"Manage Subscriptions",permalink:"/push-website/pr-preview/pr-921/docs/notifications/build/manage-subscriptions"}},d={},h=[{value:"Fetch subscriptions API",id:"fetch-subscriptions-api",level:2},{value:"Fetch subscriptions parameters",id:"fetch-subscriptions-parameters",level:3},{value:"User settings overview",id:"user-settings-overview",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fetch-subscriptions-overview",children:"Fetch subscriptions overview"}),"\n",(0,s.jsx)(t.p,{children:"These APIs are useful for fetching list of all channels subscribed by a user and their settings (if any)."}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("title",{children:"Fetch Subscriptions | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,s.jsx)(t.h2,{id:"fetch-subscriptions-api",children:"Fetch subscriptions API"}),"\n",(0,s.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// userAlice.notification.subscriptions({options?})\nconst aliceSubscriptions = await userAlice.notification.subscriptions();\n"})})})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"fetch-subscriptions-parameters",children:"Fetch subscriptions parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Subtype"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"object"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"An object containing additional options for subscriptions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options.account"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",children:"Account supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses, etc"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options.page"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"A number representing the page of results to retrieve."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options.limit"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Represents the maximum number of subscriptions to retrieve per page"})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: Parameters ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{summary:"Expected response",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'[\n  {\n    channel: \'0xD8634C39BBFd4033c0d3289C4515275102423681\',\n    user_settings: null,\n  },\n  {\n    channel: \'0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924\',\n    user_settings: null,\n  },\n  {\n    channel: \'0x087F5052fBcD7C02DD45fb9907C57F1EccC2bE25\',\n    user_settings:\n      \'[{"type": 1, "user": false, "index": 1, "default": false, "description": "test1"}, {"type": 2, "user": 25, "index": 2, "default": 25, "enabled": 1, "lowerLimit": 23, "upperLimit": 35, "description": "test3"}, {"type": 2, "user": 64, "index": 3, "default": 56, "enabled": 1, "lowerLimit": 43, "upperLimit": 78, "description": "test5"}]\',\n  },\n];\n'})})}),"\n",(0,s.jsx)(t.h3,{id:"user-settings-overview",children:"User settings overview"}),"\n",(0,s.jsxs)(t.p,{children:["User settings are optional preferences set by the users when they are subscribing to a channel, provided the ",(0,s.jsx)(t.a,{href:"/docs/notifications/build/fetch-subscriptions",children:"channel has enabled settings"}),". User settings are always returned as a response to the API call along with their subscription to the channel."]}),"\n",(0,s.jsx)(t.p,{children:"This allows the channel to trigger notifications for certain categories (setting index) and enables users to choose what notifications they want to receive (for example: user might want to recieve loan liquidation alert when it reaches the threshold but not marketing notifications)."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Notification settings are guidelines that a channel should follow, Push nodes will not check for validity of a particular setting though it will filter out setting index (category) that a user has explicitly turned off."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'// userAlice.notification.subscriptions({options?})\nconst aliceSubscriptions = await userAlice.notification.subscriptions()\n\n// response\n[\n  {\n    channel: \'0x087F5052fBcD7C02DD45fb9907C57F1EccC2bE25\',\n    user_settings: \'[{"type": 1, "user": false, "index": 1, "default": false, "description": "test1"}, {"type": 2, "user": 25, "index": 2, "default": 25, "enabled": 1, "lowerLimit": 23, "upperLimit": 35, "description": "test3"}, {"type": 2, "user": 64, "index": 3, "default": 56, "enabled": 1, "lowerLimit": 43, "upperLimit": 78, "description": "test5"}]\'\n  },\n  {\n    channel: \'0xD8634C39BBFd4033c0d3289C4515275102423681\',\n    user_settings: null\n  },\n]\n'})})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},641622:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(296540),i=n(618215),r=n(15066),a=n(992303),o=n(41422);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var c=n(474848);function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function h(e){let{summary:t,children:n,...i}=e;const h=(0,a.A)(),p=(0,s.useRef)(null),{collapsed:b,setCollapsed:f}=(0,o.u)({initialState:!i.open}),[m,x]=(0,s.useState)(i.open),v=s.isValidElement(t)?t:(0,c.jsx)("summary",{children:null!=t?t:"Details"});return(0,c.jsxs)("details",{...i,ref:p,open:m,"data-collapsed":b,className:(0,r.A)(l.details,h&&l.isBrowser,i.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&d(t,p.current)&&(e.preventDefault(),b?(f(!1),x(!0)):f(!0))},children:[v,(0,c.jsx)(o.N,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),x(!e)},children:(0,c.jsx)("div",{className:l.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},b="alert alert--info";function f(e){let{...t}=e;return(0,c.jsx)(h,{...t,className:(0,i.A)(b,p.details,t.className)})}},119365:(e,t,n)=>{n.d(t,{A:()=>a});n(296540);var s=n(618215);const i={tabItem:"tabItem_Ymn6"};var r=n(474848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(296540),i=n(618215),r=n(823104),a=n(956347),o=n(300205),l=n(757485),c=n(231682),u=n(289466);function d(e){var t,n;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[a,l]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=null!==(t=s.find((e=>e.default)))&&void 0!==t?t:s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,d]=b({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),x=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(992303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(474848);function g(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==s&&(c(t),a(i))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const t=l.indexOf(e.currentTarget)+1;n=null!==(s=l[t])&&void 0!==s?s:l[0];break}case"ArrowLeft":{var i;const t=l.indexOf(e.currentTarget)-1;n=null!==(i=l[t])&&void 0!==i?i:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function y(e){const t=(0,m.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(296540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
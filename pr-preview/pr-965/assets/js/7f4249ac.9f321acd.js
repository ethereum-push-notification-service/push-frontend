"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[68291],{216526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(474848),o=n(28453);n(411470),n(119365),n(113490);const s={id:"docs-notifications-develop-types-of-notification",title:"Types of Notification",hide_title:!0,slug:"./types-of-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:11,image:"/assets/docs/previews/docs_notifications_develop--types_of_notification.png"},a="Types of notification overview",r={id:"notifications/build/docs-notifications-develop-types-of-notification",title:"Types of Notification",description:"Before sending notifications, it's important to learn about their types to help in choosing what notifications you want to send and when.",source:"@site/docs/notifications/01-build/11-Develop-Types-Of-Notification.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/types-of-notification",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/types-of-notification",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/11-Develop-Types-Of-Notification.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"docs-notifications-develop-types-of-notification",title:"Types of Notification",hide_title:!0,slug:"./types-of-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:11,image:"/assets/docs/previews/docs_notifications_develop--types_of_notification.png"},sidebar:"pushNotificationSidebar",previous:{title:"Fetch Notifications",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/fetch-notifications"},next:{title:"Send Notification",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/send-notification"}},c={},l=[{value:"Types of Notification",id:"types-of-notification",level:2},{value:"Broadcast Notification (Type 1)",id:"broadcast-notification-type-1",level:3},{value:"Targeted Notification (Type 3)",id:"targeted-notification-type-3",level:3},{value:"Subset Notification (Type 4)",id:"subset-notification-type-4",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"types-of-notification-overview",children:"Types of notification overview"}),"\n",(0,i.jsx)(t.p,{children:"Before sending notifications, it's important to learn about their types to help in choosing what notifications you want to send and when."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Types of Notifications | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"types-of-notification",children:"Types of Notification"}),"\n",(0,i.jsx)(t.p,{children:"Push Protocol supports sending the following types of notifications to users of your protocol \u2014"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Notification Type"}),(0,i.jsx)(t.th,{children:"Identifier"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Broadcast"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"This type of notification is broadcasted or sent to all the subscribers of a channel at once."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Targeted"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"This type of notification is sent to a single wallet address."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Subset"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"This type of notification is sent to a a subset (or a group) of your channel subscribers."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"broadcast-notification-type-1",children:"Broadcast Notification (Type 1)"}),"\n",(0,i.jsx)(t.p,{children:"This type of notification is broadcasted or sent to all the subscribers of a channel at once."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\n// to send a broadcast notification - pass '*' in recipients array\nconst broadcastNotif = await userAlice.channel.send(['*'], {\n  notification: { title: 'test', body: 'test' },\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"targeted-notification-type-3",children:"Targeted Notification (Type 3)"}),"\n",(0,i.jsx)(t.p,{children:"This type of notification is sent to a single wallet address."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\n// to send a targeted notification - pass that single wallet address in recipients array\nconst targetedNotif = await userAlice.channel.send(\n  ['0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'],\n  {\n    notification: {\n      title: 'test',\n      body: 'test',\n    },\n  }\n);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"subset-notification-type-4",children:"Subset Notification (Type 4)"}),"\n",(0,i.jsx)(t.p,{children:"This type of notification is sent to a a subset (or a group) of your channel subscribers."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\n// to send a subset notification - pass the list of wallet address in recipients array\nconst subsetNotif = await userAlice.channel.send(\n  [\n    randomWallet1,\n    randomWallet2,\n    signer.address,\n    '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666',\n  ],\n  {\n    notification: {\n      title: 'test',\n      body: 'test',\n    },\n  }\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>a});n(296540);var i=n(618215);const o={tabItem:"tabItem_Ymn6"};var s=n(474848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,a),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(296540),o=n(618215),s=n(823104),a=n(956347),r=n(300205),c=n(757485),l=n(231682),u=n(289466);function d(e){var t,n;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function f(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:o}}=e;return{value:t,label:n,attributes:i,default:o}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}),[s,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=f(e),[a,c]=(0,i.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!==(t=i.find((e=>e.default)))&&void 0!==t?t:i[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[l,d]=h({queryString:n,groupId:o}),[b,y]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[o,s]=(0,u.Dv)(n);return[o,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),v=(()=>{const e=null!=l?l:b;return p({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(992303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(474848);function g(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),o=r[n].value;o!==i&&(l(t),a(o))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var i;const t=c.indexOf(e.currentTarget)+1;n=null!==(i=c[t])&&void 0!==i?i:c[0];break}case"ArrowLeft":{var o;const t=c.indexOf(e.currentTarget)-1;n=null!==(o=c[t])&&void 0!==o?o:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:d,onClick:u},s,{className:(0,o.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t}),children:null!=n?n:t}),t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,m.jsx)(g,Object.assign({},e,t)),(0,m.jsx)(x,Object.assign({},e,t))]})}function w(e){const t=(0,y.A)();return(0,m.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(296540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
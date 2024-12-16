"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[85919],{339369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=n(474848),s=n(28453),a=n(411470),o=n(119365);const r={id:"docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",hide_title:!0,slug:"./notification-standards-basic",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_ns_notif_standards_basic--notification_standards_(basic).png"},c="Notification Standards Overview",d={id:"notifications/notification-standards/docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",description:"All notifications passed to the network are eventually transformed to JSON payload. The following glossaries help cover some of the basics that can help in understanding what is happening and how to customize the behavior.",source:"@site/docs/notifications/07-notification-standards/01-Notification-Standards-Basic.mdx",sourceDirName:"notifications/07-notification-standards",slug:"/notifications/notification-standards/notification-standards-basic",permalink:"/push-website/pr-preview/pr-946/docs/notifications/notification-standards/notification-standards-basic",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/07-notification-standards/01-Notification-Standards-Basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-notifications-ns-notif-standards-basic",title:"Notification Standards (Basic)",hide_title:!0,slug:"./notification-standards-basic",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_ns_notif_standards_basic--notification_standards_(basic).png"},sidebar:"pushNotificationSidebar",previous:{title:"Notification Standards",permalink:"/push-website/pr-preview/pr-946/docs/notifications/notification-standards"},next:{title:"Notification Standards (Advance)",permalink:"/push-website/pr-preview/pr-946/docs/notifications/notification-standards/notification-standards-advance"}},l={},h=[{value:"Important glossaries",id:"important-glossaries",level:2},{value:"Sending notification examples",id:"sending-notification-examples",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"notification-standards-overview",children:"Notification Standards Overview"}),"\n",(0,i.jsx)(t.p,{children:"All notifications passed to the network are eventually transformed to JSON payload. The following glossaries help cover some of the basics that can help in understanding what is happening and how to customize the behavior."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Notification Standards (Basic) | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"important-glossaries",children:"Important glossaries"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Verification Proof"})," - Each notification sent carries with itself a verification proof that allows the network to validate that the notification is coming from a channel or one of it's delegate."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Verification Proof is handled automatically by the SDK but you if you want to, you can read about it ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-verification-proof",title:"post explaining notification verification proof in Push protocol",children:"over here"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Identity"})," - Each notification passed to the network is actually an identity which defines how the notification is formatted, where it's stored, etc."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Notification identity is abstracted away by the SDK except when invoking directly from your smart contracts. Advance section has detailed explaination about ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-identity",title:"post explaining notification identity in Push protocol",children:"Notification Identity"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Identity Type"})," - Defines the format in which the notification json payload is sent to the network. Common types you need to know about."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Identity Type"}),(0,i.jsx)(t.th,{children:"Remarks"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Minimal"}),(0,i.jsx)(t.td,{children:"Recommended for Smart Contract"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Direct Payload"}),(0,i.jsx)(t.td,{children:"Recommended for PUSH SDK"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Type"})," - Defines the type of notification that is sent:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Broadcast (Type 1) - Is sent out to all the users who have opted in to your channel"}),"\n",(0,i.jsx)(t.li,{children:"Targeted (Type 3) - Is sent out to an individual user"}),"\n",(0,i.jsx)(t.li,{children:"Subset (Type 4) - Is sent out to a subset of users of your channel"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notification Content"})," - Defines the notification content which consists of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Notification JSON Object - What is shown on your home screen"}),"\n",(0,i.jsx)(t.li,{children:"Payload JSON Object - What is shown and stored on your feed"}),"\n",(0,i.jsx)(t.li,{children:"Recipients - 0x0 for type 1 (broadcast), 0xTarget for type 3 (Targeted) and [0x01, 0x02, 0x03, ..., 0xN] for type 4 (Subset)"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'  // Example Raw Content for targeted notifcation, abstracted away by SDK\n  {\n    "notification": {\n      "title": "The title of your message displayed on screen (50 Chars)",\n      "body": "The intended message displayed on screen (180 Chars)"\n    },\n    "data": { // Is defined as payload most of the time\n      "type": "3" // notification type\n      "sectype": null // enables encrypted notifications\n      "asub": "[Optional] The subject of the message displayed inside app (80 Chars)",\n      "amsg": "[Optional] The intended message displayed inside app (500 Chars)",\n      "acta": "[Optional] The cta link parsed inside the app",\n      "aimg": "[Optional] The image url which is shown inside the app",\n      "etime": "[Optional] if given, notif will be deleted after this in epoch"\n      "hidden" :"[Optional] if given, notif will not show in user feed"\n    },\n      "recipients": 0xtarget\n  }\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["These concepts are for your understanding as most of them are abstracted away but if you wish to dive deeper then read more about ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-payload",title:"post explaining notification payload in in Push protocol",children:"notification payload here"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Content Markdown"})," - Defines how the content markdown should be passed to enable variety of notifications. Covered in detail in the advanced section - ",(0,i.jsx)(t.a,{href:"docs/notifications/notification-standards/notification-standards-advance/#notification-content",title:"post explaining notification content and how to customize it in in Push protocol",children:"Notification Content"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Sender"})," - Defines who is sending the message. The sender is the channel address or the alias address. The address should be represented in chain specific format as ",(0,i.jsx)(t.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",title:"About chain specific wallet address",children:"depicted over here"})]}),"\n",(0,i.jsx)(t.p,{children:"Examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ethereum(Mainnet): ",(0,i.jsx)(t.code,{children:"eip155:1:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Ethereum(Goerli): ",(0,i.jsx)(t.code,{children:"eip155:42:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Polygon(Mumbai): ",(0,i.jsx)(t.code,{children:"eip155:80001:<Address>"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["One exception to chain specific format is for smart contract to smart contract interaction (ie: ",(0,i.jsx)(t.a,{href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Send notification via smart contract",children:"Send Notification (via smart contract)"}),"), For this specific feature, the native blockchain address is required and not chain specific format."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Source"})," - The source from which the notification is coming from. Currently supports ",(0,i.jsx)(t.code,{children:"ETH_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"POLYGON_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"BNB_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"ARB_MAINNET"}),", ",(0,i.jsx)(t.code,{children:"THE_GRAPH"}),", ",(0,i.jsx)(t.code,{children:"ETH_TEST_SEPOLIA"})," ",(0,i.jsx)(t.code,{children:"ETH_TEST_GOERLI"}),", ",(0,i.jsx)(t.code,{children:"POLYGON_TESTNET"}),", ",(0,i.jsx)(t.code,{children:"BNB_TESTNET"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Source is determined ",(0,i.jsx)(t.a,{href:"http://localhost:3000/docs/notifications/build/initialize-user/",title:"Initialize User Push SDK",children:"by the chain at which the user is inititialized"})," from Push SDK, by the network it is coming from in case of smart contracts."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Recipient(s)"})," - The address to the notification should reach. Push supports multiple address formats as ",(0,i.jsx)(t.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",title:"learn about all supported wallet address account",children:"depicted over here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Few examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ethereum(Mainnet): ",(0,i.jsx)(t.code,{children:"eip155:1:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Ethereum(Sepolia): ",(0,i.jsx)(t.code,{children:"eip155:11155111:<Address>"})]}),"\n",(0,i.jsxs)(t.li,{children:["Polygon(Mumbai): ",(0,i.jsx)(t.code,{children:"eip155:80001:<Address>"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["One exception to address format support is for smart contract to smart contract interaction (ie: ",(0,i.jsx)(t.a,{href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Send notification via smart contract",children:"Send Notification (via smart contract)"}),"), For this specific feature, the native blockchain address is required. for example: ",(0,i.jsx)(t.code,{children:"0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sending-notification-examples",children:"Sending notification examples"}),"\n",(0,i.jsxs)(a.A,{groupId:"notification-examples",children:[(0,i.jsx)(o.A,{value:"Push SDK",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\n// to send a broadcast notification - pass '*' in recipients array\nconst broadcastNotif = await userAlice.channel.send(['*'], {\n  notification: { title: 'test', body: 'test' },\n});\n\n// userAlice.channel.send([recipients], {options?})\n// to send a targeted notification - pass that single wallet address in recipients array\nconst targetedNotif = await userAlice.channel.send(\n  ['0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666'],\n  {\n    notification: {\n      title: 'test',\n      body: 'test',\n    },\n  }\n);\n\n// userAlice.channel.send([recipients], {options?})\n// to send a subset notification - pass the list of wallet address in recipients array\nconst subsetNotif = await userAlice.channel.send(\n  [randomWallet1, randomWallet2, randomWallet3],\n  {\n    notification: {\n      title: 'test',\n      body: 'test',\n    },\n  }\n);\n"})})}),(0,i.jsxs)(o.A,{value:"Smart Contract",default:!0,children:[(0,i.jsx)(t.p,{children:"While any Notification Identity can be passed in any of the interactions, It's recommended to start with Identity Type 0 (Minimal) for smart contracts."}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Format:"})," ",(0,i.jsx)(t.code,{children:"0+<Notification Type>+<Title>+<Body>"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"What to call:"})," ",(0,i.jsx)(t.code,{children:"sendNotification(address _channel, address _recipient, bytes calldata _identity)"})]}),(0,i.jsxs)(t.p,{children:["**Additional Rules: **\nNotification Type 1 (Broadcast): Pass recipient as _channel\nNotification Type 3 (Targeted): Pass recipient as intended recipient\nNotification Type 4 (Subset): ",(0,i.jsx)(t.strong,{children:"Not supported yet"})]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example:"})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:'IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(\n  YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it\'s value -> then once contract is deployed, go back and add the contract address as delegate for your channel\n  to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send\n  bytes(\n      string(\n          // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n          abi.encodePacked(\n              "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n              "+", // segregator\n              "3", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)\n              "+", // segregator\n              "Title", // this is notification title\n              "+", // segregator\n              "Body" // notification body\n          )\n      )\n  )\n);\n'})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>o});n(296540);var i=n(618215);const s={tabItem:"tabItem_Ymn6"};var a=n(474848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(296540),s=n(618215),a=n(823104),o=n(956347),r=n(300205),c=n(757485),d=n(231682),l=n(289466);function h(e){var t,n;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[o,c]=(0,i.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!==(t=i.find((e=>e.default)))&&void 0!==t?t:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[d,h]=p({queryString:n,groupId:s}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,a]=(0,l.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=null!=d?d:m;return f({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(474848);function y(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),s=r[n].value;s!==i&&(d(t),o(s))},h=e=>{var t;let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var i;const t=c.indexOf(e.currentTarget)+1;n=null!==(i=c[t])&&void 0!==i?i:c[0];break}case"ArrowLeft":{var s;const t=c.indexOf(e.currentTarget)-1;n=null!==(s=c[t])&&void 0!==s?s:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:l},a,{className:(0,s.A)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===t}),children:null!=n?n:t}),t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,Object.assign({},e,t)),(0,j.jsx)(g,Object.assign({},e,t))]})}function w(e){const t=(0,x.A)();return(0,j.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(296540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[65005],{864036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=n(474848),s=n(28453),r=n(411470),o=n(119365),a=n(641622);const c={id:"docs-notifications-develop-stream-notifications",title:"Stream Notifications",hide_title:!0,slug:"./stream-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:15,image:"/assets/docs/previews/docs_notifications_develop--stream_notifications.png"},l="Stream notifications overview",d={id:"notifications/build/docs-notifications-develop-stream-notifications",title:"Stream Notifications",description:"These APIs enable you to receive notifications ( inbox or spam ) in real time without polling the API. Push notification achieves this by the use of sockets.",source:"@site/docs/notifications/01-build/15-Develop-Stream-Notifications.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/stream-notifications",permalink:"/push-website/pr-preview/pr-904/docs/notifications/build/stream-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/15-Develop-Stream-Notifications.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"docs-notifications-develop-stream-notifications",title:"Stream Notifications",hide_title:!0,slug:"./stream-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:15,image:"/assets/docs/previews/docs_notifications_develop--stream_notifications.png"},sidebar:"pushNotificationSidebar",previous:{title:"Notification Styling",permalink:"/push-website/pr-preview/pr-904/docs/notifications/build/styling-notification-content"},next:{title:"Testing Notifications",permalink:"/push-website/pr-preview/pr-904/docs/notifications/build/testing-notifications"}},h={},u=[{value:"Stream Notification API",id:"stream-notification-api",level:2},{value:"Stream notification parameters",id:"stream-notification-parameters",level:3},{value:"Stream notifications listen events",id:"stream-notifications-listen-events",level:3},{value:"Re-initialize notification stream",id:"re-initialize-notification-stream",level:2},{value:"Reinstate Notification stream parameters",id:"reinstate-notification-stream-parameters",level:3},{value:"Stream info API",id:"stream-info-api",level:2},{value:"Stream status API",id:"stream-status-api",level:2}];function f(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"stream-notifications-overview",children:"Stream notifications overview"}),"\n",(0,i.jsx)(t.p,{children:"These APIs enable you to receive notifications ( inbox or spam ) in real time without polling the API. Push notification achieves this by the use of sockets."}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"Stream Notifications | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"stream-notification-api",children:"Stream Notification API"}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(o.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// userAlice.stream(listen, {options?})\n// Initial setup\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF], {\n  filter?: {\n    channels?: ['*'], // pass in specific channels to only listen to those\n    chats?: ['*'], // pass in specific chat ids to only listen to those\n  },\n  connection?: {\n    retries?: 3, // number of retries in case of error\n  },\n  raw?: false // enable true to show all data\n})\n\n// Listen for notifications events\nstream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {\n  console.log(data)\n})\n\n// Connect stream, Important to setup up listen events first\nstream.connect()\n\n// stream supports other products as well, such as STREAM.CHAT, STREAM.CHAT_OPS\n// more info can be found at push.org/docs/chat\n"})})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"stream-notification-parameters",children:"Stream notification parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Sub-Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"listen"})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"constant"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["can be ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CHAT"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CHAT_OPS"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.NOTIF"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CONNECT"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.DISCONNECT"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PushStreamInitializeProps"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Optional configuration properties for initializing the stream."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.filter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Option to configure to enable listening to only certain chats or notifications."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.filter.channels"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"array of strings"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"['*']"})}),(0,i.jsxs)(t.td,{children:["pass list of ",(0,i.jsx)(t.strong,{children:"channels"})," over here to only listen to notifications coming from them."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.filter.chats"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"array of strings"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"['*']"})}),(0,i.jsxs)(t.td,{children:["pass list of ",(0,i.jsx)(t.strong,{children:"chatids"})," over here to only listen to chats coming from them."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.connection"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Option to configure the connection settings of the stream"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.connection.retries"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"3"})}),(0,i.jsx)(t.td,{children:"Number of automatic retries incase of error"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"options.raw"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"If enabled, will also respond with meta data useful in verifying the integrity of incoming chats or notifications among other things."})]})]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: Parameters ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"stream-notifications-listen-events",children:"Stream notifications listen events"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Listen events"}),(0,i.jsx)(t.th,{children:"When is it triggered?"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.NOTIF"})}),(0,i.jsx)(t.td,{children:"Whenever a new notification is emitted for the wallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CONNECT"})}),(0,i.jsx)(t.td,{children:"Whenever the stream establishes connection."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.DISCONNECT"})}),(0,i.jsx)(t.td,{children:"Whenever the stream gets disconnected."})]})]})]}),"\n",(0,i.jsx)(a.A,{summary:"Expected response (CONSTANTS.STREAM.NOTIF - Notification inbox stream)",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'{\n  "event": "notification.inbox",\n  "origin": "other",\n  "timestamp": "2023-10-06T01:55:51.000Z",\n  "from": "0xfFA1aF9E558B68bBC09ad74058331c100C135280",\n  "to": [\n    "eip155:0xffa1af9e558b68bbc09ad74058331c100c135280"\n  ],\n  "notifID": "1676",\n  "channel": {\n    "name": "Testing Sepolia",\n    "icon": "https://gateway.ipfs.io/ipfs/bafybeifu3tisz7cntfnoolwe6tthi554b2cdl46jzcr5amo6swucyautzq/QmYZZnnEuTnzjkhhnRZWaHgYTeHsohLZEme9LomWRYQAZ5",\n    "url": "https://dev.push.org/"\n  },\n  "meta": {\n    "type": "NOTIFICATION.BROADCAST"\n  },\n  "message": {\n    "notification": {\n      "title": "Testing Sepolia - notification TITLE:",\n      "body": "notification BODY"\n    },\n    "payload": {\n      "title": "payload title",\n      "body": "sample msg body",\n      "cta": "",\n      "embed": "",\n      "meta": {\n          "domain": "push.org"\n      }\n    }\n  },\n  "config": {\n    "expiry": null,\n    "silent": false,\n    "hidden": false\n  },\n  "source": "ETH_TEST_SEPOLIA",\n  "raw": {\n    "verificationProof": "eip712v2:0xf2b50f07c7cdae4a493860554301dc017dd6f819f92db3aba534dffde210bfaa0f545818e919c42c3bb51181339af33ad83e3bc691ada7fcccdcbc7fb3b3abd91b::uid::feaa2d31-85ec-47d2-b38c-6f797f637de7"\n  }\n}\n'})})}),"\n",(0,i.jsx)(a.A,{summary:"Expected response (CONSTANTS.STREAM.NOTIF - Notification spam stream)",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'{\n  "event": "notification.spam",\n  "origin": "other",\n  "timestamp": "2023-10-06T01:55:51.000Z",\n  "from": "0xfFA1aF9E558B68bBC09ad74058331c100C135280",\n  "to": [\n    "eip155:0x1f1a304af17f22cac91eeca5f31a0f814d752377"\n  ],\n  "notifID": "1677",\n  "channel": {\n    "name": "Testing Sepolia",\n    "icon": "https://gateway.ipfs.io/ipfs/bafybeifu3tisz7cntfnoolwe6tthi554b2cdl46jzcr5amo6swucyautzq/QmYZZnnEuTnzjkhhnRZWaHgYTeHsohLZEme9LomWRYQAZ5",\n    "url": "https://dev.push.org/"\n  },\n  "meta": {\n    "type": "NOTIFICATION.TARGETED"\n  },\n  "message": {\n    "notification": {\n      "title": "Testing Sepolia - notification TITLE:",\n      "body": "notification BODY"\n    },\n    "payload": {\n      "title": "payload title",\n      "body": "sample msg body",\n      "cta": "",\n      "embed": "",\n      "meta": {\n          "domain": "push.org"\n      }\n    }\n  },\n  "config": {\n    "expiry": null,\n    "silent": false,\n    "hidden": false\n  },\n  "source": "ETH_TEST_SEPOLIA",\n  "raw": {\n    "verificationProof": "eip712v2:0x6b903f16d0ce87483643e1502e7416203cb7ecef0e947a497f0fb6fbe1c43c3511f2f602b757ab02c1be7daa07f3872ee14e4d05134f1ecb3d11fe58324422c01c::uid::6c0fad10-d1eb-4779-84d3-3a96bd96263f"\n  }\n}\n'})})}),"\n",(0,i.jsx)(t.h2,{id:"re-initialize-notification-stream",children:"Re-initialize notification stream"}),"\n",(0,i.jsx)(t.p,{children:"To reinstate a notification stream. Useful for updating an already initialized stream objects to add / remove listen events or filter options."}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(o.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// await stream.reinit(listen, {newOptions?})\nconst newStream = await stream.reinit([\n  CONSTANTS.STREAM.NOTIF, // Listen for notification events\n  CONSTANTS.STREAM.CONNECT, // Listen for connection events\n  CONSTANTS.STREAM.DISCONNECT, // Listen for disconnection events\n]);\n"})})})}),"\n",(0,i.jsx)(t.h3,{id:"reinstate-notification-stream-parameters",children:"Reinstate Notification stream parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Sub-Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"listen"})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"constant"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsxs)(t.td,{children:["Choose from various streams:",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.NOTIF"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.SPACE"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.SPACE_OPS"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CHAT"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CHAT_OPS"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.VIDEO"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.CONNECT"}),", ",(0,i.jsx)(t.code,{children:"CONSTANTS.STREAM.DISCONNECT"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PushStreamInitializeProps"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Optional configuration properties for initializing the stream."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.filter"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Configure to listen to specific chats or notifications."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.filter.channels"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"array of strings"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"['*']"})}),(0,i.jsxs)(t.td,{children:["Pass list of ",(0,i.jsx)(t.strong,{children:"channels"})," over here to only listen to notifications coming from them."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.filter.chats"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"array of strings"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"['*']"})}),(0,i.jsxs)(t.td,{children:["Pass list of ",(0,i.jsx)(t.strong,{children:"chatids"})," over here to only listen to chats coming from them."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.connection"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"Option to configure the connection settings of the stream"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.connection.retries"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"3"})}),(0,i.jsx)(t.td,{children:"Number of automatic retries incase of error"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"newOptions.raw"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"If enabled, respond with metadata useful in verifying the integrity of incoming chats or notifications among other things."})]})]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: Parameters ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"stream-info-api",children:"Stream info API"}),"\n",(0,i.jsx)(t.p,{children:"To get the info of the current stream."}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(o.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// stream.info()\nconst streamInfo = await stream.info();\n"})})})}),"\n",(0,i.jsx)(a.A,{summary:"Expected response",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"{\n  options: { raw: false, connection: { auto: true, retries: 3 }, env: 'prod' },\n  listen: [ 'STREAM.NOTIF', 'STREAM.CONNECT', 'STREAM.DISCONNECT' ]\n}\n"})})}),"\n",(0,i.jsx)(t.h2,{id:"stream-status-api",children:"Stream status API"}),"\n",(0,i.jsx)(t.p,{children:"To get the connection status of the current stream."}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(o.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// stream.connected()\nconst streamStatus = await stream.connected();\n"})})})}),"\n",(0,i.jsx)(a.A,{summary:"Expected response",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"typescript true // if connected, else false "})})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},641622:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(296540),s=n(618215),r=n(15066),o=n(992303),a=n(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var l=n(474848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function u(e){let{summary:t,children:n,...s}=e;const u=(0,o.A)(),f=(0,i.useRef)(null),{collapsed:x,setCollapsed:j}=(0,a.u)({initialState:!s.open}),[p,m]=(0,i.useState)(s.open),b=i.isValidElement(t)?t:(0,l.jsx)("summary",{children:null!=t?t:"Details"});return(0,l.jsxs)("details",{...s,ref:f,open:p,"data-collapsed":x,className:(0,r.A)(c.details,u&&c.isBrowser,s.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&h(t,f.current)&&(e.preventDefault(),x?(j(!1),m(!0)):j(!0))},children:[b,(0,l.jsx)(a.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),m(!e)},children:(0,l.jsx)("div",{className:c.collapsibleContent,children:n})})]})}const f={details:"details_b_Ee"},x="alert alert--info";function j(e){let{...t}=e;return(0,l.jsx)(u,{...t,className:(0,s.A)(x,f.details,t.className)})}},119365:(e,t,n)=>{n.d(t,{A:()=>o});n(296540);var i=n(618215);const s={tabItem:"tabItem_Ymn6"};var r=n(474848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>N});var i=n(296540),s=n(618215),r=n(823104),o=n(956347),a=n(300205),c=n(757485),l=n(231682),d=n(289466);function h(e){var t,n;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=u(e),[o,c]=(0,i.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=null!==(t=i.find((e=>e.default)))&&void 0!==t?t:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,h]=x({queryString:n,groupId:s}),[j,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),m=(()=>{const e=null!=l?l:j;return f({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,r]),tabValues:r}}var p=n(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(474848);function T(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==i&&(l(t),o(s))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const t=c.indexOf(e.currentTarget)+1;n=null!==(i=c[t])&&void 0!==i?i:c[0];break}case"ArrowLeft":{var s;const t=c.indexOf(e.currentTarget)-1;n=null!==(s=c[t])&&void 0!==s?s:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===t}),children:null!=n?n:t},t)}))})}function S(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(T,{...e,...t}),(0,b.jsx)(S,{...e,...t})]})}function N(e){const t=(0,p.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(296540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
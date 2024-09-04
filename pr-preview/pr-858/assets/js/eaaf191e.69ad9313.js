"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26184],{448658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=t(474848),s=t(28453),o=t(411470),r=t(119365),d=t(641622);t(113490);const c={id:"docs-notifications-develop-send-notification",title:"Send Notification",hide_title:!0,slug:"./send-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:12,image:"/assets/docs/previews/docs_notifications_develop--send_notification.png"},a="Send notification overview",l={id:"notifications/build/docs-notifications-develop-send-notification",title:"Send Notification",description:"This section covers all APIs related to sending notifications from a created channel.",source:"@site/docs/notifications/01-build/12-Develop-Send-Notification.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/send-notification",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/send-notification",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/12-Develop-Send-Notification.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"docs-notifications-develop-send-notification",title:"Send Notification",hide_title:!0,slug:"./send-notification",displayed_sidebar:"pushNotificationSidebar",sidebar_position:12,image:"/assets/docs/previews/docs_notifications_develop--send_notification.png"},sidebar:"pushNotificationSidebar",previous:{title:"Types of Notification",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/types-of-notification"},next:{title:"Send Notification (via Smart Contract)",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/send-notification-via-smart-contract"}},h={},u=[{value:"Send notification API",id:"send-notification-api",level:2},{value:"Send notification parameters",id:"send-notification-parameters",level:3},{value:"Send notification interface",id:"send-notification-interface",level:3},{value:"Encrypted notification example",id:"encrypted-notification-example",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"send-notification-overview",children:"Send notification overview"}),"\n",(0,i.jsx)(n.p,{children:"This section covers all APIs related to sending notifications from a created channel."}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Send Notification | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"send-notification-api",children:"Send notification API"}),"\n",(0,i.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\nconst sendNotifRes = await userAlice.channel.send(['*'], {\n  notification: { title: 'test', body: 'test' },\n});\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"send-notification-parameters",children:"Send notification parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"recipients"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string[]"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["An array of recipient addresses passed in ",(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",children:"any supported wallet address format"}),". Possible values are: Broadcast -> [*], Targeted -> [0xA], Subset -> [0xA, 0xB], see ",(0,i.jsx)(n.a,{href:"/docs/notifications/build/types-of-notification",children:"types of notifications"})," for more info."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NotificationOptions"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Configuration options for sending notifications."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.notification"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INotification"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing the notification's title and body. (Mandatory)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.notification.title"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The title for the notification. If not provided, it is taken from notification.title."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.notification.body"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The body of the notification. If not provided, it is taken from notification.body."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.secret"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Type of encryption standard to use for sending encrypted notification. Accepts either",(0,i.jsx)(n.code,{children:"PGPV1"})," or ",(0,i.jsx)(n.code,{children:"LITV1"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IPayload"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing additional payload information for the notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The title for the notification. If not provided, it is taken from notification.title."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.body"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"The body of the notification. If not provided, it is taken from notification.body."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.cta"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Call to action for the notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.embed"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Media information like image/video links"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.category"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Don't pass category if you are sending a generic notification. Notification category represents index point of each individual settings. Pass this if you want to indicate what category of notification you are sending (If channel has settings enabled). For example, if a channel has 10 settings, then a notification of category 7 indicates it's a notification sent for setting 7, if user has turned setting 7 off then Push ndoes will stop notif from getting to the user."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.payload.meta"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{ domain?: string, type: string, data: string }"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Metadata for the notification, including domain, type, and data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.config"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IConfig"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing configuration options for the notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.config.expiry"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Expiry time for the notification in seconds"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.config.silent"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Indicates whether the notification is silent."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.config.hidden"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Indicates whether the notification is hidden."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IAdvance"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing advanced options for the notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced.graph"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{ id: string, counter: number }"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Advanced options related to the graph based notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced.ipfs"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"IPFS information for the notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced.minimal"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Minimal Payload type notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced.chatid"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"For chat based notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.advanced.pgpPrivateKey"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"PGP private key for chat based notification."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.channel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Channel address in CAIP. Mostly used when a delegator sends a notification on behalf of the channel"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(d.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// PushAPI.payloads.sendNotification | Response - 204 OK\n"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"send-notification-interface",children:"Send notification interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface INotification {\n  title: string;\n  body: string;\n}\n\ninterface IPayload {\n  title?: string;\n  body?: string;\n  cta?: string;\n  embed?: string;\n  category?: number;\n  meta?: {\n    domain?: string;\n    type: string;\n    data: string;\n  };\n}\n\ninterface IConfig {\n  expiry?: number;\n  silent?: boolean;\n  hidden?: boolean;\n}\n\ninterface IAdvanced {\n  graph?: {\n    id: string;\n    counter: number;\n  };\n  ipfs?: string;\n  minimal?: string;\n  chatid?: string;\n  pgpPrivateKey?: string;\n}\n\ninterface NotificationOptions = {\n  notification: INotification;\n  payload?: IPayload;\n  config?: IConfig;\n  advanced?: IAdvance;\n  channel?: string;\n};\n\n// Usage example:\nconst apiResponse: ApiResponse = await userAlice.channel.send(recipients, {\n  // NotificationOptions - as per your given object structure\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"encrypted-notification-example",children:"Encrypted notification example"}),"\n",(0,i.jsxs)(n.p,{children:["Push Protocol supports sending encrypted notifications, which can only be decrypted by the intended recipients. You can send encrypted notifications to targeted/subsets of users. Currently, Push Notification supports two encryption standards: ",(0,i.jsx)(n.code,{children:"PGPV1"})," and ",(0,i.jsx)(n.code,{children:"LITV1"}),". Use ",(0,i.jsx)(n.code,{children:"LITV1"})," to use ",(0,i.jsx)(n.a,{href:"https://developer.litprotocol.com/v2/resources/glossary#encryption",children:"Lit Protocol encryption"})," and ",(0,i.jsx)(n.code,{children:"PGPV1"})," to use ",(0,i.jsx)(n.a,{href:"https://push.org/docs/chat/concepts/encryption-version-in-push-chat/#pgp_v1",children:"PGP_V1 encryption"}),"."]}),"\n",(0,i.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(r.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.send([recipients], {options?})\nconst sendNotifRes = await userAlice.channel.send(['AliceWalletAddress'], {\n  notification: { title: 'test', body: 'test' },\n  secret: 'PGPV1', // or \"LITV1\"\n});\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},641622:(e,n,t)=>{t.d(n,{A:()=>f});var i=t(296540),s=t(618215),o=t(15066),r=t(992303),d=t(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=t(474848);function l(e){return!!e&&("SUMMARY"===e.tagName||l(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:t,...s}=e;const u=(0,r.A)(),x=(0,i.useRef)(null),{collapsed:p,setCollapsed:f}=(0,d.u)({initialState:!s.open}),[j,m]=(0,i.useState)(s.open),b=i.isValidElement(n)?n:(0,a.jsx)("summary",{children:null!=n?n:"Details"});return(0,a.jsxs)("details",{...s,ref:x,open:j,"data-collapsed":p,className:(0,o.A)(c.details,u&&c.isBrowser,s.className),onMouseDown:e=>{l(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;l(n)&&h(n,x.current)&&(e.preventDefault(),p?(f(!1),m(!0)):f(!0))},children:[b,(0,a.jsx)(d.N,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),m(!e)},children:(0,a.jsx)("div",{className:c.collapsibleContent,children:t})})]})}const x={details:"details_b_Ee"},p="alert alert--info";function f(e){let{...n}=e;return(0,a.jsx)(u,{...n,className:(0,s.A)(p,x.details,n.className)})}},119365:(e,n,t)=>{t.d(n,{A:()=>r});t(296540);var i=t(618215);const s={tabItem:"tabItem_Ymn6"};var o=t(474848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(296540),s=t(618215),o=t(823104),r=t(956347),d=t(300205),c=t(757485),a=t(231682),l=t(289466);function h(e){var n,t;return null!==(n=null===(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=u(e),[r,c]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=null!==(n=i.find((e=>e.default)))&&void 0!==n?n:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[a,h]=p({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,l.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),m=(()=>{const e=null!=a?a:f;return x({value:e,tabValues:o})?e:null})();(0,d.A)((()=>{m&&c(m)}),[m]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,o]),tabValues:o}}var j=t(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(474848);function g(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),s=d[t].value;s!==i&&(a(n),r(s))},h=e=>{var n;let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var i;const n=c.indexOf(e.currentTarget)+1;t=null!==(i=c[n])&&void 0!==i?i:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!==(s=c[n])&&void 0!==s?s:c[c.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:l,...o,className:(0,s.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(296540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
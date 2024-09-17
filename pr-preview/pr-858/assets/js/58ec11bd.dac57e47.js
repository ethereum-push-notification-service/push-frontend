"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[628],{92316:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=e(474848),o=e(28453);const s={id:"docs-notifications-develop-styling-notification-content",title:"Notification Styling",hide_title:!0,slug:"./styling-notification-content",displayed_sidebar:"pushNotificationSidebar",sidebar_position:14,image:"/assets/docs/previews/docs_notifications_develop_styling_notification_content--notification_styling.png"},r="Styling notification content overview",c={id:"notifications/build/docs-notifications-develop-styling-notification-content",title:"Notification Styling",description:"Designing rich notification for Push closely follows the markdown standards. Below is a live example of what is possible with push notifications currently via Push Protocol.",source:"@site/docs/notifications/01-build/14-Develop-Design-Notification-Content.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/styling-notification-content",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/styling-notification-content",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/14-Develop-Design-Notification-Content.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"docs-notifications-develop-styling-notification-content",title:"Notification Styling",hide_title:!0,slug:"./styling-notification-content",displayed_sidebar:"pushNotificationSidebar",sidebar_position:14,image:"/assets/docs/previews/docs_notifications_develop_styling_notification_content--notification_styling.png"},sidebar:"pushNotificationSidebar",previous:{title:"Send Notification (via Smart Contract)",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/send-notification-via-smart-contract"},next:{title:"Stream Notifications",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/stream-notifications"}},d={},l=[{value:"How to design content rich notifications?",id:"how-to-design-content-rich-notifications",level:2},{value:"Push Notification markdown live playground",id:"push-notification-markdown-live-playground",level:3},{value:"Supported markdown",id:"supported-markdown",level:3},{value:"Contribute",id:"contribute",level:3}];function a(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...t.components},{Head:e}=i;return e||function(t,i){throw new Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"styling-notification-content-overview",children:"Styling notification content overview"}),"\n",(0,n.jsx)(i.p,{children:"Designing rich notification for Push closely follows the markdown standards. Below is a live example of what is possible with push notifications currently via Push Protocol."}),"\n",(0,n.jsx)(e,{children:(0,n.jsx)("title",{children:"Styling Notification Content | Push Notifications | Push Documentation"})}),"\n",(0,n.jsx)(i.h2,{id:"how-to-design-content-rich-notifications",children:"How to design content rich notifications?"}),"\n",(0,n.jsx)(i.h3,{id:"push-notification-markdown-live-playground",children:"Push Notification markdown live playground"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-jsx",metastring:"live",live:!0,children:"// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { NotificationItem } from @pushprotocol/restapi;\nfunction App(props) {\n  return (\n    <>\n      <h2>Markdown Notification to style your notification as per your need</h2>\n      <NotificationItem\n        notificationTitle={'Title'}\n        notificationBody={\n          \"[Hello World](https://github.com) ***Bold&Italic*** \\n **Bold** \\n *Italic* \\n <span color='green'>green text</span> \\n [PUSH website](https://push.org) \\n [timestamp: 1699347011]\"\n        }\n        image={'https://www.youtube.com/watch?v=R8nsAhyrvTI'}\n        chainName={'ETH_TEST_GOERLI'}\n        icon={'https://push.org/assets/pushIcon.svg'}\n        app={'PUSH'}\n      />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"supported-markdown",children:"Supported markdown"}),"\n",(0,n.jsxs)(i.p,{children:["These are some of the styles currently supported by ",(0,n.jsx)(i.strong,{children:"Push"})]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Previous Markdown"}),(0,n.jsx)(i.th,{children:"Cuurrent Markdown"}),(0,n.jsx)(i.th,{children:"Use Case"}),(0,n.jsx)(i.th,{children:"Styling effects"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[b: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"**Bold**"})}),(0,n.jsx)(i.td,{children:"For Emphasis"}),(0,n.jsx)(i.td,{children:"For Bold"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[i: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"*Italic*"})}),(0,n.jsx)(i.td,{children:"For Emphasis"}),(0,n.jsx)(i.td,{children:"For Italics"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[bi: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:" ***Bold&Italics***"})}),(0,n.jsx)(i.td,{children:"For Emphasis"}),(0,n.jsx)(i.td,{children:"For Bold and Italics"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"/n"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"/n"})}),(0,n.jsx)(i.td,{children:"For Segregation"}),(0,n.jsx)(i.td,{children:"For new line"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[w: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'<span color="white">Hello World</span>'})}),(0,n.jsx)(i.td,{children:"For colored text"}),(0,n.jsx)(i.td,{children:"For white color"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"-"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'<span color="#ANYHEXCODE"> Hello world </span>'})}),(0,n.jsx)(i.td,{children:"For colored text"}),(0,n.jsx)(i.td,{children:"Supports any color by hexcode"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[d: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'<span color="primary">Hello World </span>'})}),(0,n.jsx)(i.td,{children:"For colored text"}),(0,n.jsx)(i.td,{children:"EPNS Primary colored Text"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[s: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'<span color="secondary">Hello World </span>'})}),(0,n.jsx)(i.td,{children:"For colored text"}),(0,n.jsx)(i.td,{children:"EPNS Secondary colored Text"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[t: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'<span color="tertiary">Hello World </span>'})}),(0,n.jsx)(i.td,{children:"For colored text"}),(0,n.jsx)(i.td,{children:"EPNS Tetiary colored Text"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[u: textcontent]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[PUSH website](https://push.org)"})}),(0,n.jsx)(i.td,{children:"For URL\u2019s"}),(0,n.jsx)(i.td,{children:"Underlined, Red Colored Text"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[timestamp: timestamp_in_epoch]"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"[timestamp: timestamp_in_epoch]"})}),(0,n.jsx)(i.td,{children:"For timestamp"}),(0,n.jsx)(i.td,{children:"Required to be last component in description of the payload"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"contribute",children:"Contribute"}),"\n",(0,n.jsxs)(i.p,{children:["We believe notifications or any sort of web3 communication is a community wide effort and we invite everyone to come, discuss and better it for everyone via ",(0,n.jsx)(i.a,{href:"https://github.com/push-protocol/PIPs",title:"Learn more about Push Improvement Proposals (PIPs)",children:"Push Improvement Proposals (PIPs)"}),"."]})]})}function h(t={}){const{wrapper:i}={...(0,o.R)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(a,{...t})}):a(t)}},28453:(t,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var n=e(296540);const o={},s=n.createContext(o);function r(t){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function c(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(s.Provider,{value:i},t.children)}}}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[82723],{888403:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>r});var l=d(474848),a=d(28453);const n={id:"docs-video-develop-manage-video-call",title:"Manage Video Call",hide_title:!0,slug:"./manage-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_video_develop--manage_video_call.png"},s="Manage video call overview",o={id:"video/build/docs-video-develop-manage-video-call",title:"Manage Video Call",description:"This section covers all APIs related to managing video calls such as accepting, rejecting, and ending video calls.",source:"@site/docs/video/01-build/07-Develop-Manage-Video-Call.mdx",sourceDirName:"video/01-build",slug:"/video/build/manage-video-call",permalink:"/push-website/pr-preview/pr-939/docs/video/build/manage-video-call",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/video/01-build/07-Develop-Manage-Video-Call.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-video-develop-manage-video-call",title:"Manage Video Call",hide_title:!0,slug:"./manage-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_video_develop--manage_video_call.png"},sidebar:"pushVideoSidebar",previous:{title:"Request Video Call",permalink:"/push-website/pr-preview/pr-939/docs/video/build/request-video-call"},next:{title:"Tutorials",permalink:"/push-website/pr-preview/pr-939/docs/video/playground"}},t={},r=[{value:"Approve video call API",id:"approve-video-call-api",level:2},{value:"Approve video call parameters",id:"approve-video-call-parameters",level:3},{value:"Reject video call API",id:"reject-video-call-api",level:2},{value:"Reject video call parameters",id:"reject-video-call-parameters",level:3},{value:"Disconnect video call API",id:"disconnect-video-call-api",level:2},{value:"Toggle local video / audio API",id:"toggle-local-video--audio-api",level:2},{value:"Toggle local video / audio parameters",id:"toggle-local-video--audio-parameters",level:3},{value:"Getting status of local / remote video / audio",id:"getting-status-of-local--remote-video--audio",level:3},{value:"Handling video call events / UI",id:"handling-video-call-events--ui",level:2},{value:"Peer info object oberview",id:"peer-info-object-oberview",level:3}];function c(e){const i={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:d,Head:n}=i;return d||p("Details",!0),n||p("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"manage-video-call-overview",children:"Manage video call overview"}),"\n",(0,l.jsx)(i.p,{children:"This section covers all APIs related to managing video calls such as accepting, rejecting, and ending video calls."}),"\n",(0,l.jsx)(n,{children:(0,l.jsx)("title",{children:"Manage Video Call | Push Video | Push Documentation"})}),"\n",(0,l.jsx)(i.h2,{id:"approve-video-call-api",children:"Approve video call API"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:"// aliceVideoCall.approve(address?);\nawait aliceVideoCall.approve(recipientAddress);\n\n// Approving makes the stream emits CONSTANTS.VIDEO.EVENT.APPROVE event\n// which can be used to handle UI, for example, to start the video call.\n"})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h3,{id:"approve-video-call-parameters",children:"Approve video call parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Property"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"address"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsxs)(i.td,{children:[(0,l.jsx)(i.code,{children:"address"})," of the caller received from the stream event in the Push Stream."]})]})})]}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsxs)(i.p,{children:["Note: Parameters ",(0,l.jsx)(i.em,{children:(0,l.jsx)(i.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,l.jsx)(d,{summary:"Expected response",children:"200 OK"}),"\n",(0,l.jsx)(i.h2,{id:"reject-video-call-api",children:"Reject video call API"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:"// aliceVideoCall.deny(address?);\nawait aliceVideoCall.deny();\n\n// Denying makes the stream emits CONSTANTS.VIDEO.EVENT.DENY event on the call initiator's end\n// which can be used to handle UI, for example, to show a toast message to the user.\n"})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h3,{id:"reject-video-call-parameters",children:"Reject video call parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Property"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"address"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsxs)(i.td,{children:[(0,l.jsx)(i.code,{children:"address"})," of the caller received from the stream event in the Push Stream."]})]})})]}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsxs)(i.p,{children:["Note: Parameters ",(0,l.jsx)(i.em,{children:(0,l.jsx)(i.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,l.jsx)(d,{summary:"Expected response",children:"200 OK"}),"\n",(0,l.jsx)(i.h2,{id:"disconnect-video-call-api",children:"Disconnect video call API"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:"// aliceVideoCall.disconnect();\nawait aliceVideoCall.disconnect();\n\n// Disconnecting makes the stream emits CONSTANTS.VIDEO.EVENT.DISCONNECT event on the other end\n// which can be used to handle UI, for example, to show a toast message to the user.\n"})}),"\n",(0,l.jsx)(d,{summary:"Expected response",children:"200 OK"}),"\n",(0,l.jsx)(i.h2,{id:"toggle-local-video--audio-api",children:"Toggle local video / audio API"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:"aliceVideoCall.config({\n  video?: Boolean,\n  audio?: Boolean\n})\n"})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h3,{id:"toggle-local-video--audio-parameters",children:"Toggle local video / audio parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Property"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"video"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"Boolean"})}),(0,l.jsxs)(i.td,{children:[(0,l.jsx)(i.code,{children:"true"})," to enable video and ",(0,l.jsx)(i.code,{children:"false"})," to disable video"]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"audio"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"Boolean"})}),(0,l.jsxs)(i.td,{children:[(0,l.jsx)(i.code,{children:"true"})," to enable audio and ",(0,l.jsx)(i.code,{children:"false"})," to disable audio"]})]})]})]}),"\n",(0,l.jsx)(d,{summary:"Expected response",children:"200 OK"}),"\n",(0,l.jsx)(i.h3,{id:"getting-status-of-local--remote-video--audio",children:"Getting status of local / remote video / audio"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["The current local video status can be accessed by ",(0,l.jsx)(i.code,{children:"data.local.video"})," similarly for audio -> ",(0,l.jsx)(i.code,{children:"data.local.audio"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:["Likewise for remote video and audio, you can access the status by ",(0,l.jsx)(i.code,{children:"data.incoming[0].video"})," and ",(0,l.jsx)(i.code,{children:"data.incoming[0].audio"}),"."]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"handling-video-call-events--ui",children:"Handling video call events / UI"}),"\n",(0,l.jsx)(i.p,{children:"Every action that is performed on the video call will emit an event in the Push Stream. You can use these events to update the UI or show some toast messages to the user."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:"stream.on(CONSTANTS.STREAM.VIDEO, async (data: TYPES.VIDEO.EVENT) => {\n  if (data.event === CONSTANTS.VIDEO.EVENT.REQUEST) {\n    // RequestVideo Event is fired when there is an incoming video call request\n    // store the incoming peer address which will be used to accept/reject the call\n    // it is recommended to store the incoming caller address in a state that is received\n    // let incomingCallerAddress = data.peerInfo.address;\n  }\n  // other events\n});\n"})}),"\n",(0,l.jsx)(i.h3,{id:"peer-info-object-oberview",children:"Peer info object oberview"}),"\n",(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"peerInfo"})," object is received in the stream for various events. You can use this for various funcationalities, for example: to display the caller's name or profile picture in the UI."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-typescript",children:'{\n "peerInfo":{\n    "address":"0x...", // Address of the caller (initiator)\n    "signal":"...", // Signal data required to establish a video call\n    "meta":{\n      "rules":{\n        "access":{\n          "type": "PUSH_CHAT",\n          "data":{\n            "chatId": "...", // ChatId between the caller and the callee\n          }\n        }\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,d)=>{d.d(i,{R:()=>s,x:()=>o});var l=d(296540);const a={},n=l.createContext(a);function s(e){const i=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(n.Provider,{value:i},e.children)}}}]);
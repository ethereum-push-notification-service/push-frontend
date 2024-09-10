"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[40543],{167954:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>n,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(474848),d=s(28453);const r={id:"docs-video-develop-request-video-call",title:"Request Video Call",hide_title:!0,slug:"./request-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_video_develop--request_video_call.png"},o="Request video call",l={id:"video/build/docs-video-develop-request-video-call",title:"Request Video Call",description:"This section covers everything you need to do to request video calls.",source:"@site/docs/video/01-build/06-Develop-Request-Video-Call.mdx",sourceDirName:"video/01-build",slug:"/video/build/request-video-call",permalink:"/push-website/pr-preview/858/docs/video/build/request-video-call",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/video/01-build/06-Develop-Request-Video-Call.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-video-develop-request-video-call",title:"Request Video Call",hide_title:!0,slug:"./request-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_video_develop--request_video_call.png"},sidebar:"pushVideoSidebar",previous:{title:"Initializing Video",permalink:"/push-website/pr-preview/858/docs/video/build/initializing-video"},next:{title:"Manage Video Call",permalink:"/push-website/pr-preview/858/docs/video/build/manage-video-call"}},n={},c=[{value:"Request video call API",id:"request-video-call-api",level:2},{value:"Request video call parameters",id:"request-video-call-parameters",level:3}];function a(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:s,Head:r}=i;return s||u("Details",!0),r||u("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"request-video-call",children:"Request video call"}),"\n",(0,t.jsx)(i.p,{children:"This section covers everything you need to do to request video calls."}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("title",{children:"Request Video Call | Push Video | Push Documentation"})}),"\n",(0,t.jsx)(i.h2,{id:"request-video-call-api",children:"Request video call API"}),"\n",(0,t.jsxs)(i.p,{children:["When a user requests a video call, the stream emits ",(0,t.jsx)(i.code,{children:"CONSTANTS.VIDEO.EVENT.REQUEST"})," event on the receiver's end which can be used to display a modal to accept/deny the call."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"// aliceVideoCall.request(recipients[], options?);\nawait aliceVideoCall.request([recipient]);\n"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"request-video-call-parameters",children:"Request video call parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Sub Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.em,{children:(0,t.jsx)(i.code,{children:"recipients"})})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string[]"})}),(0,t.jsx)(i.td,{children:"-"}),(0,t.jsxs)(i.td,{children:["Wallet address or addresses of the recipient(s). Number of different ",(0,t.jsx)(i.a,{href:"/docs/chat/supported-wallet-standards",title:"Push Chat support wallet standards",children:"wallet standards"})," are suppported."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"options?"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"VideoInitializeOptions"})}),(0,t.jsx)(i.td,{children:"-"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"options.rules.access.type"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsxs)(i.td,{children:["Identifier for Push Video or Space. We use ",(0,t.jsx)(i.code,{children:"VIDEO_NOTIFICATION_ACCESS_TYPE.PUSH_CHAT"})," from ",(0,t.jsx)(i.code,{children:"@pushprotocol/restapi"})," here for Push Video"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"options.rules.access.data.chatId?"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Unique identifier for every push chat, here, the one between the alice and the bob"})]})]})]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Note: Parameters ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,t.jsx)(s,{summary:"Expected response",children:"200 OK"})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>l});var t=s(296540);const d={},r=t.createContext(d);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
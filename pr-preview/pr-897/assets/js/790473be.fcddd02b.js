"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[19166],{861537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(474848),s=t(28453),r=t(411470),a=t(119365),o=t(641622);t(113490);const l={id:"docs-notifications-develop-fetch-notifications",title:"Fetch Notifications",hide_title:!0,slug:"./fetch-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:10,image:"/assets/docs/previews/docs_notifications_develop--fetch_notifications.png"},c="Fetch notifications overview",d={id:"notifications/build/docs-notifications-develop-fetch-notifications",title:"Fetch Notifications",description:"These APIs are useful for fetching list of all notification (inbox or spam) of a user in a paginated manner.",source:"@site/docs/notifications/01-build/10-Develop-Fetch-Notifications.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/fetch-notifications",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/fetch-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/10-Develop-Fetch-Notifications.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"docs-notifications-develop-fetch-notifications",title:"Fetch Notifications",hide_title:!0,slug:"./fetch-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:10,image:"/assets/docs/previews/docs_notifications_develop--fetch_notifications.png"},sidebar:"pushNotificationSidebar",previous:{title:"Manage Subscriptions",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/manage-subscriptions"},next:{title:"Types of Notification",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/types-of-notification"}},h={},u=[{value:"Notification list API",id:"notification-list-api",level:2},{value:"Notification list parameters",id:"notification-list-parameters",level:3},{value:"Fetch channel specific notifications API",id:"fetch-channel-specific-notifications-api",level:2},{value:"Fetch Notifications by Channel API",id:"fetch-notifications-by-channel-api",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fetch-notifications-overview",children:"Fetch notifications overview"}),"\n",(0,i.jsx)(n.p,{children:"These APIs are useful for fetching list of all notification (inbox or spam) of a user in a paginated manner."}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Fetch Notifications | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"notification-list-api",children:"Notification list API"}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.notification.list(type, {options?})\nconst inboxNotifications = await userAlice.notification.list('INBOX');\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"notification-list-parameters",children:"Notification list parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"type"})})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"INBOX"})," or ",(0,i.jsx)(n.code,{children:"SPAM"})]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"INBOX"}),(0,i.jsx)(n.td,{children:"A string representing the type of feed to retrieve."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing additional options for filtering and pagination."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.account"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",children:"Account supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses, etc"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.channels"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string[]"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An array of channels to filter feeds by."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.page"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"A number representing the page of results to retrieve."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.limit"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"A number representing the maximum number of feeds to retrieve per page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.raw"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"False"}),(0,i.jsx)(n.td,{children:"A boolean indicating whether to retrieve raw feed data."})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(o.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"[\n  {\n    cta: '',\n    title: 'test',\n    message: 'test',\n    icon: 'https://gateway.ipfs.io/ipfs/bafybeib76bmkscu6efwawi2tkltdgthwrpny2ok7lur7nltffgydiq7ruy/QmVaY4HQaorrMhKo1sHk7FM1B8Xi1JnT3DvJbG9Xv7VeLZ',\n    url: 'https://google.com',\n    sid: '1922',\n    app: 'Updated Name',\n    image: '',\n    blockchain: 'ETH_TEST_GOERLI',\n    notification: { body: 'test', title: 'Updated Name - test' },\n    secret: '',\n  },\n  {\n    cta: '',\n    title: 'test',\n    message: 'test',\n    icon: 'https://gateway.ipfs.io/ipfs/bafybeib76bmkscu6efwawi2tkltdgthwrpny2ok7lur7nltffgydiq7ruy/QmVaY4HQaorrMhKo1sHk7FM1B8Xi1JnT3DvJbG9Xv7VeLZ',\n    url: 'https://google.com',\n    sid: '1435',\n    app: 'Updated Name',\n    image: '',\n    blockchain: 'ETH_TEST_GOERLI',\n    notification: { body: 'test', title: 'Updated Name - test' },\n    secret: '',\n  },\n  {\n    cta: '',\n    title: 'test',\n    message: 'test',\n    icon: 'https://gateway.ipfs.io/ipfs/bafybeib76bmkscu6efwawi2tkltdgthwrpny2ok7lur7nltffgydiq7ruy/QmVaY4HQaorrMhKo1sHk7FM1B8Xi1JnT3DvJbG9Xv7VeLZ',\n    url: 'https://google.com',\n    sid: '1432',\n    app: 'Updated Name',\n    image: '',\n    blockchain: 'ETH_TEST_GOERLI',\n    notification: { body: 'test', title: 'Updated Name - test' },\n    secret: '',\n  },\n];\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"fetch-channel-specific-notifications-api",children:"Fetch channel specific notifications API"}),"\n",(0,i.jsx)(n.p,{children:"This API is useful for fetching the list of all notifications sent from a channel. Useful for fetching notifications for a specific channel."}),"\n",(0,i.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.notifications(channelAddress, {options?})\nconst allNotifications = await userAlice.channel.notifications(channelAddress);\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fetch-notifications-by-channel-api",children:"Fetch Notifications by Channel API"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"channelAddress"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Channel address that you want fetch notifications for, ",(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#types-of-supported-wallet-address-account",children:"Account supports a number of address format"})," including wallet addresses, chain agnostic wallet addresses, NFT addresses, etc"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"An object containing additional options for filtering and pagination."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.page"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"A number representing the page of results to retrieve."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.limit"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"A number representing the maximum number of feeds to retrieve per page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.raw"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"False"}),(0,i.jsx)(n.td,{children:"A boolean indicating whether to retrieve raw feed data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.filter"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Filter the notifications by their type. Accepts ",(0,i.jsx)(n.code,{children:"CONSTANTS.NOTIFICATION.TYPE.BROADCAST"}),", ",(0,i.jsx)(n.code,{children:"CONSTANTS.NOTIFICATION.TYPE.SUBSET"}),", ",(0,i.jsx)(n.code,{children:"CONSTANTS.NOTIFICATION.TYPE.TARGETTED"})]})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(o.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  feeds: [\n    {\n      payload_id: 4714471,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-12-11T16:33:16.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4714469,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-12-11T16:31:44.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4710921,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-12-08T18:03:16.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4710908,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-12-08T18:02:03.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4497176,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-08-11T18:30:08.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4487454,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-07-28T18:41:41.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4487453,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-07-28T18:40:04.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4459720,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-07-10T16:45:25.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4444690,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-06-30T17:19:05.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    },\n    {\n      payload_id: 4438184,\n      sender: '0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be',\n      epoch: '2023-06-26T19:03:49.000Z',\n      payload: [Object],\n      source: 'ETH_MAINNET',\n      etime: null\n    }\n  ],\n  itemcount: 85693\n}\n"})})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},641622:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(296540),s=t(618215),r=t(15066),a=t(992303),o=t(41422);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var c=t(474848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:t,...s}=e;const u=(0,a.A)(),p=(0,i.useRef)(null),{collapsed:f,setCollapsed:x}=(0,o.u)({initialState:!s.open}),[j,b]=(0,i.useState)(s.open),m=i.isValidElement(n)?n:(0,c.jsx)("summary",{children:null!=n?n:"Details"});return(0,c.jsxs)("details",{...s,ref:p,open:j,"data-collapsed":f,className:(0,r.A)(l.details,u&&l.isBrowser,s.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;d(n)&&h(n,p.current)&&(e.preventDefault(),f?(x(!1),b(!0)):x(!0))},children:[m,(0,c.jsx)(o.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),b(!e)},children:(0,c.jsx)("div",{className:l.collapsibleContent,children:t})})]})}const p={details:"details_b_Ee"},f="alert alert--info";function x(e){let{...n}=e;return(0,c.jsx)(u,{...n,className:(0,s.A)(f,p.details,n.className)})}},119365:(e,n,t)=>{t.d(n,{A:()=>a});t(296540);var i=t(618215);const s={tabItem:"tabItem_Ymn6"};var r=t(474848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>A});var i=t(296540),s=t(618215),r=t(823104),a=t(956347),o=t(300205),l=t(757485),c=t(231682),d=t(289466);function h(e){var n,t;return null!==(n=null===(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[a,l]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=null!==(n=i.find((e=>e.default)))&&void 0!==n?n:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=f({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(474848);function g(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(c(n),a(s))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const n=l.indexOf(e.currentTarget)+1;t=null!==(i=l[n])&&void 0!==i?i:l[0];break}case"ArrowLeft":{var s;const n=l.indexOf(e.currentTarget)-1;t=null!==(s=l[n])&&void 0!==s?s:l[l.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function A(e){const n=(0,j.A)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(296540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
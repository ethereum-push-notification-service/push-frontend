"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[80095],{849315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var s=t(474848),r=t(28453),i=t(411470),l=t(119365),c=t(641622);t(113490);const d={id:"docs-notifications-develop-fetch-chats",title:"Create Channel",hide_title:!0,slug:"./create-channel",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications_develop_fetch_chats--create_channel.png"},a="Create channel overview",o={id:"notifications/build/docs-notifications-develop-fetch-chats",title:"Create Channel",description:"This API is useful for creating a channel, which is the first step for sending a notification on Push Protocol.",source:"@site/docs/notifications/01-build/04-Develop-Create-Channel.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/create-channel",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/create-channel",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/04-Develop-Create-Channel.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs-notifications-develop-fetch-chats",title:"Create Channel",hide_title:!0,slug:"./create-channel",displayed_sidebar:"pushNotificationSidebar",sidebar_position:4,image:"/assets/docs/previews/docs_notifications_develop_fetch_chats--create_channel.png"},sidebar:"pushNotificationSidebar",previous:{title:"Manage User",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/manage-user"},next:{title:"Channel Settings",permalink:"/push-website/pr-preview/pr-858/docs/notifications/build/create-channel-settings"}},h={},u=[{value:"Create channel API",id:"create-channel-api",level:2},{value:"Create channel parameters",id:"create-channel-parameters",level:3},{value:"Create channel progress object parameters",id:"create-channel-progress-object-parameters",level:3}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-channel-overview",children:"Create channel overview"}),"\n",(0,s.jsx)(n.p,{children:"This API is useful for creating a channel, which is the first step for sending a notification on Push Protocol."}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"Create Channel | Push Notification | Push Documentation"})}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"create-channel-api",children:"Create channel API"}),"\n",(0,s.jsx)(n.p,{children:"Any protocol that wants to send a notification to their users needs to create a channel. A wallet can only have one channel."}),"\n",(0,s.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(l.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.create({options})\nconst response = await userAlice.channel.create({\n  name: 'Test Channel',\n  description: 'Test Description',\n  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAz0lEQVR4AcXBsU0EQQyG0e+saWJ7oACiKYDMEZVs6GgSpC2BIhzRwAS0sgk9HKn3gpFOAv3v3V4/3+4U4Z1q5KTy42Ql940qvFONnFSGmCFmiN2+fj7uCBlihpgh1ngwcvKfwjuVIWaIGWKNB+GdauSk8uNkJfeNKryzYogZYoZY40m5b/wlQ8wQM8TayMlKeKcaOVkJ71QjJyuGmCFmiDUe+HFy4VyEd57hx0mV+0ZliBlihlgL71w4FyMnVXhnZeSkiu93qheuDDFDzBD7BcCyMAOfy204AAAAAElFTkSuQmCC',\n  url: 'https://push.org',\n});\n"})})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"create-channel-parameters",children:"Create channel parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Subtype"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"options"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Configuration options for creating a channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"options.name"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"The name of the channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"options.description"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"A description of the channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"options.icon"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string (base64 encoded)"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"The channel's icon in base64 encoded string format"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"options.url"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"The URL associated with the channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options.alias"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsxs)(n.td,{children:["alias address in in ",(0,s.jsx)(n.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",children:"chain specific wallet format"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options.progresshook"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(progress) => void"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsxs)(n.td,{children:["A callback function that's called during channel creation progress, ",(0,s.jsx)(n.a,{href:"/docs/notifications/build/create-channel/#create-channel-progress-object-parameters",children:"see progress object"})]})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: Parameters ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,s.jsx)(c.A,{summary:"Expected response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"{\n  transactionHash: '0x0232fb66e2cb41c291ca10af4aa3ad0bc515adcea34de0f456db10306db89677';\n}\n"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"create-channel-progress-object-parameters",children:"Create channel progress object parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Optional:"})," Informs about individual progress stages during channel creation if progresshook is function is passed during channel creation API call."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Subtype"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Remarks"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"progress"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"progress object that is passed in the callback"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Progress.id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Predefined, ID associated with the progress objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Progress.level"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Predefined, Level associated with the progress objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Progress.title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Predefined, title associated with the progress objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Progress.info"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Predefined, info associated with the progress objects"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"Progress object details"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Progress.id"}),(0,s.jsx)(n.th,{children:"Progress.level"}),(0,s.jsx)(n.th,{children:"Progress.title"}),(0,s.jsx)(n.th,{children:"Progress.info"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-01"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Uploading data to IPFS"}),(0,s.jsx)(n.td,{children:"The channel\u2019s data is getting uploaded to IPFS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-02"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Approving PUSH tokens"}),(0,s.jsx)(n.td,{children:"Gives approval to Push Core contract to spend 50 $PUSH"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-03"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Channel is getting created"}),(0,s.jsx)(n.td,{children:"Calls Push Core contract to create your channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-04"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SUCCESS"})}),(0,s.jsx)(n.td,{children:"Channel creation is done, Welcome to Push Ecosystem"}),(0,s.jsx)(n.td,{children:"Channel creation is completed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-01"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Uploading new data to IPFS"}),(0,s.jsx)(n.td,{children:"The channel\u2019s new data is getting uploaded to IPFS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-02"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Approving PUSH tokens"}),(0,s.jsx)(n.td,{children:"Gives approval to Push Core contract to spend 50 $PUSH"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-03"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"INFO"})}),(0,s.jsx)(n.td,{children:"Channel is getting updated"}),(0,s.jsx)(n.td,{children:"Calls Push Core contract to update your channel details"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-04"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SUCCESS"})}),(0,s.jsx)(n.td,{children:"Channel is updated with new data"}),(0,s.jsx)(n.td,{children:"Channel is successfully updated"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PUSH-ERROR-02"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ERROR"})}),(0,s.jsx)(n.td,{children:"Transaction failed for a function call"}),(0,s.jsx)(n.td,{children:"Transaction failed"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},641622:(e,n,t)=>{t.d(n,{A:()=>p});var s=t(296540),r=t(618215),i=t(15066),l=t(992303),c=t(41422);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=t(474848);function o(e){return!!e&&("SUMMARY"===e.tagName||o(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:t,...r}=e;const u=(0,l.A)(),j=(0,s.useRef)(null),{collapsed:x,setCollapsed:p}=(0,c.u)({initialState:!r.open}),[f,b]=(0,s.useState)(r.open),m=s.isValidElement(n)?n:(0,a.jsx)("summary",{children:null!=n?n:"Details"});return(0,a.jsxs)("details",{...r,ref:j,open:f,"data-collapsed":x,className:(0,i.A)(d.details,u&&d.isBrowser,r.className),onMouseDown:e=>{o(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;o(n)&&h(n,j.current)&&(e.preventDefault(),x?(p(!1),b(!0)):p(!0))},children:[m,(0,a.jsx)(c.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),b(!e)},children:(0,a.jsx)("div",{className:d.collapsibleContent,children:t})})]})}const j={details:"details_b_Ee"},x="alert alert--info";function p(e){let{...n}=e;return(0,a.jsx)(u,{...n,className:(0,r.A)(x,j.details,n.className)})}},119365:(e,n,t)=>{t.d(n,{A:()=>l});t(296540);var s=t(618215);const r={tabItem:"tabItem_Ymn6"};var i=t(474848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},411470:(e,n,t)=>{t.d(n,{A:()=>C});var s=t(296540),r=t(618215),i=t(823104),l=t(956347),c=t(300205),d=t(757485),a=t(231682),o=t(289466);function h(e){var n,t;return null!==(n=null===(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[l,d]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=null!==(n=s.find((e=>e.default)))&&void 0!==n?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,h]=x({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=null!=a?a:p;return j({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(474848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),r=c[t].value;r!==s&&(a(n),l(r))},h=e=>{var n;let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var s;const n=d.indexOf(e.currentTarget)+1;t=null!==(s=d[n])&&void 0!==s?s:d[0];break}case"ArrowLeft":{var r;const n=d.indexOf(e.currentTarget)-1;t=null!==(r=d[n])&&void 0!==r?r:d[d.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...i,className:(0,r.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function C(e){const n=(0,f.A)();return(0,m.jsx)(A,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(296540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[4262],{953563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=n(474848),i=n(28453),r=n(411470),a=n(119365),l=n(303999);n(113490);const o={id:"docs-notifications-develop-channel-settings",title:"Channel Settings",hide_title:!0,slug:"./create-channel-settings",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications_develop--channel_settings.png"},c="Channel settings overview",d={id:"notifications/build/docs-notifications-develop-channel-settings",title:"Channel Settings",description:"This section covers APIs related to creation of channel setting.",source:"@site/docs/notifications/01-build/05-Develop-Channel-Settings.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/create-channel-settings",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/create-channel-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/05-Develop-Channel-Settings.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"docs-notifications-develop-channel-settings",title:"Channel Settings",hide_title:!0,slug:"./create-channel-settings",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications_develop--channel_settings.png"},sidebar:"pushNotificationSidebar",previous:{title:"Create Channel",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/create-channel"},next:{title:"Channel Delegates",permalink:"/push-website/pr-preview/pr-965/docs/notifications/build/channel-delegates"}},h={},u=[{value:"What are channel settings?",id:"what-are-channel-settings",level:2},{value:"Channel setting API",id:"channel-setting-api",level:2},{value:"Create channel setting parameters",id:"create-channel-setting-parameters",level:3},{value:"Types of channel settings",id:"types-of-channel-settings",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"channel-settings-overview",children:"Channel settings overview"}),"\n",(0,s.jsx)(t.p,{children:"This section covers APIs related to creation of channel setting."}),"\n",(0,s.jsx)(n,{children:(0,s.jsx)("title",{children:"Channel Settings | Push Notifications | Push Documentation"})}),"\n",(0,s.jsx)(t.h2,{id:"what-are-channel-settings",children:"What are channel settings?"}),"\n",(0,s.jsx)(t.p,{children:"A channel may want to send notification for multiple categories. Ex: Coindesk may want to send notifications for tech, marketing, defi and so on. Similarly, Aave may want to send notifciation for certain loan liquidation value."}),"\n",(0,s.jsx)(t.p,{children:"Having settings for your channel enables your users to express interest on what settings they want to receive notifications for and when they want to receive it."}),"\n",(0,s.jsxs)(t.p,{children:["Once you have enabled channel settings, you can access settings prefrence of each user via ",(0,s.jsx)(t.a,{href:"/docs/notifications/build/fetch-subscriptions/",title:"Fetch subscription API for channel settings",children:"Fetch Subscription API"}),". You can also trigger notifications which target particular settings category via ",(0,s.jsx)(t.a,{href:"/docs/notifications/build/send-notification/",title:"Send notification API for sending notification meant for vertain category",children:"Send Notification API"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"If a user hasn't opted in for a particular setting and you trigger notification for that setting category then the notification will be filtered out by Push Node."})}),"\n","\n","\n",(0,s.jsx)(t.h2,{id:"channel-setting-api",children:"Channel setting API"}),"\n",(0,s.jsx)(r.A,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// creates channel settings\nconst createChannelSettingRes = userAlice.channel.setting([\n  {\n    type: 1, // Boolean type\n    default: 1,\n    description: 'Receive marketing notifications',\n  },\n  {\n    type: 2, // Slider type\n    default: 10,\n    description: 'Notify when loan health breaches',\n    data: { upper: 100, lower: 5, ticker: 1 },\n  },\n]);\n"})})})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"create-channel-setting-parameters",children:"Create channel setting parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Subtype"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"type"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"The type of notification setting. 1 for boolean type and 2 for slider type"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"default"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"The default value for the setting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"description"})})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"A description of the setting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data.upper"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Valid for slider type only. The upper limit for the setting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data.lower"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"Valid for slider type only. The lower limit for the setting."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data.ticker"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Valid for slider type only. The ticker by which the slider moves."})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note: Parameters ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,s.jsx)(l.A,{summary:"Expected response",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"{\n  transactionHash: '0xf5056d382f209b5a7bcbf08d69c80dd13079467ba38413da8ca065a45f901a32';\n}\n"})})}),"\n",(0,s.jsx)(t.h3,{id:"types-of-channel-settings",children:"Types of channel settings"}),"\n",(0,s.jsx)(t.p,{children:"Push currently supports defining the following settings for your channel \u2014"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Boolean Setting - This setting allows users to set their preference as true / false. ",(0,s.jsx)(t.strong,{children:"For example:"})," ",(0,s.jsx)(t.em,{children:"receive marketing notifications"})]}),"\n",(0,s.jsxs)(t.li,{children:["Slider Setting - This setting allows users to set their preference between a slider. ",(0,s.jsx)(t.strong,{children:"For example:"})," ",(0,s.jsx)(t.em,{children:"alert when ENS domain expires (Between 1 - 7 days)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"ID"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1"})}),(0,s.jsxs)(t.td,{children:["Set a setting to be yes or no, must have a ",(0,s.jsx)(t.strong,{children:"default"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Slider"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2"})}),(0,s.jsxs)(t.td,{children:["Set a setting to be slider, must have ",(0,s.jsx)(t.strong,{children:"upper"})," and ",(0,s.jsx)(t.strong,{children:"lower"})," range and a ",(0,s.jsx)(t.strong,{children:"default"})]})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},303999:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(296540),i=n(618215),r=n(198587),a=n(15066),l=n(992303),o=n(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=n(474848);const h=["summary","children"];function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function f(e){let{summary:t,children:n}=e,i=(0,r.A)(e,h);const f=(0,l.A)(),x=(0,s.useRef)(null),{collapsed:j,setCollapsed:b}=(0,o.u)({initialState:!i.open}),[g,m]=(0,s.useState)(i.open),v=s.isValidElement(t)?t:(0,d.jsx)("summary",{children:null!=t?t:"Details"});return(0,d.jsxs)("details",Object.assign({},i,{ref:x,open:g,"data-collapsed":j,className:(0,a.A)(c.details,f&&c.isBrowser,i.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&p(t,x.current)&&(e.preventDefault(),j?(b(!1),m(!0)):b(!0))},children:[v,(0,d.jsx)(o.N,{lazy:!1,collapsed:j,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),m(!e)},children:(0,d.jsx)("div",{className:c.collapsibleContent,children:n})})]}))}const x={details:"details_b_Ee"},j="alert alert--info";function b(e){let t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,d.jsx)(f,Object.assign({},t,{className:(0,i.A)(j,x.details,t.className)}))}},119365:(e,t,n)=>{n.d(t,{A:()=>a});n(296540);var s=n(618215);const i={tabItem:"tabItem_Ymn6"};var r=n(474848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(296540),i=n(618215),r=n(823104),a=n(956347),l=n(300205),o=n(757485),c=n(231682),d=n(289466);function h(e){var t,n;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}),[r,i])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=u(e),[a,o]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const i=null!==(t=s.find((e=>e.default)))&&void 0!==t?t:s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,h]=f({queryString:n,groupId:i}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[i,r]=(0,d.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),b=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(474848);function m(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==s&&(c(t),a(i))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const t=o.indexOf(e.currentTarget)+1;n=null!==(s=o[t])&&void 0!==s?s:o[0];break}case"ArrowLeft":{var i;const t=o.indexOf(e.currentTarget)-1;n=null!==(i=o[t])&&void 0!==i?i:o[o.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:d},r,{className:(0,i.A)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,g.jsx)(m,Object.assign({},e,t)),(0,g.jsx)(v,Object.assign({},e,t))]})}function w(e){const t=(0,j.A)();return(0,g.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(296540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
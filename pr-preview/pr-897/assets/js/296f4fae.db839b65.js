"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[58232],{804283:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var i=s(474848),r=s(28453),t=s(411470),a=s(119365),c=s(641622);s(113490);const d={id:"docs-notifications-develop-manage-channel",title:"Manage Channel",hide_title:!0,slug:"./manage-channel",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_develop--manage_channel.png"},l="Manage channel overview",h={id:"notifications/build/docs-notifications-develop-manage-channel",title:"Manage Channel",description:"This section covers all APIs related to managing channel including adding settings, getting and updating channel info, etc.",source:"@site/docs/notifications/01-build/07-Develop-Manage-Channel.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/manage-channel",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/manage-channel",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/07-Develop-Manage-Channel.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-notifications-develop-manage-channel",title:"Manage Channel",hide_title:!0,slug:"./manage-channel",displayed_sidebar:"pushNotificationSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_notifications_develop--manage_channel.png"},sidebar:"pushNotificationSidebar",previous:{title:"Channel Delegates",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/channel-delegates"},next:{title:"Fetch Subscriptions",permalink:"/push-website/pr-preview/pr-897/docs/notifications/build/fetch-subscriptions"}},o={},x=[{value:"Get channel info API",id:"get-channel-info-api",level:2},{value:"Fetch channel info parameters",id:"fetch-channel-info-parameters",level:3},{value:"Get channel alias info API",id:"get-channel-alias-info-api",level:2},{value:"Get alias info parameters",id:"get-alias-info-parameters",level:3},{value:"Get channel subscribers API",id:"get-channel-subscribers-api",level:2},{value:"Get channel subscribers parameters",id:"get-channel-subscribers-parameters",level:3},{value:"Search channel API",id:"search-channel-api",level:2},{value:"Search channel parameters",id:"search-channel-parameters",level:3},{value:"Update channel API",id:"update-channel-api",level:2},{value:"Update channel parameters",id:"update-channel-parameters",level:3},{value:"Update channel progress object parameters",id:"update-channel-progress-object-parameters",level:3},{value:"Verify channel API",id:"verify-channel-api",level:2},{value:"Verify channel parameters",id:"verify-channel-parameters",level:3}];function j(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"manage-channel-overview",children:"Manage channel overview"}),"\n",(0,i.jsx)(n.p,{children:"This section covers all APIs related to managing channel including adding settings, getting and updating channel info, etc."}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("title",{children:"Manage Channel | Push Notification | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"get-channel-info-api",children:"Get channel info API"}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.info(channel?)\nconst channelInfo = await userAlice.channel.info();\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fetch-channel-info-parameters",children:"Fetch channel info parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"channel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Channel address in ",(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",children:"chain specific wallet format"}),". If no channel address is passed, then signer is used to derive the channel"]})]})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  id: 23,\n  channel: '0xD8634C39BBFd4033c0d3289C4515275102423681',\n  ipfshash: 'QmVaY4HQaorrMhKo1sHk7FM1B8Xi1JnT3DvJbG9Xv7VeLZ',\n  name: 'Updated Name',\n  info: 'Testing new description',\n  url: 'https://google.com',\n  icon: 'https://gateway.ipfs.io/ipfs/bafybeib76bmkscu6efwawi2tkltdgthwrpny2ok7lur7nltffgydiq7ruy/QmVaY4HQaorrMhKo1sHk7FM1B8Xi1JnT3DvJbG9Xv7VeLZ',\n  processed: 1,\n  attempts: 0,\n  alias_address: 'NULL',\n  alias_blockchain_id: 'NULL',\n  is_alias_verified: 1,\n  blocked: 0,\n  alias_verification_event: '{\"aliasAddress\": \"eip155:420:0xD8634C39BBFd4033c0d3289C4515275102423681\", \"aliasBlockchainId\": \"420\"}',\n  activation_status: 1,\n  verified_status: 0,\n  subgraph_details: null,\n  counter: null,\n  timestamp: '2023-10-04T11:53:09.000Z',\n  subgraph_attempts: 0,\n  channel_settings: '[]',\n  subscriber_count: 0\n}\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"get-channel-alias-info-api",children:"Get channel alias info API"}),"\n",(0,i.jsx)(n.p,{children:"A channel alias address is a link to other EVM / non-EVM chain address that acts as an alias to your channel on Ethereum. Currently, alias info needs to be given when you are creating your channel."}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// await userAlice.channel.alias.info({options?})\nconst aliasInfo = await userAlice.channel.alias.info({\n  alias: aliasAddress,\n  aliasChain: 'POLYGON',\n});\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get-alias-info-parameters",children:"Get alias info parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Configuration options for retrieving alias information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.alias"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"The alias address"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.aliasChain"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ALIAS_CHAIN"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"The name of the alias chain, which can be 'POLYGON' or 'BSC' or 'OPTIMISM' or 'POLYGONZKEVM'"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  channel: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n  alias_address: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n  is_alias_verified: 1,\n  blocked: 0,\n  activation_status: 1\n}\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"get-channel-subscribers-api",children:"Get channel subscribers API"}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.subscribers({options?})\nconst channelSubscribers = await userAlice.channel.subscribers();\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get-channel-subscribers-parameters",children:"Get channel subscribers parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Configuration options for retrieving subscribers."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.channel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Derived from signer"}),(0,i.jsxs)(n.td,{children:["Channel address in ",(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",children:"chain specific wallet format"}),". If no channel address is passed, then signer is used to derive the channel"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.page"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"A number representing the page of results to retrieve."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.limit"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Represents the maximum number of subscriptions to retrieve per page"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.setting"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"A boolean flag if when set to true, fetches user settings along with the subscriber"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.category"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Filters out subscribers that have enabled a specific category of notification settings"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// PushAPI.channels.getSubscribers | Response - 200 OK\n{\n    "itemcount": 10,\n    "subscribers": [\n        "0x1d4f52775344f9a32093af0ccd03a4fb6dac8e30",\n        "0x28d615edd8404f8ca1e0271a0b5a48171589921a",\n        "0x4352639b99689069f9b0b847eee349c3c1b0706c",\n        "0x50029e62540537045bcfd3d320483865344edb33",\n        "0x5ac9e6205eaca2bbba6ef716fd9aabd76326eeee",\n        "0x778d3206374f8ac265728e18e3fe2ae6b93e4ce4",\n        "0xa44f2994750cf774eab05751d90ade4dedabe7fe",\n        "0xbcfb7da1dcf40e8cfb331683bb7d6f4eba091b08",\n        "0xcf5dbf241fc65a5af56c95101ac4e9ec2c57d941",\n        "0xd8634c39bbfd4033c0d3289c4515275102423681"\n    ]\n}\n'})})}),"\n",(0,i.jsx)(n.h2,{id:"search-channel-api",children:"Search channel API"}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.search(query, {options?})\nconst searchedChannels = await userAlice.channel.search('push');\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"search-channel-parameters",children:"Search channel parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"query"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"The search query to find channels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Configuration options for the search"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"options.page"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:"The page of results to retrieve"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"options.limit"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"10"})}),(0,i.jsx)(n.td,{children:"The maximum number of channels to retrieve per page"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"[\n  {\n    id: 2,\n    channel: '0x74415Bc4C4Bf4Baecc2DD372426F0a1D016Fa924',\n    ipfshash: 'QmSbRT16JVF922yAB26YxWFD6DmGsnSHm8VBrGUQnXTS74',\n    name: 'Ethereum Push Notification Service',\n    info: 'The channel provides useful information, notifications, etc to all the users of the EPNS platform. While not recommended, you can unsubcribe if you want to.',\n    url: 'https://epns.io/',\n    icon: 'https://gateway.ipfs.io/ipfs/bafybeihwgapkthxi6udojr7soqetk5xx22bdy56uupivcwkriaiqzwlyiu/QmSbRT16JVF922yAB26YxWFD6DmGsnSHm8VBrGUQnXTS74',\n    processed: 1,\n    attempts: 0,\n    alias_address: 'NULL',\n    alias_blockchain_id: 'NULL',\n    is_alias_verified: 0,\n    blocked: 0,\n    alias_verification_event: null,\n    activation_status: 1,\n    verified_status: 0,\n    subgraph_details: null,\n    counter: null,\n    timestamp: '2022-12-12T05:17:02.000Z',\n    subgraph_attempts: 0,\n    channel_settings: null,\n    subscriber_count: 11,\n  },\n  {\n    id: 96,\n    channel: '0x18C0Ab0809589c423Ac9eb42897258757b6b3d3d',\n    ipfshash: 'QmYo8ABBk3tj3g6FRiLkoJNFRedm7JVk6iiVWTRdeEmRmy',\n    name: 'test with push',\n    info: 'test with push',\n    url: 'https://push.org',\n    icon: 'https://gateway.ipfs.io/ipfs/bafybeicsksoatvksk4xazftcehg6sodevkgzkzuuvoz3htzt7ejskbdu2y/QmYo8ABBk3tj3g6FRiLkoJNFRedm7JVk6iiVWTRdeEmRmy',\n    processed: 1,\n    attempts: 0,\n    alias_address: 'NULL',\n    alias_blockchain_id: 'NULL',\n    is_alias_verified: 0,\n    blocked: 0,\n    alias_verification_event: null,\n    activation_status: 1,\n    verified_status: 0,\n    subgraph_details: null,\n    counter: null,\n    timestamp: '2023-01-10T04:42:26.000Z',\n    subgraph_attempts: 0,\n    channel_settings: null,\n    subscriber_count: 0,\n  },\n];\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"update-channel-api",children:"Update channel API"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"This function requires the wallet to have some Push Tokens and eth to pay for gas fees."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"No. of Push Token Required = 50 + (No. of Times Channel Has been updated) * 50"})})})]}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.update({options?})\nconst updateChannelRes = await userAlice.channel.update({\n  name: newChannelName,\n  description: newChannelDescription,\n  url: newChannelURL,\n  icon: newBase64FormatImage,\n  alias: newAliasAddressInCAIP,\n});\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"update-channel-parameters",children:"Update channel parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Configuration options for updating a channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.name"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"New name of the channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.description"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"New description of the channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.icon"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string (base64 encoded)"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"New channel's icon in base64 encoded string format"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options.url"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"New URL associated with the channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.alias"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["New alias address in Channel address in ",(0,i.jsx)(n.a,{href:"/docs/notifications/important-concepts/#chain-specific-wallet-address",children:"chain specific wallet format"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options.progresshook"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(progress) => void"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["A callback function that's called during channel creation progress, ",(0,i.jsx)(n.a,{href:"/docs/notifications/build/manage-channel/#update-channel-progress-object-parameters",children:"see progress object"})]})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  transactionHash: '0xf5056d382f209b5a7bcbf08d69c80dd13079467ba38413da8ca065a45f901a32';\n}\n"})})}),"\n",(0,i.jsx)(n.h3,{id:"update-channel-progress-object-parameters",children:"Update channel progress object parameters"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Optional:"})," Informs about individual progress stages during channel creation if progresshook is function is passed during channel creation API call."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"progress"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"progress object that is passed in the callback"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Progress.id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Predefined, ID associated with the progress objects"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Progress.level"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Predefined, Level associated with the progress objects"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Progress.title"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Predefined, title associated with the progress objects"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Progress.info"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Predefined, info associated with the progress objects"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"Progress object details"})})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Progress.id"}),(0,i.jsx)(n.th,{children:"Progress.level"}),(0,i.jsx)(n.th,{children:"Progress.title"}),(0,i.jsx)(n.th,{children:"Progress.info"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-01"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Uploading data to IPFS"}),(0,i.jsx)(n.td,{children:"The channel\u2019s data is getting uploaded to IPFS"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-02"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Approving PUSH tokens"}),(0,i.jsx)(n.td,{children:"Gives approval to Push Core contract to spend 50 DAI"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-03"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Channel is getting created"}),(0,i.jsx)(n.td,{children:"Calls Push Core contract to create your channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-CREATE-04"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUCCESS"})}),(0,i.jsx)(n.td,{children:"Channel creation is done, Welcome to Push Ecosystem"}),(0,i.jsx)(n.td,{children:"Channel creation is completed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-01"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Uploading new data to IPFS"}),(0,i.jsx)(n.td,{children:"The channel\u2019s new data is getting uploaded to IPFS"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-02"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Approving PUSH tokens"}),(0,i.jsx)(n.td,{children:"Gives approval to Push Core contract to spend 50 DAI"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-03"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INFO"})}),(0,i.jsx)(n.td,{children:"Channel is getting updated"}),(0,i.jsx)(n.td,{children:"Calls Push Core contract to update your channel details"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-CHANNEL-UPDATE-04"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SUCCESS"})}),(0,i.jsx)(n.td,{children:"Channel is updated with new data"}),(0,i.jsx)(n.td,{children:"Channel is successfully updated"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PUSH-ERROR-02"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ERROR"})}),(0,i.jsx)(n.td,{children:"Transaction failed for a function call"}),(0,i.jsx)(n.td,{children:"Transaction failed"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"verify-channel-api",children:"Verify channel API"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The wallet must have a channel with verification tag to verify other channels."})}),"\n",(0,i.jsx)(n.p,{children:"Channel Verification feature enables a channel owner to verify other channels. A verified channel not only boosts user trust in its notifications but also receives a prominent position in the User interface. Verifications done can have either a Primary or a Secondary verification tag."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Primary Verification tag: Channels that have directly been verified by the Push."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Secondary Verification tag: Channels that have been verified by other Primary Verified channels and not directly by the Push."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.A,{className:"codetabs",groupId:"code-examples",children:(0,i.jsx)(a.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// userAlice.channel.verify(channel)\nconst verifyChannelRes = await userAlice.channel.verify(channel);\n"})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"verify-channel-parameters",children:"Verify channel parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Subtype"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"channel"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Channel address in CAIP to be verified"})]})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Parameters ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,i.jsx)(c.A,{summary:"Expected response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"{\n  transactionHash: '0xf5056d382f209b5a7bcbf08d69c80dd13079467ba38413da8ca065a45f901a32';\n}\n"})})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},641622:(e,n,s)=>{s.d(n,{A:()=>p});var i=s(296540),r=s(618215),t=s(15066),a=s(992303),c=s(41422);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var l=s(474848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function o(e,n){return!!e&&(e===n||o(e.parentElement,n))}function x(e){let{summary:n,children:s,...r}=e;const x=(0,a.A)(),j=(0,i.useRef)(null),{collapsed:u,setCollapsed:p}=(0,c.u)({initialState:!r.open}),[b,f]=(0,i.useState)(r.open),m=i.isValidElement(n)?n:(0,l.jsx)("summary",{children:null!=n?n:"Details"});return(0,l.jsxs)("details",{...r,ref:j,open:b,"data-collapsed":u,className:(0,t.A)(d.details,x&&d.isBrowser,r.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&o(n,j.current)&&(e.preventDefault(),u?(p(!1),f(!0)):p(!0))},children:[m,(0,l.jsx)(c.N,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),f(!e)},children:(0,l.jsx)("div",{className:d.collapsibleContent,children:s})})]})}const j={details:"details_b_Ee"},u="alert alert--info";function p(e){let{...n}=e;return(0,l.jsx)(x,{...n,className:(0,r.A)(u,j.details,n.className)})}},119365:(e,n,s)=>{s.d(n,{A:()=>a});s(296540);var i=s(618215);const r={tabItem:"tabItem_Ymn6"};var t=s(474848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:s,children:n})}},411470:(e,n,s)=>{s.d(n,{A:()=>A});var i=s(296540),r=s(618215),t=s(823104),a=s(956347),c=s(300205),d=s(757485),l=s(231682),h=s(289466);function o(e){var n,s;return null!==(n=null===(s=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==n?n:[]}function x(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return o(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,d.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=x(e),[a,d]=(0,i.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!j({value:s,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=null!==(n=i.find((e=>e.default)))&&void 0!==n?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[l,o]=u({queryString:s,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,h.Dv)(s);return[r,(0,i.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),f=(()=>{const e=null!=l?l:p;return j({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{f&&d(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),b(e)}),[o,b,t]),tabValues:t}}var b=s(992303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(474848);function g(e){let{className:n,block:s,selectedValue:i,selectValue:a,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.a_)(),h=e=>{const n=e.currentTarget,s=d.indexOf(n),r=c[s].value;r!==i&&(l(n),a(r))},o=e=>{var n;let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{var i;const n=d.indexOf(e.currentTarget)+1;s=null!==(i=d[n])&&void 0!==i?i:d[0];break}case"ArrowLeft":{var r;const n=d.indexOf(e.currentTarget)-1;s=null!==(r=d[n])&&void 0!==r?r:d[d.length-1];break}}null===(n=s)||void 0===n||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:o,onClick:h,...t,className:(0,r.A)("tabs__item",f.tabItem,null==t?void 0:t.className,{"tabs__item--active":i===n}),children:null!=s?s:n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function A(e){const n=(0,b.A)();return(0,m.jsx)(y,{...e,children:o(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(296540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
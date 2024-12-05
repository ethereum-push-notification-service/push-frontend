"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[25601],{306242:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var t=r(474848),s=r(28453),i=r(411470),d=r(119365),l=r(641622),c=r(113490);const a={id:"docs-chat-develop-create-group",title:"Create Group",hide_title:!0,slug:"./create-group",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_develop--create_group.png"},o="Group chat overview",h={id:"chat/build/docs-chat-develop-create-group",title:"Create Group",description:"Group chat is the latest exciting addition to Push Chat, for the first time ever, web3 users are finally able to talk to each other in web3 native groups and have fine-grained controls over them allowing new ways by which community can be engaged besides adding new utilities to your token. Group chat enables protocols or web3 projects to create \u2014",source:"@site/docs/chat/01-build/07-Develop-Create-Group.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/create-group",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/create-group",draft:!1,unlisted:!1,editUrl:"https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/07-Develop-Create-Group.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docs-chat-develop-create-group",title:"Create Group",hide_title:!0,slug:"./create-group",displayed_sidebar:"pushChatSidebar",sidebar_position:7,image:"/assets/docs/previews/docs_chat_develop--create_group.png"},sidebar:"pushChatSidebar",previous:{title:"Send Message",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/send-message"},next:{title:"Group Requests",permalink:"/push-website/pr-preview/pr-939/docs/chat/build/group-requests"}},u={},p=[{value:"Create group API",id:"create-group-api",level:2},{value:"Create group parameters",id:"create-group-parameters",level:3},{value:"Create group interface",id:"create-group-interface",level:3},{value:"Creating a gated group",id:"creating-a-gated-group",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"group-chat-overview",children:"Group chat overview"}),"\n",(0,t.jsx)(n.p,{children:"Group chat is the latest exciting addition to Push Chat, for the first time ever, web3 users are finally able to talk to each other in web3 native groups and have fine-grained controls over them allowing new ways by which community can be engaged besides adding new utilities to your token. Group chat enables protocols or web3 projects to create \u2014"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DAO / NFT community"}),"\n",(0,t.jsx)(n.li,{children:"Private or public groups"}),"\n",(0,t.jsx)(n.li,{children:"Conditional / Gated group for joining or sending message"}),"\n",(0,t.jsx)(n.li,{children:"Gating based on tokens, NFTs, social following or custom endpoint"}),"\n",(0,t.jsx)(n.li,{children:"Ability to integrate in your UI (web / mobile) without users going to Discord, Telegram or breaking the UX"}),"\n"]}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("title",{children:"Create Group | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"create-group-api",children:"Create group API"}),"\n",(0,t.jsx)(i.A,{className:"codetabs",groupId:"code-examples",children:(0,t.jsx)(d.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// userAlice.chat.group.create(name, {options?})\nconst createdGroup = await userAlice.chat.group.create(name);\n"})})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"create-group-parameters",children:"Create group parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Subtype"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"name"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"The name of the group to be created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Optional Configuration for creating group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.description"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"A description of the group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.image"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsxs)(n.td,{children:["Image for the group in ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base64"})," format"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.members"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsxs)(n.td,{children:["An array of member recipients. ",(0,t.jsx)(n.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Members supports a number of address format"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.admins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsxs)(n.td,{children:["An array of admin recipients. ",(0,t.jsx)(n.a,{href:"/docs/chat/supported-wallet-standards/",title:"Supported wallet standards for Push Chat",children:"Admins supports a number of address format"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.private"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Indicates if the group is private."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options.rules"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsxs)(n.td,{children:["Define conditions such as token gating, nft gating, custom endpoint for ",(0,t.jsx)(n.code,{children:"joining"})," or ",(0,t.jsx)(n.code,{children:"sending message"})," in a group. See ",(0,t.jsx)(n.a,{href:"/docs/chat/build/conditional-rules-for-group",children:"conditional group gating"})," to understand rule engine and how to fine tune conditional rules of your group"]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Parameters ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"in this style"})})," are mandatory."]}),"\n"]}),"\n",(0,t.jsxs)(l.A,{summary:"Expected response",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'create'\n}\n"})}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"members"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<Object>"})}),(0,t.jsx)(n.td,{children:"An array containing member objects."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"members.wallet"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The wallet address of the member."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"members.publicKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The member's public PGP key (if available)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"members.isAdmin"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Indicates whether the member is an admin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"members.image"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Image associated with the member."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pendingMembers"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<Object>"})}),(0,t.jsx)(n.td,{children:"An array containing pending member objects."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pendingMembers.wallet"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The wallet address of the pending member."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pendingMembers.publicKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The pending member's public PGP key (if available)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pendingMembers.isAdmin"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Indicates whether the pending member is an admin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pendingMembers.image"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Image associated with the pending member."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contractAddressERC20"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Contract address for ERC20 tokens (Used for tokenGating)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"numberOfERC20"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"The number of ERC20 tokens associated. (Used for tokenGating)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contractAddressNFT"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Contract address for NFT tokens (Used for tokenGating)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"numberOfNFTTokens"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"The number of NFT tokens associated. (Used for tokenGating)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"verificationProof"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Verification proof associated with group data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groupImage"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Group's image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groupName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The name of the group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groupDescription"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Description of the group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isPublic"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"Indicates whether the group is public or private."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groupCreator"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Push Profile DID of the group creator."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chatId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Unique chat ID associated with the group."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"meta"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"object"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Additional metadata (if available)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"scheduleAt"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"timestamp"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Scheduled start time (if available)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"scheduleEnd"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"timestamp"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Scheduled end time (if available)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"groupType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Type of the group (default, spaces, live etc)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"status"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Status information ( active, expired etc)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rules"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Object"})}),(0,t.jsx)(n.td,{children:"Group-specific moderation rules"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"eventType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The type of event (create, update etc)"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Learn about ",(0,t.jsx)(c.Yo,{href:"./conditional-rules-for-group",children:"conditional rules"})," to understand how groups permissions such as ",(0,t.jsx)(n.code,{children:"joining group"})," or ",(0,t.jsx)(n.code,{children:"sending messages"})," can be customized for your community or needs."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"create-group-interface",children:"Create group interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'interface GroupRules {\n  entry?: { conditions?: any[] };\n  chat?: { conditions?: any[] };\n}\n\ninterface GroupOptions {\n  description?: string;\n  image?: string; // base 64 encoded string\n  members?: string[];\n  admins?: string[];\n  private?: boolean;\n  rules?: GroupRules;\n}\n\ninterface CreateGroupParams {\n  name: string;\n  options?: GroupOptions;\n}\n\nconst createdGroup = async ({ name, options }: CreateGroupParams): Promise<any> => {\n  // Your implementation here\n};\n\n// Example\nconst groupName = "Example Group";\nconst groupDescription = "This is an example group.";\nconst groupImage = "data:image/png;base64,iVBORw0K..."; // example base64 encoded image string\nconst walletAddress1 = "0x123...";\nconst walletAddress2 = "0x456...";\nconst walletAddress3 = "0x789...";\n\nconst newGroup = await userAlice.chat.group.create(groupName,\n  {\n    description: groupDescription,\n    image: groupImage,\n    members: [walletAddress1, walletAddress2, walletAddress3],\n    admins: [],\n    private: false,\n    rules: {\n      entry: { conditions: [] },\n      chat: { conditions: [] },\n    },\n  },\n});\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-gated-group",children:"Creating a gated group"}),"\n",(0,t.jsxs)(n.p,{children:["Groups can be gated based on a number of conditions such as token gating, NFT gating, or Guild gating. Learn more about ",(0,t.jsx)(n.a,{href:"/docs/chat/build/conditional-rules-for-group",children:"conditional rules for group"})," to understand how to fine tune conditional rules of your group."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Token Gated Group creation Example - ",(0,t.jsx)(n.a,{href:"/docs/chat/build/conditional-rules-for-group/#token-gated-group-and-send-message-example",children:"Token Gating"})]}),"\n",(0,t.jsxs)(n.li,{children:["NFT Gated Group creation Example - ",(0,t.jsx)(n.a,{href:"/docs/chat/build/conditional-rules-for-group/#nft-gated-group-example",children:"NFT Gating"})]}),"\n",(0,t.jsxs)(n.li,{children:["Guild Gated Group creation Example - ",(0,t.jsx)(n.a,{href:"/docs/chat/build/conditional-rules-for-group/#guild-gated-group-example",children:"Guild Gating"})]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},641622:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(296540),s=r(618215),i=r(15066),d=r(992303),l=r(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=r(474848);function o(e){return!!e&&("SUMMARY"===e.tagName||o(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:r,...s}=e;const u=(0,d.A)(),p=(0,t.useRef)(null),{collapsed:x,setCollapsed:j}=(0,l.u)({initialState:!s.open}),[g,m]=(0,t.useState)(s.open),b=t.isValidElement(n)?n:(0,a.jsx)("summary",{children:null!=n?n:"Details"});return(0,a.jsxs)("details",{...s,ref:p,open:g,"data-collapsed":x,className:(0,i.A)(c.details,u&&c.isBrowser,s.className),onMouseDown:e=>{o(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;o(n)&&h(n,p.current)&&(e.preventDefault(),x?(j(!1),m(!0)):j(!0))},children:[b,(0,a.jsx)(l.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),m(!e)},children:(0,a.jsx)("div",{className:c.collapsibleContent,children:r})})]})}const p={details:"details_b_Ee"},x="alert alert--info";function j(e){let{...n}=e;return(0,a.jsx)(u,{...n,className:(0,s.A)(x,p.details,n.className)})}},119365:(e,n,r)=>{r.d(n,{A:()=>d});r(296540);var t=r(618215);const s={tabItem:"tabItem_Ymn6"};var i=r(474848);function d(e){let{children:n,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,d),hidden:r,children:n})}},411470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(296540),s=r(618215),i=r(823104),d=r(956347),l=r(300205),c=r(757485),a=r(231682),o=r(289466);function h(e){var n,r;return null!==(n=null===(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=u(e),[d,c]=(0,t.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[a,h]=x({queryString:r,groupId:s}),[j,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=null!=a?a:j;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=r(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(474848);function A(e){let{className:n,block:r,selectedValue:t,selectValue:d,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),o=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(a(n),d(s))},h=e=>{var n;let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var t;const n=c.indexOf(e.currentTarget)+1;r=null!==(t=c[n])&&void 0!==t?t:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;r=null!==(s=c[n])&&void 0!==s?s:c[c.length-1];break}}null===(n=r)||void 0===n||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(A,{...e,...n}),(0,b.jsx)(f,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(296540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
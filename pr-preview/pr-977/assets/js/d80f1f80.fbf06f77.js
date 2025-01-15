"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[58212],{127012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(474848),o=t(28453),s=t(113490);const r={slug:"staking-and-migration-guide-for-push-v2-rewards-program",title:"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc",authors:["push"],image:"./cover-image.webp",text:"We recently released an article extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026",tags:["Push Protocol","Web3","Yield Farming","Liquidity Mining","Liquidity Pool"]},l=void 0,a={permalink:"/push-website/pr-preview/pr-977/blog/staking-and-migration-guide-for-push-v2-rewards-program",source:"@site/blog/2023-08-03-staking-and-migration/index.md",title:"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc",description:"Cover image of Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc",date:"2023-08-03T00:00:00.000Z",formattedDate:"August 3, 2023",tags:[{label:"Push Protocol",permalink:"/push-website/pr-preview/pr-977/blog/tags/push-protocol"},{label:"Web3",permalink:"/push-website/pr-preview/pr-977/blog/tags/web-3"},{label:"Yield Farming",permalink:"/push-website/pr-preview/pr-977/blog/tags/yield-farming"},{label:"Liquidity Mining",permalink:"/push-website/pr-preview/pr-977/blog/tags/liquidity-mining"},{label:"Liquidity Pool",permalink:"/push-website/pr-preview/pr-977/blog/tags/liquidity-pool"}],readingTime:4.906666666666666,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"staking-and-migration-guide-for-push-v2-rewards-program",title:"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc",authors:["push"],image:"./cover-image.webp",text:"We recently released an article extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026",tags:["Push Protocol","Web3","Yield Farming","Liquidity Mining","Liquidity Pool"]},unlisted:!1,prevItem:{title:"July Monthly Recap\u2728",permalink:"/push-website/pr-preview/pr-977/blog/july-monthly-recap"},nextItem:{title:"New Push Yield Farming Rewards: Full Details\ud83e\ude99",permalink:"/push-website/pr-preview/pr-977/blog/new-push-yield-farming-rewards-full-details"}},h={image:t(734470).A,authorsImageUrls:[void 0]},d=[{value:"How to Stake &amp; Unstake Tokens",id:"how-to-stake--unstake-tokens",level:2},{value:"\ud83d\udd34 PUSH Fee Staking Pool",id:"-push-fee-staking-pool",level:3},{value:"Staking $PUSH Tokens",id:"staking-push-tokens",level:3},{value:"Unstaking $PUSH Tokens",id:"unstaking-push-tokens",level:3},{value:"Staking UNI-V2 LP tokens",id:"staking-uni-v2-lp-tokens",level:3},{value:"Unstaking UNI-V2 LP Tokens",id:"unstaking-uni-v2-lp-tokens",level:3},{value:"How to Claim Rewards",id:"how-to-claim-rewards",level:2},{value:"\ud83d\udd34 Harvesting in PUSH Fee Staking Pool",id:"-harvesting-in-push-fee-staking-pool",level:3},{value:"\ud83d\udfe3 Harvesting in UNI-V2 LP Staking Pool",id:"-harvesting-in-uni-v2-lp-staking-pool",level:3},{value:"How to migrate from the old staking pool to the new pool?",id:"how-to-migrate-from-the-old-staking-pool-to-the-new-pool",level:2},{value:"\ud83d\udd34 For Push Staking Pool Migration",id:"-for-push-staking-pool-migration",level:3},{value:"\ud83d\udfe3 For UNI V2 Staking Pool",id:"-for-uni-v2-staking-pool",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cover image of Staking &amp; Migration Guide for PushV2 Rewards Program\ud83d\udcdc",src:t(201397).A+"",width:"1400",height:"788"})}),"\n",(0,i.jsx)("i",{children:(0,i.jsx)(n.p,{children:"A walkthrough on how to stake, harvest, and migrate your $PUSH tokens."})}),"\n",(0,i.jsxs)(n.p,{children:["We recently released an ",(0,i.jsx)(n.a,{href:"https://push-protocol.medium.com/new-push-yield-farming-rewards-full-details-4a9ff473226d",children:"article"})," extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"UNI-V2 LP Token Staking"}),": Similar to v1 incentive program, this procedure allows users to stake their UNI-V2 LP tokens in our staking contract and earn $PUSH tokens as a reward."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Push Fee Pool Staking"}),": The second procedure is the new staking feature of the Push Core V2 smart contract that allows users to directly stake in the core contract itself and earn rewards in $PUSH Tokens generated from the Fee Pool."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this article, we will now walk you through the specific steps for both the UNI-V2 LP pool and the Push Fee Staking pool:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("i",{children:"How to Stake and Unstake Tokens"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("i",{children:"How to Harvest your rewards"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"How to Migrate your tokens (from the Old Staking pools to the New V2 Rewards Program, with just one click)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For each of these steps, we will first talk about the \ud83d\udd34 ",(0,i.jsx)("b",{children:"Push Fee Staking Pool"})," and then the \ud83d\udfe3 ",(0,i.jsx)("b",{children:"UNI-V2 LP Token Staking Pool"})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-stake--unstake-tokens",children:"How to Stake & Unstake Tokens"}),"\n",(0,i.jsx)(n.h3,{id:"-push-fee-staking-pool",children:"\ud83d\udd34 PUSH Fee Staking Pool"}),"\n",(0,i.jsx)(n.h3,{id:"staking-push-tokens",children:"Staking $PUSH Tokens"}),"\n",(0,i.jsxs)(n.p,{children:["Push Fee Staking Pool allows you to stake your PUSH tokens directly in the ",(0,i.jsx)(n.a,{href:"https://etherscan.io/address/0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE",children:"Push Core contract"})," itself."]}),"\n",(0,i.jsx)(s.bC,{children:(0,i.jsx)("iframe",{width:"100%",height:"100%",style:{borderRadius:"32px"},src:"https://www.youtube.com/embed/eRm-tp6SLVg",title:"Push V2 Fee Staking Pool Tutorial | $PUSH",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsx)(n.p,{children:"Follow the simple steps below to Stake to Push Fee Staking Pool:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://app.push.org/yieldv2",children:"https://app.push.org/yieldv2"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the left-hand part of the UI that displays the ",(0,i.jsx)("b",{children:"PUSH Fee Staking Pool"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)("b",{children:"Stake PUSH"})," button"]}),"\n",(0,i.jsx)(n.li,{children:"Once you click on stake, you will be prompted to enter the PUSH token amount you wish to stake. \ud83d\udc47"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Prompt to enter the PUSH token amount Image",src:t(687368).A+"",width:"662",height:"860"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then, simply click on ",(0,i.jsx)("b",{children:"Approve PUSH"})," button to approve the transfer of your tokens."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once completed, you should have the option to click on the ",(0,i.jsx)("b",{children:"Deposit"})," button right away."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After successful execution of your transaction, you should see the right staked amount in the UI."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Right staked amount in the UI Image",src:t(13490).A+"",width:"930",height:"826"})}),"\n",(0,i.jsx)(n.h3,{id:"unstaking-push-tokens",children:"Unstaking $PUSH Tokens"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Simply click on the ",(0,i.jsx)("b",{children:"Unstake PUSH"})," button to unstake from the staking pool."]}),"\n",(0,i.jsx)(n.li,{children:"After successful execution of your transaction, your tokens should be unstaked from the contract and transferred back to your wallet."}),"\n"]}),"\n",(0,i.jsx)("b",{children:"Important considerations for the unstaking procedure in Push Fee Staking Pool:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The pool ",(0,i.jsx)("b",{children:"doesn\u2019t impose any lock-in period"}),". This means holders are free to stake or un-stake whenever they wish."]}),"\n",(0,i.jsxs)(n.li,{children:["While no lock-in period is imposed, ",(0,i.jsx)("b",{children:"there is a delay period of at least one epoch before a user can withdraw or harvest"}),". This means that any stake (within the current epoch) will require the user to wait T+1 epoch before they can claim rewards or withdraw their harvest. 1 epoch is 21 days long.\nUnstaking tokens in this pool will automatically harvest and transfer any pending reward tokens to your wallet as well.\n\ud83d\udfe3 UNI-V2 LP Staking Pool\nThe UNI-V2 LP staking pool allows you to stake your LP tokens and earn yields for the same."]}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Note:"})," In order to participate in this pool, providing liquidity to the PUSH/ETH Uniswap pool is the first step. To do that, simply:"]})})}),"\n",(0,i.jsx)(s.bC,{children:(0,i.jsx)("iframe",{width:"100%",height:"100%",style:{borderRadius:"32px"},src:"https://www.youtube.com/embed/lqMuOlOGP0s",title:"Push Uniswap V2 LP Staking Pool | $PUSH",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://app.uniswap.org/#/add/v2/ETH/0xf418588522d5dd018b425E472991E52EBBeEEEEE",children:"PUSH/ETH V2 pool on Uniswap"})," (Remember to navigate to Uniswap V2 pool and not V3 pool)."]}),"\n",(0,i.jsx)(n.li,{children:"Add liquidity into the pool with both $PUSH and $ETH."}),"\n",(0,i.jsx)(n.li,{children:"Once added, you should receive UNI-V2 LP tokens in your wallet."}),"\n",(0,i.jsx)(n.li,{children:"You are now ready to stake to these LP tokens into for Push V2 reward program."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"staking-uni-v2-lp-tokens",children:"Staking UNI-V2 LP tokens"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://app.push.org/yieldv2",children:"https://app.push.org/yieldv2"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the right-hand part of the UI that displays ",(0,i.jsx)("b",{children:"Uniswap v2 LP Staking Pool."})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)("b",{children:"Stake $UNI-V2 LP Tokens"})," button"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Click on the &#39;Stake $UNI-V2 LP Tokens&#39; button Image",src:t(857053).A+"",width:"1400",height:"469"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter the amount of LP tokens to be staked, and click on ",(0,i.jsx)("b",{children:"Approve Uni-V2"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once approved, simply click on the ",(0,i.jsx)("b",{children:"Deposit"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Click on the &#39;Deposit&#39; button",src:t(210860).A+"",width:"540",height:"384"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"After successful execution of your transaction, you should the right staked amount in the UI."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unstaking-uni-v2-lp-tokens",children:"Unstaking UNI-V2 LP Tokens"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)("b",{children:"Unstake UNI-V2"})," button."]}),"\n",(0,i.jsx)(n.li,{children:"This will trigger a metamask Pop-UP. Once confirmed you should simply be able to unstake your LP tokens from the pool."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-claim-rewards",children:"How to Claim Rewards"}),"\n",(0,i.jsx)(n.p,{children:"Claiming rewards for both the pools is fairly similar."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the respective pool on ",(0,i.jsx)(n.a,{href:"https://app.push.org/yieldv2",children:"Push Dapp Yield Farming V2 page"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)("b",{children:"Claim Rewards"})," button of the PUSH Fee Staking Pool or UNI-V2 Staking Pool."]}),"\n",(0,i.jsx)(n.li,{children:"Confirm the transaction and rewards will be transferred to your wallet."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, there are a couple of considerations to keep in mind related when harvesting rewards."}),"\n",(0,i.jsx)(n.h3,{id:"-harvesting-in-push-fee-staking-pool",children:"\ud83d\udd34 Harvesting in PUSH Fee Staking Pool"}),"\n",(0,i.jsx)(n.p,{children:"The very first claim reward procedure for this pool shall include two transactions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1st Transaction is ",(0,i.jsx)("b",{children:"to Set Holder Delegation for the Push Core Contract address."})]}),"\n",(0,i.jsxs)(n.li,{children:["2nd transaction is to trigger the ",(0,i.jsx)("b",{children:"primary harvest function of the Push core contract"})," to release the rewards."]}),"\n"]}),"\n",(0,i.jsx)("b",{children:"What exactly is Setting Holder Delegation?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The $PUSH token has a time-weightage feature within itself which allows the contract to calculate the holder weight of a $PUSH token holder based on how long he/she has been holding the token."}),"\n",(0,i.jsx)(n.li,{children:"During the harvest, the core contract is designed to be capable of updating the holder weight of the caller to the latest block."}),"\n",(0,i.jsxs)(n.li,{children:["Therefore, this ",(0,i.jsx)("b",{children:"set holder delegation"}),"transaction approves the main Push Core contract to be capable of updating holder weight whenever needed."]}),"\n",(0,i.jsx)(n.li,{children:"It should be noted that this permission can be revoked anytime by the user."}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsx)("i",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Note:"})," The setting holder delegation is a one-time process and only takes place during the very first instance of claiming rewards."]})})}),"\n",(0,i.jsx)(n.h3,{id:"-harvesting-in-uni-v2-lp-staking-pool",children:"\ud83d\udfe3 Harvesting in UNI-V2 LP Staking Pool"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The steps for harvesting in UNI-V2 LP Staking Pool are identical to that of harvesting in the PUSH Fee Staking Pool"}),"\n",(0,i.jsxs)(n.li,{children:["Go to the UNI-V2 LP Pool on ",(0,i.jsx)(n.a,{href:"https://app.push.org/yieldv2",children:"Push Dapp Yield Farming V2 page"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Click on the Claim Rewards button of the UNI-V2 Staking Pool."}),"\n",(0,i.jsx)(n.li,{children:"Confirm the transaction and rewards will be transferred to your wallet."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-migrate-from-the-old-staking-pool-to-the-new-pool",children:"How to migrate from the old staking pool to the new pool?"}),"\n",(0,i.jsx)(n.p,{children:"If you\u2019re an early holder of $PUSH, chances are you\u2019ve staked in the first rewards program."}),"\n",(0,i.jsx)(n.p,{children:"If that\u2019s the case for you, the migration feature is specifically designed to provide you with a smooth and easy procedure to shift from the old staking pool to the new v2 staking pool."}),"\n",(0,i.jsx)(s.bC,{children:(0,i.jsx)("iframe",{width:"100%",height:"100%",style:{borderRadius:"32px"},src:"https://www.youtube.com/embed/a3QDLsT0VRM",title:"Push Migration Guide | $PUSH",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsx)(n.p,{children:"Migration from old to new pools requires 3 simple transactions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Unstaking from old contracts:"})," This transaction withdraws your staked tokens from the old contracts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Approval of tokens:"})," This ensures you approve the new staking pool contracts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("b",{children:"Staking into new pool:"})," The final transaction ensures a successful deposit of your tokens to the new staking pools."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In order to perform the migration procedure, please follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://app.push.org/yieldv2",children:"https://app.push.org/yieldv2"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)("b",{children:"Yield Farming V1 (Deprecated)"})," section."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Yield Farming V1 (Deprecated) Image",src:t(362447).A+"",width:"1400",height:"509"})}),"\n",(0,i.jsx)(n.h3,{id:"-for-push-staking-pool-migration",children:"\ud83d\udd34 For Push Staking Pool Migration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Simply go to the Push Staking Pool section"}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)("b",{children:"Migrate to PUSH Fee Pool"})," button"]}),"\n",(0,i.jsxs)(n.li,{children:["After the above-mentioned 3 transactions, your staked tokens will be migrated from the previous $PUSH Token staking contract to the new $PUSH Fee Staking Pool ",(0,i.jsx)("b",{children:(0,i.jsx)("i",{children:"(which essentially is the main Push Core contract itself)."})})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"-for-uni-v2-staking-pool",children:"\ud83d\udfe3 For UNI V2 Staking Pool"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The procedure remains the same as mentioned above."}),"\n",(0,i.jsx)(n.li,{children:"However, in this migration, your tokens will be staked in the new UNI-V2 Staking Pool."}),"\n"]}),"\n",(0,i.jsx)("blockquote",{children:(0,i.jsxs)("i",{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Note:"})," Unstaking tokens from old staking contracts doesn\u2019t ensure the claiming of pending rewards. Make sure you claim pending rewards (if any) from old staking pools after the migration is completed."]}),(0,i.jsx)(n.p,{children:"In order to claim any available pending reward from your previous pools, you can click on the Claim Rewards button of that respective pool in the Yield Farming V1 section."})]})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},734470:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cover-image-a05a3cebad4e5073c6f41dfbd535a145.webp"},201397:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cover-image-a05a3cebad4e5073c6f41dfbd535a145.webp"},687368:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/staking-pool-2f198d73e610f9795e64283ac6878cd8.webp"},13490:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/staking-pool2-173f59c13383fa218a340b531c2f71dc.webp"},857053:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/staking-pool3-271270cbb0a00c58fae918e72cb03c6f.webp"},210860:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/webp;base64,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"},362447:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/staking-pool5-de325138d37094b636e896ee80a9065c.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(296540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
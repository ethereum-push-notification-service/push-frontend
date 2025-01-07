"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[78171],{854792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(474848),a=t(28453);const o={slug:"randomized-node-selection-push-chain",title:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",authors:["push"],image:"./cover-image.webp",description:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",text:"One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.",tags:["Push Chain","Push Chain Nodes","Parallel Validators"]},i=void 0,r={permalink:"/push-website/pr-preview/pr-965/blog/randomized-node-selection-push-chain",source:"@site/blog/2024-12-09-randomized-node-selection-push-chain/index.md",title:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",description:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",date:"2024-12-09T00:00:00.000Z",formattedDate:"December 9, 2024",tags:[{label:"Push Chain",permalink:"/push-website/pr-preview/pr-965/blog/tags/push-chain"},{label:"Push Chain Nodes",permalink:"/push-website/pr-preview/pr-965/blog/tags/push-chain-nodes"},{label:"Parallel Validators",permalink:"/push-website/pr-preview/pr-965/blog/tags/parallel-validators"}],readingTime:4.633333333333334,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"randomized-node-selection-push-chain",title:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",authors:["push"],image:"./cover-image.webp",description:"\ud83d\udc4b Randomized Parallel Validators of Push Chain",text:"One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.",tags:["Push Chain","Push Chain Nodes","Parallel Validators"]},unlisted:!1,prevItem:{title:"Benchmarking Push Chain : Scaling with Validator Nodes",permalink:"/push-website/pr-preview/pr-965/blog/parallel-validators-and-dynamic-sharding"},nextItem:{title:"Understand Proof of Stake (POS) and Push Chain PoS",permalink:"/push-website/pr-preview/pr-965/blog/understand-proof-of-stake-and-push-chain"}},d={image:t(580682).A,authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Why do we need Randomness?",id:"why-do-we-need-randomness",level:2},{value:"A Glance at Push Nodes",id:"a-glance-at-push-nodes",level:2},{value:"How Randomness Is Used to Enhance the Security of Push Chain",id:"how-randomness-is-used-to-enhance-the-security-of-push-chain",level:2},{value:"Now, let\u2019s dive deeper into the Randomness of the Push Chain:",id:"now-lets-dive-deeper-into-the-randomness-of-the-push-chain",level:2},{value:"1. <strong>Generation of a Random Token:</strong>",id:"1-generation-of-a-random-token",level:3},{value:"2. <strong>The SDK Requests for a Random Token</strong>",id:"2-the-sdk-requests-for-a-random-token",level:3},{value:"3. <strong>Randomized Selection of Validators</strong>",id:"3-randomized-selection-of-validators",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Cover Image of \ud83d\udc4b Randomized Parallel Validators of Push Chain",src:t(861459).A+"",width:"1600",height:"900"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network."}),"\n",(0,s.jsxs)(n.p,{children:["Achieving this is no small task. It involves many essential components that ensure the network remains secure and fair, and among the most critical of these is ",(0,s.jsx)(n.strong,{children:"randomness"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"At its core, randomness is the absence of patterns or predictability in events. It's what makes a dice roll uncertain, ensures fairness in games, and strengthens the cryptographic algorithms that secure modern systems. In decentralized networks, randomness serves as a cornerstone of security and fairness, helping to prevent bias and manipulation."}),"\n",(0,s.jsx)(n.p,{children:"In this article, we delve into the importance of randomness in decentralized networks and explore how Push Nodes use randomness to bolster the security of the Push Chain."}),"\n",(0,s.jsx)(n.h2,{id:"why-do-we-need-randomness",children:"Why do we need Randomness?"}),"\n",(0,s.jsx)(n.p,{children:"To begin with, let\u2019s explore why randomness is so important in decentralized networks."}),"\n",(0,s.jsx)(n.p,{children:"As mentioned earlier, decentralized networks lack a central authority. Instead, they rely on a distributed group of nodes spread across the globe. These nodes are responsible for performing various actions to ensure the network remains operational."}),"\n",(0,s.jsxs)(n.p,{children:["For the network to stay secure and fair, the selection of nodes for specific tasks must happen in a decentralized and unbiased manner. This is where ",(0,s.jsx)(n.strong,{children:"randomness"})," becomes crucial."]}),"\n",(0,s.jsx)(n.p,{children:"In decentralized systems, randomness ensures unpredictability in key processes, such as selecting validators or generating cryptographic keys. This unpredictability is vital to prevent malicious actors from manipulating the system or gaining undue control. For example, in consensus mechanisms like Proof of Stake, the random selection of validators ensures that no single participant can dominate the process, preserving the network's decentralized nature."}),"\n",(0,s.jsxs)(n.p,{children:["Randomness also strengthens the resilience of blockchains by making it harder for attackers to predict or influence outcomes. This unpredictability guards against attacks like ",(0,s.jsx)(n.strong,{children:"Sybil attacks"})," (where adversaries create fake identities) or ",(0,s.jsx)(n.strong,{children:"collusion"})," (where groups conspire to take control of the network)."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, randomness plays a key role in promoting fairness. It ensures that every participant in the network has an equal chance to contribute and benefit, regardless of their resources or influence."}),"\n",(0,s.jsx)(n.p,{children:"With this understanding of how crucial randomness is, let\u2019s explore how Push Nodes leverage randomness to enhance the security and fairness of the Push Chain."}),"\n",(0,s.jsx)(n.h2,{id:"a-glance-at-push-nodes",children:"A Glance at Push Nodes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://push.org/blog/explaining-push-nodes/",children:"Push Nodes"}),"\xa0are a significant step towards the decentralized infrastructure for web3\u2019s leading communication layer, Push Network. This network is designed to facilitate secure and efficient movement of web3 notifications."]}),"\n",(0,s.jsx)(n.p,{children:"The Push Chain comprises different types of nodes such as Validator Nodes, Storage Nodes, and Archival Nodes. A smart contract guards the network to maintain node staking and slashing. This is where the PUSH token is used."}),"\n",(0,s.jsx)(n.h2,{id:"how-randomness-is-used-to-enhance-the-security-of-push-chain",children:"How Randomness Is Used to Enhance the Security of Push Chain"}),"\n",(0,s.jsx)(n.p,{children:"In this section, we will specifically understand the complete mechanism of how a transaction is submitted onto Push Chain and the role of randomness involved in the process."}),"\n",(0,s.jsx)(n.p,{children:"In the Push Chain, the role of randomization is incorporated at multiple levels which allows the network to prevent centralization while ensuring that it remains resilient against a variety of attacks."}),"\n",(0,s.jsx)(n.p,{children:"A crucial security mechanism of the Push Chain is the randomized selection of validators for transaction validation or block production. This mechanism leverages cryptographic randomness to ensure an unpredictable selection of validators &\xa0attestants (who verify whether or not a transaction is legit) to enhance the network\u2019s resilience and fairness."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A brief overview of the process looks something like this:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To send a transaction to the network, the SDK/sender must attach a randomly generated token number to the transaction."}),"\n",(0,s.jsx)(n.li,{children:"To fetch this token, the SDK can request the same from any validator."}),"\n",(0,s.jsx)(n.li,{children:"Once received, the SDK attaches this token to the transaction and sends it to the network."}),"\n",(0,s.jsx)(n.li,{children:"The network then uses this random token to cryptographically decide the specific validator to verify the particular transaction for further processing."}),"\n",(0,s.jsx)(n.li,{children:"Additionally, the validator also randomly decides the validator set responsible for attesting to the transaction."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"now-lets-dive-deeper-into-the-randomness-of-the-push-chain",children:"Now, let\u2019s dive deeper into the Randomness of the Push Chain:"}),"\n",(0,s.jsx)(n.p,{children:"The Push SDK selects a random validator (VR1) to generate a special signed (RANDX) hex token."}),"\n",(0,s.jsx)(n.p,{children:"The generation is performed as follows:"}),"\n",(0,s.jsxs)(n.h3,{id:"1-generation-of-a-random-token",children:["1. ",(0,s.jsx)(n.strong,{children:"Generation of a Random Token:"})]}),"\n",(0,s.jsx)(n.p,{children:"The network is designed to ensure that a random token cannot merely be generated by a single validator. Instead, it must be a combined effort as every random token is ideally a collection of digitally signed pieces of random numbers provided by specific validators in the network."}),"\n",(0,s.jsxs)(n.p,{children:["To determine the exact number of such pieces required to form the token, the Validator.sol smart contract defines a parameter called\xa0",(0,s.jsx)(n.code,{children:"required_random_number"}),". This indicates the number of required random peers whose signed values each validator must hold, at a given time. Additionally, the contract also defines an\xa0",(0,s.jsx)(n.code,{children:"expiration_time"}),"\xa0parameter that defines the expiry time for these tokens which helps ensure that only freshly created tokens can be used for the creation of random tokens."]}),"\n",(0,s.jsx)(n.p,{children:"It should be kept in mind that validators in the network periodically ping their peers to collect and exchange signed random values. The collected value from each validator is a combination of the random value itself and the validator's signature, ensuring it can be verifiable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"signedRandomValue = value + validatorSignature;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As a result, at any given moment the validators should have a collection of signed random values by their peers, i.e.,\xa0",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"signedRandomValue[]."})})]}),"\n",(0,s.jsx)(n.p,{children:"Once a validator has accumulated the necessary signed random values, it can generate the random token. This token is derived from the network's collective randomness using the following formula:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"RANDX_Token = XOR(sha(signedRandomValue[i]))for all i\n\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"2-the-sdk-requests-for-a-random-token",children:["2. ",(0,s.jsx)(n.strong,{children:"The SDK Requests for a Random Token"})]}),"\n",(0,s.jsx)(n.p,{children:"Next, now let\u2019s understand what happens when the SDK requests for a random token."}),"\n",(0,s.jsx)(n.p,{children:"As previously mentioned, before sending any transaction to the network, the SDK\xa0requests for a random token that must be attached with the transaction being sent."}),"\n",(0,s.jsx)(n.p,{children:"Now, since a random token value has already been generated (as mentioned in step 1), any validator can provide this random token to the SDK."}),"\n",(0,s.jsx)(n.p,{children:"The SDK then attaches this random token to the transaction payloads and sends the transaction to the network."}),"\n",(0,s.jsxs)(n.h3,{id:"3-randomized-selection-of-validators",children:["3. ",(0,s.jsx)(n.strong,{children:"Randomized Selection of Validators"})]}),"\n",(0,s.jsx)(n.p,{children:"This random token attached to the transaction plays a crucial role in randomly deciding which validator will process the transaction. With this token, the SDK deciphers the validator ID, to whom it must send the transaction for further processing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"validator_id = f( RANDX_TOKEN, contract_defaults)\n\n//OUTPUT looks like:\nvalidator_id = v1\n\nwhere contractdefault parameters could be:\na. min required quantity of random numbers,\nb. expiration time,\nc. a minimum number of peers that acknowledge the validator's online status.\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Upon receiving the transaction, the validator checks the random token in the transaction\u2019s payload and validates it to confirm that it has been correctly assigned the role of handling this transaction."}),"\n",(0,s.jsxs)(n.p,{children:["In case the validator identifies that it has been wrongly chosen,\xa0",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"it can reject the transaction."})})]}),"\n",(0,s.jsx)(n.p,{children:"Once the accurate assignment of the validator is confirmed, the validator now creates a similar randomized process for creating a list of validators who must attest to the transaction being processed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"vlist = f(RANDX_Token_2nd, contract_defaults);\n\n// Output looks like this:\n(vlist = V2), V50, V11, V8, V38, V17, V29;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This list of validators is also responsible for verifying its\xa0",(0,s.jsx)(n.strong,{children:"legitimacy."})]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"To summarize, the entire process detailed above adds a security layer with the inclusion of randomization at multiple levels, i.e.:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1st Level:"}),"\xa0The initial randomization starts with the SDK choosing any random validator to request for a token to be attached to the transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"2nd Level: A token is generated"}),"\xa0using digitally signed pieces of random values from multiple random validators instead of relying on any single actor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"3rd Level: A specific validator is randomly selected"}),"\xa0to create the token to be attached before the transaction occurs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"4th Level:"}),"\xa0The final level of randomization determines which specific validator (VR2) will process a transaction and which validator set will act as attestants to verify the transaction."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This multi-level randomness ensures that at every step, the network is secure, and fair, while continuing to operate in a completely decentralized fashion."}),"\n",(0,s.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},580682:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cover-image-c65e48013a7422b4d8c7bb468b531331.webp"},861459:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cover-image-c65e48013a7422b4d8c7bb468b531331.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(296540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
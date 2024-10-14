"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[86958],{659332:e=>{e.exports=JSON.parse('{"title":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","description":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","frontMatter":{"slug":"ama-with-wormhole-for-cross-chain-requests-pre-pip","title":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","authors":["push"],"image":"./cover-image.webp","description":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","text":"Last week, we debuted Pre-PIP 3 (Push Improvement Proposal) for Cross Chain Requests on the [Push DAO forum and invited the team to chat about it, since their tech is a major part of this upgrade.","tags":["Push Protocol","Web3","Blockchain Technology"]},"content":{"id":"ama-with-wormhole-for-cross-chain-requests-pre-pip","metadata":{"permalink":"/push-website/pr-preview/pr-904/blog/ama-with-wormhole-for-cross-chain-requests-pre-pip","source":"@site/blog/2024-08-09-cross-chain-request-ama-with-wormhole/index.md","title":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","description":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","date":"2024-08-09T00:00:00.000Z","formattedDate":"August 9, 2024","tags":[{"label":"Push Protocol","permalink":"/push-website/pr-preview/pr-904/blog/tags/push-protocol"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-904/blog/tags/web-3"},{"label":"Blockchain Technology","permalink":"/push-website/pr-preview/pr-904/blog/tags/blockchain-technology"}],"readingTime":3.04,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"ama-with-wormhole-for-cross-chain-requests-pre-pip","title":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","authors":["push"],"image":"./cover-image.webp","description":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","text":"Last week, we debuted Pre-PIP 3 (Push Improvement Proposal) for Cross Chain Requests on the [Push DAO forum and invited the team to chat about it, since their tech is a major part of this upgrade.","tags":["Push Protocol","Web3","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Now anyone can write for Push","permalink":"/push-website/pr-preview/pr-904/blog/now-anyone-can-write-for-push-protocol"},"nextItem":{"title":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","permalink":"/push-website/pr-preview/pr-904/blog/cross-chain-requests-pre-pip"}},"content":"![Cover Image of Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nLast week, we debuted Pre-PIP 3 (Push Improvement Proposal) for [Cross Chain Requests](https://push.org/blog/cross-chain-requests-pre-pip/) on the [Push DAO forum](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794) and invited the [Wormhole](https://wormhole.com/) team to chat about it, since their tech is a major part of this upgrade. \\n\\nHere\u2019s a 3-minute recap for those who couldn\u2019t join in:\\n\\nWe kicked off the [spaces](https://x.com/pushprotocol/status/1819017203284578483) with a bit of alpha on Push\u2019s V3 Smart Contracts and what else is coming up from our side as the 2024 rolls on:\\n\\n1. **Launch of On-Chain Governance**: The V3 contracts will introduce on-chain governance, allowing the community to govern smart contract execution.\\n2. **Optimized Contracts:** Push\u2019s V3 contracts will be more efficient. They\u2019ll be capable of handling requests from any chain, which will then be relayed to the Ethereum-based Push core contracts for validations and state changes. \\n3. **Upgraded Incentivized Chats:** Users will be able to initiate and receive paid chats from any chain to any chain, as long as both are supported by the framework. \\n4. **Cross-Chain Requests (CCR):** This feature allows users to perform actions like creating channels or requests on any blockchain, rather than just on Ethereum. This move is essential for Push to reach a broader audience across different blockchains, including Layer 2 (L2), Layer 3 (L3), and app-specific chains, without increasing friction in the user\u2019s experience with our tech.\\n5. A new hub for builders: All of this will enable a new hub for builders to experiment and widen the boundaries of innovation with web3-based consumer apps. \\n\\nWe then moved on to Wormhole\u2019s views on the significance of the integration of Push\u2019s smart contracts with their tech: \\n\\n### Why Push x Wormhole?\\n\\nThe integration centers on making the $PUSH token natively fungible across all of the connected chains that Push wants, while enabling native-messaging of all sorts on all involved. We came up with this new multi-chain framework, the Native Token Transfer framework, to enable seamless token transfers across different chains without the need for liquidity pools or complex bridging mechanisms. We both agree that the industry needs to involve into one that is truly interoperable. This is a major step in that direction. \\n\\n### Why is Pre-PIP 3/CCR important?\\n\\nThe proposal includes detailed research and considerations, focusing on minimal changes to the existing architecture, a security-first approach, and how the technical aspects of Wormhole will enable CCR. This includes the deployment of manager and transceiver contracts on different chains and how these contracts interact with Push\u2019s existing infrastructure.\\n\\n### Why did Push choose Wormhole for this integration?\\n\\n1. **Native Token Transfer (NTT) Framework:** This framework allows for seamless token transfers across different chains without the need for liquidity pools or complex bridging mechanisms.\\n2. **Security:** Wormhole\u2019s framework is battle-tested and includes additional security measures like rate limiting.\\n3. **Future-Proofing:** The NTT framework allows Push to maintain governance control over its tokens across multiple chains, which is crucial for its ecosystem and the evolution of its DAO. \\n\\n### Overview of the Wormhole Transceiver and Security Framework:\\n\\n1. **Wormhole Transceiver:** This utilizes the general message passing layer of Wormhole, which relies on a security model with 19 independent \\"guardians\\" who verify messages. At least 13 of the 19 guardians must agree to validate a message, making the system highly secure. \\n2. **Flexibility and Future-Proofing: Wormhole\u2019s** system allows for the adding of other transceivers or message verification protocols, such as off-chain processes or ZK transceivers for enhanced security.\\n3. **Overall Security and Reliability:** Wormhole has processed over a billion messages while maintaining consistently high security and resilience across its network. The platform already provably supports the future of secure message and token transfers across chains.\\n\\n### Push Protocol and Wormhole Integration:\\n\\n1. **Security-First Approach:** Push Protocol has always and continues to prioritize security, ensuring that the deployment of tokens and messages on multiple chains is always protected and that protection always increases. \\n2. **Cross-Chain Request (CCR):** With CCR live, users will be able to execute actions (e.g., creating channels) across different chains without leaving their native chain or bridging tokens. The integration with Wormhole makes this process more seamless and efficient.\\n3. **User Experience:** Post-CCR\u2019s launch, actions like channel creation will become more straightforward, with users able to operate across chains without the hassle of managing tokens or gas fees on multiple networks to get to their intended destination. \\n\\n### The Greater Implications of CCR for Developers and Builders:\\n\\n1. **Unified API and Multi-Chain Notifications:** Developers can build once and notify everywhere, simplifying cross-chain interactions and enhancing user engagement. This reduces development complexity and improves resource management.\\n2. **Enhanced Functionality and Interoperability:** The integration allows for smart contracts on one chain to trigger notifications on another, improving the overall functionality of decentralized applications (dApps).\\n3. **Security Enhancements:** Wormhole\u2019s security features, like rate-limiting, access control, and defense mechanisms, ensure that cross-chain communications remain verifiably secure.\\n\\nThe integration of Push Protocol\'s Cross-Chain Requests (CCR) with Wormhole represents a pivotal advancement in decentralized technology. This advancement strengthens Push\u2019s security, raises its scalability, and broadens its reach across multiple blockchains, paving the way for a more connected and user-friendly Web3 experience for all. As Push continues to innovate, its partnership with Wormhole ensures that it remains on the forefront. \\n\\nTo any of you who are looking to build the future of consumer applications, reach out to our team across our networks, and we\u2019ll help you get started as CCR takes off!"}}')}}]);
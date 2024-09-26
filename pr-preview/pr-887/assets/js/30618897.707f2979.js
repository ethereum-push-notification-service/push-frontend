"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[36617],{728785:e=>{e.exports=JSON.parse('{"title":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","description":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","frontMatter":{"slug":"cross-chain-requests-pre-pip","title":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","authors":["push"],"image":"./cover-image.webp","description":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","text":"Push Protocol, the leading web3 communication layer, has proposed a major upgrade with the introduction of Pre-PIP (Push Improvement Proposal) for Cross-Chain Requests (CCR).","tags":["Push Protocol","Web3","Blockchain Technology"]},"content":{"id":"cross-chain-requests-pre-pip","metadata":{"permalink":"/push-website/pr-preview/pr-887/blog/cross-chain-requests-pre-pip","source":"@site/blog/2024-07-30-pre-pip-for-ccr/index.md","title":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","description":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","date":"2024-07-30T00:00:00.000Z","formattedDate":"July 30, 2024","tags":[{"label":"Push Protocol","permalink":"/push-website/pr-preview/pr-887/blog/tags/push-protocol"},{"label":"Web3","permalink":"/push-website/pr-preview/pr-887/blog/tags/web-3"},{"label":"Blockchain Technology","permalink":"/push-website/pr-preview/pr-887/blog/tags/blockchain-technology"}],"readingTime":3.6233333333333335,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"cross-chain-requests-pre-pip","title":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","authors":["push"],"image":"./cover-image.webp","description":"Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:","text":"Push Protocol, the leading web3 communication layer, has proposed a major upgrade with the introduction of Pre-PIP (Push Improvement Proposal) for Cross-Chain Requests (CCR).","tags":["Push Protocol","Web3","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3","permalink":"/push-website/pr-preview/pr-887/blog/ama-with-wormhole-for-cross-chain-requests-pre-pip"},"nextItem":{"title":"Push Protocol Monthly Updates: A Look Back at June","permalink":"/push-website/pr-preview/pr-887/blog/monthly-updates-june-2024"}},"content":"![Cover Image of Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nPush Protocol, the leading web3 communication layer, has proposed a major upgrade with the introduction of [Pre-PIP (Push Improvement Proposal) for Cross-Chain Requests (CCR)](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794). This proposal aims to enable users to interact with Push Protocol smart contracts on the Ethereum blockchain from any blockchain network, whether it\u2019s EVM-based or non-EVM. Once CCR is implemented, users will be able to stay on their preferred blockchain while accessing Push Protocol\'s services, offering enhanced convenience and flexibility.\\n\\n### What is CCR (Cross-Chain Requests) and its impact?\\nIn the current Push Protocol architecture, performing any important task related to channels like creating a channel, modification of a channel, changing a channel\u2019s state, etc, requires the user/protocol to interact with the Push Smart Contract which is only deployed on Ethereum Blockchain. \\n\\nThis led to a bad user experience for the user/protocol as they need to switch to the Ethereum network for any interaction they might want to do with the Push Core contract. This is currently a friction point for users who primarily operate on other EVM-compatible chains and even non-EVM users.\\n\\nCross-chain requests will eliminate the need to switch to the Ethereum Network making it possible to create a channel, use Push services, or interact with Push Protocol\u2019s Ethereum smart contract from any blockchain they like, whether it\u2019s another EVM chain or non-EVM chain.\\n\\nAdditionally, this was not just something that users faced but more for Push Protocol as it limits Push Protocol\'s ability to tap into other chains and help solve the communication/notification issues of those chains adequately. This constraint hinders the protocol from reaching a broader audience and solving communication issues across diverse blockchain environments.\\n\\nTherefore, by enabling the Cross-Chain Request feature, Push Protocol can primarily significantly enhance the UX for average users as well as channel creators/managers from not just Ethereum but multiple other EVM/Non-EVM chains as well. It also allows the protocol to expand its market reach, attract users from different chains, and foster a more interconnected blockchain ecosystem.\\n\\n### Importance of CCR (Cross-Chain Requests):\\nThe Cross Chain Requests (CCR) feature is crucial for the future success and growth of the Push Protocol:\\n1. **Enhanced User Experience:** The CCR feature will significantly enhance user experience by eliminating the need for users to switch networks or manually bridge tokens to interact with the Push Core contract on Ethereum. This streamlined process will allow users to perform key actions like channel creation and incentivize chat requests directly from their preferred blockchain, reducing both complexity and transaction costs. By making these features accessible from various chains, CCR removes barriers for new and existing users, fostering a more inclusive and user-friendly environment.\\n2. **Broader Reach:** The CCR feature will expand the reach of Push Protocol across the blockchain ecosystem. By enabling interactions from multiple EVM and non-EVM chains, CCR will not only broaden the protocol\'s user base but also tap into diverse blockchain communities that might benefit from Push\u2019s communication and notification features. This increased accessibility helps Push Protocol grow its market presence and integrate with a wider range of blockchain projects, ultimately supporting the development of a more interconnected and collaborative blockchain network.\\n3. **Revolutionizing Web3 Communications**: CCR future-proofs Push Protocol against the rapid evolution of the blockchain space. As new chains and technologies emerge, CCR\u2019s cross-chain capabilities ensure that Push Protocol remains adaptable and relevant. By leveraging established technologies like Wormhole\u2019s NTT framework and Relayers, CCR positions Push Protocol to embrace future advancements and continue delivering value to its users across an ever-expanding blockchain landscape.\\n\\n**Here\u2019s a simple overview of how CCR works:**\\n\\n1. **Initiate Request**: A user on another blockchain (like Polygon) wants to perform an action, such as creating a new channel for sending notifications.\\n2. **Submit Details**: The user uses a special function on the Push Communicator contract on their preferred blockchain to submit the request, providing the necessary details and approving the $PUSH tokens for the action.\\n3. **Send Data and Tokens**: The Push Communicator contract validates the input, creates a message payload, and uses Wormhole Relayers to securely send this payload and the $PUSH tokens to the Push Core contract on Ethereum.\\n4. **Process Request**: On Ethereum, the Push Core contract receives the message and tokens, decodes the request, validates it, and performs the required action.\\n5. **Completion**: The request is completed on Ethereum, and any unused native tokens are refunded to the user on their original blockchain.\\n\\n![Cover Image of Diagram for Cross-Chain Requests](./image1.webp)\\n\\n\\n### Visualizing Channel Creation with the CCR feature\\n\\nImagine Bob, a Polygon user, wants to create a channel for sending notifications. \\n\\nPreviously, he\'d need to switch to Ethereum, bridge tokens, and change networks. With CCR, Bob simply uses the familiar Push Communicator contract on Polygon. \\n\\nThe contract acts as a bridge, relaying Bob\'s request (channel details) and the required PUSH tokens (bridged via Wormhole) to the Push Core contract on Ethereum. \\n\\nAll behind the scenes, without Bob ever leaving Polygon! This creates a seamless experience for users on any chain, opening Push Protocol to a wider audience.\\n\\n### Why Not Just Deploy Push Core Everywhere?\\n\\nWhile putting Push Core on every blockchain might seem easy, it\'s quite tricky. \\n\\nIt would be hard to manage separate fees and keep all the information on different chains in sync, which could even be risky. \\n\\nThat\'s why we\'re improving the existing Push Communicator contracts to handle these requests. We\'ll also use a reliable system called Wormhole to securely send information and tokens between blockchains. This way, everything works smoothly without needing Push Core on every chain. For more details check out [here](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794).\\n\\n### Implementation: How we will build CCR:\\n\\nTo implement Cross-Chain Requests (CCR), we will:\\n\\n1. Enable $Push Token for multi-chain support.\\n2. Build cross-chain support in the Push Communicator and Push Core Contract.\\n3. Use Wormhole\u2019s Relayer Interface and NTT framework for token transfers across chains.\\n4. Equip the Push Communicator to handle cross-chain actions like channel creation and requests.\\n5. Modify the Push Core Contract to process cross-chain payloads.\\n6. Conduct security audits and deploy the updated contracts on the testnet and mainnet.\\n\\nFor more details on the implementation of CCR check out [here](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794).\\n\\n### The Future of Push Protocol:\\n\\nCCR feature is a significant step forward for Push Protocol. It paves the way for a more interconnected and user-friendly communication layer within the ever-expanding blockchain landscape. \\n\\nStay tuned for further updates as we implement CCR and empower users to unlock the full potential of Web3 communication!"}}')}}]);
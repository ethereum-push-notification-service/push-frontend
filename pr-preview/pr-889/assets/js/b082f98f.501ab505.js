"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[44174],{767565:e=>{e.exports=JSON.parse('{"title":"The Role of Randomness in Push Nodes","description":"The Role of Randomness in Push Nodes","frontMatter":{"slug":"the-role-of-randomness-in-push-nodes","title":"The Role of Randomness in Push Nodes","authors":["zaryab"],"image":"./cover-image.webp","description":"The Role of Randomness in Push Nodes","text":"One important aspect of decentralized networks is that they don\u2019t have any central authority that governs their working mechanism.","tags":["Products"]},"content":{"id":"the-role-of-randomness-in-push-nodes","metadata":{"permalink":"/push-website/pr-preview/pr-889/blog/the-role-of-randomness-in-push-nodes","source":"@site/blog/2024-08-26-randomness-in-push-nodes/index.md","title":"The Role of Randomness in Push Nodes","description":"The Role of Randomness in Push Nodes","date":"2024-08-26T00:00:00.000Z","formattedDate":"August 26, 2024","tags":[{"label":"Products","permalink":"/push-website/pr-preview/pr-889/blog/tags/products"}],"readingTime":4.876666666666667,"hasTruncateMarker":true,"authors":[{"name":"Zaryab Afser","url":"https://x.com/zaryab_eth","imageURL":"/assets/blog/authors/authorzaryab.png","key":"zaryab"}],"frontMatter":{"slug":"the-role-of-randomness-in-push-nodes","title":"The Role of Randomness in Push Nodes","authors":["zaryab"],"image":"./cover-image.webp","description":"The Role of Randomness in Push Nodes","text":"One important aspect of decentralized networks is that they don\u2019t have any central authority that governs their working mechanism.","tags":["Products"]},"unlisted":false,"prevItem":{"title":"Cold Start Solutions: Scaling Consumer Crypto","permalink":"/push-website/pr-preview/pr-889/blog/cold-start-solutions-scaling-consumer-crypto"},"nextItem":{"title":"Push Protocol Monthly Updates: A Look Back at July","permalink":"/push-website/pr-preview/pr-889/blog/push-protocol-july-updates"}},"content":"![Cover Image of The Role of Randomness in Push Nodes ](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nOne important aspect of decentralized networks is that they don\u2019t have any central authority that governs their working mechanism. This means, the network must create a system and rules that allows them to not just securely communicate but to also form a consensus on the overall state of the network.\\n\\nWhile it\'s a complicated task and there exists a plethora of imperative ingredients that enable security and fairness in a decentralized network, one of the most significant ones is randomness.\\n\\nRandomness, in its simplest form, refers to the lack of pattern or predictability in events. It\'s a concept that plays a crucial role in various fields, from mathematics and computer science to nature itself. Randomness is what makes a dice roll unpredictable, ensures fairness in games, and powers the algorithms behind secure cryptographic systems. In technology, especially within decentralized networks, randomness serves as a fundamental building block that underpins security and fairness, ensuring that processes are free from bias and manipulation.\\n\\nIn this article, we explore the significance of randomness in decentralized networks and how Push nodes incorporate randomness to enhance the security of the Push network.\\n\\n### Why do we even need Randomness?\\n\\nTo begin with, let\u2019s understand the importance of Randomness in decentralized networks.\\n\\nAs previously mentioned, decentralized networks don\u2019t have a central authority. Instead, they are made of a group of nodes located at different parts of the world. These nodes are responsible to act and perform certain actions in the network to keep it functional.\\n\\nThe selection of nodes to perform specific tasks must happen in a decentralized and fair manner to ensure no single actor in the network is capable of controlling the operations of the network.\\n\\nThis is where randomness plays a critical role.\\n\\nIn such decentralized systems, randomness is used to ensure the unpredictability of various processes, such as selecting validators, generating cryptographic keys, etc. \\n\\nThis unpredictability is essential to prevent malicious actors from gaining control or manipulating the network. For example, in consensus mechanisms like Proof of Stake, a random selection of validators ensures that no single participant can dominate the process, thereby maintaining the decentralized nature of the network involved.\\n\\nRandomness also enhances the resilience of blockchains by making it difficult for attackers to predict or influence outcomes. This unpredictability protects against various attacks, such as Sybil attacks or collusion, where adversaries attempt to gain disproportionate control over a network.\\n\\nMoreover, randomness is vital in achieving fairness as it helps ensure that every participant has an equal opportunity to contribute and benefit from a network, regardless of their resources or influence.\\n\\nNow that we have a basic understanding of how crucial randomness is, let\u2019s understand its how Push Nodes use randomness to enhance their security and fairness.\\n\\n### Quick Glance at Push Nodes\\n\\n[Push Nodes](https://push.org/blog/explaining-push-nodes/) are a significant step towards the decentralized infrastructure for web3\u2019s leading communication layer, the Push Protocol Network. This network is designed to facilitate secure and efficient movement of web3 notifications. \\n\\nThe Push Network comprises different types of nodes such as Validator Nodes, Storage nodes, etc. A smart contract guards the network to maintain node staking and slashing. This is where the PUSH token is used.\\n\\n### How the Push Network uses Randomness to enhance its Security\\n\\nIn this section, we will specifically understand the complete mechanism of how a transaction is submitted onto Push network and the role of randomness involved in the process.\\n\\nIn the Push Network, the role of randomization is incorporated at multiple levels which allows the network to prevent centralization while ensuring that it remains resilient against a variety of attacks. \\n\\nA crucial security mechanism of the Push Chain is the randomized selection of validators for transaction validation or block production. This mechanism leverages cryptographic randomness to ensure an unpredictable selection of validators &\xa0attestants ( *who verify whether or not a transaction is legit* ) to enhance the network\u2019s resilience and fairness.\\n\\nA brief overview of the process looks something like this:\\n\\n- To send a transaction to the network, the SDK/sender must attach a randomly generated token number to the transaction.\\n- To fetch this token, the SDK can request the same from any validator.\\n- Once received, the SDK attaches this token to the transaction and sends it to the network.\\n- The network then uses this random token to cryptographically decide the specific validator to verify the particular transaction for further processing.\\n- Additionally, the validator also randomly decides the validator set responsible for attesting to the transaction.\\n\\n### **Now, let\u2019s dive deeper into the Randomness of the Push Network:**\\n\\nThe Push SDK selects a random validator (VR1) to generate a special signed (RANDX) hex token. \\n\\nThe generation is performed as follows:\\n\\n1. **Generation of a Random Token:**\\n    \\n    The network is designed to ensure that a random token cannot merely be generated by a single validator. Instead, it must be a combined effort as every random token is ideally a collection of digitally signed pieces of random numbers provided by specific validators in the network.\\n    \\n    To determine the exact number of such pieces required to form the token, the Validator.sol smart contract defines a parameter called `*required_random_number`.* This indicates the number of required random peers whose signed values each validator must hold, at a given time. Additionally, the contract also defines an `*expiration_time*` parameter that defines the expiry time for these tokens which helps ensure that only freshly created tokens can be used for the creation of random tokens.\\n    \\n    It should be kept in mind that validators in the network periodically ping their peers to collect and exchange signed random values. The collected value from each validator is a combination of the random value itself and the validator\'s signature, ensuring it can be verifiable.\\n    \\n    ```jsx\\n    signedRandomValue = value + validatorSignature\\n    ```\\n    \\n    As a result, at any given moment the validators should have a collection of signed random values by their peers, i.e., **`signedRandomValue[].`**\\n    \\n    Once a validator has accumulated the necessary signed random values, it can generate the random token. This token is derived from the network\'s collective randomness using the following formula:\\n    \\n    ```jsx\\n    RANDX_Token = XOR(sha(signedRandomValue[i])) for all i\\n    ```\\n    \\n    1. **The SDK Requests for a Random Token** \\n        \\n        Next, now let\u2019s understand what happens when the SDK requests for a random token.\\n        \\n        As previously mentioned, before sending any transaction to the network, the SDK\xa0 requests for a random token that must be attached with the transaction being sent.\\n        \\n        Now, since a random token value has already been generated ( as mentioned in step 1), any validator can provide this random token to the SDK.\\n        \\n        The SDK then attaches this random token to the transaction payloads and sends the transaction to the network.\\n        \\n    2. **Randomized Selection of Validators**\\n        \\n        This random token attached to the transaction plays a crucial role in randomly deciding which validator will process the transaction. With this token, the SDK deciphers the validator ID, to whom it must send the transaction for further processing. \\n        \\n        ```jsx\\n        validator_id = f( RANDX_TOKEN, contract_defaults)\\n        \\n        //OUTPUT looks like: \\n        validator_id = v1\\n        \\n        where contract default parameters could be:\\n        a. min required quantity of random numbers,\\n        b. expiration time,\\n        c. a minimum number of peers that acknowledge the validator\'s online status.\\n        ```\\n        \\n        Upon receiving the transaction, the validator checks the random token in the transaction\u2019s payload and validates it to confirm that it has been correctly assigned the role of handling this transaction. \\n        \\n        In case the validator identifies that it has been wrongly chosen, ***it can reject the transaction.***\\n        \\n        Once the accurate assignment of the validator is confirmed, the validator now creates a similar randomized process for creating a list of validators who must attest to the transaction being processed.\\n        \\n        ```jsx\\n        vlist = f(RANDX_Token_2nd, contract_defaults)\\n        \\n        // Output looks like this:\\n        vlist = V2, V50, V11, V8, V38, V17, V29\\n        ```\\n        \\n        This list of validators is also responsible for verifying its **legitimacy.**\\n        \\n    \\n    ### Summary\\n    \\n    To summarize, the entire process detailed above adds a security layer with the inclusion of randomization at multiple levels, i.e.,:\\n    \\n    - **1st Level:** The initial randomization starts with the SDK choosing any random validator to request for a token to be attached to the transaction.\\n    - **2nd Level: A token is generated** using digitally signed pieces of random values from multiple random validators instead of relying on any single actor.\\n    - **3rd Level: A specific validator is randomly selected** to create the token to be attached in the transaction occurs.\\n    - **4th Level:** The final level of randomization determines which specific validator (VR2) will process a transaction and which validator set will act as attestants to verify the transaction.\\n    \\n    This multi-level randomness ensures that at every step, the network is secure, and fair, while continuing to operate in a completely decentralized fashion."}}')}}]);
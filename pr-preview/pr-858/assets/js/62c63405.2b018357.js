"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[63936],{819379:e=>{e.exports=JSON.parse('{"title":"Hello World: BUIDLing a working EPNS Mobile app","description":"Cover Image of Hello World: BUIDLing a working EPNS Mobile app","frontMatter":{"slug":"hello-world-buid-ling-a-working-epns-mobile-app","title":"Hello World: BUIDLing a working EPNS Mobile app","authors":["push"],"image":"./cover-image.webp","text":"It\u2019s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.","tags":["Ethereum","Solidity","Ethglobal","Notifications","Developer"]},"content":{"id":"hello-world-buid-ling-a-working-epns-mobile-app","metadata":{"permalink":"/push-website/pr-preview/858/blog/hello-world-buid-ling-a-working-epns-mobile-app","source":"@site/blog/2020-05-01-hello-world-buid-ling-a-working/index.md","title":"Hello World: BUIDLing a working EPNS Mobile app","description":"Cover Image of Hello World: BUIDLing a working EPNS Mobile app","date":"2020-05-01T00:00:00.000Z","formattedDate":"May 1, 2020","tags":[{"label":"Ethereum","permalink":"/push-website/pr-preview/858/blog/tags/ethereum"},{"label":"Solidity","permalink":"/push-website/pr-preview/858/blog/tags/solidity"},{"label":"Ethglobal","permalink":"/push-website/pr-preview/858/blog/tags/ethglobal"},{"label":"Notifications","permalink":"/push-website/pr-preview/858/blog/tags/notifications"},{"label":"Developer","permalink":"/push-website/pr-preview/858/blog/tags/developer"}],"readingTime":2.3866666666666667,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"hello-world-buid-ling-a-working-epns-mobile-app","title":"Hello World: BUIDLing a working EPNS Mobile app","authors":["push"],"image":"./cover-image.webp","text":"It\u2019s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.","tags":["Ethereum","Solidity","Ethglobal","Notifications","Developer"]},"unlisted":false,"prevItem":{"title":"EPNS push notifications are never boring","permalink":"/push-website/pr-preview/858/blog/epns-push-notifications-are-never-boring"},"nextItem":{"title":"Push Game Theory Explained","permalink":"/push-website/pr-preview/858/blog/push-game-theory-explained"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of Hello World: BUIDLing a working EPNS Mobile app](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nIt\u2019s another day at [EthGlobal HackMoney hackathon](https://www.ethglobal.co/) and we are back with more detail and further progress.\\n\\nWhile most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.\\n\\nThe reasons? We are quite happy with the app specs and don\u2019t think that will change anytime soon while we wanted to think and iterate a bit more on smart contract so we choose this route. Without further ado, Let\u2019s dive into how we are going to create the magic in the mobile app.\\n\\n### Features\\n\\nThe EPNS mobile app is built using react native and provides the following features:\\n\\n- App should be able to receive push notifications.\\n- App should be able to connect the user\u2019s wallet (singular at the moment) in a secure manner.\\n- App should connect the user wallet to the push notification device tokens that are generated by Apple Push Notification Service or Android Push Notification Service.\\n- App should be able to send this information to the epns server in a secure format.\\n- App should be able to fetch user notifications (kind of like emails) that were already delivered to them.\\n\\n![Notification announcement Image](./image-1.webp)\\n<ImageText>We all get a notification, woohoo !!</ImageText>\\n\\n### Tech Specs\\n\\nMobile push notifications use [device tokens](https://help.pushwoosh.com/hc/en-us/articles/360000364923-What-is-a-Device-token-) for registration of the device and the push notification server then sends out mass or specific messages using these device tokens. For EPNS to work, we need to register these device tokens as well as the wallet to which they belong to.\\n\\nFor the EPNS Service to work, the following modules need to be built:\\n\\n- Storing User Wallet Private Key (Offline on the User\u2019s Device)\\n- Mapping user\u2019s wallet address to device tokens\\n- Communicate with the epns server to verify and store these device tokens (mapped to wallet address)\\n- Handling Incoming Push Notifications\\n- Fetching Previous Notifications of the User\\n\\n#### Storing User Wallet Private Key (Offline on the User\u2019s Device)\\n\\nThe app needs to store the user\u2019s wallet private key to decrypt the message received by the user and to encrypt the token registration process. This ensures that the epns server only maps the verified device tokens to the user wallet.\\n\\nFurthermore, we need to provide either biometric or passcode based security to the user in the app since the app is storing sensitive user credentials. We will also be storing these user credentials in an encrypted format, we will mostly be using [React-Native-Keychain](https://github.com/oblador/react-native-keychain) for this.\\n\\n#### Mapping user\u2019s wallet address to device tokens\\n\\nOnce a user has imported the wallet, the device tokens which are generated would be mapped to the wallet of the user.\\n\\n#### Communicate with the epns server to verify and store these device tokens (mapped to wallet address)\\n\\nWe will mostly be using [Eth-Crypto](https://github.com/pubkey/eth-crypto) to handle the secure verification process.\\n\\nCurrent proposal is to send the operation code as <b>Register</b> along with the device token as the signature of the user using the above library and the public wallet address. The server will first decrypt the hash to find the public wallet address of the user and will only proceed if the public wallet address sent matches with the decrypted address of the public wallet. This ensures that spoofing can\u2019t be done by any user to receive notifications meant for the intended recipients.\\n\\nTo know more about the server and it\u2019s architecture, please head to [[epns-push-notification-server repo](https://github.com/ethereum-push-notification-system)]\\n\\n#### Handling Incoming Push Notifications\\n\\nThe push notification handling (for when the app is open) will also be built to handle notifications received by the users when they are inside the app.\\n\\n#### Fetching Previous Notifications of the User\\n\\nTBA. We are still contemplating storing a cache on the epns server or handle it alternatively, community brainstorming is welcome :)\\n\\nTLDR; try out the (not so complete work in progress) [react native](https://github.com/ethereum-push-notification-system/epns-mobile-app) app.\\n\\nPlease feel free to share your support and amazing feedback. If you liked this article, consider reading our previous posts as well!\\n\\n[EPNS General specs](https://medium.com/@epnsdapp/building-ethereum-protocol-notification-system-d406f0efdba0)\\n\\n[EPNS Game theory](https://medium.com/@epnsdapp/epns-game-theory-explained-25425bbe4eae)\\n\\nConnect with us if you have any questions!"}}')}}]);
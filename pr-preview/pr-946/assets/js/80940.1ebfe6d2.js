"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[80940],{71995:(e,t,s)=>{s.d(t,{mb:()=>C,Ao:()=>b,vZ:()=>w,pV:()=>B,D8:()=>V,IN:()=>I,jL:()=>f,lH:()=>G,dC:()=>X});Symbol();const o=Symbol();const n=Object.getPrototypeOf,a=new WeakMap,r=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),i=(e,t=!0)=>{a.set(e,t)},l=e=>"object"==typeof e&&null!==e,c=new WeakMap,d=new WeakSet,p=(e=Object.is,t=(e,t)=>new Proxy(e,t),s=e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=new WeakMap,p=(e,t,s=n)=>{const o=a.get(e);if((null==o?void 0:o[0])===t)return o[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(r,!0),a.set(e,[t,r]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(r,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))i(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=p(e,t(),s)}Object.defineProperty(r,t,n)})),Object.preventExtensions(r)},u=new WeakMap,h=[1,1],g=n=>{if(!l(n))throw new Error("object required");const a=u.get(n);if(a)return a;let i=h[0];const m=new Set,f=(e,t=++h[0])=>{i!==t&&(i=t,m.forEach((s=>s(e,t))))};let b=h[1];const y=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],f(o,s)},w=new Map,v=e=>{var t;const s=w.get(e);s&&(w.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),W={deleteProperty(e,t){const s=Reflect.get(e,t);v(t);const o=Reflect.deleteProperty(e,t);return o&&f(["delete",[t],s]),o},set(t,n,a,i){const p=Reflect.has(t,n),h=Reflect.get(t,n,i);if(p&&(e(h,a)||u.has(a)&&e(h,u.get(a))))return!0;v(n),l(a)&&(a=(e=>r(e)&&e[o]||null)(a)||a);let b=a;if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,f(["resolve",[n],e])})).catch((e=>{a.status="rejected",a.reason=e,f(["reject",[n],e])}));else{!c.has(a)&&s(a)&&(b=g(a));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(m.size){const s=t[3](y(e));w.set(e,[t,s])}else w.set(e,[t])})(n,e)}return Reflect.set(t,n,b,i),f(["set",[n],a,h]),!0}},C=t(I,W);u.set(n,C);const O=[I,(e=++h[1])=>(b===e||m.size||(b=e,w.forEach((([t])=>{const s=t[1](e);s>i&&(i=s)}))),i),p,e=>{m.add(e),1===m.size&&w.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](y(s));w.set(s,[e,o])}));return()=>{m.delete(e),0===m.size&&w.forEach((([e,t],s)=>{t&&(t(),w.set(s,[e]))}))}}];return c.set(C,O),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(C[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),C})=>[g,c,d,e,t,s,n,a,p,u,h],[u]=p();function h(e={}){return u(e)}function g(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const a=[],r=o[3];let i=!1;const l=r((e=>{a.push(e),s?t(a.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,i&&t(a.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),f={state:m,subscribe:e=>g(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,isTelegram:()=>"undefined"!=typeof window&&(Boolean(window.TelegramWebviewProxy)||Boolean(window.Telegram)||Boolean(window.TelegramWebviewProxyProto)),formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;if(o.startsWith("https://t.me")){const e=Buffer.from(t).toString("base64").replace(/[=]/g,"");o.endsWith("/")&&(o=o.slice(0,-1)),this.setWalletConnectDeepLink(o,s);const n=new URL(o);n.searchParams.set("startapp",e);return n.toString()}o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(s){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch(t){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"undefined"!=typeof localStorage&&localStorage.setItem(b.WCM_VERSION,"2.7.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=f.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},y=h({enabled:"undefined"!=typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),w={state:y,subscribe:e=>g(y.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,a]=s;return a(o,n(),t)}(y.events[y.events.length-1])))),initialize(){y.enabled&&void 0!==(null==crypto?void 0:crypto.randomUUID)&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},v=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:v,subscribe:e=>g(v,(()=>e(v))),setChains(e){v.chains=e},setWalletConnectUri(e){v.walletConnectUri=e},setIsCustomDesktop(e){v.isCustomDesktop=e},setIsCustomMobile(e){v.isCustomMobile=e},setIsDataLoaded(e){v.isDataLoaded=e},setIsUiLoaded(e){v.isUiLoaded=e},setIsAuth(e){v.isAuth=e}},W=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),C={state:W,subscribe:e=>g(W,(()=>e(W))),setConfig(e){var t,s;w.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(W,e)}};var O=Object.defineProperty,E=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",D="js-2.7.0";async function U(e,t){const s=((e,t)=>{for(var s in t||(t={}))L.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))j.call(t,s)&&A(e,s,t[s]);return e})({sdkType:M,sdkVersion:D},t),o=new URL(e,k);o.searchParams.append("projectId",C.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))}));return(await fetch(o)).json()}const P={getDesktopListings:async e=>U("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>U("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>U("/w3m/v1/getInjectedListings",e),getAllListings:async e=>U("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${k}/w3m/v1/getWalletImage/${e}?projectId=${C.state.projectId}&sdkType=${M}&sdkVersion=${D}`,getAssetImageUrl:e=>`${k}/w3m/v1/getAssetImage/${e}?projectId=${C.state.projectId}&sdkType=${M}&sdkVersion=${D}`};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=b.isMobile(),$=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),B={state:$,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=C.state;if("NONE"===e||"ALL"===t&&!e)return $.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),$.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=null==e?void 0:e.join(","),n=b.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:r}=_?await P.getMobileListings(a):await P.getDesktopListings(a);$.recomendedWallets=Object.values(r)}return $.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))T.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))x.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=C.state,{recomendedWallets:n}=$;if("ALL"===o)return $.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:r}=e,{listings:i,total:l}=_?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(i),d=r?"search":"wallets";return $[d]={listings:[...$[d].listings,...c],total:l,page:null!=a?a:1},{listings:c,total:l}},getWalletImageUrl:e=>P.getWalletImageUrl(e),getAssetImageUrl:e=>P.getAssetImageUrl(e),resetSearch(){$.search={listings:[],total:0,page:1}}},H=h({open:!1}),V={state:H,subscribe:e=>g(H,(()=>e(H))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(b.removeWalletConnectDeepLink(),I.setWalletConnectUri(null==e?void 0:e.uri),I.setChains(null==e?void 0:e.chains),f.reset("ConnectWallet"),s&&o)H.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),H.open=!0,t())}),200)}})),close(){H.open=!1}};var K=Object.defineProperty,z=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,Z=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const F=h({themeMode:"undefined"!=typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),G={state:F,subscribe:e=>g(F,(()=>e(F))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(F.themeMode=t),s&&(F.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&Z(e,s,t[s]);if(z)for(var s of z(t))q.call(t,s)&&Z(e,s,t[s]);return e})({},s))}},Q=h({open:!1,message:"",variant:"success"}),X={state:Q,subscribe:e=>g(Q,(()=>e(Q))),openToast(e,t){Q.open=!0,Q.message=e,Q.variant=t},closeToast(){Q.open=!1}}},380940:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(71995);class n{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if("undefined"!=typeof window){await s.e(59285).then(s.bind(s,381666));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);
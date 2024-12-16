"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[9122],{286741:(e,a,t)=>{t.d(a,{offchainLookup:()=>l,offchainLookupSignature:()=>u});var r=t(69575),s=t(611031);class n extends s.B{constructor({callbackSelector:e,cause:a,data:t,extraData:r,sender:n,urls:o}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map((e=>`    ${(0,s.W)(e)}`))],`  Sender: ${n}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class o extends s.B{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,s.W)(a)}`,`Response: ${(0,r.s)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class c extends s.B{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const u="0x556f1830",d={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function l(e,{blockNumber:a,blockTag:t,data:o,to:u}){const{args:l}=(0,r.d)({data:o,abi:[d]}),[f,h,p,b,w]=l,{ccipRead:m}=e,y=m&&"function"==typeof m?.request?m.request:i;try{if(!function(e,a){if(!(0,s.m)(e,{strict:!1}))throw new s.n({address:e});if(!(0,s.m)(a,{strict:!1}))throw new s.n({address:a});return e.toLowerCase()===a.toLowerCase()}(u,f))throw new c({sender:f,to:u});const n=await y({data:p,sender:f,urls:h}),{data:o}=await(0,r.c)(e,{blockNumber:a,blockTag:t,data:(0,s.J)([b,(0,r.e)([{type:"bytes"},{type:"bytes"}],[n,w])]),to:u});return o}catch(g){throw new n({callbackSelector:b,cause:g,data:o,extraData:w,sender:f,urls:h})}}async function i({data:e,sender:a,urls:t}){let n=new Error("An unknown error occurred.");for(let u=0;u<t.length;u++){const d=t[u],l=d.includes("{data}")?"GET":"POST",i="POST"===l?{data:e,sender:a}:void 0;try{const t=await fetch(d.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(i),method:l});let c;if(c=t.headers.get("Content-Type")?.startsWith("application/json")?(await t.json()).data:await t.text(),!t.ok){n=new r.H({body:i,details:c?.error?(0,r.s)(c.error):t.statusText,headers:t.headers,status:t.status,url:d});continue}if(!(0,s.i)(c)){n=new o({result:c,url:d});continue}return c}catch(c){n=new r.H({body:i,details:c.message,url:d})}}throw n}}}]);
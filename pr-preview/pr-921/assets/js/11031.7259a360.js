/*! For license information please see 11031.7259a360.js.LICENSE.txt */
"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[11031],{611031:(e,t,s)=>{s.d(t,{$:()=>Ve,A:()=>Ie,B:()=>r,C:()=>ze,D:()=>k,E:()=>c,F:()=>Me,G:()=>P,H:()=>K,I:()=>Se,J:()=>ye,K:()=>m,L:()=>v,M:()=>O,N:()=>be,O:()=>Qe,P:()=>fe,Q:()=>Ae,R:()=>Ue,S:()=>n,T:()=>We,U:()=>je,V:()=>L,W:()=>i,X:()=>Be,Y:()=>Ne,Z:()=>Re,_:()=>Ge,a:()=>C,a0:()=>_e,a1:()=>He,a2:()=>De,a3:()=>Xe,a4:()=>qe,a5:()=>p,a6:()=>Le,a7:()=>et,a8:()=>Fe,b:()=>x,c:()=>Oe,d:()=>A,e:()=>U,f:()=>X,g:()=>N,h:()=>T,i:()=>l,j:()=>E,k:()=>w,l:()=>Ke,m:()=>me,n:()=>F,o:()=>R,p:()=>Ce,q:()=>Te,r:()=>W,s:()=>h,t:()=>q,u:()=>we,v:()=>ke,w:()=>Y,x:()=>f,y:()=>tt,z:()=>g});const n=e=>e,i=e=>e;class r extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:"viem@2.12.0"});const s=t.cause instanceof r?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof r&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: https://viem.sh${n}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...s?[`Details: ${s}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=s,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}class a extends r{constructor({max:e,min:t,signed:s,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${s?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class c extends r{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class u extends r{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function l(e,{strict:t=!0}={}){return!!e&&("string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")))}function h(e){return l(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function f(e,{dir:t="left"}={}){let s="string"==typeof e?e.replace("0x",""):e,n=0;for(let i=0;i<s.length-1&&"0"===s["left"===t?i:s.length-i-1].toString();i++)n++;return s="left"===t?s.slice(n):s.slice(0,s.length-n),"string"==typeof e?(1===s.length&&"right"===t&&(s=`${s}0`),`0x${s.length%2==1?`0${s}`:s}`):s}class d extends r{constructor({offset:e,position:t,size:s}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${s}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class b extends r{constructor({size:e,targetSize:t,type:s}){super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class p extends r{constructor({size:e,targetSize:t,type:s}){super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} is expected to be ${t} ${s} long, but is ${e} ${s} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function g(e,{dir:t,size:s=32}={}){return"string"==typeof e?m(e,{dir:t,size:s}):function(e,{dir:t,size:s=32}={}){if(null===s)return e;if(e.length>s)throw new b({size:e.length,targetSize:s,type:"bytes"});const n=new Uint8Array(s);for(let i=0;i<s;i++){const r="right"===t;n[r?i:s-i-1]=e[r?i:e.length-i-1]}return n}(e,{dir:t,size:s})}function m(e,{dir:t,size:s=32}={}){if(null===s)return e;const n=e.replace("0x","");if(n.length>2*s)throw new b({size:Math.ceil(n.length/2),targetSize:s,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*s,"0")}`}const y=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function w(e,t={}){return"number"==typeof e||"bigint"==typeof e?P(e,t):"string"==typeof e?O(e,t):"boolean"==typeof e?v(e,t):x(e,t)}function v(e,t={}){const s=`0x${Number(e)}`;return"number"==typeof t.size?(k(s,{size:t.size}),g(s,{size:t.size})):s}function x(e,t={}){let s="";for(let i=0;i<e.length;i++)s+=y[e[i]];const n=`0x${s}`;return"number"==typeof t.size?(k(n,{size:t.size}),g(n,{dir:"right",size:t.size})):n}function P(e,t={}){const{signed:s,size:n}=t,i=BigInt(e);let r;n?r=s?(1n<<8n*BigInt(n)-1n)-1n:2n**(8n*BigInt(n))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));const o="bigint"==typeof r&&s?-r-1n:0;if(r&&i>r||i<o){const t="bigint"==typeof e?"n":"";throw new a({max:r?`${r}${t}`:void 0,min:`${o}${t}`,signed:s,size:n,value:`${e}${t}`})}const c=`0x${(s&&i<0?(1n<<BigInt(8*n))+BigInt(i):i).toString(16)}`;return n?g(c,{size:n}):c}const $=new TextEncoder;function O(e,t={}){return x($.encode(e),t)}const z=new TextEncoder;function E(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){const s=P(e,t);return U(s)}(e,t):"boolean"==typeof e?function(e,t={}){const s=new Uint8Array(1);if(s[0]=Number(e),"number"==typeof t.size)return k(s,{size:t.size}),g(s,{size:t.size});return s}(e,t):l(e)?U(e,t):L(e,t)}const I={zero:48,nine:57,A:65,F:70,a:97,f:102};function j(e){return e>=I.zero&&e<=I.nine?e-I.zero:e>=I.A&&e<=I.F?e-(I.A-10):e>=I.a&&e<=I.f?e-(I.a-10):void 0}function U(e,t={}){let s=e;t.size&&(k(s,{size:t.size}),s=g(s,{dir:"right",size:t.size}));let n=s.slice(2);n.length%2&&(n=`0${n}`);const i=n.length/2,o=new Uint8Array(i);for(let a=0,c=0;a<i;a++){const e=j(n.charCodeAt(c++)),t=j(n.charCodeAt(c++));if(void 0===e||void 0===t)throw new r(`Invalid byte sequence ("${n[c-2]}${n[c-1]}" in "${n}").`);o[a]=16*e+t}return o}function L(e,t={}){const s=z.encode(e);return"number"==typeof t.size?(k(s,{size:t.size}),g(s,{dir:"right",size:t.size})):s}function k(e,{size:t}){if(h(e)>t)throw new u({givenSize:h(e),maxSize:t})}function C(e,t={}){const{signed:s}=t;t.size&&k(e,{size:t.size});const n=BigInt(e);if(!s)return n;const i=(e.length-2)/2;return n<=(1n<<8n*BigInt(i)-1n)-1n?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function T(e,t={}){return Number(C(e,t))}function A(e,t){return({exclude:s,format:n})=>({exclude:s,format:e=>{const i=t(e);if(s)for(const t of s)delete i[t];return{...i,...n(e)}},type:e})}class F extends r{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class S extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function B(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function M(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function N(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function R(e,t){M(e);const s=t.outputLen;if(e.length<s)throw new Error(`digestInto() expects output buffer of length at least ${s}`)}const G=BigInt(2**32-1),V=BigInt(32);function _(e,t=!1){return t?{h:Number(e&G),l:Number(e>>V&G)}:{h:0|Number(e>>V&G),l:0|Number(e&G)}}function H(e,t=!1){let s=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:r,l:o}=_(e[i],t);[s[i],n[i]]=[r,o]}return[s,n]}const D=e=>e instanceof Uint8Array,X=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),W=(e,t)=>e<<32-t|e>>>t;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function q(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!D(e))throw new Error("expected Uint8Array, got "+typeof e);return e}class K{clone(){return this._cloneInto()}}function Y(e){const t=t=>e().update(q(t)).digest(),s=e();return t.outputLen=s.outputLen,t.blockLen=s.blockLen,t.create=()=>e(),t}const[J,Q,Z]=[[],[],[]],ee=BigInt(0),te=BigInt(1),se=BigInt(2),ne=BigInt(7),ie=BigInt(256),re=BigInt(113);for(let st=0,nt=te,it=1,rt=0;st<24;st++){[it,rt]=[rt,(2*it+3*rt)%5],J.push(2*(5*rt+it)),Q.push((st+1)*(st+2)/2%64);let e=ee;for(let t=0;t<7;t++)nt=(nt<<te^(nt>>ne)*re)%ie,nt&se&&(e^=te<<(te<<BigInt(t))-te);Z.push(e)}const[oe,ae]=H(Z,!0),ce=(e,t,s)=>s>32?((e,t,s)=>t<<s-32|e>>>64-s)(e,t,s):((e,t,s)=>e<<s|t>>>32-s)(e,t,s),ue=(e,t,s)=>s>32?((e,t,s)=>e<<s-32|t>>>64-s)(e,t,s):((e,t,s)=>t<<s|e>>>32-s)(e,t,s);class le extends K{constructor(e,t,s,n=!1,i=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=s,this.enableXOF=n,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,B(s),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var r;this.state=new Uint8Array(200),this.state32=(r=this.state,new Uint32Array(r.buffer,r.byteOffset,Math.floor(r.byteLength/4)))}keccak(){!function(e,t=24){const s=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let n=0;n<10;n++)s[n]=e[n]^e[n+10]^e[n+20]^e[n+30]^e[n+40];for(let n=0;n<10;n+=2){const t=(n+8)%10,i=(n+2)%10,r=s[i],o=s[i+1],a=ce(r,o,1)^s[t],c=ue(r,o,1)^s[t+1];for(let s=0;s<50;s+=10)e[n+s]^=a,e[n+s+1]^=c}let t=e[2],i=e[3];for(let s=0;s<24;s++){const n=Q[s],r=ce(t,i,n),o=ue(t,i,n),a=J[s];t=e[a],i=e[a+1],e[a]=r,e[a+1]=o}for(let n=0;n<50;n+=10){for(let t=0;t<10;t++)s[t]=e[n+t];for(let t=0;t<10;t++)e[n+t]^=~s[(t+2)%10]&s[(t+4)%10]}e[0]^=oe[n],e[1]^=ae[n]}s.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){N(this);const{blockLen:t,state:s}=this,n=(e=q(e)).length;for(let i=0;i<n;){const r=Math.min(t-this.pos,n-i);for(let t=0;t<r;t++)s[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:s,blockLen:n}=this;e[s]^=t,128&t&&s===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){N(this,!1),M(e),this.finish();const t=this.state,{blockLen:s}=this;for(let n=0,i=e.length;n<i;){this.posOut>=s&&this.keccak();const r=Math.min(s-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+r),n),this.posOut+=r,n+=r}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return B(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(R(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:s,outputLen:n,rounds:i,enableXOF:r}=this;return e||(e=new le(t,s,n,r,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=s,e.outputLen=n,e.enableXOF=r,e.destroyed=this.destroyed,e}}const he=((e,t,s)=>Y((()=>new le(t,e,s))))(1,136,32);function fe(e,t){const s=t||"hex",n=he(l(e,{strict:!1})?E(e):e);return"bytes"===s?n:w(n)}const de=new S(8192);function be(e,t){if(de.has(`${e}.${t}`))return de.get(`${e}.${t}`);const s=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=fe(L(s),"bytes"),i=(t?s.substring(`${t}0x`.length):s).split("");for(let o=0;o<40;o+=2)n[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(15&n[o>>1])>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());const r=`0x${i.join("")}`;return de.set(`${e}.${t}`,r),r}const pe=/^0x[a-fA-F0-9]{40}$/,ge=new S(8192);function me(e,t){const{strict:s=!0}=t??{};if(ge.has(e))return ge.get(e);const n=!(!pe.test(e)||e.toLowerCase()!==e&&s&&be(e)!==e);return ge.set(e,n),n}function ye(e){return"string"==typeof e[0]?we(e):function(e){let t=0;for(const i of e)t+=i.length;const s=new Uint8Array(t);let n=0;for(const i of e)s.set(i,n),n+=i.length;return s}(e)}function we(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}class ve extends r{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class xe extends r{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Pe extends r{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const $e={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Pe({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new xe({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ve({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ve({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const s=t??this.position;return this.assertPosition(s+e-1),this.bytes.subarray(s,s+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const s=this.inspectBytes(e);return this.position+=t??e,s},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function Oe(e,{recursiveReadLimit:t=8192}={}){const s=Object.create($e);return s.bytes=e,s.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),s.positionReadCount=new Map,s.recursiveReadLimit=t,s}const ze={gwei:9,wei:18},Ee={ether:-9,wei:9};function Ie(e,t){let s=e.toString();const n=s.startsWith("-");n&&(s=s.slice(1)),s=s.padStart(t,"0");let[i,r]=[s.slice(0,s.length-t),s.slice(s.length-t)];return r=r.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${r?`.${r}`:""}`}function je(e,t="wei"){return Ie(e,Ee[t])}function Ue(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),s=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(s+1)}  ${t}`)).join("\n")}class Le extends r{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class ke extends r{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class Ce extends r{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ue(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class Te extends r{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class Ae extends r{constructor({blockNumber:e,chain:t,contract:s}){super(`Chain "${t.name}" does not support contract "${s.name}".`,{metaMessages:["This could be due to any of the following:",...e&&s.blockCreated&&s.blockCreated>e?[`- The contract "${s.name}" was not deployed until block ${s.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${s.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Fe extends r{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class Se extends r{constructor({chainId:e}){super("number"==typeof e?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}class Be extends r{constructor({cause:e,message:t}={}){const s=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${s?`with reason: ${s}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Be,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(Be,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Me extends r{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${je(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Ne extends r{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${je(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Ne,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Re extends r{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Re,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Ge extends r{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Ge,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Ve extends r{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Ve,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class _e extends r{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(_e,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class He extends r{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(He,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class De extends r{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(De,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Xe extends r{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Xe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class We extends r{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:s}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${je(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${je(s)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(We,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class qe extends r{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function Ke(e,t,s,{strict:n}={}){return l(e,{strict:!1})?function(e,t,s,{strict:n}={}){Ye(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(s??e.length))}`;n&&Je(i,t,s);return i}(e,t,s,{strict:n}):Qe(e,t,s,{strict:n})}function Ye(e,t){if("number"==typeof t&&t>0&&t>h(e)-1)throw new d({offset:t,position:"start",size:h(e)})}function Je(e,t,s){if("number"==typeof t&&"number"==typeof s&&h(e)!==s-t)throw new d({offset:s,position:"end",size:h(e)})}function Qe(e,t,s,{strict:n}={}){Ye(e,t);const i=e.slice(t,s);return n&&Je(i,t,s),i}const Ze={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function et(e){const t={};return void 0!==e.accessList&&(t.accessList=e.accessList),void 0!==e.blobVersionedHashes&&(t.blobVersionedHashes=e.blobVersionedHashes),void 0!==e.blobs&&("string"!=typeof e.blobs[0]?t.blobs=e.blobs.map((e=>x(e))):t.blobs=e.blobs),void 0!==e.data&&(t.data=e.data),void 0!==e.from&&(t.from=e.from),void 0!==e.gas&&(t.gas=P(e.gas)),void 0!==e.gasPrice&&(t.gasPrice=P(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=P(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(t.maxFeePerGas=P(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=P(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(t.nonce=P(e.nonce)),void 0!==e.to&&(t.to=e.to),void 0!==e.type&&(t.type=Ze[e.type]),void 0!==e.value&&(t.value=P(e.value)),t}const tt=A("transactionRequest",et)}}]);
(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[67570],{987430:(e,t,r)=>{var o,n=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>T,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>C,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>O,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>M,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>m,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>w,MATCH_URL_TWITCH_CHANNEL:()=>_,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>g,MATCH_URL_VIMEO:()=>d,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>A,canPlay:()=>E}),e.exports=(o=l,((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))i.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(o=s(t,l))||o.enumerable});return e})(n({},"__esModule",{value:!0}),o));var u=r(287032);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,d=/vimeo\.com\/(?!progressive_redirect).+/,m=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,w=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,_=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,O=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,g=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,M=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,T=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,A=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,C=/\.(flv)($|\?)/i,j=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&j(t))return!0;if(j(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(T.test(e)||A.test(e)||P.test(e)||S.test(e)||C.test(e))},E={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!T.test(e),vimeo:e=>d.test(e)&&!A.test(e)&&!P.test(e),mux:e=>m.test(e),facebook:e=>f.test(e)||y.test(e),streamable:e=>w.test(e),wistia:e=>h.test(e),twitch:e=>b.test(e)||_.test(e),dailymotion:e=>O.test(e),mixcloud:e=>v.test(e),vidyard:e=>g.test(e),kaltura:e=>M.test(e),file:j}},422385:(e,t,r)=>{var o,n=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of i(t))u.call(e,n)||n===r||s(e,n,{get:()=>t[n],enumerable:!(o=a(t,n))||o.enumerable});return e},p=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>w}),e.exports=(o=d,c(s({},"__esModule",{value:!0}),o));var m=((e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(296540)),f=r(287032),y=r(987430);class w extends m.Component{constructor(){super(...arguments),p(this,"callPlayer",f.callPlayer),p(this,"duration",null),p(this,"currentTime",null),p(this,"secondsLoaded",null),p(this,"mute",(()=>{})),p(this,"unmute",(()=>{})),p(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then((()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on(((e,t)=>{this.currentTime=e,this.duration=t})),this.props.onReady()}))}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:t}=this.props,r=e.match(y.MATCH_URL_MIXCLOUD)[1],o=(0,f.queryString)({...t.options,feed:`/${r}/`});return m.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${o}`,frameBorder:"0",allow:"autoplay"})}}p(w,"displayName","Mixcloud"),p(w,"canPlay",y.canPlay.mixcloud),p(w,"loopOnEnded",!0)},287032:(e,t,r)=>{var o,n=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of i(t))u.call(e,n)||n===r||s(e,n,{get:()=>t[n],enumerable:!(o=a(t,n))||o.enumerable});return e},p=(e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>L,getConfig:()=>j,getSDK:()=>C,isBlobUrl:()=>x,isMediaStream:()=>U,lazy:()=>w,omit:()=>E,parseEndTime:()=>M,parseStartTime:()=>g,queryString:()=>A,randomString:()=>T,supportsWebKitPresentationMode:()=>I}),e.exports=(o=d,c(s({},"__esModule",{value:!0}),o));var m=p(r(296540)),f=p(r(6147)),y=p(r(914744));const w=e=>m.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),h=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,_=/(\d+)(h|m|s)/g,O=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(_))return function(e){let t=0,r=_.exec(e);for(;null!==r;){const[,o,n]=r;"h"===n&&(t+=60*parseInt(o,10)*60),"m"===n&&(t+=60*parseInt(o,10)),"s"===n&&(t+=parseInt(o,10)),r=_.exec(e)}return t}(e);if(O.test(e))return parseInt(e)}}function g(e){return v(e,h)}function M(e){return v(e,b)}function T(){return Math.random().toString(36).substr(2,5)}function A(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function P(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},C=function(e){0;return e}((function(e,t,r=null,o=()=>!0,n=f.default){const s=P(t);return s&&o(s)?Promise.resolve(s):new Promise(((o,s)=>{if(S[e])return void S[e].push({resolve:o,reject:s});S[e]=[{resolve:o,reject:s}];const a=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(P(t))}}n(e,(o=>{o?(S[e].forEach((e=>e.reject(o))),S[e]=null):r||a(P(t))}))}))}));function j(e,t){return(0,y.default)(t.config,e.config)}function E(e,...t){const r=[].concat(...t),o={},n=Object.keys(e);for(const s of n)-1===r.indexOf(s)&&(o[s]=e[s]);return o}function L(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function U(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function x(e){return/^blob:/.test(e)}function I(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},450327:(e,t,r)=>{var o,n=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>T,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>C,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>O,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>M,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>m,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>w,MATCH_URL_TWITCH_CHANNEL:()=>_,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>g,MATCH_URL_VIMEO:()=>d,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>A,canPlay:()=>E}),e.exports=(o=l,((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))i.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(o=s(t,l))||o.enumerable});return e})(n({},"__esModule",{value:!0}),o));var u=r(675635);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,d=/vimeo\.com\/(?!progressive_redirect).+/,m=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,w=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,_=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,O=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,g=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,M=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,T=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,A=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,C=/\.(flv)($|\?)/i,j=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&j(t))return!0;if(j(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(T.test(e)||A.test(e)||P.test(e)||S.test(e)||C.test(e))},E={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!T.test(e),vimeo:e=>d.test(e)&&!A.test(e)&&!P.test(e),mux:e=>m.test(e),facebook:e=>f.test(e)||y.test(e),streamable:e=>w.test(e),wistia:e=>h.test(e),twitch:e=>b.test(e)||_.test(e),dailymotion:e=>O.test(e),mixcloud:e=>v.test(e),vidyard:e=>g.test(e),kaltura:e=>M.test(e),file:j}},603276:(e,t,r)=>{var o,n=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of i(t))u.call(e,n)||n===r||s(e,n,{get:()=>t[n],enumerable:!(o=a(t,n))||o.enumerable});return e},p=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>w}),e.exports=(o=d,c(s({},"__esModule",{value:!0}),o));var m=((e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(296540)),f=r(675635),y=r(450327);class w extends m.Component{constructor(){super(...arguments),p(this,"callPlayer",f.callPlayer),p(this,"duration",null),p(this,"currentTime",null),p(this,"secondsLoaded",null),p(this,"mute",(()=>{})),p(this,"unmute",(()=>{})),p(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then((()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on(((e,t)=>{this.currentTime=e,this.duration=t})),this.props.onReady()}))}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:t}=this.props,r=e.match(y.MATCH_URL_MIXCLOUD)[1],o=(0,f.queryString)({...t.options,feed:`/${r}/`});return m.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${o}`,frameBorder:"0",allow:"autoplay"})}}p(w,"displayName","Mixcloud"),p(w,"canPlay",y.canPlay.mixcloud),p(w,"loopOnEnded",!0)},675635:(e,t,r)=>{var o,n=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of i(t))u.call(e,n)||n===r||s(e,n,{get:()=>t[n],enumerable:!(o=a(t,n))||o.enumerable});return e},p=(e,t,r)=>(r=null!=e?n(l(e)):{},c(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>L,getConfig:()=>j,getSDK:()=>C,isBlobUrl:()=>x,isMediaStream:()=>U,lazy:()=>w,omit:()=>E,parseEndTime:()=>M,parseStartTime:()=>g,queryString:()=>A,randomString:()=>T,supportsWebKitPresentationMode:()=>I}),e.exports=(o=d,c(s({},"__esModule",{value:!0}),o));var m=p(r(296540)),f=p(r(6147)),y=p(r(914744));const w=e=>m.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),h=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,_=/(\d+)(h|m|s)/g,O=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(_))return function(e){let t=0,r=_.exec(e);for(;null!==r;){const[,o,n]=r;"h"===n&&(t+=60*parseInt(o,10)*60),"m"===n&&(t+=60*parseInt(o,10)),"s"===n&&(t+=parseInt(o,10)),r=_.exec(e)}return t}(e);if(O.test(e))return parseInt(e)}}function g(e){return v(e,h)}function M(e){return v(e,b)}function T(){return Math.random().toString(36).substr(2,5)}function A(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function P(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},C=function(e){0;return e}((function(e,t,r=null,o=()=>!0,n=f.default){const s=P(t);return s&&o(s)?Promise.resolve(s):new Promise(((o,s)=>{if(S[e])return void S[e].push({resolve:o,reject:s});S[e]=[{resolve:o,reject:s}];const a=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(P(t))}}n(e,(o=>{o?(S[e].forEach((e=>e.reject(o))),S[e]=null):r||a(P(t))}))}))}));function j(e,t){return(0,y.default)(t.config,e.config)}function E(e,...t){const r=[].concat(...t),o={},n=Object.keys(e);for(const s of n)-1===r.indexOf(s)&&(o[s]=e[s]);return o}function L(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function U(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function x(e){return/^blob:/.test(e)}function I(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}}}]);
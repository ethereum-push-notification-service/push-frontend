(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[97458],{987430:(e,t,s)=>{var r,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var s in t)i(e,s,{get:t[s],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>L,DASH_EXTENSIONS:()=>A,FLV_EXTENSIONS:()=>M,HLS_EXTENSIONS:()=>_,MATCH_URL_DAILYMOTION:()=>E,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>S,MATCH_URL_MIXCLOUD:()=>g,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>u,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>w,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>P,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>v,MATCH_URL_YOUTUBE:()=>p,VIDEO_EXTENSIONS:()=>O,canPlay:()=>T}),e.exports=(r=l,((e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===s||i(e,l,{get:()=>t[l],enumerable:!(r=n(t,l))||r.enumerable});return e})(i({},"__esModule",{value:!0}),r));var h=s(287032);const p=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,u=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,v=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,w=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,E=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,g=/mixcloud\.com\/([^/]+\/[^/]+)/,P=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,S=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,L=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,_=/\.(m3u8)($|\?)/i,A=/\.(mpd)($|\?)/i,M=/\.(flv)($|\?)/i,I=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&I(t))return!0;if(I(t.src))return!0}return!1}return!(!(0,h.isMediaStream)(e)&&!(0,h.isBlobUrl)(e))||(L.test(e)||O.test(e)||_.test(e)||A.test(e)||M.test(e))},T={youtube:e=>e instanceof Array?e.every((e=>p.test(e))):p.test(e),soundcloud:e=>u.test(e)&&!L.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!_.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||y.test(e),streamable:e=>m.test(e),wistia:e=>v.test(e),twitch:e=>b.test(e)||w.test(e),dailymotion:e=>E.test(e),mixcloud:e=>g.test(e),vidyard:e=>P.test(e),kaltura:e=>S.test(e),file:I}},555825:(e,t,s)=>{var r,i=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,p=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))h.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e},u=(e,t,s)=>(((e,t,s)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),c={};((e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:!0})})(c,{default:()=>P}),e.exports=(r=c,p(n({},"__esModule",{value:!0}),r));var d=((e,t,s)=>(s=null!=e?i(l(e)):{},p(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)))(s(296540)),f=s(287032),y=s(987430);const m="undefined"!=typeof navigator,v=m&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,b=m&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||v)&&!window.MSStream,w=m&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,E=/www\.dropbox\.com\/.+/,g=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class P extends d.Component{constructor(){super(...arguments),u(this,"onReady",((...e)=>this.props.onReady(...e))),u(this,"onPlay",((...e)=>this.props.onPlay(...e))),u(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),u(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),u(this,"onPause",((...e)=>this.props.onPause(...e))),u(this,"onEnded",((...e)=>this.props.onEnded(...e))),u(this,"onError",((...e)=>this.props.onError(...e))),u(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),u(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),u(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()})),u(this,"onPresentationModeChange",(e=>{if(this.player&&(0,f.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),u(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),u(this,"mute",(()=>{this.player.muted=!0})),u(this,"unmute",(()=>{this.player.muted=!1})),u(this,"renderSourceElement",((e,t)=>"string"==typeof e?d.default.createElement("source",{key:t,src:e}):d.default.createElement("source",{key:t,...e}))),u(this,"renderTrack",((e,t)=>d.default.createElement("track",{key:t,...e}))),u(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(b||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,f.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&(!e.config.attributes.poster&&(y.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio))}shouldUseHLS(e){return!!(w&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!b&&!this.props.config.forceDisableHls&&(y.HLS_EXTENSIONS.test(e)||g.test(e))}shouldUseDASH(e){return y.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return y.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:i}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then((t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.hls,t)})),g.test(e)){const t=e.match(g)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,f.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(r)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",i),"flvjs").then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,f.isMediaStream)(e))try{this.player.srcObject=e}catch(n){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){const t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,f.isMediaStream)(e)||t||s||r))return E.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:s,controls:r,muted:i,config:n,width:o,height:a}=this.props,l=this.shouldUseAudio(this.props)?"audio":"video",h={width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"};return d.default.createElement(l,{ref:this.ref,src:this.getSource(e),style:h,preload:"auto",autoPlay:t||void 0,controls:r,muted:i,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}u(P,"displayName","FilePlayer"),u(P,"canPlay",y.canPlay.file)},287032:(e,t,s)=>{var r,i=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,p=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))h.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e},u=(e,t,s)=>(s=null!=e?i(l(e)):{},p(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)),c={};((e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:!0})})(c,{callPlayer:()=>R,getConfig:()=>I,getSDK:()=>M,isBlobUrl:()=>k,isMediaStream:()=>U,lazy:()=>m,omit:()=>T,parseEndTime:()=>S,parseStartTime:()=>P,queryString:()=>O,randomString:()=>L,supportsWebKitPresentationMode:()=>j}),e.exports=(r=c,p(n({},"__esModule",{value:!0}),r));var d=u(s(296540)),f=u(s(6147)),y=u(s(914744));const m=e=>d.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),v=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,w=/(\d+)(h|m|s)/g,E=/^\d+$/;function g(e,t){if(e instanceof Array)return;const s=e.match(t);if(s){const e=s[1];if(e.match(w))return function(e){let t=0,s=w.exec(e);for(;null!==s;){const[,r,i]=s;"h"===i&&(t+=60*parseInt(r,10)*60),"m"===i&&(t+=60*parseInt(r,10)),"s"===i&&(t+=parseInt(r,10)),s=w.exec(e)}return t}(e);if(E.test(e))return parseInt(e)}}function P(e){return g(e,v)}function S(e){return g(e,b)}function L(){return Math.random().toString(36).substr(2,5)}function O(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function _(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const A={},M=function(e){0;return e}((function(e,t,s=null,r=()=>!0,i=f.default){const n=_(t);return n&&r(n)?Promise.resolve(n):new Promise(((r,n)=>{if(A[e])return void A[e].push({resolve:r,reject:n});A[e]=[{resolve:r,reject:n}];const o=t=>{A[e].forEach((e=>e.resolve(t)))};if(s){const e=window[s];window[s]=function(){e&&e(),o(_(t))}}i(e,(r=>{r?(A[e].forEach((e=>e.reject(r))),A[e]=null):s||o(_(t))}))}))}));function I(e,t){return(0,y.default)(t.config,e.config)}function T(e,...t){const s=[].concat(...t),r={},i=Object.keys(e);for(const n of i)-1===s.indexOf(n)&&(r[n]=e[n]);return r}function R(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function U(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function k(e){return/^blob:/.test(e)}function j(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},450327:(e,t,s)=>{var r,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var s in t)i(e,s,{get:t[s],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>L,DASH_EXTENSIONS:()=>A,FLV_EXTENSIONS:()=>M,HLS_EXTENSIONS:()=>_,MATCH_URL_DAILYMOTION:()=>E,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>S,MATCH_URL_MIXCLOUD:()=>g,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>u,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>w,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>P,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>v,MATCH_URL_YOUTUBE:()=>p,VIDEO_EXTENSIONS:()=>O,canPlay:()=>T}),e.exports=(r=l,((e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===s||i(e,l,{get:()=>t[l],enumerable:!(r=n(t,l))||r.enumerable});return e})(i({},"__esModule",{value:!0}),r));var h=s(675635);const p=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,u=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,v=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,w=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,E=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,g=/mixcloud\.com\/([^/]+\/[^/]+)/,P=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,S=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,L=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,_=/\.(m3u8)($|\?)/i,A=/\.(mpd)($|\?)/i,M=/\.(flv)($|\?)/i,I=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&I(t))return!0;if(I(t.src))return!0}return!1}return!(!(0,h.isMediaStream)(e)&&!(0,h.isBlobUrl)(e))||(L.test(e)||O.test(e)||_.test(e)||A.test(e)||M.test(e))},T={youtube:e=>e instanceof Array?e.every((e=>p.test(e))):p.test(e),soundcloud:e=>u.test(e)&&!L.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!_.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||y.test(e),streamable:e=>m.test(e),wistia:e=>v.test(e),twitch:e=>b.test(e)||w.test(e),dailymotion:e=>E.test(e),mixcloud:e=>g.test(e),vidyard:e=>P.test(e),kaltura:e=>S.test(e),file:I}},320688:(e,t,s)=>{var r,i=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,p=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))h.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e},u=(e,t,s)=>(((e,t,s)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),c={};((e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:!0})})(c,{default:()=>P}),e.exports=(r=c,p(n({},"__esModule",{value:!0}),r));var d=((e,t,s)=>(s=null!=e?i(l(e)):{},p(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)))(s(296540)),f=s(675635),y=s(450327);const m="undefined"!=typeof navigator,v=m&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,b=m&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||v)&&!window.MSStream,w=m&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,E=/www\.dropbox\.com\/.+/,g=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class P extends d.Component{constructor(){super(...arguments),u(this,"onReady",((...e)=>this.props.onReady(...e))),u(this,"onPlay",((...e)=>this.props.onPlay(...e))),u(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),u(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),u(this,"onPause",((...e)=>this.props.onPause(...e))),u(this,"onEnded",((...e)=>this.props.onEnded(...e))),u(this,"onError",((...e)=>this.props.onError(...e))),u(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),u(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),u(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()})),u(this,"onPresentationModeChange",(e=>{if(this.player&&(0,f.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),u(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),u(this,"mute",(()=>{this.player.muted=!0})),u(this,"unmute",(()=>{this.player.muted=!1})),u(this,"renderSourceElement",((e,t)=>"string"==typeof e?d.default.createElement("source",{key:t,src:e}):d.default.createElement("source",{key:t,...e}))),u(this,"renderTrack",((e,t)=>d.default.createElement("track",{key:t,...e}))),u(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(b||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,f.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&(!e.config.attributes.poster&&(y.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio))}shouldUseHLS(e){return!!(w&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!b&&!this.props.config.forceDisableHls&&(y.HLS_EXTENSIONS.test(e)||g.test(e))}shouldUseDASH(e){return y.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return y.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:i}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then((t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.hls,t)})),g.test(e)){const t=e.match(g)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,f.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(r)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,f.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",i),"flvjs").then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,f.isMediaStream)(e))try{this.player.srcObject=e}catch(n){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,f.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){const t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,f.isMediaStream)(e)||t||s||r))return E.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:s,controls:r,muted:i,config:n,width:o,height:a}=this.props,l=this.shouldUseAudio(this.props)?"audio":"video",h={width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"};return d.default.createElement(l,{ref:this.ref,src:this.getSource(e),style:h,preload:"auto",autoPlay:t||void 0,controls:r,muted:i,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}u(P,"displayName","FilePlayer"),u(P,"canPlay",y.canPlay.file)},675635:(e,t,s)=>{var r,i=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,p=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))h.call(e,i)||i===s||n(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e},u=(e,t,s)=>(s=null!=e?i(l(e)):{},p(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)),c={};((e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:!0})})(c,{callPlayer:()=>R,getConfig:()=>I,getSDK:()=>M,isBlobUrl:()=>k,isMediaStream:()=>U,lazy:()=>m,omit:()=>T,parseEndTime:()=>S,parseStartTime:()=>P,queryString:()=>O,randomString:()=>L,supportsWebKitPresentationMode:()=>j}),e.exports=(r=c,p(n({},"__esModule",{value:!0}),r));var d=u(s(296540)),f=u(s(6147)),y=u(s(914744));const m=e=>d.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),v=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,w=/(\d+)(h|m|s)/g,E=/^\d+$/;function g(e,t){if(e instanceof Array)return;const s=e.match(t);if(s){const e=s[1];if(e.match(w))return function(e){let t=0,s=w.exec(e);for(;null!==s;){const[,r,i]=s;"h"===i&&(t+=60*parseInt(r,10)*60),"m"===i&&(t+=60*parseInt(r,10)),"s"===i&&(t+=parseInt(r,10)),s=w.exec(e)}return t}(e);if(E.test(e))return parseInt(e)}}function P(e){return g(e,v)}function S(e){return g(e,b)}function L(){return Math.random().toString(36).substr(2,5)}function O(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function _(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const A={},M=function(e){0;return e}((function(e,t,s=null,r=()=>!0,i=f.default){const n=_(t);return n&&r(n)?Promise.resolve(n):new Promise(((r,n)=>{if(A[e])return void A[e].push({resolve:r,reject:n});A[e]=[{resolve:r,reject:n}];const o=t=>{A[e].forEach((e=>e.resolve(t)))};if(s){const e=window[s];window[s]=function(){e&&e(),o(_(t))}}i(e,(r=>{r?(A[e].forEach((e=>e.reject(r))),A[e]=null):s||o(_(t))}))}))}));function I(e,t){return(0,y.default)(t.config,e.config)}function T(e,...t){const s=[].concat(...t),r={},i=Object.keys(e);for(const n of i)-1===s.indexOf(n)&&(r[n]=e[n]);return r}function R(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function U(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function k(e){return/^blob:/.test(e)}function j(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}}}]);
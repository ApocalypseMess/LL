(window.webpackJsonpwebpackLogReporter=window.webpackJsonpwebpackLogReporter||[]).push([[3],{82:function(r,t,e){"use strict";e.r(t),e.d(t,"default",function(){return s});var o=e(1),i=e(0);function n(r,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}var s=function(){function r(t){!function(r,t){if(!(r instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(r){}}(this,r),this.initConfig(),this.setIgnoredPattern(t),this.doCollectorWinError(),this.doCollectorResourceError()}var t,e,s;return t=r,(e=[{key:"initConfig",value:function(){this.scriptErrorLimit=5,this.scriptErrorCount=0,this.imgErrorLimit=5,this.imgErrorCount=0,this.ERROR_RUNTIME=1,this.ERROR_SCRIPT=2,this.ERROR_STYLE=3,this.ERROR_IMAGE=4,this.ERROR_AUDIO=5,this.ERROR_VIDEO=6,this.ERROR_CONSOLE=7,this.ERROR_TRY_CATHC=8,this.LOAD_ERROR_TYPE={SCRIPT:this.ERROR_SCRIPT,LINK:this.ERROR_STYLE,IMG:this.ERROR_IMAGE,AUDIO:this.ERROR_AUDIO,VIDEO:this.ERROR_VIDEO}}},{key:"setIgnoredPattern",value:function(r){if(r){var t=[];t=r instanceof Array?r.map(function(r){return r.toString()}):[r.toString()],this.ignoredPatterns=t.map(function(r){return new RegExp(r)})}}},{key:"tryCatchError",value:function(r){this.todo("trycatch",this.ERROR_TRY_CATHC,r)}},{key:"doCollectorResourceError",value:function(){var r=this;window.addEventListener("error",function(t){var e=t.target;if(e!==window&&e.nodeName&&r.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()]){var o=r.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()];(o!==r.ERROR_IMAGE||e.getAttribute("src"))&&r.todo("resource",o,{url:e.baseURI||document.baseURI||window.location.href,errorMsg:e.outerHTML||e.href})}},!0)}},{key:"doCollectorWinError",value:function(){var r=null;"function"==typeof window.onerror&&(r=window.onerror);var t=this;window.onerror=function(e,o,i,n,s){return r&&r.apply(window,arguments),o?"Script error."===e||"Script error"===e?(setTimeout(function(){var r={};r.url=o,r.pageUrl=window.location.href||document.baseURI,r.errorMsg="Script error.",t.scriptErrorCount<t.scriptErrorLimit&&(t.scriptErrorCount+=1,t.todo("runtime",t.ERROR_RUNTIME,r))},0),!1):(setTimeout(function(){var r={};n=n||window.event&&window.event.errorCharacter||0,r.url=o,r.pageUrl=window.location.href||document.baseURI,r.line=i,r.col=n,r.errorMsg=e,s&&s.stack&&(r.errorMsg=s.stack.toString()),t.todo("runtime",1,r)},0),!1):(setTimeout(function(){var r={};r.url=document.baseURI,r.errorMsg=e,"Script error."!==e&&"Script error"!==e||t.scriptErrorCount<t.scriptErrorLimit&&(t.scriptErrorCount+=1),t.todo("runtime",t.ERROR_RUNTIME,r)},0),!1)}}},{key:"todo",value:function(r,t,e){var n={time:(new Date).toISOString(),level:"ERROR",app_id:"main.frontend.bilibili-log-report-seed",instance_id:r,errorType:t,userAgent:navigator.userAgent,url:document.baseURI||window.location.href,referrer:document.referrer};if(e instanceof Object?n=i.a.assignObject(n,e):n.errorMsg=e,this.ignoredPatterns&&n.errorMsg)for(var s=0;s<this.ignoredPatterns.length;s++)if(this.ignoredPatterns[s].test(n.errorMsg))return;if(t===this.ERROR_IMAGE){if(this.imgErrorCount>=this.imgErrorLimit)return;this.imgErrorCount++}var a={type:"errorLog",obj:{msg:JSON.stringify(n)}};o.a.receiveGroupMsg(a)}}])&&n(t.prototype,e),s&&n(t,s),r}()}}]);
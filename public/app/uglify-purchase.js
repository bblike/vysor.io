!function(o,e){function n(){}function t(o,e){return window.chrome&&window.chrome.identity?void chrome.identity.getAuthToken({interactive:o,scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/chromewebstore.readonly"]},function(o){o||console.error("unable to get authToken",chrome.runtime.lastError),e(o)}):(console.error("no auth token implemented"),void process.nextTick(e))}function r(o){var e=$("#notificationModal"),n=e.find("#modal-ok"),t=e.find("#modal-cancel");n.unbind("click"),t.unbind("click"),e.unbind("hidden.bs.modal"),o.cancelButton=o.cancelButton||"Cancel",o.okButton=o.okButton||"OK",o.title=o.title||chrome.runtime.getManifest().name,o.body=o.body||"",o.hideCancel?t.hide():t.show(),n.text(o.okButton),t.text(o.cancelButton),e.find("#modal-title").text(o.title),e.find("#modal-body").html(o.body);var r;n.click(function(){r=!0,o.ok&&o.ok()||$("#notificationModal").modal("hide")}),o.cancel&&(e.on("hidden.bs.modal",function(){r||o.cancel()}),t.click(o.cancel)),$("#notificationModal").modal(),o.duration&&setTimeout(function(){$("#notificationModal").modal("hide")},o.duration)}function i(o,e){r({title:o,body:e,duration:8e3,hideCancel:!0})}window.IS_RELEASE=!0;"\n".charCodeAt(0);Uint8Array.prototype.sliceArrayBuffer=function(){return this.buffer.slice(this.byteOffset,this.byteOffset+this.byteLength)},Number.prototype.pad=function(o){for(var e=String(this);e.length<(o||2);)e="0"+e;return e};(new Date).getTime();String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(o,e){return e=e||0,this.lastIndexOf(o,e)===e}}),Object.fromArray=function(o){var e={};for(var n in o){var t=o[n];e[t]=t}return e},$.ajaxTransport("+binary",function(o,e,n){if(window.FormData&&(o.dataType&&"binary"==o.dataType||o.data&&(window.ArrayBuffer&&o.data instanceof ArrayBuffer||window.Blob&&o.data instanceof Blob)))return{send:function(e,n){var t=new XMLHttpRequest,r=o.url,i=o.type,a=o.async||!0,l=o.responseType||"blob",c=o.data||null,s=o.username||null,u=o.password||null;t.addEventListener("load",function(){var e={};e[o.dataType]=t.response,n(t.status,t.statusText,e,t.getAllResponseHeaders())}),t.addEventListener("error",function(){n(t.status,t.statusText,null,t.getAllResponseHeaders())}),t.open(i,r,a,s,u);for(var d in e)t.setRequestHeader(d,e[d]);t.responseType=l,t.send(c)},abort:function(){n.abort()}}});(function(){var o={};return function(e,n){if(o[e])return void n(o[e]);var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="blob",t.onload=function(t){n(o[e]=window.URL.createObjectURL(this.response))},t.send()}})();!function(){function*o(){}var e=o();e.constructor.prototype.async=function(){function o(){a=i.throw(new Error(arguments)),r()}function t(){var o=arguments[0];a=i.next(o),r()}function r(r){var s,u;if(a.done)return void l(a.value);if(!a.value)return void(a=i.next(t));if(a.value.constructor==Promise)return void a.value.then(t).catch(o);if(a.value.constructor==e.constructor){var d=a.value.async();return void d.then(t).catch(o)}if(a.value==Error)s=!0,a=i.next(o);else{if(a.value!=n)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");u=!0,a=i.next(t)}if(!a.value)throw new Error("Double yield callbacks must explicitly define both Error and Success");if(a.value==Error&&s)throw new Error("Error callback already defined");if(a.value==n&&u)throw new Error("Success callback already defined");if(a.value!=Error&&a.value!=n)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");try{a=s?i.next(t):i.next(o)}catch(o){c(o)}}var i=this,a=i.next();if(!a.done){var l,c,s=new Promise(function(o,e){l=o,c=e});return r(),s}}}(),window.isElectron=function(){return navigator.userAgent.indexOf("Electron")!=-1},isElectron()||(window.sharedGlobals=window),function(){function o(o){try{for(var e in o)o[e]&&o[e].constructor!=String&&(o[e]=JSON.stringify(o[e]));t+=o.join(" ")+"\n"}catch(o){}}function e(e){return function(){e.apply(console,arguments),o(Array.prototype.slice.call(arguments))}}function n(o){return new Promise(function(e,n){return o.getConsoleLog?void o.getConsoleLog(function(o){e({content:o&&o.length?o:"log is empty"})}):void e("getConsoleLog not found")})}var t="";if(window.IS_RELEASE){console.log,console.error,console.warn,console.info;console.error=e(console.error),console.log=e(console.log),console.warn=e(console.warn),console.info=e(console.info)}sharedGlobals.getConsoleLog=function(o){o(t)},window.gistConsoleLog=function(o,e){chrome.runtime.getBackgroundPage(function(t){n(t).then(function(e){o["background.txt"]=e;var t=chrome.app.window.getAll(),r=t.map(function(e){return n(e.contentWindow).then(function(n){o["window-"+e.id+".txt"]=n})});return Promise.all(r)}).then(function(){var n={description:chrome.runtime.getManifest().name+" console log",public:!1,files:o};fetch("https://vysor.io/gist",{method:"POST",body:JSON.stringify(n)}).then(function(o){o.json().then(function(o){e(o.html_url)})})})})}}(),function(){$(document).ready(function(){function o(){$("#paymentModal").modal("hide"),t(!0,function(o){if(!o)return void i(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");var e="https://billing.clockworkmod.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+o;chrome.browser.openTab({url:e}),chrome.app.window.current().close()}.bind(this))}function e(){$("#paymentModal").modal("hide"),t(!0,function(o){if(!o)return void i(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");var e="https://billing.clockworkmod.com/api/v1/stripeorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+o;chrome.browser.openTab({url:e}),chrome.app.window.current().close()}.bind(this))}function n(o){$("#paymentModal").modal("hide"),t(!0,function(e){if(!e)return void i(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");var n="https://billing.clockworkmod.com/subscription/stripe/manage/koushd@gmail.com/"+o+"/";chrome.browser.openTab({url:n}),chrome.app.window.current().close()}.bind(this))}function a(o){return $("#paymentModal").modal("hide"),isElectron()?void r({ok:function(){chrome.browser.openTab({url:"https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm"})},hideCancel:!0,body:'Google Wallet licenses can be purchased from within the <a href="https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm?authuser=1" target="_blank">Vysor for Chrome</a> app.<br/><br/>The license will also unlock the desktop version of Vysor.'}):void google.payments.inapp.getPurchases({parameters:{env:"prod"},success:function(){google.payments.inapp.buy({parameters:{env:"prod"},sku:o,success:function(){_rlm(),console.log("success",arguments)},failure:function(){_rlm(),console.log("failure",arguments)}})},failure:function(){r({hideCancel:!0,body:"Unable to purchase from Chrome store. This error may occur if you already have a Vysor subscription that is past due. Please contact support or use the Credit Cad or PayPal purchase options."})}})}function l(o){$("#paymentModal").modal("hide"),r({ok:function(){c(o)},hideCancel:!0,body:"Paypal subscriptions are not available for this plan."})}function c(o){$("#pay-card").unbind("click"),$("#pay-google").unbind("click"),$("#pay-paypal").unbind("click"),$("#pay-card").click(s[o].stripe),$("#pay-google").click(s[o].google),$("#pay-paypal").click(function(){s[o].paypal(o)}),$("#paymentModal").modal()}$("#purchase-options").hide(),t(!0,function(o){function e(){chrome.app.window.current().close()}return o?void chrome.identity.getProfileUserInfo(function(o){o&&$("#purchase-email").text(o.email)}):void r({hideCancel:!0,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum.",ok:e,cancel:e})}),chrome.storage.local.get(["vysorUsage"],function(o){var e=o.vysorUsage;e||(e=0);var n=e/36e5;n=Math.round(2*n)/2,$("#used").html("<span class='time-highlight'>You've used Vysor Free for "+n+" hours. Support Vysor. Go Pro.</span>")});var s={monthly:{google:function(){a("vysor_monthly")},stripe:function(){n("vysor.monthly")},paypal:l},annual:{google:function(){a("vysor.annual2")},stripe:function(){n("vysor.annual")},paypal:l},lifetime:{google:function(){a("vysor.lifetime")},stripe:e,paypal:o}};$(".plan-enterprise").click(function(){var o="https://billing.vysor.io/";chrome.browser.openTab({url:o}),chrome.app.window.current().close()}),$(".plan-monthly").click(function(){c("monthly")}),$(".plan-annual").click(function(){c("annual")}),$(".plan-lifetime").click(function(){c("lifetime")}),$("#retrieve").click(function(){t(!0,function(o){return o?void _rlm(function(o){o||chrome.identity.getProfileUserInfo(function(o){return o?void r({hideCancel:!0,body:"No license found for account "+o.email+'. If this message was in error, please open an issue on the Support Forum.<br/><br/>Wrong account? <a href="https://support.vysor.io/support/licensing/multiple/" target="_blank">Read this</a>.'}):void r({hideCancel:!0,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum."})})}):void console.log("Unable to get token for retrieve?")})})})}(),e[""]=o}({},function(){return this}());

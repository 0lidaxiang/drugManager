var ex_swfobject=function(){function a(){if(!B){try{var a=f.getElementsByTagName("body")[0].appendChild(f.createElement("span"));a.parentNode.removeChild(a)}catch(m){return}B=!0;for(var a=H.length,b=0;b<a;b++)H[b]()}}function b(a){B?a():H[H.length]=a}function c(a){if("undefined"!=typeof q.addEventListener)q.addEventListener("load",a,!1);else if("undefined"!=typeof f.addEventListener)f.addEventListener("load",a,!1);else if("undefined"!=typeof q.attachEvent)V(q,"onload",a);else if("function"==typeof q.onload){var b=
q.onload;q.onload=function(){b();a()}}else q.onload=a}function d(){var a=f.getElementsByTagName("body")[0],b=f.createElement("object");b.setAttribute("type","application/x-shockwave-flash");var c=a.appendChild(b);if(c){var x=0;(function(){if("undefined"!=typeof c.GetVariable){var h=c.GetVariable("$version");h&&(h=h.split(" ")[1].split(","),e.pv=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}else if(10>x){x++;setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;g()})()}else g()}
function g(){var a=y.length;if(0<a)for(var b=0;b<a;b++){var c=y[b].id,x=y[b].callbackFn,d={success:!1,id:c};if(0<e.pv[0]){var f=r(c);if(f)if(!I(y[b].swfVersion)||e.wk&&312>e.wk)if(y[b].expressInstall&&w()){d={};d.data=y[b].expressInstall;d.width=f.getAttribute("width")||"0";d.height=f.getAttribute("height")||"0";f.getAttribute("class")&&(d.styleclass=f.getAttribute("class"));f.getAttribute("align")&&(d.align=f.getAttribute("align"));for(var O={},f=f.getElementsByTagName("param"),g=f.length,E=0;E<
g;E++)"movie"!=f[E].getAttribute("name").toLowerCase()&&(O[f[E].getAttribute("name")]=f[E].getAttribute("value"));l(d,O,c,x)}else n(f),x&&x(d);else C(c,!0),x&&(d.success=!0,d.ref=p(c),x(d))}else C(c,!0),x&&((c=p(c))&&"undefined"!=typeof c.SetVariable&&(d.success=!0,d.ref=c),x(d))}}function p(a){var b=null;(a=r(a))&&"OBJECT"==a.nodeName&&("undefined"!=typeof a.SetVariable?b=a:(a=a.getElementsByTagName("object")[0])&&(b=a));return b}function w(){return!J&&I("6.0.65")&&(e.win||e.mac)&&!(e.wk&&312>e.wk)}
function l(a,b,c,d){J=!0;M=d||null;P={success:!1,id:c};var h=r(c);if(h){"OBJECT"==h.nodeName?(F=z(h),K=null):(F=h,K=c);a.id="SWFObjectExprInst";if("undefined"==typeof a.width||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if("undefined"==typeof a.height||!/%$/.test(a.height)&&137>parseInt(a.height,10))a.height="137";f.title=f.title.slice(0,47)+" - Flash Player Installation";d=e.ie&&e.win?"ActiveX":"PlugIn";d="MMredirectURL="+q.location.toString().replace(/&/g,"%26")+"&MMplayerType="+
d+"&MMdoctitle="+f.title;b.flashvars="undefined"!=typeof b.flashvars?b.flashvars+("&"+d):d;e.ie&&e.win&&4!=h.readyState&&(d=f.createElement("div"),c+="SWFObjectNew",d.setAttribute("id",c),h.parentNode.insertBefore(d,h),h.style.display="none",function(){4==h.readyState?h.parentNode.removeChild(h):setTimeout(arguments.callee,10)}());G(a,b,c)}}function n(a){if(e.ie&&e.win&&4!=a.readyState){var b=f.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(z(a),b);a.style.display="none";
(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(z(a),a)}function z(a){var b=f.createElement("div");if(e.win&&e.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName("object")[0])if(a=a.childNodes)for(var c=a.length,h=0;h<c;h++)1==a[h].nodeType&&"PARAM"==a[h].nodeName||8==a[h].nodeType||b.appendChild(a[h].cloneNode(!0));return b}function G(a,b,c){var h,d=r(c);if(e.wk&&312>e.wk)return h;if(d)if("undefined"==typeof a.id&&
(a.id=c),e.ie&&e.win){var v="",m;for(m in a)a[m]!=Object.prototype[m]&&("data"==m.toLowerCase()?b.movie=a[m]:"styleclass"==m.toLowerCase()?v+=' class="'+a[m]+'"':"classid"!=m.toLowerCase()&&(v+=" "+m+'="'+a[m]+'"'));m="";for(var g in b)b[g]!=Object.prototype[g]&&(m+='<param name="'+g+'" value="'+b[g]+'" />');d.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+v+">"+m+"</object>";L[L.length]=a.id;h=r(a.id)}else{g=f.createElement("object");g.setAttribute("type","application/x-shockwave-flash");
for(var l in a)a[l]!=Object.prototype[l]&&("styleclass"==l.toLowerCase()?g.setAttribute("class",a[l]):"classid"!=l.toLowerCase()&&g.setAttribute(l,a[l]));for(v in b)b[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&(a=g,m=v,l=b[v],c=f.createElement("param"),c.setAttribute("name",m),c.setAttribute("value",l),a.appendChild(c));d.parentNode.replaceChild(g,d);h=g}return h}function Q(a){var b=r(a);b&&"OBJECT"==b.nodeName&&(e.ie&&e.win?(b.style.display="none",function(){if(4==b.readyState){var c=r(a);
if(c){for(var h in c)"function"==typeof c[h]&&(c[h]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function r(a){var b=null;try{b=f.getElementById(a)}catch(m){}return b}function V(a,b,c){a.attachEvent(b,c);D[D.length]=[a,b,c]}function I(a){var b=e.pv;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function R(a,b,c,d){if(!e.ie||
!e.mac){var h=f.getElementsByTagName("head")[0];h&&(c=c&&"string"==typeof c?c:"screen",d&&(N=u=null),u&&N==c||(d=f.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",c),u=h.appendChild(d),e.ie&&e.win&&"undefined"!=typeof f.styleSheets&&0<f.styleSheets.length&&(u=f.styleSheets[f.styleSheets.length-1]),N=c),e.ie&&e.win?u&&"object"==typeof u.addRule&&u.addRule(a,b):u&&"undefined"!=typeof f.createTextNode&&u.appendChild(f.createTextNode(a+" {"+b+"}")))}}function C(a,b){if(S){var c=
b?"visible":"hidden";B&&r(a)?r(a).style.visibility=c:R("#"+a,"visibility:"+c)}}function T(a){return null!=/[\\\"<>\.;]/.exec(a)&&"undefined"!=typeof encodeURIComponent?encodeURIComponent(a):a}var q=window,f=document,A=navigator,U=!1,H=[function(){U?d():g()}],y=[],L=[],D=[],F,K,M,P,B=!1,J=!1,u,N,S=!0,e=function(){var a="undefined"!=typeof f.getElementById&&"undefined"!=typeof f.getElementsByTagName&&"undefined"!=typeof f.createElement,b=A.userAgent.toLowerCase(),c=A.platform.toLowerCase(),d=c?/win/.test(c):
/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,e=!+"\v1",g=[0,0,0],l=null;if("undefined"!=typeof A.plugins&&"object"==typeof A.plugins["Shockwave Flash"])!(l=A.plugins["Shockwave Flash"].description)||"undefined"!=typeof A.mimeTypes&&A.mimeTypes["application/x-shockwave-flash"]&&!A.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(U=!0,e=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),g[0]=parseInt(l.replace(/^(.*)\..*$/,
"$1"),10),g[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),g[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if("undefined"!=typeof q.ActiveXObject)try{if(l=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))e=!0,l=l.split(" ")[1].split(","),g=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]}catch(W){}return{w3:a,pv:g,wk:b,ie:e,win:d,mac:c}}();(function(){e.w3&&(("undefined"!=typeof f.readyState&&"complete"==f.readyState||"undefined"==
typeof f.readyState&&(f.getElementsByTagName("body")[0]||f.body))&&a(),B||("undefined"!=typeof f.addEventListener&&f.addEventListener("DOMContentLoaded",a,!1),e.ie&&e.win&&(f.attachEvent("onreadystatechange",function(){"complete"==f.readyState&&(f.detachEvent("onreadystatechange",arguments.callee),a())}),q==top&&function(){if(!B){try{f.documentElement.doScroll("left")}catch(h){setTimeout(arguments.callee,0);return}a()}}()),e.wk&&function(){B||(/loaded|complete/.test(f.readyState)?a():setTimeout(arguments.callee,
0))}(),c(a)))})();(function(){e.ie&&e.win&&window.attachEvent("onunload",function(){for(var a=D.length,b=0;b<a;b++)D[b][0].detachEvent(D[b][1],D[b][2]);a=L.length;for(b=0;b<a;b++)Q(L[b]);for(var c in e)e[c]=null;e=null;for(var d in ex_swfobject)ex_swfobject[d]=null;ex_swfobject=null})})();return{registerObject:function(a,b,c,d){if(e.w3&&a&&b){var h={};h.id=a;h.swfVersion=b;h.expressInstall=c;h.callbackFn=d;y[y.length]=h;C(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(e.w3)return p(a)},
embedSWF:function(a,c,d,f,g,p,n,q,r,u){var h={success:!1,id:c};e.w3&&!(e.wk&&312>e.wk)&&a&&c&&d&&f&&g?(C(c,!1),b(function(){d+="";f+="";var b={};if(r&&"object"===typeof r)for(var e in r)b[e]=r[e];b.data=a;b.width=d;b.height=f;e={};if(q&&"object"===typeof q)for(var m in q)e[m]=q[m];if(n&&"object"===typeof n)for(var v in n)e.flashvars="undefined"!=typeof e.flashvars?e.flashvars+("&"+v+"="+n[v]):v+"="+n[v];if(I(g))m=G(b,e,c),b.id==c&&C(c,!0),h.success=!0,h.ref=m;else{if(p&&w()){b.data=p;l(b,e,c,u);return}C(c,
!0)}u&&u(h)})):u&&u(h)},switchOffAutoHideShow:function(){S=!1},ua:e,getFlashPlayerVersion:function(){return{major:e.pv[0],minor:e.pv[1],release:e.pv[2]}},hasFlashPlayerVersion:I,createSWF:function(a,b,c){if(e.w3)return G(a,b,c)},showExpressInstall:function(a,b,c,d){e.w3&&w()&&l(a,b,c,d)},removeSWF:function(a){e.w3&&Q(a)},createCSS:function(a,b,c,d){e.w3&&R(a,b,c,d)},addDomLoadEvent:b,addLoadEvent:c,getQueryParamValue:function(a){var b=f.location.search||f.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);
if(null==a)return T(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return T(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(J){var a=r("SWFObjectExprInst");a&&F&&(a.parentNode.replaceChild(F,a),K&&(C(K,!0),e.ie&&e.win&&(F.style.display="block")),M&&M(P));J=!1}}}}(),forGreatJustice=function(){var a=this.console,b=a&&a.log,c=!b||b.call?0:a.log=function(){c.apply.call(b,a,arguments)}};try{forGreatJustice()}catch(a){}
__browserDetails=function(){var a=navigator.userAgent,b,c=a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(c[1]))return b=/\brv[ :]+(\d+)/g.exec(a)||[],"IE "+(b[1]||"");if("Chrome"===c[1]&&(b=a.match(/\bOPR\/(\d+)/),null!=b))return"Opera "+b[1];c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"];null!=(b=a.match(/version\/(\d+)/i))&&c.splice(1,1,b[1]);return{browser:c[0],version:parseInt(c[1])}}();
(function(){for(var a,b=function(){},c="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),d=c.length,g=window.console=window.console||{};d--;)a=c[d],g[a]||(g[a]=b)})();function hashCode(a){var b=0,c,d,g;if(0==a.length)return b;c=0;for(g=a.length;c<g;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b}
function flashBridge(a,b){ex_device_id_detector.setStorageReadResult(ex_storage_lso,"null"==b?null:b)}function flashSWFLoad(a){a.success||ex_device_id_detector.setStorageReadResult(ex_storage_lso,null)}
function silverlightPluginLoaded(a,b){try{ex_device_id_detector.setStorageReadResult(ex_storage_silverlightStorage,document.getElementById("storageSL").Content.storageSL.getDeviceID()),ex_device_id_detector.device_id&&document.getElementById("storageSL").Content.storageSL.saveDeviceID(ex_device_id_detector.device_id)}catch(c){ex_device_id_detector.setStorageReadResult(ex_storage_silverlightStorage,null)}}
var ex_messages_logger={callback:null,log:function(a){if("function"==typeof this.callback)try{this.callback(a)}catch(b){}location.href.match(/forGreatJustice/i)&&console.log.apply(console,[a])}};try{void 0!=window._axlog.callback&&(ex_messages_logger.callback=window._axlog.callback)}catch(a){}
var ex_storage_cookie={name:"ex_storage_cookie",secure:0,cookieHelper:{getCookieVal:function(a){return(a=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):""},GetCookie:function(a){a+="=";for(var b=a.length,c=document.cookie.length,d=0;d<c;){var g=d+b;if(document.cookie.substring(d,g)==a)return this.getCookieVal(g);d=document.cookie.indexOf(" ",d)+1;if(0==d)break}return null},DeleteCookie:function(a,b,c){this.GetCookie(a)&&
(document.cookie=a+"="+(b?"; path="+b:"")+(c?"; domain="+c:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT")},SetCookie:function(a,b,c,d,g,p){document.cookie=a+"="+encodeURIComponent(b)+(c?"; expires="+c.toGMTString():"")+(d?"; path="+d:"")+(g?"; domain="+g:"")+(p?"; secure":"")}},getHost:function(){var a=document.location.host;0==a.indexOf("www.")&&(a=a.replace("www.",""));return a},readDeviceID:function(){ex_device_id_detector.setStorageReadResult(this,this.cookieHelper.getCookieVal(ex_device_id_detector.settings.device_id_key))},
writeDeviceID:function(a){var b=new Date((new Date).getTime()+31536E6);this.cookieHelper.SetCookie(ex_device_id_detector.settings.device_id_key,a,b,"/",this.getHost(),0==this.secure?!1:!0)}},ex_storage_cookie3d_etag={name:"ex_storage_cookie3d_etag",readDeviceID:function(){this.createCookieScript(ex_device_id_detector.resources+"pl.php?name="+ex_device_id_detector.settings.device_id_key+"&"+Math.floor(1E5*Math.random()))},writeDeviceID:function(a){this.createCookieScript(ex_device_id_detector.resources+
"pl.php?name="+ex_device_id_detector.settings.device_id_key+"&value="+a)},createCookieScript:function(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript";c.src=a;b.appendChild(c)}},ex_storage_lso={name:"ex_storage_lso",flashID:"swfcontainer"+(new Date).getTime(),flashvars:{upgrade:"0.4.0",allowSciptAccess:"always",paramValue:""},params:{swliveconnect:"true",allowscriptaccess:"always"},attributes:{id:"",name:""},createFlash:function(){this.flashvars.paramName=
ex_device_id_detector.settings.device_id_key;this.attributes.id=this.flashID;this.attributes.name=this.flashID;var a=document.createElement("div");a.id=this.flashID;document.body.appendChild(a);ex_swfobject.embedSWF(ex_device_id_detector.static_resources+"sctr.swf",this.flashID,"1","1","9",!1,this.flashvars,this.params,this.attributes,flashSWFLoad)},readDeviceID:function(){this.createFlash()},writeDeviceID:function(a){this.flashvars.paramValue=a;this.createFlash()}},ex_storage_localStorage={name:"ex_storage_localStorage",
readDeviceID:function(){try{window.localStorage?ex_device_id_detector.setStorageReadResult(this,localStorage.getItem(ex_device_id_detector.settings.device_id_key).toString()):ex_device_id_detector.setStorageReadResult(this,null)}catch(a){ex_device_id_detector.setStorageReadResult(this,null)}},writeDeviceID:function(a){try{window.localStorage&&localStorage.setItem(ex_device_id_detector.settings.device_id_key,a)}catch(b){}}},ex_storage_sessionStorage={name:"ex_storage_sessionStorage",readDeviceID:function(){try{window.sessionStorage?
ex_device_id_detector.setStorageReadResult(this,sessionStorage.getItem(ex_device_id_detector.settings.device_id_key).toString()):ex_device_id_detector.setStorageReadResult(this,null)}catch(a){ex_device_id_detector.setStorageReadResult(this,null)}},writeDeviceID:function(a){try{window.sessionStorage&&sessionStorage.setItem(ex_device_id_detector.settings.device_id_key,a)}catch(b){}}},ex_storage_DBStorage={name:"ex_storage_DBStorage",database_name:"sqlite_ax",readDeviceID:function(){var a=this;try{window.openDatabase?
window.openDatabase(a.database_name,"","ax",1048576).transaction(function(b){b.executeSql("SELECT value FROM cache WHERE name=?",[ex_device_id_detector.settings.device_id_key],function(b,d){1<=d.rows.length?ex_device_id_detector.setStorageReadResult(a,d.rows.item(0).value):ex_device_id_detector.setStorageReadResult(a,null)},function(b,d){ex_device_id_detector.setStorageReadResult(a,null)})}):ex_device_id_detector.setStorageReadResult(a,null)}catch(b){ex_device_id_detector.setStorageReadResult(a,null)}},
writeDeviceID:function(a){try{window.openDatabase&&window.openDatabase(this.database_name,"","ax",1048576).transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",[],function(a,b){},function(a,b){});b.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",[ex_device_id_detector.settings.device_id_key,a],function(a,b){},function(a,b){})})}catch(b){}}},ex_storage_indexedDBStorage=
{name:"ex_storage_indexedDBStorage",database_name:"ax",readDeviceID:function(){var a=this;try{var b=window.indexedDB.open(a.database_name);b.onerror=function(){return!0};b.onsuccess=function(c){try{b.result.transaction("cache","readwrite").objectStore("cache").get("device").onsuccess=function(b){try{var c=b.target.result;"undefined"!=typeof c.device_id?ex_device_id_detector.setStorageReadResult(a,c.device_id):ex_device_id_detector.setStorageReadResult(a,null)}catch(p){ex_device_id_detector.setStorageReadResult(a,
null)}},b.onerror=function(b){ex_device_id_detector.setStorageReadResult(a,null)}}catch(d){ex_device_id_detector.setStorageReadResult(a,null)}};b.onupgradeneeded=function(b){try{b.target.result.createObjectStore("cache",{keyPath:"key"}).createIndex("device_id","device_id",{unique:!1})}catch(d){ex_device_id_detector.setStorageReadResult(a,null)}};b.onerror=function(b){ex_device_id_detector.setStorageReadResult(a,null)}}catch(c){ex_device_id_detector.setStorageReadResult(a,null)}},writeDeviceID:function(a){try{var b=
window.indexedDB.open(this.database_name);b.onerror=function(){return!0};b.onsuccess=function(c){try{b.result.transaction("cache","readwrite").objectStore("cache").put({key:"device",device_id:a})}catch(d){}};b.onupgradeneeded=function(a){try{a.target.result.createObjectStore("cache",{keyPath:"key"}).createIndex("device_id","device_id",{unique:!1})}catch(d){}}}catch(c){}}},ex_storage_silverlightStorage={name:"ex_storage_silverlightStorage",readDeviceID:function(){try{this.checkSilverlightInstalled(null)?
this.createSilverlightObject():ex_device_id_detector.setStorageReadResult(this,null)}catch(a){ex_device_id_detector.setStorageReadResult(this,null)}},writeDeviceID:function(a){try{this.checkSilverlightInstalled(null)&&(this.createSilverlightObject(),document.getElementById("storageSL").Content.storageSL.saveDeviceID(a))}catch(b){}},createSilverlightObject:function(){if(null!=document.getElementById("storageSL"))return!1;var a="<object data='data:application/x-silverlight-2,' type='application/x-silverlight-2' id='storageSL'><param name='source' value='"+
(ex_device_id_detector.static_resources+"slapp2.xap")+"'/><param name='onLoad' value='silverlightPluginLoaded' /><param name='enableHtmlAccess' value='true' /></object>",b=document.createElement("div");b.innerHTML=a;b.style.position="absolute";b.style.top="-1000px";b.style.left="-1000px";document.body.appendChild(b)},checkSilverlightInstalled:function(a){void 0==a&&(a=null);var b=!1;try{var c=null,d=!1;if(window.ActiveXObject)try{c=new ActiveXObject("AgControl.AgControl"),null===a?b=!0:c.IsVersionSupported(a)&&
(b=!0)}catch(G){d=!0}else d=!0;if(d){var g=navigator.plugins["Silverlight Plug-In"];if(g)if(null===a)b=!0;else{var p=g.description;"1.0.30226.2"===p&&(p="2.0.30226.2");for(var w=p.split(".");3<w.length;)w.pop();for(;4>w.length;)w.push(0);for(var l=a.split(".");4<l.length;)l.pop();var n,z;a=0;do n=parseInt(l[a]),z=parseInt(w[a]),a++;while(a<l.length&&n===z);n<=z&&!isNaN(n)&&(b=!0)}}}catch(G){b=!1}return b}},ex_device_id_detector={storages:[],storages_read_state:[],device_id:"",responseSent:!1,static_resources:"",
resources:"",settings:{base_url:("https:"==document.location.protocol?"https://ssl.":"http://")+"gmyze.com/1.1",device_id_key:"__ax",custom_storages:[],timelimit:4},init:function(a){var b=this;b.settingsInit(a);b.static_resources=b.settings.base_url+"/static/";b.resources=b.settings.base_url+"/resources/";b.registerStorage(ex_storage_lso);b.registerStorage(ex_storage_cookie3d_etag);b.registerStorage(ex_storage_cookie);b.registerStorage(ex_storage_localStorage);b.registerStorage(ex_storage_sessionStorage);
b.registerStorage(ex_storage_DBStorage);b.registerStorage(ex_storage_indexedDBStorage);if(!b.isEmpty(b.settings.custom_storages))for(var c in b.settings.custom_storages)b.registerStorage(b.settings.custom_storages[c]);setTimeout(function(){if(!b.responseSent){var a=b.getDeviceID();b.isEmpty(a)&&(a=b.generateDeviceID());b.writeDeviceID(a);b.sendDeviceIDToClient(a)}},1E3*parseInt(b.settings.timelimit));b.readDeviceID()},settingsInit:function(a){for(var b in this.settings)this.settings[b]=this.getObjParam(a,
b)||this.settings[b]},getObjParam:function(a,b){for(var c in a)if(c==b)return a[c];return""},isEmpty:function(a){return"undefined"==typeof a||null==a||"null"==a||!a.length||0===a.length||"undefined"==a},generateDeviceID:function(){for(var a="aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890".split(""),b=(new Date).getTime(),c=a.length,d=Array(21),g=0;21>g;g++)g%2&&0<b?(d[g]=a[b%c],b=Math.floor(b/c)):d[g]=a[Math.floor(Math.random()*c)];return d.join("")},registerStorage:function(a){this.storages.push(a);
this.storages_read_state[a.name]=!1;this.log("Registered storage '"+a.name+"'")},log:function(a){ex_messages_logger.log("ex_device_id_detector: "+a)},readDeviceID:function(){for(var a=0;a<this.storages.length;a++){var b=this.storages[a];this.log("reading device ID from storage '"+b.name+"'");setTimeout(b.name+".readDeviceID();",0)}},writeDeviceID:function(a){this.device_id=a;for(var b=0;b<this.storages.length;b++){var c=this.storages[b];this.log("writing device ID '"+a+"' to storage '"+c.name+"'");
setTimeout(c.name+'.writeDeviceID("'+a+'");',0)}},getDeviceID:function(){return this.device_id},setStorageReadResult:function(a,b){this.log("Storage '"+a.name+"' got device_id: '"+b+"'");var c={name:"ex_device_id_detector.storageGotDeviceID",storage:a.name,device_id:b};ex_device_info_detector.fireEvent(c);if(this.responseSent)return!1;this.storages_read_state[a.name]=!0;this.isEmpty(b)||(this.device_id=b);this.isEmpty(this.device_id)||(this.writeDeviceID(this.device_id),this.sendDeviceIDToClient(this.device_id));
this.allStoragesHaveCompletedRead()&&(this.log("all storages have completed read"),c={name:"ex_device_id_detector.allStoragesHaveCompletedRead"},ex_device_info_detector.fireEvent(c),this.responseSent||(this.isEmpty(this.device_id)&&(this.device_id=this.generateDeviceID()),this.writeDeviceID(this.device_id),this.sendDeviceIDToClient(this.device_id)))},allStoragesHaveCompletedRead:function(){for(var a=0;a<this.storages.length;a++)if(0==this.storages_read_state[this.storages[a].name])return!1;return!0},
sendDeviceIDToClient:function(a){this.responseSent=!0;ex_device_info_detector.setDeviceID(a)}},_fingerprint,ex_engine_browser={name:"ex_engine_browser",getFingerprint:function(){return window.navigator.userAgent.toLowerCase()}},ex_engine_display={name:"ex_engine_display",getFingerprint:function(){t="";self.screen&&(t+=screen.colorDepth+ex_fingerprint_detector.separator+screen.width+ex_fingerprint_detector.separator+screen.height+ex_fingerprint_detector.separator+screen.availHeight);return t}},ex_engine_plugins=
{name:"ex_engine_plugins",activeXDetect:function(a){componentVersion=document.body.getComponentVersion("{"+a+"}","ComponentID");return null!=componentVersion?componentVersion:!1},stripIllegalChars:function(a){t="";a=a.toLowerCase();for(i=0;i<a.length;i++)"\n"!=a.charAt(i)&&"/"!=a.charAt(i)&&"\\"!=a.charAt(i)?t+=a.charAt(i):"\n"==a.charAt(i)&&(t+="n");return t},stripFullPath:function(a,b){fileName=a;filenameStart=0;filenameStart=fileName.lastIndexOf(b);0>filenameStart&&(filenameStart=0);filenameFinish=
fileName.length;return fileName=fileName.substring(filenameStart+b.length,filenameFinish)},getFingerprint:function(){var a="",b;isFirst=!0;var c=window.navigator.userAgent.toLowerCase();b=0<=c.indexOf("opera");c=0<=c.indexOf("msie")&&!b;if(0<window.navigator.plugins.length)if(b){temp="";lastDir="Plugins";for(b=0;b<window.navigator.plugins.length;b++)plugin=window.navigator.plugins[b],1==isFirst?(temp+=this.stripFullPath(plugin.filename,lastDir),isFirst=!1):temp+=ex_fingerprint_detector.separator+
this.stripFullPath(plugin.filename,lastDir);a=this.stripIllegalChars(temp)}else for(b=0;b<window.navigator.plugins.length;b++)plugin=window.navigator.plugins[b],1==isFirst?(a+=plugin.filename,isFirst=!1):a+=ex_fingerprint_detector.separator+plugin.filename;else if(0<window.navigator.mimeTypes.length)for(b=0;b<window.navigator.mimeTypes.length;b++)mimeType=window.navigator.mimeTypes[b],1==isFirst?(a+=mimeType.type,isFirst=!1):a+=ex_fingerprint_detector.separator+mimeType.type;else if(c)for(components=
"7790769C-0471-11D2-AF11-00C04FA35D02 89820200-ECBD-11CF-8B85-00AA005B4340 283807B5-2C60-11D0-A31D-00AA00B92C03 4F216970-C90C-11D1-B5C7-0000F8051515 44BBA848-CC51-11CF-AAFA-00AA00B6015C 9381D8F2-0288-11D0-9501-00AA00B911A5 4F216970-C90C-11D1-B5C7-0000F8051515 5A8D6EE0-3E18-11D0-821E-444553540000 89820200-ECBD-11CF-8B85-00AA005B4383 08B0E5C0-4FCB-11CF-AAA5-00401C608555 45EA75A0-A269-11D1-B5BF-0000F8051515 DE5AED00-A4BF-11D1-9948-00C04F98BBC9 22D6F312-B0F6-11D0-94AB-0080C74C7E95 44BBA842-CC51-11CF-AAFA-00AA00B6015B 3AF36230-A269-11D1-B5BF-0000F8051515 44BBA840-CC51-11CF-AAFA-00AA00B6015C CC2A9BA0-3BDD-11D0-821E-444553540000 08B0E5C0-4FCB-11CF-AAA5-00401C608500 D27CDB6E-AE6D-11CF-96B8-444553540000 2A202491-F00D-11CF-87CC-0020AFEECF20".split(" "),
document.body.addBehavior("#default#clientCaps"),b=0;b<components.length;b++)(ver=this.activeXDetect(components[b]))?1==isFirst?(a+=ver,isFirst=!1):a+=ex_fingerprint_detector.separator+ver:a+=ex_fingerprint_detector.separator+"null";return a}},ex_engine_os={name:"ex_engine_os",getFingerprint:function(){return window.navigator.platform}},ex_engine_fonts={name:"ex_engine_fonts",baseFonts:["monospace","sans-serif","serif"],testString:"mmmmmmmmmmlli",testSize:"72px",defaultWidth:[],defaultHeight:[],test_span:"",
init:function(){var a=document.getElementsByTagName("body")[0];this.test_span=document.createElement("span");this.test_span.style.fontSize=this.testSize;this.test_span.style.position="absolute";this.test_span.style.top="-100px";this.test_span.innerHTML=this.testString;a.appendChild(this.test_span);for(var b in this.baseFonts)this.test_span.style.fontFamily=this.baseFonts[b],this.defaultWidth[this.baseFonts[b]]=this.test_span.offsetWidth,this.defaultHeight[this.baseFonts[b]]=this.test_span.offsetHeight},
detect:function(a){for(var b=0;b<this.baseFonts.length;b++)if(this.test_span.style.fontFamily=a+","+this.baseFonts[b],this.test_span.offsetWidth!=this.defaultWidth[this.baseFonts[b]]||this.test_span.offsetHeight!=this.defaultHeight[this.baseFonts[b]])return!0;return!1},getFingerprint:function(){try{if(window.self!==window.top)return""}catch(z){return""}this.init();for(var a="Helvetica;Lucida Grande;Lucida Sans;Tahoma;Arial;Verdana;Geneva;Monaco;Microsoft Sans Serif;Lucida Bright;Lucida Sans;Lucida Sans Typewriter;Comic Sans MS;Lucida Sans Unicode;Palatino Linotype;Helvetica Neue;Verdana;Sylfaen;MV Boli;Trebuchet MS;DejaVu Sans;DejaVu Sans Mono;DejaVu Serif;Tunga;Estrangelo Edessa;Gautami;Mangal;Raavi;Latha;Shruti;Gill Sans;Arial Narrow;Impact;Arial Rounded MT Bold;Andale Mono;Futura;DejaVu Sans Light;Optima;Didot;Papyrus;Big Caslon;Kartika;Vrinda;Brush Script MT;Herculanum;Bitstream Charter;Liberation Serif;Liberation Mono;Calibri;Cambria;Liberation Sans;Candara;Corbel;Palatino;Century Gothic;FreeSans;Garamond;Book Antiqua;Bookman Old Style;FreeMono;Segoe UI;Kokonor;Kailasa;Monotype Corsiva;MS Mincho;Lucida Bright;MS Reference Sans Serif;Lucida Sans Typewriter;Meiryo UI;Arial Unicode MS;Tempus Sans ITC;Mistral;Juice ITC;Malgun Gothic;Microsoft Himalaya;Microsoft JhengHei;Microsoft YaHei;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Freestyle Script;Microsoft Uighur;MoolBoran;Gisha;Leelawadee;DFKai-SB;KaiTi;FangSong;UnDotum;Batang;Lohit Bengali;Haettenschweiler;Arial Black;Copperplate Gothic Light;Copperplate Gothic Bold;Maiandra GD;Eras Demi ITC;Perpetua;Rockwell;MS PGothic;Rockwell Extra Bold;MS Gothic;MS Mincho;Segoe Script;Casual;MS UI Gothic;Onyx;Playbill;GungsuhChe;Snap ITC;DaunPenh;Broadway;Dotum;DotumChe;DokChampa;Vladimir Script;Arabic Typesetting;Bernard MT Condensed;Stencil;Bell MT;Ravie;Gabriola;Berlin Sans FB;Centaur;Ubuntu;Californian FB;Mukti Narrow;Purisa;Niagara Engraved;Niagara Solid;Lohit Hindi;SimHei;Garuda;Loma;Norasi;Tlwg Typist;TlwgTypewriter;Brush Script MT;Kinnari;TlwgMono;utkal;Bodoni MT Poster Compressed;Century Gothic;Mallige;Vemana2000;KacstOne;Berlin Sans FB Demi;Tlwg Typo;Magneto;Aparajita;Book Antiqua;Bookman Old Style;Lucida Handwriting;Gill Sans MT;Century Schoolbook;Monotype Corsiva;Century Schoolbook;Calisto MT;Copperplate Gothic Bold;Haettenschweiler;Goudy Old Style;Script MT Bold;Gill Sans MT Condensed;Gill Sans Ultra Bold;Imprint MT Shadow;Braggadocio;Gill Sans MT Ext Condensed Bold;Palace Script MT;Goudy Stout;News Gothic MT;Playbill;Rockwell Condensed;Castellar;Forte;Agency FB;Rage Italic;Gill Sans Ultra Bold Condensed;Tw Cen MT;Colonna MT;Tw Cen MT Condensed;Britannic Bold;Desdemona;Wide Latin;Gigi;Gloucester MT Extra Condensed;Tw Cen MT Condensed Extra Bold;Footlight MT Light;Matura MT Script Capitals;Perpetua Titling MT;Abadi MT Condensed Light;Adobe Ming Std;Adobe Myungjo Std;Kino MT;Adobe Song Std;Bodoni MT;Bodoni MT Black;Bodoni MT Condensed;Adobe Fangsong Std;Adobe Heiti Std;Adobe Kaiti Std;MS Reference Sans Serif;Calibri;Ubuntu Light;Lucida Sans;Lucida Bright;Lucida Sans Typewriter;Cambria;Consolas;Corbel;Candara;Capitals;Constantia;Adobe Fan Heiti Std;Adobe Gothic Std;Adobe Arabic;Adobe Hebrew;Kozuka Gothic Pr6N;Kozuka Mincho Pr6N;Bitstream Vera Sans;Bitstream Vera Sans Mono;DejaVu Sans;Bitstream Vera Serif;DejaVu Sans Mono;DejaVu Sans Condensed;DejaVu Serif;DejaVu Serif Condensed;Gabriola;Gentium;Utopia;Eurostile;Metal;Luxi Sans;Luxi Mono;Luxi Serif;Matisse ITC;Electron;Nice;Bitstream Vera Sans Mono;Courier;Domestic Manners;Dustismo;MgOpen Modata;MgOpen Moderna;MgOpen Canonica;MgOpen Cosmetica;AR PL UMing CN;AR PL UMing HK;AR PL UMing TW;AR PL UMing TW MBE;Staccato222 BT;Penguin Attack;Balker;Marked Fool;Bitstream Vera Sans;Univers;Junkyard;Linux Libertine O;Bitstream Vera Serif;Linux Biolinum O;Broadway BT;Square721 BT;ParkAvenue BT;MisterEarl BT;Calligraph421 BT;DejaVu LGC Sans Mono;Cataneo BT;Rage Italic LET;La Bamba LET;Blackletter686 BT;Ruach LET;John Handy LET;DejaVu LGC Sans;DejaVu LGC Sans Condensed;DejaVu LGC Sans Light;DejaVu LGC Serif;DejaVu LGC Serif Condensed;Isabella;Linux Libertine;Scruff LET;Westwood LET;AlArabiya;Milano LET;Tiranti Solid LET;One Stroke Script LET;Orange LET;Smudger LET;Victorian LET;Academy Engraved LET;Mekanik LET;Odessa LET;Pump Demi Bold LET;Quixley LET;Inconsolata;Jokerman LET;OldDreadfulNo7 BT;University Roman LET;Highlight LET;Nimbus Sans L Condensed;Gotham;Helvetica;News Gothic Std;AlBattar;AlHor;AlManzomah;Arab;Cortoba;Dimnah;Furat;Granada;Graph;Hani;Hor;Interstate;Japan;Jet;Khalid;Mashq;Mashq-Bold;Nada;Nagham;Ostorah;Ouhod-Bold;Petra;Rasheeq-Bold;Rehan;Salem;Shado;Sharjah;Tarablus;Tholoth;Chicago;Textile;Linux Libertine C;TradeGothic;Hypatia Sans Pro;Frutiger LT Std;Myriad Std;Garamond;Bitstream Vera Sans Mono;Charcoal;Gadget;Avenir;Techno;Delicious;Bitstream Vera Serif;Bitstream Vera Sans;Baby Kruffy;Berthold Akzidenz Grotesk BE;New York;DINSchrift;Sand;ITC Franklin Gothic;Abadi MT Condensed Light;Verdana Ref;Univers;Helvetica Narrow;Caflisch Script Pro;Ubuntu;Alba Super;Caslon;Andale Mono;Kabel Ult BT;Alba;AlMateen-Bold;AlMohanad;AlMothnna-Bold;Andy;Alba Matter;Palatino;Times;Bembo;News Gothic MT;Chick;Adobe Garamond;Bernhard Modern Std;Beesknees ITC;New Century Schoolbook;HelveticaNeue;Minion Std;Frosty;Braggadocio;Kino MT;Formata;ITC Franklin Gothic Std;Pussycat;GENUINE;OCRB;Freshbot;Jenkins v2.0;Placard Condensed;Gentium;Croobie;GlooGun;Weltron Urban;Abadi MT Condensed Extra Bold;Jokewood;Pepita MT;Arial Narrow;Georgia Ref;Fat;Ubuntu;Gentium;Andale Mono IPA;RotisSemiSans;Sabon;Ubuntu Light;Monaco;Runic MT Condensed;Shelley;Courier Std;Desdemona;Bickley Script;Porcelain;Geneva;Helvetica Neue;A Charming Font;Champignon;Apple Casual;Futura;Apple Chancery;Belwe;FreeSans;Minion Web;New York;Algerian;Mead Bold;Avant Garde;FIRSTHOME;Hoefler Text;Helvetica;Monotype.com;FreeSerif;Zapf Chancery;DecoType Naskh;The Sans-;Ubuntu-Title;Caslon;FreeMono;Imprint MT Shadow;04b_21;BudHand;Minion Web;Palatino;Linux Libertine O;Monotype.com;URW Antiqua T;URW Grotesk T;Ubuntu-Title;Helvetica Narrow;Linux Biolinum O".split(";"),
b="jigurdaxyz".split(""),c=0,d="",g,p="",w=0;w<a.length;w++){g=this.detect(a[w])?"1":"0";if(d==g)c++;else if(""!=d){if(1<c){for(var c=c.toString(),c=c.split(""),l="",n=0;n<c.length;n++)l+=b[c[n]];p+=l+d}else for(l=0;l<c;l++)p+=d;c=1}else c++;d=g}if(1<c){c=c.toString();c=c.split("");l="";for(n=0;n<c.length;n++)l+=b[c[n]];p+=l+d}else for(l=0;l<c;l++)p+=d;document.getElementsByTagName("body")[0].removeChild(this.test_span);return p}},ex_engine_timezone={name:"ex_engine_timezone",getFingerprint:function(){var a=
(new Date).toString(),b=-1<a.indexOf("(")?a.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join(""):a.match(/[A-Z]{3,4}/)[0];"GMT"==b&&/(GMT\W*\d{4})/.test(a)&&(b=RegExp.$1);return b}},ex_engine_canvas={name:"ex_engine_canvas",getFingerprint:function(){try{return canvas=document.createElement("canvas"),canvas.height=60,canvas.width=400,canvasContext=canvas.getContext("2d"),canvas.style.display="inline",canvasContext.textBaseline="alphabetic",canvasContext.fillStyle="#f60",canvasContext.fillRect(125,1,62,
20),canvasContext.fillStyle="#069",canvasContext.font="11pt no-real-font-123",canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),canvasContext.fillStyle="rgba(102, 204, 0, 0.7)",canvasContext.font="18pt Arial",canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),hashCode(canvas.toDataURL().toString())}catch(a){return null}}},ex_fingerprint_detector={separator:"#",engines:[],result_field:"fingerprint",isEmpty:function(a){return"undefined"==typeof a||
null==a||"null"==a||!a.length||0===a.length||"undefined"==a},registerEngine:function(a){this.engines.push(a);this.log("Registered engine '"+a.name+"'")},getFingerprint:function(){for(var a=[],b=0;b<this.engines.length;b++){this.log(this.engines[b].name+" start");try{var c=this.engines[b].getFingerprint()}catch(d){c=""}this.log(this.engines[b].name+" end");a.push(c)}c=a.join("|");ex_device_info_detector.setFingerprint(c)},log:function(a){ex_messages_logger.log("ex_fingerprint_detector: "+a)}};try{ex_fingerprint_detector.registerEngine(ex_engine_browser)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_display)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_plugins)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_os)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_fonts)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_timezone)}catch(a){}try{ex_fingerprint_detector.registerEngine(ex_engine_canvas)}catch(a){}
var ex_device_info_detector={device_id:"",fingerprint:"",keyups:0,infoSent:!1,settings:{js_callback:null,eventListener:null,devidAxInFld:null,timelimit:5,version:"1.1"},init:function(a){var b=this,c;for(c in b.settings)b.settings[c]=b.getObjParam(a,c)||b.settings[c],"devidAxInFld"!=c||b.isEmpty(b.settings[c])||(b.settings[c]=b.settings[c].replace(RegExp(" ","g"),"").replace(RegExp("%20","g"),""));ex_device_info_detector.fireEvent({name:"ex_device_info_detector.init"});setTimeout(function(){0==b.infoSent&&
b.sendDeviceInfoToClient()},1E3*parseInt(b.settings.timelimit))},getObjParam:function(a,b){for(var c in a)if(c==b)return a[c];return""},isEmpty:function(a){return"undefined"==typeof a||null==a||"null"==a||!a.length||0===a.length||"undefined"==a},setDeviceID:function(a){this.log("got DeviceID '"+a+"'");ex_device_info_detector.fireEvent({name:"ex_device_info_detector.gotDeviceID",device_id:a});this.device_id=a;this.isEmpty(this.device_id)||this.isEmpty(this.fingerprint)||this.sendDeviceInfoToClient()},
setFingerprint:function(a){this.log("got Fingerprint '"+a+"'");ex_device_info_detector.fireEvent({name:"ex_device_info_detector.gotFingerprint",fingerprint:a});this.fingerprint=a;this.isEmpty(this.device_id)||this.isEmpty(this.fingerprint)||this.sendDeviceInfoToClient()},sendDeviceInfoToClient:function(){this.infoSent=!0;var a=this.settings.version+"|"+this.device_id+"|"+this.fingerprint;this.log("Sending Device info '"+a+"' to client");if(!this.isEmpty(this.settings.devidAxInFld)){var b=this.settings.devidAxInFld.split(",");
for(k in b)try{document.getElementById(b[k]).value=a}catch(c){}}if("string"==typeof this.settings.js_callback&&!this.isEmpty(this.settings.js_callback))try{(0,window[this.settings.js_callback])(a)}catch(c){}if("function"==typeof this.settings.js_callback)try{this.settings.js_callback(a)}catch(c){}},log:function(a){ex_messages_logger.log("ex_device_info_detector: "+a)},fireEvent:function(a){if("function"==typeof this.settings.eventListener)try{this.settings.eventListener(a)}catch(b){}}};ex_messages_logger.log("ax.js loaded");
function __onload_handler(){ex_messages_logger.log("running __onload_handler");ex_device_info_detector.init(_axq);try{ex_device_id_detector_params=void 0!=window._axd?window._axd:[]}catch(a){ex_device_id_detector_params=[]}ex_device_id_detector.init(ex_device_id_detector_params);try{ex_fingerprint_detector.getFingerprint()}catch(a){}}setTimeout(__onload_handler,300);function ax_addEventHandler(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}
function ax_keyupHandler(){ex_device_info_detector.keyups++;ex_device_info_detector.sendDeviceInfoToClient()};
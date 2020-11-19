/*! Version 1.2.2 */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var i,a,c=self.console,l=Object.freeze({NONE:0,ERROR:1,WARN:2,INFO:3,LOG:4}),u=["error","warn","info","log"],d=window.Rollbar&&window.Rollbar.options.enabled,s={debug:["critical","error","warn","debug","log"],info:["critical","error","warn","info"],warning:["critical","error","warn"],error:["critical","error"],critical:["critical"]},f=void 0!==c&&void 0!==c.log&&void 0!==c.error&&void 0!==c.debug&&void 0!==c.warn&&"function"==typeof Function.prototype.apply,p=function(e,t,n,r){return c[t]?n?c[t](n):c[t]():e.log("----------- ".concat(n||r," ----------- "))},g=function(e){var t=e.level,n={setLevel:function(e){return t=e,n},getLevel:function(){return t||i}};return u.forEach(function(e){n[e]=function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(e,t,n){if(f){var o,i=u.indexOf(t),a=e.getLevel();return~i&&a>=i+1&&c[t].apply(c,r(n)),d&&~s[window.Rollbar.options.reportLevel].indexOf(t)&&(o=window.Rollbar)[t].apply(o,r(n)),e}}(n,e,o)}}),n.groupCollapsed=function(e){return p(n,"groupCollapsed",e,"GROUP START")},n.group=function(e){return p(n,"group",e,"GROUP START")},n.groupEnd=function(){return p(n,"groupEnd",null,"GROUP END")},n.devError=function(){0},n.debug=n.log,n},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.level=e.level||l.NONE;var t=e.newInstance||!a?g(e):a;return a||e.newInstance||(a=t),t},v=h,m={LOCAL:"local",URL:"url",CAMERA:"camera",IMAGE_SEARCH:"image_search",GOOGLE_DRIVE:"google_drive",DROPBOX:"dropbox",FACEBOOK:"facebook",INSTAGRAM:"instagram",SHUTTERSTOCK:"shutterstock"},b="upload-finish",y="widget-view-change",w="display-changed",O="uw_init",x="uw_mini",j="uw_config",P="uw_prepare",E="uw_prebatch",S="uw_event",C="uw_show",I="uw_hide",k="uw_tags",A="uw_upload_presets",_="uw_file",M="uw_clientbatch",D="uw_metadata_schema",N=["buttonCaption","buttonClass","queueViewPosition","controlVpMeta","fieldName","frameZIndex","widgetHost","thumbnails","thumbnailTransformation"],R=(["sources","secure","defaultSource","uploadHost"].concat(["googleApiKey","dropboxAppKey","facebookAppId","instagramServer","shutterstockServer","googleDriveClientId","searchBySites","searchByRights"]).concat(["theme","text","language","styles"]).concat(["showPoweredBy","showInsecurePreview","encryption"]).concat(["uploadPrefix","debug","dev","staging"]).concat(N).concat(["cropping","croppingAspectRatio","croppingDefaultSelectionRatio","croppingShowDimensions","croppingCoordinatesMode","croppingShowBackButton","croppingValidateDimensions","showSkipCropButton"]),{INITIAL:"initial",EXPANDED:"expanded",MINI:"minimized"}),T=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=(o=o||self).document.createElement(e);if(t=t||{},n&&(t.class=n),t){var a=t;Object.keys(a).forEach(function(e){return i.setAttribute(e,a[e])})}if(r){var c=r;Object.keys(c).forEach(function(e){return i.dataset[e]=c[e]})}return i},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t=t||self,function(e){return"string"==typeof e}(e)?t.document.querySelector(e):e},U=function(e){e.parentNode&&e.parentNode.removeChild(e)},W=function(e,t){Object.keys(t).forEach(function(n){e.style[n]=t[n]})},F=function(e){W(e,{display:"none"})},z="FileReader"in self&&"FileList"in self&&"Blob"in self,B=function(e){return"string"==typeof e},H=function(e){return"function"==typeof e},q=function(e,t){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)},V=500,G=55,$="right:35px",K="(min-width: 767px)",X=610,J="hidden",Q="shown";function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=h(),te=function(e,t,n){var r,o,i=/cloudinary\.com/;ee.log("[all.comms]: using pm domain regex =  ".concat(i.toString()));var a=function(e,t){n.widgetCallback&&n.widgetCallback(t,e)},c=function(e){var t;try{B(e)&&(t=JSON.parse(e))}catch(t){ee.log("[all.comms]: failed to deserialize message: ",e)}return t},l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{type:e,data:t}:function(e,t){return JSON.stringify({type:e,data:t})}(e,t);n.postMessage(r)},u=function(e){a({info:e,event:w,uw_event:!0,data:{event:w,info:e}})},d=(Z(r={},y,function(e){n.handleWidgetViewTypeChange(e.info);var t=e.info.type===R.MINI?R.MINI:R.EXPANDED;u(t)}),Z(r,b,function(e){if(ee.log("[all.comms]: received uploaded file data - ",e),e.info.failed)a(e.info,{status:e.info.status,statusText:e.info.statusText}),n.triggerEvent("cloudinarywidgetfileuploadfail",[e.info]);else{var t=e.info.uploadInfo,r={event:"success",info:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({id:e.info.id,batchId:e.info.batchId},t)};n.processUploadResult(t),a(r),n.triggerEvent("cloudinarywidgetfileuploadsuccess",r)}}),r),s=(Z(o={},S,function(e,t){e.event&&d[e.event]?d[e.event](e,t):a({info:e.info,event:e.event,uw_event:!0,data:e})}),Z(o,I,function(){n.hideWidget();var e={event:"close",info:{message:"user closed the widget"}};a(e),n.triggerEvent("cloudinarywidgetclosed",e),u(J)}),Z(o,P,function(e,t){var n=function(e){return l(P,e)},r=t.prepareUploadParams||t.uploadSignature;"function"==typeof r?r(function(e){ee.log("[all.comms]: received prepared data from client: ",e);var t=[].concat(e).map(function(e){return"string"==typeof e?{signature:e}:e});n(t)},e.request):"string"==typeof t.uploadSignature&&n([{signature:t.uploadSignature}])}),Z(o,E,function(e,t){if("function"!=typeof t.preBatch)throw new Error("UploadWidget - preBatch handler not found!");t.preBatch(function(e){ee.log("[all.comms]: received pre-batch data from client: ",e),l(E,e)},e.request)}),Z(o,k,function(e,t){t.getTags(function(e){ee.log("[all.comms]: received tags from client: ",e),l(k,{tags:e})},e.prefix)}),Z(o,A,function(e,t){t.getUploadPresets(function(e){ee.log("[all.comms]: received uploadPresets from client: ",e),l(A,{uploadPresets:e})})}),Z(o,D,function(e,t){t.getMetadataSchema(function(e){ee.log("[all.comms]: received metadata schema from client: ",e),l(D,e)},e)}),o);return window.addEventListener("message",function(t){var n=e();if(t.origin.match(i)){var r=c(t.data),o=!1;r&&r.widgetId&&r.widgetId===n.widgetId&&(ee.log("[all.comms]: received message from widget: ".concat(n.widgetId),r),s[r.type]&&(o=!0,s[r.type](r,n))),o||ee.log("[all.comms]: received invalid message, invalid widget ID or invalid type! ",t.data)}}),{sendMessage:l,sendDisplayChangedCallback:u}},ne=/(left|right)(?::([0-9a-z]*))?$/,re=function(e,t,n){var r=e(),o={raw:$,side:null,offset:null},i=T("iframe",{frameborder:"no",allow:"camera",width:"100%",height:"100%"},null,{test:"uw-iframe"});W(i,{border:"none",background:"transparent"});var a=window.matchMedia(K),c=r.inlineContainer&&L(r.inlineContainer),l=r.frameContainer&&L(r.frameContainer);c&&W(c,{minHeight:"".concat(X,"px"),overflowX:"hidden"}),l&&W(l,{position:"relative"});var u,d=null,s=!1,f="",p=!1,g=!1,h=!1,v=!1,m=function(e){e.preventDefault()},b=function(){if(!c&&!l){var t=h&&v;u.body&&(d=null===d?u.body.style.overflow:d,u.body.style.overflow=t?"hidden":d),function(e){e?u.addEventListener("touchmove",m):u.removeEventListener("touchmove",m)}(t),function(t){if(!0===e().controlVpMeta)if(t){var n=L('head meta[name="viewport"]',self.top);n||(n=T("meta",{name:"viewport"},null,null,self.top),u.head.appendChild(n)),n.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}else{var r=L('head meta[name="viewport"]',self.top);s&&r?r.content=f:r&&u.head.removeChild(r)}}(t)}},y=function(){p&&g&&(F(i),h=!1,b())},w=function(){p&&g&&(!function(e){W(e,{display:"block"})}(i),h=!0,b(),i.focus())},O=function(){!function(e,t){(t||document.body).appendChild(e)}(i,c||l||void 0),c||u.addEventListener("keyup",function(e){27===e.keyCode&&y()})},x=function(t){var n="".concat(Math.min(V,window.innerWidth),"px"),r="".concat(G,"px");W(i,{width:t?"100%":n,bottom:t?"0px":"5px",height:r,top:""}),function(t){var n,r=e();if(r.queueViewPosition&&r.queueViewPosition!==o.raw||!o.side||!o.offset){o.raw=r.queueViewPosition||o.raw;var a=ne.exec(o.raw);if(!a)throw new Error("queueViewPosition param (".concat(r.queueViewPosition||"",') is invalid. (valid ex: "right:35px")'));o.side=a[1],o.offset=a[2]||"0"}n=t?{left:"0px",right:"0px"}:"left"===o.side?{left:o.offset||"",right:""}:{right:o.offset||"",left:""},W(i,n)}(t),v=!1,b()},j=function(){var e;e=c?{height:"".concat(X,"px"),width:"100%"}:{width:"100%",height:"100%",top:"0px",left:"0px",bottom:""},W(i,e),v=!0,b()},P=function(){w(),j()},E=function(e){x(!e.matches)},S=function(e){switch(a.removeListener(E),e.type){case R.INITIAL:case R.EXPANDED:j();break;case R.MINI:x(!a.matches),a.addListener(E)}},C=function(e){return i.contentWindow.postMessage(e,t)},I=function(){return g},k=function(){return p},A=function(){return p&&h},_=function(){return k()&&!v},M=function(){y(),p=!1},D=function(e){p=!0,g&&((null===e||void 0===e?void 0:e.hidden)||(P(),(null===e||void 0===e?void 0:e.files)&&F(i)))},N=function(){p&&g&&!v&&x(!a.matches)},U=function e(){i.removeEventListener("load",e),g=!0,n({open:D,close:M,showWidget:w,hideWidget:y,isFrameReady:I,isWidgetOpen:k,isWidgetMinimized:_,isWidgetShowing:A,postMessage:C,handleWidgetViewTypeChange:S,optionsUpdated:N}),P()};!function(n){u=function(){var e=self.document;try{e=self.top.document}catch(e){}return e}();var r=function(e){var t=[];return e.debug&&t.push("debug=true"),e.dev&&t.push("dev=true"),e.cloudName&&t.push("cloudName=".concat(e.cloudName)),t.push("pmHost=".concat(self.location.protocol,"//").concat(self.location.host)),t}(n),o="".concat(t,"?").concat(r.join("&"));i.setAttribute("src",o),F(i),W(i,{position:c?null:l?"absolute":"fixed",zIndex:c?null:n.frameZIndex||"1000000"}),i.addEventListener("load",U),function(){if(!0===e().controlVpMeta){var t=L('head meta[name="viewport"]',self.top);t&&(f=t.content,s=!0)}}(),O()}(r)},oe="fetch"in self;function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){"@babel/helpers - typeof";return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=n&&"object"===ce(n)?JSON.stringify(n):n,a=oe;return(a?self.fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({method:t,body:i,headers:r?new Headers(r):void 0},o.fetchOptions)):new Promise(function(n,a){var c=new XMLHttpRequest;c.open(t,e),o.responseType&&(c.responseType=o.responseType),c.onerror=function(){return a(c)},c.ontimeout=function(){return a(c)},c.onload=function(){return n(c)},function(e,t){if(t){var n=t;Object.keys(n).forEach(function(t){return e.setRequestHeader(t,n[t])})}}(c,r),c.send(i)})).then(function(e,t,n){var r=t.responseType,o=function(e){return n.response=e,n};return!t.dontRead&&e&&n.ok?r&&n[r]?n[r]().then(o):n.json().then(o):n}.bind(null,a,o))},ue=v(),de="cloudinary-button",se="cloudinary-thumbnails",fe="cloudinary-thumbnail",pe="cloudinary-delete",ge=function(e){return e.fieldName||"image"},he=function(e,t){var n=t.form;return!n&&e&&(n=function(e,t){var n=null;if(e.closest)n=e.closest(t);else{var r=self.document.querySelectorAll(t);if(r&&r.length)for(var o=0;o<r.length;o++){var i=r[o];if(q(i,e)){n=i;break}}}return n}(e,"form")),n},ve=function(e,t,n){var r=he(t,n);r&&(r=L(r))&&function(e,t,n){var r=T("input",{type:"hidden",name:ge(n)},null,{cloudinaryPublicId:e.public_id});r.value="".concat([e.resource_type,e.type,e.path].join("/"),"#").concat(e.signature);try{r.dataset.cloudinary=JSON.stringify(e)}catch(e){ue.error("[all.pageIntegrations]: failed to add info as serialized data attribute")}t.appendChild(r)}(e,r,n)},me=function(e,t,n,r,o,i){e.addEventListener("click",function a(c){var l=function(e){return e.deleteHost?e.deleteHost:"https://api".concat(e.dev?"-dev":e.staging?"-staging":"",".cloudinary.com")}(o),u="".concat(l,"/v1_1/").concat(o.cloudName,"/delete_by_token");return ue.log("[all.pageIntegrations]:\n        about to send delete request with token: ".concat(r.delete_token," to : ").concat(u)),c.preventDefault(),le(u,"POST",{token:r.delete_token},{"Content-Type":"application/json"},{dontRead:!0}).then(function(c){200===c.status&&(ue.log("[all.pageIntegrations]: successfully deleted file"),e.removeEventListener("click",a),function(e,t,n,r){U(e);var o=he(t,r);if(o){var i=o.querySelector('input[name="'.concat(ge(r),'"][data-cloudinary-public-id="').concat(n.public_id,'"]'));i&&U(i)}}(t,n,r,o),i.triggerEvent("cloudinarywidgetdeleted",r))}).catch(function(e){ue.warn("[all.pageIntegrations]: failed to delete file with status: ".concat(e.status))})})},be=function(e,t,n,r){if(!1!==n.thumbnails&&(n.thumbnails||t)){var o=!0,i=L("".concat(n.thumbnails||""," .").concat(se));if(i||(o=!1,i=T("ul",null,se)),i.appendChild(function(e,t,n,r){var o,i=T("li",null,fe,{cloudinary:JSON.stringify(e)});e.thumbnail_url?(o=T("img",{src:e.thumbnail_url})).addEventListener("load",function e(){i.classList.add("active"),o.removeEventListener("load",e)}):(o=T("span")).textContent=e.public_id;if(i.appendChild(o),e.delete_token){var a=T("a",{href:"#"},pe);a.textContent="x",i.appendChild(a),me(a,i,t,e,n,r)}return i}(e,t,n,r)),!o){ue.log("[all.pageIntegrations]: adding thumbnails list to dom");var a=n.thumbnails&&L(n.thumbnails);a?a.appendChild(i):t&&t.insertAdjacentElement("afterend",i)}}},ye=function(e,t){return 0===t?e:e.substr(0,1).toUpperCase()+e.substr(1)},we=function(e){return Object.keys(e).reduce(function(t,n){return t[function(e){return e.indexOf("_")>0}(n)?function(e){return e.split("_").map(ye).join("")}(n):n]=e[n],t},{})},Oe=["keepWidgetOpen","stylesheet"],xe=Object.prototype.toString,je=function(e){return Oe.forEach(function(t){void 0!==e[t]&&function(){var e;(e=console).warn.apply(e,arguments)}("Cloudinary.UploadWidget - '".concat(t,"' is no longer used in this version."))})},Pe=function(e){return e?we(e):{}},Ee=h(),Se="DATA_URL",Ce="ARRAY_BUFFEr",Ie=h(),ke=0,Ae=function(e){var t=null,n=function(n,r,o,i,a){var c;return!i.maxFileSize||i.maxFileSize>0&&n.size<=i.maxFileSize?(t||(t=function(){var e=[],t=new FileReader,n=null,r=function(){n&&n.readResolve({file:n.file,index:n.index,count:n.count,result:t.result}),o()},o=function(){n=null,t.removeEventListener("load",r,!1),t.removeEventListener("error",i,!1),e.length&&a(e.shift())},i=function(){Ee.log("[utils.fileReader]: failed to read file",t.error),n&&n.readReject(t.error),o()},a=function(e){n=e,t.addEventListener("load",r,!1),t.addEventListener("error",i,!1),e.readAs===Ce?t.readAsArrayBuffer(e.file):t.readAsDataURL(e.file)},c=function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(function(c,l){var u={file:r,index:o,count:i,readAs:n,readResolve:c,readReject:l};1!==t.readyState?a(u):e.push(u)})};return{readAsUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return c(Se,e,t,n)},readAsBuffer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return c(Ce,e,t,n)}}}()),c=t.readAsUrl(n,r,o).then(function(t){return function(t,n){var r=t.file,o=t.result,i=t.index,a=t.count;e.sendMessage(_,{lastModified:r.lastModified,lastModifiedDate:r.lastModifiedDate,hdcFullPath:r.hdcFullPath,name:r.name,size:r.size,type:r.type,file:o,index:i,count:a,batchId:n},!0)}(t,a)}).catch(function(e){Ie.error("[global.all.uploadsHandler]: failed to send file data to widget for upload",e.code,n)})):Ie.log("[global.all.uploadsHandler]: provided file is larger than max file size configured",n.size),c},r=function(t,r,o){return Promise.race(Array.prototype.map.call(t,function(i,a){var c=null;return!function(e){return z&&(e instanceof File||"[object File]"===e.toString())}(i)?B(i)?e.sendMessage(_,{file:i,index:a,count:t.length,batchId:o}):Ie.warn("[global.all.uploadsHandler]: unknown type of object sent to upload",i):c=n(i,a,t.length,r,o),c}))};return{handleFiles:function(t,n){return t&&t.files&&t.files.length?function(t,n){var o="batch_".concat(ke+=1);return e.sendMessage(M,{batchId:o,count:t.length}),r(t,n,o)}(t.files,n):Promise.resolve()}}};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach(function(t){De(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ne=v(),Re=0,Te=function(e,t){var n=function(e,t){if(e=e||{},"[object Object]"!==xe.call(e))throw new Error("[Cloudinary.UploadWidget]: widget options must be a valid Object");var n=Pe(e);return n.secure=!1!==n.secure,n.requirePrepareParams=!!n.prepareUploadParams||!!n.uploadSignature,n.useTagsCallback=H(n.getTags),n.useUploadPresetsCallback=H(n.getUploadPresets),n.usePreBatchCallback=H(n.preBatch),n.useMetadataCallback=H(n.getMetadataSchema),n.inlineMode=!!n.inlineContainer,n.fieldName=e.fieldName||t&&t.getAttribute("name")||null,je(n),n}(e,t);return Re+=1,n.widgetId="widget_".concat(Re),n},Le=function(e,t,n){n=function(e,t){var n=e||t&&t.element;if(n){try{n=L(n)}catch(e){throw new Error("[Cloudinary.UploadWidget]: 'element' param must either be a valid HTMLElement or a selector string")}if(!n||!n.nodeType)throw new Error("[Cloudinary.UploadWidget]: 'element' param must resolve to a valid HTMLElement")}return n}(n,e);var r,o,i,a,c,l=Te(e,n);if(l.inlineContainer&&!L(l.inlineContainer))throw new Error("[Cloudinary.UploadWidget]: 'inlineContainer' param must either be a valid HTMLElement or a selector string");delete l.element;var u=function(e,t){l.$&&l.$(n||l.form||document).trigger(e,t)},d=function(e){return r?r.then(e).catch(function(e){return Ne.error("Cloudinary.UploadWidget - encountered error ! ",e)}):Ne.error("Cloudinary.UploadWidget - Widget frame API not ready yet!")},s=function(e,t){return d(function(n){n.open(t),n.isFrameReady()&&((null===t||void 0===t?void 0:t.hidden)||o.sendMessage(C,{source:e,options:t},!0),i.handleFiles(t,p()).then(function(){(null===t||void 0===t?void 0:t.hidden)||setTimeout(function(){n.showWidget(),o.sendDisplayChangedCallback(Q)},150)}))})},f=function(e){return d(function(t){var n=Pe(e);o.sendMessage(j,n),l=function(e,t){var n=Me({},t);return N.forEach(function(t){void 0!==e[t]&&(n[t]=e[t])}),n}(n,l),t.optionsUpdated()})},p=function(){return l};return function(){var e=function(){var e,t=l.secure?"https:":"http:";if(!0===l.dev)e="//widget-dev.cloudinary.com:9990/index.html";else{var n=l.widgetBase||"//widget".concat(!0===l.staging?"-staging":"",".cloudinary.com/"),r="".concat(n,"v2.0/n/");e=l.widgetHost||"".concat(r+l.cloudName,"/").concat(l.widgetVersion,"/index.html")}return e=0!==e.indexOf("http")?t+e:e}();(r=function(e,t){return new Promise(re.bind(null,e,t))}(p,e)).then(function(e){a=e.isWidgetShowing,c=e.isWidgetMinimized,o=te(p,0,Me({triggerEvent:u,processUploadResult:function(e){return function(e,t,n,r){ve(e,t,n),be(e,t,n,r)}(e,n,p(),{triggerEvent:u})},widgetCallback:t},e));var r=p();o.sendMessage(O,Me(Me({},r),{},{showOnStart:e.isWidgetOpen()})),i=Ae(o),n&&function(e,t,n){var r=T("a",{href:"#"},n.buttonClass||de);r.innerHTML=n.buttonCaption||"Upload image",e.style.display="none",e.parentNode&&e.parentNode.insertBefore(r,e.previousSibling),r.addEventListener("click",function(e){return t(),e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1})}(n,s,r)})}(),{open:function(e,t){return s(e,t),this},update:function(e){var t=this;return f(e).then(function(){return t})},close:function(e){return function(e){d(function(t){t.close(),o.sendMessage(I,e)})}(e),this},hide:function(){return d(function(e){return e.hideWidget()}),this},show:function(){return d(function(e){return e.showWidget()}),this},minimize:function(){return d(function(){o.sendMessage(x)}),this},isShowing:function(){return!!a&&a()},isMinimized:function(){return!!c&&c()}}},Ue=v();function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach(function(t){ze(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){var t={cloudName:null,apiKey:null},n=e.jQuery?e.jQuery:e.$&&e.$.fn&&e.$.fn.jquery?e.$:null,r=e.location.search.indexOf("debug=true")>-1,o=e.location.search.indexOf("dev=true")>-1;!function(e){i=e}(r?l.LOG:l.WARN),function(){try{var e=T("style",{id:"cloudinary-uw-page-styles",type:"text/css"});e.innerHTML=".cloudinary-thumbnails { list-style: none; margin: 10px 0; padding: 0 }\n        .cloudinary-thumbnails:after { clear: both; display: block; content: '' }\n        .cloudinary-thumbnail { float: left; padding: 0; margin: 0 15px 5px 0; display: none } \n        .cloudinary-thumbnail.active { display: block } \n        .cloudinary-thumbnail img { border: 1px solid #01304d; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px } \n        .cloudinary-thumbnail span { font-size: 11px; font-family: Arial, sans-serif; line-height: 14px; border: 1px solid #aaa; max-width: 150px; word-wrap: break-word; word-break: break-all; display: inline-block; padding: 3px; max-height: 60px; overflow: hidden; color: #999; } \n        .cloudinary-delete { vertical-align: top; font-size: 13px; text-decoration: none; padding-left: 2px; line-height: 8px; font-family: Arial, sans-serif; color: #01304d }\n        .cloudinary-button { background-color: #0078FF; color: #FFFFFF; text-decoration: none; font-size: 14px; line-height: 28px; height: 28x; cursor: pointer; font-weight: normal; display: inline-block; border-radius: 4px; padding: 10px 14px;}\n        .cloudinary-button:hover {-webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5); } ";var t=L("head");t&&t.appendChild(e)}catch(e){Ue.error("[all.pageStyles]: failed to apply styles")}}();var a=e.cloudinary=e.cloudinary||{};a.applyUploadWidget=function(e,i,a){return Le(function(e){return Fe(Fe(Fe({},t),{},{dev:o,debug:r},e),{},{widgetVersion:"315",$:n})}(i),a,e)},a.createUploadWidget=function(e,t){return a.applyUploadWidget(null,e,t)},a.openUploadWidget=function(e,t){return a.createUploadWidget(e,t).open()},a.setCloudName=function(e){t.cloudName=e},a.setAPIKey=function(e){t.apiKey=e},a.WIDGET_SOURCES=Fe({},m),a.WIDGET_VERSION="315",n&&(n.fn.cloudinary_upload_widget=function(e,t){a.applyUploadWidget(n(this)[0],e,t)})}(self)}]);
//# sourceMappingURL=all.js.map
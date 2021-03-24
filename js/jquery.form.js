!function(X){"use strict";var g={};g.fileapi=void 0!==X("<input type='file'/>").get(0).files,g.formdata=void 0!==window.FormData;var C=!!X.fn.prop;function r(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),X(this).ajaxSubmit(t))}function a(e){var t=e.target,r=X(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=this;"image"==(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof X.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function _(){var e;X.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}X.fn.attr2=function(){if(!C)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},X.fn.ajaxSubmit=function(L){if(!this.length)return _("ajaxSubmit: skipping submit process - no element selected"),this;var M,e,t,F=this;"function"==typeof L&&(L={success:L}),M=this.attr2("method"),t=(t=(t="string"==typeof(e=this.attr2("action"))?X.trim(e):"")||window.location.href||"")&&(t.match(/^([^#]+)/)||[])[1],L=X.extend(!0,{url:t,success:X.ajaxSettings.success,type:M||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},L);var r={};if(this.trigger("form-pre-serialize",[this,L,r]),r.veto)return _("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(L.beforeSerialize&&!1===L.beforeSerialize(this,L))return _("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var a=L.traditional;void 0===a&&(a=X.ajaxSettings.traditional);var n,O=[],o=this.formToArray(L.semantic,O);if(L.data&&(L.extraData=L.data,n=X.param(L.data,a)),L.beforeSubmit&&!1===L.beforeSubmit(o,this,L))return _("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[o,this,L,r]),r.veto)return _("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var i=X.param(o,a);n&&(i=i?i+"&"+n:n),"GET"==L.type.toUpperCase()?(L.url+=(0<=L.url.indexOf("?")?"&":"?")+i,L.data=null):L.data=i;var s,u=[];L.resetForm&&u.push(function(){F.resetForm()}),L.clearForm&&u.push(function(){F.clearForm(L.includeHidden)}),!L.dataType&&L.target?(s=L.success||function(){},u.push(function(e){var t=L.replaceTarget?"replaceWith":"html";X(L.target)[t](e).each(s,arguments)})):L.success&&u.push(L.success),L.success=function(e,t,r){for(var a=L.context||this,n=0,o=u.length;n<o;n++)u[n].apply(a,[e,t,r||F,F])};var c=0<X('input[type=file]:enabled[value!=""]',this).length,l="multipart/form-data",f=F.attr("enctype")==l||F.attr("encoding")==l,m=g.fileapi&&g.formdata;_("fileAPI :"+m);var d,p=(c||f)&&!m;!1!==L.iframe&&(L.iframe||p)?L.closeKeepAlive?X.get(L.closeKeepAlive,function(){d=v(o)}):d=v(o):d=(c||f)&&m?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(L.extraData){var a=function(e){var t,r,a=X.param(e).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(L.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}L.data=null;var n=X.extend(!0,{},X.ajaxSettings,L,{contentType:!1,processData:!1,cache:!1,type:M||"POST"});L.uploadProgress&&(n.xhr=function(){var e=jQuery.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),L.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){t.data=r,o&&o.call(this,e,t)},X.ajax(n)}(o):X.ajax(L),F.removeData("jqxhr").data("jqxhr",d);for(var h=0;h<O.length;h++)O[h]=null;return this.trigger("form-submit-notify",[this,L]),this;function v(e){var t,r,l,f,n,m,d,p,a,o,h,v,i=F[0],g=X.Deferred();if(e)for(r=0;r<O.length;r++)t=X(O[r]),C?t.prop("disabled",!1):t.removeAttr("disabled");if((l=X.extend(!0,{},X.ajaxSettings,L)).context=l.context||l,n="jqFormIO"+(new Date).getTime(),l.iframeTarget?(o=(m=X(l.iframeTarget)).attr2("name"))?n=o:m.attr2("name",n):(m=X('<iframe name="'+n+'" src="'+l.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),d=m[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";_("aborting upload... "+t),this.aborted=1;try{d.contentWindow.document.execCommand&&d.contentWindow.document.execCommand("Stop")}catch(e){}m.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&X.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==X.active++&&X.event.trigger("ajaxStart"),f&&X.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&X.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(o=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[o]=a.value,"image"==a.type&&(l.extraData[o+".x"]=i.clk_x,l.extraData[o+".y"]=i.clk_y));var x=1,b=2;function y(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){_("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){_("cannot get iframe.contentDocument: "+e),r=t.document}return r}var s=X("meta[name=csrf-token]").attr("content"),u=X("meta[name=csrf-param]").attr("content");function c(){var e=F.attr2("target"),t=F.attr2("action");i.setAttribute("target",n),M||i.setAttribute("method","POST"),t!=l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||M&&!/post/i.test(M)||F.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,k(x)},l.timeout));var r=[];try{if(l.extraData)for(var a in l.extraData)l.extraData.hasOwnProperty(a)&&(X.isPlainObject(l.extraData[a])&&l.extraData[a].hasOwnProperty("name")&&l.extraData[a].hasOwnProperty("value")?r.push(X('<input type="hidden" name="'+l.extraData[a].name+'">').val(l.extraData[a].value).appendTo(i)[0]):r.push(X('<input type="hidden" name="'+a+'">').val(l.extraData[a]).appendTo(i)[0]));l.iframeTarget||(m.appendTo("body"),d.attachEvent?d.attachEvent("onload",k):d.addEventListener("load",k,!1)),setTimeout(function e(){try{var t=y(d).readyState;_("state = "+t),t&&"uninitialized"==t.toLowerCase()&&setTimeout(e,50)}catch(e){_("Server abort: ",e," (",e.name,")"),k(b),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),e?i.setAttribute("target",e):F.removeAttr("target"),X(r).remove()}}u&&s&&(l.extraData=l.extraData||{},l.extraData[u]=s),l.forceSync?c():setTimeout(c,10);var T,j,w,S=50;function k(e){if(!p.aborted&&!w){if((j=y(d))||(_("cannot access response document"),e=b),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e==b&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(j&&j.location.href!=l.iframeSrc||h){d.detachEvent?d.detachEvent("onload",k):d.removeEventListener("load",k,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"==l.dataType||j.XMLDocument||X.isXMLDoc(j);if(_("isXml="+a),!a&&window.opera&&(null===j.body||!j.body.innerHTML)&&--S)return _("requeing onLoad callback, DOM not available"),void setTimeout(k,250);var n=j.body?j.body:j.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=j.XMLDocument?j.XMLDocument:j,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=j.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=j.getElementsByTagName("pre")[0],s=j.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"==u&&!p.responseXML&&p.responseText&&(p.responseXML=D(p.responseText));try{T=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){_("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(_("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,T,"success",p),g.resolve(p.responseText,"success",p),f&&X.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&X.event.trigger("ajaxError",[p,l,t])),f&&X.event.trigger("ajaxComplete",[p,l]),f&&!--X.active&&X.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),w=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget||m.remove(),p.responseXML=null},100)}}}var D=X.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},A=X.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n="xml"===t||!t&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&X.error&&X.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&("json"===t||!t&&0<=a.indexOf("json")?o=A(o):("script"===t||!t&&0<=a.indexOf("javascript"))&&X.globalEval(o)),o};return g}},X.fn.ajaxForm=function(e){if((e=e||{}).delegation=e.delegation&&X.isFunction(X.fn.on),e.delegation||0!==this.length)return e.delegation?(X(document).off("submit.form-plugin",this.selector,r).off("click.form-plugin",this.selector,a).on("submit.form-plugin",this.selector,e,r).on("click.form-plugin",this.selector,e,a),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,r).bind("click.form-plugin",e,a);var t={s:this.selector,c:this.context};return!X.isReady&&t.s?(_("DOM not ready, queuing ajaxForm"),X(function(){X(t.s,t.c).ajaxForm(e)})):_("terminating; zero elements found by selector"+(X.isReady?"":" (DOM not ready)")),this},X.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},X.fn.formToArray=function(e,t){var r=[];if(0===this.length)return r;var a,n,o,i,s,u,c,l,f,m=this[0],d=e?m.getElementsByTagName("*"):m.elements;if(!d)return r;for(a=0,s=d.length;a<s;a++)if((f=(i=d[a]).name)&&!i.disabled)if(e&&m.clk&&"image"==i.type)m.clk==i&&(r.push({name:f,value:X(i).val(),type:i.type}),r.push({name:f+".x",value:m.clk_x},{name:f+".y",value:m.clk_y}));else if((o=X.fieldValue(i,!0))&&o.constructor==Array)for(t&&t.push(i),n=0,u=o.length;n<u;n++)r.push({name:f,value:o[n]});else if(g.fileapi&&"file"==i.type){t&&t.push(i);var p=i.files;if(p.length)for(n=0;n<p.length;n++)r.push({name:f,value:p[n],type:i.type});else r.push({name:f,value:"",type:i.type})}else null!=o&&(t&&t.push(i),r.push({name:f,value:o,type:i.type,required:i.required}));return e||!m.clk||(f=(l=(c=X(m.clk))[0]).name)&&!l.disabled&&"image"==l.type&&(r.push({name:f,value:c.val()}),r.push({name:f+".x",value:m.clk_x},{name:f+".y",value:m.clk_y})),r},X.fn.formSerialize=function(e){return X.param(this.formToArray(e))},X.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=X.fieldValue(this,n);if(t&&t.constructor==Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),X.param(o)},X.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=X.fieldValue(n,e);null==o||o.constructor==Array&&!o.length||(o.constructor==Array?X.merge(t,o):t.push(o))}return t},X.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"==a||"button"==a||("checkbox"==a||"radio"==a)&&!e.checked||("submit"==a||"image"==a)&&e.form&&e.form.clk!=e||"select"==n&&-1==e.selectedIndex))return null;if("select"!=n)return X(e).val();var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"==a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected){var m=(m=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return m;i.push(m)}}return i},X.fn.clearForm=function(e){return this.each(function(){X("input,select,textarea",this).clearFields(e)})},X.fn.clearFields=X.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"==t?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==t?this.selectedIndex=-1:"file"==e?/MSIE/.test(navigator.userAgent)?X(this).replaceWith(X(this).clone(!0)):X(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&X(this).is(r))&&(this.value="")})},X.fn.resetForm=function(){return this.each(function(){"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset()})},X.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},X.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"==t||"radio"==t?this.checked=r:"option"==this.tagName.toLowerCase()&&(e=X(this).parent("select"),r&&e[0]&&"select-one"==e[0].type&&e.find("option").selected(!1),this.selected=r)})},X.fn.ajaxSubmit.debug=!1}(jQuery);
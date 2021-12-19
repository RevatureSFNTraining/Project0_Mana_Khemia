define(["./core","./core/access","./core/camelCase","./data/var/dataPriv","./data/var/dataUser"],(function(t,e,a,n,r){"use strict";var i=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,o=/[A-Z]/g;function s(t,e,a){var n;if(void 0===a&&1===t.nodeType)if(n="data-"+e.replace(o,"-$&").toLowerCase(),"string"==typeof(a=t.getAttribute(n))){try{a=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:i.test(t)?JSON.parse(t):t)}(a)}catch(t){}r.set(t,e,a)}else a=void 0;return a}return t.extend({hasData:function(t){return r.hasData(t)||n.hasData(t)},data:function(t,e,a){return r.access(t,e,a)},removeData:function(t,e){r.remove(t,e)},_data:function(t,e,a){return n.access(t,e,a)},_removeData:function(t,e){n.remove(t,e)}}),t.fn.extend({data:function(t,i){var o,c,u,f=this[0],d=f&&f.attributes;if(void 0===t){if(this.length&&(u=r.get(f),1===f.nodeType&&!n.get(f,"hasDataAttrs"))){for(o=d.length;o--;)d[o]&&0===(c=d[o].name).indexOf("data-")&&(c=a(c.slice(5)),s(f,c,u[c]));n.set(f,"hasDataAttrs",!0)}return u}return"object"==typeof t?this.each((function(){r.set(this,t)})):e(this,(function(e){var a;if(f&&void 0===e)return void 0!==(a=r.get(f,t))||void 0!==(a=s(f,t))?a:void 0;this.each((function(){r.set(this,t,e)}))}),null,i,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){r.remove(this,t)}))}}),t}));
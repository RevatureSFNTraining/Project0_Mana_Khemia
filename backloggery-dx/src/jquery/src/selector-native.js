define(["./core","./var/document","./var/documentElement","./var/hasOwn","./var/indexOf"],(function(e,t,n,o,r){"use strict";var c,a,i=/HTML$/i,u=e.expando.split("").sort(f).join("")===e.expando,l=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector,s=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,d=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};function f(n,o){if(n===o)return c=!0,0;var i=!n.compareDocumentPosition-!o.compareDocumentPosition;return i||(1&(i=(n.ownerDocument||n)===(o.ownerDocument||o)?n.compareDocumentPosition(o):1)?n===t||n.ownerDocument===t&&e.contains(t,n)?-1:o===t||o.ownerDocument===t&&e.contains(t,o)?1:a?r.call(a,n)-r.call(a,o):0:4&i?-1:1)}function m(e){var t,n=[],o=0,r=0;if(c=!1,a=!u&&e.slice(0),e.sort(f),c){for(;t=e[r++];)t===e[r]&&(o=n.push(r));for(;o--;)e.splice(n[o],1)}return a=null,e}e.extend({uniqueSort:m,unique:m,escapeSelector:function(e){return(e+"").replace(s,d)},find:function(n,o,r,c){var a,i,u=0;if(r=r||[],!n||"string"!=typeof n)return r;if(1!==(i=(o=o||t).nodeType)&&9!==i)return[];if(c)for(;a=c[u++];)e.find.matchesSelector(a,n)&&r.push(a);else e.merge(r,o.querySelectorAll(n));return r},text:function(t){var n,o="",r=0,c=t.nodeType;if(c){if(1===c||9===c||11===c)return t.textContent;if(3===c||4===c)return t.nodeValue}else for(;n=t[r++];)o+=e.text(n);return o},contains:function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!n.contains(o))},isXMLDoc:function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!i.test(t||n&&n.nodeName||"HTML")},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),e.extend(e.find,{matches:function(t,n){return e.find(t,null,null,n)},matchesSelector:function(e,t){return l.call(e,t)},attr:function(t,n){var r=e.expr.attrHandle[n.toLowerCase()],c=r&&o.call(e.expr.attrHandle,n.toLowerCase())?r(t,n,e.isXMLDoc(t)):void 0;return void 0!==c?c:t.getAttribute(n)}})}));
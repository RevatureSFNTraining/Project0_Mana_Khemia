define(["../core","../core/stripAndCollapse","../var/isFunction","../var/rnothtmlwhite","../data/var/dataPriv","../core/init"],(function(t,s,e,i,r){"use strict";function a(t){return t.getAttribute&&t.getAttribute("class")||""}function n(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(i)||[]}t.fn.extend({addClass:function(i){var r,o,h,l,f,c,u,d=0;if(e(i))return this.each((function(s){t(this).addClass(i.call(this,s,a(this)))}));if((r=n(i)).length)for(;o=this[d++];)if(l=a(o),h=1===o.nodeType&&" "+s(l)+" "){for(c=0;f=r[c++];)h.indexOf(" "+f+" ")<0&&(h+=f+" ");l!==(u=s(h))&&o.setAttribute("class",u)}return this},removeClass:function(i){var r,o,h,l,f,c,u,d=0;if(e(i))return this.each((function(s){t(this).removeClass(i.call(this,s,a(this)))}));if(!arguments.length)return this.attr("class","");if((r=n(i)).length)for(;o=this[d++];)if(l=a(o),h=1===o.nodeType&&" "+s(l)+" "){for(c=0;f=r[c++];)for(;h.indexOf(" "+f+" ")>-1;)h=h.replace(" "+f+" "," ");l!==(u=s(h))&&o.setAttribute("class",u)}return this},toggleClass:function(s,i){var o=typeof s,h="string"===o||Array.isArray(s);return"boolean"==typeof i&&h?i?this.addClass(s):this.removeClass(s):e(s)?this.each((function(e){t(this).toggleClass(s.call(this,e,a(this),i),i)})):this.each((function(){var e,i,l,f;if(h)for(i=0,l=t(this),f=n(s);e=f[i++];)l.hasClass(e)?l.removeClass(e):l.addClass(e);else void 0!==s&&"boolean"!==o||((e=a(this))&&r.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===s?"":r.get(this,"__className__")||""))}))},hasClass:function(t){var e,i,r=0;for(e=" "+t+" ";i=this[r++];)if(1===i.nodeType&&(" "+s(a(i))+" ").indexOf(e)>-1)return!0;return!1}})}));
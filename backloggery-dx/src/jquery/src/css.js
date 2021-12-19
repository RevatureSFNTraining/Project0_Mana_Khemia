define(["./core","./core/access","./core/camelCase","./core/nodeName","./var/rcssNum","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/getStyles","./css/var/swap","./css/curCSS","./css/adjustCSS","./css/addGetHookIf","./css/support","./css/finalPropName","./core/init","./core/ready","./selector"],(function(e,t,n,s,r,i,o,c,a,l,d,u,f,g){"use strict";var p=/^(none|table(?!-c[ea]).+)/,b=/^--/,x={position:"absolute",visibility:"hidden",display:"block"},h={letterSpacing:"0",fontWeight:"400"};function m(e,t,n){var s=r.exec(t);return s?Math.max(0,s[2]-(n||0))+(s[3]||"px"):t}function y(t,n,s,r,i,c){var a="width"===n?1:0,l=0,d=0;if(s===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===s&&(d+=e.css(t,s+o[a],!0,i)),r?("content"===s&&(d-=e.css(t,"padding"+o[a],!0,i)),"margin"!==s&&(d-=e.css(t,"border"+o[a]+"Width",!0,i))):(d+=e.css(t,"padding"+o[a],!0,i),"padding"!==s?d+=e.css(t,"border"+o[a]+"Width",!0,i):l+=e.css(t,"border"+o[a]+"Width",!0,i));return!r&&c>=0&&(d+=Math.max(0,Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-c-d-l-.5))||0),d}function v(t,n,r){var o=c(t),a=(!f.boxSizingReliable()||r)&&"border-box"===e.css(t,"boxSizing",!1,o),d=a,u=l(t,n,o),g="offset"+n[0].toUpperCase()+n.slice(1);if(i.test(u)){if(!r)return u;u="auto"}return(!f.boxSizingReliable()&&a||!f.reliableTrDimensions()&&s(t,"tr")||"auto"===u||!parseFloat(u)&&"inline"===e.css(t,"display",!1,o))&&t.getClientRects().length&&(a="border-box"===e.css(t,"boxSizing",!1,o),(d=g in t)&&(u=t[g])),(u=parseFloat(u)||0)+y(t,n,r||(a?"border":"content"),d,o,u)+"px"}return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=l(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,s,i,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var c,a,l,u=n(s),p=b.test(s),x=t.style;if(p||(s=g(u)),l=e.cssHooks[s]||e.cssHooks[u],void 0===i)return l&&"get"in l&&void 0!==(c=l.get(t,!1,o))?c:x[s];"string"==(a=typeof i)&&(c=r.exec(i))&&c[1]&&(i=d(t,s,c),a="number"),null!=i&&i==i&&("number"!==a||p||(i+=c&&c[3]||(e.cssNumber[u]?"":"px")),f.clearCloneStyle||""!==i||0!==s.indexOf("background")||(x[s]="inherit"),l&&"set"in l&&void 0===(i=l.set(t,i,o))||(p?x.setProperty(s,i):x[s]=i))}},css:function(t,s,r,i){var o,c,a,d=n(s);return b.test(s)||(s=g(d)),(a=e.cssHooks[s]||e.cssHooks[d])&&"get"in a&&(o=a.get(t,!0,r)),void 0===o&&(o=l(t,s,i)),"normal"===o&&s in h&&(o=h[s]),""===r||r?(c=parseFloat(o),!0===r||isFinite(c)?c||0:o):o}}),e.each(["height","width"],(function(t,n){e.cssHooks[n]={get:function(t,s,r){if(s)return!p.test(e.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?v(t,n,r):a(t,x,(function(){return v(t,n,r)}))},set:function(t,s,i){var o,a=c(t),l=!f.scrollboxSize()&&"absolute"===a.position,d=(l||i)&&"border-box"===e.css(t,"boxSizing",!1,a),u=i?y(t,n,i,d,a):0;return d&&l&&(u-=Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(a[n])-y(t,n,"border",!1,a)-.5)),u&&(o=r.exec(s))&&"px"!==(o[3]||"px")&&(t.style[n]=s,s=e.css(t,n)),m(0,s,u)}}})),e.cssHooks.marginLeft=u(f.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(l(e,"marginLeft"))||e.getBoundingClientRect().left-a(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),e.each({margin:"",padding:"",border:"Width"},(function(t,n){e.cssHooks[t+n]={expand:function(e){for(var s=0,r={},i="string"==typeof e?e.split(" "):[e];s<4;s++)r[t+o[s]+n]=i[s]||i[s-2]||i[0];return r}},"margin"!==t&&(e.cssHooks[t+n].set=m)})),e.fn.extend({css:function(n,s){return t(this,(function(t,n,s){var r,i,o={},a=0;if(Array.isArray(n)){for(r=c(t),i=n.length;a<i;a++)o[n[a]]=e.css(t,n[a],!1,r);return o}return void 0!==s?e.style(t,n,s):e.css(t,n)}),n,s,arguments.length>1)}}),e}));
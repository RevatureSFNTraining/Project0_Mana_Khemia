define(["../core","../core/isAttached","./var/rboxStyle","./var/rnumnonpx","./var/getStyles","./support"],(function(t,e,i,r,d,n){"use strict";return function(h,o,s){var a,u,l,m,x=h.style;return(s=s||d(h))&&(""!==(m=s.getPropertyValue(o)||s[o])||e(h)||(m=t.style(h,o)),!n.pixelBoxStyles()&&r.test(m)&&i.test(o)&&(a=x.width,u=x.minWidth,l=x.maxWidth,x.minWidth=x.maxWidth=x.width=m,m=s.width,x.width=a,x.minWidth=u,x.maxWidth=l)),void 0!==m?m+"":m}}));
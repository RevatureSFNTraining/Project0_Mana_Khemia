define(["../core","../var/document","./var/rsingleTag","../manipulation/buildFragment","./support"],(function(e,t,n,r,a){"use strict";return e.parseHTML=function(o,c,i){return"string"!=typeof o?[]:("boolean"==typeof c&&(i=c,c=!1),c||(a.createHTMLDocument?((l=(c=t.implementation.createHTMLDocument("")).createElement("base")).href=t.location.href,c.head.appendChild(l)):c=t),u=!i&&[],(m=n.exec(o))?[c.createElement(m[1])]:(m=r([o],c,u),u&&u.length&&e(u).remove(),e.merge([],m.childNodes)));var l,m,u},e.parseHTML}));
define(["../core","../ajax","../event"],(function(a){"use strict";a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,n){a.fn[n]=function(a){return this.on(n,a)}}))}));
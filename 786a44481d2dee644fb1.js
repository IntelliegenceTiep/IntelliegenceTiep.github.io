(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{262:function(t,e,n){"use strict";var r=n(25),o=n(62),i=n(116),a=n(263),s=n(264);r({target:"Promise",stat:!0},{allSettled:function(t){var e=this,n=i.f(e),r=n.resolve,c=n.reject,u=a((function(){var n=o(e.resolve),i=[],a=0,c=1;s(t,(function(t){var o=a++,s=!1;i.push(void 0),c++,n.call(e,t).then((function(t){s||(s=!0,i[o]={status:"fulfilled",value:t},--c||r(i))}),(function(t){s||(s=!0,i[o]={status:"rejected",reason:t},--c||r(i))}))})),--c||r(i)}));return u.error&&c(u.value),n.promise}})},263:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},264:function(t,e,n){var r=n(11),o=n(175),i=n(61),a=n(117),s=n(105),c=n(174),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,d){var f,p,g,h,m,w,v,y=a(e,n,l?2:1);if(d)f=t;else{if("function"!=typeof(p=s(t)))throw TypeError("Target is not iterable");if(o(p)){for(g=0,h=i(t.length);h>g;g++)if((m=l?y(r(v=t[g])[0],v[1]):y(t[g]))&&m instanceof u)return m;return new u(!1)}f=p.call(t)}for(w=f.next;!(v=w.call(f)).done;)if("object"==typeof(m=c(f,y,v.value,l))&&m&&m instanceof u)return m;return new u(!1)}).stop=function(t){return new u(!0,t)}},358:function(t,e,n){"use strict";n.r(e);n(262),n(5);var r=n(28),o=n(4),i=n(54);e.default=(t={})=>{const{gmcMerchantId:e,dialogPosition:n}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const a=({name:t,params:a})=>{if("confirmation"===t&&a.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let s,c,u,l;const d=decodeURIComponent(a.json);if(d)try{s=JSON.parse(d)}catch(t){}if(s){const{buyers:e}=s;e&&e[0]&&(c=e[0].main_email);const n=s.shipping_lines&&s.shipping_lines[0];if(n&&n.delivery_time){let e=n.delivery_time.days;n.posting_deadline&&(e+=n.delivery_time.days),n.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}c||(c=i.a.getCustomer().main_email),u||(u=r.$ecomConfig.get("country_code")),l||(l=t(14));const f=[],p=[],g={merchant_id:e,order_id:a.number||a.id,email:c,delivery_country:u,estimated_delivery_date:l.getFullYear()+"-".concat((l.getMonth()+1).toString().padStart(2,"0"),"-")+l.getDate().toString().padStart(2,"0"),opt_in_style:n||"CENTER_DIALOG"};if(s&&s.items)for(let t=0;t<s.items.length&&t<=4;t++)f.push(Object(o.g)({url:"/products/".concat(s.items[t].product_id,".json")}).then((({data:t})=>{t.gtin&&t.gtin.forEach((t=>{p.includes(t)||p.push(t)}))})).catch(console.error));Promise.allSettled(f).then((()=>{p.length&&(g.products=p.map((t=>({gtin:t})))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(g)}))}))}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);
//# sourceMappingURL=786a44481d2dee644fb1.js.map
import{S as O,i as k,s as E,M as S,D as C,k as g,l as b,m as h,h as m,n as v,N as y,b as q,O as A,Q as D,R as I,T as J,I as K,g as L,d as M,J as B,K as N}from"./index.95ba0b19.js";import{c as _}from"./Indicator.svelte_svelte_type_style_lang.7adfd83d.js";function P(i){let a,e,u,f,o;const d=i[8].default,l=S(d,i,i[7],null);let c=[{"aria-label":"Breadcrumb"},i[2],{class:f=_(i[1],i[3].class)}],r={};for(let s=0;s<c.length;s+=1)r=C(r,c[s]);return{c(){a=g("nav"),e=g("ol"),l&&l.c(),this.h()},l(s){a=b(s,"NAV",{"aria-label":!0,class:!0});var n=h(a);e=b(n,"OL",{class:!0});var t=h(e);l&&l.l(t),t.forEach(m),n.forEach(m),this.h()},h(){v(e,"class",u=_(i[0],i[3].classOl)),y(a,r)},m(s,n){q(s,a,n),A(a,e),l&&l.m(e,null),o=!0},p(s,[n]){l&&l.p&&(!o||n&128)&&D(l,d,s,s[7],o?J(d,s[7],n,null):I(s[7]),null),(!o||n&9&&u!==(u=_(s[0],s[3].classOl)))&&v(e,"class",u),y(a,r=K(c,[{"aria-label":"Breadcrumb"},n&4&&s[2],(!o||n&8&&f!==(f=_(s[1],s[3].class)))&&{class:f}]))},i(s){o||(L(l,s),o=!0)},o(s){M(l,s),o=!1},d(s){s&&m(a),l&&l.d(s)}}}function Q(i,a,e){const u=["solid","navClass","solidClass","olClass"];let f=B(a,u),{$$slots:o={},$$scope:d}=a,{solid:l=!1}=a,{navClass:c="flex"}=a,{solidClass:r="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"}=a,{olClass:s="inline-flex items-center space-x-1 md:space-x-3"}=a,n=l?r:c;return i.$$set=t=>{e(3,a=C(C({},a),N(t))),e(2,f=B(a,u)),"solid"in t&&e(4,l=t.solid),"navClass"in t&&e(5,c=t.navClass),"solidClass"in t&&e(6,r=t.solidClass),"olClass"in t&&e(0,s=t.olClass),"$$scope"in t&&e(7,d=t.$$scope)},a=N(a),[s,n,f,a,l,c,r,d,o]}class V extends O{constructor(a){super(),k(this,a,Q,P,E,{solid:4,navClass:5,solidClass:6,olClass:0})}}export{V as B};
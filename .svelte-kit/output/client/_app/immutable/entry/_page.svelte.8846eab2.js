import{S as O,i as P,s as U,k as D,a as j,y as H,e as v,a4 as V,l as N,h as f,c as z,z as B,n as d,O as F,b,A as E,d as y,f as G,g as k,B as T,v as J,q as K,r as Q,a7 as R,a8 as W,C as w,m as X}from"../chunks/index.95ba0b19.js";import{E as Y}from"../chunks/ErrorComp.7ce35f35.js";import{p as Z}from"../chunks/pocketbase.4e4d61cd.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js";import{B as x}from"../chunks/Breadcrumb.ce54d940.js";import{B as ee}from"../chunks/BreadcrumbItem.3a5ea67a.js";function te(c){let e;return{c(){e=K("Home")},l(r){e=Q(r,"Home")},m(r,a){b(r,e,a)},d(r){r&&f(e)}}}function re(c){let e,r;return e=new ee({props:{href:"/",home:!0,$$slots:{default:[te]},$$scope:{ctx:c}}}),{c(){H(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,t){E(e,a,t),r=!0},p(a,t){const s={};t&4&&(s.$$scope={dirty:t,ctx:a}),e.$set(s)},i(a){r||(k(e.$$.fragment,a),r=!0)},o(a){y(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function ae(c){var t,s;let e,r=((s=(t=c[0])==null?void 0:t.company)==null?void 0:s.about_us)+"",a;return{c(){e=new R(!1),a=v(),this.h()},l(n){e=W(n,!1),a=v(),this.h()},h(){e.a=a},m(n,l){e.m(r,n,l),b(n,a,l)},p(n,l){var i,u;l&1&&r!==(r=((u=(i=n[0])==null?void 0:i.company)==null?void 0:u.about_us)+"")&&e.p(r)},i:w,o:w,d(n){n&&f(a),n&&e.d()}}}function oe(c){var t,s;let e,r=((s=(t=c[0])==null?void 0:t.company)==null?void 0:s.about_us)+"",a;return{c(){e=D("div"),this.h()},l(n){e=N(n,"DIV",{class:!0,style:!0});var l=X(e);l.forEach(f),this.h()},h(){d(e,"class","dark:text-white w-full h-full bg-center bg-cover opacity-50 bg-slate-800"),d(e,"style",a=`background-image: url(${c[1]});`)},m(n,l){b(n,e,l),e.innerHTML=r},p(n,l){var i,u;l&1&&r!==(r=((u=(i=n[0])==null?void 0:i.company)==null?void 0:u.about_us)+"")&&(e.innerHTML=r),l&2&&a!==(a=`background-image: url(${n[1]});`)&&d(e,"style",a)},i:w,o:w,d(n){n&&f(e)}}}function ne(c){var a;let e,r;return e=new Y({props:{error:(a=c[0])==null?void 0:a.error}}),{c(){H(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){E(e,t,s),r=!0},p(t,s){var l;const n={};s&1&&(n.error=(l=t[0])==null?void 0:l.error),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function se(c){var q,A;let e,r,a,t,s,n,l,i,u,_;document.title=e=(A=(q=c[0])==null?void 0:q.company)==null?void 0:A.name,s=new x({props:{class:"pt-20 py-8",$$slots:{default:[re]},$$scope:{ctx:c}}});const C=[ne,oe,ae],p=[];function M(o,m){var h,$,g;return(h=o[0])!=null&&h.error?0:(g=($=o[0])==null?void 0:$.company)!=null&&g.page_bg?1:2}return l=M(c),i=p[l]=C[l](c),{c(){r=D("meta"),t=j(),H(s.$$.fragment),n=j(),i.c(),u=v(),this.h()},l(o){const m=V("svelte-vfaedc",document.head);r=N(m,"META",{name:!0,content:!0}),m.forEach(f),t=z(o),B(s.$$.fragment,o),n=z(o),i.l(o),u=v(),this.h()},h(){var o,m;d(r,"name","description"),d(r,"content",a=(m=(o=c[0])==null?void 0:o.company)==null?void 0:m.description)},m(o,m){F(document.head,r),b(o,t,m),E(s,o,m),b(o,n,m),p[l].m(o,m),b(o,u,m),_=!0},p(o,[m]){var g,I,L,S;(!_||m&1)&&e!==(e=(I=(g=o[0])==null?void 0:g.company)==null?void 0:I.name)&&(document.title=e),(!_||m&1&&a!==(a=(S=(L=o[0])==null?void 0:L.company)==null?void 0:S.description))&&d(r,"content",a);const h={};m&4&&(h.$$scope={dirty:m,ctx:o}),s.$set(h);let $=l;l=M(o),l===$?p[l].p(o,m):(J(),y(p[$],1,1,()=>{p[$]=null}),G(),i=p[l],i?i.p(o,m):(i=p[l]=C[l](o),i.c()),k(i,1),i.m(u.parentNode,u))},i(o){_||(k(s.$$.fragment,o),k(i),_=!0)},o(o){y(s.$$.fragment,o),y(i),_=!1},d(o){f(r),o&&f(t),T(s,o),o&&f(n),p[l].d(o),o&&f(u)}}}function le(c,e,r){let a,{data:t}=e;return c.$$set=s=>{"data"in s&&r(0,t=s.data)},c.$$.update=()=>{var s,n;c.$$.dirty&1&&r(1,a=(s=t==null?void 0:t.company)!=null&&s.logo?Z.files.getUrl(t==null?void 0:t.company,(n=t==null?void 0:t.company)==null?void 0:n.logo,{thumb:"100x100"}):"/images/img1.jpg")},[t,a]}class _e extends O{constructor(e){super(),P(this,e,le,se,U,{data:0})}}export{_e as default};

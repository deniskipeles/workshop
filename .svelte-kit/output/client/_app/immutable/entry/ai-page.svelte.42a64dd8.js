import{S as pe,i as de,s as ge,D as K,k as B,l as S,m as I,h as _,N as X,b as w,ab as we,g as b,v as z,f as G,d as $,I as Ee,a2 as qe,J as Y,K as Z,M as he,Q as be,R as $e,T as ve,a as D,c as j,U as x,n as d,O as q,y as O,q as V,z as P,r as N,p as ee,$ as Ie,A,H as ke,u as Be,B as H,a6 as te,E as le,F as se,C as R}from"../chunks/index.95ba0b19.js";import{E as Se}from"../chunks/ErrorComp.7ce35f35.js";import{b as re,d as ne}from"../chunks/index.1292737e.js";import{c as Te}from"../chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js";import{B as ye}from"../chunks/Breadcrumb.ce54d940.js";import{B as oe}from"../chunks/BreadcrumbItem.3a5ea67a.js";import{S as Ce}from"../chunks/Spinner.3aae4f2d.js";function ae(o,e,s){const t=o.slice();return t[6]=e[s],t}const De=o=>({item:o&1}),ie=o=>({item:o[6]});function ue(o){let e;const s=o[4].default,t=he(s,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&8)&&be(t,s,r,r[3],e?ve(s,r[3],l,null):$e(r[3]),null)},i(r){e||(b(t,r),e=!0)},o(r){$(t,r),e=!1},d(r){t&&t.d(r)}}}function je(o){let e,s,t,r,l;return{c(){e=B("div"),s=B("img"),l=D(),this.h()},l(n){e=S(n,"DIV",{});var f=I(e);s=S(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(_),l=j(n),this.h()},h(){x(s.src,t=o[6].src)||d(s,"src",t),d(s,"alt",r=o[6].alt),d(s,"class","h-auto max-w-full rounded-lg")},m(n,f){w(n,e,f),q(e,s),w(n,l,f)},p(n,f){f&1&&!x(s.src,t=n[6].src)&&d(s,"src",t),f&1&&r!==(r=n[6].alt)&&d(s,"alt",r)},d(n){n&&_(e),n&&_(l)}}}function fe(o){let e;const s=o[4].default,t=he(s,o,o[3],ie),r=t||je(o);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,n){r&&r.m(l,n),e=!0},p(l,n){t?t.p&&(!e||n&9)&&be(t,s,l,l[3],e?ve(s,l[3],n,De):$e(l[3]),ie):r&&r.p&&(!e||n&1)&&r.p(l,e?n:-1)},i(l){e||(b(r,l),e=!0)},o(l){$(r,l),e=!1},d(l){r&&r.d(l)}}}function Ve(o){let e,s,t,r,l=o[0],n=[];for(let a=0;a<l.length;a+=1)n[a]=fe(ae(o,l,a));const f=a=>$(n[a],1,1,()=>{n[a]=null});let u=null;l.length||(u=ue(o));let v=[o[2],{class:o[1]}],k={};for(let a=0;a<v.length;a+=1)k=K(k,v[a]);return{c(){e=B("div");for(let a=0;a<n.length;a+=1)n[a].c();u&&u.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var c=I(e);for(let m=0;m<n.length;m+=1)n[m].l(c);u&&u.l(c),c.forEach(_),this.h()},h(){X(e,k)},m(a,c){w(a,e,c);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(e,null);u&&u.m(e,null),s=!0,t||(r=we(Ne.call(null,e)),t=!0)},p(a,[c]){if(c&9){l=a[0];let m;for(m=0;m<l.length;m+=1){const y=ae(a,l,m);n[m]?(n[m].p(y,c),b(n[m],1)):(n[m]=fe(y),n[m].c(),b(n[m],1),n[m].m(e,null))}for(z(),m=l.length;m<n.length;m+=1)f(m);G(),!l.length&&u?u.p(a,c):l.length?u&&(z(),$(u,1,1,()=>{u=null}),G()):(u=ue(a),u.c(),b(u,1),u.m(e,null))}X(e,k=Ee(v,[c&4&&a[2],(!s||c&2)&&{class:a[1]}]))},i(a){if(!s){for(let c=0;c<l.length;c+=1)b(n[c]);s=!0}},o(a){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)$(n[c]);s=!1},d(a){a&&_(e),qe(n,a),u&&u.d(),t=!1,r()}}}function Ne(o){getComputedStyle(o).gap==="normal"&&(o.style.gap="inherit")}function Oe(o,e,s){let t;const r=["items"];let l=Y(e,r),{$$slots:n={},$$scope:f}=e,{items:u=[]}=e;return o.$$set=v=>{s(5,e=K(K({},e),Z(v))),s(2,l=Y(e,r)),"items"in v&&s(0,u=v.items),"$$scope"in v&&s(3,f=v.$$scope)},o.$$.update=()=>{s(1,t=Te("grid",e.class))},e=Z(e),[u,t,l,f,n]}class Pe extends pe{constructor(e){super(),de(this,e,Oe,Ve,ge,{items:0})}}function Ae(o){let e;return{c(){e=V("Home")},l(s){e=N(s,"Home")},m(s,t){w(s,e,t)},d(s){s&&_(e)}}}function He(o){let e;return{c(){e=V("AI")},l(s){e=N(s,"AI")},m(s,t){w(s,e,t)},d(s){s&&_(e)}}}function Me(o){let e,s,t,r;return e=new oe({props:{href:"/",home:!0,$$slots:{default:[Ae]},$$scope:{ctx:o}}}),t=new oe({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){O(e.$$.fragment),s=D(),O(t.$$.fragment)},l(l){P(e.$$.fragment,l),s=j(l),P(t.$$.fragment,l)},m(l,n){A(e,l,n),w(l,s,n),A(t,l,n),r=!0},p(l,n){const f={};n&256&&(f.$$scope={dirty:n,ctx:l}),e.$set(f);const u={};n&256&&(u.$$scope={dirty:n,ctx:l}),t.$set(u)},i(l){r||(b(e.$$.fragment,l),b(t.$$.fragment,l),r=!0)},o(l){$(e.$$.fragment,l),$(t.$$.fragment,l),r=!1},d(l){H(e,l),l&&_(s),H(t,l)}}}function ze(o){let e,s,t,r,l;return{c(){e=B("button"),s=le("svg"),t=le("path"),this.h()},l(n){e=S(n,"BUTTON",{class:!0});var f=I(e);s=se(f,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,class:!0});var u=I(s);t=se(u,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),I(t).forEach(_),u.forEach(_),f.forEach(_),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M9 5l7 7-7 7"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(s,"fill","none"),d(s,"viewBox","0 0 24 24"),d(s,"stroke","currentColor"),d(s,"class","h-6 w-6"),d(e,"class","absolute right-0 flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 focus:outline-none bottom-0")},m(n,f){w(n,e,f),q(e,s),q(s,t),r||(l=ke(e,"click",o[7]),r=!0)},p:R,i:R,o:R,d(n){n&&_(e),r=!1,l()}}}function Ge(o){let e,s,t;return s=new Ce({props:{class:"absolute right-0 flex items-center justify-center rounded-full w-10 h-10 bottom-0"}}),{c(){e=B("div"),O(s.$$.fragment)},l(r){e=S(r,"DIV",{});var l=I(e);P(s.$$.fragment,l),l.forEach(_)},m(r,l){w(r,e,l),A(s,e,null),t=!0},p:R,i(r){t||(b(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){r&&_(e),H(s)}}}function ce(o){let e,s;return e=new Se({props:{error:o[0]}}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){A(e,t,r),s=!0},p(t,r){const l={};r&1&&(l.error=t[0]),e.$set(l)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function me(o){let e,s;return e=new Pe({props:{class:"gap-2 grid-cols-2",items:_e(o[3].images)}}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){A(e,t,r),s=!0},p(t,r){const l={};r&8&&(l.items=_e(t[3].images)),e.$set(l)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Je(o){let e,s,t,r,l,n,f,u,v,k,a,c,m=o[3].answer+"",y,U,J,M,F,Q;e=new ye({props:{class:"pt-20 py-8",$$slots:{default:[Me]},$$scope:{ctx:o}}});const L=[Ge,ze],T=[];function W(i,p){return i[1]?0:1}f=W(o),u=T[f]=L[f](o);let g=o[0]&&ce(o),h=o[3].images.length>0&&me(o);return{c(){O(e.$$.fragment),s=D(),t=B("div"),r=B("div"),l=B("div"),n=D(),u.c(),v=D(),g&&g.c(),k=D(),a=B("pre"),c=V("  "),y=V(m),U=V(`\r
  `),h&&h.c(),J=V(`\r
 `),this.h()},l(i){P(e.$$.fragment,i),s=j(i),t=S(i,"DIV",{});var p=I(t);r=S(p,"DIV",{class:!0});var C=I(r);l=S(C,"DIV",{id:!0,class:!0,contenteditable:!0,placeholder:!0,style:!0}),I(l).forEach(_),n=j(C),u.l(C),C.forEach(_),p.forEach(_),v=j(i),g&&g.l(i),k=j(i),a=S(i,"PRE",{class:!0});var E=I(a);c=N(E,"  "),y=N(E,m),U=N(E,`\r
  `),h&&h.l(E),J=N(E,`\r
 `),E.forEach(_),this.h()},h(){d(l,"id","inputContainer"),d(l,"class","border w-full border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"),d(l,"contenteditable",""),d(l,"placeholder","Enter you question.."),ee(l,"min-height","1rem"),ee(l,"max-height","10rem"),o[2].question===void 0&&Ie(()=>o[6].call(l)),d(r,"class","relative"),d(a,"class","bg-gray-100 text-lg rounded p-4 shadow-md whitespace-pre-wrap")},m(i,p){A(e,i,p),w(i,s,p),w(i,t,p),q(t,r),q(r,l),o[2].question!==void 0&&(l.innerText=o[2].question),q(r,n),T[f].m(r,null),w(i,v,p),g&&g.m(i,p),w(i,k,p),w(i,a,p),q(a,c),q(a,y),q(a,U),h&&h.m(a,null),q(a,J),M=!0,F||(Q=ke(l,"input",o[6]),F=!0)},p(i,[p]){const C={};p&256&&(C.$$scope={dirty:p,ctx:i}),e.$set(C),p&4&&i[2].question!==l.innerText&&(l.innerText=i[2].question);let E=f;f=W(i),f===E?T[f].p(i,p):(z(),$(T[E],1,1,()=>{T[E]=null}),G(),u=T[f],u?u.p(i,p):(u=T[f]=L[f](i),u.c()),b(u,1),u.m(r,null)),i[0]?g?(g.p(i,p),p&1&&b(g,1)):(g=ce(i),g.c(),b(g,1),g.m(k.parentNode,k)):g&&(z(),$(g,1,1,()=>{g=null}),G()),(!M||p&8)&&m!==(m=i[3].answer+"")&&Be(y,m),i[3].images.length>0?h?(h.p(i,p),p&8&&b(h,1)):(h=me(i),h.c(),b(h,1),h.m(a,J)):h&&(z(),$(h,1,1,()=>{h=null}),G())},i(i){M||(b(e.$$.fragment,i),b(u),b(g),b(h),M=!0)},o(i){$(e.$$.fragment,i),$(u),$(g),$(h),M=!1},d(i){H(e,i),i&&_(s),i&&_(t),T[f].d(),i&&_(v),g&&g.d(i),i&&_(k),i&&_(a),h&&h.d(),F=!1,Q()}}}function _e(o){return o.map(e=>({src:e}))}function Re(o,e,s){let t,r;te(o,ne,a=>s(2,t=a)),te(o,re,a=>s(3,r=a));let{data:l}=e;console.log(l==null?void 0:l.context);let n=null,f=!1;async function u(){s(1,f=!0),s(0,n=null);const c=await(await fetch("/api/ai",{method:"POST",body:JSON.stringify({...t,q:`context_and_rules>>>>${l==null?void 0:l.context}<<<<  question>>>>${t==null?void 0:t.question}<<<<`}),headers:{"content-type":"application/json"}})).json();c!=null&&c.success?(s(1,f=!1),re.set(c==null?void 0:c.data)):(s(1,f=!1),s(0,n=c==null?void 0:c.error))}function v(){t.question=this.innerText,ne.set(t)}const k=async()=>await u();return o.$$set=a=>{"data"in a&&s(5,l=a.data)},[n,f,t,r,u,l,v,k]}class Ye extends pe{constructor(e){super(),de(this,e,Re,Je,ge,{data:5})}}export{Ye as default};
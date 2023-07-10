import{S as ge,i as ye,s as Ee,k as P,a as D,l as j,m as A,c as w,h as _,b as E,O as h,g as S,v as Z,d as L,f as x,y as pe,z as he,A as ve,B as be,n as J,a2 as $e,q as N,r as V,u as W}from"./index.95ba0b19.js";import"./Indicator.svelte_svelte_type_style_lang.7adfd83d.js";import{C as ke}from"./Card.427bc080.js";import{E as Ie}from"./ErrorComp.7ce35f35.js";function ie(f,e,n){const s=f.slice();return s[1]=e[n],s}function fe(f,e,n){const s=f.slice();return s[4]=e[n],s}function ce(f){var s;let e,n;return e=new Ie({props:{error:(s=f[0])==null?void 0:s.error}}),{c(){pe(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,o){ve(e,l,o),n=!0},p(l,o){var r;const t={};o&1&&(t.error=(r=l[0])==null?void 0:r.error),e.$set(t)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){L(e.$$.fragment,l),n=!1},d(l){be(e,l)}}}function _e(f){var t,r;let e,n,s=(r=(t=f[0])==null?void 0:t.jobs)==null?void 0:r.items,l=[];for(let i=0;i<s.length;i+=1)l[i]=ue(ie(f,s,i));const o=i=>L(l[i],1,1,()=>{l[i]=null});return{c(){e=P("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var c=A(e);for(let m=0;m<l.length;m+=1)l[m].l(c);c.forEach(_),this.h()},h(){J(e,"class","grid relative md:grid-cols-3 gap-6")},m(i,c){E(i,e,c);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);n=!0},p(i,c){var m,y;if(c&1){s=(y=(m=i[0])==null?void 0:m.jobs)==null?void 0:y.items;let u;for(u=0;u<s.length;u+=1){const g=ie(i,s,u);l[u]?(l[u].p(g,c),S(l[u],1)):(l[u]=ue(g),l[u].c(),S(l[u],1),l[u].m(e,null))}for(Z(),u=s.length;u<l.length;u+=1)o(u);x()}},i(i){if(!n){for(let c=0;c<s.length;c+=1)S(l[c]);n=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);n=!1},d(i){i&&_(e),$e(l,i)}}}function me(f){var o;let e,n=((o=f[4])==null?void 0:o.name)+"",s,l;return{c(){e=P("li"),s=N(n),l=D()},l(t){e=j(t,"LI",{});var r=A(e);s=V(r,n),r.forEach(_),l=w(t)},m(t,r){E(t,e,r),h(e,s),E(t,l,r)},p(t,r){var i;r&1&&n!==(n=((i=t[4])==null?void 0:i.name)+"")&&W(s,n)},d(t){t&&_(e),t&&_(l)}}}function Pe(f){var ee,le,te,se,ae,re,ne;let e,n,s=((ee=f[1])==null?void 0:ee.employer_name)+"",l,o,t,r,i,c,m=((le=f[1])==null?void 0:le.estimated_full_payment)+"",y,u,g,d,v,H,q=((te=f[1])==null?void 0:te.down_payment)+"",B,F,k,C,X,Y,O,T,U=Array.isArray((ae=(se=f[1])==null?void 0:se.expand)==null?void 0:ae.services)?(ne=(re=f[1])==null?void 0:re.expand)==null?void 0:ne.services:[],b=[];for(let a=0;a<U.length;a+=1)b[a]=me(fe(f,U,a));return{c(){e=P("h3"),n=N("Employer: "),l=N(s),o=D(),t=P("div"),r=P("span"),i=N("Estimated Full Payment:"),c=D(),y=N(m),u=D(),g=P("div"),d=P("span"),v=N("Down Payment:"),H=D(),B=N(q),F=D(),k=P("div"),C=P("span"),X=N("Requested Services:"),Y=D(),O=P("ul");for(let a=0;a<b.length;a+=1)b[a].c();T=D(),this.h()},l(a){e=j(a,"H3",{class:!0});var p=A(e);n=V(p,"Employer: "),l=V(p,s),p.forEach(_),o=w(a),t=j(a,"DIV",{class:!0});var I=A(t);r=j(I,"SPAN",{class:!0});var G=A(r);i=V(G,"Estimated Full Payment:"),G.forEach(_),c=w(I),y=V(I,m),I.forEach(_),u=w(a),g=j(a,"DIV",{class:!0});var R=A(g);d=j(R,"SPAN",{class:!0});var K=A(d);v=V(K,"Down Payment:"),K.forEach(_),H=w(R),B=V(R,q),R.forEach(_),F=w(a),k=j(a,"DIV",{class:!0});var z=A(k);C=j(z,"SPAN",{class:!0});var M=A(C);X=V(M,"Requested Services:"),M.forEach(_),Y=w(z),O=j(z,"UL",{});var Q=A(O);for(let $=0;$<b.length;$+=1)b[$].l(Q);Q.forEach(_),z.forEach(_),T=w(a),this.h()},h(){J(e,"class","text-xl font-semibold"),J(r,"class","font-semibold"),J(t,"class","mb-2"),J(d,"class","font-semibold"),J(g,"class","mb-2"),J(C,"class","font-semibold"),J(k,"class","mb-2")},m(a,p){E(a,e,p),h(e,n),h(e,l),E(a,o,p),E(a,t,p),h(t,r),h(r,i),h(t,c),h(t,y),E(a,u,p),E(a,g,p),h(g,d),h(d,v),h(g,H),h(g,B),E(a,F,p),E(a,k,p),h(k,C),h(C,X),h(k,Y),h(k,O);for(let I=0;I<b.length;I+=1)b[I]&&b[I].m(O,null);E(a,T,p)},p(a,p){var I,G,R,K,z,M,Q;if(p&1&&s!==(s=((I=a[1])==null?void 0:I.employer_name)+"")&&W(l,s),p&1&&m!==(m=((G=a[1])==null?void 0:G.estimated_full_payment)+"")&&W(y,m),p&1&&q!==(q=((R=a[1])==null?void 0:R.down_payment)+"")&&W(B,q),p&1){U=Array.isArray((z=(K=a[1])==null?void 0:K.expand)==null?void 0:z.services)?(Q=(M=a[1])==null?void 0:M.expand)==null?void 0:Q.services:[];let $;for($=0;$<U.length;$+=1){const oe=fe(a,U,$);b[$]?b[$].p(oe,p):(b[$]=me(oe),b[$].c(),b[$].m(O,null))}for(;$<b.length;$+=1)b[$].d(1);b.length=U.length}},d(a){a&&_(e),a&&_(o),a&&_(t),a&&_(u),a&&_(g),a&&_(F),a&&_(k),$e(b,a),a&&_(T)}}}function ue(f){var s,l,o;let e,n;return e=new ke({props:{href:`/${(l=(s=f[0])==null?void 0:s.user)!=null&&l.admin?"admin":"client"}/jobs/${(o=f[1])==null?void 0:o.id}`,$$slots:{default:[Pe]},$$scope:{ctx:f}}}),{c(){pe(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){ve(e,t,r),n=!0},p(t,r){var c,m,y;const i={};r&1&&(i.href=`/${(m=(c=t[0])==null?void 0:c.user)!=null&&m.admin?"admin":"client"}/jobs/${(y=t[1])==null?void 0:y.id}`),r&129&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){be(e,t)}}}function de(f){let e,n;return{c(){e=P("p"),n=N("No Jobs found.")},l(s){e=j(s,"P",{});var l=A(e);n=V(l,"No Jobs found."),l.forEach(_)},m(s,l){E(s,e,l),h(e,n)},d(s){s&&_(e)}}}function je(f){var i,c,m,y,u,g;let e,n,s,l,o=((i=f[0])==null?void 0:i.error)&&ce(f),t=((m=(c=f[0])==null?void 0:c.jobs)==null?void 0:m.items)&&_e(f),r=((g=(u=(y=f[0])==null?void 0:y.jobs)==null?void 0:u.items)==null?void 0:g.length)===0&&de();return{c(){e=P("div"),o&&o.c(),n=D(),t&&t.c(),s=D(),r&&r.c()},l(d){e=j(d,"DIV",{});var v=A(e);o&&o.l(v),n=w(v),t&&t.l(v),s=w(v),r&&r.l(v),v.forEach(_)},m(d,v){E(d,e,v),o&&o.m(e,null),h(e,n),t&&t.m(e,null),h(e,s),r&&r.m(e,null),l=!0},p(d,[v]){var H,q,B,F,k,C;(H=d[0])!=null&&H.error?o?(o.p(d,v),v&1&&S(o,1)):(o=ce(d),o.c(),S(o,1),o.m(e,n)):o&&(Z(),L(o,1,1,()=>{o=null}),x()),(B=(q=d[0])==null?void 0:q.jobs)!=null&&B.items?t?(t.p(d,v),v&1&&S(t,1)):(t=_e(d),t.c(),S(t,1),t.m(e,s)):t&&(Z(),L(t,1,1,()=>{t=null}),x()),((C=(k=(F=d[0])==null?void 0:F.jobs)==null?void 0:k.items)==null?void 0:C.length)===0?r||(r=de(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i(d){l||(S(o),S(t),l=!0)},o(d){L(o),L(t),l=!1},d(d){d&&_(e),o&&o.d(),t&&t.d(),r&&r.d()}}}function Ae(f,e,n){let{data:s}=e;return f.$$set=l=>{"data"in l&&n(0,s=l.data)},[s]}class Ne extends ge{constructor(e){super(),ye(this,e,Ae,je,Ee,{data:0})}}export{Ne as J};
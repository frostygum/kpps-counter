(this.webpackJsonpkpps_counter=this.webpackJsonpkpps_counter||[]).push([[0],{58:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c=t(3),a=t(1),r=t.n(a),o=t(16),i=t.n(o),s=t(39),l=t(14),j=t(23),b=t(8),d=t(12),h=t(61),u=t(62),O=t(63),x=t(64),f=t(65),m=t(66),g=t(67);var p=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],r=n[1];return Object(c.jsxs)(h.a,{color:"dark",dark:!0,expand:"md",children:[Object(c.jsx)(u.a,{href:"/",children:"Counter"}),Object(c.jsx)(O.a,{onClick:function(){r(!t)}}),Object(c.jsx)(x.a,{isOpen:t,navbar:!0,children:Object(c.jsx)(f.a,{className:"mr-auto",navbar:!0,children:Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{href:"/info",children:"Info"})})})})]})},v=t(15),N=t(68),k=t(69),S=t(70),w=t(71),y=t(72),C=t(24),I=t(26),z=function(e,n){localStorage.setItem(e,JSON.stringify(n))},J=function(e){return JSON.parse(localStorage.getItem(e))},D=function(e){localStorage.removeItem(e)},E="total-count-data",L="last-modified-data";function M(){var e=Object(l.a)(["\n  height: 100%;\n  background-color: var(--gray);\n  color: var(--light);\n\n  .container {\n    height: calc(100vh - 112px) !important;\n  }\n\n  .count-num {\n    font-size: 8rem;\n  }\n\n  .badge.badge-info{\n    border: 0.2rem solid var(--light);\n  }\n\n  .btn {\n    border: 0.2rem solid var(--light);\n  }\n"]);return M=function(){return e},e}var P=v.a.div(M());var _=function(){var e=Object(a.useState)(0),n=Object(d.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(0),s=Object(d.a)(i,2),l=s[0],j=s[1],b=Object(a.useState)(0),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(a.useState)("0/0/0 0.0.0"),f=Object(d.a)(x,2),m=f[0],g=f[1];function p(e,n){n?j(l+e):O(u+e),o(t+e),g((new Date).toLocaleString("id-ID"))}return Object(a.useEffect)((function(){var e=J(E),n=J(L);e&&(o(e.total),j(e.male),O(e.female)),n&&g(n)}),[]),r.a.useEffect((function(){t&&(z(E,{total:t,male:l,female:u}),m&&z(L,m))})),Object(c.jsx)(P,{children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(S.a,{className:"text-center mt-4",children:Object(c.jsx)("h1",{className:"font-weight-bold",children:"KPPS-Counter"})})}),Object(c.jsx)(k.a,{className:"justify-content-center mb-4",children:Object(c.jsx)(w.a,{color:"danger",className:"py-1 px-2",children:"Last Modified: ".concat(m?m.split(" ")[0]:"-"," at ").concat(m?m.split(" ")[1]:"-")})}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(S.a,{className:"text-center my-3",children:[Object(c.jsx)(w.a,{color:"warning",children:"total"}),Object(c.jsx)("h1",{className:"font-weight-bold count-num",children:Object(c.jsx)(w.a,{color:"info",children:t})})]})}),Object(c.jsxs)(k.a,{className:"mb-4",children:[Object(c.jsxs)(S.a,{className:"text-center px-4",children:[Object(c.jsx)(w.a,{color:"warning",children:"male"}),Object(c.jsx)("h1",{className:"font-weight-bold",children:Object(c.jsx)(w.a,{color:"info",children:l})})]}),Object(c.jsxs)(S.a,{className:"text-center px-4",children:[Object(c.jsx)(w.a,{color:"warning",children:"female"}),Object(c.jsx)("h1",{className:"font-weight-bold",children:Object(c.jsx)(w.a,{color:"info",children:u})})]})]}),Object(c.jsxs)(k.a,{className:"py-4",children:[Object(c.jsx)(S.a,{children:Object(c.jsx)(y.a,{block:!0,color:"success",onClick:function(){return p(1,!0)},className:"p-4",children:Object(c.jsx)(C.a,{icon:I.b,size:"3x"})})}),Object(c.jsx)(S.a,{children:Object(c.jsx)(y.a,{block:!0,color:"success",onClick:function(){return p(1,!1)},className:"p-4",children:Object(c.jsx)(C.a,{icon:I.a,size:"3x"})})})]})]})})},A=t(76),B=t(73),K=t(74),Y=t(75);function q(){var e=Object(l.a)(["\n  height: 100%;\n  background-color: var(--gray);\n  color: var(--light);\n\n  .container {\n    height: calc(100vh - 112px) !important;\n  }\n\n  .count-num {\n    font-size: 8rem;\n  }\n\n  .badge.badge-info{\n    border: 0.2rem solid var(--light);\n  }\n\n  .btn {\n    border: 0.2rem solid var(--light);\n  }\n"]);return q=function(){return e},e}var F=v.a.div(q());function G(e){var n=e.isOpen,t=e.toggle,a=e.positive,r=e.negative;return Object(c.jsxs)(A.a,{isOpen:n,toggle:function(){return t()},children:[Object(c.jsx)(B.a,{toggle:function(){return t()},children:"Oopss !!"}),Object(c.jsx)(K.a,{children:"Are you sure want to delete all data ?"}),Object(c.jsxs)(Y.a,{children:[Object(c.jsx)(y.a,{color:"danger",onClick:function(){return a()},children:"Yes"})," ",Object(c.jsx)(y.a,{color:"secondary",onClick:function(){return r()},children:"Cancel"})]})]})}var H=[{path:"/info",component:function(){var e=Object(b.f)(),n=Object(a.useState)(!1),t=Object(d.a)(n,2),r=t[0],o=t[1],i=function(){return o(!r)};return Object(c.jsxs)(F,{children:[Object(c.jsxs)(N.a,{children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(S.a,{className:"text-center my-4",children:Object(c.jsx)("h1",{className:"font-weight-bold",children:"Settings"})})}),Object(c.jsx)(k.a,{children:Object(c.jsx)(S.a,{children:Object(c.jsx)(y.a,{block:!0,color:"danger",onClick:function(){i()},className:"font-weight-bold",children:"Clear Data"})})})]}),Object(c.jsx)(G,{isOpen:r,toggle:i,positive:function(){D(E),D(L),i(),e.push("/")},negative:i})]})}},{path:"/",component:_}];t(58);function Q(){var e=Object(l.a)(["\n  width: 480px;\n"]);return Q=function(){return e},e}function R(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return e},e}var T=v.a.div(R()),U=v.a.div(Q());var V=function(){return Object(c.jsx)(T,{children:Object(c.jsxs)(U,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(j.a,{children:Object(c.jsx)(b.c,{children:H.map((function(e,n,t){return Object(c.jsx)(b.a,Object(s.a)({path:e.path,component:e.component},t),n)}))})})]})})};t(59);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a6647a0b.chunk.js.map
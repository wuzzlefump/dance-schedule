(this["webpackJsonpdance-schedule"]=this["webpackJsonpdance-schedule"]||[]).push([[0],{24:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(16),a=n(26),l=n(31),r=n(29),o=n(0),s=n(6),i=n.n(s),u=n(30),d=(n(38),n(28)),j=n(1);function h(){var e=o.useState(new Date),t=Object(u.a)(e,2),n=t[0],c=t[1];return o.useEffect((function(){var e=setInterval((function(){return c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(j.jsx)(d.a,{size:50,value:n})}var b=n(8);function O(e){var t=v.get().list;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:i.a.layoutNav,children:[Object(j.jsx)(h,{}),window.location.href.includes("todo")?Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/",children:Object(j.jsx)("span",{className:i.a.linkItem,children:"Schedule"})}):Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/todo",children:Object(j.jsxs)("span",{className:i.a.linkItem,children:["To Do List (",t.length,")"]})})]}),Object(j.jsxs)("main",{className:i.a.layoutSchedule,children:[Object(j.jsx)("h1",{children:"Daily Work Schedule"}),Object(j.jsx)("div",{className:i.a.schedule,children:e.children})]})]})}var f=n(3),x=n(11),v=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).list=[],e.currentInputValue="",e.removeValue=function(t){var n=e.list;n.pop(t),e.list=Object(c.a)(n),localStorage.setItem("todos",JSON.stringify(Object(c.a)(n)))},e}return n}(x.Model),m=o.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,81))})),p=o.lazy((function(){return n.e(5).then(n.bind(null,79))}));t.b=function(){var e=[{path:"/",title:"Schedule",comp:Object(j.jsx)(m,{}),Layout:O,Route:f.a},{path:"/todo",title:"Todo",comp:Object(j.jsx)(p,{}),Layout:O,Route:f.a}];return Object(j.jsx)(b.a,{basename:"/dance-schedule",children:Object(j.jsx)(f.c,{children:Object(j.jsx)(x.Provider,{of:v,children:e.map((function(e,t){var n=e.Route;return Object(j.jsx)(n,{exact:!0,path:e.path,children:Object(j.jsx)(e.Layout,{children:Object(j.jsx)(o.Suspense,{fallback:"Loading",children:e.comp})})},t)}))})})})}},37:function(e,t,n){},6:function(e,t,n){e.exports={layoutNav:"style_layoutNav__2nIux",linkItem:"style_linkItem__3Bglm",layoutSchedule:"style_layoutSchedule__2_yrG"}},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(25),r=n.n(l),o=(n(37),n(24)),s=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),l(e),r(e)}))},i=n(1);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(o.b,{})}),document.getElementById("root")),s()}},[[65,1,2]]]);
//# sourceMappingURL=main.be580226.chunk.js.map
(this["webpackJsonpdance-schedule"]=this["webpackJsonpdance-schedule"]||[]).push([[6],{53:function(t,e,n){t.exports={inputContainer:"style_inputContainer__J49bz",todoContainer:"style_todoContainer__2JJnm"}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var c=n(77),o=n(0),a=n(53),r=n.n(a),s=n(43),l=n(75),i=n(78),u=n(76),d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).list=[],t.currentInputValue="",t}return n}(s.Model),p=n(1);function j(){var t=d.use(),e=t.list,n=t.currentInputValue,a=t.set,l=null!==JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[];return o.useEffect((function(){return a.list=null!==l?l:[]}),[]),Object(p.jsx)(s.Provider,{of:d,list:e,currentInputValue:n,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:r.a.todoContainer,children:e.map((function(t,n){return Object(p.jsxs)("span",{children:[Object(p.jsx)("input",{onFocus:function(){var n=e;console.log(n),n.pop(t),a.list=Object(c.a)(n),localStorage.setItem("todos",JSON.stringify(Object(c.a)(n)))},type:"checkbox"}),Object(p.jsx)("span",{children:t})]})}))}),Object(p.jsxs)("div",{className:r.a.inputContainer,children:[Object(p.jsx)("input",{onChange:function(t){a.currentInputValue=t.target.value,console.log(n)},name:"newToDo",value:n}),Object(p.jsx)("button",{onClick:function(t){!function(t){if(t.preventDefault(),console.log(l),e.includes(n))return null;a.list=[].concat(Object(c.a)(e),[n]),localStorage.setItem("todos",JSON.stringify([].concat(Object(c.a)(e),[n])))}(t)},children:"+"})]})]})})}}}]);
//# sourceMappingURL=6.e03a0d1f.chunk.js.map
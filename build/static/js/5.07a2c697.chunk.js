(this["webpackJsonpdance-schedule"]=this["webpackJsonpdance-schedule"]||[]).push([[5],{47:function(e,s,n){e.exports={scheduleContainer:"style_scheduleContainer__FM8rd",footer:"style_footer__OzdIs"}},48:function(e,s,n){e.exports={card:"style_card__1Qh1f",cardHeader:"style_cardHeader__13hvV"}},80:function(e,s,n){"use strict";n.r(s),n.d(s,"default",(function(){return j}));var t=n(0),l=n(47),a=n.n(l),o=n(48),u=n.n(o),c=n(46),r=n(1);function i(e){var s=e.student,n=e.lesson,t=e.time,l=e.values,a=e.f,o=e.parentName;return Object(r.jsxs)("div",{className:u.a.card,children:[Object(r.jsx)("div",{className:u.a.cardHeader,children:t}),Object(r.jsx)("input",{placeholder:s,name:d("title",o),value:l.title,onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.title&&a.errors.title}),Object(r.jsx)("textarea",{placeholder:n,name:d("content",o),value:l.content,onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.content&&a.errors.content})]})}function d(e,s){return null==s?e:s+"."+e}function j(){var e=JSON.parse(localStorage.getItem("schedule")),s=function(s,n){s.preventDefault(),console.log(n),localStorage.setItem("schedule",JSON.stringify(n)),console.log(e)};return t.useEffect((function(){}),[]),Object(r.jsx)("div",{className:a.a.App,children:null!==e?Object(r.jsx)(c.a,{initialValues:{lessonPlans:e},children:function(e){return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:a.a.scheduleContainer,children:[Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[0],parentName:"lessonPlans[0]",student:"Practice/Coaching",lesson:"Before Work",time:"11:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[1],parentName:"lessonPlans[1]",student:"Subject",lesson:"Dance Session",time:"12:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[2],parentName:"lessonPlans[2]",student:"Student",lesson:"Lesson",time:"12:30"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[3],parentName:"lessonPlans[3]",student:"Student",lesson:"Lesson",time:"1:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[4],parentName:"lessonPlans[4]",student:"Student",lesson:"Lesson",time:"2:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[5],parentName:"lessonPlans[5]",student:"Student",lesson:"Lesson",time:"2:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[6],parentName:"lessonPlans[6]",student:"Clean",lesson:"Areas",time:"3:30"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[7],parentName:"lessonPlans[7]",student:"Meeting",lesson:"Topic",time:"3:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[8],parentName:"lessonPlans[8]",student:"Lunch",lesson:"Food",time:"4:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[9],parentName:"lessonPlans[9]",student:"Student",lesson:"Lesson",time:"5:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[10],parentName:"lessonPlans[10]",student:"Student",lesson:"Lesson",time:"6:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[11],parentName:"lessonPlans[11]",student:"Student",lesson:"Lesson",time:"6:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[12],parentName:"lessonPlans[12]",student:"Student",lesson:"Lesson",time:"730"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[13],parentName:"lessonPlans[13]",student:"Student",Lesson:"Lesson",time:"8:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[14],parentName:"lessonPlans[14]",student:"Practice/Coaching",Lesson:"After Work",time:"9:00"})]}),Object(r.jsxs)("div",{className:a.a.footer,children:[Object(r.jsx)("button",{onClick:function(n){return s(n,e.values.lessonPlans)},children:"Save"}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("schedule"),e.resetForm},children:"Clear all"})]})]})}}):Object(r.jsx)(c.a,{initialValues:{lessonPlans:[{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""},{title:"",content:""}]},children:function(e){return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:a.a.scheduleContainer,children:[Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[0],parentName:"lessonPlans[0]",student:"Practice/Coaching",lesson:"Before Work",time:"11:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[1],parentName:"lessonPlans[1]",student:"Subject",lesson:"Dance Session",time:"12:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[2],parentName:"lessonPlans[2]",student:"Student",lesson:"Lesson",time:"12:30"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[3],parentName:"lessonPlans[3]",student:"Student",lesson:"Lesson",time:"1:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[4],parentName:"lessonPlans[4]",student:"Student",lesson:"Lesson",time:"2:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[5],parentName:"lessonPlans[5]",student:"Student",lesson:"Lesson",time:"2:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[6],parentName:"lessonPlans[6]",student:"Clean",lesson:"Areas",time:"3:30"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[7],parentName:"lessonPlans[7]",student:"Meeting",lesson:"Topic",time:"3:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[8],parentName:"lessonPlans[8]",student:"Lunch",lesson:"Food",time:"4:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[9],parentName:"lessonPlans[9]",student:"Student",lesson:"Lesson",time:"5:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[10],parentName:"lessonPlans[10]",student:"Student",lesson:"Lesson",time:"6:00"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[11],parentName:"lessonPlans[11]",student:"Student",lesson:"Lesson",time:"6:45"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[12],parentName:"lessonPlans[12]",student:"Student",lesson:"Lesson",time:"730"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[13],parentName:"lessonPlans[13]",student:"Student",lesson:"Lesson",time:"8:15"}),Object(r.jsx)(i,{f:e,values:e.values.lessonPlans[14],parentName:"lessonPlans[14]",student:"Practice/Coaching",lesson:"After Work",time:"9:00"})]}),Object(r.jsxs)("div",{className:a.a.footer,children:[Object(r.jsx)("button",{onClick:function(n){return s(n,e.values.lessonPlans)},children:"Save"}),Object(r.jsx)("button",{onClick:function(){return localStorage.removeItem("schedule"),e.resetForm},children:"Clear all"})]})]})}})})}}}]);
//# sourceMappingURL=5.07a2c697.chunk.js.map
(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),u=a.n(c),l=a(1);a(3);function o(e){var t=e.count,a=e.incrementCount,n=e.resetCount,c=e.maxValue,u=e.start,l=t===c||t<0||u>c||u<0||c<0,o=t===u||t<=0,s=t===c?"color":"",i=e.error?"Error":t;return r.a.createElement("div",{style:{textAlign:"center",marginBottom:"5px"}},r.a.createElement("div",{className:s},i),r.a.createElement("button",{disabled:l,onClick:a},"Inc"),r.a.createElement("button",{disabled:o,onClick:n},"Reset"))}function s(e){var t=e.setMaxValue,a=e.setStart,n=e.maxValue,c=e.start,u=e.setSettings;var l=n<=0||c<0||c===n,o=c<0?"error":"",s=n<0?"error":"";return r.a.createElement("div",{className:"wrapperSettings"},r.a.createElement("span",null," Max Value"),r.a.createElement("input",{className:s,onChange:function(e){t(+e.currentTarget.value)},type:"number",value:n}),r.a.createElement("span",null," Start Value"),r.a.createElement("input",{className:o,value:c,onChange:function(e){a(+e.currentTarget.value)},type:"number"}),r.a.createElement("button",{disabled:l,onClick:u},"Set"))}var i=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(0),i=Object(l.a)(u,2),m=i[0],b=i[1],g=Object(n.useState)(0),p=Object(l.a)(g,2),E=p[0],S=p[1],f=Object(n.useState)(!1),v=Object(l.a)(f,2),d=v[0],x=v[1];function V(e){x(e<0),S(e)}return Object(n.useEffect)((function(){b(Number(localStorage.getItem("maxValue"))),S(Number(localStorage.getItem("start")))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s,{setSettings:function(){c(m),c(E),localStorage.setItem("maxValue",m.toString()),localStorage.setItem("start",E.toString())},setStart:V,setMaxValue:function(e){x(e<0),b(e)},maxValue:m,start:E}),r.a.createElement(o,{count:a,error:d,changeMinValue:V,resetCount:function(){return c(E)},incrementCount:function(){return c(a+1)},maxValue:m,start:E}))};u.a.render(r.a.createElement(i,null),document.getElementById("root"))},3:function(e,t,a){},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.66151566.chunk.js.map
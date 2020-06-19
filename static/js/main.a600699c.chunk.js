(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{43:function(n,t,e){n.exports=e(57)},48:function(n,t,e){},56:function(n,t,e){},57:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),i=e(14),r=e.n(i),c=(e(48),e(23)),u=e(9),l=e(12),s=e(10),d=e(74),f=e(75);function m(){var n=Object(u.a)(["\n  width: 30%;\n  min-width: 200px;\n  height: 40px;\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 30%;\n  min-width: 200px;\n  height: 40px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n"]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100px;\n  margin-bottom: 50px;\n"]);return h=function(){return n},n}var b=s.a.div(h()),x=Object(s.a)(d.a)(p()),y=Object(s.a)(f.a)(m());function g(){var n=Object(l.b)(),t=Object(a.useState)({name:"",key:1}),e=Object(c.a)(t,2),i=e[0],r=e[1];return o.a.createElement(b,null,o.a.createElement(x,{"data-testid":"Input",type:"text",value:i.name,onChange:function(n){return r({key:i.key,name:n.target.value})}}),o.a.createElement(y,{variant:"contained",color:"primary",onClick:function(){i.name&&(n({type:"ADD_TODO",payload:{ToDoList:{name:i.name,key:i.key}}}),r({key:i.key+1,name:""}))}},"\u65b0\u589eToDo"))}var O=e(76),v=e(37),j=e.n(v);function D(){var n=Object(u.a)(["\n  width: 50%;\n  margin: 0 auto;\n  border: 1px solid #1c1c1c;\n  border-radius: 3px;\n  height: 40px;\n  background:#fff;\n"]);return D=function(){return n},n}function w(){var n=Object(u.a)([""]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  text-decoration: ",";\n  word-break: break-all;\n  "]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\n  display: flex;\n  min-height: 200px;\n  margin: 20px 10px;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  padding-bottom: 30px;\n  color:#2c2c2c;\n  \n"]);return k=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(50px, auto);\n\n  @media ","{\n    grid-template: 1fr /1fr 1fr ;\n  }\n  width: 100%;\n  min-height: 200px;\n  padding:50px;\n  box-sizing:border-box;\n"]);return T=function(){return n},n}var L="375px",S="425px",I="768px",_="1024px",F="1440px",K="2560px",C={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(L,")"),mobileL:"(max-width: ".concat(S,")"),tablet:"(max-width: ".concat(I,")"),laptop:"(max-width: ".concat(_,")"),laptopL:"(max-width: ".concat(F,")"),desktop:"(max-width: ".concat(K,")"),desktopL:"(max-width: ".concat(K,")")},z=s.a.div(T(),C.tablet),A=Object(s.a)(O.a)(k()),N=s.a.div(E(),(function(n){return n.isfinished?"line-through":"none"})),W=Object(s.a)("div")(w()),B=Object(s.a)(f.a)(D());function H(){var n=Object(l.c)((function(n){return n.ToDoList})),t=Object(l.b)();return o.a.createElement(z,null,n.map((function(n,e){if(e>=1)return o.a.createElement(A,{key:n.key},o.a.createElement(W,null,"\u7b2c",e,"\u9805\uff1a"),o.a.createElement(N,{isfinished:n.finished,onClick:function(){t({type:"FINISHED_TODO",payload:{toFinishKey:e}})},"data-testid":n.key},n.name),o.a.createElement(B,{variant:"contained",color:"secondary",startIcon:o.a.createElement(j.a,null),onClick:function(){t({type:"DELETE_TODO",payload:{toDeleteKey:e}})}},"\u522a\u9664"))})))}e(56);function J(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 300px;\n"]);return J=function(){return n},n}function M(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return M=function(){return n},n}var $=s.a.div(M()),q=s.a.div(J());var G=function(){var n=Object(l.c)((function(n){return n.count})),t=Object(l.c)((function(n){return n.ToDoList})),e=Object(a.useState)(0),i=Object(c.a)(e,2),r=i[0],u=i[1],s=Object(a.useState)(0),d=Object(c.a)(s,2),f=d[0],m=d[1],p=0;return Object(a.useEffect)((function(){p=t.filter((function(n){return!0===n.finished})).length,m(p),console.log(p),u(n-p)}),[t]),o.a.createElement("div",{className:"App"},o.a.createElement(q,null,o.a.createElement($,null,"ToDoList",r>0?"\u5269\u9918".concat(r,"\u9805"):"","\u5df2\u5b8c\u6210".concat(f)),o.a.createElement(g,null)),o.a.createElement(H,null))},P=e(17),Q=e(28),R={ToDoList:[{name:"first",key:0,finished:!1}],count:0},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object.assign({},n,{ToDoList:n.ToDoList.concat({name:t.payload.ToDoList.name,key:t.payload.ToDoList.key,finished:!1}),count:n.ToDoList.length});case"DELETE_TODO":var e=n.ToDoList.slice();return e.splice(t.payload.toDeleteKey,1),Object(Q.a)({},n,{ToDoList:e,count:e.length-1});case"FINISHED_TODO":var a=n.ToDoList.slice();return a[t.payload.toFinishKey].finished=!a[t.payload.toFinishKey].finished,Object(Q.a)({},n,{ToDoList:a});default:return n}},V=e(38),X=Object(P.createStore)(U,Object(V.composeWithDevTools)());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:X},o.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.a600699c.chunk.js.map
(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{115:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(29),r=n.n(s),i=n(4),o=n.n(i),u=n(7),l=n(6),j=n(33),b=n(2),m="[Chat] Usuarios cargados",d="[Chat] Activar Chat",h="[Chat] Nuevo mensaje",p="[Chat] Cargar Mensajes",O="[Chat] Cerrar Sesi\xf3n",x=function(e,t){switch(t.type){case O:return{uid:"",chatActivo:null,usuarios:[],mensajes:[]};case m:return Object(b.a)(Object(b.a)({},e),{},{usuarios:Object(j.a)(t.payload)});case d:return e.chatActivo===t.payload?e:Object(b.a)(Object(b.a)({},e),{},{chatActivo:t.payload,mensajes:[]});case h:return e.chatActivo===t.payload.de||e.chatActivo===t.payload.para?Object(b.a)(Object(b.a)({},e),{},{mensajes:[].concat(Object(j.a)(e.mensajes),[t.payload])}):e;case p:return Object(b.a)(Object(b.a)({},e),{},{mensajes:Object(j.a)(t.payload)});default:return e}},f=Object(c.createContext)(),v={uid:"",chatActivo:null,usuarios:[],mensajes:[]},g=function(e){var t=e.children,n=Object(c.useReducer)(x,v),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(a.jsx)(f.Provider,{value:{chatState:r,dispatch:i},children:t})},N="https://chat-tiempo-realj.herokuapp.com/api",k=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c,s,r,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.length>2&&void 0!==i[2]?i[2]:"GET",c="".concat(N,"/").concat(t),"GET"!==a){e.next=11;break}return e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,fetch(c,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 13:return r=e.sent,e.next=16,r.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c,s,r,i,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=u.length>2&&void 0!==u[2]?u[2]:"GET",c="".concat(N,"/").concat(t),s=localStorage.getItem("token")||"","GET"!==a){e.next=12;break}return e.next=6,fetch(c,{headers:{"x-token":s}});case 6:return r=e.sent,e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return e.next=14,fetch(c,{method:a,headers:{"Content-type":"application/json","x-token":s},body:JSON.stringify(n)});case 14:return i=e.sent,e.next=17,i.json();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=Object(c.createContext)(),C={uid:null,checking:!0,logged:!1,name:null,email:null},S=function(e){var t=e.children,n=Object(c.useState)(C),s=Object(l.a)(n,2),r=s[0],i=s[1],j=Object(c.useContext)(f).dispatch,b=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c,s,r,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("login",{email:t,password:n},"POST");case 2:return(a=e.sent).ok&&(localStorage.setItem("token",a.token),c=a.usuario,s=c.uid,r=c.nombre,u=c.email,i({uid:s,checking:!1,logged:!0,name:r,email:u})),e.abrupt("return",a.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var c,s,r,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("login/new",{nombre:t,email:n,password:a},"POST");case 2:return(c=e.sent).ok&&(localStorage.setItem("token",c.token),s=c.usuario,r=s.uid,u=s.nombre,l=s.email,i({uid:r,checking:!1,logged:!0,name:u,email:l})),e.abrupt("return",c.msg);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),d=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){var t,n,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return i({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 4:return e.next=6,w("login/renew");case 6:if(!(t=e.sent).ok){e.next=14;break}return localStorage.setItem("token",t.token),n=t.usuario,a=n.uid,c=n.nombre,s=n.email,i({uid:a,checking:!1,logged:!0,name:c,email:s}),e.abrupt("return",!0);case 14:return i({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)}))),[]);return Object(a.jsx)(y.Provider,{value:{auth:r,login:b,register:m,verifyToken:d,logout:function(){localStorage.removeItem("token"),j({type:O}),i({checking:!1,logged:!1})}},children:t})},_=n(70),E=n.n(_),A=n(47),I=Object(c.createContext)(),T=function(e){var t=e.children,n=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],u=i[1],j=Object(c.useCallback)((function(){var t=localStorage.getItem("token"),n=E.a.connect(e,{transports:["websocket"],autoConnect:!0,forceNew:!0,query:{"x-token":t}});s(n)}),[e]),b=Object(c.useCallback)((function(){null===a||void 0===a||a.disconnect()}),[a]);return Object(c.useEffect)((function(){u(null===a||void 0===a?void 0:a.connected)}),[a]),Object(c.useEffect)((function(){null===a||void 0===a||a.on("connect",(function(){return u(!0)}))}),[a]),Object(c.useEffect)((function(){null===a||void 0===a||a.on("disconnect",(function(){return u(!1)}))}),[a]),{socket:a,online:o,connectSocket:j,disconnectSocket:b}}("https://chat-tiempo-realj.herokuapp.com"),s=n.socket,r=n.online,i=n.connectSocket,o=n.disconnectSocket,u=Object(c.useContext)(y).auth,j=Object(c.useContext)(f).dispatch;return Object(c.useEffect)((function(){u.logged&&i()}),[u,i]),Object(c.useEffect)((function(){u.logged||o()}),[u,o]),Object(c.useEffect)((function(){null===s||void 0===s||s.on("lista-usuarios",(function(e){j({type:m,payload:e})}))}),[s,j]),Object(c.useEffect)((function(){null===s||void 0===s||s.on("mensaje-personal",(function(e){var t;j({type:h,payload:e}),t="mensajes",A.animateScroll.scrollToBottom({containerId:t,duration:250})}))}),[s,j]),Object(a.jsx)(I.Provider,{value:{socket:s,online:r},children:t})},P=n(16),G=n(3),J=function(){return Object(a.jsx)("div",{className:"middle-screen",children:Object(a.jsxs)("div",{className:"alert-info",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Seleccione una persona"}),Object(a.jsx)("span",{children:"Para comenzar una conversaci\xf3n"})]})})},B=function(){var e=Object(c.useContext)(y),t=e.auth,n=e.logout;return Object(a.jsxs)("div",{className:"headind_srch",children:[Object(a.jsx)("div",{className:"recent_heading mt-2",children:Object(a.jsx)("h4",{children:t.name})}),Object(a.jsx)("div",{className:"srch_bar",children:Object(a.jsx)("div",{className:"stylish-input-group",children:Object(a.jsx)("button",{onClick:n,className:"btn text-danger",children:"Salir"})})})]})},D=function(e){var t=e.usuario,n=Object(c.useContext)(f),s=n.chatState,r=n.dispatch,i=s.chatActivo,l=function(){var e=Object(u.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:d,payload:t.uid}),e.next=3,w("mensajes/".concat(t.uid));case 3:n=e.sent,a=n.mensajes,r({type:p,payload:a}),c="mensajes",A.animateScroll.scrollToBottom({containerId:c,duration:0});case 7:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"chat_list ".concat(t.uid===i&&"active_chat"),onClick:l,children:Object(a.jsxs)("div",{className:"chat_people",children:[Object(a.jsx)("div",{className:"chat_img",children:Object(a.jsx)("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})}),Object(a.jsxs)("div",{className:"chat_ib",children:[Object(a.jsxs)("h5",{children:[" ",t.nombre," "]}),t.online?Object(a.jsx)("span",{className:"text-success",children:"Online"}):Object(a.jsx)("span",{className:"text-danger",children:"Offline"})]})]})})},R=function(){var e=Object(c.useContext)(f).chatState.usuarios,t=Object(c.useContext)(y).auth.uid;return Object(a.jsxs)("div",{className:"inbox_chat",children:[e.filter((function(e){return e.uid!==t})).map((function(e){return Object(a.jsx)(D,{usuario:e},e.uid)})),Object(a.jsx)("div",{className:"extra_space"})]})},q=function(){return Object(a.jsxs)("div",{className:"inbox_people",children:[Object(a.jsx)(B,{}),Object(a.jsx)(R,{})]})},M=function(e){var t=e.msg;return Object(a.jsxs)("div",{className:"incoming_msg",children:[Object(a.jsx)("div",{className:"incoming_msg_img",children:Object(a.jsx)("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})}),Object(a.jsx)("div",{className:"received_msg",children:Object(a.jsxs)("div",{className:"received_withd_msg",children:[Object(a.jsx)("p",{children:t.mensaje}),Object(a.jsxs)("span",{className:"time_date",children:[" ",t.fecha]})]})})]})},z=function(e){var t=e.msg;return Object(a.jsx)("div",{className:"outgoing_msg",children:Object(a.jsxs)("div",{className:"sent_msg",children:[Object(a.jsx)("p",{children:t.mensaje}),Object(a.jsx)("span",{className:"time_date",children:t.fecha})]})})},U=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useContext)(I).socket,i=Object(c.useContext)(y).auth.uid,o=Object(c.useContext)(f).chatState.chatActivo;return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),0!==n.length&&(s(""),r.emit("mensaje-personal",{de:i,para:o,mensaje:n}))},children:Object(a.jsxs)("div",{className:"type_msg row",children:[Object(a.jsx)("div",{className:"input_msg_write col-sm-9",children:Object(a.jsx)("input",{type:"text",className:"write_msg",placeholder:"Mensaje...",value:n,onChange:function(e){var t=e.target.value;s(t)}})}),Object(a.jsx)("div",{className:"col-sm-3 text-center",children:Object(a.jsx)("button",{className:"msg_send_btn mt-3",type:"submit",children:"enviar"})})]})})},V=function(){var e=Object(c.useContext)(f).chatState.mensajes,t=Object(c.useContext)(y).auth.uid;return Object(a.jsxs)("div",{className:"mesgs",children:[Object(a.jsx)("div",{id:"mensajes",className:"msg_history",children:e.map((function(e){return e.para===t?Object(a.jsx)(M,{msg:e},e._id):Object(a.jsx)(z,{msg:e},e._id)}))}),Object(a.jsx)(U,{})]})},Y=(n(115),function(){var e=Object(c.useContext)(f).chatState;return Object(a.jsx)("div",{className:"messaging",children:Object(a.jsxs)("div",{className:"inbox_msg",children:[Object(a.jsx)(q,{}),e.chatActivo?Object(a.jsx)(V,{}):Object(a.jsx)(J,{})]})})}),F=n(19),H=n(31),K=n.n(H),L=function(){var e=Object(c.useContext)(y).login,t=Object(c.useState)({email:"",password:"",rememberme:!1}),n=Object(l.a)(t,2),s=n[0],r=n[1];Object(c.useEffect)((function(){var e=localStorage.getItem("email");e&&r((function(t){return Object(b.a)(Object(b.a)({},t),{},{email:e,rememberme:!0})}))}),[]);var i=function(e){var t=e.target,n=t.name,a=t.value;r(Object(b.a)(Object(b.a)({},s),{},Object(F.a)({},n,a)))},j=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s.rememberme?localStorage.setItem("email",s.email):localStorage.removeItem("email"),a=s.email,c=s.password,t.next=5,e(a,c);case 5:t.sent||K.a.fire("Error","Verifique el usuario y contrase\xf1a","error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("form",{className:"login100-form validate-form flex-sb flex-w",onSubmit:j,children:[Object(a.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Ingreso"}),Object(a.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(a.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:s.email,onChange:i}),Object(a.jsx)("span",{className:"focus-input100"})]}),Object(a.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(a.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:s.password,onChange:i}),Object(a.jsx)("span",{className:"focus-input100"})]}),Object(a.jsxs)("div",{className:"row mb-3",children:[Object(a.jsxs)("div",{className:"col",onClick:function(){r(Object(b.a)(Object(b.a)({},s),{},{rememberme:!s.rememberme}))},children:[Object(a.jsx)("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"rememberme",checked:s.rememberme,readOnly:!0}),Object(a.jsx)("label",{className:"label-checkbox100",children:"Recordarme"})]}),Object(a.jsx)("div",{className:"col text-right",children:Object(a.jsx)(P.b,{to:"/auth/register",className:"txt1",children:"Nueva cuenta?"})})]}),Object(a.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(a.jsx)("button",{type:"submit",className:"login100-form-btn",disabled:!(s.email.length>0&&s.password.length>0),children:"Ingresar"})})]})},Q=function(){var e=Object(c.useContext)(y).register,t=Object(c.useState)({nombre:"",email:"",password:""}),n=Object(l.a)(t,2),s=n[0],r=n[1],i=function(e){var t=e.target,n=t.name,a=t.value;r(Object(b.a)(Object(b.a)({},s),{},Object(F.a)({},n,a)))},j=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,c,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=s.nombre,c=s.email,r=s.password,t.next=4,e(a,c,r);case 4:(i=t.sent)&&K.a.fire("Error",i,"error");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("form",{className:"login100-form validate-form flex-sb flex-w",onSubmit:j,children:[Object(a.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Registro"}),Object(a.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(a.jsx)("input",{className:"input100",type:"text",name:"nombre",placeholder:"Nombre",value:s.nombre,onChange:i}),Object(a.jsx)("span",{className:"focus-input100"})]}),Object(a.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(a.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:s.email,onChange:i}),Object(a.jsx)("span",{className:"focus-input100"})]}),Object(a.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(a.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:s.password,onChange:i}),Object(a.jsx)("span",{className:"focus-input100"})]}),Object(a.jsx)("div",{className:"row mb-3",children:Object(a.jsx)("div",{className:"col text-right",children:Object(a.jsx)(P.b,{to:"/auth/login",className:"txt1",children:"Ya tienes cuenta?"})})}),Object(a.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(a.jsx)("button",{type:"submit",className:"login100-form-btn",disabled:!(s.nombre.length>0&&s.email.length>0&&s.password.length>0),children:"Crear cuenta"})})]})},W=(n(122),function(){return Object(a.jsx)("div",{className:"limiter",children:Object(a.jsx)("div",{className:"container-login100",children:Object(a.jsx)("div",{className:"wrap-login100 p-t-50 p-b-90",children:Object(a.jsxs)(G.d,{children:[Object(a.jsx)(G.b,{exact:!0,path:"/auth/login",component:L}),Object(a.jsx)(G.b,{exact:!0,path:"/auth/register",component:Q}),Object(a.jsx)(G.a,{to:"/auth/login"})]})})})})}),X=n(32),Z=function(e){var t=e.isAuthenticated,n=e.component,c=Object(X.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(G.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(b.a)({},e)):Object(a.jsx)(G.a,{to:"/auth"})}}))},$=function(e){var t=e.isAuthenticated,n=e.component,c=Object(X.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(G.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(a.jsx)(G.a,{to:"/"}):Object(a.jsx)(n,Object(b.a)({},e))}}))},ee=function(){var e=Object(c.useContext)(y),t=e.auth,n=e.verifyToken;return Object(c.useEffect)((function(){n()}),[n]),t.checking?Object(a.jsx)("h1",{children:"Espere por favor"}):Object(a.jsx)(P.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(G.d,{children:[Object(a.jsx)($,{isAuthenticated:t.logged,path:"/auth",component:W}),Object(a.jsx)(Z,{isAuthenticated:t.logged,path:"/",component:Y}),Object(a.jsx)(G.a,{to:"/"})]})})})},te=function(){return Object(a.jsx)(g,{children:Object(a.jsx)(S,{children:Object(a.jsx)(T,{children:Object(a.jsx)(ee,{})})})})};n(123);r.a.render(Object(a.jsx)(te,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.85f620cb.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/logo.245108bc.png"},40:function(e,a,t){e.exports=t(75)},45:function(e,a,t){},59:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),l=t.n(c),o=t(10),s=(t(45),t(4)),i=t(5),m=t(7),u=t(6),p=t(8),d=t(30);d.initializeApp({apiKey:"AIzaSyAt0umhs7Ux-IkGsuRPQP_VRYtshTHLEzA",authDomain:"redsocialreact-ed89f.firebaseapp.com",databaseURL:"https://redsocialreact-ed89f.firebaseio.com",projectId:"redsocialreact-ed89f",storageBucket:"",messagingSenderId:"463873443383",appId:"1:463873443383:web:673ec9f6e0434940"});var h=d,E=t(19),b=(t(59),t(23)),g=t.n(b),v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"contentWallPost"},r.a.createElement("h2",null,"Muro")))}}]),a}(r.a.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"contentProfile"},r.a.createElement("h2",null,"Perfil")))}}]),a}(r.a.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"contentAccount"},r.a.createElement("h2",null,"Actualiza los datos de tu cuenta")))}}]),a}(r.a.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(o.b,{className:"App-logo navbar-brand",to:"/"},r.a.createElement("img",{className:"App-logo-image",src:g.a,alt:"logo"})),r.a.createElement("div",{className:"navMenu navbar-nav"},r.a.createElement(o.c,{className:"nav-item navMenuLink",exact:!0,to:"/"},"Muro"),r.a.createElement(o.c,{className:"nav-item navMenuLink",to:"/Profile"},"Perfil"),r.a.createElement(o.c,{className:"nav-item navMenuLink",to:"/Account"},"Cuenta"),r.a.createElement(o.b,{className:"nav-item navMenuLink",to:"/",onClick:function(){return h.auth().signOut()}},"Cerrar"))),r.a.createElement(E.c,null,r.a.createElement("div",{className:"Navigation"},r.a.createElement(E.a,{exact:!0,path:"/",component:v}),r.a.createElement(E.a,{path:"/Profile",component:f}),r.a.createElement(E.a,{path:"/Account",component:j}))))}}]),a}(n.Component),C=t(28),N=t(3),y=t.n(N),w=function(e){return r.a.createElement("button",{type:e.type,className:e.className}," ",e.content," ")},I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:null},t.handleInputChange=function(e){t.setState(Object(C.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.email,r=a.password;h.auth().signInWithEmailAndPassword(n,r).then(function(e){t.props.history.push("/")}).catch(function(e){t.setState({error:e})})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.error;return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"contentLogIn"},r.a.createElement("header",null,r.a.createElement("img",{className:"header-logo-image",src:g.a,alt:"logo"}),r.a.createElement("h2",null,"Iniciar Sesi\xf3n")),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Correo electr\xf3nico"),r.a.createElement(y.a.Control,{type:"email",name:"email",placeholder:"Ingresa tu correo",value:a,onChange:this.handleInputChange}),r.a.createElement(y.a.Text,{className:"text-muted"},"Nunca compartas datos personales con extra\xf1os.")),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Contrase\xf1a"),r.a.createElement(y.a.Control,{type:"password",name:"password",placeholder:"Contrase\xf1a",value:t,onChange:this.handleInputChange})),n?r.a.createElement("p",null,n.message):null,r.a.createElement(w,{type:"submit",className:"btnEnter btn btn-dark btn-lg",content:"Entrar"})),r.a.createElement(o.b,{to:"./Register"},"\xbfA\xfan no tienes cuenta? REG\xcdSTRATE AQU\xcd")))}}]),a}(n.Component),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:null},t.handleInputChange=function(e){t.setState(Object(C.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.email,r=a.password;h.auth().createUserWithEmailAndPassword(n,r).then(function(e){t.props.history.push("/")}).catch(function(e){t.setState({error:e})})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.error;return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"contentSignUp"},r.a.createElement("header",null,r.a.createElement("img",{className:"header-logo-image",src:g.a,alt:"logo"}),r.a.createElement("h2",null,"Registrate")),r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Correo electr\xf3nico"),r.a.createElement(y.a.Control,{type:"email",name:"email",placeholder:"Ingresa tu correo",value:a,onChange:this.handleInputChange}),r.a.createElement(y.a.Text,{className:"text-muted"},"Nunca compartas datos personales con extra\xf1os.")),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Contrase\xf1a"),r.a.createElement(y.a.Control,{type:"password",name:"password",placeholder:"Contrase\xf1a",value:t,onChange:this.handleInputChange})),n?r.a.createElement("p",null,n.message):null,r.a.createElement(w,{type:"submit",className:"btnEnter btn btn-dark btn-lg",content:"Registrar"})),r.a.createElement(o.b,{to:"./"},"\xbfYa eres usuario registrado? VE A INICIAR SESI\xd3N")))}}]),a}(n.Component),S=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(m.a)(this,Object(u.a)(a).call(this,e,t))).listener=function(){h.auth().onAuthStateChanged(function(e){e?n.setState({logged:!0}):n.setState({logged:!1})})},n.state={logged:!1},n}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount()"),this.listener()}},{key:"render",value:function(){return console.log("render()"),this.state.logged?r.a.createElement(O,null):r.a.createElement(E.c,null,r.a.createElement("div",{className:"Navigation"},r.a.createElement(E.a,{exact:!0,path:"/",component:I}),r.a.createElement(E.a,{path:"/Register",component:k})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(n.StrictMode,null,r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.0131b3a4.chunk.js.map
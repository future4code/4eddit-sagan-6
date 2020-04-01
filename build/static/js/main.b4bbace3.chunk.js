(this["webpackJsonp4eddit-boilerplate"]=this["webpackJsonp4eddit-boilerplate"]||[]).push([[0],{121:function(e,t,n){e.exports=n(152)},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(17),l=n(91),u=n(199),s=n(200),p=n(105),m=n(95),d=n.n(m),h=Object(p.a)({palette:{primary:d.a}}),g=n(23),f=n(61),v=n(31),w=n(32),E=n(33),b=n(34),k=n(35),x=n(19),y=n(192),O=n(193),j=n(14),D=n(10),C=n.n(D),P=n(20),S=n(21),L=n.n(S),T=n(12),I="https://us-central1-future-apis.cloudfunctions.net/fourEddit/",_=function(){return function(){var e=Object(P.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=window.localStorage.getItem("token"),e.next=4,L.a.get("".concat(I,"posts"),{headers:{auth:n}});case 4:a=e.sent,t(U(a.data.posts)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return{type:"GET_POSTS",payload:{data:e}}},N=function(e){return function(){var t=Object(P.a)(C.a.mark((function t(n){var a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=window.localStorage.getItem("token"),t.next=4,L.a.get("".concat(I,"posts/").concat(e),{headers:{"Content-Type":"application/json",auth:a}});case 4:r=t.sent,window.localStorage.setItem("id",r.data.post.id),n(V(r.data.post)),n(Object(T.d)(Xe.postDetails=r.data.post.id)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return{type:"POST_DETAILS",payload:{data:e}}},q=n(107),M=n(190),X=n(187),z=n(191),A=n(64),B=n(153),G=n(203),J=n(106),R=n(99),W=n.n(R),F=n(100),H=n.n(F);function K(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  input {\n    width: 30vw;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Q=function(){return e},e}var Y=Object(j.a)(X.a)(Q()),Z=j.a.div(K()),$=function(e){var t=r.a.useState(null),n=Object(q.a)(t,2),a=n[0],o=n[1],i=Boolean(a),c="primary-search-account-menu",l=r.a.createElement(J.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:c,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){o(null)}},r.a.createElement(G.a,{onClick:function(){window.localStorage.clear(),e.goToLoginPage()}},"Logout"));return r.a.createElement("div",null,r.a.createElement(M.a,{position:"static"},r.a.createElement(Y,null,r.a.createElement(A.a,{variant:"h6",noWrap:!0},"4Eddit"),r.a.createElement(Z,null,r.a.createElement(B.a,{placeholder:"Pesquisar\u2026",inputProps:{"aria-label":"pesquisa"}}),r.a.createElement(W.a,null)),r.a.createElement(z.a,{edge:"end","aria-label":"account of current user","aria-controls":c,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},r.a.createElement(H.a,null)))),l)};function ee(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and(width: 450px) {\n    width: 100vw;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(x.a)(["\n  width: 20vw;\n  height: 100vh;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  @media screen and (max-width: 450px) {\n    width: 90%;\n  }\n"]);return te=function(){return e},e}var ne=j.a.div(te()),ae=j.a.form(ee()),re=function(e){Object(k.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleChangeInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmitLogin=function(e){var t=a.state,n=t.user,r=t.password;e.preventDefault(),a.props.submitLogin(n,r)},a.state={user:"",password:""},a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){null!==window.localStorage.getItem("token")&&this.props.goToUserPage()}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.password;return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(ne,null,r.a.createElement(ae,{onSubmit:this.handleSubmitLogin},r.a.createElement(y.a,{name:"user",type:"email",value:t,onChange:this.handleChangeInput,placeholder:"Digite seu nome de usu\xe1rio.",required:!0}),r.a.createElement(y.a,{name:"password",type:"password",value:n,onChange:this.handleChangeInput,placeholder:"Digite sua senha.",required:!0}),r.a.createElement(O.a,{color:"primary",type:"submit"},"Entrar")),r.a.createElement(O.a,{onClick:this.props.goToSingUpPage},"Cadastrar")))}}]),n}(a.Component),oe=Object(c.c)(null,(function(e){return{submitLogin:function(t,n){return e(function(e,t){return function(){var n=Object(P.a)(C.a.mark((function n(a){var r,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={email:e,password:t},n.prev=1,n.next=4,L.a.post("".concat(I,"login"),r,{headers:{"Content-Type":"application/json"}});case 4:o=n.sent,window.localStorage.setItem("token",o.data.token),a(Object(T.d)(Xe.userPage)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},goToSingUpPage:function(){return e(Object(T.d)(Xe.singUpPage))},goToUserPage:function(){return e(Object(T.d)(Xe.userPage))}}}))(re),ie=n(194),ce=n(195),le=n(196),ue=n(204),se=n(197),pe=n(101),me=n.n(pe),de=n(59),he=n.n(de),ge=n(60),fe=n.n(ge),ve=n(202),we=function(e){return r.a.createElement(ie.a,null,r.a.createElement(ce.a,{avatar:r.a.createElement(ue.a,null,e.avatar),title:e.title,subheader:e.name}),r.a.createElement(le.a,null,r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},e.text)),r.a.createElement(se.a,null,r.a.createElement(z.a,{onClick:function(){return e.handleLikeDeslikePost(-1,e.id)}},r.a.createElement(he.a,{color:e.userVoteDirection>=0?"":"secondary"})),r.a.createElement("p",null,e.votesCount),r.a.createElement(z.a,{onClick:function(){return e.handleLikeDeslikePost(1,e.id)}},r.a.createElement(fe.a,{color:e.userVoteDirection<=0?"":"primary"})),r.a.createElement(z.a,{onClick:e.postDetail},!1===e.showCommentIcon?" ":r.a.createElement(me.a,null)),r.a.createElement(ve.a,{url:e.url,via:e.text,title:e.title},"Twiiter")))},Ee=function(e,t,n){return function(){var a=Object(P.a)(C.a.mark((function a(r){var o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o=window.localStorage.getItem("token"),a.next=4,L.a.put("".concat(I,"posts/").concat(t,"/vote"),{direction:e},{headers:{"Content-Type":" application/json",auth:o}});case 4:a.sent,r("userPage"===n?_():N(t)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},be=n(198),ke=n(201);function xe(){var e=Object(x.a)(["\n  width: 45vw;\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  \n  @media screen and (max-width: 450px) {\n    width: 100%;\n  }\n"]);return xe=function(){return e},e}function ye(){var e=Object(x.a)(["\n  width: 45vw;\n  margin: auto;\n  display: grid;\n  gap: 10px;\n\n  @media screen and (max-width: 450px) {\n    width: 100%;\n  }\n;\n"]);return ye=function(){return e},e}var Oe=j.a.div(ye()),je=j.a.form(xe()),De=function(e){Object(k.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleChangeInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleNewPost=function(e){var t=a.state,n=t.title,r=t.text;e.preventDefault(),a.props.createNewPost(n,r),a.setState({title:"",text:""})},a.handlePostDetail=function(e){a.props.getPostDetails(e)},a.handleLikeDeslikePost=function(e,t){a.props.likeDeslikePost(e,t,"userPage")},a.state={title:"",text:""},a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")&&this.props.goToLoginPage(),this.props.getPosts()}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.text;return r.a.createElement("div",null,r.a.createElement($,{goToLoginPage:this.props.goToLoginPage}),r.a.createElement(je,{onSubmit:this.handleNewPost},r.a.createElement(ke.a,{value:n,onChange:this.handleChangeInput,multiline:!0,label:"T\xedtulo do post",name:"title",required:!0}),r.a.createElement(ke.a,{value:a,onChange:this.handleChangeInput,multiline:!0,label:"Texto do post",name:"text",required:!0}),r.a.createElement(O.a,{type:"submit",color:"primary"},"Publicar")),r.a.createElement(Oe,null,0===this.props.postList.length?r.a.createElement(be.a,null):this.props.postList.map((function(t){return r.a.createElement(we,{key:t.id,avatar:t.username.substr(0,1),title:t.title,text:t.text,postDetail:function(){return e.handlePostDetail(t.id)},handleLikeDeslikePost:e.handleLikeDeslikePost,id:t.id,votesCount:t.votesCount,userVoteDirection:t.userVoteDirection,name:t.username,url:"".concat(window.location.hostname,"/").concat(t.id)})}))))}}]),n}(r.a.Component),Ce=Object(c.c)((function(e){return{postList:e.postList.posts}}),(function(e){return{goToLoginPage:function(){return e(Object(T.d)(Xe.loginPage))},createNewPost:function(t,n){return e(function(e,t){return function(){var n=Object(P.a)(C.a.mark((function n(a){var r,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={title:e,text:t},n.prev=1,o=window.localStorage.getItem("token"),n.next=5,L.a.post("".concat(I,"posts"),r,{headers:{auth:o}});case 5:n.sent,a(_()),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},getPosts:function(){return e(_())},getPostDetails:function(t){return e(N(t))},likeDeslikePost:function(t,n,a){return e(Ee(t,n,a))}}}))(De);function Pe(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Pe=function(){return e},e}function Se(){var e=Object(x.a)(["\n  width: 20vw;\n  height: 100vh;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  @media screen and (max-width: 450px) {\n    width: 90%;\n  }\n"]);return Se=function(){return e},e}var Le=j.a.div(Se()),Te=j.a.form(Pe()),Ie=function(e){Object(k.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleChangeInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.state={userName:"",email:"",password:""},a}return Object(E.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.userName,a=t.email,o=t.password;return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(Le,null,r.a.createElement(Te,{onSubmit:function(t){t.preventDefault(),e.props.submitSingUp(n,a,o)}},r.a.createElement(y.a,{name:"userName",type:"text",value:n,onChange:this.handleChangeInput,placeholder:"Digite seu nome de usu\xe1rio.",required:!0}),r.a.createElement(y.a,{name:"email",type:"email",value:a,onChange:this.handleChangeInput,placeholder:"Digite seu email.",required:!0}),r.a.createElement(y.a,{name:"password",type:"password",value:o,onChange:this.handleChangeInput,placeholder:"Digite sua senha.",required:!0}),r.a.createElement(O.a,{color:"primary",type:"submit"},"Cadastrar"))))}}]),n}(a.Component),_e=Object(c.c)(null,(function(e){return{submitSingUp:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(P.a)(C.a.mark((function a(r){var o,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o={email:t,password:n,username:e},a.prev=1,a.next=4,L.a.post("".concat(I,"signup"),o);case 4:i=a.sent,window.localStorage.setItem("token",i.data.token),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Ie),Ue=function(e){return r.a.createElement(ie.a,null,r.a.createElement(ce.a,{title:e.title}),r.a.createElement(le.a,null,r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},e.text)),r.a.createElement(se.a,null,r.a.createElement(z.a,{onClick:function(){return e.handleLikeDeslikeComment(-1,e.id)}},r.a.createElement(he.a,{color:e.userVoteDirection>=0?"":"secondary"})),r.a.createElement("p",null,e.votesCount),r.a.createElement(z.a,{onClick:function(){return e.handleLikeDeslikeComment(1,e.id)}},r.a.createElement(fe.a,{color:e.userVoteDirection<=0?"":"primary"}))))},Ne=n(103),Ve=n.n(Ne),qe=function(e){Object(k.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleChangeInput=function(e){a.setState({comment:e.target.value})},a.submitComment=function(e){a.props.createNewComment(a.state.comment,e),a.setState({comment:""})},a.handleLikeDeslikePost=function(e,t){a.props.likeDeslikePost(e,t)},a.handleLikeDeslikeComment=function(e,t){a.props.likeDeslikeComment(e,t)},a.state={comment:""},a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("id"),t=window.localStorage.getItem("token");this.props.getPostDetails(e),null===t&&this.props.goToLoginPage()}},{key:"render",value:function(){var e=this,t=this.props.postDetail,n=t.username,a=t.text,o=t.title,i=t.comments,c=t.id,l=t.userVoteDirection,u=t.votesCount;return r.a.createElement("div",null,r.a.createElement($,{goToLoginPage:this.props.goToLoginPage}),r.a.createElement(Oe,null,r.a.createElement(we,{title:o,text:a,handleLikeDeslikePost:this.handleLikeDeslikePost,id:c,userVoteDirection:l,votesCount:u,avatar:n&&n.substr(0,1),name:n,showCommentIcon:!1,url:window.location.href}),r.a.createElement(je,{onSubmit:function(t){t.preventDefault(),e.submitComment(c)}},r.a.createElement(y.a,{name:"comment",type:"text",multiline:!0,value:this.state.comment,onChange:this.handleChangeInput,placeholder:"Digite um coment\xe1rio",required:!0}),r.a.createElement(O.a,{type:"submit"},"Publicar")),r.a.createElement(O.a,{color:"secondary",onClick:this.props.goToUserPage},r.a.createElement(Ve.a,null),"Voltar")),r.a.createElement(Oe,null,r.a.createElement("h2",null,"Coment\xe1rios"),void 0===i?r.a.createElement(be.a,null):i.map((function(t){return r.a.createElement(Ue,{key:t.id,title:t.username,text:t.text,handleLikeDeslikeComment:e.handleLikeDeslikeComment,id:t.id,userVoteDirection:t.userVoteDirection,votesCount:t.votesCount})}))))}}]),n}(a.Component),Me=Object(c.c)((function(e){return{postDetail:e.postList.postDetail}}),(function(e){return{goToLoginPage:function(){return e(Object(T.d)(Xe.loginPage))},goToUserPage:function(){return e(Object(T.d)(Xe.userPage))},createNewComment:function(t,n){return e(function(e,t){return function(){var n=Object(P.a)(C.a.mark((function n(a){var r,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=window.localStorage.getItem("id"),o=window.localStorage.getItem("token"),n.next=5,L.a.post("".concat(I,"posts/").concat(t,"/comment"),{text:e},{headers:{"Type-Content":"application/json",auth:o}});case 5:a(N(r)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},getPostDetails:function(t){return e(N(t))},likeDeslikePost:function(t,n){return e(Ee(t,n))},likeDeslikeComment:function(t,n,a){return e(function(e,t){return function(){var n=Object(P.a)(C.a.mark((function n(a){var r,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=window.localStorage.getItem("token"),o=window.localStorage.getItem("id"),n.next=5,L.a.put("".concat(I,"posts/").concat(o,"/comment/").concat(t,"/vote"),{direction:e},{headers:{"Content-Type":" application/json",auth:r}});case 5:n.sent,a(N(o)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(qe),Xe={loginPage:"/",singUpPage:"/singUpPage",userPage:"/userPage",postDetails:""};var ze,Ae=function(e){return r.a.createElement(g.a,{history:e.history},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:Xe.loginPage,component:oe}),r.a.createElement(f.a,{exact:!0,path:Xe.singUpPage,component:_e}),r.a.createElement(f.a,{exact:!0,path:Xe.userPage,component:Ce}),r.a.createElement(f.a,{exact:!0,path:Xe.postDetails,component:Me})))},Be=n(28),Ge=n(36),Je=n(74),Re={posts:[],postDetail:{}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return Object(Je.a)({},e,{posts:t.payload.data});case"POST_DETAILS":return Object(Je.a)({},e,{postDetail:t.payload.data});default:return e}},Fe=n(89),He=Object(Be.a)(),Ke=[Object(Ge.a)(Object(Fe.a)(He),l.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],Qe=Object(Ge.e)((ze=He,Object(Ge.c)({router:Object(g.b)(ze),postList:We})),Ge.d.apply(void 0,Ke)),Ye=function(){return r.a.createElement(c.a,{store:Qe},r.a.createElement(u.a,{theme:h},r.a.createElement(s.a,null),r.a.createElement(Ae,{history:He})))},Ze=document.getElementById("root");i.a.render(r.a.createElement(Ye,null),Ze)}},[[121,1,2]]]);
//# sourceMappingURL=main.b4bbace3.chunk.js.map
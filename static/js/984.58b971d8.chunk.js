"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[984],{9984:function(n,e,t){t.r(e),t.d(e,{default:function(){return Cn}});var r,o,a,i,s,c,l,d,u,f,p,x,h,m,g,b,Z,w,v,j,k,y,z=t(9439),C=t(2791),S=t(168),L=t(4238),_=L.Z.ul(r||(r=(0,S.Z)(["\n  margin: 0 auto;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 40px;\n  row-gap: 15px;\n  list-style: none;\n  padding: 0;\n"]))),F=L.Z.li(o||(o=(0,S.Z)(["\n  height: 60px;\n  width: 350px;\n  display: flex;\n\n  padding: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  border-bottom: 1px solid #000000;\n"]))),A=(L.Z.input(a||(a=(0,S.Z)(["\n  position: absolute;\n  top: -1;\n  visibility: hidden;\n  pointer-events: none;\n\n  &:checked + label {\n    color: #ffffff;\n  }\n"]))),L.Z.label(i||(i=(0,S.Z)(["\n  cursor: pointer;\n  transition: color 250ms linear;\n  &:hover,\n  &:focus {\n    color: #ffffff66;\n  }\n"]))),L.Z.p(s||(s=(0,S.Z)(["\n  font-size: 18px;\n  margin-bottom: 5px;\n"])))),E=L.Z.a(c||(c=(0,S.Z)(["\n  svg {\n    margin-right: 5px;\n  }\n"]))),M=L.Z.button(l||(l=(0,S.Z)(["\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  border: 2px solid #ffffff;\n  text-transform: uppercase;\n  text-align: center;\n  background-color: transparent;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  &:focus,\n  &:disabled {\n    cursor: pointer;\n    background-color: #00000044;\n    color: #fff;\n  }\n"]))),q=t(3871),D=t(8687),I=t(6355),P=t(9129),N=t(2906),H=function(n){return n.contacts.contacts},Q=function(n){return n.contacts.operation},W=function(n){return n.contacts.error},$=t(2330),B=t(7993),K=t(184),T=$.Q.FULFILLED,U=function(n){var e=n.contact,t=(0,D.useSelector)(Q),r=(0,D.useSelector)(W),o=(0,D.useDispatch)(),a=e.id,i=e.name,s=e.number;return(0,K.jsxs)(F,{children:[(0,K.jsx)(I.n_Y,{size:"40px"}),(0,K.jsxs)("div",{children:[(0,K.jsx)(A,{children:i}),(0,K.jsxs)(E,{href:"tel:".concat(s,"}"),children:[(0,K.jsx)(P.qNV,{size:"20px"}),s]})]}),(0,K.jsx)(M,{type:"button",disabled:t===a,onClick:function(){!function(n){o((0,q.GK)({id:n})).then((function(n){n.meta.requestStatus!==T||r?(0,B.t)("We are failed with deleting your contact. Please, try again..."):(0,B.t)("Contact '".concat(i,"' has been successfully deleted."),"success")}))}(a)},children:t===a?(0,K.jsx)(N.Ho,{size:"32px"}):(0,K.jsx)(I.AyY,{size:"20px"})})]})},V=t(473),Y=function(){var n=(0,D.useSelector)(H),e=(0,D.useSelector)(Q),t=(0,D.useSelector)(V.getIsLoggedIn),r=(0,D.useSelector)((function(n){return n.filter})),o=(0,D.useDispatch)();(0,C.useEffect)((function(){t&&o((0,q.Qd)()).catch((function(){(0,B.t)("We are failed with loading your contacts. Please, try again...")}))}),[o,t]);var a=function(){var e=r.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return"fetchAll"===e?(0,K.jsx)(N.Ho,{size:"150px"}):(0,K.jsx)(_,{children:n.length>0?a.map((function(n){return(0,K.jsx)(U,{contact:n},n.id)})):(0,K.jsx)("span",{children:"It's still empty here. Let's add something?"})})},G=t(5984),J=L.Z.div(d||(d=(0,S.Z)(["\n  max-width: 350px;\n  margin: 0 auto;\n"]))),R=L.Z.div(u||(u=(0,S.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 350px;\n  margin-bottom: 25px;\n"]))),X=L.Z.input(f||(f=(0,S.Z)(["\n  padding: 10px;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: #00000044;\n  outline: 3px solid transparent;\n\n  transition: outline 250ms linear;\n\n  &:focus {\n    outline: 3px solid #000000;\n  }\n"]))),O=L.Z.label(p||(p=(0,S.Z)(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  font-size: 18px;\n  text-transform: uppercase;\n"]))),nn=L.Z.button(x||(x=(0,S.Z)(["\n  display: block;\n  flex-shrink: 0;\n  width: 50px;\n  height: 50px;\n\n  padding: 10px;\n  border-radius: 4px;\n  border: 2px solid #ffffff;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 600;\n  background-color: transparent;\n  transition: background-color 250ms linear, color 250ms linear;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    cursor: pointer;\n    background-color: #00000044;\n    color: #fff;\n  }\n"]))),en=t(6895),tn=function(n){var e=n.toggleModal,t=(0,G.x0)(),r=(0,D.useSelector)((function(n){return n.filter})),o=(0,D.useDispatch)();return(0,K.jsxs)(J,{children:[(0,K.jsx)(O,{htmlFor:t,children:"Filter contacts by name"}),(0,K.jsxs)(R,{children:[(0,K.jsx)(X,{autoComplete:"off",type:"text",id:t,name:"filter",value:r,onChange:function(n){o((0,en.h)(n.currentTarget.value))}}),(0,K.jsx)(nn,{onClick:e,"data-open-modal":!0,children:(0,K.jsx)(I.Bj$,{size:"20px"})})]})]})},rn=t(1413),on=t(5861),an=t(4687),sn=t.n(an),cn=L.Z.div(h||(h=(0,S.Z)(["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #00000066;\n  backdrop-filter: blur(4px);\n  overflow-y: scroll;\n"]))),ln=L.Z.div(m||(m=(0,S.Z)(["\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #ffffffcc;\n  box-shadow: #ffffff 0px 0px 20px;\n\n  width: 300px;\n  border-radius: 15px;\n  padding: 15px;\n"]))),dn=L.Z.button(g||(g=(0,S.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-bottom: 10px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  &:focus,\n  &:disabled {\n    cursor: pointer;\n    background-color: #00000044;\n    color: #fff;\n  }\n"]))),un=L.Z.form(b||(b=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]))),fn=L.Z.h2(Z||(Z=(0,S.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  text-align: center;\n"]))),pn=L.Z.input(w||(w=(0,S.Z)(["\n  padding: 10px;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: #00000044;\n  outline: 3px solid transparent;\n\n  transition: outline 250ms linear;\n\n  &:focus {\n    outline: 3px solid #000000;\n  }\n"]))),xn=L.Z.label(v||(v=(0,S.Z)(["\n  padding: 0;\n  margin: 0;\n  text-transform: capitalize;\n  width: 100%;\n  font-size: 18px;\n"]))),hn=L.Z.span(j||(j=(0,S.Z)(["\n  max-width: 100%;\n  font-size: 14px;\n  color: red;\n"]))),mn=L.Z.button(k||(k=(0,S.Z)(["\n  width: 150px;\n  padding: 10px;\n  border-radius: 4px;\n  border: 2px solid #ffffff;\n  text-transform: uppercase;\n  text-align: center;\n  background-color: transparent;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  &:focus,\n  &:disabled {\n    cursor: pointer;\n    background-color: #00000044;\n    color: #fff;\n  }\n"]))),gn=t(8820),bn=t(1134),Zn=t(4695),wn=t(6727),vn=t(4164),jn=$.Q.FULFILLED,kn=document.querySelector("#modal-root"),yn=function(n){var e=n.toggleModal,t=(0,G.x0)(),r=(0,G.x0)(),o=(0,D.useSelector)(H),a=(0,D.useSelector)(Q),i=(0,D.useSelector)(W),s=(0,D.useDispatch)(),c=wn.Ry().shape({name:wn.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:wn.Z_().matches("^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$","Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),l=(0,bn.cI)({resolver:(0,Zn.X)(c)}),d=l.register,u=l.handleSubmit,f=l.reset,p=l.formState.errors,x=function(n){var t,r,o;((null===(t=n.currentTarget.dataset)||void 0===t?void 0:t.openModal)||(null===(r=n.target.dataset)||void 0===r?void 0:r.closeModal)||(null===(o=n.target.dataset)||void 0===o?void 0:o.backdrop)||"Escape"===n.code)&&e()};(0,C.useEffect)((function(){return window.addEventListener("keydown",x),function(){window.removeEventListener("keydown",x)}}));var h=function(){var n=(0,on.Z)(sn().mark((function n(t){var r,a,c;return sn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.name,a=t.number,c=r.toLowerCase(),!o.find((function(n){return n.name.toLowerCase()===c}))){n.next=6;break}return(0,B.t)('"'.concat(r,'" is already in contacts.')),n.abrupt("return");case 6:s((0,q.uK)({name:r,number:a})).then((function(n){if(n.meta.requestStatus===jn&&!i)return(0,B.t)("Contact '".concat(r,"' has been successfully added."),"success"),f({name:"",number:""}),void e();(0,B.t)("We are failed with adding your new contact. Please, try again...")}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,vn.createPortal)((0,K.jsx)(cn,{"data-backdrop":!0,onClick:x,children:(0,K.jsxs)(ln,{children:[(0,K.jsx)(dn,{"data-close-modal":!0,onClick:x,children:(0,K.jsx)(gn.SV5,{size:"25px","data-close-modal":!0})}),(0,K.jsxs)(un,{autoComplete:"off",onSubmit:u(h),children:[(0,K.jsx)(fn,{children:"Fill the form below, to add your new contact."}),(0,K.jsx)(xn,{htmlFor:t,children:"Name"}),(0,K.jsx)(pn,(0,rn.Z)((0,rn.Z)({type:"text"},d("name")),{},{id:t})),p.name&&(0,K.jsx)(hn,{children:p.name.message}),(0,K.jsx)(xn,{htmlFor:r,children:"Number"}),(0,K.jsx)(pn,(0,rn.Z)((0,rn.Z)({type:"text"},d("number")),{},{id:r})),p.number&&(0,K.jsx)(hn,{children:p.number.message}),(0,K.jsx)(mn,{type:"submit",disabled:"addContact"===a,children:"addContact"===a?(0,K.jsx)(N.Ho,{size:"32px"}):"add contact"})]})]})}),kn)},zn=L.Z.div(y||(y=(0,S.Z)(["\n  max-width: 100%;\n  margin: 0 auto;\n"]))),Cn=function(){var n=(0,C.useState)(!1),e=(0,z.Z)(n,2),t=e[0],r=e[1],o=function(){r(!t)};return(0,K.jsxs)(zn,{children:[(0,K.jsx)(tn,{toggleModal:o}),(0,K.jsx)(Y,{}),t&&(0,K.jsx)(yn,{toggleModal:o})]})}}}]);
//# sourceMappingURL=984.58b971d8.chunk.js.map
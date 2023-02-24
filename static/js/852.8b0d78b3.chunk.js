"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[852],{3852:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i=t(9434),s=t(8792),c=t(6916),o=function(n){return n.contacts.items},u=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=(0,c.P1)([o,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),x=t(168),f=t(6444),p=f.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.space[5]})),m=t(19),h=t(9135),j=t(184);function b(){var n=(0,i.v9)(o),e=(0,i.I0)();return(0,j.jsxs)(p,{className:"form",onSubmit:function(t){t.preventDefault();var r=t.target.name.value,a=t.target.number.value;if(n.find((function(n){return n.name===r})))return alert("".concat(r," is already in contacts.")),null;var i={name:r,number:a};e((0,s.uK)(i)),t.target.reset()},children:[(0,j.jsxs)(m.__,{children:["Name",(0,j.jsx)(m.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(m.__,{children:["Number",(0,j.jsx)(m.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsxs)(m.zx,{type:"submit",children:[(0,j.jsx)(h.VAJ,{})," Add contact"]})]})}var g,v,y,Z,w,C,z=f.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]})),I=t(9439),k=t(2791),A=f.ZP.li(g||(g=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid;\n\n  gap: ","px;\n  font-weight: ",";\n  @media screen and (max-width: 480px) {\n    font-size: ",";\n    gap: ","px;\n  }\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[4]})),P=f.ZP.span(v||(v=(0,x.Z)(["\n  /* max-width: 200px; */\n  /* overflow-wrap: break-word; */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  /* @media screen and (max-width: 480px) {\n    inline-size: 165px;\n  } */\n"]))),N=f.ZP.div(y||(y=(0,x.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: ","px;\n  justify-content: space-between;\n  align-items: center;\n"])),(function(n){return n.theme.space[2]})),_=t(4164),S=f.ZP.div(Z||(Z=(0,x.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),q=f.ZP.div(w||(w=(0,x.Z)(["\n  background-color: ",";\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n  border: 1px solid;\n      border-radius:8px;\n"])),(function(n){return n.theme.colors.white})),E=document.querySelector("#modal-root");function F(n){var e=n.onClose,t=n.children;(0,k.useEffect)((function(){return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e(),n.currentTarget===n.target&&e()};return(0,_.createPortal)((0,j.jsx)(S,{onClick:r,children:(0,j.jsx)(q,{children:t})}),E)}var D,J,L,B=f.ZP.form(C||(C=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: 20px;\n  border: 1px solid;\n      border-radius:8px;\n"])),(function(n){return n.theme.space[5]}));function G(n){var e=n.contact,t=n.onClose,r=(0,i.I0)(),a=(0,i.v9)(o),c=(0,k.useState)(e.name),u=(0,I.Z)(c,2),l=u[0],d=u[1],x=(0,k.useState)(e.number),f=(0,I.Z)(x,2),p=f[0],b=f[1],g=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":d(r);break;case"number":b(r);break;default:alert("case ".concat(t," doesn't support"))}};return(0,j.jsxs)(B,{className:"form",onSubmit:function(n){n.preventDefault();var i=a.find((function(n){return n.name===l}));if(i)return alert("".concat(l," is already in contacts.")),null;try{r((0,s.mP)({id:e.id,name:l,number:p}))}catch(c){}alert("contact ".concat(l," was successfully changed")),t()},children:[(0,j.jsxs)(m.__,{children:["Name",(0,j.jsx)(m.II,{onChange:g,type:"text",name:"name",value:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(m.__,{children:["Number",(0,j.jsx)(m.II,{onChange:g,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsxs)(m.zx,{type:"submit",children:[(0,j.jsx)(h.VAJ,{})," Edit contact"]})]})}var M=f.ZP.div(D||(D=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: 20px;\n  border: 1px solid;\n  border-radius: 8px;\n"])),(function(n){return n.theme.space[5]})),T=f.ZP.p(J||(J=(0,x.Z)(["\n  text-align: center;\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),$=f.ZP.ul(L||(L=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),K=function(n){var e=n.userId,t=n.onClose,r=(0,i.I0)();return(0,j.jsxs)(M,{children:[(0,j.jsx)(T,{children:"Are you sure you want to delete this contact?"}),(0,j.jsxs)($,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(m.zx,{onClick:function(){return r((0,s.GK)(e))},children:"YES"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m.zx,{onClick:t,children:"NO"})})]})]})},V=function(n){var e=n.id,t=n.number,r=n.name,a=(0,k.useState)(!1),i=(0,I.Z)(a,2),s=i[0],c=i[1],o=(0,k.useState)(""),u=(0,I.Z)(o,2),l=u[0],d=u[1];return(0,j.jsxs)(A,{children:[(0,j.jsx)(m.zx,{type:"button",onClick:function(){return c((function(n){return!n}))},children:(0,j.jsx)(h.dfI,{})}),(0,j.jsxs)(N,{children:[(0,j.jsxs)(P,{children:[(0,j.jsx)(h.q1E,{fill:"orange"})," ",r,":"]}),(0,j.jsxs)("span",{children:[(0,j.jsx)(h.DNl,{fill:"orange"})," ",t]})]}),(0,j.jsx)(m.zx,{type:"button",onClick:function(){return d(e)},children:(0,j.jsx)(h.lp8,{})}),s&&(0,j.jsx)(F,{onClose:function(){return c((function(n){return!n}))},children:(0,j.jsx)(G,{contact:{name:r,number:t,id:e},onClose:function(){return c((function(n){return!n}))}})}),l&&(0,j.jsx)(F,{onClose:function(){return d("")},children:(0,j.jsx)(K,{userId:l,onClose:function(){return d("")}})})]},e)},W=function(){var n=(0,i.v9)(d);return(0,j.jsx)(z,{children:n.map((function(n){var e=n.id,t=n.number,r=n.name;return(0,j.jsx)(V,{id:e,number:t,name:r},e)}))})},O=t(4808),R=function(){var n=(0,i.I0)();return(0,j.jsxs)(m.__,{children:["Find contacts by name",(0,j.jsx)(m.II,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return n((0,O.T)(e.target.value))}})]})},Y=t(6702);function H(){var n=(0,i.I0)(),e=(0,i.v9)(u),t=(0,i.v9)(l);return(0,k.useEffect)((function(){n((0,s.yF)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(Y.x,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:5,as:"section",children:[(0,j.jsx)("h1",{children:"Phonebook"}),e&&!t&&(0,j.jsx)("b",{children:"Request in progress..."}),t&&(0,j.jsx)("b",{children:t}),(0,j.jsx)(b,{})]}),(0,j.jsxs)(Y.x,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:5,as:"section",children:[(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(R,{}),(0,j.jsx)(W,{})]})]})}}}]);
//# sourceMappingURL=852.8b0d78b3.chunk.js.map
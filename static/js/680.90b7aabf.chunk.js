"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680,664,906],{2906:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(9439),i=t(4903),l=t(5705),a=function(e){return e.contacts.items},s=t(9434),c=t(4190),o=t(5863),u=t(824),d=t(5777),x=t(3329),h=function(){var e=(0,s.I0)(),n=(0,s.v9)(a),t=[{name:"name",label:"Name"},{name:"number",label:"Number"}];return(0,x.jsx)(c.kC,{align:"center",justify:"center",children:(0,x.jsxs)(c.xu,{p:6,rounded:"md",children:[(0,x.jsx)(c.xv,{fontSize:"25px",fontWeight:"extrabold",textAlign:["center"],mb:"20px",children:"Phonebook"}),(0,x.jsx)(l.J9,{initialValues:{email:"",password:""},onSubmit:function(t,r){var l=r.setSubmitting,a=r.resetForm;l(!0),n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):e((0,i.uK)(t)),a(),l(!1)},children:function(e){var n=e.values,r=e.handleChange,i=e.handleBlur;return(0,x.jsxs)(l.l0,{children:[t.map((function(e){var t=e.name,a=e.label;return(0,x.jsxs)("div",{children:[(0,x.jsx)(o.lX,{fontWeight:"300",fontSize:"15px",mb:"0px",mt:"15px",children:a}),(0,x.jsx)(l.gN,{as:u.II,variant:"filled",name:t,type:"text",id:t,onBlur:i,onChange:r,placeholder:a,value:n[t]||""})]},t)})),(0,x.jsx)(d.zx,{type:"submit",colorScheme:"purple",width:"full",mt:"30px",children:"Add contact"})]})}})]})})},m=t(9869),f=t(1089),j=function(e){var n=e.getFilteredContacts,t=(0,s.I0)(),r=(0,s.v9)(m.vW);return(0,x.jsx)(c.kC,{align:"center",justify:"center",children:(0,x.jsx)(c.xu,{p:6,children:(0,x.jsx)(f.xJ,{children:(0,x.jsxs)(f.iA,{variant:"simple",children:[(0,x.jsxs)(f.Rn,{children:["Personal phonebook\xa0",r]}),(0,x.jsx)(f.hr,{children:(0,x.jsxs)(f.Tr,{children:[(0,x.jsx)(f.Th,{children:"Name"}),(0,x.jsx)(f.Th,{children:"Number"}),(0,x.jsx)(f.Th,{})]})}),(0,x.jsx)(f.p3,{children:null===n||void 0===n?void 0:n.map((function(e){var n=e.id,r=e.name,l=e.number;return(0,x.jsxs)(f.Tr,{children:[(0,x.jsx)(f.Td,{children:r}),(0,x.jsx)(f.Td,{children:l}),(0,x.jsx)(f.Td,{isNumeric:!0,children:(0,x.jsx)(d.zx,{h:"20px",type:"button",onClick:function(){return function(e){return t((0,i.GK)(e))}(n)},children:"Delete"})})]},n)}))})]})})})})},p=t(2791),v=function(e){var n=e.onChangeFilter,t=e.value;return(0,x.jsx)(c.kC,{align:"center",justify:"center",children:(0,x.jsxs)(c.xu,{p:6,rounded:"md",children:[(0,x.jsx)(c.xv,{fontSize:"20px",fontWeight:"extrabold",textAlign:["center"],children:"Contacts"}),(0,x.jsxs)("form",{children:[(0,x.jsx)(c.xv,{htmlFor:"text",textAlign:["center"],children:"Find contacts by name"}),(0,x.jsx)(u.II,{id:"text",name:"text",type:"text",onChange:n,value:t})]})]})})},g=t(6538),b=t(7269),C=t(1413),w=t(410),y=t(9135),k=function(e){var n=(0,w.If)().toggleColorMode,t=(0,w.ff)("dark","light"),r=(0,w.ff)(y.TLr,y.Mei);return(0,x.jsx)(d.hU,(0,C.Z)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(t," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:n,icon:(0,x.jsx)(r,{})},e))},S=function(){var e=(0,p.useState)(""),n=(0,r.Z)(e,2),t=n[0],l=n[1],o=(0,s.v9)(a),u=(0,s.I0)();return(0,p.useEffect)((function(){u((0,i.K2)())}),[u]),(0,x.jsx)(g.xjn,{theme:b.rS,children:(0,x.jsxs)(c.xu,{maxW:"960px",mx:"auto",children:[(0,x.jsx)(k,{justifySelf:"flex-end"}),(0,x.jsx)(h,{}),(0,x.jsx)(v,{onChangeFilter:function(e){l(e.target.value)},value:t}),(0,x.jsx)(j,{getFilteredContacts:function(){var e=t.toLowerCase();return null===o||void 0===o?void 0:o.filter((function(n){return n.name.toLowerCase().includes(e)}))}()})]})})}},680:function(e,n,t){t.r(n);var r=t(9869),i=t(9434),l=t(2906),a=t(6664),s=t(3329);n.default=function(){var e=(0,i.v9)(r.M7);return(0,s.jsx)(s.Fragment,{children:e?(0,s.jsx)(l.default,{}):(0,s.jsx)(a.default,{})})}},6664:function(e,n,t){t.r(n);var r=t(5705),i=t(9434),l=t(4190),a=t(5863),s=t(824),c=t(5777),o=t(8724),u=t(3329);n.default=function(){var e=(0,i.I0)(),n=[{name:"email",label:"Email",type:"text"},{name:"password",label:"Password",type:"password"}];return(0,u.jsx)(l.kC,{align:"center",justify:"center",children:(0,u.jsx)(l.xu,{p:6,rounded:"md",children:(0,u.jsx)(r.J9,{initialValues:{email:"",password:""},onSubmit:function(n,t){var r=t.setSubmitting,i=t.resetForm;r(!0),e((0,o.Ib)(n)),i(),r(!1)},children:function(e){var t=e.values,i=e.handleChange,l=e.handleBlur;return(0,u.jsxs)(r.l0,{children:[n.map((function(e){var n=e.name,c=e.label,o=e.type;return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.lX,{htmlFor:"",children:c}),(0,u.jsx)(r.gN,{as:s.II,variant:"filled",name:n,type:o,id:n,onBlur:l,onChange:i,placeholder:c,value:t[n]||""})]},n)})),(0,u.jsx)(c.zx,{type:"submit",colorScheme:"purple",width:"full",mt:"30px",children:"Submit"})]})}})})})}}}]);
//# sourceMappingURL=680.90b7aabf.chunk.js.map
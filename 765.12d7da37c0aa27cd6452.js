"use strict";(self.webpackChunkuser_profile_app=self.webpackChunkuser_profile_app||[]).push([[765],{765:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var r=t(5893),a=t(1054),l=t(7007),s=t(7294),i=t(5443),c=t(3790),o=t(4611),u=t(4436),d=t(5272),f=t(7275);const h={};var p=function(){return p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},p.apply(this,arguments)},v=function(e){var n=e.className,t=e.activeStep,a=e.steps;return(0,r.jsx)("div",p({className:(0,o.A)(h.Stepper,{},[n])},{children:(0,r.jsx)(u.Z,p({activeStep:t,alternativeLabel:!0},{children:a.map((function(e){return(0,r.jsx)(d.Z,{children:(0,r.jsx)(f.Z,{children:e})},e)}))}))}))},m=t(9161);var b=function(){return b=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},b.apply(this,arguments)},j=function(e){var n=e.className,t=e.children,l=e.onSetStep,c=(0,i.$)().t,u=(0,s.useState)(0),d=u[0],f=u[1],h=t[d],p=t.length-1,j=t.map((function(e){var n;return null===(n=e.props)||void 0===n?void 0:n.label}));(0,s.useEffect)((function(){null==l||l(d)}),[d,l]);var x=(0,s.useCallback)((function(){var e,n;d<p&&f(d+1),null===(n=null===(e=null==h?void 0:h.props)||void 0===e?void 0:e.onNext)||void 0===n||n.call(e)}),[d,h,p]),O=(0,s.useCallback)((function(){var e,n;d>0&&f(d-1),null===(n=null===(e=null==h?void 0:h.props)||void 0===e?void 0:e.onBack)||void 0===n||n.call(e)}),[d,h]),y=(0,a.u6)().isValid;return(0,r.jsx)("div",b({className:(0,o.A)("rX97fOHJ",{},[n])},{children:(0,r.jsxs)(a.l0,{children:[(0,r.jsx)(v,{steps:j,activeStep:d}),h,(0,r.jsxs)("div",b({className:(0,o.A)("btn-wrapper",{},["IaSo3NL2"])},{children:[(0,r.jsx)(m.z,b({className:"btn-margin",type:"button",name:"back",onClick:O},{children:c("Назад")})),d===p?(0,r.jsx)(m.z,b({className:"btn-margin",type:"submit",name:"submit",theme:m.b.COLOR,disabled:!y,onClick:x},{children:c("Отправить")})):(0,r.jsx)(m.z,b({className:"btn-margin",type:"button",name:"next",theme:m.b.COLOR,onClick:x,disabled:!y},{children:c("Далее")}))]}))]})}))};const x={};var O=function(){return O=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},O.apply(this,arguments)},y=function(e){var n=e.className,t=e.children;return function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}}(e,["className","children"]),(0,r.jsx)("div",O({className:(0,o.A)(x.StepForm,{},[n])},{children:t}))},g=t(9250),w=t(4896),k=t(3935),C=function(e){var n=e.children,t=e.element,r=void 0===t?document.body:t;return(0,k.createPortal)(n,r)};var N,S,E=function(){return E=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},E.apply(this,arguments)},L=function(e){var n,t=e.className,a=e.children,l=e.isOpen,i=e.onClose,c=e.lazy,u=(0,s.useState)(!1),d=u[0],f=u[1],h=(0,s.useState)(!1),p=h[0],v=h[1],m=(0,s.useRef)();(0,s.useEffect)((function(){l&&v(!0)}),[l]);var b=(0,s.useCallback)((function(){i&&(f(!0),m.current=setTimeout((function(){i(),f(!1)}),200))}),[i]),j=(0,s.useCallback)((function(e){"Escape"===e.key&&b()}),[b]);(0,s.useEffect)((function(){return l&&window.addEventListener("keydown",j),function(){clearTimeout(m.current),window.removeEventListener("keydown",j)}}),[l,j]);var x=((n={}).RuLiugLP=l,n.xbkvHSuk=d,n);return c&&!p?null:(0,r.jsx)(C,{children:(0,r.jsx)("div",E({className:(0,o.A)("ESw4g_qu",x,[t])},{children:(0,r.jsx)("div",E({className:"OTlZW4pf",onClick:b},{children:(0,r.jsx)("div",E({className:"NxhSG1qz",onClick:function(e){e.stopPropagation()}},{children:a}))}))}))})},P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},P.apply(this,arguments)},R=function(e){var n=e.className;return(0,r.jsxs)("div",P({className:(0,o.A)("lds-ellipsis",{},[n])},{children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}))};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(this,arguments)}const I=function(e){return s.createElement("svg",A({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),N||(N=s.createElement("rect",{width:80,height:80,rx:40,fill:"#E84E58",fillOpacity:.15})),S||(S=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40 20.8C29.4 20.8 20.8 29.4 20.8 40c0 10.598 8.601 19.2 19.2 19.2 10.598 0 19.2-8.602 19.2-19.2 0-10.599-8.602-19.2-19.2-19.2Zm-7.59 10.683a.826.826 0 0 1 1.167 0L40 37.907l6.422-6.422a.826.826 0 0 1 1.168 0l1.168 1.167a.826.826 0 0 1 0 1.168l-6.422 6.423 6.422 6.422a.826.826 0 0 1 0 1.168L47.59 49a.826.826 0 0 1-1.168 0L40 42.577 33.577 49a.826.826 0 0 1-1.167 0l-1.168-1.168a.826.826 0 0 1 0-1.168l6.422-6.422-6.422-6.423a.826.826 0 0 1 0-1.168l1.168-1.168Z",fill:"#E84E58"})))};var z,Z;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}const F=function(e){return s.createElement("svg",_({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),z||(z=s.createElement("rect",{width:80,height:80,rx:40,fill:"#05AE71",fillOpacity:.15})),Z||(Z=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8 40c0-10.598 8.602-19.2 19.2-19.2 10.599 0 19.2 8.602 19.2 19.2 0 10.599-8.602 19.2-19.2 19.2-10.598 0-19.2-8.602-19.2-19.2Zm26.61-7.01a1.062 1.062 0 0 0-1.404.17l-8.11 9.371-4.181-3.757a1.063 1.063 0 0 0-1.413 0l-1.57 1.41a.988.988 0 0 0 0 1.479l5.863 5.268c.192.173.445.27.707.27h1.605c.307 0 .599-.133.796-.36l9.654-11.155a.989.989 0 0 0-.189-1.466l-1.759-1.23Z",fill:"#05AE71"})))};var $=function(){return $=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},$.apply(this,arguments)},V=function(e){var n=e.className,t=e.isOpen,a=e.onClose,l=e.isSucsess,c=(0,i.$)().t,u=(0,g.s0)();return(0,r.jsx)(L,$({className:(0,o.A)("",{},[n]),isOpen:t,onClose:a,lazy:!0},{children:(0,r.jsx)(s.Suspense,$({fallback:(0,r.jsx)(R,{})},{children:(0,r.jsx)("div",$({className:"RS35s_xd"},{children:l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:c("Форма успешно отправлена")}),(0,r.jsx)(F,{}),(0,r.jsx)(m.z,$({name:"close",onClick:a,theme:m.b.COLOR},{children:c("Закрыть")}))]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:c("При отправке произошла ошибка")}),(0,r.jsx)(I,{}),(0,r.jsx)(m.z,$({name:"close",onClick:function(){return u(w.h3.main)},theme:m.b.ERROR},{children:c("На главную")}))]})}))}))}))},M=function(){return M=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},M.apply(this,arguments)};const T=function(){var e=(0,g.s0)(),n=(0,l.I0)(),t=(0,s.useCallback)((function(e){return n(c.hI.updateFields(e))}),[n]),o=(0,s.useCallback)((function(){return n(c.hI.submitForm())}),[n]),u=(0,l.v9)(c.f_),d=(0,l.v9)(c.CP),f=(0,s.useCallback)((function(e){return n(c.hI.setStep(e))}),[n]),h=(0,i.$)().t,p=(0,s.useState)(),v=p[0],m=p[1],b=(0,s.useState)(!1),x=b[0],O=b[1],k=(0,s.useCallback)((function(){return O(!1)}),[]),C=(0,s.useCallback)((function(){return O(!0)}),[]);return(0,s.useEffect)((function(){switch(d){case 0:m(c.LR);break;case 1:m(c.N$);break;case 2:m(c.mh)}}),[d]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",M({className:"visually-hidden"},{children:h("Создание профиля")})),(0,r.jsxs)("div",M({className:"form"},{children:[(0,r.jsx)(a.J9,M({initialValues:M({},u),validationSchema:v,isInitialValid:!1,validateOnChange:!0,validateOnMount:!0,onSubmit:function(e){t(e),o()}},{children:function(n){n.errors,n.handleSubmit,n.isValid;var t=n.values;return(0,r.jsxs)(j,M({onSetStep:function(e){return f(e||0)}},{children:[(0,r.jsx)(y,M({label:"1",onBack:function(){e(w.h3.main)}},{children:(0,r.jsx)(c.Im,{})})),(0,r.jsx)(y,M({label:"2"},{children:(0,r.jsx)(c.Nc,{advantagesList:t.advantages||[],levelList:c.Ib,skillsList:c.$Q})})),(0,r.jsx)(y,M({label:"3",onNext:function(){return C()}},{children:(0,r.jsx)(c.ke,{})}))]}))}})),(0,r.jsx)(V,{onClose:k,isOpen:x,isSucsess:!0})]}))]})}}}]);
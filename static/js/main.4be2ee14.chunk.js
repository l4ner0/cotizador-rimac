(this["webpackJsonpcotizador-rimac"]=this["webpackJsonpcotizador-rimac"]||[]).push([[0],{100:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(11),r=a.n(s),o=(a(98),a(2)),i=function(){return Object(o.jsxs)("div",{className:"toolbar",children:[Object(o.jsx)("div",{className:"toolbar__logo",children:Object(o.jsx)("img",{src:"/assets/img/logo-rimac.svg",alt:"logo"})}),Object(o.jsxs)("div",{className:"toolbar__option",children:[Object(o.jsx)("img",{className:"option__img",src:"/assets/img/ic_phone.png",alt:"telefono"}),Object(o.jsx)("span",{className:"option__text",children:"Ll\xe1manos"})]})]})},l=(a(100),function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("p",{children:"\xa9 2020 RIMAC Seguros y Reaseguros."})})}),u=a(14),d=a(21),j=a.n(d),m=a(33),b=a(34),O=a(9),p=a(56),x=a.n(p),h="http://localhost:3010",v=function(e){return x.a.get("".concat(h,"/quoteInsurance"),e)},f={documentList:[{id:1,name:"DNI"},{id:2,name:"CE"},{id:3,name:"RUC"}],datos:{},vehicleYearsList:[],vehicleBrandsList:[]},_="SET_DATOS",g="SET_VEHICLE_YEARS_LIST",N="SET_VEHICLE_BRANDS_LIST";var y=function(e){return function(){var t=Object(m.a)(j.a.mark((function t(a,c){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return n=t.sent,s=n.data,a({type:_,payload:Object(O.a)(Object(O.a)({},s.response),e)}),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},C=(a(125),function(){return Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("div",{className:"hero__text",children:[Object(o.jsx)("p",{className:"text_header",children:"\xa1Nuevo!"}),Object(o.jsxs)("p",{className:"text__content",children:["Seguro Vehicular ",Object(o.jsx)("span",{className:"text__content--red",children:"Tracking"})]}),Object(o.jsx)("p",{className:"text__footer",children:"Cuentanos donde le haras seguimiento a tu seguro"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"hero__img",src:"/assets/img/client-banner.svg",alt:"cliente-banner"})})]})}),S=a(19),k=a(18),w=a(174),L=a(5),E=a(187),A=a(178),F=a(184),R=a(57),T=a(141),z=a(189),I=a(186),D=a(181),q=(a(126),Object(w.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"},textField:{marginTop:"10px",marginBottom:"10px",width:"100%"},label:{color:"#676F8F",fontSize:"10px"},formControl:{minWidth:"96px"}}}))),B=Object(L.a)({root:{color:R.a[400],"&$checked":{color:R.a[600]}},checked:{}})((function(e){return Object(o.jsx)(I.a,Object(O.a)({color:"default"},e))})),P=function(e){var t=e.documentList,a=e.submitCotizalo,n=q(),s={term:!1,documentType:1,documento:"",celular:"",placa:""},r=Object(c.useState)(Object(O.a)({},s)),i=Object(k.a)(r,2),l=i[0],u=i[1],d=function(e){u(Object(O.a)(Object(O.a)({},l),{},Object(S.a)({},e.target.name,e.target.checked)))},j=function(e){u(Object(O.a)(Object(O.a)({},l),{},Object(S.a)({},e.target.name,e.target.value.toUpperCase())))};return Object(o.jsxs)("form",{onSubmit:function(e){a(l),u(Object(O.a)({},s)),e.preventDefault()},children:[Object(o.jsxs)("div",{className:"form-documento",children:[Object(o.jsx)(A.a,{variant:"outlined",className:n.formControl,children:Object(o.jsx)(F.a,{required:!0,native:!0,value:l.documentType,onChange:d,inputProps:{name:"documentType",id:"outlined-age-native-simple"},className:"form-documento__select",children:t.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(o.jsx)(E.a,{required:!0,label:"Nro. de doc",className:"form-documento__text",variant:"outlined",name:"documento",value:l.documento,onChange:j})]}),Object(o.jsx)(E.a,{required:!0,label:"Celular",className:n.textField,variant:"outlined",name:"celular",value:l.celular,onChange:j}),Object(o.jsx)(E.a,{required:!0,label:"Placa",className:n.textField,variant:"outlined",name:"placa",value:l.placa,onChange:j}),Object(o.jsx)(T.a,{row:!0,className:"form-check",children:Object(o.jsx)(z.a,{className:n.label,control:Object(o.jsx)(B,{checked:l.term,onChange:d,name:"term",required:!0}),label:"Acepto la Pol\xedtica de Protecci\xf3n de Datos Personales y los T\xe9rminos y Condiciones",name:"terms"})}),Object(o.jsx)("div",{className:"form-button",children:Object(o.jsx)(D.a,{type:"submit",className:n.root,variant:"contained",color:"secondary",size:"large",children:"Cot\xedzalo"})})]})},V=(a(128),function(){localStorage.clear();var e=Object(u.f)(),t=Object(b.c)((function(e){return e.cotizadorRimac})),a=t.documentList,c=(t.datos,Object(b.b)()),n=function(){var t=Object(m.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(y(a));case 2:n=t.sent,"00"===n.codRes&&e.push("/mis-datos");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)(C,{}),Object(o.jsx)("p",{className:"form-container form-titulo",children:"D\xe9janos tus datos"}),Object(o.jsx)("div",{className:"form-container",children:Object(o.jsx)(P,{documentList:a,submitCotizalo:n})})]})}),Y=a(182),M=(a(133),Object(L.a)((function(e){return{root:{height:"6px",borderRadius:"20px",minWidth:"100px"},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:"20px",backgroundColor:"#6F7DFF"}}}))(Y.a)),J=function(){return Object(o.jsxs)("div",{className:"breadcrumbs",children:[Object(o.jsx)("div",{className:"breadcrumbs__previous",children:Object(o.jsx)("img",{src:"/assets/img/ellipse.svg",alt:""})}),Object(o.jsx)("div",{className:"breadcrumbs__text",children:"Paso 1 de 2"}),Object(o.jsx)("div",{className:"breadcrumbs__progress",children:Object(o.jsx)(M,{variant:"determinate",value:50})})]})},$=a(188),H=(a(134),function(){return Object(o.jsxs)("div",{className:"help-marca",children:[Object(o.jsx)("div",{className:"help-marca__img",children:Object(o.jsx)("img",{src:"/assets/img/car.svg",alt:""})}),Object(o.jsxs)("div",{className:"help-marca__text",children:[Object(o.jsx)("p",{children:"\xbfNo encuentras el modelo?"}),Object(o.jsx)("a",{href:"#",children:"Clic Aqu\xed"})]})]})}),U=a(185),X=a(183),G=a(80),W=a.n(G),K=a(79),Q=a.n(K),Z=(a(135),Object(w.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"}}}))),ee=Object(L.a)({root:{color:"#C5CBE0","&$checked":{color:R.a[600]}},checked:{}})((function(e){return Object(o.jsx)(U.a,Object(O.a)({required:!0,color:"default"},e))})),te=function(e){var t=e.vehicleYearsList,a=e.vehicleBrandsList,n=e.minimumAmount,s=e.maximumAmount,r=Z(),i={year:"",brand:"",amount:s,isGasVehicle:null},l=Object(c.useState)(Object(O.a)({},i)),u=Object(k.a)(l,2),d=u[0],j=u[1],m=function(e){j(Object(O.a)(Object(O.a)({},d),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("form",{onSubmit:function(e){console.log("continueButton: ",d),e.preventDefault()},className:"form-mis-datos",children:[Object(o.jsxs)(A.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(o.jsx)($.a,{id:"demo-customized-select-label",children:"A\xf1o"}),Object(o.jsxs)(F.a,{required:!0,native:!0,value:d.year,onChange:m,label:"A\xf1o",inputProps:{name:"year",id:"outlined-age-native-simple"},children:[Object(o.jsx)("option",{"aria-label":"None",value:""}),t?t.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)})):null]})]}),Object(o.jsxs)(A.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(o.jsx)($.a,{id:"demo-customized-select-label",children:"Marca"}),Object(o.jsxs)(F.a,{required:!0,native:!0,value:d.brand,onChange:m,label:"marca",inputProps:{name:"brand",id:"outlined-age-native-simple"},children:[Object(o.jsx)("option",{"aria-label":"None",value:""}),a?a.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)})):null]})]}),Object(o.jsx)(H,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"form-mis-datos__label",children:"\xbfTu auto es a gas?"}),Object(o.jsx)(A.a,{component:"fieldset",children:Object(o.jsxs)(X.a,{row:!0,"aria-label":"position",name:"isGasVehicle",defaultValue:"top",onChange:m,children:[Object(o.jsx)(z.a,{className:"form-mis-datos__label",value:"female",control:Object(o.jsx)(ee,{value:"true"}),label:"S\xed"}),Object(o.jsx)(z.a,{className:"form-mis-datos__label",value:"female",control:Object(o.jsx)(ee,{value:"false"}),label:"No"})]})})]}),Object(o.jsxs)("div",{className:"form-mis-datos__monto",children:[Object(o.jsx)("p",{className:"form-mis-datos__label",children:"Indica la suma asegurada"}),Object(o.jsxs)("div",{className:"monto__rango",children:[Object(o.jsxs)("span",{className:"monto__rango-min",children:["MIN $",n]}),Object(o.jsxs)("span",{className:"monto__rango-max",children:["MAX $",s]})]}),Object(o.jsxs)("div",{className:"monto__input",children:[Object(o.jsx)("span",{className:"monto__input-action",onClick:function(){var e=d.amount-100;j(Object(O.a)(Object(O.a)({},d),{},{amount:e}))},children:Object(o.jsx)(Q.a,{style:{color:"#6F7DFF"}})}),Object(o.jsx)("input",{className:"monto__input-text",name:"amount",required:!0,type:"text",value:d.amount,onChange:m}),Object(o.jsx)("span",{className:"monto__input-action",onClick:function(){var e=d.amount+100;j(Object(O.a)(Object(O.a)({},d),{},{amount:e}))},children:Object(o.jsx)(W.a,{style:{color:"#6F7DFF"}})})]})]}),Object(o.jsx)("div",{className:"form-button",children:Object(o.jsx)(D.a,{className:r.root,type:"submit",variant:"contained",color:"secondary",size:"large",children:"Continuar"})})]})},ae=(a(137),function(){var e=Object(b.b)();Object(c.useEffect)((function(){a()}),[]);var t,a=function(){var t=Object(m.a)(j.a.mark((function t(){var a,c,n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(m.a)(j.a.mark((function e(t,a){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h,"/vehicleYears"));case 2:return c=e.sent,n=c.data,t({type:g,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:return a=t.sent,c=a.codRes,t.next=6,e(function(){var e=Object(m.a)(j.a.mark((function e(t,a){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h,"/vehicleBrands"));case 2:return c=e.sent,n=c.data,t({type:N,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 6:n=t.sent,s=n.codRes,"00"===c&&"00"===s||console.log("error al obtener datos vehiculares");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(b.c)((function(e){return e.cotizadorRimac})),s=n.datos,r=n.vehicleYearsList,i=n.vehicleBrandsList;console.log("datos-misdatos: ",s),void 0===s.nombre?(console.log("recuperar de local storage"),t=JSON.parse(localStorage.getItem("datos"))):(console.log("recuperar de state"),localStorage.setItem("datos",JSON.stringify(s)),t=s);var l=t,u=l.nombre,d=l.minimumAmount,O=l.maximumAmount;return Object(o.jsxs)("div",{children:[Object(o.jsx)(J,{}),Object(o.jsxs)("div",{className:"mis-datos__title",children:[Object(o.jsxs)("p",{className:"title__name",children:["\xa1Hola, ",Object(o.jsx)("span",{className:"title__name--red",children:u})]}),Object(o.jsx)("p",{className:"title__info",children:"Completa los datos de tu auto"})]}),Object(o.jsx)(te,{vehicleYearsList:r,vehicleBrandsList:i,minimumAmount:d,maximumAmount:O})]})}),ce=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Arma tu plan"})})},ne=function(){return Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",component:V}),Object(o.jsx)(u.a,{exact:!0,path:"/mis-datos",component:ae}),Object(o.jsx)(u.a,{exact:!0,path:"/arma-tu-plan",component:ce})]})},se=a(47),re=a(81),oe=Object(se.b)({cotizadorRimac:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(O.a)(Object(O.a)({},e),{},{datos:t.payload});case g:return Object(O.a)(Object(O.a)({},e),{},{vehicleYearsList:t.payload});case N:return Object(O.a)(Object(O.a)({},e),{},{vehicleBrandsList:t.payload});default:return e}}}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c;a(138);var le=function(){var e=Object(se.d)(oe,ie(Object(se.a)(re.a)));return Object(o.jsx)(b.a,{store:e,children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{}),Object(o.jsx)(ne,{}),Object(o.jsx)(l,{})]})})},ue=a(51);r.a.render(Object(o.jsx)(ue.a,{children:Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(le,{})})}),document.getElementById("root"))},98:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.4be2ee14.chunk.js.map
(this["webpackJsonpcotizador-rimac"]=this["webpackJsonpcotizador-rimac"]||[]).push([[0],{100:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(11),s=a.n(r),o=(a(98),a.p+"static/media/logo-rimac.95e747eb.svg"),i=a(2),l=function(){return Object(i.jsxs)("div",{className:"toolbar",children:[Object(i.jsx)("div",{className:"toolbar__logo",children:Object(i.jsx)("img",{src:o,alt:"logo"})}),Object(i.jsxs)("div",{className:"toolbar__option",children:[Object(i.jsx)("img",{className:"option__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBlZTBUcJQEIb/DY6AXrAD7AAqMHSAFehBIPEiVKB0kJMywRmgA6wAO5ASKCEnlBlh3WUIvoxJfNmZJO9tNt/s/tl9gGGex7ddjx9R0ChedH2eyuZG17zFIAwpKATp3XMAxkPsZCA6K+MyCCiygThSQt0EHMi19VfSlwvZERpIz7EPWwgzaqkMwgq2kBL+Bosm8+opWrA0p1LBUoVMQL4xtBV1D9FgEXKagJTSS8yE6I0Yb6azRCjUcHvIaETv8jemht+989iFpTnxQoQcmNpINpN+n63KOkIOQg6Nd/X1BhMLxu/sxNbzeSEPN94zYRg+05OupbtdaU7t5Fn4QvNMiJbwucGHZmK4VxIZSQMdu3vLaL2qlmkQtU6HG3SChc4QMkz1k35qjce0pKwgPVuklP80WVXLaFJehJwxbXlM8jISyIWTB1HxHEYT6fMVyXV96Hg7832+2gFt+bq2YyzPq5jF8/UDwPt5ax06uLwAAAAASUVORK5CYII=",alt:"telefono"}),Object(i.jsx)("span",{className:"option__text",children:"Ll\xe1manos"})]})]})},u=(a(100),function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("p",{children:"\xa9 2020 RIMAC Seguros y Reaseguros."})})}),d=a(14),j=a(21),m=a.n(j),b=a(33),O=a(34),p=a(9),x=a(56),h=a.n(x),v="http://my-json-server.typicode.com/l4ner0/api-cotizador",f=function(e){return h.a.get("".concat(v,"/quoteInsurance"),e)},g={documentList:[{id:1,name:"DNI"},{id:2,name:"CE"},{id:3,name:"RUC"}],datos:{},vehicleYearsList:[],vehicleBrandsList:[]},_="SET_DATOS",N="SET_VEHICLE_YEARS_LIST",A="SET_VEHICLE_BRANDS_LIST";var y=function(e){return function(){var t=Object(b.a)(m.a.mark((function t(a,c){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:return n=t.sent,r=n.data,a({type:_,payload:Object(p.a)(Object(p.a)({},r.response),e)}),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},C=a.p+"static/media/client-banner.82e20536.svg",S=(a(125),function(){return Object(i.jsxs)("div",{className:"hero",children:[Object(i.jsxs)("div",{className:"hero__text",children:[Object(i.jsx)("p",{className:"text_header",children:"\xa1Nuevo!"}),Object(i.jsxs)("p",{className:"text__content",children:["Seguro Vehicular ",Object(i.jsx)("span",{className:"text__content--red",children:"Tracking"})]}),Object(i.jsx)("p",{className:"text__footer",children:"Cuentanos donde le haras seguimiento a tu seguro"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"hero__img",src:C,alt:"cliente-banner"})})]})}),w=a(19),E=a(18),k=a(174),I=a(5),L=a(187),B=a(178),z=a(184),R=a(57),F=a(141),T=a(189),M=a(186),V=a(181),q=(a(126),Object(k.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"},textField:{marginTop:"10px",marginBottom:"10px",width:"100%"},label:{color:"#676F8F",fontSize:"10px"},formControl:{minWidth:"96px"}}}))),P=Object(I.a)({root:{color:R.a[400],"&$checked":{color:R.a[600]}},checked:{}})((function(e){return Object(i.jsx)(M.a,Object(p.a)({color:"default"},e))})),U=function(e){var t=e.documentList,a=e.submitCotizalo,n=q(),r={term:!1,documentType:1,documento:"",celular:"",placa:""},s=Object(c.useState)(Object(p.a)({},r)),o=Object(E.a)(s,2),l=o[0],u=o[1],d=function(e){u(Object(p.a)(Object(p.a)({},l),{},Object(w.a)({},e.target.name,e.target.checked)))},j=function(e){u(Object(p.a)(Object(p.a)({},l),{},Object(w.a)({},e.target.name,e.target.value.toUpperCase())))};return Object(i.jsxs)("form",{onSubmit:function(e){a(l),u(Object(p.a)({},r)),e.preventDefault()},children:[Object(i.jsxs)("div",{className:"form-documento",children:[Object(i.jsx)(B.a,{variant:"outlined",className:n.formControl,children:Object(i.jsx)(z.a,{required:!0,native:!0,value:l.documentType,onChange:d,inputProps:{name:"documentType",id:"outlined-age-native-simple"},className:"form-documento__select",children:t.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(i.jsx)(L.a,{required:!0,label:"Nro. de doc",className:"form-documento__text",variant:"outlined",name:"documento",value:l.documento,onChange:j})]}),Object(i.jsx)(L.a,{required:!0,label:"Celular",className:n.textField,variant:"outlined",name:"celular",value:l.celular,onChange:j}),Object(i.jsx)(L.a,{required:!0,label:"Placa",className:n.textField,variant:"outlined",name:"placa",value:l.placa,onChange:j}),Object(i.jsx)(F.a,{row:!0,className:"form-check",children:Object(i.jsx)(T.a,{className:n.label,control:Object(i.jsx)(P,{checked:l.term,onChange:d,name:"term",required:!0}),label:"Acepto la Pol\xedtica de Protecci\xf3n de Datos Personales y los T\xe9rminos y Condiciones",name:"terms"})}),Object(i.jsx)("div",{className:"form-button",children:Object(i.jsx)(V.a,{type:"submit",className:n.root,variant:"contained",color:"secondary",size:"large",children:"Cot\xedzalo"})})]})},D=(a(128),function(){localStorage.clear();var e=Object(d.f)(),t=Object(O.c)((function(e){return e.cotizadorRimac})),a=t.documentList,c=(t.datos,Object(O.b)()),n=function(){var t=Object(b.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(y(a));case 2:n=t.sent,"00"===n.codRes&&e.push("/cotizador-rimac/mis-datos");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsx)(S,{}),Object(i.jsx)("p",{className:"form-container form-titulo",children:"D\xe9janos tus datos"}),Object(i.jsx)("div",{className:"form-container",children:Object(i.jsx)(U,{documentList:a,submitCotizalo:n})})]})}),Y=a(182),H=a.p+"static/media/ellipse.4ad9fc36.svg",J=(a(133),Object(I.a)((function(e){return{root:{height:"6px",borderRadius:"20px",minWidth:"100px"},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:"20px",backgroundColor:"#6F7DFF"}}}))(Y.a)),Q=function(){return Object(i.jsxs)("div",{className:"breadcrumbs",children:[Object(i.jsx)("div",{className:"breadcrumbs__previous",children:Object(i.jsx)("img",{src:H,alt:"atras"})}),Object(i.jsx)("div",{className:"breadcrumbs__text",children:"Paso 1 de 2"}),Object(i.jsx)("div",{className:"breadcrumbs__progress",children:Object(i.jsx)(J,{variant:"determinate",value:50})})]})},X=a(188),K=a.p+"static/media/car.e12126f8.svg",G=(a(134),function(){return Object(i.jsxs)("div",{className:"help-marca",children:[Object(i.jsx)("div",{className:"help-marca__img",children:Object(i.jsx)("img",{src:K,alt:"cart"})}),Object(i.jsxs)("div",{className:"help-marca__text",children:[Object(i.jsx)("p",{children:"\xbfNo encuentras el modelo?"}),Object(i.jsx)("a",{href:"#",children:"Clic Aqu\xed"})]})]})}),W=a(185),Z=a(183),$=a(80),ee=a.n($),te=a(79),ae=a.n(te),ce=(a(135),Object(k.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"}}}))),ne=Object(I.a)({root:{color:"#C5CBE0","&$checked":{color:R.a[600]}},checked:{}})((function(e){return Object(i.jsx)(W.a,Object(p.a)({required:!0,color:"default"},e))})),re=function(e){var t=e.vehicleYearsList,a=e.vehicleBrandsList,n=e.minimumAmount,r=e.maximumAmount,s=ce(),o={year:"",brand:"",amount:r,isGasVehicle:null},l=Object(c.useState)(Object(p.a)({},o)),u=Object(E.a)(l,2),d=u[0],j=u[1],m=function(e){j(Object(p.a)(Object(p.a)({},d),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("form",{onSubmit:function(e){console.log("continueButton: ",d),e.preventDefault()},className:"form-mis-datos",children:[Object(i.jsxs)(B.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(i.jsx)(X.a,{id:"demo-customized-select-label",children:"A\xf1o"}),Object(i.jsxs)(z.a,{required:!0,native:!0,value:d.year,onChange:m,label:"A\xf1o",inputProps:{name:"year",id:"outlined-age-native-simple"},children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),t?t.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)})):null]})]}),Object(i.jsxs)(B.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(i.jsx)(X.a,{id:"demo-customized-select-label",children:"Marca"}),Object(i.jsxs)(z.a,{required:!0,native:!0,value:d.brand,onChange:m,label:"marca",inputProps:{name:"brand",id:"outlined-age-native-simple"},children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),a?a.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.id)})):null]})]}),Object(i.jsx)(G,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"form-mis-datos__label",children:"\xbfTu auto es a gas?"}),Object(i.jsx)(B.a,{component:"fieldset",children:Object(i.jsxs)(Z.a,{row:!0,"aria-label":"position",name:"isGasVehicle",defaultValue:"top",onChange:m,children:[Object(i.jsx)(T.a,{className:"form-mis-datos__label",value:"female",control:Object(i.jsx)(ne,{value:"true"}),label:"S\xed"}),Object(i.jsx)(T.a,{className:"form-mis-datos__label",value:"female",control:Object(i.jsx)(ne,{value:"false"}),label:"No"})]})})]}),Object(i.jsxs)("div",{className:"form-mis-datos__monto",children:[Object(i.jsx)("p",{className:"form-mis-datos__label",children:"Indica la suma asegurada"}),Object(i.jsxs)("div",{className:"monto__rango",children:[Object(i.jsxs)("span",{className:"monto__rango-min",children:["MIN $",n]}),Object(i.jsxs)("span",{className:"monto__rango-max",children:["MAX $",r]})]}),Object(i.jsxs)("div",{className:"monto__input",children:[Object(i.jsx)("span",{className:"monto__input-action",onClick:function(){var e=d.amount-100;j(Object(p.a)(Object(p.a)({},d),{},{amount:e}))},children:Object(i.jsx)(ae.a,{style:{color:"#6F7DFF"}})}),Object(i.jsx)("input",{className:"monto__input-text",name:"amount",required:!0,type:"text",value:d.amount,onChange:m}),Object(i.jsx)("span",{className:"monto__input-action",onClick:function(){var e=d.amount+100;j(Object(p.a)(Object(p.a)({},d),{},{amount:e}))},children:Object(i.jsx)(ee.a,{style:{color:"#6F7DFF"}})})]})]}),Object(i.jsx)("div",{className:"form-button",children:Object(i.jsx)(V.a,{className:s.root,type:"submit",variant:"contained",color:"secondary",size:"large",children:"Continuar"})})]})},se=(a(137),function(){var e=Object(O.b)();Object(c.useEffect)((function(){a()}),[]);var t,a=function(){var t=Object(b.a)(m.a.mark((function t(){var a,c,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(b.a)(m.a.mark((function e(t,a){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/vehicleYears"));case 2:return c=e.sent,n=c.data,t({type:N,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:return a=t.sent,c=a.codRes,t.next=6,e(function(){var e=Object(b.a)(m.a.mark((function e(t,a){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/vehicleBrands"));case 2:return c=e.sent,n=c.data,t({type:A,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 6:n=t.sent,r=n.codRes,"00"===c&&"00"===r||console.log("error al obtener datos vehiculares");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(O.c)((function(e){return e.cotizadorRimac})),r=n.datos,s=n.vehicleYearsList,o=n.vehicleBrandsList;console.log("datos-misdatos: ",r),void 0===r.nombre?(console.log("recuperar de local storage"),t=JSON.parse(localStorage.getItem("datos"))):(console.log("recuperar de state"),localStorage.setItem("datos",JSON.stringify(r)),t=r);var l=t,u=l.nombre,d=l.minimumAmount,j=l.maximumAmount;return Object(i.jsxs)("div",{children:[Object(i.jsx)(Q,{}),Object(i.jsxs)("div",{className:"mis-datos__title",children:[Object(i.jsxs)("p",{className:"title__name",children:["\xa1Hola, ",Object(i.jsx)("span",{className:"title__name--red",children:u})]}),Object(i.jsx)("p",{className:"title__info",children:"Completa los datos de tu auto"})]}),Object(i.jsx)(re,{vehicleYearsList:s,vehicleBrandsList:o,minimumAmount:d,maximumAmount:j})]})}),oe=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Arma tu plan"})})},ie=function(){return Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/cotizador-rimac/",component:D}),Object(i.jsx)(d.a,{exact:!0,path:"/cotizador-rimac/mis-datos",component:se}),Object(i.jsx)(d.a,{exact:!0,path:"/cotizador-rimac/arma-tu-plan",component:oe})]})},le=a(47),ue=a(81),de=Object(le.b)({cotizadorRimac:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{datos:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{vehicleYearsList:t.payload});case A:return Object(p.a)(Object(p.a)({},e),{},{vehicleBrandsList:t.payload});default:return e}}}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.c;a(138);var me=function(){var e=Object(le.d)(de,je(Object(le.a)(ue.a)));return Object(i.jsx)(O.a,{store:e,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)(ie,{}),Object(i.jsx)(u,{})]})})},be=a(51);s.a.render(Object(i.jsx)(be.a,{children:Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(me,{})})}),document.getElementById("root"))},98:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.fdf98d72.chunk.js.map
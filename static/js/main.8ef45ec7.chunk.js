(this["webpackJsonpcotizador-rimac"]=this["webpackJsonpcotizador-rimac"]||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(13),r=a.n(s),i=(a(115),a(2)),o=function(){return Object(i.jsxs)("div",{className:"toolbar",children:[Object(i.jsx)("div",{className:"toolbar__logo",children:Object(i.jsx)("img",{width:"92",height:"16",src:"https://i.postimg.cc/1V668vB5/logo-rimac.png",alt:"logo"})}),Object(i.jsxs)("div",{className:"toolbar__option",children:[Object(i.jsx)("img",{className:"option__img",width:"15",src:"https://i.postimg.cc/Bt127v39/ic-phone.png",alt:"telefono"}),Object(i.jsx)("span",{className:"option__text",children:"Ll\xe1manos"})]})]})},l=(a(117),function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("p",{children:"\xa9 2020 RIMAC Seguros y Reaseguros."})})}),d=a(15),j=a(22),b=a.n(j),u=a(38),m=a(39),p=a(9),h=a(66),x=a.n(h),O="https://my-json-server.typicode.com/l4ner0/api-cotizador",v=function(e){return x.a.get("".concat(O,"/quoteInsurance"),e)},f={documentList:[{id:1,name:"DNI"},{id:2,name:"CE"},{id:3,name:"RUC"}],datos:{},vehicleYearsList:[],vehicleBrandsList:[]},g="SET_DATOS",_="SET_VEHICLE_YEARS_LIST",N="SET_VEHICLE_BRANDS_LIST";var C=function(e){return function(){var t=Object(u.a)(b.a.mark((function t(a,c){var n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return n=t.sent,s=n.data,a({type:g,payload:Object(p.a)(Object(p.a)({},s.response),e)}),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},k=(a(142),function(){return Object(i.jsxs)("div",{className:"hero",children:[Object(i.jsxs)("div",{className:"hero__text",children:[Object(i.jsx)("p",{className:"text_header",children:"\xa1Nuevo!"}),Object(i.jsxs)("p",{className:"text__content",children:["Seguro Vehicular ",Object(i.jsx)("span",{className:"text__content--red",children:"Tracking"})]}),Object(i.jsx)("p",{className:"text__footer",children:"Cuentanos donde le haras seguimiento a tu seguro"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"hero__img",src:"https://i.postimg.cc/R62KCkcD/client-banner.png",alt:"cliente-banner"})})]})}),y=a(10),w=a(16),S=a(190),L=a(5),E=a(210),B=a(193),q=a(204),z=a(67),T=a(160),A=a(212),F=a(208),R=a(197),V=(a(143),Object(S.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"},textField:{marginTop:"10px",marginBottom:"10px",width:"100%"},label:{color:"#676F8F",fontSize:"10px"},formControl:{minWidth:"96px"}}}))),D=Object(L.a)({root:{color:z.a[400],"&$checked":{color:z.a[600]}},checked:{}})((function(e){return Object(i.jsx)(F.a,Object(p.a)({color:"default"},e))})),P=function(e){var t=e.documentList,a=e.submitCotizalo,n=V(),s={term:!1,documentType:1,documento:"",celular:"",placa:""},r=Object(c.useState)(Object(p.a)({},s)),o=Object(w.a)(r,2),l=o[0],d=o[1],j=function(e){d(Object(p.a)(Object(p.a)({},l),{},Object(y.a)({},e.target.name,e.target.checked)))},b=function(e){d(Object(p.a)(Object(p.a)({},l),{},Object(y.a)({},e.target.name,e.target.value.toUpperCase())))};return Object(i.jsxs)("form",{onSubmit:function(e){a(l),d(Object(p.a)({},s)),e.preventDefault()},children:[Object(i.jsxs)("div",{className:"form-documento",children:[Object(i.jsx)(B.a,{variant:"outlined",className:n.formControl,children:Object(i.jsx)(q.a,{required:!0,native:!0,value:l.documentType,onChange:j,inputProps:{name:"documentType",id:"outlined-age-native-simple"},className:"form-documento__select",children:t.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(i.jsx)(E.a,{required:!0,label:"Nro. de doc",className:"form-documento__text",variant:"outlined",name:"documento",value:l.documento,onChange:b})]}),Object(i.jsx)(E.a,{required:!0,label:"Celular",className:n.textField,variant:"outlined",name:"celular",value:l.celular,onChange:b}),Object(i.jsx)(E.a,{required:!0,label:"Placa",className:n.textField,variant:"outlined",name:"placa",value:l.placa,onChange:b}),Object(i.jsx)(T.a,{row:!0,className:"form-check",children:Object(i.jsx)(A.a,{className:n.label,control:Object(i.jsx)(D,{checked:l.term,onChange:j,name:"term",required:!0}),label:"Acepto la Pol\xedtica de Protecci\xf3n de Datos Personales y los T\xe9rminos y Condiciones",name:"terms"})}),Object(i.jsx)("div",{className:"form-button",children:Object(i.jsx)(R.a,{type:"submit",className:n.root,variant:"contained",color:"secondary",size:"large",children:"Cot\xedzalo"})})]})},I=(a(145),function(){localStorage.clear();var e=Object(d.f)(),t=Object(m.c)((function(e){return e.cotizadorRimac})),a=t.documentList,c=(t.datos,Object(m.b)()),n=function(){var t=Object(u.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(C(a));case 2:n=t.sent,"00"===n.codRes&&e.push(xe);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsx)(k,{}),Object(i.jsx)("p",{className:"form-container form-titulo",children:"D\xe9janos tus datos"}),Object(i.jsx)("div",{className:"form-container",children:Object(i.jsx)(P,{documentList:a,submitCotizalo:n})})]})}),M=a(198),$=(a(150),Object(L.a)((function(e){return{root:{height:"6px",borderRadius:"20px",minWidth:"100px"},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:"20px",backgroundColor:"#6F7DFF"}}}))(M.a)),Y=function(e){var t=e.step,a=e.stepTotal,c=e.value;return Object(i.jsxs)("div",{className:"breadcrumbs",children:[Object(i.jsx)("div",{className:"breadcrumbs__previous",children:Object(i.jsx)("img",{width:"24",src:"https://i.postimg.cc/ZBW6SbyN/ellipse.png",alt:"atras"})}),Object(i.jsxs)("div",{className:"breadcrumbs__text",children:["Paso ",t," de ",a]}),Object(i.jsx)("div",{className:"breadcrumbs__progress",children:Object(i.jsx)($,{variant:"determinate",value:c})})]})},X=a(211),G=(a(151),function(){return Object(i.jsxs)("div",{className:"help-marca",children:[Object(i.jsx)("div",{className:"help-marca__img",children:Object(i.jsx)("img",{src:"https://i.postimg.cc/nLnn0wK0/car.png",alt:"cart"})}),Object(i.jsxs)("div",{className:"help-marca__text",children:[Object(i.jsx)("p",{children:"\xbfNo encuentras el modelo?"}),Object(i.jsx)("a",{href:"#",children:"Clic Aqu\xed"})]})]})}),H=a(207),J=a(199),K=a(94),U=a.n(K),W=a(93),Z=a.n(W),Q=(a(152),Object(S.a)((function(e){return{root:{width:"296px",height:"56px",borderRadius:"8px",backgroundColor:"#EF3340"}}}))),ee=Object(L.a)({root:{color:"#C5CBE0","&$checked":{color:z.a[600]}},checked:{}})((function(e){return Object(i.jsx)(H.a,Object(p.a)({required:!0,color:"default"},e))})),te=function(e){var t=e.vehicleYearsList,a=e.vehicleBrandsList,n=e.minimumAmount,s=e.maximumAmount,r=Q(),o={year:"",brand:"",amount:s,isGasVehicle:null},l=Object(c.useState)(Object(p.a)({},o)),d=Object(w.a)(l,2),j=d[0],b=d[1],u=function(e){b(Object(p.a)(Object(p.a)({},j),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("form",{onSubmit:function(e){console.log("continueButton: ",j),e.preventDefault()},className:"form-mis-datos",children:[Object(i.jsxs)(B.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(i.jsx)(X.a,{id:"demo-customized-select-label",children:"A\xf1o"}),Object(i.jsxs)(q.a,{required:!0,native:!0,value:j.year,onChange:u,label:"A\xf1o",inputProps:{name:"year",id:"outlined-age-native-simple"},children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),t?t.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)})):null]})]}),Object(i.jsxs)(B.a,{variant:"outlined",className:"form-mis-datos__input",children:[Object(i.jsx)(X.a,{id:"demo-customized-select-label",children:"Marca"}),Object(i.jsxs)(q.a,{required:!0,native:!0,value:j.brand,onChange:u,label:"marca",inputProps:{name:"brand",id:"outlined-age-native-simple"},children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),a?a.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.id)})):null]})]}),Object(i.jsx)(G,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"form-mis-datos__label",children:"\xbfTu auto es a gas?"}),Object(i.jsx)(B.a,{component:"fieldset",children:Object(i.jsxs)(J.a,{row:!0,"aria-label":"position",name:"isGasVehicle",defaultValue:"top",onChange:u,children:[Object(i.jsx)(A.a,{className:"form-mis-datos__label",value:"female",control:Object(i.jsx)(ee,{value:"true"}),label:"S\xed"}),Object(i.jsx)(A.a,{className:"form-mis-datos__label",value:"female",control:Object(i.jsx)(ee,{value:"false"}),label:"No"})]})})]}),Object(i.jsxs)("div",{className:"form-mis-datos__monto",children:[Object(i.jsx)("p",{className:"form-mis-datos__label",children:"Indica la suma asegurada"}),Object(i.jsxs)("div",{className:"monto__rango",children:[Object(i.jsxs)("span",{className:"monto__rango-min",children:["MIN $",n]}),Object(i.jsxs)("span",{className:"monto__rango-max",children:["MAX $",s]})]}),Object(i.jsxs)("div",{className:"monto__input",children:[Object(i.jsx)("span",{className:"monto__input-action",onClick:function(){var e=j.amount-100;b(Object(p.a)(Object(p.a)({},j),{},{amount:e}))},children:Object(i.jsx)(Z.a,{style:{color:"#6F7DFF"}})}),Object(i.jsx)("input",{className:"monto__input-text",name:"amount",required:!0,type:"text",value:j.amount,onChange:u}),Object(i.jsx)("span",{className:"monto__input-action",onClick:function(){var e=j.amount+100;b(Object(p.a)(Object(p.a)({},j),{},{amount:e}))},children:Object(i.jsx)(U.a,{style:{color:"#6F7DFF"}})})]})]}),Object(i.jsx)("div",{className:"form-button",children:Object(i.jsx)(R.a,{className:r.root,type:"submit",variant:"contained",color:"secondary",size:"large",children:"Continuar"})})]})},ae=(a(154),function(){var e=Object(m.b)();Object(c.useEffect)((function(){a()}),[]);var t,a=function(){var t=Object(u.a)(b.a.mark((function t(){var a,c,n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(u.a)(b.a.mark((function e(t,a){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O,"/vehicleYears"));case 2:return c=e.sent,n=c.data,t({type:_,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:return a=t.sent,c=a.codRes,t.next=6,e(function(){var e=Object(u.a)(b.a.mark((function e(t,a){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O,"/vehicleBrands"));case 2:return c=e.sent,n=c.data,t({type:N,payload:n.response}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 6:n=t.sent,s=n.codRes,"00"===c&&"00"===s||console.log("error al obtener datos vehiculares");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(m.c)((function(e){return e.cotizadorRimac})),s=n.datos,r=n.vehicleYearsList,o=n.vehicleBrandsList;console.log("datos-misdatos: ",s),void 0===s.nombre?(console.log("recuperar de local storage"),t=JSON.parse(localStorage.getItem("datos"))):(console.log("recuperar de state"),localStorage.setItem("datos",JSON.stringify(s)),t=s);var l=t,d=l.nombre,j=l.minimumAmount,p=l.maximumAmount;return Object(i.jsxs)("div",{children:[Object(i.jsx)(Y,{step:"1",stepTotal:"2",value:50}),Object(i.jsxs)("div",{className:"mis-datos__title",children:[Object(i.jsxs)("p",{className:"title__name",children:["\xa1Hola, ",Object(i.jsx)("span",{className:"title__name--red",children:d})]}),Object(i.jsx)("p",{className:"title__info",children:"Completa los datos de tu auto"})]}),Object(i.jsx)(te,{vehicleYearsList:r,vehicleBrandsList:o,minimumAmount:j,maximumAmount:p})]})}),ce=(a(155),function(){return Object(i.jsxs)("div",{className:"hero-plan",children:[Object(i.jsx)("p",{className:"hero-plan__title",children:"Mira las coberturas"}),Object(i.jsx)("p",{className:"hero-plan__subtitle",children:"Conoce las coberturas para tu plan"}),Object(i.jsxs)("div",{className:"hero-plan__box-plan",children:[Object(i.jsxs)("div",{className:"box-plan__info",children:[Object(i.jsx)("p",{className:"box-plan__info-placa",children:"Placa: C2U-114"}),Object(i.jsx)("p",{className:"box-plan__info-brand",children:"Wolskwagen 2019"}),Object(i.jsx)("div",{className:"box-plan__info-edit",children:Object(i.jsx)("a",{className:"box-plan__info-edit-button",children:"Editar"})})]}),Object(i.jsx)("div",{className:"box-plan__img",children:Object(i.jsx)("img",{className:"img-avatar",src:"https://i.postimg.cc/nrQtpTsD/avatar.png",alt:"avatar"})})]})]})}),ne=a(3),se=a(200),re=a(205),ie=a(206),oe=a(201),le=a(209),de=a(202),je=a(203),be=(a(156),Object(L.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(ne.a)(e,["classes"]);return Object(i.jsx)(se.a,Object(p.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))}))),ue=Object(S.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},wrapper:{fontSize:"10px"}}}));function me(e){var t=e.children,a=e.value,c=e.index,n=Object(ne.a)(e,["children","value","index"]);return Object(i.jsx)("div",Object(p.a)(Object(p.a)({role:"tabpanel",hidden:a!==c,id:"nav-tabpanel-".concat(c),"aria-labelledby":"nav-tab-".concat(c)},n),{},{children:a===c&&Object(i.jsx)(re.a,{p:3,children:Object(i.jsx)("div",{children:t})})}))}var pe=function(){var e=ue(),t=Object(c.useState)({tab:0,checkedA:!1,checkedB:!1,checkedC:!1,checkedD:!1,checkedE:!1,checkedF:!1}),a=Object(w.a)(t,2),n=a[0],s=a[1],r=function(e){s(Object(p.a)(Object(p.a)({},n),{},Object(y.a)({},e.target.name,e.target.checked)))},o=Object(c.useState)("panel1"),l=Object(w.a)(o,2),d=l[0],j=l[1],b=function(e){return function(t,a){j(!!a&&e)}};return Object(i.jsxs)("div",{className:"form-cobertura",children:[Object(i.jsx)("p",{className:"form-cobertura__title",children:"Agregar o quita coberturas "}),Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsxs)(ie.a,{value:n.tab,indicatorColor:"secondary",textColor:"secondary",onChange:function(e,t){s({tab:t})},"aria-label":"disabled tabs example",variant:"scrollable",children:[Object(i.jsx)(oe.a,{name:"tab",className:e.wrapper,label:"Protege a tu auto"}),Object(i.jsx)(oe.a,{name:"tab",className:e.wrapper,label:"Protege a los que te rodean"}),Object(i.jsx)(oe.a,{name:"tab",className:e.wrapper,label:"Mejora tu plan"})]}),Object(i.jsxs)(me,{value:n.tab,index:0,children:[Object(i.jsxs)("div",{className:"tab-cobertura",children:[Object(i.jsx)("div",{className:"tab-cobertura__img",children:Object(i.jsx)("img",{src:"https://i.postimg.cc/XNkCnKCT/icon-theft.png",width:"40",alt:"icon-theft"})}),Object(i.jsx)("div",{className:"tab-cobertura_content",children:Object(i.jsxs)(le.a,{expanded:"panel1"===d,onChange:b("panel1"),children:[Object(i.jsxs)("div",{className:"tab-cobertura_content-title",children:[Object(i.jsx)("div",{children:Object(i.jsx)(de.a,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Llanta robada"}),Object(i.jsx)("p",{className:"tab-cobertura_content-title--small",children:"Ver m\xe1s"})]})})}),Object(i.jsx)("div",{children:Object(i.jsx)(be,{checked:n.checkedA,onChange:r,name:"checkedA"})})]}),Object(i.jsx)(je.a,{children:Object(i.jsx)("p",{className:"tab-cobertura_content-text",children:"He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que est\xe1 en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pit\xf3n a un sitio de esos de poner las bicis"})})]})})]}),Object(i.jsxs)("div",{className:"tab-cobertura",children:[Object(i.jsx)("div",{className:"tab-cobertura__img",children:Object(i.jsx)("img",{src:"https://i.postimg.cc/kDXmFPMP/icon-damage.png",width:"40",alt:"icon-theft"})}),Object(i.jsx)("div",{className:"tab-cobertura_content",children:Object(i.jsxs)(le.a,{expanded:"panel2"===d,onChange:b("panel2"),children:[Object(i.jsxs)("div",{className:"tab-cobertura_content-title",children:[Object(i.jsx)("div",{children:Object(i.jsx)(de.a,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Llanta robada"}),Object(i.jsx)("p",{className:"tab-cobertura_content-title--small",children:"Ver m\xe1s"})]})})}),Object(i.jsx)("div",{children:Object(i.jsx)(be,{checked:n.checkedB,onChange:r,name:"checkedB"})})]}),Object(i.jsx)(je.a,{children:Object(i.jsx)("p",{className:"tab-cobertura_content-text",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa at aut inventore dignissimos suscipit vero enim, iusto tempora nisi velit eaque ex placeat ea omnis, necessitatibus dolorum quibusdam. Fugit, eius!"})})]})})]}),Object(i.jsxs)("div",{className:"tab-cobertura",children:[Object(i.jsx)("div",{className:"tab-cobertura__img",children:Object(i.jsx)("img",{src:"https://i.postimg.cc/V5GcKZ5r/icon-perdidatotal.png",width:"40",alt:"icon-theft"})}),Object(i.jsx)("div",{className:"tab-cobertura_content",children:Object(i.jsxs)(le.a,{expanded:"panel3"===d,onChange:b("panel3"),children:[Object(i.jsxs)("div",{className:"tab-cobertura_content-title",children:[Object(i.jsx)("div",{children:Object(i.jsx)(de.a,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Llanta robada"}),Object(i.jsx)("p",{className:"tab-cobertura_content-title--small",children:"Ver m\xe1s"})]})})}),Object(i.jsx)("div",{children:Object(i.jsx)(be,{checked:n.checkedC,onChange:r,name:"checkedC"})})]}),Object(i.jsx)(je.a,{children:Object(i.jsx)("p",{className:"tab-cobertura_content-text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad repudiandae rerum officia fugiat. Veniam, debitis rem harum, quidem doloremque consectetur aliquam in mollitia laborum enim, excepturi explicabo accusantium dignissimos?"})})]})})]})]}),Object(i.jsx)(me,{value:n.tab,index:1}),Object(i.jsx)(me,{value:n.tab,index:2})]}),Object(i.jsxs)("div",{className:"form-cobertura__footer",children:[Object(i.jsxs)("div",{className:"footer__monto",children:[Object(i.jsx)("p",{className:"footer__monto--primary",children:"$35.00"}),Object(i.jsx)("span",{className:"footer__monto--secondary",children:"Mensual"})]}),Object(i.jsx)("div",{children:Object(i.jsx)(R.a,{variant:"contained",color:"secondary",size:"large",children:"Lo quiero"})})]})]})},he=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(Y,{step:"2",stepTotal:"2",value:100}),Object(i.jsx)(ce,{}),Object(i.jsx)(pe,{})]})},xe="/cotizador-rimac/mis-datos",Oe=function(){return Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/cotizador-rimac",component:I}),Object(i.jsx)(d.a,{exact:!0,path:xe,component:ae}),Object(i.jsx)(d.a,{exact:!0,path:"/cotizador-rimac/arma-tu-plan",component:he})]})},ve=a(53),fe=a(95),ge=Object(ve.b)({cotizadorRimac:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(p.a)(Object(p.a)({},e),{},{datos:t.payload});case _:return Object(p.a)(Object(p.a)({},e),{},{vehicleYearsList:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{vehicleBrandsList:t.payload});default:return e}}}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c;a(157);var Ne=function(){var e=Object(ve.d)(ge,_e(Object(ve.a)(fe.a)));return Object(i.jsx)(m.a,{store:e,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)(Oe,{}),Object(i.jsx)(l,{})]})})},Ce=a(57);r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(Ce.a,{children:Object(i.jsx)(Ne,{})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.8ef45ec7.chunk.js.map
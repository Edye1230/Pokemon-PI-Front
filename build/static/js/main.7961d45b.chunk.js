(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n.n(c),r=n(16),s=n.n(r),o=n(5),l=n(19),d=n.n(l),j=n(4),b=n(2),u=n.p+"static/media/mew.4c77acdd.png",p=(n(66),n(0)),O=function(){return Object(p.jsxs)("div",{className:"landing",children:[Object(p.jsxs)("div",{className:"landing-face",children:[Object(p.jsx)("div",{className:"landing-left",children:Object(p.jsxs)("div",{className:"landing-left-content",children:[Object(p.jsx)("h1",{children:"Pokedex App"}),Object(p.jsx)("h5",{children:"Explora +500 Pokemons, crea los tuyos, filtra y ordena por tipo, ataque y m\xe1s en un solo sitio."}),Object(p.jsx)(j.b,{id:"landing-btn",to:"home",children:"Explorar"}),Object(p.jsx)(j.b,{id:"landing-btn",to:"addpokemon",children:"Crea el tuyo"})]})}),Object(p.jsx)("div",{className:"landing-rigth",children:Object(p.jsx)("img",{src:u,alt:"mew",width:"350px"})})]}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("div",{id:"info-content",children:[" ",Object(p.jsx)("p",{children:"React"})," "]}),Object(p.jsxs)("div",{id:"info-content",children:[" ",Object(p.jsx)("p",{children:"Redux"})," "]}),Object(p.jsxs)("div",{id:"info-content",children:[" ",Object(p.jsx)("p",{children:"Postgres"})," "]})]})]})},h=n(10),m=n(3),x=n(21),g=n(33),f=n(19).default,_="GET_TYPES",v="GET_HOME_POKEMONS",k="GET_SEARCH_POKEMONS",y="FILTER_BY",T="ORDER_BY",E="GET_POKEMON_BY_ID",S="REMOVE_POKEMON_BY_ID",P="CLEAR_FILTERS",A="POST_POKEMON",C="PREV_PAGE",R="NEXT_PAGE",N="ACTUAL_PAGE",w=function(){return function(e){return f.get("/types").then((function(t){e({type:_,payload:t.data})}))}},D=function(e){return{type:N,payload:e}},H={pokemonss:[],filtered:[],unfiltered:[],clear_filters:[],new_pokemon:[]},I=(n(31),n.p+"static/media/pikachu.525b5cce.gif"),q=function(){var e,t,n=Object(o.c)((function(e){return e.getHomePokemons})),a=Object(o.c)((function(e){return e.getHomePokemons.pokemonss})),c=Object(o.c)((function(e){return e.pagination})),i=Object(o.b)();e=a.map((function(e){return Object(p.jsxs)("div",{id:"item",children:[Object(p.jsx)("p",{children:e.name}),Object(p.jsx)("div",{id:"container_item_img",children:Object(p.jsx)("div",{id:"item_img",children:Object(p.jsx)(j.b,{to:"../pokemondetail/".concat(e.id),children:Object(p.jsx)("img",{src:e.img_url,alt:"Sin imagen",width:"125px"})})})}),Object(p.jsx)("div",{id:"item_details",children:e.types.map((function(e){return Object(p.jsx)("span",{id:"span_types",children:e},e)}))})]},e.id)})),e[0]&&(t=Math.ceil(e.length/12));for(var r,s=[],l=function(){e[0]&&c<e.length-12&&i({type:R})},d=function(e){s.push(Object(p.jsxs)("button",{id:"landing-btn",onClick:function(){i(D(12*e))},children:[" ",e+1," "]},e+1))},b=0;b<t;b++)d(b);var u=!1;return 0===n.clear_filters.length&&(r="Cargando..."),0===n.pokemonss.length&&n.clear_filters.length>0&&(r="Sin resultados"),e.length-c<12&&(u=!0),e[0]?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{id:"buttons-container",children:Object(p.jsx)("div",{id:"paginas",children:s.length>1&&s})}),Object(p.jsx)("div",{className:"container",children:e.slice(c,c+12)}),Object(p.jsx)("div",{id:"buttons-container",children:Object(p.jsxs)("div",{id:"sig-ant-buttons",children:[0!==c?Object(p.jsx)("button",{id:"landing-btn",onClick:function(){0!==c&&i({type:C})},children:"Anterior"}):Object(p.jsx)("button",{id:"landing-btn",disabled:!0,children:"Anterior"}),e.length<12?Object(p.jsx)("button",{id:"landing-btn",disabled:!0,onClick:l,children:"Siguiente"}):Object(p.jsx)("button",{id:"landing-btn",disabled:u,onClick:l,children:"Siguiente"})]})})]}):Object(p.jsx)("div",{className:"container-loading",children:"Cargando..."===r?Object(p.jsx)("img",{id:"loading",src:I,alt:""}):r})},M={origen:"",tipo:"",speed:""},B={name:"",attack:""},L=function(){var e=Object(o.c)((function(e){return e.getHomePokemons.pokemonss})),t=Object(o.c)((function(e){return e.getHomePokemons.types})),n=Object(o.b)(),i=function(){e[0]||(n((function(e){return f.get("/pokemons").then((function(t){e({type:v,payload:t.data})}))})),n(w())),n({type:S})};Object(c.useEffect)((function(){i()}),[]);var r=function(e){console.log(e.currentTarget.value),1===e.currentTarget.value.length&&(M.origen=e.currentTarget.value),e.currentTarget.value.length>2&&(M.tipo=e.currentTarget.value),2===e.currentTarget.value.length&&(M.atack50=e.currentTarget.value),n(D(0)),n({type:y,payload:M})},s=function(e){console.log(e.currentTarget.value),n(D(0)),B.name=e.currentTarget.value,n({type:T,payload:B})};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{id:"filters_style",children:[Object(p.jsx)("span",{id:"span_label",children:"Buscar Pokemon:"}),Object(p.jsx)("input",{type:"text",onChange:function(e){console.log(e.currentTarget.value),M={origen:"",tipo:"",speed:"",atack50:""},B={name:"",attack:""},n(D(0)),a=e.currentTarget.value}}),Object(p.jsx)("button",{onClick:function(){return n((e=a,function(t){return f.get("/pokemon?name=".concat(e)).then((function(e){t({type:k,payload:e.data})}))}));var e},children:"Buscar"}),Object(p.jsx)(j.b,{id:"landing-btn",to:"../addpokemon/",children:" A\xf1adir pokemon "}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.currentTarget.origenSelect.value="1",e.currentTarget.typesSelect.value="allTypes",e.currentTarget.orderNameSelect.value="def",e.currentTarget.orderAttackSelect.value="def",M={origen:"",tipo:"",speed:"",atack50:""},B={name:"",attack:""},n(D(0)),n({type:P})},children:[Object(p.jsx)("span",{id:"span_label",children:"Origen:"}),Object(p.jsxs)("select",{name:"origenSelect",onChange:r,children:[Object(p.jsx)("option",{disabled:!0,children:"Api or DB"}),Object(p.jsx)("option",{value:"1",children:"Todos"}),Object(p.jsx)("option",{value:"2",children:"Existentes"}),Object(p.jsx)("option",{value:"3",children:"Creados"})]}),Object(p.jsx)("span",{id:"span_label",children:"Tipos:"}),Object(p.jsxs)("select",{name:"typesSelect",onChange:r,children:[Object(p.jsx)("option",{disabled:!0,children:"Tipos"}),Object(p.jsx)("option",{value:"allTypes",children:"Todos"}),t?t.map((function(e){return Object(p.jsx)("option",{value:e.name,children:e.name},e.id)})):""]}),Object(p.jsx)("span",{id:"span_label",children:"Ordenar por nombre:"}),Object(p.jsxs)("select",{name:"orderNameSelect",onChange:s,children:[Object(p.jsx)("option",{value:"def",children:"Seleccionar"}),Object(p.jsx)("option",{value:"asc_name",children:"A - Z"}),Object(p.jsx)("option",{value:"dsc_name",children:"Z - A"})]}),Object(p.jsx)("span",{id:"span_label",children:"Ordenar por ataque:"}),Object(p.jsxs)("select",{name:"orderAttackSelect",onChange:s,children:[Object(p.jsx)("option",{value:"def",children:"Seleccionar"}),Object(p.jsx)("option",{value:"asc_attack",children:"Mayor ataque"}),Object(p.jsx)("option",{value:"dsc_attack",children:"Menor ataque"})]}),Object(p.jsx)("span",{id:"span_label",children:"Ataque +50 / -50:"}),Object(p.jsxs)("select",{name:"filterAttack50",onChange:r,children:[Object(p.jsx)("option",{value:"dex",children:"Seleccionar"}),Object(p.jsx)("option",{value:"+5",children:" + 50 "}),Object(p.jsx)("option",{value:"-5",children:" - 50 "})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Limpiar filtros"}),Object(p.jsx)("br",{})]})]}),Object(p.jsx)(q,{})]})},K=(n(68),n.p+"static/media/pikachu.525b5cce.gif"),G=function(){var e=Object(b.g)().idpokemon,t=Object(o.c)((function(e){return e.pokemonByID})),n=Object(o.b)(),a=function(){var t;n((t=e,function(e){return f.get("/pokemon/".concat(t)).then((function(t){e({type:E,payload:t.data})}))}))};return Object(c.useEffect)((function(){a()}),[]),console.log(!!t&&t.id),t.id?Object(p.jsxs)("div",{className:"container-detail",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Detalle del Pokemon"}),Object(p.jsxs)("div",{id:"pokemon-detail",children:[Object(p.jsxs)("h2",{children:["Nombre: ",t.name]}),Object(p.jsx)("img",{src:t.img_url,alt:"",width:"150px"}),Object(p.jsxs)("p",{children:["ID: ",t.id]}),Object(p.jsxs)("p",{children:["Vida: ",t.stats_hp]}),Object(p.jsxs)("p",{children:["Ataque: ",t.stats_attack]}),Object(p.jsxs)("p",{children:["Defensa: ",t.stats_defense]}),Object(p.jsxs)("p",{children:["Velocidad: ",t.stats_speed]}),Object(p.jsxs)("p",{children:["Peso: ",t.weight]}),Object(p.jsxs)("p",{children:["Altura: ",t.height]}),Object(p.jsx)("p",{children:"Tipos:"})," ",!!t.types&&t.types.map((function(e){return Object(p.jsx)("p",{children:e},e)}))]}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{id:"landing-btn",to:"../home/",children:"Volver"})]}):Object(p.jsx)("div",{className:"container-loading",children:Object(p.jsx)("img",{id:"loading",src:K,alt:""})})},V=n(9),U=(n(69),function(){var e=Object(b.f)(),t=Object(o.c)((function(e){return e.new_pokemon}));console.log(typeof t);var n=Object(c.useState)({name:"",stats_hp:0,stats_attack:0,stats_defense:0,stats_speed:0,weight:0,height:0,types:[],img_url:""}),a=Object(V.a)(n,2),i=a[0],r=a[1],s=Object(o.c)((function(e){return e.getHomePokemons.types})),l=Object(o.b)();Object(c.useEffect)((function(){l(w())}),[]);var d=function(){var e;l((e=i,function(){var t=Object(g.a)(Object(x.a)().mark((function t(n){var a;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("/pokemon",e);case 2:a=t.sent,n({type:A,payload:a.data}),console.log(a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},j=i.types.filter((function(e,t){return i.types.indexOf(e)===t}));"Seleccionar"===i.types[0]&&i.types.shift(),i.types.includes("Seleccionar")&&i.types.pop();var u={};i.name.includes("@")&&(u.name="Caracteres especiales no permitidos"),(i.stats_hp<0||i.stats_hp>200)&&(u.stats_hp="Rango permitido (0 - 200)"),(i.stats_attack<0||i.stats_attack>200)&&(u.stats_attack="Rango permitido (0 - 200)"),(i.stats_defense<0||i.stats_defense>200)&&(u.stats_defense="Rango permitido (0 - 200)"),(i.stats_speed<0||i.stats_speed>200)&&(u.stats_speed="Rango permitido (0 - 200)"),(i.weight<0||i.weight>2e3)&&(u.weight="Rango permitido (0 - 2000)"),(i.height<0||i.height>50)&&(u.height="Rango permitido (0 - 50)"),i.img_url.length>0&&(i.img_url.includes("http")||(u.img_url="Url no v\xe1lida")),i.name&&i.stats_hp&&i.stats_attack&&i.stats_defense&&i.stats_speed&&i.weight&&i.height&&i.img_url||(u.empty=!0),0===i.types.length&&(u.types="Se requiere al menos un tipo"),console.log(u);return console.log(i),Object(p.jsxs)("div",{id:"addpokemon",children:[Object(p.jsx)("h2",{id:"addpokemon-h1",children:"A\xf1adir Pokemon"})," ",Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},onChange:function(e){r(Object(m.a)(Object(m.a)({},i),{},{name:e.currentTarget.inputName.value,stats_hp:e.currentTarget.inputHP.value,stats_attack:e.currentTarget.inputAttack.value,stats_defense:e.currentTarget.inputDefense.value,stats_speed:e.currentTarget.inputSpeed.value,weight:e.currentTarget.inputWeight.value,height:e.currentTarget.inputHeight.value,types:i.types.concat(e.currentTarget.selectTypes.value),img_url:e.currentTarget.inputImageUrl.value}))},children:[Object(p.jsx)("label",{children:" Nombre: "}),Object(p.jsx)("input",{id:"iptform",name:"inputName",type:"text",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.name})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Vida: "}),Object(p.jsx)("input",{id:"iptform",name:"inputHP",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.stats_hp})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Ataque:"}),Object(p.jsx)("input",{id:"iptform",name:"inputAttack",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.stats_attack})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Defensa:"}),Object(p.jsx)("input",{id:"iptform",name:"inputDefense",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.stats_defense})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Velocidad:"}),Object(p.jsx)("input",{id:"iptform",name:"inputSpeed",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.stats_speed})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Peso:"}),Object(p.jsx)("input",{id:"iptform",name:"inputWeight",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.weight})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Altura:"}),Object(p.jsx)("input",{id:"iptform",name:"inputHeight",type:"number",placeholder:"",required:!0}),Object(p.jsx)("span",{children:u.height})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Imagen:"}),Object(p.jsx)("input",{id:"iptform",name:"inputImageUrl",type:"text",placeholder:"http://",required:!0}),Object(p.jsx)("span",{children:u.img_url})," ",Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Tipos:"}),Object(p.jsxs)("select",{id:"sgcss",name:"selectTypes",children:[Object(p.jsx)("option",{disabled:!1,value:"Seleccionar",children:"Seleccionar"}),s?s.map((function(e){return Object(p.jsx)("option",{value:e.name,children:e.name},e.id)})):""]}),j.map((function(e){return Object(p.jsx)("span",{id:"selected-types",children:e},e)})),Object(p.jsx)("span",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{id:"landing-btn",type:"submit",disabled:(u.name,!1),onClick:function(){0===Object.keys(u).length?(d(),setTimeout((function(){return e("/added")}),1e3)):alert("Complete los campos correctamente por favor")},children:" Enviar "}),Object(p.jsx)("span",{children:u.empty})]})]})}),F=function(){return Object(p.jsxs)("div",{id:"addpokemon",children:[Object(p.jsx)("h1",{children:"Pokemon a\xf1adido correctamente"}),Object(p.jsx)(j.b,{id:"landing-btn",to:"/addpokemon",children:"\xbfA\xf1adir otro?"})," ",Object(p.jsx)("br",{}),Object(p.jsx)("a",{id:"landing-btn",href:"/home",children:"Ir al listado"})]})},Y=(n(70),n.p+"static/media/error.7147f1ef.png"),W=function(){return Object(p.jsxs)("div",{id:"errorhandler",children:[Object(p.jsx)("p",{id:"p-error",children:"P\xe1gina no encontrada"}),Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:Y,alt:"Error 404"}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{id:"landing-btn",to:"../home",children:"Ir al Inicio"}),Object(p.jsx)("br",{})]})},J=(n(71),function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("div",{id:"navbar",children:[Object(p.jsx)(j.b,{id:"item-navbar",to:"/",children:"Home"}),Object(p.jsx)(j.b,{id:"item-navbar",to:"/addpokemon",children:"Create"}),Object(p.jsx)(j.b,{id:"item-navbar",to:"/about",children:"About"})]})})}),Z=function(){return Object(p.jsx)("div",{className:"footer",children:Object(p.jsx)("p",{children:"\xa9 2022 Soy Henry | All rights reserved."})})};var X=function(){return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(J,{}),Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{path:"/",element:Object(p.jsx)(O,{})}),Object(p.jsx)(b.a,{path:"/home",element:Object(p.jsx)(L,{})}),Object(p.jsx)(b.a,{path:"/pokemondetail/:idpokemon",element:Object(p.jsx)(G,{})}),Object(p.jsx)(b.a,{path:"/addpokemon",element:Object(p.jsx)(U,{})}),Object(p.jsx)(b.a,{path:"/added",element:Object(p.jsx)(F,{})}),Object(p.jsx)(b.a,{path:"*",element:Object(p.jsx)(W,{})})]}),Object(p.jsx)(Z,{})]})},z=n(14),Q=Object(z.b)({getHomePokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return console.log("POST_POKEMON"),Object(m.a)(Object(m.a)({},e),{},{new_pokemon:t.payload});case _:return Object(m.a)(Object(m.a)({},e),{},{types:t.payload});case v:return console.log("GET_HOME_POKEMONS"),Object(m.a)(Object(m.a)({},e),{},{pokemonss:t.payload,filtered:t.payload,unfiltered:t.payload,clear_filters:t.payload});case k:return console.log("GET_SEARCH_POKEMONS"),Object(m.a)(Object(m.a)({},e),{},{pokemonss:t.payload,filtered:t.payload,unfiltered:t.payload});case y:console.log("FILTER_BY"),console.log(t.payload);var n=e.filtered;return"3"===t.payload.origen&&(n=n.filter((function(e){return e.id.length>5}))),"2"===t.payload.origen&&(n=n.filter((function(e){return e.id<9999}))),"allTypes"!==t.payload.tipo&&t.payload.tipo&&(n=n.filter((function(e){return e.types.includes(t.payload.tipo)}))),"+5"===t.payload.atack50&&(n=n.filter((function(e){return e.stats_attack>50}))),"-5"===t.payload.atack50&&(n=n.filter((function(e){return e.stats_attack<50}))),Object(m.a)(Object(m.a)({},e),{},{pokemonss:n});case T:console.log("ORDER_BY"),console.log(t.payload);var a=e.pokemonss,c=e.pokemonss;return"asc_name"===t.payload.name&&(a=Object(h.a)(e.unfiltered).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),c=Object(h.a)(e.pokemonss).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))),"dsc_name"===t.payload.name&&(a=Object(h.a)(e.unfiltered).sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})),c=Object(h.a)(e.pokemonss).sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0}))),"asc_attack"===t.payload.name&&(a=Object(h.a)(e.unfiltered).sort((function(e,t){return e.stats_attack<t.stats_attack?1:e.stats_attack>t.stats_attack?-1:0})),c=Object(h.a)(e.pokemonss).sort((function(e,t){return e.stats_attack<t.stats_attack?1:e.stats_attack>t.stats_attack?-1:0}))),"dsc_attack"===t.payload.name&&(a=Object(h.a)(e.unfiltered).sort((function(e,t){return e.stats_attack>t.stats_attack?1:e.stats_attack<t.stats_attack?-1:0})),c=Object(h.a)(e.pokemonss).sort((function(e,t){return e.stats_attack>t.stats_attack?1:e.stats_attack<t.stats_attack?-1:0}))),Object(m.a)(Object(m.a)({},e),{},{pokemonss:c,filtered:a});case P:return console.log("CLEAR_FILTERS"),Object(m.a)(Object(m.a)({},e),{},{pokemonss:e.clear_filters,filtered:e.clear_filters,unfiltered:e.clear_filters});default:return e}},pokemonByID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(m.a)(Object(m.a)({},e),t.payload);case S:return{};default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;case C:return e-12;case R:return e+12;default:return e}}}),$=Q,ee=n(34),te=Object(z.c)($,Object(z.a)(ee.a));te.subscribe((function(){return console.log(te)}));var ne=te;d.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_VERCEL_URL||"http://localhost:3001",s.a.render(Object(p.jsx)(o.a,{store:ne,children:Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(X,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.7961d45b.chunk.js.map
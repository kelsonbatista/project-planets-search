(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/starwars1.0cf7e1d8.png"},19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),u=(a(24),a(9)),o=a.n(u),i=a(7),m=a(13),s=a(6),f="https://swapi-trybe.herokuapp.com/api/planets/";function d(){return(d=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(f).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return"Error found: ".concat(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){return d.apply(this,arguments)},E=Object(n.createContext)();var b=function(e){var t=e.children,a=Object(n.useState)([{name:"population",position:0},{name:"orbital_period",position:1},{name:"diameter",position:2},{name:"rotation_period",position:3},{name:"surface_water",position:4}]),l=Object(s.a)(a,2),c=l[0],u=l[1],f=Object(n.useState)([]),d=Object(s.a)(f,2),b=d[0],v=d[1],O=Object(n.useState)([]),h=Object(s.a)(O,2),j=h[0],C=h[1],N=Object(n.useState)(""),y=Object(s.a)(N,2),_=y[0],g=y[1],S=Object(n.useState)([]),F=Object(s.a)(S,2),k=F[0],w=F[1],x=Object(n.useState)([]),B=Object(s.a)(x,2),D=B[0],I=B[1],L=Object(n.useState)({column:"population",sort:"ASC"}),q=Object(s.a)(L,2),A=q[0],V=q[1],P=Object(n.useState)(!1),G=Object(s.a)(P,2),R=G[0],J=G[1],T=0,U=Object(n.useState)(0),z=Object(s.a)(U,2),W=z[0],H=z[1];function K(){return M.apply(this,arguments)}function M(){return(M=Object(m.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a=t.results,n=a.sort((function(e,t){return e=e.name||"",t=t.name||"",e.localeCompare(t)})),C(n),I(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){0===k.length&&I((function(){return Object(i.a)(j)}));for(var t=function(){var t=T,a=(e?Object(i.a)(j):Object(i.a)(D)).filter((function(e){return function(e,t){var a=k[t];switch(a.comparison){case"maior que":return Number(e[a.column])>Number(a.value);case"menor que":return Number(e[a.column])<Number(a.value);default:return Number(e[a.column])===Number(a.value)}}(e,t)}));T+=1,I((function(){return a})),H((function(e){return e+1}))};T<k.length;)t()}Object(n.useEffect)((function(){if(!0===R)return Q("remove");Q()}),[k]),Object(n.useEffect)((function(){K()}),[]),Object(n.useEffect)((function(){c.sort((function(e,t){return e.position>t.position?1:-1}))}),[c]),Object(n.useEffect)((function(){console.log(_.toLowerCase(),"name"),I(j.filter((function(e){return e.name.toLowerCase().includes(_.toLowerCase())})))}),[_]);var X={columnsIn:c,columnsOut:b,count:W,data:j,filterByName:{filterByName:_},filterByNumericValues:k,filteredData:D,order:A,removeFilter:R,functions:{handlePlanets:K,handleUpdate:Q,setColumnsIn:u,setColumnsOut:v,setFilterByName:g,setFilterByNumericValues:w,setFilteredData:I,setOrder:V,setRemoveFilter:J}};return r.a.createElement(E.Provider,{value:X},t)},v=a(18),O=a.n(v);a(26);var h=function(){return r.a.createElement("header",null,r.a.createElement("img",{alt:"Intro",className:"header__logo",src:O.a}))},j=a(1),C=a(36),N=a(37);a(27);var y=function(){var e=Object(n.useState)("population"),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("maior que"),u=Object(s.a)(c,2),o=u[0],m=u[1],f=Object(n.useState)(0),d=Object(s.a)(f,2),p=d[0],b=d[1],v=Object(n.useContext)(E),O=v.columnsIn,h=v.columnsOut,y=v.filterByName.filterByName,_=v.filterByNumericValues,g=v.filteredData,S=v.order,F=v.functions,k=F.setColumnsIn,w=F.setColumnsOut,x=F.setFilterByName,B=F.setFilterByNumericValues,D=F.setFilteredData,I=F.setOrder;return r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{className:"filter__name",controlId:"planetName"},r.a.createElement("div",null,r.a.createElement(C.a.Label,null,"Filter by Name"),r.a.createElement(C.a.Control,{"data-testid":"name-filter",onChange:function(e){var t=e.target;return x(t.value)},placeholder:"Type the planet name",type:"text",value:y}))),r.a.createElement(C.a.Group,{className:"filter__numeric",controlId:"columnName"},r.a.createElement("div",{className:"filter__column"},r.a.createElement(C.a.Label,null,"Column"),r.a.createElement(C.a.Select,{"data-testid":"column-filter",name:"columnFilter",onChange:function(e){var t=e.target;return l(t.value)},value:a},O.map((function(e,t){var a=e.name;return r.a.createElement("option",{key:t,value:a},a)})))),r.a.createElement("div",{className:"filter__comparison"},r.a.createElement(C.a.Label,null,"Condition"),r.a.createElement(C.a.Select,{"data-testid":"comparison-filter",name:"comparisonFilter",onChange:function(e){var t=e.target;return m(t.value)},value:o},r.a.createElement("option",{value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a"))),r.a.createElement("div",{className:"filter__number"},r.a.createElement(C.a.Label,null,"Number"),r.a.createElement(C.a.Control,{"data-testid":"value-filter",name:"numberFilter",onChange:function(e){var t=e.target;return b(t.value)},type:"number",value:p})),r.a.createElement(N.a,{className:"filter__remove","data-testid":"button-filter",onClick:function(e){return function(e){e.preventDefault(),B([].concat(Object(i.a)(_),[{column:a,comparison:o,value:p}]));var t=O.filter((function(e){return e.name===a}));w(h.concat(t));var n=O.filter((function(e){return e.name!==a}));k(n)}(e)},type:"submit",variant:"warning"},"Filter")),r.a.createElement(C.a.Group,{className:"filter__order",controlId:"order"},r.a.createElement("div",{className:"filter__sort"},r.a.createElement(C.a.Check,{"data-testid":"column-sort-input-asc",type:"radio",label:"Asc",name:"orderOption",value:"ASC",onChange:function(){return I(Object(j.a)(Object(j.a)({},S),{},{sort:"ASC"}))}}),r.a.createElement(C.a.Check,{"data-testid":"column-sort-input-desc",type:"radio",label:"Desc",name:"orderOption",value:"DESC",onChange:function(){return I(Object(j.a)(Object(j.a)({},S),{},{sort:"DESC"}))}})),r.a.createElement("div",{className:"filter__sortColumn"},r.a.createElement(C.a.Label,null,"Order By"),r.a.createElement(C.a.Select,{"data-testid":"column-sort",name:"orderFilter",onChange:function(e){var t=e.target;return I(Object(j.a)(Object(j.a)({},S),{},{column:t.value}))},value:S.column},[].concat(Object(i.a)(O),Object(i.a)(h)).map((function(e,t){var a=e.name;return r.a.createElement("option",{key:t,value:a},a)})))),r.a.createElement(N.a,{className:"filter__btn-order","data-testid":"column-sort-button",onClick:function(e){return function(e){e.preventDefault();var t=S.column,a=S.sort,n=g.sort((function(e,n){return"ASC"===a?e[t].localeCompare(n[t],void 0,{numeric:!0}):n[t].localeCompare(e[t],void 0,{numeric:!0})})),r=[],l=[];n.forEach((function(e){return"unknown"===e[t]?l.push(e):r.push(e)}));var c=[].concat(r,l);I({column:"population",sort:"ASC"}),D((function(){return c}))}(e)},type:"submit",variant:"warning"},"Sort"),r.a.createElement(N.a,{className:"filter__btn-reset","data-testid":"button-remove-filters",onClick:function(e){return function(e){e.preventDefault(),k([].concat(Object(i.a)(O),Object(i.a)(h))),w([]),B([])}(e)},type:"submit",variant:"danger"},"Reset Filter")))};a(31);var _=function(){var e=Object(n.useContext)(E),t=e.columnsIn,a=e.columnsOut,l=e.filterByNumericValues,c=e.functions,u=c.setColumnsIn,o=c.setColumnsOut,m=c.setFilterByNumericValues,s=c.setRemoveFilter;return r.a.createElement("section",{className:"filter__bar"},l.map((function(e,n){return r.a.createElement("span",{key:n,"data-testid":"filter"},r.a.createElement(N.a,{className:"filter__text",name:e.column,onClick:function(e){return function(e){var n=e.target;s((function(){return!0}));var r=Object(i.a)(l).filter((function(e){return e.column!==n.name}));m(r);var c=a.filter((function(e){return e.name===n.name}));u(t.concat(c));var f=a.filter((function(e){return e.name!==n.name}));o(f)}(e)},type:"button",variant:"danger"},"".concat(e.column,"   x")))})))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(_,null))},S=a(35);a(32);var F=function(){var e=Object(n.useContext)(E).filteredData;return r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm",variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rotation Period"),r.a.createElement("th",null,"Orbital Period"),r.a.createElement("th",null,"Diameter"),r.a.createElement("th",null,"Climate"),r.a.createElement("th",null,"Gravity"),r.a.createElement("th",null,"Terrain"),r.a.createElement("th",null,"Surface Water"),r.a.createElement("th",null,"Population"),r.a.createElement("th",null,"Films"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Edited"),r.a.createElement("th",null,"Url"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{"data-testid":"planet-name"},e.name),r.a.createElement("td",null,e.rotation_period),r.a.createElement("td",null,e.orbital_period),r.a.createElement("td",null,e.diameter),r.a.createElement("td",null,e.climate),r.a.createElement("td",null,e.gravity),r.a.createElement("td",null,e.terrain),r.a.createElement("td",null,e.surface_water),r.a.createElement("td",null,e.population),r.a.createElement("td",null,e.films),r.a.createElement("td",null,e.created),r.a.createElement("td",null,e.edited),r.a.createElement("td",null,e.url))}))))};a(33);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement("section",{className:"form"},r.a.createElement(g,null)),r.a.createElement("section",{className:"table"},r.a.createElement(F,null))))};var w=function(){return r.a.createElement(b,null,r.a.createElement(k,null))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9cc7c26c.chunk.js.map
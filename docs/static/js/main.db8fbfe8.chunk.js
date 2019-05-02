(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),l=(a(16),a(4)),i=a(5),m=a(8),u=a(6),o=a(9),d=a(1),p=a.n(d),f=a(7),h=function(e){function t(){return(t=Object(f.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:throw a;case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(e){return t.apply(this,arguments)}("".concat("https://rickandmortyapi.com/api/character").concat(e))},E=function(e){var t="search";return Object.entries(e).filter(function(e){return e[1].name?e:null}).map(function(e){return e[1].checked||e[1].type===t?{name:e[1].name,value:e[1].value}:null}).filter(function(e){return e||null})},_=function(e){return r.a.createElement("ul",{className:"card-list"},e.charactersData.map(function(e){return r.a.createElement("li",{key:e.id,className:"card-list__item"},r.a.createElement("div",{className:"card-list__item-wrap"},r.a.createElement("img",{className:"card-list__photo",src:e.image,alt:"#"}),r.a.createElement("div",{className:"card-list__name-wrap"},r.a.createElement("p",{className:"card-list__name"},e.name),r.a.createElement("p",{className:"card-item__id-info"},"ID: ",e.id)),r.a.createElement("div",{className:"card-list__character-specs"},r.a.createElement("div",{className:"card-list__character-spec-item"},r.a.createElement("span",{className:"card-list__spec"},"Status"),r.a.createElement("span",{className:"card-list__spec-value"},e.status)),r.a.createElement("div",{className:"card-list__character-spec-item"},r.a.createElement("span",{className:"card-list__spec"},"Species"),r.a.createElement("span",{className:"card-list__spec-value"},e.species)),r.a.createElement("div",{className:"card-list__character-spec-item"},r.a.createElement("span",{className:"card-list__spec"},"Gender"),r.a.createElement("span",{className:"card-list__spec-value"},e.gender)))))}))},g=function(e){if(!e.pagesCount||1===e.pagesCount)return"";for(var t=[],a=1;a<=e.pagesCount;a++)t.push(r.a.createElement("li",{onClick:e.onClick,className:"pagination__item"+(e.currentPage===a?" pagination__item_active":""),id:a,key:a},a));return r.a.createElement("ul",{className:"pagination"},t)},N={species:["all","human","alien","humanoid","mytholog","animal","robot"],gender:["all","male","female","genderless","unknown"],status:["all","alive","dead","unknown"]},v=function(e){var t=Object.keys(e)[0];return r.a.createElement("fieldset",{className:"filter__item-wrap"},r.a.createElement("legend",{className:"filter__type-head"},t),e[Object.keys(e)].map(function(e,a){return r.a.createElement("label",{key:a,className:"filter__item"},r.a.createElement("input",{type:"radio",name:t,value:"all"===e?"":e,defaultChecked:"all"===e}),e)}))},b=function(e){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("form",{onSubmit:e.formSubmitHandler,className:"filter"},r.a.createElement("section",null,r.a.createElement("h2",{className:"filter__heading"},"Search:"),r.a.createElement("label",null,r.a.createElement("input",{type:"search",name:"name",placeholder:"Search by name or ID"}))),r.a.createElement("section",null,r.a.createElement("h2",{className:"filter__heading"},"Sorting:"),r.a.createElement("fieldset",{className:"filter__item-wrap"},r.a.createElement("legend",{className:"filter__type-head"},"Name"),r.a.createElement("label",{className:"filter__item"},r.a.createElement("input",{type:"radio",name:"sort",value:"asc-name"}),"asc"),r.a.createElement("label",{className:"filter__item"},r.a.createElement("input",{type:"radio",name:"sort",value:"desc-name"}),"desc")),r.a.createElement("fieldset",{className:"filter__item-wrap"},r.a.createElement("legend",{className:"filter__type-head"},"ID"),r.a.createElement("label",{className:"filter__item"},r.a.createElement("input",{type:"radio",name:"sort",defaultChecked:!0,value:"asc-id"}),"asc"),r.a.createElement("label",{className:"filter__item"},r.a.createElement("input",{type:"radio",name:"sort",value:"desc-id"}),"desc"))),r.a.createElement("section",null,r.a.createElement("h2",{className:"filter__heading"},"Filtering:"),r.a.createElement(v,{species:N.species}),r.a.createElement(v,{status:N.status}),r.a.createElement(v,{gender:N.gender})),r.a.createElement("button",{className:"filter__btn",type:"submit"},"Submit"),r.a.createElement("button",{className:"filter__btn",type:"button"},r.a.createElement("a",{href:"/react-rick-and-morty/"},"Reset"))))},y={dataNotLoaded:"notLoaded",dataLoaded:"ok"},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={status:y.dataNotLoaded,query:"",currentPage:1,statusText:"Loading..."},a.ascDescArraySorter=function(e,t){switch(console.log(e),t){case"asc-name":return e.sort(function(e,t){return e.name<t.name?-1:1});case"desc-name":return e.sort(function(e,t){return t.name<e.name?-1:1});case"asc-id":return e.sort(function(e,t){return e.id<t.id?-1:1});case"desc-id":return e.sort(function(e,t){return t.id<e.id?-1:1});default:return e}},a.paginationClickHandler=function(e){var t=+e.target.id,n="page=".concat(t,"&").concat(a.state.query);h("?".concat(n)).then(function(e){a.setState({charactersData:e.results,pagesCount:e.info.pages,currentPage:t})})},a.formSubmitHandler=function(e){e.preventDefault();var t=E(e.target),n=t.find(function(e){return"name"===e.name}).value;if(Number(n))h("/".concat(n)).then(function(e){a.setState({charactersData:[e],pagesCount:null,status:y.dataLoaded})}).catch(function(e){a.setState({status:e.status,statusText:e.statusText})});else{var r=t.map(function(e){return e.value?"".concat(e.name,"=").concat(e.value,"&"):""}).join(""),s=t.find(function(e){return"sort"===e.name}).value;h("?".concat(r)).then(function(e){if(s){var t=a.ascDescArraySorter(e.results,s);a.setState({charactersData:t})}else a.setState({charactersData:e.results});a.setState({pagesCount:e.info.pages,status:y.dataLoaded,query:r,currentPage:1})}).catch(function(e){a.setState({status:e.status,statusText:e.statusText})})}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h(this.state.query).then(function(t){e.setState({charactersData:t.results,pagesCount:t.info.pages,status:y.dataLoaded})}).catch(function(t){e.setState({status:t.status,statusText:t.statusText})})}},{key:"render",value:function(){return this.state.status===y.dataNotLoaded?r.a.createElement("div",{className:"container"},r.a.createElement(b,{formSubmitHandler:this.formSubmitHandler}),r.a.createElement("main",null,r.a.createElement("h2",null,this.state.statusText))):this.state.status===y.dataLoaded?r.a.createElement("div",{className:"container"},r.a.createElement(b,{formSubmitHandler:this.formSubmitHandler}),r.a.createElement("main",null,r.a.createElement(_,{charactersData:this.state.charactersData}),r.a.createElement(g,{pagesCount:this.state.pagesCount,currentPage:this.state.currentPage,onClick:this.paginationClickHandler}))):404===this.state.status?r.a.createElement("div",{className:"container"},r.a.createElement(b,{formSubmitHandler:this.formSubmitHandler}),r.a.createElement("main",null,r.a.createElement("h2",null,this.state.statusText))):r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement("h2",null,"Unkown error while rendering")))}}]),t}(n.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.db8fbfe8.chunk.js.map
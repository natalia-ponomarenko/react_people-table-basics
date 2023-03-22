(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(22),c(2)),s=c(6),j=c.n(s),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=c(8),u=c(11),x=c(4),O=c(1),p="https://mate-academy.github.io/react_people-table/api/people.json";function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(p)})).then((function(e){return e.json()}));var e}var f=function(){return Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},v=(c(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),g=function(){return Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},N=function(e){var t=e.people,c=Object(r.h)().personSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=e.name,r=e.sex,s=e.born,l=e.died,o=e.fatherName,b=e.motherName,d=e.slug,h=t.find((function(e){return b===e.name})),u=t.find((function(e){return o===e.name}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===d}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"/people/".concat(d),className:j()({"has-text-danger":"f"===r}),children:n})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:null!==h&&void 0!==h&&h.slug?Object(i.jsx)(a.b,{to:"/people/".concat(null===h||void 0===h?void 0:h.slug),className:"has-text-danger",children:b}):b||"-"}),Object(i.jsx)("td",{children:null!==u&&void 0!==u&&u.slug?Object(i.jsx)(a.b,{to:"/people/".concat(null===u||void 0===u?void 0:u.slug),children:o}):o||"-"})]},n)}))})]})},y=function(){var e=Object(O.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!1),r=Object(x.a)(a,2),s=r[0],j=r[1],l=Object(O.useState)(!1),o=Object(x.a)(l,2),b=o[0],d=o[1],p=Object(O.useState)(!1),y=Object(x.a)(p,2),w=y[0],S=y[1];return Object(O.useEffect)((function(){var e=function(){var e=Object(u.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),j(!1),S(!1),e.prev=3,e.next=6,m().then((function(e){return n(e)}));case 6:0===c.length&&S(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),j(!0),S(!1);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[b?Object(i.jsx)(v,{}):Object(i.jsx)(N,{people:c}),s&&Object(i.jsx)(g,{}),w&&Object(i.jsx)(f,{})]})})]})},w=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/"})}),Object(i.jsxs)(r.b,{path:"people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(y,{})}),Object(i.jsx)(r.b,{path:":personSlug",element:Object(i.jsx)(y,{})})]}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(d,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(w,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6de3c39a.chunk.js.map
(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[177],{2600:(t,e,n)=>{"use strict";n.d(e,{S:()=>h});var r=n(5161),i=n.n(r),o=n(7294),a=n(9704),c=n(3895),s=n(4586).Z,u=n(4242),d=n.n(u),l=n(5893);function f(t){var e=t.index,n=(0,a.I0)(),r=(0,a.v9)((function(t){return t.items[e]})),i=(0,a.v9)((function(t){return t.done[e]})),u=(0,o.useCallback)((function(){return n((0,c.j0)(e,!i))}),[e,i,n]);return(0,l.jsx)("div",{"data-testid":s,className:d().item,children:(0,l.jsxs)("div",{"data-testid":"list-item",className:i?"done":"",children:[(0,l.jsx)("input",{type:"checkbox",checked:i,onChange:u}),r]})})}function p(){var t=(0,a.I0)(),e=(0,a.v9)((function(t){return t.items})),n=(0,a.v9)((function(t){return t.text})),r=(0,o.useCallback)((function(e){var n=e.target;t((0,c.Hd)(n.value))}),[t]),s=(0,o.useCallback)((function(){t((0,c.jX)(n))}),[t,n]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{"data-testid":"input-add",value:n,onChange:r}),(0,l.jsx)("button",{"data-testid":"button-add",onClick:s,children:"Добавить"})]}),(0,l.jsx)("div",{"data-testid":"list",className:"list",children:i()(e,(function(t,e){return(0,l.jsx)(f,{index:e},e)}))}),(0,l.jsx)("h2",{children:"Комментарий для PR"}),(0,l.jsx)("h1",{children:"Комментарий для PR 2"})]})}function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{"data-testid":"page-title",children:"Home"}),(0,l.jsx)("p",{children:"This is the list."}),(0,l.jsx)(p,{})]})}},3895:(t,e,n)=>{"use strict";n.d(e,{Hd:()=>l,N2:()=>h,j0:()=>f,jX:()=>d});var r=n(4890);function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={items:["Позавтракать","Сходить в магазин","Покормить кота"],done:{},text:""},d=function(t){return{type:"ADD_ITEM",text:t}},l=function(t){return{type:"SET_TEXT",text:t}},f=function(t,e){return{type:"SET_DONE",index:t,done:e}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":return c(c({},t),{},{text:"",items:[].concat(i(t.items),[e.text])});case"SET_TEXT":return c(c({},t),{},{text:e.text});case"SET_DONE":return c(c({},t),{},{done:c(c({},t.done),{},s({},e.index,e.done))});default:return t}};function h(){return(0,r.MT)(p)}},6017:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var r=n(3645),i=n.n(r)()(!1);i.push([t.id,".mYe2p41a8owsl\\+hNyXYSwA\\=\\= {\r\n\tpadding: 0;\r\n}\r\n",""]),i.locals={item:"mYe2p41a8owsl+hNyXYSwA=="};const o=i},4242:(t,e,n)=>{var r=n(3379),i=n(6017);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.id,i,""]]);r(i,{insert:"head",singleton:!1}),t.exports=i.locals||{}}},t=>{t.O(0,[247],(()=>(2600,t(t.s=2600)))),t.O()}]);
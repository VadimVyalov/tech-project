import{R as l,j as i}from"./index-30936eb3.js";import{P as m}from"./index-6f2c059f.js";import{Q as f,x as y}from"./react-toastify.esm-8e66b885.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=l.createContext&&l.createContext(g),a=globalThis&&globalThis.__assign||function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)},v=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function h(e){return e&&e.map(function(n,t){return l.createElement(n.tag,a({key:t},n.attr),h(n.child))})}function p(e){return function(n){return l.createElement(x,a({attr:a({},e.attr)},n),h(e.child))}}function x(e){var n=function(t){var r=e.attr,o=e.size,c=e.title,b=v(e,["attr","size","title"]),u=o||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,b,{className:s,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return d!==void 0?l.createElement(d.Consumer,null,function(t){return n(t)}):n(g)}const O=(e,n=!1)=>{const t=({closeToast:r,errorMessage:o})=>i.jsxs("div",{children:[i.jsxs("p",{children:["Error: ",o]}),i.jsx("button",{onClick:r,className:"rounded-md border border-black border-solid px-2",children:"Поверненутися до пошуку"})]});f.error(i.jsx(t,{errorMessage:e,errorClose:n}),{closeButton:!1,onClose:r=>r.errorClose&&r.errorClose(),autoClose:5e3,transition:y,pauseOnFocusLoss:!1,position:f.POSITION.TOP_CENTER})};O.propTypes={msg:m.string.isRequired,clb:m.func};export{O as E,p as G};

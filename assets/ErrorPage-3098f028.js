import{v as l,r as n,j as e}from"./index-50402654.js";const d="_container_xour6_1",u="_image_xour6_11",x="_text_xour6_16",m="_title_xour6_22",_="_description_xour6_26",p="_accent_xour6_30",t={container:d,image:u,text:x,title:m,description:_,accent:p},j=()=>{const s=l(),[a,c]=n.useState(5);return n.useEffect(()=>{const o=setInterval(()=>{c(i=>i-1)},1e3),r=setTimeout(()=>{s("/")},5e3);return()=>{clearInterval(o),clearTimeout(r)}},[s]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:t.container,children:[e.jsxs("h1",{className:t.title,children:[e.jsx("span",{className:t.text,children:"Oopsie!"})," We could not find this page"]}),e.jsxs("div",{className:t.description,children:["Mistakes happen... and that is okay. You will be redirected to",e.jsx("span",{className:t.accent,children:" The Home Page"})," and start your journey from there after",e.jsxs("span",{className:t.accent,children:[" ",a," seconds."]})]})]})})};export{j as default};

(this["webpackJsonpreact-starwars-api-project"]=this["webpackJsonpreact-starwars-api-project"]||[]).push([[0],{55:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),o=(a(55),a(14)),s=a(30),l=a.n(s),j=a(97),d=a(96),h=Object(d.a)({imageWrapper:{display:"flex",justifyContent:"center",width:"100%",height:"100vh",marginBottom:"2rem"},card:{display:"flex",justifyContent:"center",width:"100%",height:"100%"},cardMedia:{height:"700px",width:"500px",objectFit:"contain"},navbar:{marginBottom:"2rem"},navbarContainer:{backgroundColor:"#3B3B3B"},navbarToolbar:{justifyContent:"center"},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},footerContainer:{width:"100%",backgroundColor:"#3B3B3B",color:"#fff",padding:"1rem",textAlign:"center"},footerLink:{color:"white",textDecoration:"none"}}),b=a(4),u=function(){var e=h();return Object(b.jsx)("div",{className:e.loadingContainer,children:Object(b.jsx)(j.a,{size:"10rem"})})},f=a(98),m=a(82),x=a(99),g=function(){var e=h();return Object(b.jsx)("div",{className:e.footerContainer,children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(m.a,{children:["Developed by"," ",Object(b.jsx)(x.a,{style:{color:"white"},className:e.footerLink,href:"https://eugenehan.netlify.app/",target:"_blank",rel:"noreferrer",children:"Eugene Han"})]})})})},O=a(100),p=a(101),v=function(){var e=h();return Object(b.jsx)("div",{className:e.navbar,children:Object(b.jsx)(O.a,{position:"static",className:e.navbarContainer,children:Object(b.jsx)(p.a,{className:e.navbarToolbar,children:Object(b.jsx)(m.a,{variant:"h5",children:"Anime Random Quotes"})})})})},C=(a(79),a(102)),w=a(103),y=a(104),B=a(105),k=a(106);var N=function(){var e=h(),t=r.a.useState(null),a=Object(o.a)(t,2),c=a[0],i=a[1],s=r.a.useState(null),j=Object(o.a)(s,2),d=j[0],x=j[1],O=r.a.useState(!0),p=Object(o.a)(O,2),N=p[0],S=p[1],F=r.a.useState(!0),L=Object(o.a)(F,2),q=L[0],E=L[1];return Object(n.useEffect)((function(){l.a.request("https://animechan.vercel.app/api/random").then((function(e){i(e.data),l.a.request("https://api.jikan.moe/v3/search/anime?q="+"/".concat(e.data.anime,"&limit=1")).then((function(e){var t=e.data.results.map((function(e){return e.image_url})).toString();x(t)})),E(!1),S(!1)})).catch((function(e){console.error(e)}))}),[]),N?Object(b.jsx)(u,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(f.a,{maxWidth:"lg",children:[Object(b.jsx)(C.a,{}),Object(b.jsxs)(m.a,{variant:"h3",align:"center",children:[c.anime," "]}),Object(b.jsx)("div",{className:e.imageWrapper,children:Object(b.jsx)(w.a,{className:e.card,children:!0===q?"Loading...":Object(b.jsx)(y.a,{className:e.cardMedia,image:"".concat(d)})})}),Object(b.jsx)(B.a,{textAlign:"center",children:Object(b.jsx)(k.a,{onClick:function(){return window.location.reload(!1)},variant:"contained",disableElevation:!0,children:"Refresh"})}),Object(b.jsx)(m.a,{variant:"h3",align:"center",children:c.character}),Object(b.jsxs)(m.a,{variant:"h6",align:"center",gutterBottom:!0,children:['"',c.quote,'"']})]}),Object(b.jsx)(g,{})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),S()}},[[80,1,2]]]);
//# sourceMappingURL=main.b600ebd6.chunk.js.map
(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(3),s=n(1),c=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),a=Object(i.a)(n,2),r=a[0],o=a[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://seanxlim.github.io/home",j="SL.",h="Sean Lim",d="student, creator, and music enthusiast",u="I am a driven and fascinated second-year student at the University of Washington, passionate about exploring the intersections of technology and human values, to better understand and solve real-world issues. I am eager to explore opportunities in project management, and UI/UX! In my free time, you can find me enjoying home-cooking, sports, and different kinds of tea \ud83c\udf75 ",m="https://docs.google.com/document/d/e/2PACX-1vSITcoG4p3h_dmKtuFm3eNgfVDCF5a8m2DnbQ5KSzLPfl1jrERcQhtHo_xf6l1IsOv_qbBByHoFdc6n/pub",b={linkedin:"https://www.linkedin.com/in/aseanlim/",github:"https://github.com/seanxlim",instagram:"https://www.instagram.com/seanxlim/"},p=[{name:"Dietary Health and COVID Mortality",description:"Designed a web application that facilitates the exploration of our teams dataset(s) through interactions and visualizations. Worked with live COVID-19 and global food datasets from the New York Times to explore the relationship between diet and COVID-19 mortality.",stack:["R-Code","R Shiny","Github"],sourceCode:"https://jerry020.shinyapps.io/source/",livePreview:"https://jerry020.shinyapps.io/source/"},{name:"Husky Charge",description:"Analyzed pre-exisiting charging stations on the University of Washington campus and then created a proposed redesign to increase the accessibility and use of chargers for students and faculty on campus.",stack:["Word","Figma"],sourceCode:"https://github.com/seanxlim/huskycharge/blob/main/Husky%20Charge%20Final%20Prototype.pdf",livePreview:"https://github.com/seanxlim/huskycharge/blob/main/Husky%20Charge%20Final%20Prototype.pdf"},{name:"Racial Bias in Computer Vision",description:"Our team analyzed the widely popular UTKFace dataset to implement a Convolutional Neural Network (CNN) algorithm, used to predict gender given an image of a human. By further investigating the current policy as it comes to data collection and privacy, we hope to suggest practices that will lead humanity to a safer, more equal future.",stack:["Atom","Latex","Python"],sourceCode:"https://www.techrxiv.org/articles/preprint/Racial_Bias_in_Computer_Vision_via_Convolutional_Neural_Networks/20323818",livePreview:"https://www.techrxiv.org/articles/preprint/Racial_Bias_in_Computer_Vision_via_Convolutional_Neural_Networks/20323818"}],O=["R","Figma","Canva","Photoshop","React","UI/UX","Prototyping","Workshops","iOS/Andriod Design","Git"],x="seanxlim@uw.edu",f=n(16),g=n.n(f),v=n(14),k=n.n(v),_=n(18),N=n.n(_),y=n(17),w=n.n(y),C=(n(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(c.jsx)(k.a,{}):Object(c.jsx)(g.a,{})}),Object(c.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(c.jsx)(w.a,{}):Object(c.jsx)(N.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(C,{})]})}),S=n(11),I=n.n(S),F=n(19),R=n.n(F),B=(n(33),function(){var e=h,t=d,n=u,a=m,i=b;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:n&&n}),Object(c.jsxs)("div",{className:"about__contact center",children:[a&&Object(c.jsx)("a",{href:a,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(c.jsxs)(c.Fragment,{children:[i.github&&Object(c.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(I.a,{})}),i.linkedin&&Object(c.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(R.a,{})})]})]})]})}),D=n(7),E=n.n(D),L=n(20),H=n.n(L),U=(n(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},E()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(I.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(H.a,{})})]})}),V=(n(36),function(){return p.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(c.jsx)(U,{project:e},E()())}))})]}):null}),z=(n(37),function(){return O.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())}))})]}):null}),A=n(21),T=n.n(A),W=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(T.a,{fontSize:"large"})})}):null}),G=(n(39),function(){return x?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(x),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(40),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/seanxlim",className:"link footer__link",children:"Created By Sean Lim"})})}),X=(n(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(P,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(B,{}),Object(c.jsx)(V,{}),Object(c.jsx)(z,{}),Object(c.jsx)(G,{})]}),Object(c.jsx)(W,{}),Object(c.jsx)(K,{})]})});n(42);Object(a.render)(Object(c.jsx)(r,{children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f2e3f891.chunk.js.map
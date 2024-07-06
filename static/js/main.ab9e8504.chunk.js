(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/face_pic1.ca6172ec.jpg"},function(e,a,t){e.exports=t.p+"static/media/example_pic1.b1b0afac.png"},function(e,a,t){e.exports=t.p+"static/media/example_pic2.13a45c95.png"},function(e,a,t){e.exports=t.p+"static/media/example_pic3.41972426.png"},,,function(e,a,t){e.exports=t(29)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),o=t.n(r);t(19),t(20);var l=()=>i.a.createElement("div",{className:"navbar-container",id:"about"},i.a.createElement("div",{className:"view-area navbar-container__content"},i.a.createElement("a",{href:"#main-content",id:"skip-nav-link",className:"link-button"},"Skip to main content"),i.a.createElement("a",{href:"/home/"},i.a.createElement("h1",null,"Nathan Guerrero")),i.a.createElement("ul",{className:"navbar-container__content__links"},i.a.createElement("li",null,i.a.createElement("a",{href:"#about"},"About Me")),i.a.createElement("li",null,i.a.createElement("a",{href:"#works"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact"},"Contact"))))),c=t(5),s=t.n(c);t(21);var m=()=>i.a.createElement("div",{className:"about-container"},i.a.createElement("div",{className:"view-area about-container__content"},i.a.createElement("div",{className:"flex-container flex-container--about"},i.a.createElement("div",null,i.a.createElement("div",{className:"image-box"},i.a.createElement("img",{src:s.a,alt:"A selfie of mine"}))),i.a.createElement("div",null,i.a.createElement("h1",{className:"section-header"},"About Me (Hello!)"),i.a.createElement("h2",{className:"section-subheader"},"I am Nathan Guerrero, a Computer Science student at the University of California, Irvine (class of 2025)."),i.a.createElement("p",null,"Ever since childhood, creating and tinkering with software has been a passion of mine, a passion that has followed me into college. I am persistent and highly attentive to detail. As a fourth-year, I have gained a broad range of experience, from my time in a team hackathon to my times across numerous group projects."),i.a.createElement("p",null,"I am highly proficient in Python (and C/C++), have much experience in systems development, and have some experience in web development, including in React. In addition to programming, I also like to compose/produce music and game in my free time and know a bit of Japanese and Spanish."),i.a.createElement("p",null,"Currently based in Irvine, CA, where I study.")))));t(22);var u=e=>{const a=e.examples;if(a.id%2===0)var t="flex-container flex-container--flipped";else t="flex-container";return i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:t},i.a.createElement("div",null,i.a.createElement("h1",null,a.title),i.a.createElement("h2",null,a.subtitle),i.a.createElement("p",null,a.description),i.a.createElement("p",null,a.extraText),i.a.createElement("div",{className:"button-wrapper"},a.links.map(e=>i.a.createElement("a",{href:e.url,className:"link-button"},e.title)))),i.a.createElement("div",null,i.a.createElement("a",{href:a.links[0].url},i.a.createElement("div",null,i.a.createElement("div",{className:"image-box"},i.a.createElement("img",{src:a.image,alt:"Project example"})))))))},d=t(6),h=t.n(d),p=t(7),f=t.n(p),E=t(8),v=t.n(E);t(23);var g=()=>{const[e,a]=Object(n.useState)([{title:"Tile-Matching Game Environment (2024)",subtitle:"Team Member",description:"Written for a project class, IN4MATX 122, in a group of 5, written in Python. It is a framework to build tile-matching games with. I implemented the logic behind two example games, based on Dr. Mario and Puzzle Fighter. I wrote and refined documentation and designs in UML format, for improved communication.",extraText:"Challenges: It was my first time using UML format, and I did have to work with my team to find what worked best with the project. In addition, it was a challenge to figure out how best to represent game objects and rules, so I ultimately decided to learn how to use functional programming principles to represent data as transformable data structures, and represent game rules and principles as functions transforming those structures.",image:v.a,links:[{title:"Demonstration",url:"https://www.youtube.com/watch?v=yA7TUdVvCN0"}],id:3},{title:"Random GIPHY Bot (2021)",subtitle:"Developer",description:"A personal project of mine, written over the span of two weeks. Written in Python, using Discord.py and the GIPHY API, it is a Discord bot that responds to commands with a random GIF from GIPHY. It also includes other related commands, and a back-end console for managing the Discord bot.",extraText:"Challenges: It was my first time using Python with APIs and the Internet, pushing me to learn about making requests and processing data. Since this program was IO-heavy, I learned how to use asynchrony in Python for optimal CPU time utilization.",image:f.a,links:[{title:"GitHub",url:"https://github.com/AnarchoBooleanism/random-giphy-bot"},{title:"Demonstration",url:"https://youtu.be/qzUwiL4S7ro"}],id:2},{title:"The Masked Singer but not the Masked Singer (2021)",subtitle:"Front-end developer",description:"A submission to the hackathon, ZotHacks 2021, in collaboration with Jake Gerber, Nael Belhaj Haddou, and Kaiyuan Hu. Made with React and the last.fm API, it is a game that presents 10 questions from 5 different genres, where one has to guess which of 4 albums that a certain artist has made.",extraText:"Challenges: It was my first time working with a team on a project, which pushed me to learn how to work with others to achieve a certain result. It was also my first time with web development, which pushed me to learn React and other web technologies from scratch, which came in very useful.",image:h.a,links:[{title:"Try it yourself!",url:"https://anarchobooleanism.github.io/masked-singer/"},{title:"Devpost",url:"https://devpost.com/software/the-masked-singer-but-not-the-masked-singer"}],id:1}]);return i.a.createElement("div",{className:"works-container"},i.a.createElement("div",{className:"view-area works-container__content"},i.a.createElement("h1",{className:"section-header"},"Works"),i.a.createElement("h3",{className:"section-subheader"},"Here are some projects I have worked on:"),e.map(e=>i.a.createElement(u,{examples:e,key:e.id}))))},b=t(10);t(26);var w=()=>{const[e,a]=Object(n.useState)({address:"University of California Irvine, Irvine, CA 92697",center:{lat:33.64020935886593,lng:-117.8445310327405},zoom:14});return i.a.createElement("div",{className:"map"},i.a.createElement(b.a,{bootstrapURLKeys:{key:"AIzaSyA6hXcwXSjkoS9Jff43uriDj1j3YbraoHE"},defaultCenter:e.center,defaultZoom:e.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:a=>{let{map:t,maps:n}=a;return((a,t)=>new t.Marker({position:e.center,map:a,title:"University of California Irvine, Irvine, CA 92697"}))(t,n)}}))};t(27);var k=()=>i.a.createElement("div",{className:"contact-container-background"},i.a.createElement("div",{className:"contact-container"},i.a.createElement("div",{className:"view-area contact_container__content"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",null,i.a.createElement(w,null),i.a.createElement("p",{className:"contact-location-info"},"University of California, Irvine",i.a.createElement("br",null)," Irvine, CA 92697")),i.a.createElement("div",{className:"contact-info-container"},i.a.createElement("h1",{className:"section-header"},"Contact"),i.a.createElement("h2",{className:"section-subheader"},"Interested? Here you go:"),i.a.createElement("div",{className:"contact-info-container__links"},i.a.createElement("div",{className:"contact-info-container__links__priority-links"},i.a.createElement("a",{className:"link-button link-button--email",href:"mailto:naguerr2@uci.edu"},"Email me!"),i.a.createElement("a",{className:"link-button link-button--resume",href:""},"Resume")),i.a.createElement("div",{className:"button-wrapper button-wrapper--contact-info"},i.a.createElement("div",{className:"email-copier-container"},i.a.createElement("input",{className:"email-copier-container__text",type:"email",value:"naguerr2@uci.edu",readonly:!0}),i.a.createElement("a",{className:"email-copier-container__icon",onClick:()=>navigator.clipboard.writeText("naguerr2@uci.edu")},i.a.createElement("i",{className:"far fa-copy"}))),i.a.createElement("a",{className:"link-button",href:"https://github.com/AnarchoBooleanism"},i.a.createElement("i",{className:"fab fa-github"})," GitHub"),i.a.createElement("a",{className:"link-button",href:"https://www.linkedin.com/in/nathan-guerrero-89a41919b/"},i.a.createElement("i",{className:"fab fa-linkedin-in"})," LinkedIn"),i.a.createElement("a",{className:"link-button",href:"https://uci.joinhandshake.com/users/33173069"},"Handshake"))))))));t(28);var N=()=>i.a.createElement("div",{className:"footer-container"},i.a.createElement("div",{className:"view-area footer-container__content"},i.a.createElement("h2",null,i.a.createElement("a",{href:"https://reactjs.org/",className:"react-link"},i.a.createElement("i",{className:"fab fa-react react-link__icon"}),"Made with React!")," Copyright: Nathan Guerrero, 2024.")));var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement("div",{id:"about",id:"main-content"},i.a.createElement(m,null)),i.a.createElement("div",{id:"works"},i.a.createElement(g,null)),i.a.createElement("div",{id:"contact"},i.a.createElement(k,null)),i.a.createElement(N,null))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ab9e8504.chunk.js.map
(this.webpackJsonpportfolio_v2=this.webpackJsonpportfolio_v2||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(26),c=n.n(r),s=(n(87),n(88),n(13)),o=n(159),l=n(163),j=n(161),d=n(164),u=n(162),b=n(73),x=n(72),m=n.n(x),h=n(160),f=n(157),p=n(155),O=n(2),g=["About","Projects","Contact","Resume"],v=function(e){e.currentPage;var t=e.handlePageChange,n=a.useState(null),i=Object(s.a)(n,2),r=i[0],c=i[1],x=function(){c(null)};return Object(O.jsx)(o.a,{position:"fixed",sx:{backgroundColor:"rgba(69,71,86, 0.726)",backdropFilter:"blur(5px)",height:"4em",display:"flex",justifyContent:"center",alignItems:"start"},children:Object(O.jsx)(h.a,{maxWidth:"xl",className:"headerContainer",sx:{ml:0},children:Object(O.jsxs)(j.a,{disableGutters:!0,children:[Object(O.jsx)(u.a,{onClick:function(){return t("Home")},className:"nameLogo",variant:"h3",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"SeanM"}),Object(O.jsxs)(l.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(O.jsx)(d.a,{size:"large",className:"hamburgerMenu","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(O.jsx)(m.a,{})}),Object(O.jsx)(b.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:x,sx:{display:{xs:"block",md:"none"}},children:g.map((function(e){return Object(O.jsx)(p.a,{onClick:x,children:Object(O.jsx)(u.a,{textAlign:"left",onClick:function(){return t(e)},children:e})},e)}))})]}),Object(O.jsx)(u.a,{onClick:function(){return t("Home")},variant:"h6",className:"mobileNameLogo",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",sm:"flex",md:"none"}},children:"SeanM"}),Object(O.jsx)(l.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:g.map((function(e){return Object(O.jsx)(f.a,{onClick:function(){return t(e)},sx:{my:2,color:"rgb(206, 89, 104)",display:"block",fontSize:"1.5em"},children:e},e)}))})]})})})},y=(n(97),n.p+"static/media/campfire-pixel.f9b644ec.gif"),C=function(){return Object(O.jsxs)("div",{className:"greeting",children:[Object(O.jsxs)("h1",{children:["Greetings!",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Stay Awhile!"]}),Object(O.jsx)("img",{src:y})]})},k=n.p+"static/media/self_pic.b34f3056.jpg",N=(n(98),function(){return Object(O.jsxs)("div",{className:"about",children:[Object(O.jsx)("div",{className:"aboutText",children:"Hi there! My name is Sean and I'm a web developer! I have spent most of my life working in various tech fields, but gained a passion for web developement and programming over the years so here we are! I am very interested in website design and crafting functional yet beautiful user experiences. "}),Object(O.jsx)("img",{className:"aboutPic",src:k,alt:"Self portrait of me"}),Object(O.jsx)("div",{className:"aboutIcons"})]})}),w=(n(99),function(){return Object(O.jsx)("div",{className:"projects",children:"Projects go here!"})}),S=n(158),P=n(166),W=n(167),I=n(153),M=function(){return Object(O.jsxs)("div",{className:"Contact",children:[Object(O.jsx)(u.a,{gutterBottom:!0,variant:"h3",align:"center"}),Object(O.jsx)(S.a,{children:Object(O.jsx)(P.a,{style:{maxWidth:450,padding:"20px 5px",margin:"0 auto"},children:Object(O.jsxs)(W.a,{children:[Object(O.jsx)(u.a,{gutterBottom:!0,variant:"h5",children:"Contact Me!"}),Object(O.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"Fill out the form and I will get back to you as soon as possible!"}),Object(O.jsx)("form",{children:Object(O.jsxs)(S.a,{container:!0,spacing:1,children:[Object(O.jsx)(S.a,{xs:12,sm:6,item:!0,children:Object(O.jsx)(I.a,{placeholder:"Enter first name",label:"First Name",variant:"outlined",fullWidth:!0,required:!0})}),Object(O.jsx)(S.a,{xs:12,sm:6,item:!0,children:Object(O.jsx)(I.a,{placeholder:"Enter last name",label:"Last Name",variant:"outlined",fullWidth:!0,required:!0})}),Object(O.jsx)(S.a,{item:!0,xs:12,children:Object(O.jsx)(I.a,{type:"email",placeholder:"Enter email",label:"Email",variant:"outlined",fullWidth:!0,required:!0})}),Object(O.jsx)(S.a,{item:!0,xs:12,children:Object(O.jsx)(I.a,{type:"number",placeholder:"Enter phone number",label:"Phone",variant:"outlined",fullWidth:!0,required:!0})}),Object(O.jsx)(S.a,{item:!0,xs:12,children:Object(O.jsx)(I.a,{label:"Message",multiline:!0,rows:4,placeholder:"Type your message here",variant:"outlined",fullWidth:!0,required:!0})}),Object(O.jsx)(S.a,{item:!0,xs:12,children:Object(O.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Submit"})})]})})]})})})]})},E=(n(100),function(){return Object(O.jsx)(M,{})}),F=n.p+"static/media/Resume.304dc3a2.pdf",B=(n(101),function(){return Object(O.jsx)("div",{className:"resume",children:Object(O.jsx)("iframe",{src:F,width:"56%",height:"950em"})})});function q(){var e=Object(a.useState)("Home"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{currentPage:n,handlePageChange:function(e){return i(e)}}),"Home"===n?Object(O.jsx)(C,{}):"About"===n?Object(O.jsx)(N,{}):"Projects"===n?Object(O.jsx)(w,{}):"Contact"===n?Object(O.jsx)(E,{}):"Resume"===n?Object(O.jsx)(B,{}):void 0]})}var G=function(){return Object(O.jsx)(q,{})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root")),H()},87:function(e,t,n){},88:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.d7309a1f.chunk.js.map
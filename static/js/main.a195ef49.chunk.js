(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(7),r=n.n(o),s=(n(12),n(2)),a=n(3),i=n(5),u=n(4),l=(n(13),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={clocks:{normal:[12,3,6,9]}},c}return Object(a.a)(n,[{key:"render",value:function(){return this.state.clocks.normal.map((function(e,t){return Object(l.jsx)("div",{className:"main--numbers",children:e},t)}))}}]),n}(c.PureComponent),m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(s.a)(this,n),c=t.call(this,e);return c.state={count:setInterval((function(){document.querySelector(".seconds--pointer").style.transform="rotate("+6*(new Date).getSeconds()+"deg) ",document.querySelector(".minutes--pointer").style.transform="rotate("+6*(new Date).getMinutes()+"deg) ",document.querySelector(".hours--pointer").style.transform="rotate("+(30*(new Date).getHours()+(new Date).getMinutes()/2)+"deg) "}),c.debug?1e3:50)},c}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"clock-container",children:[Object(l.jsxs)("span",{children:["Real-time clock made by"," ",Object(l.jsx)("a",{href:"https://t04-hendrick.vigion.pt/",children:"@dasilvadeveloper"})]}),Object(l.jsxs)("div",{className:"clock",children:[Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",children:Object(l.jsx)("source",{src:"/clock/clock_bg.mp4",type:"video/mp4"})}),Object(l.jsx)("div",{className:"blur"}),Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"hours--pointer"}),Object(l.jsx)("div",{className:"minutes--pointer"}),Object(l.jsx)("div",{className:"seconds--pointer"})]})]})}},{key:"componentDidMount",value:function(){document.getElementById("myVideo").addEventListener("loadedmetadata",(function(){this.currentTime=4e3}),!1)}}]),n}(c.PureComponent);r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a195ef49.chunk.js.map
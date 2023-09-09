"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[223],{2756:function(e,s,r){var t=r(3676),n=r(9806),a=r(1632),o=r(184);s.Z=function(){return(0,o.jsx)("footer",{className:t.Z.footerMenu,children:(0,o.jsxs)("nav",{className:t.Z.navMenu,children:[(0,o.jsx)("div",{className:t.Z.active,children:(0,o.jsxs)("a",{href:"/",className:t.Z.navMenuA,id:t.Z.navMenuAActive,children:[(0,o.jsx)(n.G,{icon:a.jNR,className:"fa-2x"}),"Dashboard"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("a",{href:"/order",className:t.Z.navMenuA,children:[(0,o.jsx)(n.G,{icon:a.yYj,className:"fa-2x"}),"Orders"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("a",{href:"menu",className:t.Z.navMenuA,children:[(0,o.jsx)(n.G,{icon:a.FU$,className:"fa-2x"}),"Menu"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("a",{href:"/account",className:t.Z.navMenuA,children:[(0,o.jsx)(n.G,{icon:a.ILF,className:"fa-2x"}),"Account"]})})]})})}},7732:function(e,s,r){var t=r(3676),n=r(9806),a=r(1632),o=r(184);s.Z=function(){return(0,o.jsxs)("header",{className:t.Z.topHeaders,children:[(0,o.jsxs)("div",{className:t.Z.appControls,children:[(0,o.jsxs)("div",{className:t.Z.circles,children:[(0,o.jsx)("div",{className:t.Z.circles1}),(0,o.jsx)("div",{className:t.Z.circles2}),(0,o.jsx)("div",{className:t.Z.circles3,id:t.Z.headerControlsActive})]}),(0,o.jsxs)("div",{className:t.Z.circlesText,children:[(0,o.jsx)("p",{className:t.Z.circlesText1,children:"closed"}),(0,o.jsx)("p",{className:t.Z.circlesText2,children:"Buzy"}),(0,o.jsx)("p",{className:t.Z.circlesText3,children:"Open"})]})]}),(0,o.jsxs)("div",{className:t.Z.payout,children:[(0,o.jsx)("p",{className:t.Z.payoutP,children:"Payout"}),(0,o.jsx)("p",{className:t.Z.payoutP,children:"0.00 OMR"})]}),(0,o.jsxs)("div",{className:t.Z.belliconDiv,children:[(0,o.jsx)("button",{children:(0,o.jsx)(n.G,{icon:a.qmU,className:"fa-2x"})}),(0,o.jsx)("button",{children:(0,o.jsx)(n.G,{icon:a.pL1,className:"fa-2x"})})]}),(0,o.jsxs)("div",{className:t.Z.headerSearchDiv,children:[(0,o.jsx)("div",{className:t.Z.headerSearchButtonDiv,children:(0,o.jsx)("button",{className:t.Z.headerSearchButton,children:"EN"})}),(0,o.jsxs)("div",{className:t.Z.headerSearchInputDiv,children:[(0,o.jsx)(n.G,{icon:a.Y$T,className:t.Z.search}),(0,o.jsx)("input",{className:t.Z.headerSearchInput,type:"search",placeholder:"Search"})]})]})]})}},223:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var t=r(4165),n=r(5861),a=r(9439),o=r(2791),c=r(2756),i=r(7732),d=r(3676),l=r(184),u=function(e){var s=e.name,r=void 0===s?"":s,t=e.state,n=e.clicked;return(0,l.jsxs)("div",{className:d.Z.buttonProgressHolder,children:[(0,l.jsx)("button",{className:"".concat(d.Z.ordersButtonsAB," ").concat(t&&d.Z.ordersButtonsActive),onClick:function(e){n(e.target.innerHTML)},children:r}),(0,l.jsx)("span",{className:d.Z.buttonsProgress,children:"4"})]})},_=r(2426),h=r.n(_),v=function(e){var s=h()(e.time).fromNow();return(0,l.jsxs)("div",{className:d.Z.ordersDetails,children:[(0,l.jsx)("div",{className:d.Z.ordersDetailsIcons}),(0,l.jsxs)("div",{className:d.Z.ordersDetailsContent,children:[(0,l.jsxs)("div",{className:d.Z.ordersDetailsContentFirstDiv,children:[(0,l.jsxs)("h1",{children:["Order #",e.id]}),(0,l.jsxs)("p",{className:d.Z.ordersDetailsContentFirstDivP,children:[e.items," items"]}),(0,l.jsx)("p",{className:d.Z.ordersDetailsContentFirstDivP,children:s})]}),(0,l.jsxs)("div",{className:d.Z.ordersDetailsContentButtons,children:[(0,l.jsx)("button",{className:d.Z.ordersDetailsContentButtonsB,children:"23"}),(0,l.jsx)("button",{className:d.Z.ordersDetailsContentButtonsB,children:"cash"})]})]})]})},x=r(9434),j=function(){return function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5050/api/v1/order",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:"success"===(n=e.sent).status&&s({type:"order/setorder",payload:n.orders});case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()},m=function(){var e=(0,x.I0)(),s=(0,x.v9)((function(e){return e.order})),r=(0,o.useState)(0),c=(0,a.Z)(r,2),i=c[0],_=c[1];function h(s){_({"New Orders":0,"In Progress":1,"Order Ready":2,"In Delivery":3}[s]),e({type:"order/setfilter",payload:s}),e(j())}var m=(0,x.v9)((function(e){return e.order.selectedFilter})),p=s.order.filter((function(e){return"New Orders"===m?0===e.state:"In Progress"===m?1===e.state:"Order Ready"===m?2===e.state:"In Delivery"===m?3===e.state:void 0}));return(0,o.useEffect)((function(){var s=function(){var s=(0,n.Z)((0,t.Z)().mark((function s(){return(0,t.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e(j());case 1:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();s()}),[]),(0,l.jsx)("div",{className:d.Z.container,children:(0,l.jsxs)("div",{className:d.Z.main,children:[(0,l.jsxs)("div",{className:d.Z.ordersButtons,children:[(0,l.jsx)(u,{name:"New Orders",clicked:h,state:0===i}),(0,l.jsx)(u,{name:"In Progress",clicked:h,state:1===i}),(0,l.jsx)(u,{name:"Order Ready",clicked:h,state:2===i}),(0,l.jsx)(u,{name:"In Delivery",clicked:h,state:3===i})]}),p.length>0?p.map((function(e){return(0,l.jsx)(v,{id:e._id,items:e.orderitems,time:e.updatedAt},e._id)})):(0,l.jsx)("p",{children:"No orders to display."})]})})},p=function(){var e=(0,o.useState)(!1),s=(0,a.Z)(e,2),r=s[0],d=s[1],u=localStorage.getItem("token");return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5050/api/v1/util/verify",{method:"POST",headers:{Authorization:u,"Content-Type":"application/json"}});case 2:if(!(s=e.sent).ok){e.next=8;break}return e.next=6,s.json();case 6:"success"===e.sent.massege&&d(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u]),!1===r?(0,l.jsx)("div",{children:"Invalid Token. Please Try Logging In Again."}):(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{}),(0,l.jsx)(m,{}),(0,l.jsx)(c.Z,{})]})}},3676:function(e,s){s.Z={container:"orders_container__L9zkU",main:"orders_main__cI113",topHeaders:"orders_topHeaders__B2AlI",appControls:"orders_appControls__Ff3E1",circles:"orders_circles__7MaHy",circles1:"orders_circles1__lWVEE",circles2:"orders_circles2__2TOUz",circles3:"orders_circles3__5SJB3",headerControlsActive:"orders_headerControlsActive__5jDro",circlesText:"orders_circlesText__iBTEm",payout:"orders_payout__nNycK",payoutP:"orders_payoutP__gRFtV",headerSearchDiv:"orders_headerSearchDiv__tlxAn",headerSearchButton:"orders_headerSearchButton__pfJHp",belliconDiv:"orders_belliconDiv__i6+2Q",search:"orders_search__f3px8",headerSearchInput:"orders_headerSearchInput__VWjdb",ordersButtons:"orders_ordersButtons__zvhl0",ordersButtonsA:"orders_ordersButtonsA__zUQpz",ordersButtonsAB:"orders_ordersButtonsAB__HQZQY",buttonsProgress:"orders_buttonsProgress__Cu+xr",buttonProgressHolder:"orders_buttonProgressHolder__BVKuj",ordersButtonsActive:"orders_ordersButtonsActive__VT04B",ordersDetails:"orders_ordersDetails__tLn8v",ordersDetailsIcons:"orders_ordersDetailsIcons__Qb6-1",ordersDetailsContent:"orders_ordersDetailsContent__BdZzP",ordersDetailsContentFirstDiv:"orders_ordersDetailsContentFirstDiv__0AIxj",ordersDetailsContentFirstDivP:"orders_ordersDetailsContentFirstDivP__xQPs4",ordersDetailsContentButtons:"orders_ordersDetailsContentButtons__CCAxH",ordersDetailsContentButtonsB:"orders_ordersDetailsContentButtonsB__nsekQ",ordersDetailsContentButtonsB1:"orders_ordersDetailsContentButtonsB1__29Ywh",ordersDetailsContentButtonsB2:"orders_ordersDetailsContentButtonsB2__LktqF",footerMenu:"orders_footerMenu__qYF3-",navMenu:"orders_navMenu__ji6Xw",navIcons:"orders_navIcons__yIoAY",navMenuA:"orders_navMenuA__yB9m-",navMenuAActive:"orders_navMenuAActive__28DSP"}}}]);
//# sourceMappingURL=223.24f70604.chunk.js.map
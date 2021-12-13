(this["webpackJsonpair-mate"]=this["webpackJsonpair-mate"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"b":"https://api.airvisual.com/v2/nearest_city","a":"https://api.airvisual.com/v2/city","c":"https://www.iqair.com/assets/aqi","d":"https://www.airvisual.com/images"}')},26:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),r=c.n(n),i=(c(26),c(9)),l=(c(27),c(0));function o(){return Object(l.jsx)("footer",{className:"footer mt-auto py-3 bg-dark",children:Object(l.jsxs)("div",{className:"container d-flex flex-column",children:[Object(l.jsx)("span",{className:"text-white-50",children:"Air Mate \xa9 2021"}),Object(l.jsxs)("small",{className:"text-muted",children:["Designed & Developed by",Object(l.jsxs)("a",{href:"https://www.linkedin.com/in/mjunaidaslam/",className:"text-decoration-none text-white-50",children:[" ","Junaid Aslam"]})]})]})})}var d=c(4);function j(){return Object(l.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:Object(l.jsxs)("div",{className:"container-fluid py-5",children:[Object(l.jsx)("h1",{className:"display-5 fw-bold",children:"Air Mate"}),Object(l.jsx)("p",{className:"lead",children:"Search the Air Quality in your city"})]})})}var b=c(5),m=c.n(b);var u={init:function(){},log:function(e){console.error(e)}};m.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(u.log(e),i.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var h={get:m.a.get,post:m.a.post,put:m.a.put,delete:m.a.delete},x=c(12),O=c(2);var f=function(e){e.ts;var t=e.tp,c=e.pr,s=e.hu,a=e.ws,n=e.wd,r=e.ic,i="".concat(O.d,"/").concat(r,".png");return"04n"===r&&(i="".concat(O.d,"/04d.png")),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"rounded shadow bg-white rounded pb-3",children:[Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-center py-3 mb-3",children:[Object(l.jsx)("img",{src:i,className:"border-0 mx-2 img-fluid",width:"100",height:"100",alt:"..."}),Object(l.jsxs)("span",{className:"display-6",children:[t," \xb0C"]})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Atmospheric pressure"}),Object(l.jsxs)("small",{children:[c," hPa"]})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Humidity"}),Object(l.jsxs)("small",{children:[s," %"]})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Wind speed"}),Object(l.jsxs)("small",{children:[a," m/s"]})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Wind direction"}),Object(l.jsxs)("small",{children:[n,"\xb0"]})]})]})})};var v=function(e){e.ts;var t=e.aqius,c=e.mainus,s=e.aqicn,a=e.maincn,n={p2:"ugm3",p1:"ugm3",o3:"ppb",n2:"ppb",s2:"ppb",co:"ppm"},r="",i={},o="";return t>0&&t<=50?(r="Good",i={backgroundColor:"#D6F1C6"},o="".concat(O.c,"/ic-face-green.svg")):t>50&&t<=100?(r="Moderate",i={backgroundColor:"#FFFDC3"},o="".concat(O.c,"/ic-face-yellow.svg")):t>100&&t<=150?(r="Unhealthy for sensitive groups",i={backgroundColor:"#FFDA83"},o="".concat(O.c,"/ic-face-orange.svg")):t>150&&t<=200?(r="Unhealthy",i={backgroundColor:"#FFA318"},o="".concat(O.c,"/ic-face-red.svg")):t>200&&t<=300?(r="Very Unhealthy",i={backgroundColor:"#FF1F24"},o="".concat(O.c,"/ic-face-purple.svg")):t>300&&t<=500&&(r="Hazardous",i={backgroundColor:"#801738"},o="".concat(O.c,"/ic-face-maroon.svg")),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"rounded shadow bg-white rounded pb-3",children:[Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-center py-3 mb-3",style:i,children:[Object(l.jsx)("img",{src:o,className:"border-0 mx-2 img-fluid",width:"100",height:"100",alt:"..."}),Object(l.jsx)("p",{className:"fs-3 text-secondary fw-light text-wrap",children:r})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"AQI US"}),Object(l.jsx)("small",{children:t})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"AQI China"}),Object(l.jsx)("small",{children:s})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Main pollutant for US AQI"}),Object(l.jsxs)("small",{children:[c," ",n[c]]})]}),Object(l.jsxs)("div",{className:"mt-2 text-muted",children:[Object(l.jsx)("h1",{className:"h6 mb-0 mt-2",children:"Main pollutant for Chinese AQI"}),Object(l.jsxs)("small",{children:[a," ",n[a]]})]})]})})};var p=function(e){var t=e.apiData,c=e.city,s=e.state,a=e.country,n=t.weather,r=t.pollution;return Object(l.jsx)("div",{className:"card border-0",children:Object(l.jsxs)("div",{className:"card-body py-3",children:[Object(l.jsx)("h4",{className:"card-title display-6",children:c}),Object(l.jsxs)("h5",{className:"card-title mb-5 fw-light fs-2",children:[s,", ",a]}),Object(l.jsxs)("div",{className:"row",children:[r.ts&&Object(l.jsx)("div",{className:"col-md-6 mb-3",children:Object(l.jsx)(v,Object(x.a)({},r))}),n.ts&&Object(l.jsx)("div",{className:"col-md-6 mb-3",children:Object(l.jsx)(f,Object(x.a)({},n))})]})]})})};var g=function(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(d.a)(n,2),i=r[0],o=r[1],j=Object(s.useState)(!0),b=Object(d.a)(j,2),m=b[0],u=b[1],x=Object(s.useRef)(),f=JSON.parse(localStorage.getItem("airData"));function v(e,t,c){a(e),o(t),u(c)}return Object(s.useEffect)((function(){var e=setTimeout((function(){!0===m&&(f&&!function(){var e=new Date,t=new Date(f.expDateTime);if(e>t)return!0;return!1}()?v(f.data,"",!1):h.get(O.b+"?key=".concat("1b0ced70-97e7-4d79-b298-16333c7032c1")).then((function(e){var t=e.data.data;!function(e){var t=new Date;t.setMinutes(t.getMinutes()+10),localStorage.setItem("airData",JSON.stringify({data:e,expDateTime:t.toLocaleString()}))}(t),v(t,"",!1)})).catch((function(e){var t;v({},null===(t=e.response)||void 0===t?void 0:t.status,!1)})))}),500);return x&&x.current&&x.current.scrollIntoView({alignToTop:!0}),function(){return clearTimeout(e)}}),[m]),!0===m?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"row justify-content-center py-5",children:Object(l.jsxs)("div",{className:"col-md-10",children:[Object(l.jsx)("p",{className:"mb-3 fw-light fs-2",children:"Fetching data based on your ip address..."}),Object(l.jsx)("div",{className:"spinner-border",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"row justify-content-center py-5",children:Object(l.jsx)("div",{className:"col-md-8",children:""===i?c.current&&Object(l.jsx)("div",{ref:x,children:Object(l.jsx)(p,{apiData:c.current,city:c.city,state:c.state,country:c.country})}):Object(l.jsx)("div",{className:"alert alert-warning mt-5",role:"alert",children:Object(l.jsx)("strong",{children:" No data is found against your ip."})})})})})};var N=function(e){var t=e.value,c=e.onChange,s=e.onSubmit;return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-8 mx-auto my-auto",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s()},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"textCityName",className:"form-label display-6",children:"City Name"}),Object(l.jsx)("input",{className:"form-control form-control-lg",id:"textCityName",placeholder:"Los Angeles",value:t,onChange:function(e){return c(e.currentTarget.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})})})};var y=function(e){var t=e.links,c=e.onLinkClick;return 0===t.length?Object(l.jsxs)("div",{className:"alert alert-warning d-flex align-items-center",role:"alert",children:[Object(l.jsx)("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Warning:",children:Object(l.jsx)("use",{xlinkHref:"http://www.w3.org/2000/svg"})}),Object(l.jsx)("div",{children:"Sorry we could not find this city."})]}):Object(l.jsxs)("div",{className:"mt-5",children:[t.length>1&&Object(l.jsx)("span",{children:"Looks like there are multiple cities against your entry..."}),Object(l.jsx)("div",{className:"list-group mt-5",children:0!==t.length&&t.map((function(e,t){return Object(l.jsxs)("button",{type:"button",className:"list-group-item list-group-item-action list-group-item-primary",style:{cursor:"pointer"},onClick:function(){return c(e)},children:[e.city,", ",e.state,", ",e.country]},t)}))})]})},w=c(21),k=c.n(w);var C=function(e){var t=e.onGoBackClick,c=Object(s.useState)(""),a=Object(d.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],m=Object(s.useState)({}),u=Object(d.a)(m,2),x=u[0],f=u[1],v=Object(s.useState)({}),g=Object(d.a)(v,2),w=g[0],C=g[1],S=Object(s.useState)(""),F=Object(d.a)(S,2),D=F[0],T=F[1],A=Object(s.useState)(!1),I=Object(d.a)(A,2),L=I[0],M=I[1],J=Object(s.useRef)(),P=Object(s.useRef)();Object(s.useEffect)((function(){J&&J.current&&J.current.scrollIntoView({alignToTop:!0}),P&&P.current&&P.current.scrollIntoView({alignToTop:!0})}),[j,w,D,L]);var Q=function(e){var t=[];return k.a.getCitiesByName(e).forEach((function(c){var s={city:e};s.state=c.state,s.country=c.country.name,t.push(s)})),t};return!0===L?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"row py-5",children:Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{className:"mb-3 fw-light fs-2",children:"Fetching data..."}),Object(l.jsx)("div",{className:"spinner-border",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"row justify-content-center py-5",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)(N,{value:n,onChange:r,onSubmit:function(){f({}),C(""),T("");var e=Q(n);b(e)}}),0!==j.length&&Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-md-10",ref:J,children:Object(l.jsx)(y,{links:j,onLinkClick:function(e){M(!0),f(e),C({});var t=setTimeout((function(){!function(e){h.get(O.a+"?city=".concat(e.city,"&state=").concat(e.state,"&country=").concat(e.country,"&key=").concat("1b0ced70-97e7-4d79-b298-16333c7032c1")).then((function(e){var t=e.data.data.current;C(t),T("")})).catch((function(e){var t,c=null===(t=e.response)||void 0===t?void 0:t.status;T(c),C({})})).then((function(){M(!1)}))}(e)}),500);return function(){clearTimeout(t)}}})})})]}),""===D?w.weather&&Object(l.jsx)("div",{className:"col-md-6",ref:P,children:Object(l.jsx)(p,{apiData:w,city:x.city,state:x.state,country:x.country})}):Object(l.jsx)("div",{className:"d-inline-flex justify-content-center",children:Object(l.jsx)("div",{className:"alert alert-warning mt-5",role:"alert",children:Object(l.jsxs)("strong",{children:[" ","No data is found against the selected location (",x.city,", ",x.state,","," ",x.country,")."]})})})]}),Object(l.jsx)("div",{className:"row justify-content-center pb-5",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("button",{className:"btn btn-lg btn-secondary",onClick:function(){return t(!1)},children:"Go back to IP address based result?"})})})]})};var S=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){}),[c]),Object(l.jsx)("main",{className:"flex-shrink-0",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(j,{}),!c&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsx)("div",{className:"row pb-5 my-5",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("button",{className:"btn btn-lg btn-secondary",onClick:function(){a(!0)},children:"Search by city name?"})})})]}),c&&Object(l.jsx)(C,{onGoBackClick:function(e){a(e)}})]})})};var F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{}),Object(l.jsx)(S,{}),Object(l.jsx)(o,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(52).config(),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.body),D()}},[[56,1,2]]]);
//# sourceMappingURL=main.8fe762ff.chunk.js.map
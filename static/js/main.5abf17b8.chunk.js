(this["webpackJsonpwebrtc-chat"]=this["webpackJsonpwebrtc-chat"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),o=n(7),a=n.n(o),s=n(6),u=n.n(s),j=n(8),d=n(9),l=n(10),f=n(4),b=null;var h=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useState)([]),o=Object(f.a)(i,2),a=o[0],s=o[1],h=Object(r.useState)(void 0),O=Object(f.a)(h,2),p=O[0],v=O[1],x=Object(r.useRef)(),g=Object(r.useState)(""),m=Object(f.a)(g,2),C=m[0],w=m[1],R=Object(r.useState)(""),k=Object(f.a)(R,2),y=k[0],S=k[1],D=function(t){var c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.stunprotocol.org"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]});b.getTracks().forEach((function(e){return c.addTrack(e,b)})),t&&(c.onnegotiationneeded=function(){c.createOffer().then((function(e){return c.setLocalDescription(e)})).then((function(){J("offer","paste it into the target user",JSON.stringify(c.localDescription))})).catch((function(e){return console.log(e)}))}),c.ontrack=function(e){return n.current.srcObject=e.streams[0]},c.onicecandidate=function(e){e.candidate&&s((function(t){return[].concat(Object(l.a)(t),[e.candidate])}))},e.current=c},J=function(e,t,n){x.current.value=n,x.current.select(),document.execCommand("copy"),alert("Copied ".concat(e," to your clipboard\n").concat(t))};function N(){return(N=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 3:b=e.sent,t.current.srcObject=b,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(e){N.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("video",{ref:t,height:"400px",width:"400px",autoPlay:"true"}),Object(c.jsx)("video",{ref:n,height:"400px",width:"400px",autoPlay:"true"}),Object(c.jsx)("br",{}),void 0===p&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){v(!0),D(!0)},children:"Make offer"}),Object(c.jsx)("button",{onClick:function(){v(!1),D(!1)},children:"Recieve offer"})]}),void 0!==p&&(p?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Recieve answer"}),Object(c.jsx)("input",{value:C,onChange:function(e){return w(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return function(t){var n=new RTCSessionDescription(t);e.current.setRemoteDescription(n).catch((function(e){return console.log(e)}))}(JSON.parse(C))},children:"Recieve answer"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Recieve offer"}),Object(c.jsx)("input",{value:C,onChange:function(e){return w(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return function(t){var n=new RTCSessionDescription(t);e.current.setRemoteDescription(n).then((function(){return e.current.createAnswer()})).then((function(t){return e.current.setLocalDescription(t)})).then((function(){J("answer","paste the answer into the initiator",JSON.stringify(e.current.localDescription))}))}(JSON.parse(C))},children:"Recieve Offer"})]})),void 0!==p&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Recieve ice candidates list"}),Object(c.jsx)("input",{value:y,onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return function(t){var n,c=Object(d.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value;e.current.addIceCandidate(new RTCIceCandidate(r)).catch((function(e){return console.log(e)}))}}catch(i){c.e(i)}finally{c.f()}}(JSON.parse(y))},children:"handle ice candidates"})]}),Object(c.jsxs)("p",{children:["Ice candidates, paste them into the other user",Object(c.jsx)("button",{onClick:function(){return J("ice-candidates","",JSON.stringify(a))},children:"Copy"})]}),Object(c.jsxs)("p",{children:[" ",JSON.stringify(a)," "]}),Object(c.jsx)("p",{children:"Text to copy"}),Object(c.jsx)("input",{ref:x})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5abf17b8.chunk.js.map
var j=Object.defineProperty,Z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var $=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&$(e,n,t[n]);if(q)for(var n of q(t))Y.call(t,n)&&$(e,n,t[n]);return e},T=(e,t)=>Z(e,H(t));import{i as J,c as A}from"./vendor.2ac2f24a.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};X();const I=.1,R={r:.299+I,g:.587+I*-.5,b:.114+I*-.5};function K(e){let t=e.data,n=1/0,i=0,o=0;for(let a=0;a<t.length;a+=4){let u=t[a]*R.r+t[a+1]*R.g+t[a+2]*R.b;n=Math.min(n,u),i=Math.max(i,u),o+=u}o=Math.round(o/(t.length/4)),n+=32,i-=32;const r=255/(i-n);for(let a=0;a<t.length;a+=4){let u=t[a]*R.r+t[a+1]*R.g+t[a+2]*R.b;t[a]=Math.round(u*r)-n,t[a+1]=Math.round(u*r)-n,t[a+2]=Math.round(u*r)-n}return{canvasData:e,averageLightness:o}}function O(e,t,n){let i=0;const o=e[0],r=t[0]-e[0],a=e[1],u=t[1]-e[1],h=Math.max(Math.abs(r),Math.abs(u));for(let c=0;c<h;c++){const d=Math.round(o+r/h*c),m=Math.round(a+u/h*c);i+=n[d][m]}return Math.round(i/h)}function Q(e,{strokeWidth:t,size:n}){return`<svg viewBox="0 0 ${n[0]} ${n[1]}" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="${t}">
${e.map(i=>`<line x1="${i[0][0]}" y1="${i[0][1]}" x2="${i[1][0]}" y2="${i[1][1]}"/>`).join(`
`)}
</svg>
  `}function V(e,{strokeWidth:t,size:n}){return`<svg viewBox="0 0 ${n[0]} ${n[1]}" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${e.map(i=>i[0].join(",")).join(" ")}" fill="none" stroke="black" stroke-width="${t}"/>
</svg>
  `}function ee(e,t){return console.warn(">generateSvg",t),t.singleLine?V(e,t):Q(e,t)}function N(e,{smoothing:t=.15,strokeWidth:n,size:i}){const o=e.map(c=>c[0]),r=(c,d)=>{const m=d[0]-c[0],g=d[1]-c[1];return{length:Math.sqrt(Math.pow(m,2)+Math.pow(g,2)),angle:Math.atan2(g,m)}},a=(c,d,m,g)=>{const l=r(d||c,m||c),w=l.angle+(g?Math.PI:0),S=l.length*t,y=c[0]+Math.cos(w)*S,M=c[1]+Math.sin(w)*S;return[y,M]},u=(c,d,m)=>{const g=a(m[d-1],m[d-2],c),f=a(c,m[d-1],m[d+1],!0);return`C ${g[0]},${g[1]} ${f[0]},${f[1]} ${c[0]},${c[1]}`},h=(c,d)=>`<path d="${c.reduce((g,f,E,l)=>E===0?`M ${f[0]},${f[1]}`:`${g} ${d(f,E,l)}`,"")}" fill="none" stroke="black" stroke-width="${n}" />`;return`<svg viewBox="0 0 ${i[0]} ${i[1]}" xmlns="http://www.w3.org/2000/svg" stroke="black">
    ${h(o,u)}
  </svg>
  `}function te(e,t){return Math.min(e,t)+Math.floor(Math.random()*Math.abs(e-t))}function G(e,t){let n;return function(){clearTimeout(n);let i=arguments;n=setTimeout(function(){e.apply(this,i)},t||1)}}function C(e,t,n={}){const{color:i="#0008",close:o=!1,shiftY:r=0}=n;e.beginPath(),e.lineWidth=23,e.moveTo(t[0]._x,t[0]._y+r);for(const a of t)e.lineTo(a._x,a._y+r);o&&e.lineTo(t[0]._x,t[0]._y+r),e.strokeStyle=i,e.stroke()}async function ne(e,t){await faceapi.nets.ssdMobilenetv1.loadFromUri("weights"),await faceapi.nets.faceLandmark68TinyNet.loadFromUri("weights");const n=await faceapi.detectSingleFace(e).withFaceLandmarks(!0);if(!n)return;const i=n.landmarks.getRightEye(),o=n.landmarks.getLeftEye(),r=n.landmarks.getJawOutline();C(t,i,{close:!0}),C(t,o,{close:!0}),C(t,r.slice(2,-2),{color:"#0004",shiftY:10})}function x(e){e.beginPath();function t(o,r,a={}){const{color:u="#000",width:h=1}=a;e.beginPath(),e.lineWidth=h,e.moveTo(o[0],o[1]),e.lineTo(r[0],r[1]),e.strokeStyle=u,e.stroke()}function n(o,r){e.moveTo(o[0],o[1]),e.lineTo(r[0],r[1])}function i(o={}){const{color:r="#000",width:a=1}=o;e.lineWidth=a,e.strokeStyle=r,e.stroke(),e.beginPath()}return{line:t,lineBuffer:n,stroke:i}}const b=1080;window.IMAGE_SRC="./test.jpg";window.CURRENT_DRAWING=new Date().getTime();window.COORDS=[];window.CURRENT_IMAGE_SIZE=[b,b];const U={addColor:"#000",baseLineNumber:3600,faceApi:!1,precisionRange:2[32],singleLine:!0,strokeWidth:1.25,substractionColor:"rgba(255, 255, 255, 30%)",updateSampleRate:100},s=JSON.parse(JSON.stringify(U)),P=document.querySelector("canvas#src"),k=document.querySelector("canvas#draw");k.width=b;k.height=b;const D=k.getContext("2d"),W=x(D),p={matrix:[]};async function F(e){console.log(s);const t=new Date().getTime();window.CURRENT_DRAWING=new Date().getTime(),window.COORDS=[],document.querySelector("#srcimg").style.backgroundImage=`url("${e}")`;const n=await J(e,{size:b,canvas:P,crop:!1}),i=n.width,o=n.height;window.CURRENT_IMAGE_SIZE=[i,o],D.fillStyle="#fff",D.fillRect(0,0,i,o),document.documentElement.style.setProperty("--sizew",`${i/2}px`),document.documentElement.style.setProperty("--sizeh",`${o/2}px`),k.width=i,k.height=o;const{canvasData:r,averageLightness:a}=K(n);if(n.ctx.putImageData(r,0,0),s.faceApi)try{await ne(P,n.ctx)}catch{console.warn("No face detected or FaceAPI not working.")}document.querySelector(".loading").style.display="none";const u=n.ctx;p.matrix=A(u);const h=x(n.ctx);let c=[Math.floor(i/2),Math.floor(o/2)];for(;p.matrix[c[0]][c[1]]===255*3;)c=[Math.floor(Math.random()*i),Math.floor(Math.random()*o)];function d(){let l=c,w=s.singleLine?0:s.precisionRange[0]*2;for(;w--;){let v=[Math.floor(Math.random()*i),Math.floor(Math.random()*o)];p.matrix[l[0]][l[1]]>p.matrix[v[0]][v[1]]&&(l=v)}let S=te(...s.precisionRange),y,M=255;for(;S--;){let v=[Math.floor(Math.random()*i),Math.floor(Math.random()*o)];const _=O(l,v,p.matrix);_<=M&&(M=_,y=v)}M=O(l,y,p.matrix),window.COORDS.push([l,y]),W.lineBuffer(l,y,{color:"#000"}),h.lineBuffer(l,y,{color:s.substractionColor}),c=y}let g=Math.floor(s.baseLineNumber/a*128);function f(l){return new Promise(w=>{const S=new Date().getTime();for(;new Date().getTime()<S+16&&g-- >0;){if(l!==window.CURRENT_DRAWING)return;g%s.updateSampleRate==0&&(h.stroke({color:s.substractionColor,width:s.strokeWidth*1.5}),p.matrix=A(u)),d()}W.stroke({color:s.addColor,width:s.strokeWidth*1}),window.requestAnimationFrame(w)})}async function E(l){for(;g>0&&l===window.CURRENT_DRAWING;)await f(l);if(s.makeSmoothSvg){const w=N(window.COORDS,T(L({},s),{size:window.CURRENT_IMAGE_SIZE,smoothing:document.querySelector("#inputSmoothness").value/100}));document.querySelector(".smooth-svg-container").innerHTML=w}console.log("Lines per second:",s.baseLineNumber/(new Date().getTime()-t)*1e3)}E(window.CURRENT_DRAWING)}function oe(){if(this.files&&this.files[0]){const e=new FileReader;e.addEventListener("load",function(t){window.IMAGE_SRC=t.target.result,F(window.IMAGE_SRC)}),e.readAsDataURL(this.files[0])}}function B(){const e=document.querySelector("input[type='range']#lines").value,t=document.querySelector("input[type='range']#singleline").value,n=document.querySelector("input[type='range']#faceapi").value,i=document.querySelector("input[type='range']#contrast").value,o=document.querySelector("input[type='range']#definition").value,r=document.querySelector("input[type='range']#strokeWidth").value,a=document.querySelector("input[type='range']#makeSmoothSvg").value;s.baseLineNumber=U.baseLineNumber/50*e,s.substractionColor=`rgba(255, 255, 255, ${100-i}%)`,s.precisionRange=[o,o*2],s.singleLine=!!Number(t),s.faceApi=!!Number(n),s.strokeWidth=Number(r),s.makeSmoothSvg=s.singleLine&&!!Number(a),s.faceApi&&(document.querySelector(".loading").style.display="block"),document.querySelector(".experimental--smoth-svg--container").style.display=s.makeSmoothSvg?"block":"none",document.querySelector(".experimental--smoth-svg--container--warning").style.display=s.singleLine?"none":"block",F(window.IMAGE_SRC)}B();document.querySelector("#inp").addEventListener("change",oe);document.querySelector("#inputbutton").addEventListener("click",()=>{document.querySelector("#inp").click()});document.querySelectorAll("input[type='range']").forEach(e=>{e.id==="inputSmoothness"?e.addEventListener("change",G(()=>{const t=N(window.COORDS,T(L({},s),{size:window.CURRENT_IMAGE_SIZE,smoothing:document.querySelector("#inputSmoothness").value/100}));document.querySelector(".smooth-svg-container").innerHTML=t},128)):e.addEventListener("change",G(B,256))});document.querySelector("#download").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.png",e.href=document.querySelector("canvas#draw").toDataURL(),e.click()});document.querySelector("#downloadsvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=ee(window.COORDS,T(L({},s),{size:window.CURRENT_IMAGE_SIZE})),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(n);e.href=i,e.click()});document.querySelector("#downloadSmoothSvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=N(window.COORDS,{CONFIG:s,size:window.CURRENT_IMAGE_SIZE,smoothing:document.querySelector("#inputSmoothness").value/100}),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(n);e.href=i,e.click()});
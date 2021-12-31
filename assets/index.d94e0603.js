var B=Object.defineProperty,j=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&_(e,n,t[n]);if($)for(var n of $(t))Y.call(t,n)&&_(e,n,t[n]);return e},T=(e,t)=>j(e,Z(t));import{i as z,c as A}from"./vendor.2ac2f24a.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};J();const N=.1,R={r:.299+N,g:.587+N*-.5,b:.114+N*-.5};function X(e){let t=e.data,n=1/0,r=0,o=0;for(let a=0;a<t.length;a+=4){let u=t[a]*R.r+t[a+1]*R.g+t[a+2]*R.b;n=Math.min(n,u),r=Math.max(r,u),o+=u}o=Math.round(o/(t.length/4)),n+=32,r-=32;const i=255/(r-n);for(let a=0;a<t.length;a+=4){let u=t[a]*R.r+t[a+1]*R.g+t[a+2]*R.b;t[a]=Math.round(u*i)-n,t[a+1]=Math.round(u*i)-n,t[a+2]=Math.round(u*i)-n}return{canvasData:e,averageLightness:o}}function q(e,t,n){let r=0;const o=e[0],i=t[0]-e[0],a=e[1],u=t[1]-e[1],m=Math.max(Math.abs(i),Math.abs(u));for(let s=0;s<m;s++){const d=Math.round(o+i/m*s),g=Math.round(a+u/m*s);r+=n[d][g]}return Math.round(r/m)}function K(e,{strokeWidth:t,size:n}){return`<svg viewBox="0 0 ${n[0]} ${n[1]}" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="${t}">
${e.map(r=>`<line x1="${r[0][0]}" y1="${r[0][1]}" x2="${r[1][0]}" y2="${r[1][1]}"/>`).join(`
`)}
</svg>
  `}function Q(e,{strokeWidth:t,size:n}){return`<svg viewBox="0 0 ${n[0]} ${n[1]}" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${e.map(r=>r[0].join(",")).join(" ")}" fill="none" stroke="black" stroke-width="${t}"/>
</svg>
  `}function V(e,t){return console.warn(">generateSvg",t),t.singleLine?Q(e,t):K(e,t)}function O(e,{strokeWidth:t,size:n}){const r=.15,o=e.map(s=>s[0]),i=(s,d)=>{const g=d[0]-s[0],h=d[1]-s[1];return{length:Math.sqrt(Math.pow(g,2)+Math.pow(h,2)),angle:Math.atan2(h,g)}},a=(s,d,g,h)=>{const l=i(d||s,g||s),w=l.angle+(h?Math.PI:0),S=l.length*r,p=s[0]+Math.cos(w)*S,M=s[1]+Math.sin(w)*S;return[p,M]},u=(s,d,g)=>{const h=a(g[d-1],g[d-2],s),f=a(s,g[d-1],g[d+1],!0);return`C ${h[0]},${h[1]} ${f[0]},${f[1]} ${s[0]},${s[1]}`},m=(s,d)=>`<path d="${s.reduce((h,f,E,l)=>E===0?`M ${f[0]},${f[1]}`:`${h} ${d(f,E,l)}`,"")}" fill="none" stroke="black" stroke-width="${t}" />`;return`<svg viewBox="0 0 ${n[0]} ${n[1]}" xmlns="http://www.w3.org/2000/svg" stroke="black">
    ${m(o,u)}
  </svg>
  `}function ee(e,t){return Math.min(e,t)+Math.floor(Math.random()*Math.abs(e-t))}function te(e,t){let n;return function(){clearTimeout(n);let r=arguments;n=setTimeout(function(){e.apply(this,r)},t||1)}}function I(e,t,n={}){const{color:r="#0008",close:o=!1,shiftY:i=0}=n;e.beginPath(),e.lineWidth=23,e.moveTo(t[0]._x,t[0]._y+i);for(const a of t)e.lineTo(a._x,a._y+i);o&&e.lineTo(t[0]._x,t[0]._y+i),e.strokeStyle=r,e.stroke()}async function ne(e,t){await faceapi.nets.ssdMobilenetv1.loadFromUri("weights"),await faceapi.nets.faceLandmark68TinyNet.loadFromUri("weights");const n=await faceapi.detectSingleFace(e).withFaceLandmarks(!0);if(!n)return;const r=n.landmarks.getRightEye(),o=n.landmarks.getLeftEye(),i=n.landmarks.getJawOutline();I(t,r,{close:!0}),I(t,o,{close:!0}),I(t,i.slice(2,-2),{color:"#0004",shiftY:10})}function G(e){e.beginPath();function t(o,i,a={}){const{color:u="#000",width:m=1}=a;e.beginPath(),e.lineWidth=m,e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1]),e.strokeStyle=u,e.stroke()}function n(o,i){e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1])}function r(o={}){const{color:i="#000",width:a=1}=o;e.lineWidth=a,e.strokeStyle=i,e.stroke(),e.beginPath()}return{line:t,lineBuffer:n,stroke:r}}const b=1080;window.IMAGE_SRC="./test.jpg";window.CURRENT_DRAWING=new Date().getTime();window.COORDS=[];window.CURRENT_IMAGE_SIZE=[b,b];const x={addColor:"#000",baseLineNumber:3600,faceApi:!1,precisionRange:2[32],singleLine:!0,strokeWidth:1.25,substractionColor:"rgba(255, 255, 255, 30%)",updateSampleRate:100},c=JSON.parse(JSON.stringify(x)),U=document.querySelector("canvas#src"),k=document.querySelector("canvas#draw");k.width=b;k.height=b;const C=k.getContext("2d"),P=G(C),y={matrix:[]};async function W(e){console.log(c);const t=new Date().getTime();window.CURRENT_DRAWING=new Date().getTime(),window.COORDS=[],document.querySelector("#srcimg").style.backgroundImage=`url("${e}")`;const n=await z(e,{size:b,canvas:U,crop:!1}),r=n.width,o=n.height;window.CURRENT_IMAGE_SIZE=[r,o],C.fillStyle="#fff",C.fillRect(0,0,r,o),document.documentElement.style.setProperty("--sizew",`${r/2}px`),document.documentElement.style.setProperty("--sizeh",`${o/2}px`),k.width=r,k.height=o;const{canvasData:i,averageLightness:a}=X(n);if(n.ctx.putImageData(i,0,0),c.faceApi)try{await ne(U,n.ctx)}catch{console.warn("No face detected or FaceAPI not working.")}document.querySelector(".loading").style.display="none";const u=n.ctx;y.matrix=A(u);const m=G(n.ctx);let s=[Math.floor(r/2),Math.floor(o/2)];for(;y.matrix[s[0]][s[1]]===255*3;)s=[Math.floor(Math.random()*r),Math.floor(Math.random()*o)];function d(){let l=s,w=c.singleLine?0:c.precisionRange[0]*2;for(;w--;){let v=[Math.floor(Math.random()*r),Math.floor(Math.random()*o)];y.matrix[l[0]][l[1]]>y.matrix[v[0]][v[1]]&&(l=v)}let S=ee(...c.precisionRange),p,M=255;for(;S--;){let v=[Math.floor(Math.random()*r),Math.floor(Math.random()*o)];const D=q(l,v,y.matrix);D<=M&&(M=D,p=v)}M=q(l,p,y.matrix),window.COORDS.push([l,p]),P.lineBuffer(l,p,{color:"#000"}),m.lineBuffer(l,p,{color:c.substractionColor}),s=p}let h=Math.floor(c.baseLineNumber/a*128);function f(l){return new Promise(w=>{const S=new Date().getTime();for(;new Date().getTime()<S+16&&h-- >0;){if(l!==window.CURRENT_DRAWING)return;h%c.updateSampleRate==0&&(m.stroke({color:c.substractionColor,width:c.strokeWidth*1.5}),y.matrix=A(u)),d()}P.stroke({color:c.addColor,width:c.strokeWidth*1}),window.requestAnimationFrame(w)})}async function E(l){for(;h>0&&l===window.CURRENT_DRAWING;)await f(l);if(c.makeSmoothSvg){const w=O(window.COORDS,T(L({},c),{size:window.CURRENT_IMAGE_SIZE}));document.querySelector(".smooth-svg-container").innerHTML=w}console.log("Lines per second:",c.baseLineNumber/(new Date().getTime()-t)*1e3)}E(window.CURRENT_DRAWING)}function oe(){if(this.files&&this.files[0]){const e=new FileReader;e.addEventListener("load",function(t){window.IMAGE_SRC=t.target.result,W(window.IMAGE_SRC)}),e.readAsDataURL(this.files[0])}}function F(){const e=document.querySelector("input[type='range']#lines").value,t=document.querySelector("input[type='range']#singleline").value,n=document.querySelector("input[type='range']#faceapi").value,r=document.querySelector("input[type='range']#contrast").value,o=document.querySelector("input[type='range']#definition").value,i=document.querySelector("input[type='range']#strokeWidth").value,a=document.querySelector("input[type='range']#makeSmoothSvg").value;c.baseLineNumber=x.baseLineNumber/50*e,c.substractionColor=`rgba(255, 255, 255, ${100-r}%)`,c.precisionRange=[o,o*2],c.singleLine=!!Number(t),c.faceApi=!!Number(n),c.strokeWidth=Number(i),c.makeSmoothSvg=c.singleLine&&!!Number(a),c.faceApi&&(document.querySelector(".loading").style.display="block"),document.querySelector(".experimental--smoth-svg--container").style.display=c.makeSmoothSvg?"block":"none",W(window.IMAGE_SRC)}F();document.querySelector("#inp").addEventListener("change",oe);document.querySelector("#inputbutton").addEventListener("click",()=>{document.querySelector("#inp").click()});document.querySelectorAll("input[type='range']").forEach(e=>{e.addEventListener("change",te(F,256))});document.querySelector("#download").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.png",e.href=document.querySelector("canvas#draw").toDataURL(),e.click()});document.querySelector("#downloadsvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=V(window.COORDS,T(L({},c),{size:window.CURRENT_IMAGE_SIZE})),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(n);e.href=r,e.click()});document.querySelector("#downloadSmoothSvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=O(window.COORDS,{CONFIG:c,size:window.CURRENT_IMAGE_SIZE}),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(n);e.href=r,e.click()});
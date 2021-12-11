import{i as _,c as N}from"./vendor.2ac2f24a.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};P();const M=.1,R={r:.299+M,g:.587+M*-.5,b:.114+M*-.5};function G(e){let t=e.data,n=1/0,a=0,o=0;for(let r=0;r<t.length;r+=4){let c=t[r]*R.r+t[r+1]*R.g+t[r+2]*R.b;n=Math.min(n,c),a=Math.max(a,c),o+=c}o=Math.round(o/(t.length/4)),n+=32,a-=32;const i=255/(a-n);for(let r=0;r<t.length;r+=4){let c=t[r]*R.r+t[r+1]*R.g+t[r+2]*R.b;t[r]=Math.round(c*i)-n,t[r+1]=Math.round(c*i)-n,t[r+2]=Math.round(c*i)-n}return{canvasData:e,averageLightness:o}}function T(e,t,n){let a=0;const o=e[0],i=t[0]-e[0],r=e[1],c=t[1]-e[1],s=Math.max(Math.abs(i),Math.abs(c));for(let d=0;d<s;d++){const g=Math.round(o+i/s*d),h=Math.round(r+c/s*d);a+=n[g][h]}return Math.round(a/s)}function W(e,{strokeWidth:t}){return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="${t}">
${e.map(n=>`<line x1="${n[0][0]}" y1="${n[0][1]}" x2="${n[1][0]}" y2="${n[1][1]}"/>`).join(`
`)}
</svg>
  `}function U(e,{strokeWidth:t}){return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${e.map(n=>n[0].join(",")).join(" ")}" fill="none" stroke="black" stroke-width="${t}"/>
</svg>
  `}function F(e,t){return t.singleLine?U(e,t):W(e,t)}function D(e,{strokeWidth:t}){const n=.15,a=e.map(s=>s[0]),o=(s,d)=>{const g=d[0]-s[0],h=d[1]-s[1];return{length:Math.sqrt(Math.pow(g,2)+Math.pow(h,2)),angle:Math.atan2(h,g)}},i=(s,d,g,h)=>{const f=o(d||s,g||s),S=f.angle+(h?Math.PI:0),p=f.length*n,b=s[0]+Math.cos(S)*p,y=s[1]+Math.sin(S)*p;return[b,y]};return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" stroke="black">
    ${((s,d)=>`<path d="${s.reduce((h,w,u,f)=>u===0?`M ${w[0]},${w[1]}`:`${h} ${d(w,u,f)}`,"")}" fill="none" stroke="black" stroke-width="${t}" />`)(a,(s,d,g)=>{const h=i(g[d-1],g[d-2],s),w=i(s,g[d-1],g[d+1],!0);return`C ${h[0]},${h[1]} ${w[0]},${w[1]} ${s[0]},${s[1]}`})}
  </svg>
  `}function B(e,t){return Math.min(e,t)+Math.floor(Math.random()*Math.abs(e-t))}function j(e,t){let n;return function(){clearTimeout(n);let a=arguments;n=setTimeout(function(){e.apply(this,a)},t||1)}}function L(e,t,n={}){const{color:a="#0008",close:o=!1,shiftY:i=0}=n;e.beginPath(),e.lineWidth=23,e.moveTo(t[0]._x,t[0]._y+i);for(const r of t)e.lineTo(r._x,r._y+i);o&&e.lineTo(t[0]._x,t[0]._y+i),e.strokeStyle=a,e.stroke()}async function Y(e,t){await faceapi.nets.ssdMobilenetv1.loadFromUri("weights"),await faceapi.nets.faceLandmark68TinyNet.loadFromUri("weights");const n=await faceapi.detectSingleFace(e).withFaceLandmarks(!0);if(!n)return;const a=n.landmarks.getRightEye(),o=n.landmarks.getLeftEye(),i=n.landmarks.getJawOutline();L(t,a,{close:!0}),L(t,o,{close:!0}),L(t,i.slice(2,-2),{color:"#0004",shiftY:10})}function q(e){e.beginPath();function t(o,i,r={}){const{color:c="#000",width:s=1}=r;e.beginPath(),e.lineWidth=s,e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1]),e.strokeStyle=c,e.stroke()}function n(o,i){e.moveTo(o[0],o[1]),e.lineTo(i[0],i[1])}function a(o={}){const{color:i="#000",width:r=1}=o;e.lineWidth=r,e.strokeStyle=i,e.stroke(),e.beginPath()}return{line:t,lineBuffer:n,stroke:a}}window.IMAGE_SRC="./test.jpg";window.CURRENT_DRAWING=new Date().getTime();window.COORDS=[];const m=1080,O={addColor:"#000",baseLineNumber:3600,faceApi:!1,precisionRange:2[32],singleLine:!0,strokeWidth:1.25,substractionColor:"rgba(255, 255, 255, 30%)",updateSampleRate:100},l=JSON.parse(JSON.stringify(O)),I=document.querySelector("canvas#src"),k=document.querySelector("canvas#draw");k.width=m;k.height=m;const E=k.getContext("2d"),$=q(E),v={matrix:[]};async function A(e){console.log(l);const t=new Date().getTime();window.CURRENT_DRAWING=new Date().getTime(),window.COORDS=[],E.fillStyle="#fff",E.fillRect(0,0,m,m),document.querySelector("#srcimg").style.backgroundImage=`url("${e}")`;const n=await _(e,{size:m,canvas:I}),{canvasData:a,averageLightness:o}=G(n);if(n.ctx.putImageData(a,0,0),l.faceApi)try{await Y(I,n.ctx)}catch{console.warn("no face")}document.querySelector(".loading").style.display="none";const i=n.ctx;v.matrix=N(i);const r=q(n.ctx);let c=[Math.floor(m)/2,Math.floor(m)/2];for(;v.matrix[c[0]][c[1]]===255*3;)c=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];function s(){let u=c,f=l.singleLine?0:l.precisionRange[0]*2;for(;f--;){let y=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];v.matrix[u[0]][u[1]]>v.matrix[y[0]][y[1]]&&(u=y)}let S=B(...l.precisionRange),p,b=255;for(;S--;){let y=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];const C=T(u,y,v.matrix);C<=b&&(b=C,p=y)}b=T(u,p,v.matrix),window.COORDS.push([u,p]),$.lineBuffer(u,p,{color:"#000"}),r.lineBuffer(u,p,{color:l.substractionColor}),c=p}let g=Math.floor(l.baseLineNumber/o*128);function h(u){return new Promise(f=>{const S=new Date().getTime();for(;new Date().getTime()<S+16&&g-- >0;){if(u!==window.CURRENT_DRAWING)return;g%l.updateSampleRate==0&&(r.stroke({color:l.substractionColor,width:l.strokeWidth*1.5}),v.matrix=N(i)),s()}$.stroke({color:l.addColor,width:l.strokeWidth*1}),window.requestAnimationFrame(f)})}async function w(u){for(;g>0&&u===window.CURRENT_DRAWING;)await h(u);const f=D(window.COORDS,l);l.singleLine&&(document.querySelector(".smooth-svg-container").innerHTML=f),console.log("Lines per second:",l.baseLineNumber/(new Date().getTime()-t)*1e3)}w(window.CURRENT_DRAWING)}function z(){if(this.files&&this.files[0]){const e=new FileReader;e.addEventListener("load",function(t){window.IMAGE_SRC=t.target.result,A(window.IMAGE_SRC)}),e.readAsDataURL(this.files[0])}}function x(){const e=document.querySelector("input[type='range']#lines").value,t=document.querySelector("input[type='range']#singleline").value,n=document.querySelector("input[type='range']#faceapi").value,a=document.querySelector("input[type='range']#contrast").value,o=document.querySelector("input[type='range']#definition").value,i=document.querySelector("input[type='range']#strokeWidth").value;l.baseLineNumber=O.baseLineNumber/50*e,l.substractionColor=`rgba(255, 255, 255, ${100-a}%)`,l.precisionRange=[o,o*2],l.singleLine=!!Number(t),l.faceApi=!!Number(n),l.strokeWidth=Number(i),l.faceApi&&(document.querySelector(".loading").style.display="block"),document.querySelector(".experimental--smooth-svg").style.display=l.singleLine?"block":"none",A(window.IMAGE_SRC)}x();document.querySelector("#inp").addEventListener("change",z);document.querySelector("#inputbutton").addEventListener("click",()=>{document.querySelector("#inp").click()});document.querySelectorAll("input[type='range']").forEach(e=>{e.addEventListener("change",j(x,256))});document.querySelector("#download").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.png",e.href=document.querySelector("canvas#draw").toDataURL(),e.click()});document.querySelector("#downloadsvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=F(window.COORDS,l),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);e.href=a,e.click()});document.querySelector("#downloadSmoothSvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=D(window.COORDS,l),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);e.href=a,e.click()});
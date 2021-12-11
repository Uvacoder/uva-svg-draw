import{i as _,c as C}from"./vendor.2ac2f24a.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};P();const k=.1,R={r:.299+k,g:.587+k*-.5,b:.114+k*-.5};function G(e){let t=e.data,n=1/0,a=0,o=0;for(let i=0;i<t.length;i+=4){let c=t[i]*R.r+t[i+1]*R.g+t[i+2]*R.b;n=Math.min(n,c),a=Math.max(a,c),o+=c}o=Math.round(o/(t.length/4)),n+=32,a-=32;const r=255/(a-n);for(let i=0;i<t.length;i+=4){let c=t[i]*R.r+t[i+1]*R.g+t[i+2]*R.b;t[i]=Math.round(c*r)-n,t[i+1]=Math.round(c*r)-n,t[i+2]=Math.round(c*r)-n}return{canvasData:e,averageLightness:o}}function T(e,t,n){let a=0;const o=e[0],r=t[0]-e[0],i=e[1],c=t[1]-e[1],l=Math.max(Math.abs(r),Math.abs(c));for(let d=0;d<l;d++){const g=Math.round(o+r/l*d),h=Math.round(i+c/l*d);a+=n[g][h]}return Math.round(a/l)}function W(e,{strokeWidth:t}){return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="${t}">
${e.map(n=>`<line x1="${n[0][0]}" y1="${n[0][1]}" x2="${n[1][0]}" y2="${n[1][1]}"/>`).join(`
`)}
</svg>
  `}function U(e,{strokeWidth:t}){return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${e.map(n=>n[0].join(",")).join(" ")}" fill="none" stroke="black" stroke-width="${t}"/>
</svg>
  `}function F(e,t){return t.singleLine?U(e,t):W(e,t)}function D(e,{strokeWidth:t}){const n=.15,a=e.map(l=>l[0]),o=(l,d)=>{const g=d[0]-l[0],h=d[1]-l[1];return{length:Math.sqrt(Math.pow(g,2)+Math.pow(h,2)),angle:Math.atan2(h,g)}},r=(l,d,g,h)=>{const f=o(d||l,g||l),v=f.angle+(h?Math.PI:0),p=f.length*n,b=l[0]+Math.cos(v)*p,y=l[1]+Math.sin(v)*p;return[b,y]};return`<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" stroke="black">
    ${((l,d)=>`<path d="${l.reduce((h,w,u,f)=>u===0?`M ${w[0]},${w[1]}`:`${h} ${d(w,u,f)}`,"")}" fill="none" stroke="black" stroke-width="${t}" />`)(a,(l,d,g)=>{const h=r(g[d-1],g[d-2],l),w=r(l,g[d-1],g[d+1],!0);return`C ${h[0]},${h[1]} ${w[0]},${w[1]} ${l[0]},${l[1]}`})}
  </svg>
  `}function B(e,t){return Math.min(e,t)+Math.floor(Math.random()*Math.abs(e-t))}function j(e,t){let n;return function(){clearTimeout(n);let a=arguments;n=setTimeout(function(){e.apply(this,a)},t||1)}}function M(e,t,n={}){const{color:a="#0008",close:o=!1,shiftY:r=0}=n;e.beginPath(),e.lineWidth=23,e.moveTo(t[0]._x,t[0]._y+r);for(const i of t)e.lineTo(i._x,i._y+r);o&&e.lineTo(t[0]._x,t[0]._y+r),e.strokeStyle=a,e.stroke()}async function Y(e,t){await faceapi.nets.ssdMobilenetv1.loadFromUri("weights"),await faceapi.nets.faceLandmark68TinyNet.loadFromUri("weights");const n=await faceapi.detectSingleFace(e).withFaceLandmarks(!0);if(!n)return;const a=n.landmarks.getRightEye(),o=n.landmarks.getLeftEye(),r=n.landmarks.getJawOutline();M(t,a,{close:!0}),M(t,o,{close:!0}),M(t,r.slice(2,-2),{color:"#0004",shiftY:10})}function q(e){e.beginPath();function t(o,r,i={}){const{color:c="#000",width:l=1}=i;e.beginPath(),e.lineWidth=l,e.moveTo(o[0],o[1]),e.lineTo(r[0],r[1]),e.strokeStyle=c,e.stroke()}function n(o,r){e.moveTo(o[0],o[1]),e.lineTo(r[0],r[1])}function a(o={}){const{color:r="#000",width:i=1}=o;e.lineWidth=i,e.strokeStyle=r,e.stroke(),e.beginPath()}return{line:t,lineBuffer:n,stroke:a}}window.IMAGE_SRC="./test.jpg";window.CURRENT_DRAWING=new Date().getTime();window.COORDS=[];const m=1080,O={addColor:"#000",baseLineNumber:3600,faceApi:!1,precisionRange:2[32],singleLine:!0,strokeWidth:1.25,substractionColor:"rgba(255, 255, 255, 30%)",updateSampleRate:100},s=JSON.parse(JSON.stringify(O)),I=document.querySelector("canvas#src"),L=document.querySelector("canvas#draw");L.width=m;L.height=m;const E=L.getContext("2d"),$=q(E),S={matrix:[]};async function A(e){console.log(s);const t=new Date().getTime();window.CURRENT_DRAWING=new Date().getTime(),window.COORDS=[],E.fillStyle="#fff",E.fillRect(0,0,m,m),document.querySelector("#srcimg").style.backgroundImage=`url("${e}")`;const n=await _(e,{size:m,canvas:I}),{canvasData:a,averageLightness:o}=G(n);if(n.ctx.putImageData(a,0,0),s.faceApi)try{await Y(I,n.ctx)}catch{console.warn("no face")}document.querySelector(".loading").style.display="none";const r=n.ctx;S.matrix=C(r);const i=q(n.ctx);let c=[Math.floor(m)/2,Math.floor(m)/2];for(;S.matrix[c[0]][c[1]]===255*3;)c=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];function l(){let u=c,f=s.singleLine?0:s.precisionRange[0]*2;for(;f--;){let y=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];S.matrix[u[0]][u[1]]>S.matrix[y[0]][y[1]]&&(u=y)}let v=B(...s.precisionRange),p,b=255;for(;v--;){let y=[Math.floor(Math.random()*m),Math.floor(Math.random()*m)];const N=T(u,y,S.matrix);N<=b&&(b=N,p=y)}b=T(u,p,S.matrix),window.COORDS.push([u,p]),$.lineBuffer(u,p,{color:"#000"}),i.lineBuffer(u,p,{color:s.substractionColor}),c=p}let g=Math.floor(s.baseLineNumber/o*128);function h(u){return new Promise(f=>{const v=new Date().getTime();for(;new Date().getTime()<v+16&&g-- >0;){if(u!==window.CURRENT_DRAWING)return;g%s.updateSampleRate==0&&(i.stroke({color:s.substractionColor,width:s.strokeWidth*1.5}),S.matrix=C(r)),l()}$.stroke({color:s.addColor,width:s.strokeWidth*1}),window.requestAnimationFrame(f)})}async function w(u){for(;g>0&&u===window.CURRENT_DRAWING;)await h(u);if(s.makeSmoothSvg){const f=D(window.COORDS,s);document.querySelector(".smooth-svg-container").innerHTML=f}console.log("Lines per second:",s.baseLineNumber/(new Date().getTime()-t)*1e3)}w(window.CURRENT_DRAWING)}function z(){if(this.files&&this.files[0]){const e=new FileReader;e.addEventListener("load",function(t){window.IMAGE_SRC=t.target.result,A(window.IMAGE_SRC)}),e.readAsDataURL(this.files[0])}}function x(){const e=document.querySelector("input[type='range']#lines").value,t=document.querySelector("input[type='range']#singleline").value,n=document.querySelector("input[type='range']#faceapi").value,a=document.querySelector("input[type='range']#contrast").value,o=document.querySelector("input[type='range']#definition").value,r=document.querySelector("input[type='range']#strokeWidth").value,i=document.querySelector("input[type='range']#makeSmoothSvg").value;s.baseLineNumber=O.baseLineNumber/50*e,s.substractionColor=`rgba(255, 255, 255, ${100-a}%)`,s.precisionRange=[o,o*2],s.singleLine=!!Number(t),s.faceApi=!!Number(n),s.strokeWidth=Number(r),s.makeSmoothSvg=s.singleLine&&!!Number(i),s.faceApi&&(document.querySelector(".loading").style.display="block"),document.querySelector(".experimental--smoth-svg--container").style.display=s.makeSmoothSvg?"block":"none",A(window.IMAGE_SRC)}x();document.querySelector("#inp").addEventListener("change",z);document.querySelector("#inputbutton").addEventListener("click",()=>{document.querySelector("#inp").click()});document.querySelectorAll("input[type='range']").forEach(e=>{e.addEventListener("change",j(x,256))});document.querySelector("#download").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.png",e.href=document.querySelector("canvas#draw").toDataURL(),e.click()});document.querySelector("#downloadsvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=F(window.COORDS,s),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);e.href=a,e.click()});document.querySelector("#downloadSmoothSvg").addEventListener("click",()=>{const e=document.createElement("a");e.download="PINTR.svg";const t=D(window.COORDS,s),n=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);e.href=a,e.click()});
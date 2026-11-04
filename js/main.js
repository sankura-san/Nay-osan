/* ===== Edit your content here ===== */
/* ===== Edit your content here ===== */
const CFG_EMAIL="nayosanmaynard184@gmail.com",CFG_GH="https://github.com/sankura-san",CFG_PHONE="09272977135";
const CFG={
first:"Maynard K.",last:"Nay-osan",role:"Aspiring Software Developer",
sections:[
{id:"home",label:"home",html:`<h2>Learning, building, and exploring the possibilities of technology.</h2><p>I’m <b>Maynard K. Nay-osan</b>, a first-year Computer Science student at the University of the Cordilleras. I’m developing my knowledge of programming and software development, with experience in Java and Python through coursework and personal exercises.</p><p>I want to explore different areas of technology, sharpen my problem-solving, and build practical projects as I continue my journey in Computer Science.</p><div class="tags"><span>BS Computer Science · 1st Year</span><span>University of the Cordilleras</span><span>Sadanga, Mountain Province</span></div><div class="tags"><span>Open to learning opportunities and collaborations</span></div><div class="btns"><a class="btn pri" href="#contact">Contact me</a><a class="btn" href="${CFG_GH}" target="_blank" rel="noopener">GitHub profile</a></div>`},
{id:"about",label:"about",html:`<h2>A little about me</h2><p>I’m a Computer Science student who enjoys learning how technology works and how software is built. Outside of academics, I enjoy creative activities such as drawing and painting, and strategy games that challenge my thinking.</p><div class="paper"><div class="ph">Personal details</div><dl class="dl"><div><dt>Full name</dt><dd>Maynard K. Nay-osan</dd></div><div><dt>Status</dt><dd>College student</dd></div><div><dt>Program</dt><dd>BS Computer Science</dd></div><div><dt>Year level</dt><dd>1st Year</dd></div><div><dt>University</dt><dd>University of the Cordilleras</dd></div><div><dt>Address</dt><dd>Sadanga, Mountain Province, Philippines</dd></div><div><dt>Email</dt><dd>${CFG_EMAIL}</dd></div><div><dt>Phone</dt><dd>${CFG_PHONE}</dd></div></dl><div class="split"><div><dt>Hobbies</dt><div class="tags"><span>Drawing and painting</span><span>Chess and strategy games</span><span>Reading manhwa</span><span>Watching anime</span></div></div><div><dt>Interests</dt><div class="tags"><span>Programming</span><span>Software development</span><span>Web development</span><span>Technology</span><span>Problem-solving</span></div></div></div></div>`},
{id:"education",label:"education",html:`<h2>Educational attainment</h2><p>My education has built my interest in technology, problem-solving and continuous learning. I’m now pursuing a Bachelor of Science in Computer Science, building my foundation in programming and computing.</p><div class="rows"><div class="row"><div><h3>College</h3><small>Currently studying</small></div><p><b>University of the Cordilleras</b><br>Bachelor of Science in Computer Science</p></div><div class="row"><div><h3>Senior high school</h3><small>Completed Grade 12</small></div><p><b>Sadanga National Technical Vocational and Skills Training High School</b></p></div><div class="row"><div><h3>Junior high school</h3><small>Completed</small></div><p><b>Sadanga National Technical Vocational and Skills Training High School</b></p></div><div class="row"><div><h3>Elementary</h3><small>Completed</small></div><p><b>Sadanga Central School</b></p></div></div>`},
{id:"skills",label:"skills",html:`<h2>Skills &amp; interests</h2><p>I’m building my programming skills through coursework, coding exercises and independent practice. My focus right now is strengthening my fundamentals in Java and Python while exploring other areas of software development.</p><div class="rows"><div class="row"><div><h3>Languages</h3></div><div class="tags" style="margin:0"><span>Java</span><span>Python</span></div></div><div class="row"><div><h3>Tools</h3></div><div class="tags" style="margin:0"><span>Git</span><span>GitHub</span></div></div><div class="row"><div><h3>Fundamentals</h3></div><p>Variables, data types, conditional statements, loops and functions.</p></div><div class="row"><div><h3>Other knowledge</h3></div><p>Basic problem-solving, algorithms and programming logic.</p></div><div class="row"><div><h3>Currently learning</h3></div><div class="tags" style="margin:0"><span>Object-oriented programming</span><span>Data structures</span><span>Web development</span></div></div></div>`},
{id:"projects",label:"projects",html:`<h2>Projects</h2><div class="soon"><span>Coming Soon</span><p>Projects and coding activities will be added here as I continue developing my programming skills and gaining experience in Computer Science.</p></div>`},
{id:"contact",label:"contact",html:`<h2>Let’s get in touch</h2><p>Have a question, project idea or opportunity to collaborate? Feel free to contact me through the details below.</p><div class="rows"><div class="row"><div><h3>Email</h3></div><p><a href="mailto:${CFG_EMAIL}">${CFG_EMAIL}</a></p></div><div class="row"><div><h3>GitHub</h3></div><p><a href="${CFG_GH}" target="_blank" rel="noopener">github.com/sankura-san</a></p></div><div class="row"><div><h3>Phone</h3></div><p><a href="tel:${CFG_PHONE}">${CFG_PHONE}</a></p></div><div class="row"><div><h3>Location</h3></div><p>Mountain Province, Philippines</p></div></div><div class="btns"><a class="btn pri" href="${CFG_GH}" target="_blank" rel="noopener">View my GitHub</a><a class="btn" href="mailto:${CFG_EMAIL}">Send an email</a></div>`}
]};
/* ===== UI ===== */
const $=s=>document.querySelector(s),S=CFG.sections,RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const pad=n=>String(n+1).padStart(2,"0");
$("#name").innerHTML=CFG.first+" <em>"+CFG.last+"</em>";$("#role").textContent=CFG.role;
$("#nav").innerHTML=S.map((s,i)=>`<a href="#${s.id}" data-i="${i}">${pad(i)} // ${s.label}</a>`).join("");
let cur=-1,seq=0;
function paint(i){$("#view").innerHTML=S[i].html;$("#pg").textContent=pad(i)+" / "+pad(S.length-1);document.querySelectorAll("#nav a").forEach((a,k)=>k===i?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));$("#next").innerHTML=i===S.length-1?'Back to start <span class="arrow" aria-hidden="true">↺</span>':'Continue <span class="arrow" aria-hidden="true">→</span>';$("#panel").scrollTop=0}
async function go(i){if(i===cur)return;const dir=i>cur?1:-1,el=$("#panel"),tok=++seq;
if(cur>=0&&!RM){const a=el.animate([{opacity:1,transform:"none"},{opacity:0,transform:`translateX(${-24*dir}px)`}],{duration:220,easing:"ease-in",fill:"forwards"});await a.finished;if(tok!==seq){a.cancel();return}cur=i;paint(i);a.cancel();el.animate([{opacity:0,transform:`translateX(${24*dir}px)`},{opacity:1,transform:"none"}],{duration:420,easing:"cubic-bezier(.2,.7,.2,1)"})}
else{cur=i;paint(i)}}
function fromHash(){const k=S.findIndex(s=>"#"+s.id===location.hash);go(k<0?0:k)}
addEventListener("hashchange",fromHash);fromHash();
const step=d=>{location.hash=S[(Math.max(cur,0)+d+S.length)%S.length].id};
$("#next").onclick=()=>step(1);
addEventListener("keydown",e=>{if(e.target.closest&&e.target.closest("a,button")&&e.key!=="ArrowRight"&&e.key!=="ArrowLeft")return;if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});
/* theme */
let theme="dark";try{theme=localStorage.getItem("mn-theme")||"dark"}catch(e){}
function setTheme(t,save){
  document.body.classList.remove("theme-changing");
  void document.body.offsetWidth;
  document.body.classList.add("theme-changing");
  setTimeout(()=>document.body.classList.remove("theme-changing"),800);
  theme=t;document.documentElement.dataset.theme=t;$("#tg").textContent=t==="dark"?"◐ light mode":"◑ dark mode";$("#tg").setAttribute("aria-label","Switch to "+(t==="dark"?"light":"dark")+" theme");if(save)try{localStorage.setItem("mn-theme",t)}catch(e){};tgt=t==="light"?1:0;if(RM){mix=tgt;draw(40)}}
$("#tg").onclick=()=>setTheme(theme==="dark"?"light":"dark",true);
/* smoke: low-resolution WebGL, theme-aware */
let mix=0,tgt=0,draw=()=>{},gl;
const cv=$("#smoke");
try{gl=cv.getContext("webgl",{antialias:false,alpha:false,powerPreference:"low-power"})}catch(e){}
if(!gl){document.documentElement.classList.add("nogl")}else{
const vs="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
const fs=`precision mediump float;uniform vec2 r;uniform float t,m;uniform vec2 mouse;uniform float pointerOn;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
void main(){
vec2 uv=gl_FragCoord.xy/r;
vec2 delta=uv-mouse;
float influence=exp(-dot(delta,delta)*15.0)*pointerOn;
vec2 p=vec2(uv.x*r.x/r.y,uv.y)*1.5;
p += normalize(delta+vec2(.0001))*influence*.16;
float T=t*.03;
vec2 q=vec2(fbm(p+T),fbm(p+vec2(5.2,1.3)-T*.8));
vec2 w=vec2(fbm(p+2.6*q+vec2(1.7,9.2)+T*.6),fbm(p+2.6*q+vec2(8.3,2.8)-T*.5));
float f=fbm(p+2.8*w);
float sm=smoothstep(.3,.85,f);float hi=smoothstep(.55,.95,fbm(p*1.3+w*2.+T));
vec3 dB=mix(vec3(.067,.098,.137),vec3(.09,.129,.173),uv.y);
vec3 dS=mix(vec3(.251,.22,.227),vec3(.165,.224,.282),w.x);
vec3 d=mix(dB,dS,sm*.5)+vec3(.55,.62,.7)*hi*.035;
vec3 lB=mix(vec3(.918,.902,.878),vec3(.961,.949,.933),uv.y);
vec3 lS=mix(vec3(.725,.69,.647),vec3(.62,.6,.58),w.y);
vec3 l=mix(lB,lS,sm*.42);l=mix(l,vec3(1.),hi*.35);
vec2 g=(uv-vec2(.66,.52))*vec2(1.1,1.25);float gl_=exp(-dot(g,g)*4.5);
d+=vec3(.2,.3,.4)*gl_*.22;
l+=vec3(1.,.95,.86)*gl_*.22;
vec3 c=mix(d,l,m);
float v=smoothstep(1.15,.3,length(uv-.5));c*=mix(.72,1.,v)*1.0;
c+=(h(gl_FragCoord.xy)-.5)/255.;
gl_FragColor=vec4(c,1.);}`;
const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o};
const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){document.documentElement.classList.add("nogl");gl=null}else{
gl.useProgram(pr);const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
const lp=gl.getAttribLocation(pr,"p");gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
const ur=gl.getUniformLocation(pr,"r"),ut=gl.getUniformLocation(pr,"t"),um=gl.getUniformLocation(pr,"m");
const uMouse=gl.getUniformLocation(pr,"mouse"),uPointer=gl.getUniformLocation(pr,"pointerOn");
let pointer={x:.5,y:.5,on:0}, pointerTarget={x:.5,y:.5,on:0};
addEventListener("pointermove",e=>{
  if(e.pointerType==="touch") return;
  pointerTarget.x=e.clientX/innerWidth;
  pointerTarget.y=1-e.clientY/innerHeight;
  pointerTarget.on=1;
});
addEventListener("pointerleave",()=>{pointerTarget.on=0});
addEventListener("blur",()=>{pointerTarget.on=0});
const size=()=>{const k=Math.min(devicePixelRatio||1,1)*.5;cv.width=Math.max(2,innerWidth*k|0);cv.height=Math.max(2,innerHeight*k|0);gl.viewport(0,0,cv.width,cv.height);if(RM)draw(40)};
draw=t=>{
  pointer.x+=(pointerTarget.x-pointer.x)*.12;
  pointer.y+=(pointerTarget.y-pointer.y)*.12;
  pointer.on+=(pointerTarget.on-pointer.on)*.08;
  gl.uniform2f(ur,cv.width,cv.height);gl.uniform1f(ut,t);gl.uniform1f(um,mix);
  gl.uniform2f(uMouse,pointer.x,pointer.y);gl.uniform1f(uPointer,pointer.on);
  gl.drawArrays(gl.TRIANGLES,0,3)
};
size();addEventListener("resize",size);
if(!RM){let last=0,raf;const frame=now=>{raf=requestAnimationFrame(frame);if(now-last<33)return;const dt=Math.min((now-last)/1000,.1);last=now;mix+=(tgt-mix)*(1-Math.exp(-dt*2.6));draw(now/1000+20)};
document.addEventListener("visibilitychange",()=>{cancelAnimationFrame(raf);if(!document.hidden)raf=requestAnimationFrame(frame)});raf=requestAnimationFrame(frame)}else draw(40)}}
setTheme(theme,false);mix=tgt;if(gl)draw(RM?40:20);

/* ===== Custom pointer and micro-interactions ===== */
(()=>{
  const finePointer=matchMedia("(pointer:fine)").matches && !RM;
  if(!finePointer) return;
  const glow=document.querySelector(".cursor-glow");
  const dot=document.querySelector(".cursor-dot");
  let x=innerWidth/2,y=innerHeight/2,dx=x,dy=y;
  document.body.classList.add("pointer-ready");
  addEventListener("pointermove",e=>{x=e.clientX;y=e.clientY;});
  const loop=()=>{
    dx+=(x-dx)*.22; dy+=(y-dy)*.22;
    glow.style.left=dx+"px"; glow.style.top=dy+"px";
    dot.style.left=x+"px"; dot.style.top=y+"px";
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  document.addEventListener("pointerover",e=>{
    if(e.target.closest("a,button,.tags span")) document.body.classList.add("cursor-hover");
  });
  document.addEventListener("pointerout",e=>{
    if(e.target.closest("a,button,.tags span")) document.body.classList.remove("cursor-hover");
  });
  document.addEventListener("pointerdown",()=>document.body.classList.add("cursor-down"));
  document.addEventListener("pointerup",()=>document.body.classList.remove("cursor-down"));
})();

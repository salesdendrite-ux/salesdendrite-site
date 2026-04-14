import React, { useState, useEffect, useRef } from "react";

const C = { navy:"#0B1D3A",navyMid:"#0F2847",card:"#0D2240",cardHover:"#112A4D",blue:"#2D7FF9",teal:"#00C9A7",red:"#EF4343",amber:"#F59E0B",purple:"#8B5CF6",slate:"#94A3B8",slateLight:"#CBD5E1",white:"#FFFFFF",border:"#1E3A5F" };
const FH=`'Outfit',sans-serif`,FB=`'DM Sans',sans-serif`,FM=`'JetBrains Mono',monospace`;

const CSS=`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{background:${C.navy};color:${C.slateLight};font-family:${FB};line-height:1.6;overflow-x:hidden}
::selection{background:${C.teal}33;color:${C.white}}
@keyframes su{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes bk{0%,50%{border-color:${C.teal}}51%,100%{border-color:transparent}}
@keyframes pg{0%,100%{opacity:.4}50%{opacity:.9}}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fd{from{stroke-dashoffset:20}to{stroke-dashoffset:0}}
@keyframes float1{0%,100%{transform:translateY(0) translateX(0)}25%{transform:translateY(-20px) translateX(10px)}50%{transform:translateY(-10px) translateX(-8px)}75%{transform:translateY(-25px) translateX(5px)}}
@keyframes float2{0%,100%{transform:translateY(0) translateX(0)}33%{transform:translateY(-15px) translateX(-12px)}66%{transform:translateY(-8px) translateX(15px)}}
@keyframes float3{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
@keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.gt{background:linear-gradient(135deg,${C.teal},${C.blue});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.gb{background:linear-gradient(135deg,${C.teal},${C.blue});color:${C.white};border:none;cursor:pointer;transition:all .3s}
.gb:hover{transform:translateY(-2px);box-shadow:0 8px 30px ${C.teal}44}
.ob{background:transparent;color:${C.white};border:1px solid ${C.border};cursor:pointer;transition:all .3s}
.ob:hover{border-color:${C.teal};background:${C.teal}11}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${C.navy}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}`;

function Sty(){useEffect(()=>{if(!document.getElementById("sd")){const s=document.createElement("style");s.id="sd";s.textContent=CSS;document.head.appendChild(s)}},[]);return null}

/* ─── Cursor Glow ─── */
function CursorGlow(){
  const[pos,setPos]=useState({x:-100,y:-100});
  const{mob}=useMedia();
  useEffect(()=>{
    if(mob)return;
    const h=e=>setPos({x:e.clientX,y:e.clientY});
    window.addEventListener("mousemove",h);
    return()=>window.removeEventListener("mousemove",h);
  },[mob]);
  if(mob)return null;
  return(<div style={{position:"fixed",left:pos.x-150,top:pos.y-150,width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle,${C.teal}12 0%,${C.blue}08 40%,transparent 70%)`,pointerEvents:"none",zIndex:9999,transition:"left .15s ease-out, top .15s ease-out",filter:"blur(2px)"}}/>);
}

/* ─── Floating Particles ─── */
function Particles(){
  const dots = [
    {x:"10%",y:"20%",s:3,d:"8s",a:"float1",o:.15},
    {x:"85%",y:"15%",s:4,d:"12s",a:"float2",o:.1},
    {x:"20%",y:"60%",s:2,d:"10s",a:"float3",o:.12},
    {x:"70%",y:"45%",s:3,d:"9s",a:"float1",o:.08},
    {x:"50%",y:"80%",s:2,d:"11s",a:"float2",o:.1},
    {x:"90%",y:"70%",s:3,d:"7s",a:"float3",o:.12},
    {x:"35%",y:"30%",s:2,d:"13s",a:"float1",o:.06},
    {x:"60%",y:"90%",s:4,d:"10s",a:"float2",o:.08},
  ];
  return(<div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1,overflow:"hidden"}}>
    {dots.map((d,i)=>(<div key={i} style={{position:"absolute",left:d.x,top:d.y,width:d.s,height:d.s,borderRadius:"50%",background:i%2===0?C.teal:C.blue,opacity:d.o,animation:`${d.a} ${d.d} ease-in-out infinite`,animationDelay:`${i*0.7}s`}}/>))}
  </div>);
}

/* ─── Flowing Background — continuous gradient mesh across all sections ─── */
function FlowingBG(){
  const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{
    const h=()=>setScrollY(window.scrollY);
    window.addEventListener("scroll",h,{passive:true});
    return()=>window.removeEventListener("scroll",h);
  },[]);
  const pageH = typeof document!=="undefined" ? document.documentElement.scrollHeight : 6000;
  const pct = Math.min(scrollY / (pageH - window.innerHeight), 1);
  return(
    <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}>
      {/* Primary flowing gradient — shifts with scroll */}
      <div style={{
        position:"absolute",inset:0,
        background:`
          radial-gradient(ellipse 80% 50% at ${20+pct*30}% ${30+pct*40}%, ${C.teal}16 0%, transparent 70%),
          radial-gradient(ellipse 60% 70% at ${70-pct*20}% ${20+pct*50}%, ${C.blue}14 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at ${50+pct*15}% ${60-pct*20}%, ${C.purple}0A 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at ${30-pct*10}% ${80-pct*30}%, ${C.teal}0C 0%, transparent 40%)
        `,
        transition:"background .3s ease-out",
      }}/>
      {/* Subtle noise/grain texture */}
      <div style={{
        position:"absolute",inset:0,opacity:.015,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:"128px 128px",
      }}/>
    </div>
  );
}

/* ─── Responsive Hook ─── */
function useMedia(){
  const[w,sW]=useState(typeof window!=="undefined"?window.innerWidth:1200);
  useEffect(()=>{const h=()=>sW(window.innerWidth);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h)},[]);
  return{w,mob:w<768,tab:w>=768&&w<1024,desk:w>=1024};
}

/* ─── Hooks ─── */
function useR(t=.08){const r=useRef(null),[v,s]=useState(false);useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){s(true);o.disconnect()}},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[r,v]}
function Rev({children,delay=0,y=28,style={}}){const[r,v]=useR();return(<div ref={r} style={{opacity:v?1:0,transform:v?"none":`translateY(${y}px)`,transition:`opacity .7s cubic-bezier(.22,1,.36,1) ${delay}s, transform .7s cubic-bezier(.22,1,.36,1) ${delay}s`,...style}}>{children}</div>)}
function ACt({end,sfx="",dur=2000}){const[v,sV]=useState(0);const[r,vis]=useR();useEffect(()=>{if(!vis)return;let s=0;const st=end/(dur/16);const t=setInterval(()=>{s+=st;if(s>=end){sV(end);clearInterval(t)}else sV(Math.floor(s))},16);return()=>clearInterval(t)},[vis,end,dur]);return(<span ref={r}>{v}{sfx}</span>)}
function TW({text,speed=8,trigger=true}){const[d,sD]=useState("");const i=useRef(0);useEffect(()=>{if(!trigger){sD("");i.current=0;return}i.current=0;sD("");const t=setInterval(()=>{i.current++;sD(text.slice(0,i.current));if(i.current>=text.length)clearInterval(t)},speed);return()=>clearInterval(t)},[text,trigger,speed]);return(<span>{d}<span style={{borderRight:`2px solid ${C.teal}`,animation:"bk 1s infinite",marginLeft:1}}>&nbsp;</span></span>)}

/* ─── Brand Logo ─── */
function BrandIcon({size=32}){return(
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="blg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00C9A7"/><stop offset="100%" stopColor="#2D7FF9"/></linearGradient></defs>
    <line x1="32" y1="56" x2="32" y2="28" stroke="url(#blg)" strokeWidth="3" strokeLinecap="round"/>
    <line x1="32" y1="36" x2="16" y2="20" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="32" y1="28" x2="48" y2="14" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="20" x2="8" y2="10" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="20" x2="22" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="48" y1="14" x2="42" y2="6" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="48" y1="14" x2="56" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="56" r="4" fill="#00C9A7"/><circle cx="32" cy="36" r="3" fill="#2D7FF9" opacity="0.7"/>
    <circle cx="32" cy="28" r="3.5" fill="#2D7FF9"/><circle cx="16" cy="20" r="3" fill="#2D7FF9"/><circle cx="48" cy="14" r="3" fill="#2D7FF9"/>
    <circle cx="8" cy="10" r="2.5" fill="#00C9A7"/><circle cx="22" cy="8" r="2.5" fill="#00C9A7"/><circle cx="42" cy="6" r="2.5" fill="#00C9A7"/><circle cx="56" cy="8" r="2.5" fill="#00C9A7"/>
  </svg>
)}

/* ─── SVG Icons ─── */
function SIcon({d,color=C.teal,sz=24}){return(<svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>)}
const Ic={
  layers:(c=C.teal)=><SIcon color={c} d={<><polygon points="12,2 22,8.5 12,15 2,8.5"/><polyline points="2,15.5 12,22 22,15.5" opacity=".5"/><polyline points="2,12 12,18.5 22,12" opacity=".7"/></>}/>,
  bolt:(c=C.amber)=><SIcon color={c} d={<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>}/>,
  org:(c=C.purple)=><SIcon color={c} d={<><circle cx="12" cy="4" r="2.5"/><circle cx="5" cy="14" r="2.5"/><circle cx="19" cy="14" r="2.5"/><path d="M12 6.5V9M12 9L5 11.5M12 9L19 11.5"/></>}/>,
  shield:(c=C.blue)=><SIcon color={c} d={<><path d="M12 2l8 4v5c0 5.5-3.5 10-8 12-4.5-2-8-6.5-8-12V6l8-4z"/><path d="M9 12l2 2 4-4" strokeWidth="2"/></>}/>,
  map:(c=C.teal)=><SIcon color={c} sz={28} d={<><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><path d="M9 3v15M15 6v15"/></>}/>,
  search:(c=C.blue)=><SIcon color={c} sz={28} d={<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></>}/>,
  zap:(c=C.amber)=><SIcon color={c} sz={28} d={<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>}/>,
  users:(c=C.teal)=><SIcon color={c} d={<><circle cx="8" cy="6" r="3"/><circle cx="16" cy="6" r="3"/><path d="M2 20c0-4 3-7 6-7"/><path d="M16 13c3 0 6 3 6 7"/></>}/>,
  news:(c=C.blue)=><SIcon color={c} d={<><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h8M8 12h5M8 16h7"/></>}/>,
  brain:(c=C.amber)=><SIcon color={c} d={<><path d="M12 2C9 2 7 4 7 6.5c0 1-.5 2-1.5 2.5C4 10 3 11.5 3 13.5 3 16 5 18 7.5 18H8"/><path d="M12 2c3 0 5 2 5 4.5c0 1 .5 2 1.5 2.5C20 10 21 11.5 21 13.5 21 16 19 18 16.5 18H16"/><path d="M12 2v20"/></>}/>,
  ai:(c=C.purple)=><SIcon color={c} d={<><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="10" r="1.5" fill={c}/><circle cx="15" cy="10" r="1.5" fill={c}/><path d="M9 15c1.5 1.5 4.5 1.5 6 0"/></>}/>,
  target:(c=C.teal)=><SIcon color={c} d={<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={c}/></>}/>,
  people:(c=C.red)=><SIcon color={c} d={<><circle cx="8" cy="6" r="3"/><path d="M2 20c0-4 3-7 6-7M12 13v4M10 17h4"/><circle cx="16" cy="6" r="3"/><path d="M16 13c3 0 6 3 6 7"/></>}/>,
  chart:(c=C.blue)=><SIcon color={c} d={<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16V11M11 16V8M15 16V13"/></>}/>,
  gear:(c=C.slate)=><SIcon color={c} d={<><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></>}/>,
  mail:(c=C.teal)=><SIcon color={c} d={<><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/></>}/>,
  clip:(c=C.blue)=><SIcon color={c} d={<><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 10h6M9 14h4"/></>}/>,
};

/* ═══════════ NAVBAR — responsive with hamburger ═══════════ */
function Nav(){
  const[sc,setSc]=useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  const{mob}=useMedia();
  useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
  const lnk=[["Platform","#platform"],["Demo","#demo"],["Modules","#modules"],["Why Us","#why"],["Contact","#contact"]];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:sc?"10px 0":"18px 0",background:sc||menuOpen?`${C.navy}F5`:"transparent",backdropFilter:sc||menuOpen?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}44`:"none",transition:"all .4s"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
          <BrandIcon size={mob?24:30}/>
          <span style={{fontFamily:FH,fontWeight:700,fontSize:mob?17:20,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span>
        </a>
        {mob?(
          <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",cursor:"pointer",padding:8}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round">
              {menuOpen?<><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>:<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        ):(
          <div style={{display:"flex",alignItems:"center",gap:32}}>
            {lnk.map(([l,h])=>(<a key={h} href={h} style={{color:C.slate,textDecoration:"none",fontSize:14,fontWeight:500,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.slate}>{l}</a>))}
            <a href="#contact" className="gb" style={{padding:"10px 24px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none",fontFamily:FB}}>Request Demo</a>
          </div>
        )}
      </div>
      {mob&&menuOpen&&(
        <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:16,borderTop:`1px solid ${C.border}44`,marginTop:10}}>
          {lnk.map(([l,h])=>(<a key={h} href={h} onClick={()=>setMenuOpen(false)} style={{color:C.slateLight,textDecoration:"none",fontSize:16,fontWeight:500}}>{l}</a>))}
          <a href="#contact" onClick={()=>setMenuOpen(false)} className="gb" style={{padding:"12px 24px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none",fontFamily:FB,textAlign:"center"}}>Request Demo</a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════ HERO ═══════════ */
const ROLES={
  rep:{label:"Sales Rep",h1:"Know who to call.",h2:"Know what to say.",sub:"See the full org hierarchy, get AI-drafted emails, and walk into every meeting with context no competitor has."},
  leader:{label:"Sales Leader",h1:"See every deal's org.",h2:"Coach with structure.",sub:"Multi-thread strategically, identify buying committee gaps, and coach reps with real account intelligence."},
  enablement:{label:"Enablement",h1:"Arm your team.",h2:"Intelligence at scale.",sub:"Build account plans grounded in org structure, financial data, and competitive intel."},
};

function OrgChart(){
  const[step,setStep]=useState(0);
  const[clicked,setClicked]=useState(null);
  const{mob}=useMedia();
  useEffect(()=>{const ts=[setTimeout(()=>setStep(1),400),setTimeout(()=>setStep(2),900),setTimeout(()=>setStep(3),1400),setTimeout(()=>setStep(4),2000),setTimeout(()=>setStep(5),2600)];return()=>ts.forEach(clearTimeout)},[]);
  const ns=d=>({opacity:step>=d?1:0,transform:step>=d?"scale(1)":"scale(0)",transition:"all .5s cubic-bezier(.34,1.56,.64,1)",transformOrigin:"center"});
  const ls=d=>({strokeDasharray:200,strokeDashoffset:step>=d?0:200,transition:"stroke-dashoffset .8s ease-out"});

  const nodeData=[
    {id:"ceo",cx:200,cy:45,r:28,lb:"CEO",fs:14,fc:C.navy,fill:`url(#ng)`,stroke:"none",d:1,tip:"Decision maker. Budget authority for enterprise deals."},
    {id:"vps",cx:90,cy:135,r:26,lb:"VP Sales",fs:10,fc:C.teal,fill:C.card,stroke:C.teal,d:2,tip:"Primary champion. Has $2M discretionary budget."},
    {id:"vpo",cx:310,cy:135,r:26,lb:"VP Ops",fs:10,fc:C.blue,fill:C.card,stroke:C.blue,d:2,tip:"Operational gatekeeper. Manages vendor approvals."},
    {id:"d1",cx:30,cy:225,r:20,lb:"Dir.",fs:9,fc:C.slate,fill:C.navyMid,stroke:C.border,d:3,tip:"Analytics team lead. Technical evaluator."},
    {id:"d2",cx:110,cy:225,r:20,lb:"Mgr.",fs:9,fc:C.slate,fill:C.navyMid,stroke:C.border,d:3,tip:"Influenced 3 past vendor selections."},
    {id:"d3",cx:270,cy:225,r:20,lb:"Lead",fs:9,fc:C.slate,fill:C.navyMid,stroke:C.border,d:4,tip:"Digital transformation project lead."},
    {id:"d4",cx:350,cy:225,r:20,lb:"Eng.",fs:9,fc:C.slate,fill:C.navyMid,stroke:C.border,d:4,tip:"Integration architect. Runs technical POC."},
  ];
  const lines=[
    {x1:200,y1:73,x2:90,y2:109,c:C.teal,w:2,d:2},{x1:200,y1:73,x2:310,y2:109,c:C.teal,w:2,d:2},
    {x1:90,y1:161,x2:30,y2:205,c:C.blue,w:1.5,d:3},{x1:90,y1:161,x2:110,y2:205,c:C.blue,w:1.5,d:3},
    {x1:310,y1:161,x2:270,y2:205,c:C.blue,w:1.5,d:4},{x1:310,y1:161,x2:350,y2:205,c:C.blue,w:1.5,d:4},
  ];

  return(
    <div style={{width:"100%",aspectRatio:"400/280",position:"relative"}}>
      <svg viewBox="0 0 400 280" style={{width:"100%",height:"100%"}}>
        <defs>
          <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={C.teal}/><stop offset="100%" stopColor={C.blue}/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {lines.map((l,i)=><line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.c} strokeWidth={l.w} opacity=".5" strokeLinecap="round" style={ls(l.d)}/>)}
        {nodeData.map(n=>(
          <g key={n.id} onClick={()=>setClicked(clicked===n.id?null:n.id)} style={{cursor:"pointer",...ns(n.d)}}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} stroke={n.stroke} strokeWidth={n.stroke==="none"?0:2} filter={clicked===n.id?"url(#glow)":"none"}/>
            <text x={n.cx} y={n.cy+n.fs/3} textAnchor="middle" fill={n.fc} fontSize={n.fs} fontFamily="Outfit,sans-serif" fontWeight="700">{n.lb}</text>
          </g>
        ))}
        {/* Insight popup inside SVG */}
        {clicked&&step>=1&&(
          <foreignObject x="20" y="250" width="360" height="30" style={{animation:"su .3s ease-out"}}>
            <div style={{background:`${C.card}F0`,border:`1px solid ${C.teal}44`,borderRadius:6,padding:"4px 10px",fontSize:11,fontFamily:FM,color:C.teal,backdropFilter:"blur(8px)",lineHeight:1.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
              <span style={{color:C.amber,marginRight:4}}>⚡</span>{nodeData.find(n=>n.id===clicked)?.tip}
            </div>
          </foreignObject>
        )}
        {!clicked&&step>=5&&(
          <foreignObject x="230" y="30" width="160" height="24" style={{animation:"su .5s ease-out"}}>
            <div style={{background:`${C.card}EE`,border:`1px solid ${C.teal}44`,borderRadius:6,padding:"3px 8px",fontSize:10,fontFamily:FM,color:C.teal,textAlign:"center"}}>Click any node</div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}

function Hero(){
  const[role,setRole]=useState("rep");
  const r=ROLES[role];
  const{mob,tab}=useMedia();
  return(
    <section style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:C.navy,opacity:.4}}/>
      <div style={{position:"absolute",inset:0,opacity:.03,backgroundImage:`linear-gradient(${C.white} 1px,transparent 1px),linear-gradient(90deg,${C.white} 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:1400,margin:"0 auto",padding:mob?"100px 20px 40px":"100px 40px 40px",display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1.1fr",gap:mob?24:40,alignItems:"center",width:"100%"}}>
        <div>
          <div style={{animation:"su .6s ease-out",animationFillMode:"backwards"}}>
            <span style={{display:"inline-block",fontSize:mob?10:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal,border:`1px solid ${C.teal}33`,borderRadius:999,padding:"5px 14px",background:`${C.teal}0D`,marginBottom:16}}>Sales Execution Intelligence</span>
          </div>
          <div style={{display:"flex",gap:4,marginBottom:14,background:C.card,borderRadius:8,padding:3,border:`1px solid ${C.border}`,animation:"su .6s ease-out .08s",animationFillMode:"backwards",width:"fit-content"}}>
            {Object.entries(ROLES).map(([k,v])=>(<button key={k} onClick={()=>setRole(k)} style={{padding:mob?"5px 10px":"6px 14px",borderRadius:6,fontSize:mob?10:11,fontWeight:600,fontFamily:FB,border:"none",cursor:"pointer",transition:"all .3s",background:role===k?`linear-gradient(135deg,${C.teal},${C.blue})`:C.card,color:role===k?C.white:C.slate}}>{v.label}</button>))}
          </div>
          <h1 style={{fontFamily:FH,fontWeight:900,fontSize:mob?36:tab?48:58,lineHeight:1.05,color:C.white,marginBottom:16,animation:"su .6s ease-out .15s",animationFillMode:"backwards"}}>
            {r.h1}<br/><span className="gt">{r.h2}</span>
          </h1>
          <p style={{fontSize:mob?15:18,color:C.slate,maxWidth:500,marginBottom:28,lineHeight:1.7,animation:"su .6s ease-out .3s",animationFillMode:"backwards"}}>{r.sub}</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",animation:"su .6s ease-out .45s",animationFillMode:"backwards"}}>
            <a href="#contact" className="gb" style={{padding:mob?"12px 24px":"16px 36px",borderRadius:10,fontSize:mob?14:16,fontWeight:600,textDecoration:"none",fontFamily:FB}}>Request a Demo</a>
            <a href="#demo" className="ob" style={{padding:mob?"12px 24px":"16px 36px",borderRadius:10,fontSize:mob?14:16,fontWeight:500,textDecoration:"none",fontFamily:FB}}>See It Live ↓</a>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",animation:"su .8s ease-out .3s",animationFillMode:"backwards"}}>
          <div style={{background:`${C.card}AA`,border:`1px solid ${C.border}`,borderRadius:20,padding:mob?"20px 16px 16px":"32px 28px 24px",backdropFilter:"blur(12px)",boxShadow:`0 24px 80px ${C.navy}88, 0 0 80px ${C.teal}08`,width:"100%",maxWidth:mob?360:580}}>
            <div style={{fontSize:mob?9:11,fontFamily:FM,color:C.teal,marginBottom:mob?10:16,letterSpacing:".1em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:C.teal,display:"inline-block",animation:"pg 2s infinite"}}/>Live Org Mapping
            </div>
            <OrgChart/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ STATS ═══════════ */
function Stats(){
  const{mob}=useMedia();
  const d=[{n:21,s:"",l:"Integrations"},{n:7,s:"",l:"Modules"},{n:4,s:"",l:"Data Layers"},{n:74,s:"+",l:"Endpoints"}];
  return(<Rev style={{maxWidth:1000,margin:"0 auto",padding:"0 20px"}}><div style={{display:"grid",gridTemplateColumns:mob?"repeat(2,1fr)":"repeat(4,1fr)",gap:1,background:C.border,borderRadius:12,overflow:"hidden"}}>{d.map((s,i)=>(<div key={i} style={{background:C.navyMid,padding:mob?"20px 16px":"32px 24px",textAlign:"center"}}><div style={{fontFamily:FH,fontSize:mob?28:36,fontWeight:800,color:C.white}}><ACt end={s.n}/>{s.s}</div><div style={{fontSize:mob?11:13,color:C.slate,marginTop:4,fontWeight:500}}>{s.l}</div></div>))}</div></Rev>);
}

/* ═══════════ PROBLEM ═══════════ */
function Problem(){
  const{mob}=useMedia();
  const ps=[
    {icon:Ic.layers,title:"Contact databases are flat",desc:"ZoomInfo, Apollo, LinkedIn — names and titles. They don't tell you who reports to whom.",color:C.red},
    {icon:Ic.bolt,title:"Intelligence stops at delivery",desc:"The gap between knowing and doing is where deals die.",color:C.amber},
    {icon:Ic.org,title:"Org structure is invisible",desc:"Buying committees are assembled from guesswork. Reps multi-thread into the wrong people.",color:C.purple},
    {icon:Ic.shield,title:"Enablement teams fly blind",desc:"Account plans built on stale CRM data and rep memory.",color:C.blue},
  ];
  return(
    <section style={{padding:mob?"60px 20px":"100px 24px",maxWidth:1200,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:mob?40:64}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.red}}>The Problem</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?28:42,color:C.white,marginTop:12,maxWidth:700,margin:"12px auto 0"}}>Every sales tool gives you data.<br/>None of them give you the org.</h2></div></Rev>
      <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?14:20}}>{ps.map((p,i)=>(
        <Rev key={i} delay={i*.1} style={{height:"100%"}}><div style={{background:C.card,border:`1px solid ${C.border}`,borderLeft:`3px solid ${p.color}`,borderRadius:12,padding:mob?"20px":"28px",transition:"all .3s",height:"100%",display:"flex",flexDirection:"column"}} onMouseEnter={e=>{e.currentTarget.style.background=C.cardHover}} onMouseLeave={e=>{e.currentTarget.style.background=C.card}}>
          <div style={{marginBottom:10}}>{p.icon(p.color)}</div>
          <h3 style={{fontFamily:FH,fontWeight:700,fontSize:mob?16:18,color:C.white,marginBottom:6}}>{p.title}</h3>
          <p style={{fontSize:mob?13:14,color:C.slate,lineHeight:1.7}}>{p.desc}</p>
        </div></Rev>
      ))}</div>
    </section>
  );
}

/* ═══════════ PLATFORM — clean scroll-driven flow ═══════════ */
function Platform(){
  const{mob}=useMedia();
  const sectionRef=useRef(null);
  const[progress,setProgress]=useState(0);

  useEffect(()=>{
    const el=sectionRef.current;if(!el)return;
    const h=()=>{
      const r=el.getBoundingClientRect();
      const vh=window.innerHeight;
      const start=vh*0.75;
      const end=vh*0.1;
      const p=Math.max(0,Math.min(1,(start-r.top)/(start-end)));
      setProgress(p);
    };
    window.addEventListener("scroll",h,{passive:true});
    h();
    return()=>window.removeEventListener("scroll",h);
  },[]);

  const steps=[
    {n:"01",icon:Ic.map,t:"MAP",desc:"Upload org charts. Build the hierarchy your CRM doesn't have. See who reports to whom.",color:C.teal},
    {n:"02",icon:Ic.search,t:"UNDERSTAND",desc:"Layer financial analysis, clinical pipeline, regulatory milestones, and competitive intel onto every account.",color:C.blue},
    {n:"03",icon:Ic.zap,t:"EXECUTE",desc:"AI generates conversion strategies, drafts emails, preps meetings — all grounded in real account data.",color:C.amber},
  ];

  const ease=t=>t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  const cardAnim=(i)=>{
    const stagger=i*0.15;
    const raw=Math.max(0,Math.min(1,(progress-stagger)*4));
    const e=ease(raw);
    return{opacity:mob?1:Math.max(0.1,e),transform:mob?"none":`translateY(${(1-e)*24}px)`,transition:"opacity .06s, transform .06s"};
  };
  const lineWidth=()=>mob?0:Math.min(100,progress*140)+"%";

  return(
    <section id="platform" ref={sectionRef} style={{padding:mob?"60px 20px":"100px 24px",maxWidth:1400,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:mob?36:60}}>
        <span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>The Platform</span>
        <h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?28:42,color:C.white,marginTop:12}}>Three moves. One outcome.</h2>
      </div></Rev>

      {/* Connecting gradient line (desktop only) */}
      {!mob&&(
        <div style={{position:"relative",maxWidth:1000,margin:"0 auto 48px",height:4,background:C.border+"44",borderRadius:2,overflow:"hidden"}}>
          <div style={{height:"100%",borderRadius:2,background:`linear-gradient(90deg,${C.teal},${C.blue},${C.amber})`,width:lineWidth(),transition:"width .1s ease-out"}}/>
          {/* Step dots on the line */}
          {steps.map((s,i)=>{
            const pos=i*50; // 0%, 50%, 100%
            const dotP=Math.max(0,Math.min(1,(progress-i*0.12)*5));
            return <div key={i} style={{position:"absolute",left:`${pos}%`,top:"50%",transform:"translate(-50%,-50%)",width:dotP>0.5?14:8,height:dotP>0.5?14:8,borderRadius:"50%",background:s.color,border:`2px solid ${C.navy}`,transition:"all .3s",boxShadow:dotP>0.8?`0 0 12px ${s.color}66`:"none"}}/>;
          })}
        </div>
      )}

      <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"repeat(3,1fr)",gap:mob?16:28,maxWidth:1000,margin:"0 auto"}}>
        {steps.map((s,i)=>(
          <div key={i} style={{...cardAnim(i),background:`${C.card}CC`,backdropFilter:"blur(16px)",border:`1px solid ${C.border}`,borderRadius:16,padding:mob?"24px 20px":"32px 28px",position:"relative",overflow:"hidden"}}>
            {/* Accent top glow */}
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${s.color},transparent)`}}/>
            
            {/* Step number */}
            <div style={{position:"absolute",top:-10,right:-5,fontFamily:FH,fontWeight:900,fontSize:mob?60:72,color:s.color,opacity:.05,lineHeight:1}}>{s.n}</div>

            {/* Icon circle */}
            <div style={{width:52,height:52,borderRadius:14,background:`${s.color}12`,border:`1px solid ${s.color}30`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
              {s.icon(s.color)}
            </div>

            {/* Title */}
            <h3 style={{fontFamily:FH,fontWeight:800,fontSize:mob?20:22,color:s.color,letterSpacing:".03em",marginBottom:10}}>{s.t}</h3>

            {/* Description */}
            <p style={{fontSize:mob?13:14,color:C.slate,lineHeight:1.7}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════ DEMO ═══════════ */
const STK=[
  {id:"p",name:"Dr. Priya Mehta",role:"Chief Data Officer",dept:"Data Science",rep:"CEO",st:"Cold",sc:22,stc:C.blue,tags:["AI/ML","Real-World Data","Data Governance"],
    intel:"Dr. Mehta controls the AI/ML budget and owns the Real-World Data initiative ($4.2M). Cold — no contact in 90+ days. Reports to CEO → likely Economic Buyer.\n\nRisk: Competitor with existing RWD relationships could displace.\n\nRecommendation: Lead with RWD Analytics. Reference the $4.2M initiative.",
    email:"Subject: Real-World Data governance at scale\n\nDr. Mehta,\n\nI noticed your team's expanding the RWD initiative. Our Compliance Analytics platform has helped similar CDOs maintain audit-ready pipelines.\n\nWould 15 minutes next week work?\n\nBest regards",
    brief:"PRE-CALL BRIEF — Dr. Priya Mehta, CDO\n\n• Controls AI/ML budget, RWD initiative ($4.2M)\n• Reports to CEO → Economic Buyer\n• Cold (90+ days no contact)\n• Angle: Compliance Analytics + Data Governance\n• Close for: Discovery with data engineering lead"},
  {id:"j",name:"James Thornton",role:"VP Clinical Ops",dept:"Clinical Ops",rep:"COO",st:"Hot",sc:87,stc:C.red,tags:["Trial Management","Site Selection"],
    intel:"Warmest contact — Score 87, webinar attendee. Mid-way through $12M trial digitization. $2M budget authority.\n\nChampion candidate: vocal about modernizing trial management. Pain: site selection takes 14 weeks.\n\nRecommendation: Activate as Champion. Push for COO introduction.",
    email:"Subject: Site selection acceleration\n\nJames,\n\nGreat connecting at the webinar. I have data from teams who cut site selection from 14 to under 6 weeks.\n\nCould we get 30 minutes Thursday or Friday?",
    brief:"PRE-CALL BRIEF — James Thornton, VP Clinical Ops\n\n• $2M budget authority, Score 87\n• Trial digitization ($12M)\n• Angle: Site selection (14wk → 6wk)\n• Champion potential: HIGH\n• Close for: Team demo + COO intro"},
  {id:"s",name:"Sarah Kim",role:"Head of Procurement",dept:"Procurement",rep:"CFO",st:"Warm",sc:54,stc:C.amber,tags:["Vendor Mgmt","Cost Optimization"],
    intel:"Procurement gatekeeper — contracts >$500K go through her. Consolidating from 47 to 30 vendors. Warm via James.\n\nRecommendation: Sell consolidation, not features. Position as 3-in-1 platform.",
    email:"Subject: Vendor consolidation — 3 platforms → 1\n\nSarah,\n\nOur platform replaces three tool categories with a single system. James Thornton's team is already exploring this.\n\nBest regards",
    brief:"PRE-CALL BRIEF — Sarah Kim, Procurement\n\n• Gatekeeper, contracts >$500K\n• Warm (Score 54, via James)\n• Consolidating vendors (47 → 30)\n• Angle: 3-in-1 consolidation\n• Close for: Vendor evaluation inclusion"},
  {id:"r",name:"Rajesh Gupta",role:"Director of IT",dept:"IT",rep:"CTO",st:"New",sc:15,stc:C.slate,tags:["Security","API","Architecture"],
    intel:"Gates security review. Manages 200+ SaaS. Known for blocking vendors without SOC2/HIPAA.\n\nDon't approach cold — route through James.\n\nRecommendation: Technical architecture one-pager. Lead with security posture.",
    email:"Subject: Technical architecture overview\n\nRajesh,\n\nJames suggested I connect for technical eval.\n\n• SOC2 Type II, HIPAA compliant\n• RESTful API with webhooks\n• SSO via SAML 2.0 / OAuth\n\nHappy to set up a call with engineering.",
    brief:"PRE-CALL BRIEF — Rajesh Gupta, IT\n\n• Gates security reviews, 200+ SaaS\n• New (Score 15)\n• Concern: SOC2, HIPAA\n• Route through James\n• Close for: Engineering deep-dive"},
];
const stkIc=[Ic.brain,Ic.users,Ic.chart,Ic.gear];

function Demo(){
  const[sel,setSel]=useState(0);
  const[tab,setTab]=useState("intel");
  const[typing,setTyping]=useState(true);
  const{mob}=useMedia();
  const p=STK[sel];
  const tabs=[{id:"intel",label:"Intelligence",ic:Ic.search},{id:"email",label:"Email",ic:Ic.mail},{id:"brief",label:"Brief",ic:Ic.clip}];
  const content=tab==="intel"?p.intel:tab==="email"?p.email:p.brief;
  useEffect(()=>{setTyping(false);const t=setTimeout(()=>setTyping(true),50);return()=>clearTimeout(t)},[sel,tab]);

  return(
    <section id="demo" style={{padding:mob?"60px 20px":"100px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Rev><div style={{textAlign:"center",marginBottom:mob?32:56}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>See It In Action</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?26:42,color:C.white,marginTop:12}}>Select a stakeholder.</h2><p style={{fontSize:mob?14:16,color:C.slate,marginTop:8,maxWidth:500,margin:"8px auto 0"}}>Click any person, switch tabs to see different AI outputs.</p></div></Rev>
        <Rev delay={.1}>
          <div style={{display:"grid",gridTemplateColumns:mob?"repeat(2,1fr)":"repeat(4,1fr)",gap:mob?10:16,marginBottom:mob?20:32}}>
            {STK.map((s,i)=>(<button key={s.id} onClick={()=>{setSel(i);setTab("intel")}} style={{background:sel===i?C.cardHover:C.card,border:`1px solid ${sel===i?s.stc:C.border}`,borderRadius:10,padding:mob?14:20,cursor:"pointer",textAlign:"left",transition:"all .3s",outline:"none",boxShadow:sel===i?`0 0 16px ${s.stc}22`:"none",fontFamily:FB,color:C.white}}>
              <div style={{marginBottom:6}}>{stkIc[i](s.stc)}</div>
              <div style={{fontFamily:FH,fontWeight:700,fontSize:mob?12:14}}>{s.name}</div>
              <div style={{fontSize:mob?10:12,color:C.slate,marginTop:2}}>{s.role}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}>
                <span style={{fontSize:9,fontWeight:700,color:s.stc,background:s.stc+"18",padding:"2px 6px",borderRadius:4,textTransform:"uppercase"}}>{s.st}</span>
                <span style={{fontSize:10,fontFamily:FM,color:C.slate}}>{s.sc}</span>
              </div>
            </button>))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"240px 1fr",background:C.card,border:`1px solid ${C.border}`,borderRadius:14,overflow:"hidden"}}>
            {!mob&&(<div style={{padding:22,borderRight:`1px solid ${C.border}`}}>
              <div style={{marginBottom:10}}>{stkIc[sel](p.stc)}</div>
              <div style={{fontFamily:FH,fontWeight:700,fontSize:16,color:C.white}}>{p.name}</div>
              <div style={{fontSize:12,color:C.slate,marginTop:4}}>{p.role} · {p.dept}</div>
              <div style={{fontSize:11,color:C.slate,marginTop:2}}>Reports to {p.rep}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5,marginTop:12}}>{p.tags.map(t=>(<span key={t} style={{fontSize:9,fontWeight:600,color:C.teal,background:C.teal+"15",border:`1px solid ${C.teal}33`,borderRadius:5,padding:"2px 6px"}}>{t}</span>))}</div>
              <div style={{marginTop:16,paddingTop:10,borderTop:`1px solid ${C.border}`}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}><span style={{color:C.slate}}>Engagement</span><span style={{color:p.stc,fontWeight:600}}>{p.sc}/100</span></div>
                <div style={{height:4,background:C.navyMid,borderRadius:2}}><div style={{height:"100%",borderRadius:2,width:`${p.sc}%`,background:`linear-gradient(90deg,${p.stc},${p.stc}88)`,transition:"width .6s"}}/></div>
              </div>
            </div>)}
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",borderBottom:`1px solid ${C.border}`}}>{tabs.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:mob?"10px 8px":"12px 14px",border:"none",cursor:"pointer",background:tab===t.id?C.cardHover:"transparent",color:tab===t.id?C.white:C.slate,fontSize:mob?12:13,fontWeight:600,fontFamily:FB,borderBottom:tab===t.id?`2px solid ${C.teal}`:"2px solid transparent",transition:"all .2s"}}>{t.label}</button>
              ))}</div>
              <div style={{padding:mob?16:20,flex:1}}>
                <div style={{fontSize:9,fontFamily:FM,color:C.teal,marginBottom:8,display:"flex",alignItems:"center",gap:6,opacity:.7}}>
                  <span style={{width:5,height:5,borderRadius:"50%",background:C.teal,display:"inline-block",animation:"pg 2s infinite"}}/>SalesDendrite AI
                </div>
                <div style={{fontSize:mob?12:13,lineHeight:1.8,color:C.slateLight,whiteSpace:"pre-wrap",maxHeight:mob?260:340,overflowY:"auto"}}><TW text={content} trigger={typing} speed={8}/></div>
              </div>
              <div style={{padding:"8px 16px",borderTop:`1px solid ${C.border}`,fontSize:8,fontFamily:FM,color:C.slate,letterSpacing:".08em",textTransform:"uppercase"}}>Context: Org · Financial · Stakeholder · Capability</div>
            </div>
          </div>
        </Rev>
      </div>
    </section>
  );
}

/* ═══════════ MODULES ═══════════ */
/* ═══════════ MODULES — hover expand + liquid glass ═══════════ */
function Modules(){
  const[hov,setHov]=useState(null);
  const{mob,tab:isTab}=useMedia();
  const ms=[
    {ic:Ic.users,n:"Stakeholder Directory",d:"Full org with hierarchy inference, engagement scoring.",dt:"Upload org charts in PDF, PNG, CSV. AI auto-infers reporting lines. Track engagement over time. Visualize relationship networks across the account.",c:C.teal,emoji:"👥"},
    {ic:Ic.news,n:"Public Intelligence",d:"Financial analysis, clinical pipeline, milestones — AI-summarised.",dt:"SEC 10-K/10-Q auto-parsed. ClinicalTrials.gov sync. FDA calendar integration. AI generates narrative briefs per account.",c:C.blue,emoji:"📰"},
    {ic:Ic.brain,n:"Intel Hub",d:"Meeting notes, competitive intel. Institutional memory.",dt:"Structured capture of meeting insights. Competitive landscape tracking. Initiative mapping to stakeholders. Survives rep transitions.",c:C.amber,emoji:"🧠"},
    {ic:Ic.ai,n:"AI Workspace",d:"Claude-powered partner with full account context.",dt:"Every AI response draws from org structure, financials, stakeholders, capabilities. A contextual sales strategist, not a chatbot.",c:C.purple,emoji:"🤖"},
    {ic:Ic.target,n:"Buying Committee",d:"Map Champion, Decision Maker, Blocker. See gaps.",dt:"Role assignment with AI suggestions. Coverage gap analysis. Risk scoring per committee member. AI flags missing roles.",c:C.teal,emoji:"🎯"},
    {ic:Ic.people,n:"Target Stakeholders",d:"AI conversion strategies, path-to-influence mapping.",dt:"Per-stakeholder action plans. Influence path mapping between contacts. Engagement playbooks generated from account context.",c:C.red,emoji:"🎪"},
    {ic:Ic.chart,n:"Capability Intelligence",d:"Service library, case studies, opportunity matching.",dt:"Upload your capability library. AI matches capabilities to stakeholder needs and active initiatives. Auto-generates positioning.",c:C.blue,emoji:"📊"},
    {ic:Ic.gear,n:"Settings & RBAC",d:"Multi-user auth, CRM connectors, brand templates.",dt:"Role-based access control. API key management. Salesforce, HubSpot, Veeva, Dynamics 365 sync. White-label brand templates.",c:C.slate,emoji:"⚙️"},
  ];
  const cols=mob?"repeat(2,1fr)":isTab?"repeat(3,1fr)":"repeat(4,1fr)";

  return(
    <section id="modules" style={{padding:mob?"60px 20px":"100px 24px",maxWidth:1400,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:mob?40:64}}>
        <span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>Platform Modules</span>
        <h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?26:42,color:C.white,marginTop:12}}>Seven modules. One data layer.</h2>
        {!mob&&<p style={{fontSize:14,color:C.slate,marginTop:8}}>Hover any module to explore</p>}
      </div></Rev>
      <div style={{display:"grid",gridTemplateColumns:cols,gap:mob?10:16}}>
        {ms.map((m,i)=>{
          const isHov=hov===i;
          return(
            <Rev key={i} delay={i*.04} style={{height:"100%"}}>
              <div
                onMouseEnter={()=>setHov(i)}
                onMouseLeave={()=>setHov(null)}
                onClick={()=>mob&&setHov(hov===i?null:i)}
                style={{
                  position:"relative",
                  borderRadius:16,
                  padding:mob?"18px 16px":isHov?"28px 24px":"24px 20px",
                  transition:"all .5s cubic-bezier(.22,1,.36,1)",
                  cursor:"pointer",
                  height:"100%",
                  overflow:"hidden",
                  /* Liquid glass effect */
                  background:isHov
                    ?`linear-gradient(135deg, ${m.c}18 0%, ${C.card}DD 40%, ${m.c}0A 100%)`
                    :`${C.card}BB`,
                  backdropFilter:isHov?"blur(24px) saturate(1.4)":"blur(12px) saturate(1.1)",
                  WebkitBackdropFilter:isHov?"blur(24px) saturate(1.4)":"blur(12px) saturate(1.1)",
                  border:isHov?`1px solid ${m.c}44`:`1px solid ${C.border}88`,
                  borderTop:isHov?`2px solid ${m.c}`:`2px solid ${m.c}66`,
                  boxShadow:isHov
                    ?`0 8px 32px ${m.c}20, inset 0 1px 0 ${C.white}08, 0 0 0 1px ${m.c}15`
                    :`inset 0 1px 0 ${C.white}05`,
                  transform:isHov&&!mob?"translateY(-6px) scale(1.02)":"none",
                  zIndex:isHov?10:1,
                }}
              >
                {/* Glossy highlight — top edge refraction */}
                <div style={{
                  position:"absolute",top:0,left:0,right:0,height:isHov?60:40,
                  background:`linear-gradient(180deg, ${C.white}${isHov?"0A":"05"} 0%, transparent 100%)`,
                  borderRadius:"16px 16px 0 0",
                  transition:"all .5s",
                  pointerEvents:"none",
                }}/>

                {/* Content */}
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:isHov?12:8,transition:"margin .4s"}}>
                    <div style={{
                      width:isHov?42:36,height:isHov?42:36,borderRadius:isHov?12:10,
                      background:`${m.c}15`,border:`1px solid ${m.c}30`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      transition:"all .4s",
                    }}>
                      {m.ic(m.c)}
                    </div>
                    <h3 style={{fontFamily:FH,fontWeight:700,fontSize:mob?13:isHov?16:14,color:C.white,transition:"font-size .3s"}}>{m.n}</h3>
                  </div>

                  <p style={{fontSize:mob?11:12,color:isHov?C.slateLight:C.slate,lineHeight:1.6,transition:"color .3s"}}>{m.d}</p>

                  {/* Expanded detail — slides in on hover */}
                  <div style={{
                    maxHeight:isHov?200:0,
                    opacity:isHov?1:0,
                    overflow:"hidden",
                    transition:"max-height .5s cubic-bezier(.22,1,.36,1), opacity .4s ease-out",
                    marginTop:isHov?12:0,
                  }}>
                    <div style={{
                      padding:"12px 14px",
                      background:`${C.navy}66`,
                      backdropFilter:"blur(8px)",
                      borderRadius:10,
                      border:`1px solid ${m.c}20`,
                      fontSize:12,
                      color:C.slateLight,
                      lineHeight:1.6,
                    }}>
                      {m.dt}
                    </div>
                  </div>
                </div>
              </div>
            </Rev>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════ WHY ═══════════ */
function Why(){
  const{mob}=useMedia();
  const layers=["Org Structure","Capability Library","Team Intel","Public Intelligence"];
  const bs=[
    {ic:Ic.bolt,t:"Hyper-Personalised Collateral",d:"AI drafts emails, briefs, and decks using stakeholder role and real account initiatives."},
    {ic:Ic.target,t:"AI Opportunity Discovery",d:"Cross-references capabilities against initiatives to surface hidden opportunities."},
    {ic:Ic.brain,t:"Contextual Recommendations",d:"Who to contact, which capability to lead with, which champion opens the door."},
    {ic:Ic.shield,t:"Institutional Memory",d:"Meeting notes and relationship history survive rep transitions."},
    {ic:Ic.search,t:"Gap Analysis",d:"Buying committee, engagement, and capability gaps — visible with AI plays."},
    {ic:Ic.chart,t:"Financially-Aware Engagement",d:"Revenue trends and pipeline data flow into every AI interaction."},
  ];
  return(
    <section id="why" style={{padding:mob?"60px 20px":"100px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Rev><div style={{textAlign:"center",marginBottom:mob?32:48}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>Why SalesDendrite</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?26:42,color:C.white,marginTop:12}}>Four data layers converge into execution.</h2></div></Rev>
        {!mob&&<Rev delay={.1}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap",marginBottom:56,padding:"20px 0"}}>{layers.map((l,i)=>(<React.Fragment key={l}><span style={{fontFamily:FM,fontSize:12,color:C.teal,background:C.teal+"12",border:`1px solid ${C.teal}33`,borderRadius:8,padding:"7px 14px"}}>{l}</span>{i<3&&<span style={{color:C.slate}}>+</span>}</React.Fragment>))}<span style={{color:C.teal,fontSize:18,margin:"0 6px"}}>→</span><span style={{fontFamily:FH,fontWeight:800,fontSize:14,background:`linear-gradient(135deg,${C.teal},${C.blue})`,color:C.navy,borderRadius:8,padding:"9px 18px"}}>Execution Intelligence</span></div></Rev>}
        <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"repeat(3,1fr)",gap:mob?14:20}}>{bs.map((b,i)=>(
          <Rev key={i} delay={i*.06} style={{height:"100%"}}><div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:mob?"20px":"26px 22px",transition:"all .3s",height:"100%"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal+"44"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border}}>
            <div style={{marginBottom:8}}>{b.ic(C.teal)}</div>
            <h3 style={{fontFamily:FH,fontWeight:700,fontSize:mob?14:15,color:C.white,marginBottom:5}}>{b.t}</h3>
            <p style={{fontSize:mob?12:13,color:C.slate,lineHeight:1.7}}>{b.d}</p>
          </div></Rev>
        ))}</div>
      </div>
    </section>
  );
}

/* ═══════════ CAROUSEL ═══════════ */
function Carousel(){
  const[p,sP]=useState(false);
  const items=["Salesforce","HubSpot","Veeva CRM","Dynamics 365","Google Drive","SharePoint","Confluence","Notion","Slack","Teams","SEC Edgar","ClinicalTrials.gov","LinkedIn","ZoomInfo","Apollo","Outreach"];
  return(
    <section style={{padding:"50px 0",overflow:"hidden"}}>
      <Rev><p style={{textAlign:"center",fontSize:11,fontWeight:600,letterSpacing:".15em",textTransform:"uppercase",color:C.slate,marginBottom:20}}>Connects with your stack</p></Rev>
      <div onMouseEnter={()=>sP(true)} onMouseLeave={()=>sP(false)} style={{display:"flex",animation:"mq 30s linear infinite",animationPlayState:p?"paused":"running",width:"fit-content"}}>
        {[...items,...items].map((n,i)=>(<div key={i} style={{flexShrink:0,padding:"8px 20px",margin:"0 5px",background:C.card,border:`1px solid ${C.border}`,borderRadius:6,fontFamily:FM,fontSize:11,color:C.slate,fontWeight:500,whiteSpace:"nowrap",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.color=C.teal}} onMouseLeave={e=>{e.currentTarget.style.color=C.slate}}>{n}</div>))}
      </div>
    </section>
  );
}

/* ═══════════ COMPARISON ═══════════ */
function Compare(){
  const{mob}=useMedia();
  const[hov,setHov]=useState(null);
  const fs=[
    {n:"Contact database",sd:1,zi:1,go:1,cl:1},{n:"Org hierarchy mapping",sd:1,zi:0,go:0,cl:0},{n:"AI email generation",sd:1,zi:0,go:1,cl:0},{n:"Buying committee mapping",sd:1,zi:0,go:0,cl:0},
    {n:"Financial intelligence",sd:1,zi:0,go:0,cl:1},{n:"AI pre-call briefs",sd:1,zi:0,go:1,cl:0},{n:"Conversion strategies",sd:1,zi:0,go:0,cl:0},{n:"Capability matching",sd:1,zi:0,go:0,cl:0},{n:"Full context AI",sd:1,zi:0,go:0,cl:0},
  ];
  const Y=()=><span style={{color:C.teal,fontSize:14}}>✓</span>;
  const N=()=><span style={{color:C.border}}>—</span>;
  return(
    <section style={{padding:mob?"60px 20px":"80px 24px",maxWidth:900,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:mob?32:48}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>How We Compare</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?24:36,color:C.white,marginTop:12}}>Built for sales execution intelligence.</h2></div></Rev>
      <Rev delay={.1}><div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,overflow:"auto",WebkitOverflowScrolling:"touch"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:mob?11:13,minWidth:mob?500:"auto"}}>
          <thead><tr style={{borderBottom:`1px solid ${C.border}`}}><th style={{padding:mob?"10px 12px":"14px 18px",textAlign:"left",color:C.slate,fontWeight:500}}>Feature</th><th style={{padding:"10px 8px",textAlign:"center",width:mob?70:95}}><span className="gt" style={{fontFamily:FH,fontWeight:700,fontSize:mob?11:13}}>SD</span></th><th style={{padding:"10px 8px",textAlign:"center",color:C.slate,fontWeight:500,width:mob?55:80}}>ZoomInfo</th><th style={{padding:"10px 8px",textAlign:"center",color:C.slate,fontWeight:500,width:mob?55:80}}>Gong</th><th style={{padding:"10px 8px",textAlign:"center",color:C.slate,fontWeight:500,width:mob?55:80}}>Clari</th></tr></thead>
          <tbody>{fs.map((f,i)=>(<tr key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{borderBottom:i<fs.length-1?`1px solid ${C.border}44`:"none",background:hov===i?C.cardHover:i%2===0?"transparent":C.navyMid+"44",transition:"background .2s"}}>
            <td style={{padding:mob?"8px 12px":"11px 18px",color:hov===i?C.white:C.slateLight,fontWeight:500}}>{f.n}</td>
            <td style={{textAlign:"center",background:C.teal+"08"}}>{f.sd?<Y/>:<N/>}</td><td style={{textAlign:"center"}}>{f.zi?<Y/>:<N/>}</td><td style={{textAlign:"center"}}>{f.go?<Y/>:<N/>}</td><td style={{textAlign:"center"}}>{f.cl?<Y/>:<N/>}</td>
          </tr>))}</tbody>
        </table>
      </div></Rev>
    </section>
  );
}

/* ═══════════ CONTACT ═══════════ */
function Contact(){
  const[f,sF]=useState({name:"",email:"",company:"",message:""});
  const[done,setDone]=useState(false);
  const[sending,setSending]=useState(false);
  const[foc,sFoc]=useState(null);
  const{mob}=useMedia();
  const ip=k=>({width:"100%",padding:mob?"10px 14px":"12px 16px",background:C.navyMid,border:`1px solid ${foc===k?C.teal:C.border}`,borderRadius:8,color:C.white,fontSize:14,fontFamily:FB,outline:"none",transition:"border-color .2s"});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!f.name||!f.email||!f.company)return;
    setSending(true);
    try{await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({"form-name":"contact",...f}).toString()});setDone(true)}catch(err){setDone(true)}
    setSending(false);
  };

  return(
    <section id="contact" style={{padding:mob?"60px 20px":"100px 24px"}}>
      <div style={{maxWidth:560,margin:"0 auto",textAlign:"center"}}>
        <Rev><h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?28:42,color:C.white,marginBottom:12}}>Let's put this on your account.</h2><p style={{fontSize:mob?14:16,color:C.slate,marginBottom:32,lineHeight:1.7}}>Pick one account. Upload the org chart. Let the platform do its thing.</p></Rev>
        {done?(
          <Rev><div style={{background:C.teal+"15",border:`1px solid ${C.teal}44`,borderRadius:14,padding:"36px 28px"}}><div style={{marginBottom:10}}><BrandIcon size={36}/></div><h3 style={{fontFamily:FH,fontWeight:700,fontSize:20,color:C.white}}>We'll be in touch.</h3><p style={{fontSize:14,color:C.slate,marginTop:6}}>Expect a reply within 24 hours.</p></div></Rev>
        ):(
          <Rev delay={.1}><form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:14,textAlign:"left"}}>
            <input type="hidden" name="form-name" value="contact"/>
            <p style={{display:"none"}}><label>Don't fill this out: <input name="bot-field"/></label></p>
            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:14}}>
              <input name="name" placeholder="Name" required style={ip("n")} value={f.name} onChange={e=>sF(p=>({...p,name:e.target.value}))} onFocus={()=>sFoc("n")} onBlur={()=>sFoc(null)}/>
              <input name="email" placeholder="Email" type="email" required style={ip("e")} value={f.email} onChange={e=>sF(p=>({...p,email:e.target.value}))} onFocus={()=>sFoc("e")} onBlur={()=>sFoc(null)}/>
            </div>
            <input name="company" placeholder="Company" required style={ip("c")} value={f.company} onChange={e=>sF(p=>({...p,company:e.target.value}))} onFocus={()=>sFoc("c")} onBlur={()=>sFoc(null)}/>
            <textarea name="message" placeholder="Tell us about your account (optional)" rows={3} style={{...ip("m"),resize:"vertical"}} value={f.message} onChange={e=>sF(p=>({...p,message:e.target.value}))} onFocus={()=>sFoc("m")} onBlur={()=>sFoc(null)}/>
            <button type="submit" className="gb" disabled={sending} style={{padding:"14px 28px",borderRadius:10,fontSize:15,fontWeight:700,fontFamily:FB,width:"100%",marginTop:6,opacity:sending?.6:1}}>{sending?"Sending...":"Request a Demo →"}</button>
          </form></Rev>
        )}
      </div>
    </section>
  );
}

/* ═══════════ FOOTER ═══════════ */
function Foot(){
  const{mob}=useMedia();
  return(
    <footer style={{padding:mob?"32px 20px":"48px 24px",borderTop:`1px solid ${C.border}`,textAlign:"center"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:10}}><BrandIcon size={20}/><span style={{fontFamily:FH,fontWeight:700,fontSize:15,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span></div>
      <p style={{fontSize:12,color:C.slate,marginBottom:12,fontStyle:"italic"}}>Map the org. Own the deal.</p>
      <div style={{display:"flex",justifyContent:"center",gap:mob?16:24,fontSize:11,color:C.slate,flexWrap:"wrap"}}><span>© 2026 SalesDendrite</span><a href="#" style={{color:C.slate,textDecoration:"none"}}>Privacy</a><a href="#" style={{color:C.slate,textDecoration:"none"}}>Terms</a></div>
    </footer>
  );
}

/* ═══════════ APP ═══════════ */
export default function App(){return(
  <div style={{minHeight:"100vh"}}>
    <Sty/><FlowingBG/><CursorGlow/><Particles/><Nav/><Hero/><Stats/><Problem/><Platform/><Demo/><Modules/><Why/><Carousel/><Compare/><Contact/><Foot/>
  </div>
)}

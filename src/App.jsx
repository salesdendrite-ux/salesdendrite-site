import { useState, useEffect, useRef } from "react";

const C = { navy:"#0B1D3A",navyMid:"#0F2847",card:"#0D2240",cardHover:"#112A4D",blue:"#2D7FF9",teal:"#00C9A7",red:"#EF4343",amber:"#F59E0B",purple:"#8B5CF6",slate:"#94A3B8",slateLight:"#CBD5E1",white:"#FFFFFF",border:"#1E3A5F" };
const FH=`'Outfit',sans-serif`,FB=`'DM Sans',sans-serif`,FM=`'JetBrains Mono',monospace`;

/* ─── CSS ─── */
const CSS=`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{background:${C.navy};color:${C.slateLight};font-family:${FB};line-height:1.6;overflow-x:hidden}
::selection{background:${C.teal}33;color:${C.white}}
@keyframes su{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes bk{0%,50%{border-color:${C.teal}}51%,100%{border-color:transparent}}
@keyframes pg{0%,100%{opacity:.4}50%{opacity:.9}}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fd{from{stroke-dashoffset:20}to{stroke-dashoffset:0}}
.gt{background:linear-gradient(135deg,${C.teal},${C.blue});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.gb{background:linear-gradient(135deg,${C.teal},${C.blue});color:${C.white};border:none;cursor:pointer;transition:all .3s}
.gb:hover{transform:translateY(-2px);box-shadow:0 8px 30px ${C.teal}44}
.ob{background:transparent;color:${C.white};border:1px solid ${C.border};cursor:pointer;transition:all .3s}
.ob:hover{border-color:${C.teal};background:${C.teal}11}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${C.navy}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}`;

function Sty(){useEffect(()=>{if(!document.getElementById("sd")){const s=document.createElement("style");s.id="sd";s.textContent=CSS;document.head.appendChild(s)}},[]);return null}

/* ─── Hooks ─── */
function useR(t=.15){const r=useRef(null),[ v,s]=useState(false);useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){s(true);o.disconnect()}},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[r,v]}
function Rev({children,delay=0,y=28,style={}}){const[r,v]=useR();return(<div ref={r} style={{opacity:v?1:0,transform:v?"none":`translateY(${y}px)`,transition:`opacity .7s cubic-bezier(.22,1,.36,1) ${delay}s, transform .7s cubic-bezier(.22,1,.36,1) ${delay}s`,...style}}>{children}</div>)}
function ACt({end,sfx="",dur=2000}){const[v,sV]=useState(0);const[r,vis]=useR();useEffect(()=>{if(!vis)return;let s=0;const st=end/(dur/16);const t=setInterval(()=>{s+=st;if(s>=end){sV(end);clearInterval(t)}else sV(Math.floor(s))},16);return()=>clearInterval(t)},[vis,end,dur]);return(<span ref={r}>{v}{sfx}</span>)}
function TW({text,speed=8,trigger=true}){const[d,sD]=useState("");const i=useRef(0);useEffect(()=>{if(!trigger){sD("");i.current=0;return}i.current=0;sD("");const t=setInterval(()=>{i.current++;sD(text.slice(0,i.current));if(i.current>=text.length)clearInterval(t)},speed);return()=>clearInterval(t)},[text,trigger,speed]);return(<span>{d}<span style={{borderRight:`2px solid ${C.teal}`,animation:"bk 1s infinite",marginLeft:1}}>&nbsp;</span></span>)}

/* ─── REAL Brand Logo SVG (from LogoKit icon_color_transparent.svg) ─── */
function BrandIcon({size=32}){
  const s=size/64;
  return(
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="blg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00C9A7"/><stop offset="100%" stopColor="#2D7FF9"/></linearGradient></defs>
      <line x1="32" y1="56" x2="32" y2="28" stroke="url(#blg)" strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="36" x2="16" y2="20" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32" y1="28" x2="48" y2="14" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="8" y2="10" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="22" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="48" y1="14" x2="42" y2="6" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="48" y1="14" x2="56" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="56" r="4" fill="#00C9A7"/>
      <circle cx="32" cy="36" r="3" fill="#2D7FF9" opacity="0.7"/>
      <circle cx="32" cy="28" r="3.5" fill="#2D7FF9"/>
      <circle cx="16" cy="20" r="3" fill="#2D7FF9"/>
      <circle cx="48" cy="14" r="3" fill="#2D7FF9"/>
      <circle cx="8" cy="10" r="2.5" fill="#00C9A7"/>
      <circle cx="22" cy="8" r="2.5" fill="#00C9A7"/>
      <circle cx="42" cy="6" r="2.5" fill="#00C9A7"/>
      <circle cx="56" cy="8" r="2.5" fill="#00C9A7"/>
    </svg>
  );
}

/* ─── SVG Section Icons ─── */
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

/* ═══════════ NAVBAR ═══════════ */
function Nav(){
  const[sc,setSc]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
  const lnk=[["Platform","#platform"],["Demo","#demo"],["Modules","#modules"],["Why Us","#why"],["Contact","#contact"]];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:sc?"10px 0":"18px 0",background:sc?`${C.navy}EE`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}44`:"none",transition:"all .4s"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
          <BrandIcon size={30}/>
          <span style={{fontFamily:FH,fontWeight:700,fontSize:20,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:32}}>
          {lnk.map(([l,h])=>(<a key={h} href={h} style={{color:C.slate,textDecoration:"none",fontSize:14,fontWeight:500,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.slate}>{l}</a>))}
          <a href="#contact" className="gb" style={{padding:"10px 24px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none",fontFamily:FB}}>Request Demo</a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════ HERO — interactive org chart + role personalization ═══════════ */
const ROLES={
  rep:{label:"Sales Rep",h1:"Know who to call.",h2:"Know what to say.",sub:"See the full org hierarchy, get AI-drafted emails, and walk into every meeting with context no competitor has."},
  leader:{label:"Sales Leader",h1:"See every deal's org.",h2:"Coach with structure.",sub:"Multi-thread strategically, identify buying committee gaps, and coach reps with real account intelligence."},
  enablement:{label:"Enablement",h1:"Arm your team.",h2:"Intelligence at scale.",sub:"Build account plans grounded in org structure, financial data, and competitive intel."},
};

function OrgChart(){
  const[step,setStep]=useState(0);
  const[clicked,setClicked]=useState(null);
  useEffect(()=>{const ts=[setTimeout(()=>setStep(1),400),setTimeout(()=>setStep(2),900),setTimeout(()=>setStep(3),1400),setTimeout(()=>setStep(4),2000),setTimeout(()=>setStep(5),2600)];return()=>ts.forEach(clearTimeout)},[]);
  const ns=d=>({opacity:step>=d?1:0,transform:step>=d?"scale(1)":"scale(0)",transition:"all .5s cubic-bezier(.34,1.56,.64,1)"});
  const ls=d=>({strokeDasharray:100,strokeDashoffset:step>=d?0:100,transition:"stroke-dashoffset .8s ease-out"});
  const nodes=[
    {id:"ceo",lb:"CEO",x:145,y:8,w:50,bg:`linear-gradient(135deg,${C.teal},${C.blue})`,cl:C.navy,bd:"none",d:1,tip:"Decision maker. Budget authority for enterprise deals."},
    {id:"vps",lb:"VP Sales",x:55,y:78,w:52,bg:C.card,cl:C.teal,bd:`2px solid ${C.teal}`,d:2,tip:"Primary champion. Has $2M discretionary budget."},
    {id:"vpo",lb:"VP Ops",x:225,y:78,w:52,bg:C.card,cl:C.blue,bd:`2px solid ${C.blue}`,d:2,tip:"Operational gatekeeper. Manages vendor approvals."},
  ];
  const leafs=[
    {id:"d1",lb:"Dir.",x:18,y:155,d:3,tip:"Analytics team lead. Technical evaluator."},
    {id:"d2",lb:"Mgr.",x:92,y:155,d:3,tip:"Influenced 3 past vendor selections."},
    {id:"d3",lb:"Lead",x:188,y:155,d:4,tip:"Digital transformation project lead."},
    {id:"d4",lb:"Eng.",x:262,y:155,d:4,tip:"Integration architect. Runs technical POC."},
  ];
  const all=[...nodes,...leafs];

  return(
    <div style={{position:"relative",width:330,height:270}}>
      <svg width="330" height="210" viewBox="0 0 330 210" style={{position:"absolute",top:0,left:0}}>
        <line x1="170" y1="35" x2="81" y2="95" stroke={C.teal} strokeWidth="1.5" style={ls(2)} opacity=".6"/>
        <line x1="170" y1="35" x2="251" y2="95" stroke={C.teal} strokeWidth="1.5" style={ls(2)} opacity=".6"/>
        <line x1="81" y1="115" x2="38" y2="172" stroke={C.blue} strokeWidth="1.2" style={ls(3)} opacity=".4"/>
        <line x1="81" y1="115" x2="112" y2="172" stroke={C.blue} strokeWidth="1.2" style={ls(3)} opacity=".4"/>
        <line x1="251" y1="115" x2="208" y2="172" stroke={C.blue} strokeWidth="1.2" style={ls(4)} opacity=".4"/>
        <line x1="251" y1="115" x2="282" y2="172" stroke={C.blue} strokeWidth="1.2" style={ls(4)} opacity=".4"/>
      </svg>
      {nodes.map(n=>(
        <div key={n.id} onClick={()=>setClicked(clicked===n.id?null:n.id)} style={{...ns(n.d),position:"absolute",left:n.x,top:n.y,width:n.w,height:n.w,borderRadius:"50%",background:n.bg,border:n.bd,display:"flex",alignItems:"center",justifyContent:"center",fontSize:n.id==="ceo"?11:9,fontWeight:700,color:n.cl,fontFamily:FH,textAlign:"center",lineHeight:1.1,cursor:"pointer",boxShadow:clicked===n.id?`0 0 16px ${C.teal}55`:"none",transition:"all .3s"}}>{n.lb}</div>
      ))}
      {leafs.map(n=>(
        <div key={n.id} onClick={()=>setClicked(clicked===n.id?null:n.id)} style={{...ns(n.d),position:"absolute",left:n.x,top:n.y,width:40,height:40,borderRadius:"50%",border:`1.5px solid ${C.border}`,background:C.navyMid,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:500,color:C.slate,fontFamily:FH,cursor:"pointer",boxShadow:clicked===n.id?`0 0 12px ${C.blue}44`:"none",transition:"all .3s"}}>{n.lb}</div>
      ))}
      {clicked?(
        <div style={{position:"absolute",left:0,right:0,bottom:0,background:`${C.card}F0`,border:`1px solid ${C.teal}44`,borderRadius:8,padding:"8px 12px",fontSize:11,fontFamily:FM,color:C.teal,backdropFilter:"blur(8px)",animation:"su .3s ease-out",lineHeight:1.5}}>
          <span style={{color:C.amber,marginRight:6}}>⚡</span>{all.find(n=>n.id===clicked)?.tip}
        </div>
      ):step>=5?(
        <div style={{position:"absolute",right:-8,top:35,background:`${C.card}EE`,border:`1px solid ${C.teal}44`,borderRadius:8,padding:"8px 12px",fontSize:10,fontFamily:FM,color:C.teal,backdropFilter:"blur(8px)",whiteSpace:"nowrap",animation:"su .5s ease-out"}}>Click any node for AI insight</div>
      ):null}
    </div>
  );
}

function Hero(){
  const[role,setRole]=useState("rep");
  const r=ROLES[role];
  return(
    <section style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 80% 60% at 20% 50%,${C.teal}12 0%,transparent 70%),radial-gradient(ellipse 60% 80% at 80% 30%,${C.blue}15 0%,transparent 60%),${C.navy}`}}/>
      <div style={{position:"absolute",inset:0,opacity:.03,backgroundImage:`linear-gradient(${C.white} 1px,transparent 1px),linear-gradient(90deg,${C.white} 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:1200,margin:"0 auto",padding:"140px 24px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",width:"100%"}}>
        <div>
          <div style={{animation:"su .6s ease-out",animationFillMode:"backwards"}}>
            <span style={{display:"inline-block",fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal,border:`1px solid ${C.teal}33`,borderRadius:999,padding:"6px 18px",background:`${C.teal}0D`,marginBottom:24}}>Sales Execution Intelligence</span>
          </div>
          <div style={{display:"flex",gap:4,marginBottom:20,background:C.card,borderRadius:8,padding:3,border:`1px solid ${C.border}`,animation:"su .6s ease-out .08s",animationFillMode:"backwards",width:"fit-content"}}>
            {Object.entries(ROLES).map(([k,v])=>(
              <button key={k} onClick={()=>setRole(k)} style={{padding:"6px 14px",borderRadius:6,fontSize:11,fontWeight:600,fontFamily:FB,border:"none",cursor:"pointer",transition:"all .3s",background:role===k?`linear-gradient(135deg,${C.teal},${C.blue})`:C.card,color:role===k?C.white:C.slate}}>{v.label}</button>
            ))}
          </div>
          <h1 style={{fontFamily:FH,fontWeight:900,fontSize:52,lineHeight:1.08,color:C.white,marginBottom:20,animation:"su .6s ease-out .15s",animationFillMode:"backwards",minHeight:116}}>
            {r.h1}<br/><span className="gt">{r.h2}</span>
          </h1>
          <p style={{fontSize:17,color:C.slate,maxWidth:460,marginBottom:36,lineHeight:1.7,animation:"su .6s ease-out .3s",animationFillMode:"backwards",minHeight:56}}>{r.sub}</p>
          <div style={{display:"flex",gap:16,animation:"su .6s ease-out .45s",animationFillMode:"backwards"}}>
            <a href="#contact" className="gb" style={{padding:"14px 32px",borderRadius:10,fontSize:15,fontWeight:600,textDecoration:"none",fontFamily:FB}}>Request a Demo</a>
            <a href="#demo" className="ob" style={{padding:"14px 32px",borderRadius:10,fontSize:15,fontWeight:500,textDecoration:"none",fontFamily:FB}}>See It Live ↓</a>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",animation:"su .8s ease-out .3s",animationFillMode:"backwards"}}>
          <div style={{background:`${C.card}AA`,border:`1px solid ${C.border}`,borderRadius:20,padding:"32px 24px 24px",backdropFilter:"blur(12px)",boxShadow:`0 24px 80px ${C.navy}88`}}>
            <div style={{fontSize:10,fontFamily:FM,color:C.teal,marginBottom:16,letterSpacing:".1em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}}>
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
  const d=[{n:21,s:"",l:"Integrations"},{n:7,s:"",l:"Modules"},{n:4,s:"",l:"Data Layers"},{n:74,s:"+",l:"API Endpoints"}];
  return(<Rev style={{maxWidth:1000,margin:"0 auto",padding:"0 24px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:1,background:C.border,borderRadius:16,overflow:"hidden"}}>{d.map((s,i)=>(<div key={i} style={{background:C.navyMid,padding:"32px 24px",textAlign:"center"}}><div style={{fontFamily:FH,fontSize:36,fontWeight:800,color:C.white}}><ACt end={s.n}/>{s.s}</div><div style={{fontSize:13,color:C.slate,marginTop:4,fontWeight:500}}>{s.l}</div></div>))}</div></Rev>);
}

/* ═══════════ PROBLEM ═══════════ */
function Problem(){
  const ps=[
    {icon:Ic.layers,title:"Contact databases are flat",desc:"ZoomInfo, Apollo, LinkedIn — names and titles. They don't tell you who reports to whom or where power sits.",color:C.red},
    {icon:Ic.bolt,title:"Intelligence stops at delivery",desc:"The gap between knowing and doing is where deals die. No tool maps insight to your next move.",color:C.amber},
    {icon:Ic.org,title:"Org structure is invisible",desc:"Buying committees are assembled from guesswork. Reps multi-thread into the wrong people.",color:C.purple},
    {icon:Ic.shield,title:"Enablement teams fly blind",desc:"Account plans built on stale CRM data and rep memory. No structural intelligence for coaching.",color:C.blue},
  ];
  return(
    <section style={{padding:"100px 24px",maxWidth:1200,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:64}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.red}}>The Problem</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginTop:12,maxWidth:700,margin:"12px auto 0"}}>Every sales tool gives you data.<br/>None of them give you the org.</h2></div></Rev>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>{ps.map((p,i)=>(
        <Rev key={i} delay={i*.1}><div style={{background:C.card,border:`1px solid ${C.border}`,borderLeft:`3px solid ${p.color}`,borderRadius:12,padding:28,transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.background=C.cardHover;e.currentTarget.style.borderColor=p.color+"66"}} onMouseLeave={e=>{e.currentTarget.style.background=C.card;e.currentTarget.style.borderColor=C.border;e.currentTarget.style.borderLeftColor=p.color}}>
          <div style={{marginBottom:12}}>{p.icon(p.color)}</div>
          <h3 style={{fontFamily:FH,fontWeight:700,fontSize:18,color:C.white,marginBottom:8}}>{p.title}</h3>
          <p style={{fontSize:14,color:C.slate,lineHeight:1.7}}>{p.desc}</p>
        </div></Rev>
      ))}</div>
    </section>
  );
}

/* ═══════════ PLATFORM — clickable steps ═══════════ */
function Platform(){
  const[active,setActive]=useState(null);
  const steps=[
    {n:"01",icon:Ic.map,t:"MAP",desc:"Upload org charts in any format. Build the hierarchy your CRM doesn't have.",detail:"Supports PDF, PNG, CSV, LinkedIn exports. AI auto-detects roles, titles, and reporting lines.",color:C.teal},
    {n:"02",icon:Ic.search,t:"UNDERSTAND",desc:"Layer financial analysis, clinical pipeline, regulatory milestones, and competitive intel.",detail:"SEC filings auto-parsed. ClinicalTrials.gov integration. News monitoring with AI summarization.",color:C.blue},
    {n:"03",icon:Ic.zap,t:"EXECUTE",desc:"AI generates conversion strategies, drafts emails, preps meetings, and builds account plans.",detail:"Full context injection from all 4 data layers. Emails, briefs, deck outlines — all personalized.",color:C.amber},
  ];
  return(
    <section id="platform" style={{padding:"100px 24px",maxWidth:1200,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:72}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>The Platform</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginTop:12}}>SalesDendrite in three moves.</h2><p style={{fontSize:14,color:C.slate,marginTop:8}}>Click each step to explore.</p></div></Rev>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>{steps.map((s,i)=>(
        <Rev key={i} delay={i*.15}><div onClick={()=>setActive(active===i?null:i)} style={{position:"relative",background:active===i?C.cardHover:C.card,border:`1px solid ${active===i?s.color+"66":C.border}`,borderRadius:16,padding:"36px 28px",overflow:"hidden",transition:"all .4s",cursor:"pointer",transform:active===i?"translateY(-6px)":"none",boxShadow:active===i?`0 16px 48px ${s.color}15`:"none"}}>
          <div style={{position:"absolute",top:-20,right:-10,fontFamily:FH,fontWeight:900,fontSize:100,color:s.color,opacity:.06,lineHeight:1}}>{s.n}</div>
          <div style={{marginBottom:16}}>{s.icon(s.color)}</div>
          <h3 style={{fontFamily:FH,fontWeight:800,fontSize:22,color:s.color,letterSpacing:".05em",marginBottom:12}}>{s.t}</h3>
          <p style={{fontSize:14,color:C.slate,lineHeight:1.7}}>{s.desc}</p>
          {active===i&&<div style={{marginTop:16,padding:"14px 16px",background:C.navyMid,borderRadius:10,border:`1px solid ${s.color}33`,fontSize:13,color:C.slateLight,lineHeight:1.7,animation:"su .3s ease-out"}}>{s.detail}</div>}
          <div style={{marginTop:12,fontSize:12,color:s.color,fontWeight:600,opacity:.6}}>{active===i?"↑ Collapse":"↓ Expand"}</div>
        </div></Rev>
      ))}</div>
    </section>
  );
}

/* ═══════════ DEMO ═══════════ */
const STK=[
  {id:"p",name:"Dr. Priya Mehta",role:"Chief Data Officer",dept:"Data Science",rep:"CEO",st:"Cold",sc:22,stc:C.blue,tags:["AI/ML","Real-World Data","Data Governance"],ic:0,
    intel:"Dr. Mehta controls the AI/ML budget and is directly responsible for the Real-World Data initiative (Active, $4.2M). She's currently Cold — no contact in 90+ days. Her interest in Data Governance aligns with your Compliance Analytics platform.\n\nRisk: A competitor with existing RWD relationships could displace your position. Q2 PDUFA creates time pressure.\n\nRecommendation: Lead with RWD Analytics. Reference the $4.2M initiative budget.",
    email:"Subject: Real-World Data governance at scale\n\nDr. Mehta,\n\nI noticed your team's expanding the RWD initiative. Given the regulatory complexity around data governance in RWE studies, our Compliance Analytics platform has helped similar CDOs maintain audit-ready pipelines.\n\nWould 15 minutes next week work?\n\nBest regards",
    brief:"PRE-CALL BRIEF — Dr. Priya Mehta, CDO\n\n• Controls AI/ML budget, owns RWD initiative ($4.2M)\n• Reports to CEO → likely Economic Buyer\n• Cold (90+ days no contact)\n• Angle: Compliance Analytics + Data Governance\n• Landmine: Competitor has RWD relationships\n• Close for: Discovery with data engineering lead"},
  {id:"j",name:"James Thornton",role:"VP Clinical Ops",dept:"Clinical Ops",rep:"COO",st:"Hot",sc:87,stc:C.red,tags:["Trial Management","Site Selection"],ic:1,
    intel:"Thornton is your warmest contact — Score 87, attended your last webinar. His team is mid-way through $12M trial digitization with $2M budget authority.\n\nChampion candidate: vocal about modernizing trial management. Pain point is site selection — 14-week cycle.\n\nRecommendation: Activate as Champion. Provide ROI deck. Push for COO introduction.",
    email:"Subject: Site selection acceleration data\n\nJames,\n\nGreat connecting at the webinar. You mentioned the 14-week site selection cycle — I have data from teams who cut that to under 6 weeks.\n\nCould we get 30 minutes Thursday or Friday?\n\nLooking forward to it.",
    brief:"PRE-CALL BRIEF — James Thornton, VP Clinical Ops\n\n• Runs clinical ops, $2M budget authority\n• Hot (Score 87, webinar attendee)\n• Trial digitization ($12M initiative)\n• Angle: Site selection (14wk → 6wk)\n• Champion potential: HIGH\n• Close for: Team demo + COO intro"},
  {id:"s",name:"Sarah Kim",role:"Head of Procurement",dept:"Procurement",rep:"CFO",st:"Warm",sc:54,stc:C.amber,tags:["Vendor Mgmt","Cost Optimization"],ic:2,
    intel:"Kim is the procurement gatekeeper — contracts over $500K go through her. Reports to CFO. Evaluates on compliance docs, TCO, and vendor consolidation.\n\nWarm (Score 54) — James mentioned your platform. She's consolidating from 47 to 30 vendors.\n\nRecommendation: Sell consolidation, not features. Position as 3-in-1 platform.",
    email:"Subject: Vendor consolidation — 3 platforms → 1\n\nSarah,\n\nOur platform replaces three separate tool categories with a single system. James Thornton's team has been exploring this.\n\nI'd love to discuss how it supports your consolidation targets.\n\nBest regards",
    brief:"PRE-CALL BRIEF — Sarah Kim, Procurement\n\n• Gatekeeper, contracts >$500K\n• Warm (Score 54, indirect via James)\n• Consolidating vendors (47 → 30)\n• Angle: 3-in-1 consolidation story\n• Concern: Vendor sprawl, compliance, TCO\n• Close for: Vendor evaluation inclusion"},
  {id:"r",name:"Rajesh Gupta",role:"Director of IT",dept:"IT Infrastructure",rep:"CTO",st:"New",sc:15,stc:C.slate,tags:["Security","API","Architecture"],ic:3,
    intel:"Gupta gates security review and integration assessment. Manages 200+ SaaS integrations. Known for blocking vendors without SOC2/HIPAA.\n\nDon't approach cold — route through James. Responds to technical depth, not sales pitches.\n\nRecommendation: Technical architecture one-pager. James makes intro. Lead with security posture.",
    email:"Subject: Technical architecture overview\n\nRajesh,\n\nJames suggested I connect for the technical eval. Our architecture:\n\n• SOC2 Type II, HIPAA compliant\n• RESTful API with webhooks\n• SSO via SAML 2.0 / OAuth\n\nHappy to set up a call with engineering.",
    brief:"PRE-CALL BRIEF — Rajesh Gupta, IT\n\n• Gates security reviews, 200+ SaaS\n• New (Score 15, no contact)\n• Concern: SOC2, HIPAA, security\n• Angle: API-first, certifications\n• Route through James (warm intro)\n• Close for: Engineering deep-dive"},
];

const stkIc=[Ic.brain,Ic.users,Ic.chart,Ic.gear];

function Demo(){
  const[sel,setSel]=useState(0);
  const[tab,setTab]=useState("intel");
  const[typing,setTyping]=useState(true);
  const p=STK[sel];
  const tabs=[{id:"intel",label:"Intelligence",ic:Ic.search},{id:"email",label:"Email Draft",ic:Ic.mail},{id:"brief",label:"Pre-Call Brief",ic:Ic.clip}];
  const content=tab==="intel"?p.intel:tab==="email"?p.email:p.brief;
  useEffect(()=>{setTyping(false);const t=setTimeout(()=>setTyping(true),50);return()=>clearTimeout(t)},[sel,tab]);

  return(
    <section id="demo" style={{padding:"100px 24px",background:`radial-gradient(ellipse 60% 40% at 30% 50%,${C.teal}08 0%,transparent 70%)`}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Rev><div style={{textAlign:"center",marginBottom:56}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>See It In Action</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginTop:12}}>Select a stakeholder. See what the AI generates.</h2><p style={{fontSize:16,color:C.slate,marginTop:12,maxWidth:600,margin:"12px auto 0"}}>Click any person below. Switch tabs to see different AI outputs.</p></div></Rev>
        <Rev delay={.15}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:32}}>
            {STK.map((s,i)=>(
              <button key={s.id} onClick={()=>{setSel(i);setTab("intel")}} style={{background:sel===i?C.cardHover:C.card,border:`1px solid ${sel===i?s.stc:C.border}`,borderRadius:12,padding:20,cursor:"pointer",textAlign:"left",transition:"all .3s",outline:"none",boxShadow:sel===i?`0 0 20px ${s.stc}22`:"none",transform:sel===i?"translateY(-2px)":"none",fontFamily:FB,color:C.white}}>
                <div style={{marginBottom:8}}>{stkIc[i](s.stc)}</div>
                <div style={{fontFamily:FH,fontWeight:700,fontSize:14}}>{s.name}</div>
                <div style={{fontSize:12,color:C.slate,marginTop:2}}>{s.role}</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                  <span style={{fontSize:10,fontWeight:700,color:s.stc,background:s.stc+"18",padding:"2px 8px",borderRadius:4,textTransform:"uppercase",letterSpacing:".05em"}}>{s.st}</span>
                  <span style={{fontSize:11,fontFamily:FM,color:C.slate}}>Score: <span style={{color:s.sc>60?C.teal:s.sc>40?C.amber:C.slate}}>{s.sc}</span></span>
                </div>
              </button>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"260px 1fr",background:C.card,border:`1px solid ${C.border}`,borderRadius:16,overflow:"hidden"}}>
            <div style={{padding:24,borderRight:`1px solid ${C.border}`}}>
              <div style={{marginBottom:12}}>{stkIc[sel](p.stc)}</div>
              <div style={{fontFamily:FH,fontWeight:700,fontSize:17,color:C.white}}>{p.name}</div>
              <div style={{fontSize:13,color:C.slate,marginTop:4}}>{p.role} · {p.dept}</div>
              <div style={{fontSize:12,color:C.slate,marginTop:2}}>Reports to {p.rep}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:14}}>{p.tags.map(t=>(<span key={t} style={{fontSize:10,fontWeight:600,color:C.teal,background:C.teal+"15",border:`1px solid ${C.teal}33`,borderRadius:6,padding:"3px 8px"}}>{t}</span>))}</div>
              <div style={{marginTop:18,paddingTop:12,borderTop:`1px solid ${C.border}`}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:6}}><span style={{color:C.slate}}>Engagement</span><span style={{color:p.stc,fontWeight:600}}>{p.sc}/100</span></div>
                <div style={{height:4,background:C.navyMid,borderRadius:2}}><div style={{height:"100%",borderRadius:2,width:`${p.sc}%`,background:`linear-gradient(90deg,${p.stc},${p.stc}88)`,transition:"width .6s"}}/></div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",borderBottom:`1px solid ${C.border}`}}>{tabs.map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"12px 14px",border:"none",cursor:"pointer",background:tab===t.id?C.cardHover:"transparent",color:tab===t.id?C.white:C.slate,fontSize:13,fontWeight:600,fontFamily:FB,borderBottom:tab===t.id?`2px solid ${C.teal}`:"2px solid transparent",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
                  <span style={{display:"inline-flex",width:14}}>{t.ic(tab===t.id?C.teal:C.slate)}</span>{t.label}
                </button>
              ))}</div>
              <div style={{padding:20,flex:1}}>
                <div style={{fontSize:10,fontFamily:FM,color:C.teal,marginBottom:10,display:"flex",alignItems:"center",gap:8,opacity:.7}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:C.teal,display:"inline-block",animation:"pg 2s infinite"}}/>SalesDendrite AI
                </div>
                <div style={{fontSize:13,lineHeight:1.8,color:C.slateLight,whiteSpace:"pre-wrap",maxHeight:320,overflowY:"auto"}}><TW text={content} trigger={typing} speed={8}/></div>
              </div>
              <div style={{padding:"10px 20px",borderTop:`1px solid ${C.border}`,fontSize:9,fontFamily:FM,color:C.slate,letterSpacing:".08em",textTransform:"uppercase"}}>Context: Org · Financial · Stakeholder · Capability · Pipeline</div>
            </div>
          </div>
        </Rev>
      </div>
    </section>
  );
}

/* ═══════════ MODULES — click to expand ═══════════ */
function Modules(){
  const[ex,setEx]=useState(null);
  const ms=[
    {ic:Ic.users,n:"Stakeholder Directory",d:"Full org with hierarchy inference, engagement scoring, relationship graph.",dt:"Upload org charts in PDF, PNG, CSV. AI infers reporting lines. Track engagement over time.",c:C.teal},
    {ic:Ic.news,n:"Public Intelligence",d:"Financial analysis, clinical pipeline, regulatory milestones — AI-summarised.",dt:"SEC 10-K auto-parsed. ClinicalTrials.gov sync. FDA calendar. AI narrative briefs.",c:C.blue},
    {ic:Ic.brain,n:"Intel Hub",d:"Meeting notes, strategic initiatives, competitive intel. Institutional memory.",dt:"Structured insight capture. Competitive tracking. Survives rep transitions.",c:C.amber},
    {ic:Ic.ai,n:"AI Workspace",d:"Claude-powered conversational partner with full account context.",dt:"Every response draws from org structure, financials, capabilities. A contextual strategist.",c:C.purple},
    {ic:Ic.target,n:"Buying Committee",d:"Map Champion, Decision Maker, Economic Buyer, Blocker. See gaps.",dt:"Role assignment with AI suggestions. Coverage gap analysis. Risk scoring.",c:C.teal},
    {ic:Ic.people,n:"Target Stakeholders",d:"AI conversion strategies, gap analysis, path-to-influence mapping.",dt:"Per-stakeholder action plans. Influence paths. Engagement playbooks.",c:C.red},
    {ic:Ic.chart,n:"Capability Intelligence",d:"Service library, case studies, auto-enrichment, opportunity matching.",dt:"Upload capabilities. AI matches to stakeholder needs and active initiatives.",c:C.blue},
    {ic:Ic.gear,n:"Settings & RBAC",d:"Multi-user auth, CRM connectors (Salesforce, HubSpot, Veeva).",dt:"RBAC, API keys, Salesforce/HubSpot/Veeva/Dynamics sync. Brand templates.",c:C.slate},
  ];
  return(
    <section id="modules" style={{padding:"100px 24px",maxWidth:1200,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:64}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>Platform Modules</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginTop:12}}>Seven modules. One unified data layer.</h2><p style={{fontSize:14,color:C.slate,marginTop:8}}>Click any module to see details.</p></div></Rev>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>{ms.map((m,i)=>(
        <Rev key={i} delay={i*.05}><div onClick={()=>setEx(ex===i?null:i)} style={{background:ex===i?C.cardHover:C.card,border:`1px solid ${ex===i?m.c+"55":C.border}`,borderTop:`2px solid ${m.c}`,borderRadius:12,padding:"22px 18px",transition:"all .4s",cursor:"pointer",transform:ex===i?"translateY(-4px)":"none",boxShadow:ex===i?`0 12px 40px ${m.c}15`:"none"}}>
          <div style={{marginBottom:10}}>{m.ic(m.c)}</div>
          <h3 style={{fontFamily:FH,fontWeight:700,fontSize:14,color:C.white,marginBottom:6}}>{m.n}</h3>
          <p style={{fontSize:12,color:C.slate,lineHeight:1.6}}>{m.d}</p>
          {ex===i&&<div style={{marginTop:10,padding:"10px 12px",background:C.navyMid,borderRadius:8,border:`1px solid ${m.c}22`,fontSize:12,color:C.slateLight,lineHeight:1.6,animation:"su .3s ease-out"}}>{m.dt}</div>}
        </div></Rev>
      ))}</div>
    </section>
  );
}

/* ═══════════ WHY ═══════════ */
function Why(){
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
    <section id="why" style={{padding:"100px 24px",background:`radial-gradient(ellipse 50% 40% at 50% 0%,${C.blue}0A 0%,transparent 70%),${C.navyMid}`}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <Rev><div style={{textAlign:"center",marginBottom:48}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>Why SalesDendrite</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginTop:12}}>Four data layers converge into execution.</h2></div></Rev>
        <Rev delay={.1}><div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap",marginBottom:56,padding:"20px 0"}}>{layers.map((l,i)=>(<React.Fragment key={l}><span style={{fontFamily:FM,fontSize:12,color:C.teal,background:C.teal+"12",border:`1px solid ${C.teal}33`,borderRadius:8,padding:"7px 14px"}}>{l}</span>{i<3&&<span style={{color:C.slate}}>+</span>}</React.Fragment>))}<span style={{color:C.teal,fontSize:18,margin:"0 6px"}}>→</span><span style={{fontFamily:FH,fontWeight:800,fontSize:14,background:`linear-gradient(135deg,${C.teal},${C.blue})`,color:C.navy,borderRadius:8,padding:"9px 18px"}}>Execution Intelligence</span></div></Rev>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>{bs.map((b,i)=>(
          <Rev key={i} delay={i*.08}><div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"26px 22px",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal+"44";e.currentTarget.style.transform="translateY(-2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="none"}}>
            <div style={{marginBottom:10}}>{b.ic(C.teal)}</div>
            <h3 style={{fontFamily:FH,fontWeight:700,fontSize:15,color:C.white,marginBottom:6}}>{b.t}</h3>
            <p style={{fontSize:13,color:C.slate,lineHeight:1.7}}>{b.d}</p>
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
    <section style={{padding:"56px 0",overflow:"hidden"}}>
      <Rev><p style={{textAlign:"center",fontSize:12,fontWeight:600,letterSpacing:".15em",textTransform:"uppercase",color:C.slate,marginBottom:24}}>Connects with your stack</p></Rev>
      <div onMouseEnter={()=>sP(true)} onMouseLeave={()=>sP(false)} style={{display:"flex",animation:"mq 30s linear infinite",animationPlayState:p?"paused":"running",width:"fit-content"}}>
        {[...items,...items].map((n,i)=>(<div key={i} style={{flexShrink:0,padding:"10px 24px",margin:"0 6px",background:C.card,border:`1px solid ${C.border}`,borderRadius:8,fontFamily:FM,fontSize:12,color:C.slate,fontWeight:500,whiteSpace:"nowrap",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal+"66";e.currentTarget.style.color=C.teal}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.slate}}>{n}</div>))}
      </div>
    </section>
  );
}

/* ═══════════ COMPARISON ═══════════ */
function Compare(){
  const[hov,setHov]=useState(null);
  const fs=[
    {n:"Contact database",sd:1,zi:1,go:1,cl:1},{n:"Org hierarchy mapping",sd:1,zi:0,go:0,cl:0},{n:"AI email generation",sd:1,zi:0,go:1,cl:0},{n:"Buying committee mapping",sd:1,zi:0,go:0,cl:0},
    {n:"Account financial intelligence",sd:1,zi:0,go:0,cl:1},{n:"AI pre-call briefs",sd:1,zi:0,go:1,cl:0},{n:"Stakeholder conversion strategies",sd:1,zi:0,go:0,cl:0},{n:"Capability-to-need matching",sd:1,zi:0,go:0,cl:0},{n:"Full context AI workspace",sd:1,zi:0,go:0,cl:0},
  ];
  const Y=()=><span style={{color:C.teal,fontSize:16}}>✓</span>;
  const N=()=><span style={{color:C.border}}>—</span>;
  return(
    <section style={{padding:"80px 24px",maxWidth:900,margin:"0 auto"}}>
      <Rev><div style={{textAlign:"center",marginBottom:48}}><span style={{fontSize:11,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",color:C.teal}}>How We Compare</span><h2 style={{fontFamily:FH,fontWeight:800,fontSize:36,color:C.white,marginTop:12}}>Built for sales execution intelligence.</h2></div></Rev>
      <Rev delay={.1}><div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
          <thead><tr style={{borderBottom:`1px solid ${C.border}`}}><th style={{padding:"14px 18px",textAlign:"left",color:C.slate,fontWeight:500}}>Feature</th><th style={{padding:"14px 10px",textAlign:"center",width:95}}><span className="gt" style={{fontFamily:FH,fontWeight:700,fontSize:13}}>SalesDendrite</span></th><th style={{padding:"14px 10px",textAlign:"center",color:C.slate,fontWeight:500,width:80}}>ZoomInfo</th><th style={{padding:"14px 10px",textAlign:"center",color:C.slate,fontWeight:500,width:80}}>Gong</th><th style={{padding:"14px 10px",textAlign:"center",color:C.slate,fontWeight:500,width:80}}>Clari</th></tr></thead>
          <tbody>{fs.map((f,i)=>(<tr key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{borderBottom:i<fs.length-1?`1px solid ${C.border}44`:"none",background:hov===i?C.cardHover:i%2===0?"transparent":C.navyMid+"44",transition:"background .2s",cursor:"default"}}>
            <td style={{padding:"11px 18px",color:hov===i?C.white:C.slateLight,fontWeight:500,transition:"color .2s"}}>{f.n}</td>
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
  const ip=k=>({width:"100%",padding:"12px 16px",background:C.navyMid,border:`1px solid ${foc===k?C.teal:C.border}`,borderRadius:8,color:C.white,fontSize:14,fontFamily:FB,outline:"none",transition:"border-color .2s"});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!f.name||!f.email||!f.company){return}
    setSending(true);
    try{
      await fetch("/",{
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:new URLSearchParams({"form-name":"contact",...f}).toString(),
      });
      setDone(true);
    }catch(err){
      setDone(true);
    }
    setSending(false);
  };

  return(
    <section id="contact" style={{padding:"100px 24px",background:`radial-gradient(ellipse 60% 50% at 50% 100%,${C.teal}0C 0%,transparent 70%)`}}>
      <div style={{maxWidth:560,margin:"0 auto",textAlign:"center"}}>
        <Rev><h2 style={{fontFamily:FH,fontWeight:800,fontSize:42,color:C.white,marginBottom:16}}>Let's put this on your account.</h2><p style={{fontSize:16,color:C.slate,marginBottom:40,lineHeight:1.7}}>Pick one account. Upload the org chart. Let the platform do its thing.</p></Rev>
        {done?(
          <Rev><div style={{background:C.teal+"15",border:`1px solid ${C.teal}44`,borderRadius:16,padding:"40px 32px"}}><div style={{marginBottom:12}}><BrandIcon size={40}/></div><h3 style={{fontFamily:FH,fontWeight:700,fontSize:22,color:C.white}}>We'll be in touch.</h3><p style={{fontSize:14,color:C.slate,marginTop:8}}>Expect a reply within 24 hours.</p></div></Rev>
        ):(
          <Rev delay={.1}><form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:16,textAlign:"left"}}>
            <input type="hidden" name="form-name" value="contact"/>
            <p style={{display:"none"}}><label>Don't fill this out: <input name="bot-field"/></label></p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <input name="name" placeholder="Name" required style={ip("n")} value={f.name} onChange={e=>sF(p=>({...p,name:e.target.value}))} onFocus={()=>sFoc("n")} onBlur={()=>sFoc(null)}/>
              <input name="email" placeholder="Email" type="email" required style={ip("e")} value={f.email} onChange={e=>sF(p=>({...p,email:e.target.value}))} onFocus={()=>sFoc("e")} onBlur={()=>sFoc(null)}/>
            </div>
            <input name="company" placeholder="Company" required style={ip("c")} value={f.company} onChange={e=>sF(p=>({...p,company:e.target.value}))} onFocus={()=>sFoc("c")} onBlur={()=>sFoc(null)}/>
            <textarea name="message" placeholder="Tell us about your account (optional)" rows={3} style={{...ip("m"),resize:"vertical"}} value={f.message} onChange={e=>sF(p=>({...p,message:e.target.value}))} onFocus={()=>sFoc("m")} onBlur={()=>sFoc(null)}/>
            <button type="submit" className="gb" disabled={sending} style={{padding:"16px 32px",borderRadius:10,fontSize:16,fontWeight:700,fontFamily:FB,width:"100%",marginTop:8,opacity:sending?.6:1}}>{sending?"Sending...":"Request a Demo →"}</button>
          </form></Rev>
        )}
      </div>
    </section>
  );
}

/* ═══════════ FOOTER ═══════════ */
function Foot(){return(
  <footer style={{padding:"48px 24px",borderTop:`1px solid ${C.border}`,textAlign:"center"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:12}}><BrandIcon size={24}/><span style={{fontFamily:FH,fontWeight:700,fontSize:16,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span></div>
    <p style={{fontSize:13,color:C.slate,marginBottom:16,fontStyle:"italic"}}>Map the org. Own the deal.</p>
    <div style={{display:"flex",justifyContent:"center",gap:24,fontSize:12,color:C.slate}}><span>© 2026 SalesDendrite</span><a href="#" style={{color:C.slate,textDecoration:"none"}}>Privacy</a><a href="#" style={{color:C.slate,textDecoration:"none"}}>Terms</a></div>
  </footer>
)}

/* ═══════════ APP ═══════════ */
export default function App(){
  return(
    <div style={{minHeight:"100vh"}}>
      <Sty/>
      <Nav/>
      <Hero/>
      <Stats/>
      <Problem/>
      <Platform/>
      <Demo/>
      <Modules/>
      <Why/>
      <Carousel/>
      <Compare/>
      <Contact/>
      <Foot/>
    </div>
  );
}

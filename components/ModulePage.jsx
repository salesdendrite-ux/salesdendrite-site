"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MODULES, C, FH, FB, FM } from "@/lib/data";

function useMedia(){const[w,sW]=React.useState(typeof window!=="undefined"?window.innerWidth:1200);React.useEffect(()=>{const h=()=>sW(window.innerWidth);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h)},[]);return{w,mob:w<768,tab:w>=768&&w<1024,desk:w>=1024}}

function BrandIcon({size=32}){return(<svg width={size} height={size} viewBox="0 0 64 64" fill="none"><defs><linearGradient id="blg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00C9A7"/><stop offset="100%" stopColor="#2D7FF9"/></linearGradient></defs><line x1="32" y1="56" x2="32" y2="28" stroke="url(#blg)" strokeWidth="3" strokeLinecap="round"/><line x1="32" y1="36" x2="16" y2="20" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/><line x1="32" y1="28" x2="48" y2="14" stroke="url(#blg)" strokeWidth="2.5" strokeLinecap="round"/><line x1="16" y1="20" x2="8" y2="10" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/><line x1="16" y1="20" x2="22" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/><line x1="48" y1="14" x2="42" y2="6" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/><line x1="48" y1="14" x2="56" y2="8" stroke="url(#blg)" strokeWidth="2" strokeLinecap="round"/><circle cx="32" cy="56" r="4" fill="#00C9A7"/><circle cx="32" cy="36" r="3" fill="#2D7FF9" opacity="0.7"/><circle cx="32" cy="28" r="3.5" fill="#2D7FF9"/><circle cx="16" cy="20" r="3" fill="#2D7FF9"/><circle cx="48" cy="14" r="3" fill="#2D7FF9"/><circle cx="8" cy="10" r="2.5" fill="#00C9A7"/><circle cx="22" cy="8" r="2.5" fill="#00C9A7"/><circle cx="42" cy="6" r="2.5" fill="#00C9A7"/><circle cx="56" cy="8" r="2.5" fill="#00C9A7"/></svg>)}

export default function ModulePage() {
  const params = useParams();
  const slug = params?.module;
  const m = MODULES.find(x => x.slug === slug);
  const {mob} = useMedia();

  if (!m) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16,fontFamily:FB}}>
      <h1 style={{fontFamily:FH,fontWeight:800,fontSize:32,color:C.white}}>Module not found</h1>
      <Link href="/" style={{color:C.teal}}>← Back to home</Link>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:C.navy,position:"relative"}}>
      {/* Background effects */}
      <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 60% 50% at 70% 20%,${m.color}15 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 30% 60%,${C.teal}0A 0%,transparent 50%)`}}/>
      </div>
      <div style={{position:"absolute",inset:0,opacity:.03,backgroundImage:`linear-gradient(${C.white} 1px,transparent 1px),linear-gradient(90deg,${C.white} 1px,transparent 1px)`,backgroundSize:"60px 60px",pointerEvents:"none"}}/>

      {/* Nav */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:"12px 0",background:`${C.navy}F5`,backdropFilter:"blur(20px)",borderBottom:`1px solid ${C.border}44`}}>
        <div style={{maxWidth:1400,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Link href="/" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
            <BrandIcon size={24}/>
            <span style={{fontFamily:FH,fontWeight:700,fontSize:18,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span>
          </Link>
          <Link href="/#modules" style={{color:C.slate,textDecoration:"none",fontSize:14,fontWeight:500,display:"flex",alignItems:"center",gap:6,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.slate}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to modules
          </Link>
        </div>
      </nav>

      <div style={{position:"relative",zIndex:2}}>
        {/* Hero Header */}
        <section style={{paddingTop:mob?100:140,paddingBottom:mob?40:60,paddingLeft:20,paddingRight:20}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <Link href="/#modules" style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:13,color:C.slate,textDecoration:"none",marginBottom:mob?24:36,transition:"color .2s"}} onMouseEnter={e=>e.currentTarget.style.color=C.white} onMouseLeave={e=>e.currentTarget.style.color=C.slate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to modules
            </Link>

            <div style={{display:"flex",flexDirection:mob?"column":"row",alignItems:mob?"flex-start":"flex-start",gap:mob?24:40}}>
              {/* Module icon */}
              <div style={{flexShrink:0,width:mob?72:96,height:mob?72:96,borderRadius:20,background:`${m.color}12`,border:`2px solid ${m.color}40`,boxShadow:`0 0 30px ${m.color}25`,display:"flex",alignItems:"center",justifyContent:"center",animation:"su .6s ease-out",animationFillMode:"backwards"}}>
                <svg width={mob?36:48} height={mob?36:48} viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {m.slug==="stakeholder-directory"&&<><circle cx="8" cy="6" r="3"/><circle cx="16" cy="6" r="3"/><path d="M2 20c0-4 3-7 6-7"/><path d="M16 13c3 0 6 3 6 7"/></>}
                  {m.slug==="public-intelligence"&&<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16V11M11 16V8M15 16V13"/></>}
                  {m.slug==="intel-hub"&&<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></>}
                  {m.slug==="ai-workspace"&&<><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="10" r="1.5" fill={m.color}/><circle cx="15" cy="10" r="1.5" fill={m.color}/><path d="M9 15c1.5 1.5 4.5 1.5 6 0"/></>}
                  {m.slug==="buying-committee"&&<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={m.color}/></>}
                  {m.slug==="target-stakeholders"&&<><circle cx="8" cy="6" r="3"/><path d="M2 20c0-4 3-7 6-7M12 13v4M10 17h4"/><circle cx="16" cy="6" r="3"/><path d="M16 13c3 0 6 3 6 7"/></>}
                  {m.slug==="capability-intelligence"&&<><polygon points="12,2 22,8.5 12,15 2,8.5"/><polyline points="2,15.5 12,22 22,15.5" opacity=".5"/><polyline points="2,12 12,18.5 22,12" opacity=".7"/></>}
                  {m.slug==="settings"&&<><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></>}
                </svg>
              </div>

              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontSize:10,fontFamily:FM,letterSpacing:".25em",textTransform:"uppercase",color:m.color,animation:"su .6s ease-out .1s",animationFillMode:"backwards"}}>
                  <BrandIcon size={14}/>
                  SalesDendrite · Module
                </div>
                <h1 style={{fontFamily:FH,fontWeight:800,fontSize:mob?32:56,lineHeight:1.05,color:C.white,marginBottom:16,animation:"su .7s ease-out .15s",animationFillMode:"backwards"}}>
                  {m.title}
                </h1>
                <p style={{fontSize:mob?15:19,color:C.slate,maxWidth:700,lineHeight:1.7,animation:"su .7s ease-out .25s",animationFillMode:"backwards"}}>
                  {m.long}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{padding:mob?"40px 20px 60px":"60px 20px 100px"}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontSize:11,fontFamily:FM,letterSpacing:".25em",textTransform:"uppercase",color:m.color}}>
              ✦ Capabilities
            </div>
            <h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?26:44,color:C.white,marginBottom:mob?28:48,lineHeight:1.05,maxWidth:600}}>
              Built for the way deals <span className="gt">actually move.</span>
            </h2>

            <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?14:20}}>
              {m.features.map((f, i) => (
                <div key={i} style={{background:`${C.card}CC`,backdropFilter:"blur(12px)",border:`1px solid ${C.border}`,borderRadius:16,padding:mob?"20px":"28px",transition:"all .4s",cursor:"default",animation:`su .6s ease-out ${0.1+i*0.08}s`,animationFillMode:"backwards"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=m.color+"44";e.currentTarget.style.transform="translateY(-4px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="none"}}>
                  <div style={{fontSize:10,fontFamily:FM,letterSpacing:".25em",textTransform:"uppercase",color:m.color,marginBottom:8}}>
                    {String(i+1).padStart(2,"0")} / {String(m.features.length).padStart(2,"0")}
                  </div>
                  <h3 style={{fontFamily:FH,fontWeight:700,fontSize:mob?17:20,color:C.white,marginBottom:8}}>{f.title}</h3>
                  <p style={{fontSize:mob?13:15,color:C.slate,lineHeight:1.7}}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{padding:mob?"40px 20px 60px":"60px 20px 100px"}}>
          <div style={{maxWidth:900,margin:"0 auto"}}>
            <div style={{position:"relative",borderRadius:24,border:`1px solid ${C.border}`,overflow:"hidden",padding:mob?"40px 24px":"56px 48px",textAlign:"center",background:`radial-gradient(circle at top,${C.teal}12,${C.blue}06 50%,transparent 80%)`}}>
              <div style={{position:"absolute",inset:0,opacity:.08,backgroundImage:`radial-gradient(circle,${C.blue}22 1px,transparent 1px)`,backgroundSize:"24px 24px",pointerEvents:"none"}}/>
              <div style={{position:"relative"}}>
                <h2 style={{fontFamily:FH,fontWeight:800,fontSize:mob?26:44,color:C.white,marginBottom:12,lineHeight:1.1}}>
                  Try {m.title} <span className="gt">with your data.</span>
                </h2>
                <p style={{fontSize:mob?15:17,color:C.slate,marginBottom:28,maxWidth:500,margin:"0 auto 28px",lineHeight:1.7}}>
                  Pick one account, upload the inputs, and see this module run inside your live workflow.
                </p>
                <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:12}}>
                  <Link href="/#contact" className="gb" style={{padding:"14px 32px",borderRadius:10,fontSize:15,fontWeight:700,fontFamily:FB}}>Request a Demo →</Link>
                  <Link href="/#demo" className="ob" style={{padding:"14px 32px",borderRadius:10,fontSize:15,fontWeight:500,fontFamily:FB}}>Back to interactive demo</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{padding:mob?"32px 20px":"48px 24px",borderTop:`1px solid ${C.border}`,textAlign:"center"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:10}}>
            <BrandIcon size={20}/>
            <span style={{fontFamily:FH,fontWeight:700,fontSize:15,color:C.white}}>Sales<span style={{color:C.blue}}>Dendrite</span></span>
          </div>
          <p style={{fontSize:12,color:C.slate,marginBottom:12,fontStyle:"italic"}}>Map the org. Own the deal.</p>
          <div style={{display:"flex",justifyContent:"center",gap:24,fontSize:11,color:C.slate}}>
            <span>© 2026 SalesDendrite</span>
            <a href="#" style={{color:C.slate,textDecoration:"none"}}>Privacy</a>
            <a href="#" style={{color:C.slate,textDecoration:"none"}}>Terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

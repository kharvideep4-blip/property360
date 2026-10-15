import React,{useState,useMemo} from 'react'
import {MM,NAV} from './data.js'
const P={home:'M3 10.5 12 3l9 7.5V21H3z M9 21v-7h6v7',layers:'M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',users:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',file:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h8',wrench:'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',wallet:'M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h14v4 M3 5v14a2 2 0 0 0 2 2h16v-5 M18 12a2 2 0 0 0 0 4h4v-4z',folder:'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',chart:'M18 20V10 M12 20V4 M6 20v-6',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0',phone:'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 18h.01',sliders:'M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6',search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35',sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',menu:'M3 6h18 M3 12h18 M3 18h18',plus:'M12 5v14 M5 12h14',chev:'M9 18l6-6-6-6',building:'M4 21V3h10v18 M14 9h6v12 M8 7h2 M8 11h2 M8 15h2 M17 13h0 M17 17h0',cash:'M2 6h20v12H2z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',alert:'M12 9v4 M12 17h.01 M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'}
export const Ic=({n,s=20,r=0})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{transform:'rotate('+r+'deg)',transition:'transform .2s',flexShrink:0}}><path d={P[n]}/></svg>
const GI={'Dashboard':'home','Masters':'layers','CRM · Sales · Enquiry':'users','Lease management':'file','Maintenance':'wrench','Invoice · Payment · Accounts':'wallet','Documents':'folder','Reports · AI':'chart','Portals':'phone','Notifications':'bell','Admin':'sliders'}
export const lab=x=>Array.isArray(x)?x:[x,MM[x].t]
export const groupOf=id=>NAV.find(([g,it])=>it.some(x=>lab(x)[0]===id))
export function Sidebar({rt,go,og,sog,col,scol,mob,smob}){
 return <><aside className={'sb'+(mob?' open':'')}>
  <div className="sb-brand"><span className="logo"/><span className="lbl">Property<b>360</b></span></div>
  <div className="sb-scroll">{NAV.map(([g,it])=>{const open=og===g&&!col;return <div key={g}>
   <button className={'sb-g'+(og===g?' on':'')} title={g} onClick={()=>{if(col){scol(false);sog(g)}else sog(og===g?'':g)}}><Ic n={GI[g]||'layers'}/><span className="lbl grow">{g}</span><span className="lbl"><Ic n="chev" s={14} r={open?90:0}/></span></button>
   {open&&<div className="sb-sub">{it.map(x=>{const[id,l]=lab(x);return <button key={id} className={'sb-i'+(rt.m===id?' on':'')} onClick={()=>{go(id);smob(false)}}>{l}</button>})}</div>}</div>})}</div>
  <div className="sb-foot lbl">Developed By The Cybertech 2026</div></aside>{mob&&<div className="scrim" onClick={()=>smob(false)}/>}</>}
export function Topbar({rt,go,data,onMenu,onSearch,isDark,tgl}){
 const[bell,sb]=useState(false);const g=groupOf(rt.m),pg=g?lab(g[1].find(x=>lab(x)[0]===rt.m))[1]:'';
 const ns=[...data.invoices.filter(x=>x.status==='Overdue').map(x=>({t:'Invoice '+x.no+' overdue · '+x.tenant,m:'invoices'})),...data.maint.filter(x=>x.status==='Pending'&&/High|Emergency/.test(x.priority)).map(x=>({t:x.priority+' request · '+x.category+' · '+(x.unit||''),m:'maint'}))];
 return <header className="tb"><button className="ib" aria-label="Menu" onClick={onMenu}><Ic n="menu"/></button>
  <div className="crumb"><span>{g?g[0]:''}</span><Ic n="chev" s={14}/><b>{pg}</b></div><span className="grow"/>
  <button className="srch" onClick={onSearch}><Ic n="search" s={17}/><span>Search pages</span><kbd>Ctrl K</kbd></button>
  <button className="ib" aria-label="Switch theme" onClick={tgl}><Ic n={isDark?'sun':'moon'}/></button>
  <div style={{position:'relative'}}><button className="ib" aria-label="Notifications" onClick={()=>sb(!bell)}><Ic n="bell"/>{ns.length>0&&<i className="badge">{ns.length}</i>}</button>
  {bell&&<div className="pop" onMouseLeave={()=>sb(false)}><h2>Needs attention</h2>{ns.map((n,i)=><button key={i} className="res" onClick={()=>{go(n.m);sb(false)}}>{n.t}</button>)}{!ns.length&&<div style={{color:'var(--mut)'}}>All clear.</div>}</div>}</div>
  <div className="avatar" title="Admin">AD</div></header>}
export function Palette({go,close}){const[q,sq]=useState('');const all=useMemo(()=>NAV.flatMap(([g,it])=>it.map(x=>{const[id,l]=lab(x);return{id,l,g}})),[]);
 const r=all.filter(x=>(x.l+' '+x.g).toLowerCase().includes(q.toLowerCase())).slice(0,9);
 return <div className="modal" onClick={close}><div className="card pal" onClick={e=>e.stopPropagation()}><div className="pal-in"><Ic n="search" s={18}/><input autoFocus placeholder="Jump to a page" value={q} onChange={e=>sq(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&r[0]){go(r[0].id);close()}if(e.key==='Escape')close()}}/></div>
 {r.map(x=><button key={x.id} className="res" onClick={()=>{go(x.id);close()}}><span>{x.l}</span><small>{x.g}</small></button>)}{!r.length&&<div style={{color:'var(--mut)',padding:12}}>No page matches that.</div>}</div></div>}
export const Skel=()=><div className="skel"><i style={{width:'38%',height:30}}/><i/><i/><i style={{width:'70%'}}/></div>

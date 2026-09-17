import React, { useState } from 'react';
import { navLinks } from '../data/siteData';
export default function Navbar() {
  const [open,setOpen]=useState(false);
  return <nav className="nav"><a className="brand" href="#top">SK<span>.</span></a><div className={`nav-links ${open?'open':''}`}>{navLinks.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="pill" href="#contact" onClick={()=>setOpen(false)}>Let’s talk</a></div><button className="menu-btn" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button></nav>;
}

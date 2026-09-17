import React from 'react'; import Reveal from './Reveal';
export default function SectionHeader({ kicker, title, children }) {
  return <Reveal><div className="section-kicker">{kicker}</div><h2 className="section-title">{title}</h2>{children && <p className="section-copy">{children}</p>}</Reveal>;
}

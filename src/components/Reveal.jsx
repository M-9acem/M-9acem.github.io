import React, { useEffect, useRef, useState } from 'react';
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null); const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
    }, { threshold: 0.12 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>{children}</div>;
}

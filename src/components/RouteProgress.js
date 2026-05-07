'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Route change completed
      setProgress(100);
      clearInterval(timerRef.current);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
      prevPathname.current = pathname;
      return () => clearTimeout(hideTimer);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;

      // Internal navigation detected
      if (href !== pathname) {
        setVisible(true);
        setProgress(15);

        let current = 15;
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          current += Math.random() * 12;
          if (current >= 90) {
            current = 90;
            clearInterval(timerRef.current);
          }
          setProgress(current);
        }, 200);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      clearInterval(timerRef.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
          borderRadius: '0 2px 2px 0',
          transition: progress === 100 ? 'width 0.2s ease-out' : 'width 0.4s ease-out',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
        }}
      />
    </div>
  );
}

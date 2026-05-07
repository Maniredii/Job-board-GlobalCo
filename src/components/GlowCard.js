'use client';

import dynamic from 'next/dynamic';
import { useTheme } from '@/components/ThemeProvider';

const BorderGlow = dynamic(() => import('@/components/BorderGlow'), {
  ssr: false,
  loading: () => (
    <div style={{ borderRadius: 20, border: '1px solid var(--color-border, #e5e7eb)', overflow: 'hidden' }} />
  ),
});

export default function GlowCard({
  children,
  className = '',
  colors = ['#6366f1', '#8b5cf6', '#06b6d4'],
  glowColor = '240 70 70',
  borderRadius = 20,
  glowRadius = 25,
  glowIntensity = 0.6,
  edgeSensitivity = 45,
  coneSpread = 20,
  fillOpacity = 0.25,
}) {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#131a27' : '#ffffff';

  return (
    <BorderGlow
      edgeSensitivity={edgeSensitivity}
      glowColor={glowColor}
      backgroundColor={bgColor}
      borderRadius={borderRadius}
      glowRadius={glowRadius}
      glowIntensity={glowIntensity}
      coneSpread={coneSpread}
      colors={colors}
      fillOpacity={fillOpacity}
      className={className}
    >
      {children}
    </BorderGlow>
  );
}

import React from 'react';

interface IconProps {
  className?: string;
}

export const SchoolIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 8.5C2.5 7.1 3.6 6 5 6h14c1.4 0 2.5 1.1 2.5 2.5S20.4 11 19 11H5c-1.4 0-2.5-1.1-2.5-2.5zM2.5 15.5C2.5 14.1 3.6 13 5 13h14c1.4 0 2.5 1.1 2.5 2.5S20.4 18 19 18H5c-1.4 0-2.5-1.1-2.5-2.5z" />
    <path d="M5 6V4.5C5 3.1 6.1 2 7.5 2c1.4 0 2.5 1.1 2.5 2.5V6" />
    <path d="M19 18v1.5c0 1.4-1.1 2.5-2.5 2.5-1.4 0-2.5-1.1-2.5-2.5V18" />
  </svg>
);

export const HobbyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15.15 15.15 6.36 6.36"/>
      <path d="M12 12c-2.5 0-5 2.5-5 5s2.5 5 5 5 5-2.5 5-5"/>
      <path d="M12 12V2l-5 2v8"/>
      <path d="M12 2v10"/>
      <path d="m5 10 2-1"/>
      <path d="m5 10 2 1"/>
    </svg>
  );

export const LaughIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );

export const BulbIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-3-4l-1-1.5V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5L7 10c-2 1-3 2-3 4a7 7 0 0 0 7 7z"/>
      <path d="M12 12c-1.33 0-2.5.5-3.5 1.5"/>
    </svg>
  );

export const ImageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

export const CompassIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="m12 15.5-3-7 3 7 3-7-3 7z"/>
      <path d="M12 2v3"/>
      <path d="M12 19v3"/>
      <path d="M22 12h-3"/>
      <path d="M5 12H2"/>
  </svg>
);
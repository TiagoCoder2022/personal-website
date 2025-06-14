// lib/fonts.ts
import localFont from 'next/font/local';

export const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay/ClashDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },    
  ],
  variable: '--font-clash',
  display: 'swap',
});

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },    
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

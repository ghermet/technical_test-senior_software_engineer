/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary1: '#006855',
        primary2: '#0C806B',
        primary3: '#A5F1A4',
        primary4: '#D2F8D1',
        accent1: '#FC5C63',
        accent1Hover: '#FC5057',
        accent1Disabled: '#FFACB3',
        accent2: '#FC847C',
        accent3: '#FFAA98',
        accent4: '#FFE7D1',
        neutral1: '#050505',
        neutral1Hover: '#1F1F1F',
        neutral1Disabled: '#D3D3D3',
        neutral2: '#8C8C8C',
        neutral3: '#D3D3D3',
        neutral4: '#F5F5F5',
        neutral4Hover: '#F0F0F0',
        white: '#FFFFFF',
        warning1: '#E3631B',
        warning2: '#F5772F',
        warning3: '#FF9F57',
        warning4: '#FFE5B1',
        error1: '#C70808',
        error2: '#E52626',
        error3: '#FF7676',
        error4: '#FFD0D0',
        facebook: '#4267B2',
        linkedin: '#3B5998',
        trustpilot: '#00B67A',
        twitter: '#1DA1F2',
        whatsapp: '#25D366',
      },
      fontFamily: {
        maisonNeue: ['Maison Neue', 'sans-serif'],
      },
      fontWeight: {
        book: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      screens: {
        // @media (min-width: 640px) { ... }
        tablet: '640px',
        // @media (min-width: 1024px) { ... }
        laptop: '1024px',
        // @media (min-width: 1280px) { ... }
        desktop: '1280px',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        peopleTable: '6.5rem 11.5rem 18rem 20rem 24rem 1fr',
        peopleTableMobile: '4rem 1fr',
      },
    },
  },
  plugins: [],
}

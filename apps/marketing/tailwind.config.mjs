/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Existing site tokens, remapped onto the Barkhaus Platform design-system palette
        // (barkhaus-platform-design/DESIGN.md). Every legacy page/component already uses
        // only these seven names, so retargeting the hex values here restyles the whole
        // site without touching page markup.
        'deep-taupe': '#060403',   // -> neutral-darkest (primary text / dark surfaces)
        'warm-brown': '#804e3f',   // -> spicy-mix shade-4 (unchanged, brand primary)
        'silver-gray': '#cfb5a3',  // -> vanilla shade-4
        sand:         '#a59082',  // -> vanilla shade-5 (dark)
        stone:        '#5f5754',  // -> dorado shade-4 (accent)
        dove:         '#ddcbbe',  // -> vanilla shade-3 (light)
        cloud:        '#e9e8e6',  // -> cararra shade-4 (unchanged, exact match)

        // Full design-system palette, for new components/sections built to spec.
        neutral: {
          white: '#ffffff',
          lightest: '#f2f2f2',
          lighter: '#d9d9d9',
          light: '#b4b3b3',
          DEFAULT: '#828181',
          dark: '#504f4e',
          darker: '#1e1d1c',
          darkest: '#060403',
        },
        dorado: {
          1: '#efeeed',
          2: '#dfdddc',
          3: '#8f8987',
          DEFAULT: '#5f5754',
          5: '#4c4543',
          6: '#262221',
          7: '#1c1a19',
        },
        vanilla: {
          1: '#faf7f5',
          2: '#f5f0ec',
          3: '#ddcbbe',
          DEFAULT: '#cfb5a3',
          5: '#a59082',
          6: '#524841',
          7: '#3e3630',
        },
        tide: {
          1: '#f8f7f6',
          2: '#f1f0ee',
          3: '#d0cdc6',
          DEFAULT: '#bdb8ae',
          5: '#97938b',
          6: '#4b4945',
          7: '#383734',
        },
        cararra: {
          1: '#fcfcfc',
          2: '#fafafa',
          3: '#efeeed',
          DEFAULT: '#e9e8e6',
          5: '#bab9b8',
          6: '#5d5c5c',
          7: '#454545',
        },
        'spicy-mix': {
          1: '#f2edeb',
          2: '#e5dbd8',
          3: '#a68378',
          DEFAULT: '#804e3f',
          5: '#663e32',
          6: '#331f19',
          7: '#261712',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button: '6px',
        card: '8px',
        input: '6px',
      },
    },
  },
  plugins: [],
};

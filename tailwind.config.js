/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a80ff',
        'primary-hover': '#5aaaff',
        'cta-dark': '#023e8a',
        link: '#5aaaff',
        'text-dark': '#111827',
        'text-gray': '#6b7280',
        'text-black': '#000000',
        'text-muted': '#9ca3af',
        'footer-bg': '#f9f8f6',
        'input-border': '#e2e8f0',
        'input-focus-border': '#5aaaff',
        'input-disabled-bg': '#f8f9fa',
        'ghost-hover': '#f3f4f6',
        'secondary-bg': '#e8f2ff',
        'secondary-hover': '#d4e9ff',
        'error': '#ef4444',
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", 'sans-serif'],
      },
      height: {
        header: '72px',
        input: '52px',
        btn: '52px',
      },
      maxWidth: {
        content: '1200px',
        form: '360px',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(90,170,255,0.15)',
      },
    },
  },
  plugins: [],
}
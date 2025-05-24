/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        kanban: {
          todo: '#5030e5',
          progress: '#ffa500',
          done: '#8bc48a',
        },
        priority: {
          low: {
            bg: '#dfa87433',
            text: '#d58c48',
          },
          high: {
            bg: '#d8727d19',
            text: '#d8727d',
          },
          completed: {
            bg: '#83c29d33',
            text: '#67b266',
          },
        },
        text: {
          primary: '#0d062d',
          secondary: '#787486',
        },
        background: {
          main: '#e6e7e9',
          card: '#f5f5f5',
          white: '#ffffff',
        },
      },
      boxShadow: {
        card: '0px 4px 34px rgba(136, 136, 136, 0.25)',
        container: '0px 44px 84px #d8d9db',
      },
    },
  },
  plugins: [],
}
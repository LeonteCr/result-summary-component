/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        start: '#7857FF',
        final: '#2E2BE9',
        redlite: '#ff5757',
        porto: '#ffb01f',
        verde: '#00bd91',
        albastru: '#1125d4',
        stcerc: '#4e21cade',
        fncerc: '#2421ca0e',
        palblu:'#ebf1ff',
        lavanda:'#c8c7ff',
        blugri: '#303b5a',
      },
      fontFamily: {
        hanken:['Hanken Grotesk'],
      },
      minWidth: {
        'sufi': '240px',
      },
      boxShadow: {
        'right':'10px 10px 20px #928cf825' 
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ['./src/**/*.{html,js}', './index.html'],
     theme: {
          extend: {
               colors: {
                    customBlue: '#1F3F83',
                    sucess: '#125029',
                    update: '#1C42D9',
               },
          },
     },
     plugins: [],
};

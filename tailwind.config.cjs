/** @type {import('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                'primary-green': 'hsl(75, 94%, 57%)',
                'neutral-white': 'hsl(0, 0%, 100%)',
                'neutral-grey': 'hsl(0, 0%, 20%)',
                'neutral-dark-grey': 'hsl(0, 0%, 12%)',
                'neutral-off-black': 'hsl(0, 0%, 8%)',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            fontSize: {
                'body': '14px',
            },
            fontWeight: {
                'normal': 400,
                'semi-bold': 600,
                'bold': 700,
            },
        }
    },

    plugins: []
};

module.exports = config;
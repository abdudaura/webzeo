/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    900: '#1e3a8a',
                },
                brand: {
                    primary: '#e47d42', // Brand Orange
                    secondary: '#e47d42', // Brand Orange
                    dark: '#c25e26', // Darker Orange
                    accent: '#34B7F1', // Blue
                },
                chat: {
                    bg: '#ECE5DD', // Chat Background
                    incoming: '#FFFFFF',
                    outgoing: '#ffe0b2', // Light Orange
                }
            },
            backgroundImage: {
                'chat-pattern': "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            },
        },
    },
    plugins: [],
}

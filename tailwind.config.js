/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#C58940",
                secondary: "#374151",
            },
            fontFamily: {
                outfit: ["Playfair", "serif"],
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
            },
        },
    },
    plugins: [],
};

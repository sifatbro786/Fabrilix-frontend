/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E3A8A",
                secondary: "#374151",
                // rose: "#E11D48",
            },
        },
    },
    plugins: [],
};

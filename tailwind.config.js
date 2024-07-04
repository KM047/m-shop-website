/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                quaternary: "var(--color-quaternary)",
                quinary: "var(--color-quinary)",
                senary: "var(--color-senary)",
            },

            keyframes: {
                slideIn: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
            },
            animation: {
                slideIn: "slideIn 0.5s forwards",
            },
            backgroundImage: {
                "gradient-custom":
                    "linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f)",
            },

            fontFamily: {
                serif: ['"Merriweather"', "serif"],
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".bg-opacity-50": {
                        "--tw-bg-opacity": "0.5",
                    },
                    ".bg-opacity-75": {
                        "--tw-bg-opacity": "0.75",
                    },
                    ".bg-opacity-90": {
                        "--tw-bg-opacity": "0.9",
                    },
                },
                ["responsive", "hover"]
            );
        },
    ],
};

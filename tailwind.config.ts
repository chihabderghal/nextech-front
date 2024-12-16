import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            sans: ['Ubuntu', 'serif']

        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;

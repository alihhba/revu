/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            default: "rgba(0, 82, 255)",
            20: "rgba(0, 82, 255  , 0.8)",
            10: "#CCDCFF",
          },
          white: {
            default: "#FFFFFF",
          },
        },
        secondary: {
          green: {
            default: "rgba(246, 179, 84)",
            85: "#FDF0DD",
          },
          red: {
            default: "rgba(246, 98, 84)",
            85: "#FDE0DD",
          },
          yellow: {
            default: "rgba(129, 222, 74)",
            85: "#E6F8DB",
          },
          blue_soft: "#E9E9F2",
        },
        grey: {
          default: "#F5F5FA",
          70: "#FBFBFD",
          10: "#FEFEFF",
        },
        dark: {
          default: "#000",
          75: "#262626",
        },
        storm_gray: {
          default: "#5F646D",
          85: "#E7E8E9",
        },
        outline: {
          default: "#CFDBD5",
          15: "#D8D8D8",
        },
        font: {
          black: "#000000",
          gold: "#F6B354",
          blue: "#0052FF",
          storm: "#5F646D",
          red: "#F66254",
          green: "#81DE4A",
          white_50: "rgba(255, 255, 255, 0.5)",
          white: "#FFFFFF",
        },
        button: {
          purple: "#C1A1EE",
        },
      },
      // font size
      fontSize: {
        "base-28": "1.75rem", // 28px
        "base-24": "1.5rem", // 24px
        "base-22": "1.375rem", // 22px
        "base-20": "1.25rem", // 20px
        "base-18": "1.125rem", // 18px
        "base-16": "1rem", // 16px
        "base-14": "0.875rem", // 14px
        "base-12": "0.75rem", // 12px
        h1: "2.625rem", // 42px
        h2: "2.125rem", // 34px
        h3: "1.75rem", // 28px
        h4: "1.5rem", // 24px
        h5: "1.25rem", // 20px
        h6: "1.125rem", // 18px
      },
      // font weight
      fontWeight: {
        light: 300, // Custom font weight, lighter
        regular: 400, // Custom font weight, regular
        medium: 500, // Custom font weight, medium
        "semi-bold": 600, // Custom font weight, semi-bold
        bold: 700, // Custom font weight, bold
        "extra-bold": 800, // Custom font weight, extra-bold
        black: 900, // Custom font weight, black
      },
      // shadows
      boxShadow: {
        "shadow-16": "0 16px 16px 0 #999BA8",
        "shadow-20": "0 20px 20px 0 #999BA8",
        "shadow-12": "0 12px 12px 0 #999BA8",
        "shadow-8": "0 8px 8px 0 #999BA8",
        "shadow-4": "0 4px 4px 0 #999BA8",
      },
      // spacing
      spacing: {
        "p-0": "0rem",
        "p-1": "0.0625re",
        "p-2": "0.125rem",
        "p-3": "0.1875rem",
        "p-4": "0.25rem",
        "p-5": "0.3125rem",
        "p-6": "0.375rem",
        "p-7": "0.4375rem",
        "p-8": "0.5rem",
        "p-9": "0.5625rem",
        "p-10": "0.625rem",
        "p-11": "0.6875rem",
        "p-12": "0.75rem",
        "p-13": "0.8125rem",
        "p-14": "0.875rem",
        "p-15": "0.9375rem",
        "p-16": "1rem",
        "p-17": "1.0625rem",
        "p-18": "1.125rem",
        "p-19": "1.1875rem",
        "p-20": "1.25rem",
        "p-21": "1.3125rem",
        "p-22": "1.375rem",
        "p-23": "1.4375rem",
        "p-24": "1.5rem",
        "p-25": "1.5625rem",
        "p-26": "1.625rem",
        "p-27": "1.6875rem",
        "p-28": "1.75rem",
        "p-29": "1.8125rem",
        "p-30": "1.875rem",
        "p-31": "1.9375rem",
        "p-32": "2rem",
        "p-33": "2.0625rem",
        "p-34": "2.125rem",
        "p-35": "2.1875rem",
        "p-36": "2.25rem",
        "p-37": "2.3125rem",
        "p-38": "2.375rem",
        "p-39": "2.4375rem",
        "p-40": "2.5rem",
        "p-41": "2.5625rem",
        "p-42": "2.625rem",
        "p-43": "2.6875rem",
        "p-44": "2.75rem",
        "p-45": "2.8125rem",
        "p-46": "2.875rem",
        "p-47": "2.9375rem",
        "p-48": "3rem",
        "p-49": "3.0625rem",
        "p-50": "3.125rem",
        "p-51": "3.1875rem",
        "p-52": "3.25rem",
        "p-53": "3.3125rem",
        "p-54": "3.375rem",
        "p-55": "3.4375rem",
        "p-56": "3.5rem",
        "p-57": "3.5625rem",
        "p-58": "3.625rem",
        "p-59": "3.6875rem",
        "p-60": "3.75rem",
        "p-61": "3.8125rem",
        "p-62": "3.875rem",
        "p-63": "3.9375rem",
        "p-64": "4rem",
        "p-65": "4.0625rem",
        "p-66": "4.125rem",
        "p-67": "4.1875rem",
        "p-68": "4.25rem",
        "p-69": "4.3125rem",
        "p-70": "4.375rem",
        "p-71": "4.4375rem",
        "p-72": "4.5rem",
        "p-73": "4.5625rem",
        "p-74": "4.625rem",
        "p-75": "4.6875rem",
        "p-76": "4.75rem",
        "p-77": "4.8125rem",
        "p-78": "4.875rem",
        "p-79": "4.9375rem",
        "p-80": "5rem",
        "p-81": "5.0625rem",
        "p-82": "5.125rem",
        "p-83": "5.1875rem",
        "p-84": "5.25rem",
        "p-85": "5.3125rem",
        "p-86": "5.375rem",
        "p-87": "5.4375rem",
        "p-88": "5.5rem",
        "p-89": "5.5625rem",
        "p-90": "5.625rem",
        "p-91": "5.6875rem",
        "p-92": "5.75rem",
        "p-93": "5.8125rem",
        "p-94": "5.875rem",
        "p-95": "5.9375rem",
        "p-96": "6rem",
        "p-97": "6.0625rem",
        "p-98": "6.125rem",
        "p-99": "6.1875rem",
        "p-100": "6.25rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-rtl")],
};

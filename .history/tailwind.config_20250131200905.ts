import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

[{
	"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/src/components/ui/moving-border.tsx",
	"owner": "eslint",
	"code": {
		"value": "@typescript-eslint/no-explicit-any",
		"target": {
			"$mid": 1,
			"path": "/rules/no-explicit-any",
			"scheme": "https",
			"authority": "typescript-eslint.io"
		}
	},
	"severity": 8,
	"message": "Unexpected any. Specify a different type.",
	"source": "eslint",
	"startLineNumber": 25,
	"startColumn": 8,
	"endLineNumber": 25,
	"endColumn": 11
},{
	"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/src/components/ui/moving-border.tsx",
	"owner": "eslint",
	"code": {
		"value": "@typescript-eslint/no-explicit-any",
		"target": {
			"$mid": 1,
			"path": "/rules/no-explicit-any",
			"scheme": "https",
			"authority": "typescript-eslint.io"
		}
	},
	"severity": 8,
	"message": "Unexpected any. Specify a different type.",
	"source": "eslint",
	"startLineNumber": 30,
	"startColumn": 18,
	"endLineNumber": 30,
	"endColumn": 21
},{
	"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/src/components/ui/moving-border.tsx",
	"owner": "eslint",
	"code": {
		"value": "@typescript-eslint/no-explicit-any",
		"target": {
			"$mid": 1,
			"path": "/rules/no-explicit-any",
			"scheme": "https",
			"authority": "typescript-eslint.io"
		}
	},
	"severity": 8,
	"message": "Unexpected any. Specify a different type.",
	"source": "eslint",
	"startLineNumber": 83,
	"startColumn": 18,
	"endLineNumber": 83,
	"endColumn": 21
},{
	"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/src/components/ui/moving-border.tsx",
	"owner": "typescript",
	"code": "2554",
	"severity": 8,
	"message": "Expected 1 arguments, but got 0.",
	"source": "ts",
	"startLineNumber": 85,
	"startColumn": 19,
	"endLineNumber": 85,
	"endColumn": 25,
	"relatedInformation": [
		{
			"startLineNumber": 1722,
			"startColumn": 24,
			"endLineNumber": 1722,
			"endColumn": 39,
			"message": "An argument for 'initialValue' was not provided.",
			"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/node_modules/@types/react/index.d.ts"
		}
	]
},{
	"resource": "/c:/Users/Aryan Agrawal/OneDrive/Documents/Chai aur Code (Notes)/artofmusicnextjs/src/components/ui/moving-border.tsx",
	"owner": "eslint",
	"code": {
		"value": "@typescript-eslint/no-explicit-any",
		"target": {
			"$mid": 1,
			"path": "/rules/no-explicit-any",
			"scheme": "https",
			"authority": "typescript-eslint.io"
		}
	},
	"severity": 8,
	"message": "Unexpected any. Specify a different type.",
	"source": "eslint",
	"startLineNumber": 85,
	"startColumn": 26,
	"endLineNumber": 85,
	"endColumn": 29
}]
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	darkMode: "class",
  theme: {
    extend: {
			animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
			backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

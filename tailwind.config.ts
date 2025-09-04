/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					warm: 'hsl(var(--primary-warm))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					warm: 'hsl(var(--secondary-warm))',
					light: 'hsl(var(--secondary-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					warm: 'hsl(var(--accent-warm))',
					light: 'hsl(var(--accent-light))'
				},
				highlight: {
					DEFAULT: 'hsl(var(--highlight))',
					foreground: 'hsl(var(--highlight-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-earth': 'var(--gradient-earth)',
				'gradient-sunset': 'var(--gradient-sunset)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'warm': 'var(--shadow-warm)',
				'deep': 'var(--shadow-deep)'
			},
			fontFamily: {
				'handwritten': ['Caveat', 'cursive']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(1deg)' 
					}
				},
				'glow': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' }
				},
				'gradient-shift': {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}


		
      colors: {
        background: "hsl(35, 25%, 92%)",
        foreground: "hsl(25, 15%, 25%)",
        card: "hsl(40, 30%, 88%)",
        cardForeground: "hsl(25, 15%, 30%)",
        popover: "hsl(38, 28%, 90%)",
        popoverForeground: "hsl(25, 15%, 25%)",
        primary: "hsl(15, 65%, 55%)",
        primaryForeground: "hsl(35, 25%, 92%)",
        primaryWarm: "hsl(12, 70%, 50%)",
        primaryLight: "hsl(18, 55%, 65%)",
        secondary: "hsl(85, 25%, 45%)",
        secondaryForeground: "hsl(35, 25%, 92%)",
        secondaryWarm: "hsl(80, 30%, 35%)",
        secondaryLight: "hsl(90, 20%, 55%)",
        accent: "hsl(45, 50%, 60%)",
        accentForeground: "hsl(25, 15%, 25%)",
        accentWarm: "hsl(42, 55%, 50%)",
        accentLight: "hsl(48, 45%, 70%)",
        highlight: "hsl(25, 60%, 45%)",
        highlightForeground: "hsl(35, 25%, 92%)",
        muted: "hsl(40, 20%, 82%)",
        mutedForeground: "hsl(25, 15%, 45%)",
        destructive: "hsl(0, 65%, 55%)",
        destructiveForeground: "hsl(35, 25%, 92%)",
        border: "hsl(35, 20%, 80%)",
        input: "hsl(38, 25%, 85%)",
        ring: "hsl(15, 65%, 55%)",
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					warm: 'hsl(var(--primary-warm))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					warm: 'hsl(var(--secondary-warm))',
					light: 'hsl(var(--secondary-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					warm: 'hsl(var(--accent-warm))',
					light: 'hsl(var(--accent-light))'
				},
				highlight: {
					DEFAULT: 'hsl(var(--highlight))',
					foreground: 'hsl(var(--highlight-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'

      },
      boxShadow: {
        soft: "0 4px 20px hsl(15, 65%, 55% / 0.1)",
        warm: "0 8px 32px hsl(25, 60%, 45% / 0.15)",
        deep: "0 12px 40px hsl(25, 15%, 25% / 0.1)",
      },
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
        sans: ["Inter", "sans-serif"],

        playful: ['Marhey', 'sans-serif'],
        business: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, hsl(15, 65%, 55%) 0%, hsl(45, 50%, 60%) 50%, hsl(85, 25%, 45%) 100%)",
        "gradient-earth": "linear-gradient(180deg, hsl(35, 25%, 92%) 0%, hsl(40, 20%, 82%) 100%)",
        "gradient-sunset": "linear-gradient(45deg, hsl(12, 70%, 50%) 0%, hsl(25, 60%, 45%) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
      darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		
	},
	plugins: [require("tailwindcss-animate")],
	} satisfies Config;
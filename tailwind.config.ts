import type { Config } from "tailwindcss";

export default {
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
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'luxury-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float-particle': {
					'0%': { 
						transform: 'translateY(100vh) translateX(0px) scale(0)',
						opacity: '0'
					},
					'10%': { opacity: '1', transform: 'scale(1)' },
					'90%': { opacity: '1', transform: 'scale(1)' },
					'100%': { 
						transform: 'translateY(-100px) translateX(100px) scale(0)',
						opacity: '0'
					}
				},
				'parallax-float': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'33%': { transform: 'translateY(-20px) translateX(10px)' },
					'66%': { transform: 'translateY(10px) translateX(-5px)' }
				},
				'luxury-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(42 96% 75% / 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(42 96% 75% / 0.8)',
						transform: 'scale(1.05)'
					}
				},
				'cinematic-fade': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'image-reveal': {
					'0%': { clipPath: 'inset(100% 0 0 0)' },
					'100%': { clipPath: 'inset(0 0 0 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'luxury-rotate': 'luxury-rotate 12s linear infinite',
				'float-particle': 'float-particle 8s linear infinite',
				'parallax-float': 'parallax-float 6s ease-in-out infinite',
				'luxury-pulse': 'luxury-pulse 3s ease-in-out infinite',
				'cinematic-fade': 'cinematic-fade 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
				'image-reveal': 'image-reveal 1.5s cubic-bezier(0.23, 1, 0.32, 1)'
			},
			backgroundImage: {
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-beam': 'var(--gradient-beam)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-mesh': 'var(--gradient-mesh)'
			},
			backdropBlur: {
				'luxury': '40px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

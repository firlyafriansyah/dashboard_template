/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'cold-steel': '#F8F7F4',
        'mojito-breeze': '#FBFFF4',
        akarmula: '#FFFEF7',
        'sea-pearl': '#FFF5EE',
        creme: '#FFF5EA',
        seal: '#FBFBFB',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'sidebar-items': {
          from: {
            width: '0',
            overflow: 'hidden',
            opacity: 0,
          },
          to: {
            width: '175px',
            overflow: 'visible',
            opacity: 1,
          },
        },
        'sidebar-group-items': {
          from: {
            width: '0',
            overflow: 'hidden',
            opacity: 0,
          },
          to: {
            width: '143px',
            overflow: 'visible',
            opacity: 1,
          },
        },
        'header-comp-384': {
          from: {
            height: '0',
            overflow: 'hidden',
          },
          to: {
            height: '384px',
            overflow: 'visible',
          },
        },
        'header-comp-288': {
          from: {
            height: '0',
            overflow: 'hidden',
          },
          to: {
            height: '288px',
            overflow: 'visible',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'sidebar-items': 'sidebar-items 0.3s ease-out',
        'sidebar-group-items': 'sidebar-group-items 0.3s ease-out',
        'header-comp-384': 'header-comp-384 0.3s ease-out',
        'header-comp-288': 'header-comp-288 0.3s ease-out',
      },
      inset: {
        0: '0px',
      },
      boxShadow: {
        'input-custom': '0px 0px 5px 0px hsl(var(--primary) / 0.5)',
        'input-error-custom': '0px 0px 5px 0px hsl(var(--destructive) / 0.5)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
};

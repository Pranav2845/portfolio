/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a1a1a', // Deep charcoal - gray-900
        'secondary': '#4a5568', // Balanced gray - gray-600
        'accent': '#3b82f6', // Professional blue - blue-500
        
        // Background Colors
        'background': '#ffffff', // Pure white - white
        'surface': '#f8fafc', // Subtle off-white - slate-50
        
        // Text Colors
        'text-primary': '#111827', // Near-black - gray-900
        'text-secondary': '#6b7280', // Medium gray - gray-500
        
        // Status Colors
        'success': '#10b981', // Confident green - emerald-500
        'warning': '#f59e0b', // Professional amber - amber-500
        'error': '#ef4444', // Clear red - red-500
        
        // Border Colors
        'border': '#e5e7eb', // Light gray border - gray-200
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in': 'slideIn 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-out': 'slideOut 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionTimingFunction: {
        'ease-portfolio': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      zIndex: {
        'navigation': '100',
        'dropdown': '150',
        'overlay': '200',
        'modal': '300',
      },
    },
  },
  plugins: [],
}
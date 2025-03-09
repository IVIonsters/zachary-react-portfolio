/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          primary: '#121212',     // Near black - Main background
          secondary: '#1e1e1e',   // Dark gray - Cards and sections
          tertiary: '#2d2d2d',    // Medium gray - Hover states
          light: '#f5f5f5',       // Off-white text
          muted: '#a0a0a0',       // Muted text
          accent: '#64ffda',      // Teal accent for highlights
          glass: 'rgba(30, 30, 30, 0.7)'  // Glass effect color
        },
        // Light mode colors
        light: {
          primary: '#f5f5f5',     // Off-white - Main background
          secondary: '#e5e5e5',   // Light gray - Cards and sections
          tertiary: '#d4d4d4',    // Medium light gray - Hover states
          dark: '#1e1e1e',        // Dark text
          muted: '#6b7280',       // Muted text
          accent: '#0e7490',      // Darker teal for better contrast
          glass: 'rgba(245, 245, 245, 0.7)'  // Glass effect color
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.2)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'zoomIn': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

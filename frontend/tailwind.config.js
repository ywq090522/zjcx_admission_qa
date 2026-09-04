/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-elevated': 'var(--bg-elevated)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',

        'border-color': 'var(--border-color)',
        'border-light': 'var(--border-light)',
        'border-focus': 'var(--border-focus)',

        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'surface-active': 'var(--surface-active)',

        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-active': 'var(--color-primary-active)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        'bubble-user-bg': 'var(--bubble-user-bg)',
        'bubble-user-text': 'var(--bubble-user-text)',
        'bubble-assistant-bg': 'var(--bubble-assistant-bg)',
        'bubble-assistant-text': 'var(--bubble-assistant-text)',

        'input-bg': 'var(--input-bg)',
        'send-btn-bg': 'var(--input-seedButton-bg)',
        'send-btn-bg-hover': 'var(--input-seedButton-bg-hover)',
        'send-btn-bg-active': 'var(--input-seedButton-bg-active)',
        'send-btn-bg-disable': 'var(--input-seedButton-bg-disable)',
        'send-btn-text': 'var(--input-seedButton-color)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      fontFamily: {
        sans: ['MiSans', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Courier New"', 'monospace'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      zIndex: {
        dropdown: 'var(--z-index-dropdown)',
        sticky: 'var(--z-index-sticky)',
        modal: 'var(--z-index-modal)',
        toast: 'var(--z-index-toast)',
      }
    },
  },
  plugins: [],
}
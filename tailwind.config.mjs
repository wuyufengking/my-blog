/** @type {import('tailwindcss').Config} */
export default {
  // 重要：确保包含所有VitePress相关文件
  content: [
    './docs/**/*.{html,js,ts,vue,md}',
    './.vitepress/**/*.{js,ts,vue,md}',
    './docs/.vitepress/**/*.{js,ts,vue,md}',
  ],
  theme: {
    extend: {
      // 自定义颜色，与VitePress主题变量保持一致
      colors: {
        primary: {
          50: 'var(--vp-c-brand-1)',
          100: 'var(--vp-c-brand-2)',
          500: 'var(--vp-c-brand-1)',
          600: 'var(--vp-c-brand-2)',
          700: 'var(--vp-c-brand-3)',
        },
        // 适配VitePress的暗色模式
        dark: {
          bg: 'var(--vp-c-bg)',
          'bg-alt': 'var(--vp-c-bg-alt)',
          'bg-soft': 'var(--vp-c-bg-soft)',
          text: 'var(--vp-c-text-1)',
          'text-2': 'var(--vp-c-text-2)',
          'text-3': 'var(--vp-c-text-3)',
          border: 'var(--vp-c-border)',
          'divider': 'var(--vp-c-divider)',
          brand: 'var(--vp-c-brand-1)',
        }
      },
      // 自定义字体
      fontFamily: {
        sans: ['Inter', 'Lato', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      // 自定义阴影效果
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hero': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // 自定义动画
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-soft': 'bounceSoft 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' },
        }
      },
      // 自定义间距
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // 自定义断点
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
  // 启用暗色模式类支持
  darkMode: ['class', '[data-theme="dark"]'],
}
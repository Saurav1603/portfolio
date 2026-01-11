export const designSystem = {
  colors: {
    primary: '#3B82F6',
    'primary-dark': '#2563EB',
    accent: '#10B981',
    dark: '#1F2937',
    light: '#F9FAFB',
    text: '#111827',
    muted: '#6B7280',
    background: '#FFFFFF',
    surface: '#F3F4F6',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      hero: '3rem', // 48px
      h1: '2.25rem', // 36px
      h2: '1.875rem', // 30px
      h3: '1.5rem', // 24px
      body: '1rem', // 16px
      small: '0.875rem', // 14px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.8,
    },
  },
  spacing: {
    scale: [4, 8, 16, 24, 32, 48, 64, 96, 128], // in px
  },
};

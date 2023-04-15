module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-100vh-fix': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true
      }
    }
  }
}

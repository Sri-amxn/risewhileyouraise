module.exports = {
    plugins: [
      require('postcss-prefix-selector')({
        prefix: '#react-root',
        exclude: [/^html/, /^body/]
      }),
      require('autoprefixer') // Optional: for vendor prefixes
    ]
  }
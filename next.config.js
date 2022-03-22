/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')()

module.exports = removeImports({
  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com'
    ]
  }
})

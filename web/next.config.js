// next config
// https://nextjs.org/docs/basic-features/image-optimization#domains
// const withImages = require('next-images')
// module.exports = withImages({
//   esModule: true,
//   images: {
//     domains: [
//       'images.prismic.io',
//       'fenzo.cdn.prismic.io',
//       'prismic-io.s3.amazonaws.com',
//       'static.cdn.prismic.io',
//       'res.cloudinary.com',
//       'dl.airtable.com',
//       'maps.googleapis.com'
//     ],
//   },
// })

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = {
  images: {
    //loader: 'cloudinary',
    //path: 'https://res.cloudinary.com/fenzo/image/upload/',
    domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com', 'res.cloudinary.com', 'dl.airtable.com', 'maps.googleapis.com'],
    // next/image support `srcSet` using the below deviceSizes
    // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

// Fix cannot find module for svg import on typescript .ts .tsx files,
// It requires you to declare image and svg formats on next-env.d.ts
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        dns: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }

    return config
  }
}

// module.exports = {
//   esModule: true,
//   images: {
//     domains: ['dl.airtable.com', 'maps.googleapis.com'],
//   },
// }

// Not perfomant, solves issue with css module not importing files, maybe delete later?
// https://github.com/vercel/next-plugins/issues/70#issuecomment-474722343
//
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// })

// const path = require('path')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }

//
// @zeit/next-sass
// scss, sass support with @zeit/next-sass has default support on nextjs > 9.0
//
//const withCss = require('@zeit/next-css')
//const withSass = require('@zeit/next-sass')
// module.exports = withCss(withSass(), {
//   cssModules: true
// })


//
// scss module support for nextjs : https://dev.to/vladymyrpylypchatin/comment/m7fg
//

// const withStyles = require('@webdeb/next-styles')
// module.exports = withStyles({
//   sass: true, // use .scss files
//   modules: true, // style.(m|module).css & style.(m|module).scss for module files
//   sassLoaderOptions: {
//     sassOptions: {
//       includePaths: ["src/styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
//     },
//   },
// })

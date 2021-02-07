// next config
// https://nextjs.org/docs/basic-features/image-optimization#domains
const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  images: {
    domains: ['dl.airtable.com', 'maps.googleapis.com'],
  },
})

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

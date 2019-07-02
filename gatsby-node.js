const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: `${__dirname}/src/components`,
        box: `${__dirname}/src/components/box`,
        static: `${__dirname}/static/`,
      
      },
    },
  })
}
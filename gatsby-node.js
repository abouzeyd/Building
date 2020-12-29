/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
  const services = require("./src/data/realisation.json")
  services.forEach(item => {
    createPage({
      path: `/${item.slug}`,
      component: require.resolve("./src/templates/services.jsx"),
      context: {
        title: item.title,
        description: item.description,
        image: item.image,
      },
    })
  })
}

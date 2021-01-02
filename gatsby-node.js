/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const services = require("./src/data/realisation.json")

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
  const serviceTemplate = require.resolve("./src/templates/services.jsx")
  services.forEach(item => {
    createPage({
      path: `/${item.slug}/`,
      component: serviceTemplate,
      context: {
        title: item.title,
        description: item.description,
        images: item.images,
        slug: item.slug,
      },
    })
  })
}

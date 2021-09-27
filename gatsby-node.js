const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            count
            uri
            id
            name
            slug
          }
        }
      }
    }
  `)

  //check for errors

  if (result.errors) {
    reporter.panicOnBuild(`Something went wrong`, result.errors)
    return
  }

  console.log(result)
}

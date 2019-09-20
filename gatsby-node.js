/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        // Directly add "slug" field to current node
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

const allMarkdownStringQuery = `
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
            limit: 1000) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(allMarkdownStringQuery)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)
    posts.forEach(({ node }, i) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/Blog.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug
            }
        })
    })

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogList.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage
                // numPages,
                // currentPage: i + 1
            }
        })
    })
}

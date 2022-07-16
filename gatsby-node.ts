const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({
  node,
  getNode,
  actions,
}: {
  node: any;
  getNode: any;
  actions: any;
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({
  graphql,
  actions,
}: {
  graphql: any;
  actions: any;
}) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            html
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(
    ({ node, next, previous }: { node: any; next: any; previous: any }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/templates/blog-posts.tsx`),
        context: {
          slug: node.fields.slug,
          frontmatter: node.frontmatter,
          html: node.html,
          next,
          previous,
        },
      });
    }
  );
  // // Create blog-list pages other than first
  // const posts = result.data.allMarkdownRemark.edges;
  // const postsPerPage = 4;
  // const numPages = Math.ceil(posts.length / postsPerPage);
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: `/${i + 1}`,
  //     component: path.resolve("./src/components/templates/blog-list.tsx"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
};

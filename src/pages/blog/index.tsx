import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import "./blog.scss";

const BlogPage = ({ data }: { data: any }) => {
  return (
    <Layout image={0}>
      <div className="blog-container">
        <h2>Blog Entries</h2>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <div>
            <h3>
              <Link to={edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </h3>
            <div>{edge.node.frontmatter.date}</div>
            <div>{edge.node.excerpt}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
      totalCount
    }
  }
`;

export default BlogPage;

import * as React from "react";
import { Link } from "gatsby";
import Layout from "../layout";
require(`katex/dist/katex.min.css`);
require("prismjs/themes/prism-solarizedlight.css");

export default ({ pageContext }: { pageContext: any }) => {
  const post = pageContext;

  return (
    <Layout image={0}>
      <div className="blog-container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div>
        {post.next && (
          <Link to={post.next.fields.slug}>
            &#8592;
            {`${post.next.frontmatter.title}`}
          </Link>
        )}
        <div></div>
        {post.previous && (
          <div>
            <Link to={post.previous.fields.slug}>
              {`${post.previous.frontmatter.title}`}
            </Link>
            &#8594;
          </div>
        )}
      </div>
      <div></div>
    </Layout>
  );
};

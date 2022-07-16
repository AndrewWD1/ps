import * as React from "react";
import "../styles.scss";
import { Link } from "gatsby";

const Layout = ({ image = 1, children }: { image: number; children: any }) => {
  return (
    <>
      <div className={`img-background img-background--${image}`} />
      <nav>
        <Link className="title" to="/">
          Andrew Doumont
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/math">Math</Link>
          </li>
          <li>
            <Link to="/teaching">Teaching</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

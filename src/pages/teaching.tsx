import * as React from "react";
import Layout from "../components/layout";

const TeachingPage = () => {
  return (
    <Layout image={1}>
      <div>
        <h2>Teaching</h2>
        <ul>
          <li>I'm currently instructing Calc.</li>
          <li>
            I have previously instructed Calc II and TA'd for both Calc I and
            Calc II
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default TeachingPage;

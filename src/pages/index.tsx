import * as React from "react";
import Layout from "../components/layout";
import "../styles.scss";

const IndexPage = () => {
  return (
    <Layout image={1}>
      <h1>Welcome</h1>
      <ul>
        <li>I'm Andrew Doumont.</li>
        <li>I'm a graduate student in the math department at CU-Boulder.</li>
        <li>
          My{" "}
          <a href="https://github.com/AndrewWD1/CV/blob/main/Doumont_CV.pdf">
            CV
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;

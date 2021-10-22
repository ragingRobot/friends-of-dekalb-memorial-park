import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
const TestPage = () => {
  return (
      <main>
        <title>Home Page</title>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="" src="/banner.jpg" />
      </main>
  );
};

export default TestPage;

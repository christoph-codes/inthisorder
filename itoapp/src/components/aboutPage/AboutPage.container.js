import React from "react";
import AboutPage from "./AboutPage.component";
import "./AboutPage.scss";
import { Helmet } from "react-helmet";

export default function AboutPageContainer() {
  return (
    <div className="AboutPageContainer">
      <Helmet>
        <title>InThisOrder » About Us</title>
        <meta
          name="description"
          content="Learn all about InThisOrder and the founder Christopher Jones on how the app was birthed and came to fruition."
        />
        <meta
          name="keywords"
          content="about, learn, Christopher Jones, founder, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <AboutPage />
    </div>
  );
}

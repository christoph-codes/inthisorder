import React from "react";
import HomePage from "./HomePage.component";
import "./HomePage.scss";
import { Helmet } from "react-helmet";

export default function HomePageContainer() {
  return (
    <div className="HomePageContainer">
      <Helmet>
        <title>InThisOrder » The #1 Task List for Kids</title>
        <meta
          name="description"
          content="The #1 Priority Task List For Kids Created By You! Boost Your Child’s Productivity And Reward Them Along the Way."
        />
        <meta
          name="keywords"
          content="kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <HomePage />
    </div>
  );
}

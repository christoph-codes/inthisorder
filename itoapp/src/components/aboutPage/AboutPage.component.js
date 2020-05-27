import React from "react";
import PageSection from "../../ui/pageSection/PageSection";
import headshot from "../../assets/christopher-jones-headshot.jpg";

export default function AboutPage() {
  return (
      <PageSection className="About" title="About InThisOrder">
        <div className="uk-grid uk-grid-large uk-flex-middle">
          <div className="uk-width-2-5@m">
            <img
              className="headshot"
              src={headshot}
              alt="Christopher Jones Founder of InThisOrder App Headshot"
            />
          </div>
          <div className="uk-width-3-5@m uk-flex-middle">
            <h2>My Name is Christopher Jones</h2>
            <p>
              As the Owner of The Kirk Concept and the Founder of InThisOrder. I
              am a full-time designer and passionate programmer who is adamant
              about creating things people truly enjoy. I have been happily
              married for 8 going on 87 years with two beautiful kids. What
              prompted me to create InThisOrder my need to organize tasks for my
              daughter. When giving her a list of things to do, she does the
              first thing and comes back to ask what she is supposed to do next.
              She focuses on the task at hand and nothing else. InThisOrder
              helps kids focus on one task at a time.<br/><br/> The idea came to mind at
              the end of 2019 and because of Covid-19, 2020 has given me the
              time to finish version zero of the app. I look forward to seeing
              how InThisOrder helps others to organize tasks for their families.
              The goal is to continue to incorporate more fun and convenient
              features for families to enjoy. InThisOrder can only go up from
              here. In the meantime, shoot me an email with any questions at
              <a href="mailto:tkcwebdev@gmail.com">tkcwebdev@gmail.com</a> or
              connect with me on LinkedIn. <strong>Enjoy InThisOrder!</strong>
            </p>
          </div>
        </div>
      </PageSection>
  );
}

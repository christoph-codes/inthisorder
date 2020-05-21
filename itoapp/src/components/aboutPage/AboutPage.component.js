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
            am a full-time designer and passionate programmer who is adament
            about creating things people truly enjoy. I have been happily
            married for 8 going on 87 years with two beautiful kids. What prompt
            me to create InThisOrder is my daughters simplistic way of thinking.
            If you give her a list of things to do, she does the first and comes
            back to ask what she was supposed to do after the first thing. She
            focuses on the task at hand and nothing else. So the birth of
            InThisOrder sprouted at the end of 2019. During 2020 Covid
            Quarantine I set out to finish version zero of the app to send out
            to friends and family. I look forward to what InThisOrder has in
            store for my life but the goal is to continue to create awesome
            thing people enjoy, so InThisOrder can only go up from here. In the
            meantime shoot me an email with any questions at{" "}
            <a href="mailto:tkcwebdev@gmail.com">tkcwebdev@gmail.com</a> or
            connect with me on LinkedIn. <strong>Enjoy InThisOrder!</strong>
          </p>
        </div>
      </div>
    </PageSection>
  );
}

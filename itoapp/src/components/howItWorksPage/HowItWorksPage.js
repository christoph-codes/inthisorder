import React from "react";
import "./HowItWorksPage.scss";
import Hero from "../../ui/hero/Hero";
import PageSection from "../../ui/pageSection/PageSection";
import step1img from '../../assets/add_task@2x.png';
import step2img from '../../assets/child_dashboard@2x.png';
import step3img from '../../assets/completed_tasks@2x.png';
import step4img from '../../assets/child_tasks_completed@2x.png';
import manageTasksImg from '../../assets/manage_tasks_macbook@2x.png';
import GetStartedSection from '../getStartedSection/GetStartedSection';

export default function HowItWorksPage(props) {
  return (
    <div className="HowItWorksPage">
      <Hero size="large" className="hero">
        <div className="uk-container uk-container-small uk-text-center">
          <h1>A Simple Way To Keep Kids On Track</h1>
          <p>
            It’s very simple to start and even easier to manage.Routine’s can
            become healthy habits for the family.
          </p>
        </div>
      </Hero>
      <PageSection className="steps">
        <div className="uk-grid step uk-flex-middle">
            <div className="uk-width-1-2@m">
                <img src={step1img} alt="" />
            </div>
            <div className="uk-width-1-2@m uk-flex-middle">
                <h2>Step 1: Add A Task</h2>
                <p>Enter the name of the task that your child can read and understand. Choose your child from the dropdown menu that you created upon account creation and click submit! Add as many as you need!</p>
            </div>
        </div>
        <div className="uk-grid step uk-flex-middle">
        <div className="uk-width-1-2@m uk-visible-small">
                <img src={step2img} alt="" />
            </div>
        <div className="uk-width-1-2@m uk-flex-middle">
                <h2>Step 2: Wait For Your Child</h2>
                <p>The child will see a very simple dashboard with the first task you added to their list. They will not see any other tasks within their list until they are done with the first one. This reassures focus and completion on the task assigned.</p>
            </div>
            <div className="uk-width-1-2@m uk-hidden-small">
                <img src={step2img} alt="" />
            </div>
        </div>
        <div className="uk-grid step uk-flex-middle">
            <div className="uk-width-1-2@m">
                <img src={step3img} alt="" />
            </div>
            <div className="uk-width-1-2@m uk-flex-middle">
                <h2>Step 3: Get Notified</h2>
                <p>Within your dashboard you will be notified when any task has been completed by any of your children and it will show what task was completed and when!</p>
            </div>
        </div>
        <div className="uk-grid step uk-flex-middle">
        <div className="uk-width-1-2@m uk-visible-small">
                <img src={step4img} alt="" />
            </div>
        <div className="uk-width-1-2@m uk-flex-middle">
                <h2>Step 4: Repeat</h2>
                <p>Once a child has completed all of their tasks you assigned to them that could give them the green light to do that thing they have been asking for… That’s until you assign them another task!</p>
            </div>
            <div className="uk-width-1-2@m uk-hidden-small">
                <img src={step4img} alt="" />
            </div>
        </div>
        <div className="final-step">
            <div className="uk-container uk-container-xsmall uk-text-center">
            <h2>Manage All Of The Tasks Across Your Entire Family</h2>
            <img src={manageTasksImg} alt="" />
            </div>
        </div>
      </PageSection>
      <GetStartedSection title="Ready to Get Started?"/>
    </div>
  );
}

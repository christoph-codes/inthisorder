import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import step1img from '../../assets/images/add_task@2x.png';
import step2img from '../../assets/images/child_dashboard@2x.png';
import step3img from '../../assets/images/completed_tasks@2x.png';
import step4img from '../../assets/images/child_tasks_completed@2x.png';
import manageTasksImg from '../../assets/images/manage_tasks_macbook@2x.png';
import GetStartedSection from '../../components/GetStartedSection';
import './HowItWorks.scss';

const HowItWorks = () => {
	return (
		<div className="HowItWorks">
			<Helmet>
				<title>InThisOrder » How It Works</title>
				<meta
					name="description"
					content="See a straight-forward way of how InThisOrder works today to start managing your tasks for your family."
				/>
				<meta
					name="keywords"
					content="how it works, easy to use, simple, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero
				size="large"
				className="d-flex justify-content-center align-items-center text-center"
			>
				<h1 className="hero--title text-primary">
					A Simple Way To Keep Kids On Track
				</h1>
				<p className="hero--description text-gray">
					It’s very simple to start and even easier to manage.
					Routine’s can become healthy habits for the family.
				</p>
			</Hero>
			<Section className="steps">
				<Row className="align-items-center my-3">
					<Col sm>
						<img src={step1img} alt="" />
					</Col>
					<Col sm>
						<h2>Step 1: Add A Task</h2>
						<p>
							Enter the name of the task that your child can read
							and understand. Choose your child from the dropdown
							menu that you created upon account creation and
							click submit! Add as many as you need!
						</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col md={{ order: 'last' }} sm={{ order: 'first' }}>
						<img src={step2img} alt="" />
					</Col>
					<Col md={{ order: 'first' }} sm={{ order: 'last' }}>
						<h2>Step 2: Wait For Your Child</h2>
						<p>
							The child will see a very simple dashboard with the
							first task you added to their list. They will not
							see any other tasks within their list until they are
							done with the first one. This reassures focus and
							completion on the task assigned.
						</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col sm>
						<img src={step3img} alt="" />
					</Col>
					<Col sm>
						<h2>Step 3: Get Notified</h2>
						<p>
							Within your dashboard you will be notified when any
							task has been completed by any of your children and
							it will show what task was completed and when!
						</p>
					</Col>
				</Row>
				<Row className="align-items-center my-3">
					<Col md={{ order: 'last' }} sm={{ order: 'first' }}>
						<img src={step4img} alt="" />
					</Col>
					<Col md={{ order: 'first' }} sm={{ order: 'last' }}>
						<h2>Step 4: Repeat</h2>
						<p>
							Once a child has completed all of their tasks you
							assigned to them that could give them the green
							light to do that thing they have been asking for…
							That’s until you assign them another task!
						</p>
					</Col>
				</Row>
				<Section className="text-center">
					<h2 className="mb-5">
						Manage All Of The Tasks Across Your Entire Family
					</h2>
					<img src={manageTasksImg} alt="" />
				</Section>
			</Section>
			<GetStartedSection title="Ready to Get Started?" />
		</div>
	);
};

export default HowItWorks;

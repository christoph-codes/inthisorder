import React from 'react';
import { Helmet } from 'react-helmet';
import { Col } from 'react-bootstrap';
import Section from '../../components/Section';
import Hero from '../../components/Hero';
import headshot from '../../assets/images/christopher-jones-headshot.jpg';
import './About.scss';

const About = () => {
	return (
		<div className="About">
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
			<Hero className="text-center" size="small">
				<h1 className="hero--title text-primary">About InThisOrder</h1>
				<p className="hero--description">
					InThisOrder was birthed from a need.
				</p>
			</Hero>
			<Section className="About" columns>
				<Col sm={4}>
					<img
						className="headshot"
						src={headshot}
						alt="Christopher Jones Founder of InThisOrder App Headshot"
					/>
				</Col>
				<Col>
					<p>
						As the Owner of The Kirk Concept and the Founder of
						InThisOrder. I am a full-time designer and passionate
						programmer who is adamant about creating things people
						truly enjoy. I have been happily married for 8 going on
						87 years with two beautiful kids.
					</p>
					<p>
						What prompted me to create InThisOrder was my need to
						organize tasks for my daughter. When giving her a list
						of things to do, she does the first thing and comes back
						to ask what she is supposed to do next. She focuses on
						the task at hand and nothing else. InThisOrder helps
						kids focus on one task at a time.
					</p>
					<p>
						{' '}
						The idea came to mind at the end of 2019 and because of
						Covid-19, 2020 has given me the time to finish version
						zero of the app. I look forward to seeing how
						InThisOrder helps others to organize tasks for their
						families. The goal is to continue to incorporate more
						fun and convenient features for families to enjoy.
						InThisOrder can only go up from here.
					</p>
					<p>
						In the meantime, shoot me an email with any questions at{' '}
						<a href="mailto:inthisorderapp@gmail.com">
							inthisorderapp@gmail.com
						</a>{' '}
						or connect with me on{' '}
						<a
							alt="Christopher Jones LinkedIn"
							href="https://www.linkedin.com/in/christopherkirkjones/"
						>
							LinkedIn
						</a>
						.
					</p>
					<p>
						<strong>Enjoy InThisOrder!</strong>
					</p>
				</Col>
			</Section>
		</div>
	);
};
export default About;

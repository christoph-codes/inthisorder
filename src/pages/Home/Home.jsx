import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import homeDevices from '../../assets/images/home_devices@2x.png';
import Section from '../../components/Section';
import Button from '../../components/Button';
import easyIcon from '../../assets/images/easy-to-start_icon.svg';
import orderingIcon from '../../assets/images/ordering_icon.svg';
import creationIcon from '../../assets/images/task-creation_icon.svg';
import secureIcon from '../../assets/images/secure-login_icon.svg';
import habitsIcon from '../../assets/images/build-habits_icon.svg';
import assignIcon from '../../assets/images/assign-tasks_icon.svg';
import youngBoyImg from '../../assets/images/good-for-young-boy@2x.png';
import youngGirlImg from '../../assets/images/good-for-young-girl@2x.png';
import kidsImg from '../../assets/images/good-for-kids@2x.png';
import GetStartedSection from '../../components/GetStartedSection';
import './Home.scss';

const Home = () => {
	return (
		<div className="Home">
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
			<Section className="hero">
				<Row className="justify-content-center align-items-center">
					<Col sm>
						<h1 className="text-primary">
							Kids love to do what’s right!
						</h1>
						<p>
							Help your kids get more done with a list made by
							you!
						</p>
						<Button variant="secondary" href="/create-account">
							Get Started
						</Button>
					</Col>
					<Col sm>
						<img
							src={homeDevices}
							alt="Tablets with InThisOrder App"
						/>
					</Col>
				</Row>
			</Section>
			<Section title="Boost Your Child’s Productivity And Reward Them Along the Way">
				<div className="features">
					<Row className="features">
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={easyIcon}
										alt="Easy To Start With InThisOrder App"
									/>
								</Col>
								<Col>
									<h3 className="h4">Easy to Start</h3>
									<p>
										Quickly create an account, give your
										family a name and start adding your kids
										with a breeze.
									</p>
								</Col>
							</Row>
						</Col>
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={creationIcon}
										alt="Simple Task Creation With InThisOrder App"
									/>
								</Col>
								<Col>
									<h3 className="h4">Simple Task Creation</h3>
									<p>
										Quickly create an account, give your
										family a name and start adding your kids
										with a breeze.
									</p>
								</Col>
							</Row>
						</Col>
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={assignIcon}
										alt="Assign Tasks With InThisOrder App"
									/>
								</Col>
								<Col>
									<h3 className="h4">Assign Tasks</h3>
									<p>
										Assign tasks to any of your children for
										them to complete and will show in their
										dashboard.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={orderingIcon}
										alt="Task Ordering With InThisOrder App"
									/>
								</Col>
								<Col>
									<h3 className="h4">Task Ordering</h3>
									<p>
										Tasks are automatically ordered by the
										date entered to ensure they are
										completed accordingly.
									</p>
								</Col>
							</Row>
						</Col>
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={secureIcon}
										alt="Secure Login With InThisOrder App"
									/>
								</Col>
								<Col className="uk-width-4-5@s">
									<h3 className="h4">Secure Login</h3>
									<p>
										Parents and kids have their own
										individual logins to their own account
										for privacy.
									</p>
								</Col>
							</Row>
						</Col>
						<Col sm={4} className="feature">
							<Row>
								<Col sm={2}>
									<img
										src={habitsIcon}
										alt="Build Healthy Habits With InThisOrder App"
									/>
								</Col>
								<Col className="uk-width-4-5@s">
									<h3 className="h4">Build Habits</h3>
									<p>
										As parents, we want to build healthy
										habits in our children, and this is a
										good first step!
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Section>
			<Section
				title="Good For Any Age And Watch Their Excitement!"
				className="good-for-age"
			>
				<Row>
					<Col>
						<img
							src={youngGirlImg}
							alt="InThisOrder is perfect for young girls"
						/>
					</Col>
					<Col>
						<img
							src={kidsImg}
							alt="InThisOrder is perfect for husbands too"
						/>
					</Col>
					<Col>
						<img
							src={youngBoyImg}
							alt="InThisOrder is perfect for young boys"
						/>
					</Col>
				</Row>
			</Section>
			<GetStartedSection
				className="get-started"
				title={
					<>
						The #1 Priority Task List For Kids,
						<br /> Create Your Account Now!
					</>
				}
			/>
		</div>
	);
};

export default Home;

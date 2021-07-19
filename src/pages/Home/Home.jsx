import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import homeDevices from '../../assets/home_devices@2x.png';
import Hero from '../../components/Hero';
import PageSection from '../../components/PageSection';
import easyIcon from '../../assets/easy-to-start_icon.svg';
import orderingIcon from '../../assets/ordering_icon.svg';
import creationIcon from '../../assets/task-creation_icon.svg';
import secureIcon from '../../assets/secure-login_icon.svg';
import habitsIcon from '../../assets/build-habits_icon.svg';
import assignIcon from '../../assets/assign-tasks_icon.svg';
import youngBoyImg from '../../assets/good-for-young-boy@2x.png';
import youngGirlImg from '../../assets/good-for-young-girl@2x.png';
import kidsImg from '../../assets/good-for-kids@2x.png';
import GetStartedSection from '../../components/GetStartedSection';
import './Home.scss';

const Home = () => {
	return (
		<div className="HomePage">
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
			<Hero size="large" className="hero">
				<div className="uk-grid uk-flex-middle">
					<div className="uk-width-1-2@s uk-flex-middle">
						<h1>Kids love to do what’s right!</h1>
						<p>
							Help your kids get more done with a list made by
							you!
						</p>
						<Link className="cta-pill" to="/create-account">
							Get Started
						</Link>
					</div>
					<div className="uk-width-1-2@s">
						<img
							src={homeDevices}
							alt="Tablets with InThisOrder App"
						/>
					</div>
				</div>
			</Hero>
			<PageSection title="Boost Your Child’s Productivity And Reward Them Along the Way">
				<div className="features">
					<div className="uk-grid uk-grid-large">
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={easyIcon}
										alt="Easy To Start With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Easy to Start</h2>
									<p>
										Quickly create an account, give your
										family a name and start adding your kids
										with a breeze.
									</p>
								</div>
							</div>
						</div>
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={creationIcon}
										alt="Simple Task Creation With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Simple Task Creation</h2>
									<p>
										Quickly create an account, give your
										family a name and start adding your kids
										with a breeze.
									</p>
								</div>
							</div>
						</div>
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={assignIcon}
										alt="Assign Tasks With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Assign Tasks</h2>
									<p>
										Assign tasks to any of your children for
										them to complete and will show in their
										dashboard.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="uk-grid uk-grid-large">
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={orderingIcon}
										alt="Task Ordering With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Task Ordering</h2>
									<p>
										Tasks are automatically ordered by the
										date entered to ensure they are
										completed accordingly.
									</p>
								</div>
							</div>
						</div>
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={secureIcon}
										alt="Secure Login With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Secure Login</h2>
									<p>
										Parents and kids have their own
										individual logins to their own account
										for privacy.
									</p>
								</div>
							</div>
						</div>
						<div className="uk-width-1-3@s feature">
							<div className="uk-grid uk-grid-small">
								<div className="uk-width-1-5@s">
									<img
										src={habitsIcon}
										alt="Build Healthy Habits With InThisOrder App"
									/>
								</div>
								<div className="uk-width-4-5@s">
									<h2>Build Habits</h2>
									<p>
										As parents, we want to build healthy
										habits in our children, and this is a
										good first step!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageSection>
			<PageSection
				title="Good For Any Age And Watch Their Excitement!"
				className="good-for-age"
			>
				<div className="uk-grid">
					<div className="uk-width-1-3@s">
						<img
							src={youngGirlImg}
							alt="InThisOrder is perfect for young girls"
						/>
					</div>
					<div className="uk-width-1-3@s">
						<img
							src={kidsImg}
							alt="InThisOrder is perfect for husbands too"
						/>
					</div>
					<div className="uk-width-1-3@s">
						<img
							src={youngBoyImg}
							alt="InThisOrder is perfect for young boys"
						/>
					</div>
				</div>
			</PageSection>
			<GetStartedSection
				className="home"
				title="The #1 Priority Task List For Kids, Create Your Account Now!"
			/>
		</div>
	);
};

export default Home;

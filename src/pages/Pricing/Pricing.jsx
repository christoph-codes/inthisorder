import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Select from '../../components/Select';

import './Pricing.scss';
import PricingColumn from '../../components/PricingColumn';

const Pricing = () => {
	const [subscription, setSubscription] = useState('');
	const [familySub, setFamilySub] = useState('annual');
	const subscribe = (e) => {
		e.preventDefault();
		// TODO: Add logic to purchase the subscription and create the account.
		console.log('subscription key:', subscription);
	};
	return (
		<div className="Pricing">
			<Helmet>
				<title>InThisOrder » Pricing</title>
				<meta
					name="description"
					content="Check out our simple pricing structure for InThisOrder today!"
				/>
				<meta
					name="keywords"
					content="pricing, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero size="small" className="text-center">
				<h1 className="hero--title text-primary">Pricing</h1>
				<p className="hero--description">Plans Made Simple.</p>
			</Hero>
			<Section className="Prices">
				<Row>
					<Col>
						<PricingColumn
							title="Limited"
							id="free"
							onClick={() => setSubscription('free')}
							value={subscription === 'free'}
							subtitle="A limited tier to try it out!"
							price="FREE"
							name="subscriptionChoice"
						>
							<ul>
								<li>1 child</li>
								<li>Limited tasks per child</li>
								<li>Mobile app access</li>
								<li>Real-time updates</li>
							</ul>
						</PricingColumn>
					</Col>
					<Col>
						<PricingColumn
							title="Family"
							id="annual"
							onClick={() => setSubscription('family')}
							value={subscription === 'family'}
							subtitle="One price. All year access."
							price={
								familySub === 'annual' ? '$100/yr' : '$10/mo'
							}
							name="subscriptionChoice"
							featured={familySub === 'annual'}
						>
							<ul>
								<li>Unlimited children</li>
								<li>Unlimited tasks</li>
								<li>Mobile app access</li>
								<li>Real-time updates</li>
								<li>24/7 Customer Support</li>
								<li>
									Billed{' '}
									{familySub === 'annual'
										? 'yearly'
										: 'monthly'}
								</li>
								{familySub === 'annual' && (
									<li>
										<strong>Two months FREE!</strong>
									</li>
								)}
							</ul>

							<Select
								name="family-subscription"
								value={familySub}
								setValue={(e) => setFamilySub(e.target.value)}
								disabled={subscription !== 'family'}
							>
								<option value="annual">Annual</option>
								<option value="monthly">Monthly</option>
							</Select>
						</PricingColumn>
					</Col>
				</Row>
				<Row>
					<Col as="form" onSubmit={(e) => subscribe(e)}>
						<input
							type="hidden"
							name="lookup_key"
							value={subscription}
						/>

						<Button
							variant={
								subscription ? 'secondary' : 'inactive-ghosted'
							}
							disabled={!subscription}
							type="submit"
						>
							Get Started
						</Button>
					</Col>
				</Row>
			</Section>
		</div>
	);
};

export default Pricing;

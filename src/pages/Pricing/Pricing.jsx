import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

import './Pricing.scss';
import PricingColumn from '../../components/PricingColumn';

const Pricing = ({ className, ...rest }) => {
	const [subscription, setSubscription] = useState('');
	return (
		<div className={`Pricing ${className}`} {...rest}>
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
				<p className="hero--description">
					One Family Plan Made Simple.
				</p>
			</Hero>
			<Section className="Prices" columns>
				<Col>
					<PricingColumn
						title="Monthly"
						id="monthly"
						onClick={() => setSubscription('monthly')}
						value={subscription === 'monthly'}
						subtitle="A single low monthly price"
						price="$10.00"
						lookupKey=""
						name="subscriptionChoice"
					>
						<ul>
							<li>Unlimited children</li>
							<li>Unlimited tasks</li>
							<li>Free Mobile App</li>
							<li>Real-time updates</li>
							<li>24/7 Customer Support</li>
							<li>Billed monthly</li>
						</ul>
					</PricingColumn>
				</Col>
				<Col>
					<PricingColumn
						title="Annual"
						id="annual"
						onClick={() => setSubscription('annual')}
						value={subscription === 'annual'}
						subtitle="One price. All year access."
						price="$100.00"
						lookupKey
						name="subscriptionChoice"
						featured
					>
						<ul>
							<li>Unlimited children</li>
							<li>Unlimited tasks</li>
							<li>Free Mobile App</li>
							<li>Real-time updates</li>
							<li>24/7 Customer Support</li>
							<li>Billed monthly</li>
						</ul>
					</PricingColumn>
				</Col>
			</Section>
		</div>
	);
};

export default Pricing;

Pricing.propTypes = {
	className: PropTypes.string,
};

Pricing.defaultProps = {
	className: '',
};

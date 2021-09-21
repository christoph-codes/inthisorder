import React from 'react';
import Button from '../Button';
import Section from '../Section';
import './GetStartedSection.scss';

const GetStartedSection = ({ title }) => {
	return (
		<Section className="GetStartedSection text-center bg-primary">
			<h2 className="text-white">{title}</h2>
			<Button variant="secondary" href="/create-account">
				Get Started
			</Button>
		</Section>
	);
};

export default GetStartedSection;

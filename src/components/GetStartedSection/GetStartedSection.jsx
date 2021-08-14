import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button';
import './GetStartedSection.scss';

const GetStartedSection = ({ title }) => {
	return (
		<section className="GetStartedSection text-center bg-primary">
			<Container>
				<h1>{title}</h1>
				<Button variant="secondary" href="/create-account">
					Get Started
				</Button>
			</Container>
		</section>
	);
};

export default GetStartedSection;

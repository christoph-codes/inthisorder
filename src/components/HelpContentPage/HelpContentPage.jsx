import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './HelpContentPage.scss';

const HelpContentPage = ({
	className,
	title,
	description,
	children,
	...rest
}) => {
	return (
		<main className={`HelpContentPage ${className || ''}`} {...rest}>
			<h1 className="text-center">{title}</h1>
			<p className="text-center">{description}</p>
			<Button size="small" variant="secondary-ghosted" href="/help">
				Go Back
			</Button>
			{children}
			<Button size="small" variant="secondary-ghosted" href="/help">
				Go Back
			</Button>
		</main>
	);
};

export default HelpContentPage;

HelpContentPage.propTypes = {
	className: PropTypes.string,
};

HelpContentPage.defaultProps = {
	className: '',
};

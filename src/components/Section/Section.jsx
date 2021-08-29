import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import './Section.scss';

const Section = ({
	className,
	children,
	bgImg,
	titleClass,
	columns,
	title,
	fullWidth,
	containerClass,
	...rest
}) => {
	return (
		<section
			style={{ backgroundImage: `url('${bgImg}')` }}
			className={`Section ${className}`}
			{...rest}
		>
			<Container
				className={`${containerClass || ''}`}
				fluid={fullWidth || false}
			>
				{title ? (
					<h2
						className={`section-title h1 text-center ${titleClass}`}
					>
						{title}
					</h2>
				) : null}
				{columns ? <Row>{children}</Row> : children}
			</Container>
		</section>
	);
};

export default Section;

Section.propTypes = {
	className: PropTypes.string,
	titleClass: PropTypes.string,
	bgImg: PropTypes.string,
	columns: PropTypes.bool,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	fullWidth: PropTypes.bool,
};

Section.defaultProps = {
	className: '',
	titleClass: '',
	bgImg: '',
	columns: false,
	title: '',
	fullWidth: false,
};

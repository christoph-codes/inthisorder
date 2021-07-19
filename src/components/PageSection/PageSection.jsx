import React from 'react';
import './PageSection.scss';

const PageSection = ({ className, title, children }) => {
	return (
		<section className={`PageSection ${className}`}>
			<div className="uk-container">
				{title ? (
					<h1 className="section-header uk-text-center">{title}</h1>
				) : null}
				<div className={title ? 'content' : null}>{children}</div>
			</div>
		</section>
	);
};

export default PageSection;

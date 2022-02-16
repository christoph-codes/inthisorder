import React from 'react';
import { string } from 'prop-types';
import './LoomVideo.scss';

const LoomVideo = ({ className, title, embedUrl, ...rest }) => {
	return (
		<div className={`LoomVideo ${className}`} {...rest}>
			<iframe
				title={title}
				src={embedUrl}
				frameBorder="0"
				webkitallowfullscreen
				mozallowfullscreen
				allowFullScreen
			/>
		</div>
	);
};

export default LoomVideo;

LoomVideo.propTypes = {
	className: string,
	title: string.isRequired,
	embedUrl: string.isRequired,
};

LoomVideo.defaultProps = {
	className: '',
};

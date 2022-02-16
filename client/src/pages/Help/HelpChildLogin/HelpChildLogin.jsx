import React from 'react';
import LoomVideo from '../../../components/LoomVideo';
import './HelpChildLogin.scss';
import HelpContentPage from '../../../components/HelpContentPage';

const HelpChildLogin = () => {
	return (
		<HelpContentPage
			className="HelpChildLogin"
			title="How Does My Child Login?"
			description="Logging into Inthisorder with a child account is super simple."
		>
			<LoomVideo
				title="How Does My Child Login with Inthisorder"
				embedUrl="https://www.loom.com/embed/6e6e2f1177aa4c6086659cdb1f0c77e1"
			/>
		</HelpContentPage>
	);
};

export default HelpChildLogin;

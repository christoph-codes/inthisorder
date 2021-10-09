import React from 'react';
import LoomVideo from '../../../components/LoomVideo';
import HelpContentPage from '../../../components/HelpContentPage';
import './HelpFamilySetup.scss';

const HelpFamilySetup = () => {
	return (
		<HelpContentPage
			className="HelpFamilySetup"
			title="How Do I Setup My Family"
			description="Setting up a family is very simple with Inthisorder and it
        consists of 3 easy steps."
		>
			<LoomVideo
				title="How Do I Setup My Family with Inthisorder"
				embedUrl="https://www.loom.com/embed/52d3163b81994cae88b68e46a77a8c85"
			/>
		</HelpContentPage>
	);
};

export default HelpFamilySetup;

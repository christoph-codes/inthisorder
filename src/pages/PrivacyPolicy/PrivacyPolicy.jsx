import React from 'react';
import { Helmet } from 'react-helmet';
import Section from '../../components/Section';
import Hero from '../../components/Hero';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
	return (
		<div className="PrivacyPolicy">
			<Helmet>
				<title>InThisOrder » Privacy Policy</title>
				<meta
					name="description"
					content="Please read InThisOrder's privacy policy as your priority is a top priority for us!"
				/>
				<meta
					name="keywords"
					content="privacy, policy, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero className="text-center" size="small">
				<h1 className="hero--title text-primary">Privacy Policy</h1>
				<p className="hero--description">
					The privacy of you and your family is a top priority.
				</p>
			</Hero>
			<Section>
				<p>Please Carefully Read Our Privacy Policy</p>
				<h4>Reservation of Rights</h4>
				<p>
					We reserve the right to request that you remove all links or
					any particular link to our Website. You approve to
					immediately remove all links to our Website upon request. We
					also reserve the right to amen these terms and conditions
					and it’s linking policy at any time. By continuously linking
					to our Website, you agree to be bound to and follow these
					linking terms and conditions.
				</p>
				<h4>Removal of links from our website</h4>
				<p>
					If you find any link on our Website that is offensive for
					any reason, you are free to contact and inform us any
					moment. We will consider requests to remove links but we are
					not obligated to or so or to respond to you directly.
				</p>
				<p>
					We do not ensure that the information on this website is
					correct, we do not warrant its completeness or accuracy; nor
					do we promise to ensure that the website remains available
					or that the material on the website is kept up to date.
				</p>
				<h4>Disclaimer</h4>
				<p>
					To the maximum extent permitted by applicable law, we
					exclude all representations, warranties and conditions
					relating to our website and the use of this website. Nothing
					in this disclaimer will:
				</p>
				<ul>
					<li>
						limit or exclude our or your liability for death or
						personal injury;
					</li>
					<li>
						limit or exclude our or your liability for fraud or
						fraudulent misrepresentation;
					</li>
					<li>
						limit any of our or your liabilities in any way that is
						not permitted under applicable law; or
					</li>
					<li>
						exclude any of our or your liabilities that may not be
						excluded under applicable law.
					</li>
				</ul>

				<p>
					The limitations and prohibitions of liability set in this
					Section and elsewhere in this disclaimer: (a) are subject to
					the preceding paragraph; and (b) govern all liabilities
					arising under the disclaimer, including liabilities arising
					in contract, in tort and for breach of statutory duty.
				</p>

				<p>
					As long as the website and the information and services on
					the website are provided free of charge, we will not be
					liable for any loss or damage of any nature.
				</p>
			</Section>
		</div>
	);
};

export default PrivacyPolicy;

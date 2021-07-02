import React, { useContext } from 'react';
import './ChildLogin.scss';

import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ChildLoginForm from '../../components/ChildLoginForm';
import { AuthContext } from '../../components/auth/Auth';

const ChildLogin = () => {
	const { child } = useContext(AuthContext);

	if (child.loggedInStatus) {
		return <Redirect to="/child/dashboard" />;
	}
	return (
		<div className="ChildLogin">
			<Helmet>
				<title>InThisOrder » Child Login</title>
				<meta
					name="description"
					content="Help your Child Login to InThisOrder today to start managing their tasks created by you the parent."
				/>
				<meta
					name="keywords"
					content="child, login, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<div className="uk-grid uk-grid-collapse">
				<div className="uk-width-1-2@s">
					<div className="photo-side uk-flex uk-flex-middle" />
				</div>
				<div className="uk-width-1-2@s">
					<div className="form-side uk-flex uk-flex-middle">
						<div className="form-container">
							<h1 className="form-header">Child Login</h1>
							<ChildLoginForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChildLogin;

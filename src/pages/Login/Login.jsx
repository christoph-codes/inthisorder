import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { UserContext } from '../../providers/UserProvider';

import './Login.scss';

const Login = () => {
	const { user } = useContext(UserContext);

	if (user.loggedInStatus) {
		return <Redirect to="/admin/dashboard" />;
	}
	return (
		<div className="Login">
			<div className="uk-grid uk-grid-collapse">
				<div className="uk-width-1-2@s">
					<div className="photo-side uk-flex uk-flex-middle" />
				</div>
				<div className="uk-width-1-2@s">
					<div className="form-side uk-flex uk-flex-middle">
						<div className="form-container">
							<h1 className="form-header">Parent Login</h1>
							<LoginForm />
							<Link className="sublink" to="/forgot-password">
								Forgot Password?
							</Link>
							<Link className="sublink" to="/create-account">
								Create Account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

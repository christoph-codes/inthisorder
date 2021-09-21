import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm';
import { UserContext } from '../../providers/UserProvider';
import './ParentLogin.scss';

const ParentLogin = () => {
	const { user } = useContext(UserContext);

	if (user.loggedInStatus) {
		return <Redirect to="/admin/dashboard" />;
	}
	return (
		<div className="ParentLogin">
			<Row>
				<Col className="p-0">
					<div className="photo-side uk-flex uk-flex-middle" />
				</Col>
				<Col className="p-0">
					<div className="form-side uk-flex uk-flex-middle">
						<div className="form-container">
							<h1 className="form-header h2">Parent Login</h1>
							<LoginForm />
							<Link className="sublink" to="/forgot-password">
								Forgot Password?
							</Link>
							<Link className="sublink" to="/create-account">
								Create Account
							</Link>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ParentLogin;

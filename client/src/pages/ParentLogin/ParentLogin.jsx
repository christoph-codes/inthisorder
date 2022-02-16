import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ParentLoginForm from '../../components/ParentLoginForm';
import { UserContext } from '../../providers/UserProvider';
import './ParentLogin.scss';

const ParentLogin = () => {
	const { user } = useContext(UserContext);

	if (user.loggedInStatus) {
		return <Redirect to="/admin/dashboard" />;
	}
	return (
		<div className="ParentLogin">
			<Row noGutters>
				<Col sm="auto" md>
					<div className="photo-side" />
				</Col>
				<Col sm="auto" md>
					<div className="form-side">
						<div className="form-container">
							<h1 className="form-header h2">Parent Login</h1>
							<ParentLoginForm />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ParentLogin;

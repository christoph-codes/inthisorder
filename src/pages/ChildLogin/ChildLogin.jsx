import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import ChildLoginForm from '../../components/ChildLoginForm';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildLogin.scss';

const ChildLogin = () => {
	const { child } = useContext(ChildContext);

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
			<Row noGutters>
				<Col sm className="p-0">
					<div className="photo-side" />
				</Col>
				<Col sm className="p-0">
					<div className="form-side d-flex uk-flex-middle">
						<div className="form-container">
							<h1 className="form-header">Child Login</h1>
							<ChildLoginForm />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ChildLogin;

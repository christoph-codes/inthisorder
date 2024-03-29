import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import CreateAccountForm from '../../components/CreateAccountForm';
import './CreateAccount.scss';

const CreateAccount = () => {
	return (
		<>
			<Helmet>
				<title>InThisOrder » Create Your Account Today</title>
				<meta
					name="description"
					content="Create an Account today to get started managing your tasks for your family."
				/>
				<meta
					name="keywords"
					content="create, account, signup, get started, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<div className="CreateAccount">
				<Row noGutters>
					<Col sm="auto" md>
						<div className="photo-side" />
					</Col>
					<Col sm="auto" md>
						<div className="form-side py-4 d-flex align-items-center">
							<div className="form-container text-center">
								<h1 className="h2 form-header text-white">
									Create An Account
								</h1>
								<CreateAccountForm />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default CreateAccount;

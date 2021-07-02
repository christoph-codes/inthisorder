import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
				<div className="uk-grid uk-grid-collapse">
					<div className="uk-width-1-2@s">
						<div className="photo-side uk-flex uk-flex-middle" />
					</div>
					<div className="uk-width-1-2@s">
						<div className="form-side uk-flex uk-flex-middle">
							<div className="form-container">
								<h1 className="form-header">
									Create An Account
								</h1>
								<CreateAccountForm btnText="Sign Up" />
								<Link className="sublink" to="/login">
									Already Have An Account?
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateAccount;

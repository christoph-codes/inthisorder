import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../providers/UserProvider';
import KidCard from '../../components/KidCard';
import Spinner from '../../components/Spinner';
import AddChildForm from '../../components/AddChildForm';
import { KidsContext } from '../../providers/KidsProvider';
import DashSideForm from '../../components/DashSideForm';
import FloatingDashButtonForm from '../../components/FloatingDashButtonForm';
import pendingKids from '../../assets/images/bird_pending_data.svg';
import addChildIcon from '../../assets/images/add_child_white.svg';
import './AdminKids.scss';
import { ToastContext } from '../../providers/ToastProvider';
import HelpMessage from '../../components/HelpMessage';

const AdminKids = () => {
	const { user } = useContext(UserContext);
	const { setToast } = useContext(ToastContext);
	const { kids, areKidsLoading } = useContext(KidsContext);

	if (areKidsLoading) {
		return <Spinner />;
	}

	if (user.familyname === '' || user.familycode === '') {
		setToast(
			'FYI',
			'You must set your family up before you add any kids.',
			'secondary'
		);
		return <Redirect to="/admin/family" />;
	}

	return (
		<div className="AdminKids">
			<h1 className="text-center">Kids</h1>
			<p className="text-center">
				Be sure to add your kids so you can start assigning tasks to
				them!
			</p>
			<Row className="justify-content-center">
				<Col sm={8}>
					{kids.length !== 0 ? (
						kids.map((kid, index) => (
							<KidCard key={index} kid={kid} />
						))
					) : (
						<div className="empty--tasks text-center">
							<img
								src={pendingKids}
								alt="Bird with plus sign artwork"
							/>
							<p className="mt-4">
								You currently don&apos;t have any tasks.
								<br /> Be sure to add your first one!
							</p>
						</div>
					)}
					<HelpMessage className="text-primary">
						<p className="m-0">
							Need help logging your child(ren) in?{' '}
							<Link className="LINK" to="/help/child-login">
								Learn More
							</Link>
						</p>
					</HelpMessage>
				</Col>
				<Col sm={4} className="text-center d-none d-md-block">
					<DashSideForm>
						<AddChildForm />
					</DashSideForm>
				</Col>
			</Row>
			<FloatingDashButtonForm
				className="d-flex d-md-none"
				btnIcon={addChildIcon}
			>
				<AddChildForm />
			</FloatingDashButtonForm>
		</div>
	);
};

export default AdminKids;

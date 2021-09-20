import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../providers/UserProvider';
import KidCard from '../../components/KidCard';
import Spinner from '../../components/Spinner';
import AddChildForm from '../../components/AddChildForm';
import { KidsContext } from '../../providers/KidsProvider';
import DashSideForm from '../../components/DashSideForm';
import pendingKids from '../../assets/images/bird_pending_data.svg';
import './AdminKids.scss';
import { ToastContext } from '../../providers/ToastProvider';

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
				</Col>
				<Col sm={4} className="text-center">
					<DashSideForm>
						<AddChildForm />
					</DashSideForm>
				</Col>
			</Row>
		</div>
	);
};

export default AdminKids;

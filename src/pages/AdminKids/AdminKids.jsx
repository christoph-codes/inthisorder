import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../providers/UserProvider';
import KidCard from '../../components/KidCard';
import Spinner from '../../components/Spinner';
import AddChildForm from '../../components/AddChildForm';
import './AdminKids.scss';
import { KidsContext } from '../../providers/KidsProvider';
import DashSideForm from '../../components/DashSideForm';

const AdminKids = () => {
	const { user } = useContext(UserContext);
	const { kids, areKidsLoading } = useContext(KidsContext);

	if (areKidsLoading) {
		return <Spinner />;
	}

	if (user.familyname === '' || user.familycode === '') {
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
				{kids.length !== 0 && (
					<Col sm={8}>
						{kids.map((kid, index) => (
							<KidCard key={index} kid={kid} />
						))}
					</Col>
				)}

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

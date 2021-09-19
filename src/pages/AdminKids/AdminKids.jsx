import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Accordion, Spinner } from 'react-bootstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { UserContext } from '../../providers/UserProvider';
import KidCard from '../../components/KidCard';
import AddChildForm from '../../components/AddChildForm';
import './AdminKids.scss';
import { KidsContext } from '../../providers/KidsProvider';

const AdminKids = () => {
	const { user } = useContext(UserContext);
	const { kids, areKidsLoading, kidsErrors } = useContext(KidsContext);

	if (kidsErrors) {
		console.log('Kids Errors:', kidsErrors);
	}
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
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header className="add-child-button bg-primary text-white">
								<IoMdAddCircleOutline color="#ffffff" />
								Add Child
							</Accordion.Header>
							<Accordion.Body>
								<AddChildForm />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</div>
	);
};

export default AdminKids;

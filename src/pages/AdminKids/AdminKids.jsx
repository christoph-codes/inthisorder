import React, { useContext } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { UserContext } from '../../providers/UserProvider';
import KidCard from '../../components/KidCard';
import AddChildForm from '../../components/AddChildForm';
import './AdminKids.scss';

const AdminKids = () => {
	const { kids } = useContext(UserContext);

	const kidsList = kids.map((kid) => <KidCard key={kid.id} kid={kid} />);

	return (
		<div className="AdminKids">
			<h1 className="text-center">Kids</h1>
			<p className="text-center">
				Be sure to add your kids so you can start assigning tasks to
				them!
			</p>
			<Row className="justify-content-center">
				<Col sm={8}>{kidsList}</Col>

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

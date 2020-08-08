import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailModal = ({ setSelected, show, details}) => {
	const handleClose = () => {
		setSelected(null);
	}
	console.log(details)
	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>Modal C</Modal.Title>
			</Modal.Header>
				<Modal.Body>
					<p><b>Full name: </b>{`${details.first_name} ${details.last_name}`}</p>
					<p><b>E-mail: </b>{details.email}</p>
					<p><b>Phone number: </b>{details.phone_number}</p>
					<p><b>Country: </b>{details.country.iso}</p>
					<p><b>Groups: </b>{details.groups.map(g => g.group_name).join(', ')}</p>
       			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DetailModal;
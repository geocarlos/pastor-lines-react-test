import React from 'react';
import './Main.scss';
import { Modal, Button } from 'react-bootstrap';

const DetailModal = ({ setShow, show, details }) => {
	const handleClose = () => {
		setShow(false);
	}
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
					{JSON.stringify(details, null, 2)}
       			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DetailModal;
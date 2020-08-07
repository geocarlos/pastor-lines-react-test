import React from 'react';
import './Main.scss';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CustomModal = ({ _key }) => {
	const history = useHistory();
	const handleClose = () => {
		history.push('/');
	}
	return (
		<Modal
			show
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>Modal {_key.toUpperCase()}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Contacts will be listed here.
       			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => history.push('/modal-a')} variant="primary">All Contacts</Button>
				<Button onClick={() => history.push('/modal-b')} variant="primary">US Contacts</Button>
				<Button variant="secondary" onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CustomModal;
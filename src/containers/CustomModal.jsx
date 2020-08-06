import React from 'react';
import './Main.scss';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, setShow, buttonLabels, _key }) => {
	const handleClose = () => {
		console.log(show);
		setShow(previous => ({ ...previous, [_key]: false }));
	}
	return (
		<>
			<Modal
				show={show}
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
					<Button variant="primary">{buttonLabels.a}</Button>
					<Button variant="primary">{buttonLabels.b}</Button>
					<Button variant="secondary" onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default CustomModal;
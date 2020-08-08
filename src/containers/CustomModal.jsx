import React from 'react';
import './Main.scss';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../actions';
import ContactListItem from '../components/ContactListIem';
import './CustomModal.scss';

const CustomModal = ({ _key }) => {
	const history = useHistory();
	const {contacts, loading, hasError} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchContacts()(dispatch);
	}, [dispatch])

	const handleClose = () => {
		history.push('/');
	}

	// &countryId=xxx does not appear to be working, thus a work-around
	const contactArray = Object.keys(contacts).map(c => contacts[c]);
	const _contacts = _key === 'a' ? contactArray : contactArray.filter(c => c.country_id === 226);

	return (
		<Modal
			show
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
			centered
			dialogClassName="custom-modal"
		>
			<Modal.Header closeButton>
				<Modal.Title>Modal {_key.toUpperCase()}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{!loading && _contacts.map(contact => (
					<ContactListItem contact={contact} />
				))}
				{loading && <div className="loading"><Spinner animation="border" /></div>}
				{hasError && <p>Something wrong</p>}
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
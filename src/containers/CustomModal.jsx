import React, { useState, Fragment } from 'react';
import './Main.scss';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../actions';
import ContactListItem from '../components/ContactListIem';
import './CustomModal.scss';
import Scrollbars from 'react-custom-scrollbars';
import LoadingPlaceHoder from '../components/LoadingPlaceHolder';

const CustomModal = ({ _key }) => {
	const history = useHistory();
	const { contacts, total, loading, hasError } = useSelector(state => state);
	const dispatch = useDispatch();

	// local state
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (contacts.length === 0) {
			fetchContacts([`page=${page}`])(dispatch);
		}
	}, [dispatch, page, contacts])

	const handleClose = () => {
		history.push('/');
	}

	const handleScroll = event => {
		const el  = event.srcElement;
		const reachedBottom = Math.round(el.scrollTop) === el.scrollHeight - el.clientHeight;
		if (reachedBottom && !loading && Object.keys(contacts).length < total) {
			setPage(page + 1);
			fetchContacts([`page=${page + 1}`])(dispatch);
		}
	}

	// &countryId=xxx does not appear to be working, thus a work-around
	const _contacts = _key === 'a' ? contacts : contacts.filter(c => c.country_id === 226);

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
				<Scrollbars onScroll={handleScroll}>
					{_contacts.map(contact => (
						<Fragment key={contact.id}>
							<ContactListItem contact={contact} />
						</Fragment>
					))}
					{loading && <LoadingPlaceHoder _number={5} />}
					{hasError && <p>Something wrong</p>}
				</Scrollbars>
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
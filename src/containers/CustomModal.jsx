import React, { useState, Fragment } from 'react';
import './Main.scss';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, queryContacts } from '../actions';
import ContactListItem from '../components/ContactListIem';
import './CustomModal.scss';
import Scrollbars from 'react-custom-scrollbars';
import LoadingPlaceHoder from '../components/LoadingPlaceHolder';
import DetailModal from '../components/DetailModal';
import Search from '../components/Search';

const CustomModal = ({ _key }) => {
	const history = useHistory();
	const { contacts, total, loading, hasError } = useSelector(state => state);
	const dispatch = useDispatch();

	// local state
	const [page, setPage] = useState(1);
	const [selected, setSelected] = useState(null);
	const [_contacts, setContacts] = useState([]);
	const [query, setQuery] = useState('');
	const [onlyEven, setOnlyEven] = useState(false);

	useEffect(() => {
		setContacts([]);
		const params = ['page=1'];
		if (_key === 'b') {
			params.push('countryId=226'); // Currently not working
		}
		queryContacts(params)(dispatch);
	}, [dispatch, _key]);

	useEffect(() => {	
		setContacts(contacts);
	}, [contacts, setContacts]);

	const filterContacts = (list) => {
		// Technical debt: &countryId=xxx does not appear to be working, thus a work-around
		const _list = _key === 'a' ? list : list.filter(c => c.country_id === 226);
		if (onlyEven) {
			return _list.filter(c => c.id % 2 === 0);
		}
		return _list;
	}

	const handleClose = () => {
		history.push('/');
	}

	const handleScroll = event => {
		const el = event.srcElement;
		const reachedBottom = Math.round(el.scrollTop) === el.scrollHeight - el.clientHeight;
		if (reachedBottom && !loading && Object.keys(contacts).length < total) {
			setPage(page + 1);
			const params = [`page=${page + 1}`];
			if (_key === 'b') {
				params.push('countryId=226');
			}
			if (query) {
				params.push(`query=${query}`);
			}
			fetchContacts(params)(dispatch);
		}
	}

	const handleChange = event => {
		setQuery(event.target.value);
		handleQuery(query);
	}

	const handleSubmit = event => {
		event.preventDefault();
		handleQuery(event.target.search.value);
	}

	const handleQuery = value => {
		const params = [`query=${value}`];
		if (_key === 'b') {
			params.push('countryId=226');
		}
		if (!query) {
			params.push('page=1')
		}
		queryContacts(params)(dispatch);
	}

	return (
		<>
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
					<Search handleSubmit={handleSubmit} handleChange={handleChange} />
				</Modal.Header>
				<Modal.Body>
					<Scrollbars onScroll={handleScroll}>
						{filterContacts(_contacts).map(contact => (
							<Fragment key={contact.id}>
								<ContactListItem onClick={() => setSelected(contact)} contact={contact} />
							</Fragment>
						))}
						{loading && <LoadingPlaceHoder _number={5} />}
						{hasError && <p>Something wrong</p>}
					</Scrollbars>
				</Modal.Body>
				<Modal.Footer>
					<div className="checkbox-container">
						<input type="checkbox" className="checkbox" checked={onlyEven} onChange={() => setOnlyEven(!onlyEven)} />
						<label>Only even</label>
					</div>
					<Button onClick={() => history.push('/modal-a')} variant="color-a">All Contacts</Button>
					<Button onClick={() => history.push('/modal-b')} variant="color-b">US Contacts</Button>
					<Button variant="outline-color-a" onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
			{selected && <DetailModal show={selected !== null} setSelected={setSelected} details={selected} />}
		</>
	)
}

export default CustomModal;
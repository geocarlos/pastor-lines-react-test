import {
	FETCH_CONTACTS, QUERY_CONTACTS
} from '../actions';

const status = {
	PENDING: '_PENDING',
	FULFILLED: '_FULFILLED',
	REJECTED: '_REJECTED'
}

const initialState = {
	contacts: [],
	total: 0,
	loading: false,
	hasError: false
}

const contacts = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CONTACTS + status.PENDING:
			return {
			...state,
			loading: true,
			hasError: false
		}
		case FETCH_CONTACTS + status.FULFILLED:
			const contacts = action.payload.data.contacts;
			return {
				...state,
				total: action.payload.data.total,
				contacts: state.contacts.concat(Object.keys(contacts).map(c => contacts[c])),
				loading: false,
				hasError: false
		}
		case FETCH_CONTACTS + status.REJECTED:
			return {
			...state,
			loading: false,
			hasError: true
		}
		case QUERY_CONTACTS + status.PENDING:
			return {
			...state,
			loading: true
		}
		case QUERY_CONTACTS + status.FULFILLED:
			const filteredContacts = action.payload.data.contacts;
			return {
				...state,
				total: action.payload.data.total,
				contacts: Object.keys(filteredContacts).map(c => filteredContacts[c]),
				loading: false
		}
		case QUERY_CONTACTS + status.REJECTED:
			return {
			...state,
			loading: false,
			hasError: true
		}
		default:
			return state;
	}
}

export default contacts;
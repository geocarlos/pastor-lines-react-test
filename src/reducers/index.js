import {
	FETCH_CONTACTS
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
			loading: true
		}
		case FETCH_CONTACTS + status.FULFILLED:
			const contacts = action.payload.data.contacts;
			return {
				...state,
				total: action.payload.data.total,
				contacts: state.contacts.concat(Object.keys(contacts).map(c => contacts[c])),
				loading: false
		}
		default:
			return state;
	}
}

export default contacts;
import {
	FETCH_CONTACTS
} from '../actions';

const status = {
	PENDING: '_PENDING',
	FULFILLED: '_FULFILLED',
	REJECTED: '_REJECTED'
}

const initialState = {
	contacts: {},
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
			return {
				...state,
				contacts: action.payload.data.contacts,
				loading: false
		}
		default:
			return state;
	}
}

export default contacts;
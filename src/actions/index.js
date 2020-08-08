import { handleAsync } from './asyncHandler';
import api from '../api';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const fetchContacts = (params) => dispatch => {
	handleAsync(dispatch, FETCH_CONTACTS, api.fetchContacts, params);
};

export const QUERY_CONTACTS = 'QUERY_CONTACTS';
const queryContacts = (params) => dispatch => {
	handleAsync(dispatch, QUERY_CONTACTS, api.fetchContacts, params);
};

export {
	fetchContacts,
	queryContacts
}

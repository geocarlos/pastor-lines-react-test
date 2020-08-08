import { handleAsync } from './asyncHandler';
import api from '../api';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const fetchContacts = (params) => dispatch => {
	handleAsync(dispatch, FETCH_CONTACTS, api.fetchContacts, params);
};

export {
	fetchContacts
}

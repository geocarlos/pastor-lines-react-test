import api from '../api';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
const fetchContacts = () => ({
	type: FETCH_CONTACTS,
	contacts: api.fetchContacts()
})

export const actions = {
	fetchContacts
}


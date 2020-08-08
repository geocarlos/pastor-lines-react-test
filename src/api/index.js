import axios from 'axios';
import {
	token
} from './token.json';

const url = 'https://api.dev.pastorsline.com/api/contacts.json?companyId=171';

const api = {
	fetchContacts: function (params = []) {
		return axios.get(url + '&' + params.join('&'));
	},
}

/* REQUEST INTERCEPTOR */
axios.interceptors.request.use((request) => {
	request.headers.Authorization = token;
	return request;
});

export default api;
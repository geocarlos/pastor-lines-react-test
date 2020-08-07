import axios from 'axios';
import {
	token
} from './token.json';

const url = 'https://api.dev.pastorsline.com/api/contacts.json';

const api = {
	fetchDeviceFields: function () {
		const request = axios.get(url);
		return request;
	},
}

/* REQUEST INTERCEPTOR */
axios.interceptors.request.use((request) => {
	request.headers.Authorization = token;
	return request;
});

export default api;
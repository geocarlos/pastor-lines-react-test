import React from 'react';
import CustomModal from './CustomModal';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const setShow = jest.fn(() => ({}))

const mockStore = configureMockStore();

describe('Modal', () => {
	const wrapper = mount(
		<Provider store={mockStore({
			contacts: [],
			total: 0,
			loading: false,
			hasError: false
		})}>
			<CustomModal _key='a' setShow={setShow} buttonLabels={{}} />
		</Provider>);
	it('renders properly', () => {
		expect(wrapper).toMatchSnapshot();
	})	
})
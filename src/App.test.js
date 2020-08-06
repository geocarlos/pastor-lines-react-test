import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
	const wrapper = mount(<App />);

	it('renders properly', () => {
		expect(wrapper).toMatchSnapshot();
	});
})



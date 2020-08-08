import React from 'react';
import Main from './Main';
import {shallow} from 'enzyme';

describe('Main', () => {
	const wrapper = shallow(<Main />);
	it('renders properly', () => {
		expect(wrapper).toMatchSnapshot();
	})	
})
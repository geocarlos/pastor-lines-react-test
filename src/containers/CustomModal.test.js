import React from 'react';
import CustomModal from './CustomModal';
import {shallow} from 'enzyme';

const setShow = jest.fn(() => ({}))

describe('Modal', () => {
	const wrapper = shallow(<CustomModal _key='a' setShow={setShow} buttonLabels={{}} />);
	it('renders properly', () => {
		expect(wrapper).toMatchSnapshot();
	})	
})
import React, { Fragment } from 'react';
import ContactListItem from './ContactListIem';

const LoadingPlaceHoder = ({_number}) => (
	<>
		{[...Array(_number).keys()].map(key => (
			<Fragment key={key + 'loading'}>
				<ContactListItem />
			</Fragment>
		))}
	</>
)

export default LoadingPlaceHoder;
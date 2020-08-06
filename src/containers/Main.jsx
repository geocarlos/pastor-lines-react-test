import React, { useState } from 'react';
import './Main.scss';
import { Button } from 'react-bootstrap';
import Modal from './CustomModal';

const buttonLabels = {
	a: 'All Contacts', b: 'US Contacts'
}

const Main = () => {
	const [show, setShow] = useState({
		a: false,
		b: false
	});
	return (
		<>
			<div className="button-container">
				<Button onClick={() => setShow(previous => ({...previous, a: true}))}>Button A</Button>
				<Button onClick={() => setShow(previous => ({...previous, b: true}))}>Button B</Button>
			</div>
			<Modal {...{ show: show.a, setShow, _key: 'a', buttonLabels }} />
			<Modal {...{ show: show.b, setShow, _key: 'b', buttonLabels }} />
		</>
	)
}

export default Main;
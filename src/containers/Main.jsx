import React from 'react';
import './Main.scss';
import { Button } from 'react-bootstrap';

const Main = () => {
	return (
		<>
			<div className="button-container">
				<Button>Button A</Button>
				<Button>Button B</Button>
			</div>
		</>
	)
}

export default Main;
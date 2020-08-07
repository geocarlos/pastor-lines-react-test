import React from 'react';
import './App.scss';
import Main from './containers/Main';
import Modal from './containers/CustomModal';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
	return (
		<div className="container app">
			<Router>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route path="/modal-a">
						<Modal {...{ show: true, _key: 'a' }} />
					</Route>
					<Route path="/modal-b">
						<Modal {...{ show: true, _key: 'b' }} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

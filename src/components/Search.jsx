import React from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ handleSubmit, handleChange }) => {
	return (
		<div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
			<Form onSubmit={handleSubmit}>
				<Form.Control name="search" placeholder="Search" onChange={handleChange} />
			</Form>
		</div>)
}

export default Search;
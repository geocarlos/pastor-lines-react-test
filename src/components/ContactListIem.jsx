import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

const ContactListItem = ({ contact }) => {
	return (
		<Card key={(contact || {}).id || 'loading-conc'}>
			<Card.Body>
				{contact ? (
					<p><b>{contact.id}</b> - {contact.first_name} {contact.last_name}{contact.email && `, ${contact.email}`}</p>
				) : (
					<div className="loading"><Spinner animation="border" /></div>
				)}
			</Card.Body>
		</Card>
	)
}

export default ContactListItem;
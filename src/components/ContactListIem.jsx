import React from 'react';
import { Card } from 'react-bootstrap';

const ContactListItem = ({contact}) => {
	return (
		<Card key={contact.id}>
			<Card.Body>
				<p><b>{contact.id}</b> - {contact.first_name} {contact.last_name}{contact.email && `, ${contact.email}`}</p>
			</Card.Body>
		</Card>
	)
}

export default ContactListItem;
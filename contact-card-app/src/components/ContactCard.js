import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imageUrl} alt="Saachi" />
      <h3>{props.contact.name}</h3>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
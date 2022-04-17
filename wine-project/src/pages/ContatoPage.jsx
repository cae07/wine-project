import React from 'react';
import {
  Email,
  GitHub,
  Linkedin,
  Whatsapp
} from '../contacts';
import '../css/contatos.css';

function ContatoPage() {
  return (
    <section className="contact-container">
      <h1>Contatos</h1>
      <section className="contact">
        <Linkedin />
        <GitHub />
        <Whatsapp />
        <Email />
      </section>
    </section>
  );
}

export default ContatoPage;

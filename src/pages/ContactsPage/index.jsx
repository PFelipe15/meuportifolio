import React from "react";
import Header from "../../components/Header";
import "./contact.css";
import Social from '../../components/Social'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
function ContactsPage() {
  return (
    <div className="container-contactpage">
      <Header />
      <main className="main-contact">
        <div className="contact-container">
          <div className="contacts">
            <h1>CONTATOS</h1>
            <div className="labels">
              <label className="label">TELEFONE:&nbsp; </label>
              <h4>(86) 98803-4600 <AiOutlineWhatsApp size={25} color='#fff'/></h4>
            </div>
            <div className="labels">
              <label className="label">EMAIL:&nbsp; </label>
              <h4> PauloFelipeT15@gmail.com <AiOutlineMail size={25} color='#fff'/></h4>
            </div>
            <Social/>
          </div>
        </div>
        <div className="msg-container">
          “O espaço entre a teoria e a prática não é tão grande como é, a teoria
          na prática.” Autor desconhecido
        </div>
      </main>
    </div>
  );
}

export default ContactsPage;

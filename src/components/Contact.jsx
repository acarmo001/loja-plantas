import { useState } from 'react';
import '../Styles/Contact.css'

export default function Contact() {

    
        const [formContact, setFormContact] = useState('Enviar');
        const onSubmit = (event) => {
            event.preventDefault();
            setFormContact('Enviado...');
            const { firstname, lastname, email, message } = event.target.elements;
            const contactForm = {
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                message: message.value
            }
            console.log(contactForm);
        }
    

    return (
        <div className='contact'>
            <h2>Contatos</h2>
            <form onSubmit={onSubmit}>
                <div className='nameform'>
                    <label htmlFor="firstname">Primeiro nome:</label>
                    <input type="text" id="firstname" required />
                    <label htmlFor="lastname">Último nome:</label>
                    <input type="text" id="lastname" required />
                    <label htmlFor="email" placeholder="exemplo@exemplo.com">E-mail:</label>
                    <input type="email" id="email" required />
                </div>
                <div className='messageForm'>
                    <textarea htmlFor="message" id="message" placeholder="Coloque a sua questão/sugestão aqui..."></textarea>
                </div>
                <button className='btnSend' type="submit">{formContact}</button>
                
            </form>
        </div>
        

    );
}
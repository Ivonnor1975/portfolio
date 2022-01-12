import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    // JSX
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
          }
          else{
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
          }  
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return (
        <section>
          <h1>Contact me</h1>
          <div className="split" >
   
            <ul>
            <p>
            Any questions? 
            <br/>
            Let me know and I'll be happy to talk to you!
            </p>
              <li  class="Address-list">
                <p><img src="./assets/images/icons8-address-24.png" alt="Address"/> Houston, TX</p>
              </li>
              <li class="Address-list">
                <p><img src="./assets/images/icons8-phone-24.png" alt="Phone"/>Phone: 832-XXX-XXXX </p>
              </li>
              <li class="Address-list">
                <p><img src="./assets/images/icons8-mail-24.png" alt="Email: "/>Email: <a href="mailto:ivonnor@gmail.com">ivonnor@gmail.com</a></p>
              </li>
            </ul>
          <form id="contact-form" onSubmit={handleSubmit}>
          <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                <label htmlFor="message">How can I help you?</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
          </form>
        </div>
        </section>
      )
 }
    
export default ContactForm;
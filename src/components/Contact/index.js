import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import addessImage from "../../assets/images/icons8-address-24.png"
import phoneImage from "../../assets/images/icons8-phone-24.png"
import emailImage from "../../assets/images/icons8-mail-24.png"
import './style.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    // JSX
    const { name, email, phone, message } = formState;
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
    <div className="my-5" id="contact">
      <h2>Contact me</h2>
      <div classname="d-flex flex-row justify-content-center align-items-start">
            <div className="contact-info" >
                <ul>
                <p>
                Any questions? 
                <br/>
                Let me know and I'll be happy to talk to you!
                </p>
                  <li  className="Address-list fw-bold">
                    <p><img src={addessImage} alt="Address"/>: Houston, TX</p>
                  </li>
                  <li className="Address-list fw-bold">
                    <p><img src={phoneImage} alt="Phone"/>: 832-XXX-XXXX </p>
                  </li>
                  <li className="Address-list fw-bold">
                    <p><img src={emailImage} alt="Email: "/>: <a href="mailto:ivonnor@gmail.com">ivonnor@gmail.com</a></p>
                  </li>
                </ul>
               </div>
               <div className="contact-form">
                  <legend>I am here to help you</legend>
                  <form id="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="Name">Name:</label>
                        <input type="text" defaultValue={name} className="form-control" onBlur={handleChange} name="name" />
                                
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} name="email" className="form-control" onBlur={handleChange} />

                        <label for="phone">Phone number:</label>
                        <input type="text" defaultValue={phone} name="phone-number" className="form-control" style={{ height: "100px"}} onBlur={handleChange}  />
                                        
                        <label htmlFor="message">How can I help you?</label>
                        <textarea name="message" defaultValue={message} className="form-control" onBlur={handleChange} rows="5" />
                      
                        {errorMessage && (
                            <div>
                                <p className="error-text text-white fs-4 bg-dark">{errorMessage}</p>
                            </div>
                        )}
                        <button classname="btn btn-primary" type="submit">Submit</button>
                  </form>
              </div>
            </div>
         </div>
       )
 }
    
export default ContactForm;
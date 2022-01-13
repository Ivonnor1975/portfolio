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
    <section className="container-lg box-padding mt-2 rounded-3" id="contact">
        <h1>Contact me</h1>
         <div className="row p-3" >

         <div className="col-sm-12 col-md-12 col-lg-6" >

            <ul className="list-group list-group-flush">
            <p>
            Any questions? 
            <br/>
            Let me know and I'll be happy to talk to you!
            </p>
              <li  className="list-group-item fw-bold">
                <p><img src="./assets/images/icons8-address-24.png" alt="Address"/> Houston, TX</p>
              </li>
              <li className="list-group-item fw-bold">
                <p><img src="./assets/images/icons8-phone-24.png" alt="Phone"/>Phone: 832-XXX-XXXX </p>
              </li>
              <li className="list-group-item fw-bold">
                <p><img src="./assets/images/icons8-mail-24.png" alt="Email: "/>Email: <a href="mailto:ivonnor@gmail.com">ivonnor@gmail.com</a></p>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="mb-3">

          <form id="contact-form" onSubmit={handleSubmit}>
          <div>
                <label htmlFor="name" className="form-label text-white fw-bold fs-5">Name:</label>
                <input type="text" defaultValue={name} className="form-control" onBlur={handleChange} name="name" />
                </div>
                <div>
                <label htmlFor="email" className="form-label text-white fw-bold fs-5">Email address:</label>
                <input type="email" defaultValue={email} name="email" className="form-control" onBlur={handleChange} />
                </div>
                <div>
                <label htmlFor="message" className="form-label text-white fw-bold fs-5">How can I help you?</label>
                <textarea name="message" defaultValue={message} className="form-control" onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text text-white fs-4 bg-dark">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-danger fs-4 mt-2" type="submit">Submit</button>
          </form>
        </div>
        </div>
        </div>
      </section>
      )
 }
    
export default ContactForm;
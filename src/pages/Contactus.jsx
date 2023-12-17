import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css'; // Import your CSS file for styling

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogq6fdv', 'template_wia8dhn', form.current, 'XVCuLrobbBa3-p79L')
      .then((result) => {
        console.log(result.text);
        toast.success('Email has been sent successfully!', { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send email. Please try again.', { position: 'top-right' });
      });
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Restaverse</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="to_name">Name</label>
          <input type="text" id="to_name" name="to_name" required />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">Email</label>
          <input type="email" id="from_email" name="from_email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>

        <div className="form-group">
          <input type="submit" value="Send" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

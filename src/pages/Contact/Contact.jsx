/* eslint-disable react/no-unknown-property */
import Swal from 'sweetalert2'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_75o0o8o', 'template_mnqz95k', form.current, '6OilfX-Y6pP3_5e3r')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          Swal.fire({
            title: "Thanks for reaching out!",
            showClass: {
              popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `
            },
            hideClass: {
              popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `
            }
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };


  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.5883620000577!2d91.78457625658669!3d22.3757529732749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9a8e9659679%3A0xb37fc1abd7ba39ce!2sM%20Block%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1711689735671!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;

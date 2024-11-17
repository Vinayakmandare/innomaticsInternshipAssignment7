// src/pages/Contact.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Simple validation
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
    if (!formData.email) setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    if (!formData.message) setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));

    // Check if there are no errors before submitting
    if (Object.values(errors).every((error) => error === '') &&
        Object.values(formData).every((field) => field !== '')) {
      console.log('Form submitted:', formData);
      // Submit the form (e.g., send to an API)
    }
  };

  return (
    <>
    <div className='container form col-lg-5'>
      <h1 className='text-center'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='form-control'
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-control'
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Mobile:</label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className='form-control'
          />
          
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='form-control'
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <div className='text-center'>
        <button type="submit" className='my-3 btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>

<footer className='mt-5'>
<div className="mx-5 mt-5 d-inline">
<img src="https://www.innomatics.in/wp-content/uploads/2023/01/innomatics-footer-logo.png" alt="" height={90}/>
</div>
<div className='d-flex justify-content-around'>
<div className="para mx-5">
A leading training institute, Innomatics Research Labs offers courses in areas such as NASSCOM Futureskills Prime Certified Data 
Science, Python, AI, Data Analytics, Full Stack Development, and Digital Marketing. Our practical training is designed meticulously 
to meet industry needs and provide valuable certification upon completion, empowering individuals to excel in their careers.
</div>
<div className='courses'>
<h5 className='text-danger'>Courses</h5>
<p>Data Science</p>
<p>Online Data Science</p>
<p>Advanced Generative AI</p>
<p>Full Stack Web Developer</p>
<p>Digital Marketing</p>
<p>Placements</p>
<p>Partner With Us</p>
<p>Privacy Policy</p>
</div>
<div className='contact-details'>
<h5 className='text-danger'>Contact Details</h5>
<i class="fa-solid fa-location-dot "></i>
<FontAwesomeIcon icon={faLocationDot} size="1x" className='text-danger'/>
<span className='mx-3'>Kukatpally — Hyderabad</span>
<p className='location-info mx-4'>#205, 2nd Floor, Fortune Signature, Near JNTU Metro Station, Kukatpally, Hyderabad, Telangana 500085</p>
<FontAwesomeIcon icon={faLocationDot} size="1x" className='text-danger'/>
<span className='mx-3'>Pune</span>
<p className='location-info mx-4'>2nd Floor, Sai Sayaji Apartment, 201,(P, Paud Rd, beside VANAZ Metro, above Bata showrrom, Ramkrishna Paramhans Nagar, Kothrud, Pune, Maharashtra 411038)</p>
<FontAwesomeIcon icon={faPhone} size="1x" className='text-danger'/>
<span className='mx-3'>Phone/Whatsapp:</span>
<p className='location-info mx-4'>+91-1800 4123 1937 / +91-9951666671 
+91-6304126766  / +91-9347804375</p>
<FontAwesomeIcon icon={faEnvelope} size="1x" className='text-danger'/>
<span className='mx-3'>For Course:info@innomatics.in</span>

</div>
</div>
</footer>   
</>
  );
};

export default Contact;

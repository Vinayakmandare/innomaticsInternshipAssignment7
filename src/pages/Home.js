// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
  <header>
 <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Artboard-3.jpg" alt="" height={500}/>
 <h2 className='text-center my-2'>Best Full Stack Development course with Job Assistance</h2>
 <div className="container my-5">
 <h4>About Full Stack Development Course</h4>
 <p>A full stack web developer course will teach you how to design and develop complete websites from start to finish. 
  You will learn how to work on different web development aspects, including front-end, back-end, databases, debugging,
   and testing. Whether you’re interested in becoming a Frontend Developer or want to work in Backend technologies, this 
   course will give you all the skills you need to become a full-stack developer and build a robust portfolio of projects. 
   Become a Certified Full Stack Developer with 30 plus In-Demand tools and skills with one of the Best Full Stack Web 
   Developer Course in Hyderabad.</p>
 </div>

  <h3 className='text-center'>Programming Languages and Tools</h3>
  <div className='bg-light text-center container'>
   <img src="https://www.innomatics.in/wp-content/uploads/2023/01/programing-languages.jpg" alt="" />
 </div>
 <h3 className='text-center mb-4'>Learning Outcomes</h3>
 <div className='container border-1 mb-4'>
 <ul className='container d-flex'>
  <div className='line-height'>
  <li>Build an extensive backend API</li>
  <li>Protecting routes/endpoints with JWT (JSON Web Tokens)</li>
  <li> Integrating React with our backend in an elegant way, creating a great workflow.</li>
  </div>
  <div className='mx-5 line-height'>
  <li>Build an extensive backend API</li>
  <li>Protecting routes/endpoints with JWT (JSON Web Tokens)</li>
  <li> Integrating React with our backend in an elegant way, creating a great workflow.</li>
  </div>
 </ul>
 </div>
 </header>
 <footer className=''>
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
    </motion.div>
  );
};

export default Home;

// src/pages/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

const About = () => {
return (
<>
<p className='container'><b>Innomatics Research Labs </b>is a pioneer in <b>“Transforming Career and Lives”</b> of individuals in the Digital Space by catering advanced 
training on <b className='text-danger'>NASSCOM FutureSkills Prime Certified Data Science</b>, <b>Machine Learning, Artificial Intelligence (AI)</b>, <b className='text-danger'>Full Stack Development,</b>
<b className='text-danger'>Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics,</b> and <b className='text-danger'>Digital Marketing.</b> We are passionate about bridging the
gap between learning and real-time implementation, so empowering individuals to be industry-ready and help firms in reaping huge 
benefits is our primary goal.</p>
<div className='container'>
<h1>“Learn, Explore & Experience”</h1>
<p>We work greatly on this motto; so we let a trainee work hands-on, explore challenges, and experience real-time business cases. 
We have been awarded as the Best Training Institute in Hyderabad by Times Of India for our relentless hard work, practical 
training approach, and making individuals skillful. As an authorized “Training Partner with NASSCOM FutureSkills Prime,” we 
strive to make individuals learn not just algorithms, but also business case studies and challenges. Hackathons, workshops, 
and meetups are conducted on a timely basis to improve effectiveness and productivity. Having a dedicated placement verticle
  which helps trainees conquer the business world, solve the complexities. Innomatics is supporting over 100 companies in 
  finding the best candidate, which can upskill the business requirements and foster growth.</p>

  <h1>Vision</h1>
  <p>Our vision is to invade and make India a Hub for Artificial intelligence and analytics. Apart from being the most credible 
  education institute for career transformation, we aim to become the best training institute with experts from different domains
    like Banking, Insurance, Retail, Health Care, and Manufacturing. Communicating with the industry experts and explaining the 
    value data science brings to the Organization for better decision making; demonstrate how methodologies can be applied and
    optimize opportunities, innovate new and better tools.</p>

    <h1>Mission</h1>
    <p>We are established on a mission that encapsulates individuals in excelling through real-time approaches and the great promise to business in finding the best prospects who can set a benchmark to improve the quality of the businesses. With more than 40 affiliated trainers hailing from top-notch companies.

We provide the best learning experience in current trending technologies through facilitators who are continuous learners with the highest potential and empower others to do the same. Our practical approach encapsulates individuals in excelling through real-time strategies and the great promise to businesses in finding the best prospects who can set a benchmark to improve the quality of the businesses. The mission involves

Developing the state-of-the-art benchmark in data science,
Transforming all fields, professions, and sectors through the application of data science.</p>
    </div>

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
</>
)
};

export default About;

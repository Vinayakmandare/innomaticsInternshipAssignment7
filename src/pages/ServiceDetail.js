
import React from 'react';
import { useParams } from 'react-router-dom';
import design from '../images/desing.png'
import development from '../images/development.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

const ServiceDetail = () => {
  const { serviceType } = useParams();
  return( 
  <>
  <h2 className='text-center'>Details about our {serviceType} service.</h2>
  { window.location.href === 'http://localhost:3000/services/design' ? 
  <div className="text-center">
   <img src={design} height={500}/> 
   </div>
     : 
     <div className="text-center">
     <img src={development} height={500}/> 
     </div>
}

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

export default ServiceDetail;

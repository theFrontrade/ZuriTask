import React from "react";
import '../Style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div>
        <img src='/img/footer-logo.svg' alt='img' />
        <div className='footer-icon-wrap'>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </div>
        <p>
          <FontAwesomeIcon icon='copyright' />
           <span> 2022 Metabnb</span></p>
      </div>
      <div className='footer-link-wrap'>
        <div>
          <p>Community</p>
          <span>NFT</span>
          <span>Tokers</span>
          <span>Landlord</span>
          <span>Discord</span>
        </div>
        <div>
          <p>Places</p>
          <span>Castle</span>
          <span>Farm</span>
          <span>Beach</span>
          <span>Learn More</span>
        </div>
        <div>
          <p>About us</p>
          <span>Road map</span>
          <span>Creators</span>
          <span>Career</span>
          <span>Contact us</span>
        </div>
        
      </div>
    </div>
  );
};
export default Footer;

import React from "react";
const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div>
        <img src='/img/footer-logo.svg' alt='img' />
        <p>2022 Metabnb</p>
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

import React from "react";
import Inspiration from "../Inspiration";
const Home = () => {
  return (
    <div>
      <Container1 />
      <Logos />
      <Inspiration />
      <Container2 />
    </div>
  );
};
export default Home;
export const Container1 = () => {
  return (
    <div className='main-sub-wrap'>
      <div className='main-sub1-container'>
        <p className='main-head-p'>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>metaverse</span>
        </p>
        <span className='main-container-span'>
          we provide you access to luxury and affordable houses <br /> in the
          metaverse, get a chance to turn your <br /> imagination to reality at
          your comfort zone
        </span>
        <div className='main-search-wrap'>
          <input type='search' placeholder='Search for location' />
          <button className='search-button' type='submit'>
            Search
          </button>
        </div>
      </div>
      <div className='main-sub1-container-2'>
        <img style={{ width: "100%" }} src='./img/mainImg.png' alt='img' />
      </div>
    </div>
  );
};

export const Logos = () => {
  return (
    <div className='main-wrap-last-container'>
      <img src='/img/frame 4041.svg' alt='img' />
      <img src='/img/group 4040.svg' alt='img' />
      <img src='/img/group 59537.svg' alt='img' />
    </div>
  );
};
export const Container2 = () => {
  return (
    <div className='container2-wrap'>
      <div className='container2-text-wrap'> 
        <p>Metabnb NFTs</p>
        <span>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</span>
      <button>Learn More</button>
      </div>
      <div className='container2-img-wrap'>
        <img src='/img/frame 59546.png' alt='img' />
      </div>
    </div>
  );
};

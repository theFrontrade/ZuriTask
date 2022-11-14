import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { PlacesList } from "./placeToStay";
const Houses = () => {
  return (
    <div>
      <Header />
      <PlaceCategories />
      <HouseList />
      <Footer />
    </div>
  );
};
export default Houses;

export const PlaceCategories = () => {
  return (
    <div>
      <ul className='categories-ul'>
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantastic City</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        <div className='location-button'>
          Location
          <FontAwesomeIcon className='sliders-h' icon='sliders-h' />
        </div>
      </ul>
    </div>
  );
};

export const HouseList = () => {
  return (
    <div className='houses-wrap'>
      <div className='houses-container-wrap'>
        {PlacesList.map((item) => (
          <div className='house-container-sub-wrap' key={item.key}>
            <div>
              <img src={item.src} alt='img' />
            </div>
            <p>
              <span className='houses-first-span'>{item.name}</span>
              <span className='houses-second-span'>{item.price} per night</span>
            </p>
            <p>
              <span className='houses-first-span'>{item.distance} away</span>{" "}
              <span className='houses-first-span'>
                available for {item.availability} stay
              </span>
            </p>
            <span>
              <FontAwesomeIcon className='house-rating' icon='star' />
            </span>
            <span>
              <FontAwesomeIcon className='house-rating' icon='star' />
            </span>
            <span>
              <FontAwesomeIcon className='house-rating' icon='star' />
            </span>
            <span>
              <FontAwesomeIcon className='house-rating' icon='star' />
            </span>
            <span>
              <FontAwesomeIcon className='house-rating' icon='star' />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

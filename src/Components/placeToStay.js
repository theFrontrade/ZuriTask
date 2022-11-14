import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Style/places.css";
const PlacesTOStay = () => {
  return (
    <div className='houses-wrap'>
      <p className='inspired-text'>Inspiration for your next adventure</p>
      <div className='houses-container-wrap'>
        {PlacesList.slice(0, 8).map((item) => (
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
export default PlacesTOStay;
export const PlacesList = [
  {
    key: 1,
    name: "Desert King",
    src: "/img/house1.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
    stars: 5,
  },
  {
    key: 2,
    name: "Desert King",
    src: "/img/house2.png",
    price: "1mbt",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 3,
    name: "Desert King",
    src: "/img/house3.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 4,
    name: "Desert King",
    src: "/img/house4.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 5,
    name: "Desert King",
    src: "/img/house5.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 6,
    name: "Desert King",
    src: "/img/house6.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 7,
    name: "Desert King",
    src: "/img/house7.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 8,
    name: "Desert King",
    src: "/img/house8.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 9,
    name: "Desert King",
    src: "/img/house9.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 10,
    name: "Desert King",
    src: "/img/house10.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 11,
    name: "Desert King",
    src: "/img/house11.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 12,
    name: "Desert King",
    src: "/img/house12.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 13,
    name: "Desert King",
    src: "/img/house13.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 14,
    name: "Desert King",
    src: "/img/house14.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 15,
    name: "Desert King",
    src: "/img/house15.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
  {
    key: 16,
    name: "Desert King",
    src: "/img/house16.png",
    price: "1MBT",
    distance: "2345km",
    availability: "2 weeks",
  },
];

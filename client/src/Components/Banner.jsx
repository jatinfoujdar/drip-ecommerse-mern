import React from 'react';
import { bannerData } from "../Constant/data.js";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';

const Banner = () => {
  // Check if bannerData exists and is an array
  if (!Array.isArray(bannerData) || bannerData.length === 0) {
    return null; // Return null if bannerData is empty or not an array
  }

  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay interval={2000}>
      {
        bannerData.map((data, index) => {
          // Check if data object has url property
          if (!data.url) {
            return null; // Skip rendering if url is missing
          }

          return (
            <div key={index}>
              <img src={data.url} alt="nav" />
            </div>
          );
        })
      }
    </Carousel>
    
  );
};

export default Banner;

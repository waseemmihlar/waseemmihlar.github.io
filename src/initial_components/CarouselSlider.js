import React, { useEffect } from "react";
import "./CarouselStyle.css";
import openai from "../accets/openai.png";
import secureImage from "../accets/secureimage2.png";
import foodOrder from "../accets/foodOrder.webp";
import mernMemory from "../accets/Mern-memory.png";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CarouselStyle.css";
import { useState } from "react";

const CarouselSlider = () => {
  const imageList = [mernMemory, openai, foodOrder, secureImage];

  const [image, setImage] = useState(imageList[0]);

  useEffect(() => {
    loadImage();
  }, []);

  console.log(imageList.length);
  const loadImage = () => {
    for (let i = 0; i < imageList.length; i++) {
      // setInterval(() => setImage(imageList[i]), 2000);
      setTimeout(async () => {
        await setImage(imageList[i]);
      }, 2000);
      // if (i == 3) {
      //   loadImage();
      // }
    }
  };
  return (
    <div style={{ maxWidth: "1000px", paddingTop: "4rem" }}>
      <div style={{ height: "40vh" }}>
        <img src={image} height="100%" />
      </div>
    </div>
  );
};

export default CarouselSlider;

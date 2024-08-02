import React, { useState } from "react";
import { Carousel, Image } from 'react-bootstrap';
import image1 from "../assets/nissan-qashqai.jpg";
import image2 from "../assets/Honda_Jazz.jpg";
import image3 from "../assets/Mercedes-Benz-B-class.jpg";
import image4 from "../assets/chevrolet-utility.jpg";
import image5 from "../assets/now-banner.jpg";

const images = [image1, image2, image3, image4, image5];

const CarCarousel = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
  
  return (
    <>
      
      <div className="container">
        <Carousel
          activeIndex={photoIndex}
          onSelect={(selectedIndex) => setPhotoIndex(selectedIndex)}
          indicators={false}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image}
                alt={`Car ${index}`}
                className="d-block w-100"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="thumbnail-images">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="img-thumbnail"
              onClick={() => setPhotoIndex(index)}
              style={{ cursor: "pointer", width: "100px", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarCarousel;

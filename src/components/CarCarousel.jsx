import React, { useState } from "react";
import { Carousel, Image, Modal, Button } from "react-bootstrap";
import "../styles/CarCarousel.css";
import image1 from "../assets/nissan-qashqai.jpg";
import image2 from "../assets/Honda_Jazz.jpg";
import image3 from "../assets/Mercedes-Benz-B-class.jpg";
import image4 from "../assets/chevrolet-utility.jpg";
import image5 from "../assets/now-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes  } from "@fortawesome/free-solid-svg-icons";

const images = [image1, image2, image3, image4, image5];

const CarCarousel = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="container carousel-container">
        <Carousel
          activeIndex={photoIndex}
          onSelect={(selectedIndex) => setPhotoIndex(selectedIndex)}
          indicators={false}
          interval={null}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image}
                alt={`Car ${index}`}
                className="d-block w-100 img-thumbnail"
                onClick={handleShowModal}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <hr />

        <div className="thumbnail-images">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="img-thumbnail"
              onClick={() => setPhotoIndex(index)}
              style={{ cursor: "pointer", width: "100px", height: "80px" }}
            />
          ))}
        </div>
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Header className="border-0">
            <Button
              variant="light"
              className="ms-auto"
              onClick={handleCloseModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image src={images[photoIndex]} alt={`Car ${photoIndex}`} fluid />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CarCarousel;

import { useState } from "react";
import "../styles/Gallery.css";
import Reveal from "./Reveal";

import interior from "../assets/restaurant-interior.jpg";
import steak from "../assets/steak.jpg";
import dessert from "../assets/dessert.jpg";
import chef from "../assets/chef.jpg";
import wine from "../assets/wine.jpg";
import dining from "../assets/dining-room.jpg";

const photos = [
  {
    image: interior,
    title: "Elegant Interior"
  },
  {
    image: steak,
    title: "Signature Steak"
  },
  {
    image: dessert,
    title: "House Desserts"
  },
  {
    image: chef,
    title: "Our Chef"
  },
  {
    image: wine,
    title: "Wine Selection"
  },
  {
    image: dining,
    title: "Private Dining"
  }
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    return (
        <>
          <Reveal>
            <section className="gallery" id="gallery">
      
              <p className="section-tag">Gallery</p>
      
              <h2>Experience Harvest Table</h2>
      
              <p className="gallery-subtitle">
                Every detail is carefully designed to create an unforgettable dining experience.
              </p>
      
              <div className="gallery-grid">
      
                {photos.map((photo) => (
                  <div className="gallery-card" key={photo.title}>
      
                    <button
                      className="gallery-image-button"
                      onClick={() => setSelectedImage(photo.image)}
                      aria-label={`View ${photo.title} larger`}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                      />
                    </button>
      
                    <div className="gallery-overlay">
                      <h3>{photo.title}</h3>
                    </div>
      
                  </div>
                ))}
      
              </div>
      
            </section>
          </Reveal>
      
          {selectedImage && (
            <div
              className="lightbox"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Expanded gallery image"
            >
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              ></button>
      
              <img
                src={selectedImage}
                alt="Expanded gallery view"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </>
      );
      }
      
      export default Gallery;
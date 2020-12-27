import React from "react"
import { Slide } from "react-slideshow-image"
import "../asset/slide.css"
import "react-slideshow-image/dist/styles.css"
import img1 from "../images/hamburg.jpg"
import img2 from "../images/mountains.jpg"

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

const Slider = () => {
  return (
    <div>
      <Slide easing="ease" {...proprietes}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img1})` }}>
            <div className="containerLink">
              <span
                style={{
                  color: "orange",
                  backgroundColor: "white",
                  textTransform: "uppercase",
                }}
              >
                Bat&Prefab Leader du préfabrique en C.I
              </span>
              <a href={"/"}>Contactez-nous</a>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img2})` }}>
            <div className="containerLink">
              <span>Une référence dans le BTP en Afrique de l'Ouest.</span>
              <a href={"/"}>Contactez-nous</a>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${img2})` }}>
            <div className="containerLink">
              <span>
                Voulez-vous touver une maison sans vous casser la tête ?
              </span>
              <a href={"/"}>Contactez-nous</a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slider

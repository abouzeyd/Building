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
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <Slide easing="ease">
        <div
          style={{
            backgroundImage: `url(${img2})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            height: "350px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: ["10px", "25px"],
                // textAlign: ["center"],
                color: "rgba(251, 252, 255, 0.966)",
                fontWight: ["none", "35px"],
                textTransform: "uppercase",
                width: ["200px", "500px"],
                textAlign: ["center", "left"],
              }}
            >
              Voulez-vous touver une maison sans vous casser la tête ?
            </span>
            <a
              href="/"
              style={{
                textDecoration: "none",
                backgroundColor: "blue",
                width: "150px",
                textAlign: "center",
                marginTop: "10px",
                borderRadius: "5px",
                boxShadow: "1px 1px 1px 1px black",
                color: "white",
                padding: "5px",
              }}
            >
              contactez-nous
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${img1})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            height: "350px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: ["10px", "25px"],
                textAlign: ["", "center"],
                color: "rgb(230, 159, 27)",
                fontWight: ["none", "35px"],
                textTransform: "uppercase",
                width: ["200px", "500px"],
                // textAlign: "left",
              }}
            >
              Bat&Prefab Leader du préfabrique en C.I
            </span>
            <a
              href="/"
              style={{
                textDecoration: "none",
                backgroundColor: "blue",
                width: "150px",
                textAlign: "center",
                marginTop: "10px",
                borderRadius: "5px",
                boxShadow: "1px 1px 1px 1px black",
                color: "white",
                padding: "5px",
              }}
            >
              contactez-nous
            </a>
          </div>
        </div>
      </Slide>
    </div>

    // <div>
    //   <Slide easing="ease" {...proprietes}>
    //     <div className="each-slide">
    //       <div style={{ backgroundImage: `url(${img1})` }}>
    //         <div className="containerLink">
    //           <span
    //             style={{
    //               color: "orange",
    //               backgroundColor: "white",
    //               textTransform: "uppercase",
    //             }}
    //           >
    //             Bat&Prefab Leader du préfabrique en C.I
    //           </span>
    //           <a href={"/"}>Contactez-nous</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="each-slide">
    //       <div style={{ backgroundImage: `url(${img2})` }}>
    //         <div className="containerLink">
    //           <span>Une référence dans le BTP en Afrique de l'Ouest.</span>
    //           <a href={"/"}>Contactez-nous</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="each-slide">
    //       <div style={{ backgroundImage: `url(${img2})` }}>
    //         <div className="containerLink">
    //           <span>
    //             Voulez-vous touver une maison sans vous casser la tête ?
    //           </span>
    //           <a href={"/"}>Contactez-nous</a>
    //         </div>
    //       </div>
    //     </div>
    //   </Slide>
    // </div>
  )
}

export default Slider

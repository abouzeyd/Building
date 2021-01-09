import React from "react"
import { Slide } from "react-slideshow-image"
import "../asset/slide.css"
import "react-slideshow-image/dist/styles.css"
import img1 from "../images/hamburg.jpg"
import img2 from "../images/mountains.jpg"

const proprietes = {
  duration: 9000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

const Slider = () => {
  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <Slide easing="ease" {...proprietes}>
        <div
          style={{
            backgroundImage: `url(${img2})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            height: "550px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                fontSize: ["10px", "25px"],
                textAlign: ["center", "left"],
                color: "orange",
                fontWight: ["none", "35px"],
                textTransform: "uppercase",
                width: ["10px", "500px"],
                marginLeft: ["50px", "1px"],
              }}
            >
              Voulez-vous touver une maison ?
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
            height: ["351","550px"],
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: ["center", "left"],
                backgroundColor: "black",
                fontSize: ["10px", "25px"],
                color: "white",
                fontWeight: ["10px", "35px"],
                textTransform: "uppercase",
                width: ["100px", "500px"],
                mx: "auto",
              }}
            >
              Bat&Prefab le Leader en C.I
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
  )
}

export default Slider

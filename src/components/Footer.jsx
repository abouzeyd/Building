/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import realisation from "../data/realisation.json"
import contact from "../data/contacts"

const Footer = () => {
  return (
    <div
      sx={{ backgroundColor: "blue", pt: 25, width: ["102%", "120%", "100%"] }}
    >
      <div
        sx={{
          alignItems: ["center", "", "", "left"],
          color: "white",
          p: 35,
          borderBottom: "1px solid white",
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: ["column", "row", "", "row"],
            alignItems: ["center", "flex-start"],
          }}
        >
          <div sx={{ textAlign: ["center", "left"] }}>
            <h5 sx={{ fontSize: [15, 18] }}>Contacts</h5>
            {contact.map((item, i) => {
              return (
                <li
                  key={i.toString()}
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <img src={item.img} width="18px" sx={{ mb: 0, mr: 12 }} />
                  <a
                    href={item.link}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: [12, 14],
                    }}
                  >
                    <span sx={{ mb: 0 }}>{item.text}</span>
                  </a>
                </li>
              )
            })}
          </div>
          <div sx={{ textAlign: ["center", "left"], pt: [10, 0] }}>
            <h5 sx={{ fontSize: [15, 18] }}>Réalisations</h5>
            {realisation.map((item, i) => {
              return (
                <li key={i.toString()} sx={{ listStyle: "none", mb: 1 }}>
                  <a
                    href={item.slug}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: [12, 14],
                    }}
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </div>
          <div sx={{ textAlign: ["center", "left"], pt: [10, 0] }}>
            <h5 sx={{ fontSize: [15, 18] }}>Localisation</h5>
            <div sx={{ fontSize: [12, 14], width: 200 }}>
              Nous sommes situé à Koumassi, boulevard du Gabon près de l'hôtel
              Ibis
            </div>
            <a
              href="https://maps.app.goo.gl/K22URPRemvuKR9X88"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: ["center", "left"],
                pt: 19,
              }}
            >
              <FontAwesomeIcon icon="map-marker-alt" size="20" />
              <span
                sx={{
                  color: "orange",
                  textDecoration: "none",
                  fontSize: 16,
                  ml: 1,
                }}
              >
                Google Map
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        sx={{
          p: 15,
          fontSize: 12,
          textAlign: "center",
          opacity: 0.8,
          lineHeight: 1.4,
          color: "white",
        }}
      >
        ©2020-2021 Bat-Prefab - Tous droits réservés
      </div>
    </div>
  )
}

export default Footer

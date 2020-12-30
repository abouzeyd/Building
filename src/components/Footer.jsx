/** @jsx jsx */
import { jsx } from "theme-ui"
import realisation from "../data/realisation.json"
import contact from "../data/contacts"

const Footer = () => {
  return (
    <div sx={{ backgroundColor: "blue", pt: 25 }}>
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
            flexDirection: ["column", "", "", "row"],
            alignItems: ["center", "flex-start"],
          }}
        >
          <div sx={{ textAlign: ["center", "left"] }}>
            <h5 sx={{ fontSize: 18 }}>Contacts</h5>
            {contact.map(item => {
              return (
                <li
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <img src={item.img} width="15px" sx={{ mb: 0, mr: 12 }} />
                  <a
                    href={item.link}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    <span sx={{ mb: 0 }}>{item.text}</span>
                  </a>
                </li>
              )
            })}
          </div>
          <div sx={{ textAlign: ["center", "left"], pt: [10, 0] }}>
            <h5 sx={{ fontSize: 18 }}>Réalisations</h5>
            {realisation.map(item => {
              return (
                <li sx={{ listStyle: "none", mb: 1 }}>
                  <a
                    href={item.slug}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </div>
          <div sx={{ textAlign: ["center", "left"], pt: [10, 0] }}>
            <h5 sx={{ fontSize: 18 }}>Localisation</h5>
            <div sx={{ fontSize: 12, width: 200 }}>
              {[
                {
                  description:
                    "Nous sommes situer à Marcory non loin du quartier du foyer des jeunes ",
                },
              ].map(localiser => {
                return <span>{localiser.description}</span>
              })}
            </div>
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

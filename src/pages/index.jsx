/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import realisation from "../data/realisation.json"
import blockTroisImage from "../data/blockTroisImage"
import Header from "../components/Header"

const IndexPage = () => {
  const text = "LES GRAND TRAVEAUX COMMENCE AVEC NOUS"
  const paragraph =
    "BAT-PREFAB vous offre des espaces de vie super pratiques, des logements préfabriqués, des modules urbains, des produits finis blindés et innovants en offrant des solutions rapides, pratiques, adaptées à toute condition climatique, où tous les processus sont réalisés clé en main avec ses systèmes de préfabriqués, de conteneurs, d’acier léger, d’acier de construction pour vos projets de grande taille ou de taille standard développés pour divers besoins."
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title="BAT-PREFAB N°1 du batiment en C.I."
        subtitle="avec Nous vous aurez une maison en moin de 3 mois"
      />
      <div
        sx={{
          maxWidth: ["100%", "90%", "90%", 1120],
          textAlign: ["left", "center"],
        }}
        className="main"
      >
        <h3
          sx={{
            textAlign: "center",
            color: "blue",
            pt: 57,
            width: ["10em", "20em"],
            mx: "auto",
            fontSize: 25,
          }}
        >
          Avec nous c'est la qualiter à coup sur
        </h3>
        <h2
          sx={{
            mx: "auto",
            width: ["9em", "12em"],
            pt: [0, 12],
            mb: 0,
            textAlign: "center",
            color: "orange",
          }}
        >
          {" "}
          Nos Réalisations
        </h2>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "repeat(2,1fr)"],
            rowGap: [40, 50],
            columnGap: 50,
            justifyItems: "center",
            pt: 57,
            gridAutoFlow: "row",
            mx: ["auto", 200],
            pb: 57,
          }}
        >
          {realisation.map(item => {
            return (
              <a
                href={item.slug}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pb: [15, 18],
                  borderRadius: 5,
                  width: [250, "18em"],
                  height: 270,
                  boxShadow:
                    "-2px -2px 5px rgba(0, 0, 0, 0.35), 2px 4px 4px rgba(0, 0, 0, 0.11);",
                  textDecoration: "none",
                  transform: "scale(1)",
                  transition: "transform .3s linear",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <img
                  src={item.image}
                  width="250px"
                  sx={{ ml: [0, 18], mb: 1, pt: [0, 1] }}
                />
                <span
                  sx={{
                    textAlign: "center",
                    color: "blue",
                    fontSize: 16,
                    pt: 1,
                  }}
                >
                  {item.title}
                </span>
                <span
                  sx={{
                    mx: "auto",
                    width: ["15em", "15em"],
                    textAlign: "center",
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  {item.description}
                </span>
                <span sx={{ textAlign: "center", color: "red", fontSize: 14 }}>
                  {item.voir}
                </span>
              </a>
            )
          })}
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: ["column", "row"],
            pt: [0, 25],
            maxWidth: 1000,
          }}
        >
          <div sx={{ textAlign: ["center", "left"], ml: [0, 95] }}>
            <h2 sx={{ width: [300, 300], color: "orange" }}>{text}</h2>
            <div sx={{ textAlign: ["left"] }}>
              <p sx={{ width: [300, 300], mx: "auto" }}>{paragraph}</p>
            </div>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              alignItems: "center",
              mr: [0, 57],
            }}
          >
            {blockTroisImage.map(item => {
              return (
                <div
                  href={item.slug}
                  sx={{
                    display: "flex",
                    flexDirection: ["column", "row"],
                  }}
                >
                  <img
                    src={item.image}
                    sx={{ mr: [1, 25], width: [200, 150], pb: [0, 65] }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div sx={{ pt: [0, 5], pb: [1, 6] }}>
          <div sx={{ bg: "gray" }}>
            <div
              sx={{
                display: "flex",
                flexDirection: ["column", "row"],
                alignItems: "center",
                mx: "auto",
                width: [200, 750],
              }}
            >
              {blockTroisImage.map(item => {
                return (
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: ["column"],
                    }}
                  >
                    <div sx={{ ml: [0, 25] }}>
                      <img
                        src={item.image}
                        sx={{ mr: [1, 30], width: [200, 200], pt: [10] }}
                      />
                    </div>

                    <div>
                      <h4
                        sx={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 18,
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>
                )
              })}
            </div>
            <div sx={{ textAlign: "center", bg: "gray" }}>
              <h3 sx={{ width: [300, 600], mx: "auto", color: "orange" }}>
                “Solution de bâtiment préfabriqué clé en main.”
              </h3>
              <p
                sx={{
                  width: [300, 500],
                  mx: "auto",
                  textAlign: "left",
                  color: "white",
                  pb: 5,
                }}
              >
                "Solutions prêtes, rapides, adaptées à toute condition
                climatique, pratiques où tous les processus sont réalisés clé en
                main avec ses systèmes de préfabriqués adapté à vos divers
                besoins. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

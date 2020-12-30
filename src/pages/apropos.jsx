/** @jsx jsx */
import { jsx } from "theme-ui"
import Slider from "../components/Slide"
import Layout from "../components/Layout"

const apropos = () => {
  return (
    <Layout>
      <Slider />
      <div sx={{}}>
        <h3 sx={{ textAlign: "center", color: "orange" }}>Qui sommes Nous.</h3>
        <p
          sx={{ textAlign: ["center", "left"], width: [320, 700], mx: "auto" }}
        >
          L’entreprise Batprefab a été fondée en 2018, dynamique, née d'une
          véritable passion pour la conception et la réalisation de bâtiments
          préfabriqués. Notre savoir-faire et nos compétences reposent sur un
          bureau d'études, nos compétences terrain et des personnels
          expérimentés et motivés. Quel que soit votre projet, l’entreprise
          Batprefab vous accompagne, identifie l'ensemble de vos besoins et vous
          propose des bâtiments personnalisés répondant à votre attente.
          <h4 sx={{ textAlign: "center", pt: 2 }}>Nos valeurs :</h4>
          "Savoir-faire et Qualité, Engagement, Disponibilité, Responsabilité,
          Confiance et Proximité"
          <h4 sx={{ textAlign: "center", pt: 1 }}>Nos domaines d'activités</h4>
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            {" "}
            Réalisation et conception de bâtiments préfabriqués à usage
            d’habitations, de bureaux, de bases vie, de toilettes, de kiosques…
          </span>{" "}
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            Rénovation, Réhabilitation.
          </span>{" "}
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            Importation de modèles européens.
          </span>
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            Réalisation d’installations électriques.{" "}
          </span>
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            Insonorisation des salles Assemblage et démontage.
          </span>
          <span sx={{ fontWeight: "bold", fontSize: 14 }}>
            {" "}
            Installations des sanitaires et de la climatisation.
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default apropos

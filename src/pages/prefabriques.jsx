/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const prefabrique = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: 190,
            textAlign: "center",
            pb: 266,
            color: "red",
            mx: "auto",
            width: [300, 500],
            fontSize: [14, 16],
          }}
        >
          <span sx={{}}>
            {" "}
            Bâtiments Administratifs,Bâtiments Sanitaires,Bâtiments
            d’enseignement,Bâtiments Dortoirs,Bâtiments pour installation
            d’urgence,Bâtiments Réfectoires,Bâtiments W-C et Douches,Centres de
            Loisir Cabines Guérites Maisons Kiosques ,Conteneurs
            Maritimes,Insonorisation de Bâtiments,Partitionnements de
            Bâtiments,Aménagements de Bâtiments
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default prefabrique

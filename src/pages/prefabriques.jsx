/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const prefabrique = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: [55, 190],
            textAlign: "center",
            pb: [55, 266],
            color: "black",
            mx: "auto",
            width: [300, 500],
            fontSize: [14, 16],
          }}
        >
          <span sx={{}}>
            {" "}
            Bâtiments Administratifs,
            <br />
            Bâtiments Sanitaires, <br />
            Bâtiments d’enseignement, <br />
            Bâtiments Dortoirs, <br />
            Bâtiments pour installation d’urgence, <br />
            Bâtiments Réfectoires, <br />
            Bâtiments W-C et Douches, <br />
            Centres de Loisir Cabines Guérites Maisons Kiosques , <br />
            Conteneurs Maritimes, <br />
            Insonorisation de Bâtiments, <br />
            Partitionnements de Bâtiments, <br />
            Aménagements de Bâtiments
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default prefabrique

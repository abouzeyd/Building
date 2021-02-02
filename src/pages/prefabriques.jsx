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
            textAlign: ["center", "left"],
            pb: [55, 266],
            color: "black",
            mx: "auto",
            width: [300, 500],
            fontSize: [14, 16],
            fontWeight: "bold",
          }}
        >
          <span sx={{}}>
            {" "}
            ● Bâtiments Administratifs
            <br />
            ● Bâtiments Sanitaires <br />
            ● Bâtiments d’enseignement <br />
            ● Bâtiments Dortoirs <br />
            ● Bâtiments pour installation d’urgence <br />
            ● Bâtiments Réfectoires <br />
            ● Maisons <br />
            ● Centres de Loisir <br />
            ● Cabines W-C et Douches
            <br /> ● Cabines Guérites
            <br /> ● Cabines Kiosques
            <br /> ● Conteneurs kits
            <br /> ● Conteneurs Maritimes <br />
            ● Isolation de Bâtiments <br />
            ● Partitionnements de Bâtiments <br />● Aménagements de Bâtiments
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default prefabrique

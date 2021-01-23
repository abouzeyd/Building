/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const climatisation = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: 190,
            textAlign: ["center", "left"],
            pb: 266,
            color: "black",
            fontSize: [14, 16],
            mx: "auto",
            width: [300, 500],
            fontWeight: "bold",
          }}
        >
          <span sx={{}}>
            ● l'installation de climatiseur <br />● réparation de climatiseur
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default climatisation

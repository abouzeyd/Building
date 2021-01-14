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
            textAlign: "center",
            pb: 266,
            color: "red",
            fontSize: [14, 16],
          }}
        >
          <span sx={{}}>
            l'installation de climatiseur ,réparation de climatiseur
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default climatisation

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const electricite = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: 190,
            textAlign: "center",
            pb: 266,
            color: "black",
            fontSize: [14, 16],
            mx: "auto",
            width: [300, 500],
            fontWeight: "bold",
          }}
        >
          En cours de Traitement...
        </div>
      </div>
    </Layout>
  )
}

export default electricite

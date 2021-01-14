/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const plomberie = () => {
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
            mx: "auto",
            width: [300, 500],
          }}
        >
          En cour de Traitement...
        </div>
      </div>
    </Layout>
  )
}

export default plomberie

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const peinture = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: 190,
            pb: 266,
            color: "black",
            fontSize: [14, 16],
            mx: "auto",
            width: [300, 500],
            fontWeight: "bold",
          }}
        >
          <span sx={{ textAlign: "left" }}>
            ● pose des revêtements muraux <br />
            ● réalisation des finitions et embellissements des surfaces <br />
            ● préparation du support à enduire
            <br />● appliquer des gammes de peinture, vernis etc....
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default peinture

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

            pb: 266,
            color: "black",
            fontSize: [14, 16],
            mx: "auto",
            width: [300, 500],
            fontWeight: "bold",
          }}
        >
          <span sx={{ textAlign: "left" }}>
            ● installation des équipements sanitaires
            <br />● réparation des équipements sanitaires <br />● installation
            et entretien des canalisations d'eaux et d'eaux d'évacuation
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default plomberie

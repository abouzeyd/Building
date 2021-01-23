/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const carrelage = () => {
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
          <span sx={{ textAlign: "left" }}>
            ● préparation des surface à carreler
            <br />
            ● decoupe des matériaux de revêtement et de finition <br />● pose
            des matériaux de revêtement et réalisation des jointures
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default carrelage

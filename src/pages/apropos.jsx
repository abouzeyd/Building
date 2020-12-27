/** @jsx jsx */
import { jsx } from "theme-ui"
import Slider from "../components/Slide"
import Layout from "../components/Layout"

const apropos = () => {
  return (
    <Layout>
      <Slider />
      <div sx={{}}>
        <p sx={{ textAlign: "center" }}>
          nous sommes une équipe de jeune qui avons constater que le domaine du
          batiment en côte d'Ivoire, est une réaliter qui emmène certain
          bailleur à dépenser plus qu'il puisse
        </p>
      </div>
    </Layout>
  )
}

export default apropos

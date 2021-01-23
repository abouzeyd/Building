/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

const services = ({ pageContext, data }) => {
  const { title } = pageContext
  const images = data.realisationImages.nodes
  return (
    <Layout>
      <p
        sx={{ textAlign: "center", pt: 55, color: "black", fontWeight: "bold" }}
      >
        {title}
      </p>

      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "repeat(4,200px)"],
          justifyContent: "center",
          gridGap: "20px",
          width: [200],
          mx: "auto",
          pt: [15, 35],
          pb: [15, 225],
        }}
      >
        {images.map((image, i) => (
          <Img key={i} fluid={image.childImageSharp.fluid} alt="imageData" />
        ))}
      </div>
    </Layout>
  )
}

export default services

export const query = graphql`
  query RealisationQuery($slug: String!) {
    realisationImages: allFile(
      filter: {
        sourceInstanceName: { eq: "realisationsImages" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        childImageSharp {
          id
          fluid(maxWidth: 200, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
  }
`

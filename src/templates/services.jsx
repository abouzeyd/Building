/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const services = ({ pageContext, data }) => {
  const { images, title } = pageContext
  console.log(data)
  return (
    <Layout>
      <p sx={{ textAlign: "center", pt: 55 }}>{title}</p>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "repeat(4,200px)"],
          justifyContent: "center",
          gridGap: "20px",
          width: [200],
          mx: "auto",
        }}
      >
        {images.map((image, i) => (
          <img key={i} src={`/${image}`} />
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
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"

const services = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <img src={pageContext.image} width="200px" />
      <h1>{pageContext.title}</h1>
    </Layout>
  )
}

export default services

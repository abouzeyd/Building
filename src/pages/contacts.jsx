/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"
import cataloguer from "../data/catalogue"

const contacts = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: [65, 45],

            pb: [15, 166],
            color: "black",
            fontSize: [14, 16],
            mx: "auto",
            width: [200, 900],
            textAlign: "center",
          }}
        >
          <h3>Contactez-nous</h3>
          <div sx={{ width: [200], mx: "auto", color: "blue" }}>
            <h5>Par Téléphone ou what-app</h5>
            <a
              href="https://wa.me/+22549607307?text=urlencodedtext"
              sx={{ textDecoration: "none", mb: 0, color: "black" }}
            >
              <h5>+225 56121339 </h5>
            </a>

            <a
              href="tel:89855251"
              sx={{ textDecoration: "none", mb: 0, color: "black" }}
            >
              <h5> +225 89855251</h5>
            </a>
            <h5>Par e-mail ou par facebook</h5>
            <a
              href="mailto:Batprefab@gmail.com"
              sx={{ textDecoration: "none" }}
            >
              Batprefab@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contacts

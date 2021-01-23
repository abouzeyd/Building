/** @jsx jsx */
import { jsx } from "theme-ui"

import products from "../data/product.json"
import Layout from "../components/Layout"

const produits = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            mx: "auto",
            width: 135,
            pt: [12, 155, 155, 115],
            pb: [12, 204, 255, 204],
          }}
        >
          {products.map(item => {
            return (
              <a
                href={item.slug}
                sx={{
                  textDecoration: "none",
                  fontSize: [14, 19],
                  minHeight: 45,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {item.title}
              </a>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default produits

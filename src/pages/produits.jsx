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
            pt: 115,
            pb: 204,
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

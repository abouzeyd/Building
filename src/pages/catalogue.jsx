/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"
import cataloguer from "../data/catalogue"

const catalogue = () => {
  return (
    <Layout>
      <div>
        <div
          sx={{
            pt: [65, 190],

            pb: [15, 266],
            color: "red",
            fontSize: [14, 16],
            mx: "auto",
            width: [200, 900],
          }}
        >
          {cataloguer.map(item => {
            return (
              <div>
                <img src={item.image} sx={{ width: [300, 900] }} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default catalogue

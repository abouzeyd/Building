/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout"
import cataloguer from "../data/catalogue"
import ImageZoom from "react-medium-image-zoom"

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
                {/* <img src={item.image} sx={{ width: [300, 900] }} /> */}

                <ImageZoom
                  image={{
                    src: `${item.image}`,
                    alt: "Golden Gate Bridge",
                    className: "img",
                    style: { width: "50em" },
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default catalogue

/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-background-image"

const Header = ({ title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      logo: file(relativePath: { eq: "hamburg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const test = data.logo.childImageSharp.fluid
  return (
    <Img
      tag="header"
      fluid={test}
      sx={{
        height: "100vh",
        maxHeight: 577,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        p: [36, 12],
      }}
    >
      <div
        sx={{
          textAlign: "center",
          pt: "12rem",
          color: "white",
          width: "38rem",
          mx: "auto",
          maxWidth: ["100%", "90%", "90%", 1120],
        }}
      >
        <h1 sx={{ mb: 13 }}>{title}</h1>
        <h3 sx={{ mb: 0, mr: [0, 57] }}>{subtitle}</h3>
      </div>
      <div
        sx={{
          textAlign: "center",
          pt: "37px",
          width: [151, "38rem"],
          mx: "auto",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: ["column", "row"],
        }}
      >
        <a
          href="https://wa.me/+22549607307?text=urlencodedtext"
          sx={{
            color: "white",
            textDecoration: "none",
            mr: [2, 27],
            py: 2,
            px: "7px",
            borderRadius: "5px",
            boxShadow: "1px 1px 5px black",
            backgroundColor: "orange",
            transition: "color:0.5s ease,background-color:0.5s linear",
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
            },
          }}
        >
          Contactez-nous
        </a>
        <a
          href="/"
          sx={{
            color: "white",
            textDecoration: "none",
            mt: [12, 0],
            mr: [2, 27],
            py: 2,
            px: 20,
            borderRadius: "5px",
            boxShadow: "1px 1px 5px black",
            backgroundColor: "blue",
            transition: "color:0.5s ease, background-color:0.5s linear",
            "&:hover": {
              backgroundColor: "orange",
              color: "white",
            },
          }}
        >
          Plus d'infos
        </a>
      </div>
    </Img>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

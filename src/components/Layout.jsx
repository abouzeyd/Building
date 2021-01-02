/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Nav from "./Nav"
import Footer from "./Footer"
import "./layout.css"
import "../asset/file.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

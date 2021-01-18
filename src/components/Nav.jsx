/** @jsx jsx */
import { jsx } from "theme-ui"
import { Drawer, List, ListItem } from "@material-ui/core"
import { useState } from "react"
import { Link } from "gatsby"
import hamburger from "../images/hamburger.svg"
import bat from "../images/BATPREFAB.jpg"
import nav from "../data/navigation.json"
import Headroom from "react-headroom"

const Nav = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = open => event => {
    setDrawerOpen(open)
  }
  const list = () => {
    return (
      <div>
        <List>
          <img
            src={bat}
            sx={{
              width: ["250px", "200px"],
              display: "flex",
              marginBottom: 0,
            }}
            onClick={toggleDrawer(false)}
          />
          <ListItem
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
            }}
          >
            {nav.map((item, i) => {
              return (
                <Link
                  key={i.toString()}
                  to={item.link}
                  sx={{
                    textDecoration: "none",
                    m: 12,
                  }}
                >
                  {item.title}
                </Link>
              )
            })}
          </ListItem>
        </List>
      </div>
    )
  }

  const lister = () => {
    return (
      <div
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flex: 1,
          ml: [0, 0, 100, 100],
        }}
      >
        <List>
          <ListItem>
            {nav.map(item => {
              return (
                <Link
                  to={item.link}
                  sx={{
                    textDecoration: "none",
                    ml: [62, 55, 26, 62],
                    display: ["none", "block", "block", "block"],

                    fontSize: 17,
                    transition: "0.5s ease",
                    color: "blue",
                    "&:hover": {
                      color: "orange",
                    },
                  }}
                >
                  {item.title}
                </Link>
              )
            })}
          </ListItem>
        </List>
      </div>
    )
  }

  return (
    <Headroom>
      <div
        sx={{ bg: "white", display: "flex", justifyContent: "space-around" }}
      >
        {/*  */}

        <img
          src={hamburger}
          alt="menu"
          width="25px"
          onClick={toggleDrawer(true)}
          sx={{ display: ["", "", "none"], pt: 2, ml: 2 }}
        />
        <Link to="/">
          <img
            src={bat}
            sx={{
              width: ["100px", "25%", "100px"],
              marginBottom: 0,
              ml: ["10rem", "1rem", 75],
              pt: [10, 10],
              //  display: ["none", "block", "", "block"],
            }}
          />
        </Link>
        {lister()}
        <Drawer anchor="left" open={isDrawerOpen} onClose={false}>
          {list()}
        </Drawer>
      </div>
    </Headroom>
  )
}

export default Nav

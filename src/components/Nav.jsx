/** @jsx jsx */
import { jsx } from "theme-ui"
import { Drawer, List, ListItem } from "@material-ui/core"
import { useState } from "react"
import { Link } from "gatsby"
import hamburger from "../images/hamburger.svg"
import bat from "../images/Bat.jpg"
import nav from "../data/navigation.json"

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
            <a
              href="https://wa.me/+22549607307?text=urlencodedtext"
              sx={{
                fontSize: 17,
                textDecoration: "none",
                transition: "0.5s ease",
                color: "blue",
                "&:hover": {
                  color: "orange",
                },
              }}
            >
              Appelez-Nous
            </a>
          </ListItem>
        </List>
      </div>
    )
  }

  const lister = () => {
    return (
      <div sx={{ display: "flex", alignItems: "flex-end" }}>
        <List>
          <ListItem>
            {nav.map(item => {
              return (
                <Link
                  to={item.link}
                  sx={{
                    textDecoration: "none",
                    ml: 62,
                    display: ["none", "", "", "block"],
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
            <a
              href="https://wa.me/+22549607307?text=urlencodedtext"
              sx={{
                display: ["none", "", "", "block"],
                ml: 62,
                fontSize: 17,
                transition: "0.5s ease",
                color: "blue",
                textDecoration: "none",
                "&:hover": {
                  color: "orange",
                },
              }}
            >
              Appelez-Nous
            </a>
          </ListItem>
        </List>
      </div>
    )
  }

  return (
    <div sx={{ bg: "white", display: "flex", justifyContent: "space-around" }}>
      {/*  */}

      <img
        src={hamburger}
        alt="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: ["", "", "none"], pt: 2, ml: 2 }}
      />
      <Link to="/">
        <img
          src={bat}
          sx={{
            width: ["100px", "100px"],
            marginBottom: 0,
            ml: ["10rem", 75],
            pt: [10, 10],
            // display: ["none", "", "", "block"],
          }}
        />
      </Link>
      {lister()}
      <Drawer anchor="left" open={isDrawerOpen} onClose={false} sx={{}}>
        {list()}
      </Drawer>
    </div>
  )
}

export default Nav

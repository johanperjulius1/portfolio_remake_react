import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          My Portfolio
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="header item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            About Me
          </NavLink>
          <NavLink
            id="projects-tab"
            className="header item"
            activeStyle={{ fontWeight: "" }}
            to="/projects"
          >
            Projects
            </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;
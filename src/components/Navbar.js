import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo2.png"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" 
             style={{
                    width: "50%",
                    boxShadow: "2px 2px cadetblue",
                    border: "2px solid gainsboro",
                    borderRadius: "5px"
                    }}
            />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Blogs
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              Liên Hệ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

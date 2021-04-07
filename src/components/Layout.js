import React from "react"
import MessengerCustomerChat from "react-messenger-customer-chat"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <MessengerCustomerChat pageId="113233377527836" appId="912773652812991" />
    </>
  )
}

export default Layout

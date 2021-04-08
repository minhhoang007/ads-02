import React from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import Lg1 from "../assets/images/partner/lg1.jpg"
import Lg2 from "../assets/images/partner/lg2.jpg"
import Lg3 from "../assets/images/partner/lg3.jpg"
import Lg4 from "../assets/images/partner/lg4.jpg"
import Lg5 from "../assets/images/partner/lg5.jpg"
import Lg6 from "../assets/images/partner/lg6.jpg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Partner = () => {
  return
  ;<Carousel responsive={responsive}>
    <Carousel responsive={responsive}>
      <img src={Lg1} style={{ width: "50px", height: "50px" }} />
      <img src={Lg2} style={{ width: "50px", height: "50px" }} />
      <img src={Lg3} style={{ width: "50px", height: "50px" }} />
      <img src={Lg4} style={{ width: "50px", height: "50px" }} />
      <img src={Lg5} style={{ width: "50px", height: "50px" }} />
    </Carousel>
  </Carousel>
}

export default Partner

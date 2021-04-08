import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

import "react-multi-carousel/lib/styles.css"
import Carousel2 from "../components/Carousel"




export default function Home() {
  return (
    <Layout>
      <SEO title="Home " />
      <main className="page">
        <Carousel2 />
        

        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Nhà Đẹp Lào Cai</h1>
              <h4>Nơi ý tưởng thành hiện thực</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

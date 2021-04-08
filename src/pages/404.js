import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Trang bạn tìm kiếm không tồn tại hoặc đã bị gỡ" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Trang bạn tìm kiếm không tồn tại hoặc đã bị gỡ!</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error

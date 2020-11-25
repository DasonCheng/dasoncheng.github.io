import { graphql } from "gatsby"
import React from "react"

import { Layout } from "../layout/layout"

export default function Archives({ data }) {
  return (
    <Layout>
      <p>about</p>
      <p>{data.site.siteMetadata.title}</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

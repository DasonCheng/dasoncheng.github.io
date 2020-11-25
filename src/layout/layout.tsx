import React, { ReactNode } from "react"
import styles from "./layout.module.scss"
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { graphql, useStaticQuery } from "gatsby"

export function Layout({ children }: { children: ReactNode }) {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <div className={styles.layout}>
      <Header />
      <main>
        {children}
        {/* <p>{data.site.siteMetadata.title}</p> */}
      </main>
      <Footer />
    </div>
  )
}

import React from "react"
import styles from "./footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div></div>
      <div>
        <p>
          © 2015-{new Date().getFullYear()} YunMeng | CC
          BY-NC 4.0
        </p>
      </div>
    </footer>
  )
}

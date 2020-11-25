import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <ul className="nav">
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/archives">归档</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </header>
  )
}

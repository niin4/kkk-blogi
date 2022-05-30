import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

import * as styles from './navigation.module.css'

const Navigation = () => (
  <StaticQuery
  query={graphql`
  query NavigationQuery {
    allContentfulContentPage {
      nodes {
        title
        slug
      }
    }
  }
  `}
  render={data => {
    console.log(data)
    return(
    <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>iinar.net</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      {data.allContentfulContentPage.nodes.map(page => ( <li key={page.slug} className={styles.navigationItem}>
        <Link to={`/${page.slug}/`} activeClassName="active">
          {page.title}
        </Link>
      </li>))}
    </ul>
  </nav>
  )}}
/>
)


export default Navigation

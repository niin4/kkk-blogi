import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './blog-post.module.css'

class ContentPageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulContentPage')
    return (
      <Layout location={this.props.location}>
        <Seo
          title={page.title}
          description={page.description}
        />
        <div className={styles.container}>
          <div className={styles.contentContainer}>
              <div className={styles.body}>
              {page.heroImage && (
                  <div className={styles.imageContainer}>
                <GatsbyImage className={styles.image} alt={page.title} image={page.heroImage.gatsbyImageData} />
                </div>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: page.body?.childMarkdownRemark?.html,
              }}
            />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContentPageTemplate

export const pageQuery = graphql`
  query ContentPageBySlug(
    $slug: String!
  ) {
    contentfulContentPage(slug: { eq: $slug }) {
      slug
      title
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      heroImage {
        gatsbyImageData(
            placeholder: BLURRED,
            width: 600
        )
      }
      description 
    }
  }
`

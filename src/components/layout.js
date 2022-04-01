import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children, contentPages } = this.props

    return (
      <>
        <Seo />
        <Navigation contentPages={contentPages} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template

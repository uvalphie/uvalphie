import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <section className="section section--gradient">
      <h1>HELLO</h1>

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <AboutPageTemplate
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

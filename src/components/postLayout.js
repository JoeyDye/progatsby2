import React from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

// Static query
// Used anywhere, but does not accept parameters
// And can't use context

// Page query
// Must be used on pages

export default function postLayout({ data: { markdownRemark }, location }) {
  return (
    <Layout location={location}>
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

// GraphQL accepts args and data types. Exclamation means required.
export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        path
      }
    }
  }
`

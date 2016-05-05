import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            An H1 Tag
          </h1>
          <p>Welcome to our site in a paragraph tag</p>
          <h2>An H2 Tag</h2>
          <h3>An H3 Tag</h3>
          <ul>
            <li>
              <Link to={prefixLink('/examples/reactcomponent/')}>React Component</Link>
            </li>
            <li>
              <Link to={prefixLink('/examples/html/')}>HTML</Link>
            </li>
            <li>
              <Link to={prefixLink('/examples/postcss/')}>PostCSS</Link>
            </li>
            <li>
              <Link to={prefixLink('/examples/sass/')}>Sass</Link>
            </li>
            <li>
              <Link to={prefixLink('/examples/less/')}>Less</Link>
            </li>
          </ul>
          <h3>Documentation</h3>
          <ul>
            <li>
              <Link to={prefixLink('/docs/')}>Documentation</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

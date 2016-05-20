import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import 'css/style.css'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
})

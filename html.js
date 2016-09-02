import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'


module.exports = React.createClass({
    propTypes () {
        return {
            title: React.PropTypes.string,
        }
    },
    render () {
        const title = DocumentTitle.rewind()

        let css;
        css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./css/custom.css') }} />;
      

        return (
    <html lang="en">
    <head>
        <title>{title}</title>
        <meta name="description" content=""/>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="icon" type="image/png" href="img/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="img/favicons/favicon-96x96.png" sizes="96x96"/>
        <link rel="apple-touch-icon" sizes="57x57" href="img/favicons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="img/favicons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="img/favicons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicons/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon-180x180.png"/>
        <link rel="stylesheet" href="http://rawgit.com/cnq/paperhook-website/dev/restyle/css/style.css" />
        {css}
        <link href="https://fonts.googleapis.com/css?family=Megrim|Roboto+Mono:100,400,700" rel="stylesheet"/>
      </head>
    <body cssClass="">
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
          <script src="http://rawgit.com/cnq/paperhook-website/dev/restyle/js/all.js"></script>
          <script src="http://rawgit.com/cnq/paperhook-website/dev/restyle/js/custom.js"></script>
        </body>
      </html>
    )
},
})

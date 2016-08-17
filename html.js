import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { alljs } from 'all'



module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
    <html lang="en">
    <head>
        <title>{title}</title>
        <meta name="description" content=""/>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
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
    <style
      dangerouslySetInnerHTML={{
          __html: require('!raw!./css/style.css')
      }}/>
    <style
      dangerouslySetInnerHTML={{
        __html: require('!raw!./css/custom.css')
        }}/>
      {cssLink}
      </head>
      <body class="">
        {
          //<!--[if lt IE 8]>
          //    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          //<![endif]-->
          //<!-- Preloader: uncomment this if you want to show a smooth preloader while the page is loading. Don't forget to add the 'js-preload-me' class on the <body> tag. -->
          //<!-- <div class="preloader js-preloader"><div class="preloader-animation"></div></div>
          //-->
          //<!-- End of Preloader -->
          }
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
      </body>
      </html>
    )
  },
})

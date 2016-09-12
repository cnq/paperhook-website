import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
      return (
  <div className="page js-page ">
    {/*header*/}

    <div className="header header-over large">
 
  <div className="container-fluid">
          <div className="row">
 			<div className="col-md-4 col-sm-4 col-xs-4">
 			</div>
 			<div className="col-md-4 col-sm-4 col-xs-4">
                 {
                     //<div className="helper center">
                     //	<a href="/" className="logo-image logo-animated">
                     //		<img src="/img/logos/logo.png" alt="logo"/>
                     //	</a>
                     //</div>
                 }
 			</div>
 			<div className="col-md-4 col-sm-4 col-xs-4">
        {
            //<div class="search-minimal js-search-minimal">
            //	<form action="#">
            //		<div class="search-minimal-input js-search-minimal-input">
            //			<input type="text"> </div>
            //		<i class="fa fa-search search-minimal-icon js-search-minimal-icon"></i>
            //	</form>
            //</div>
        }
          
 			</div>
 		</div>
  </div>
 
    </div>

    <div className="header-back header-back-default header-back-full-page js-full-page">
      <div className="header-back-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="page-info helper center">
                <h1 className="page-title">Paperhook</h1>
                <h2 className="page-description">Connecting Your Content</h2>
              </div>
              <div className="header-back-buttons helper center">
                  {
                      //<span className="button large blue js-scroll-to" data-target="#join">Get Started</span>
                  }
                    <a className="button large" href="mailto:info@cnq.io" target="_top">Get Started</a>
			   </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    {this.props.children}
    
    
    {/*footer*/}
    <footer className="js-footer-is-fixed">

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="footer-logo-wrapper">
                
                <a href="index.html" className="logo-image logo-small">
                  <img src="/img/logos/logo.png" alt="logo"/>
								</a>
                
                
                <p className="slogan">
                  Connect.
                  <br/>
                    Your.
                    <br/>Content. </p>
                
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-xs-12">
							<div className="footer-wrapper">
								<span className="scroll-top js-scroll-top">
									<i className="fa fa-angle-up"></i>
								</span>
									{
									    //<ul className="footer-menu helper right">
									    //	<li>
									    //		<a href="/contact-us/"> CONTACT US </a>
									    //	</li>
									    //    <li>
									    //		<a href="/faq/"> FAQ </a>
									    //	</li>
									    //</ul>
									}
								<p className="copyright helper right">
									Ceenq Cloud Solutions, Inc., all rights reserved. 2016 &copy; </p>
							</div>
						</div>
          </div>
        </div>
      </div>
      
    </footer>
    
  </div>
    )
  },
})

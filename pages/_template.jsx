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
    <div>
        <header id="top">

	        <div className="container-fluid">
    
                <div className="row">
        
                    <div className="col-lg-4 col-md-12 site-title">
                        <h1>
                            <Link to={prefixLink('/')} >
                              Paperhook
                            </Link>
                        </h1>
                    </div>
            
                    <div className="col-lg-8 col-md-12 main-menu">
                
                        <nav className="navbar navbar-light">
                          <ul className="nav navbar-nav single-page-nav">
                            <li className="nav-item">
                                <Link to={prefixLink('/faq/')} className="nav-link">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={prefixLink('/about-us/')} className="nav-link">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={prefixLink('/contact-us/')} className="nav-link">Contact</Link>
                            </li>
                          </ul>
                        </nav>
              
                    </div>
            
                </div>
        
                <div className="row">
                    <div className="col-md-12">
            	        <hr className="sigma-hr"/>
                    </div>
                </div>

            </div>
    
        </header>
        <div>
          {this.props.children}
        </div>
        
        <footer>

	        <div className="container-fluid">
    
    	        <div className="row">
                    <div className="col-md-12">
            	        <hr className="sigma-hr"/>
                    </div>
                </div>

                <div className="row">
        	        <div className="sigma-copyright col-lg-8">
            	        <p>Copyright &copy; 2016 Ceenq Cloud Solutions, Inc.</p>
                    </div>
            
                    <div className="sigma-copyright col-lg-4 single-page-nav text-right">
            	        <p><a href="#top">Go to top</a></p>
                    </div>
                </div>
        
            </div>   

        </footer>

      </div>
    )
  },
})

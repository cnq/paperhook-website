import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
      <div>
<section id="home">

    <div className="container-fluid">

        <div className="row sigma-home single-page-nav">

            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center">
                <h1>The world wide web is your oyster</h1>
                <Link to={prefixLink('/contact-us/')} className="btn btn-danger sigma-start">Get Started</Link>
                <Link to={prefixLink('/features/')} className="btn btn-success sigma-start">Features</Link>
            </div>

        </div>
         <div className="row sigma-section-header">
            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center">
                <h1>Pricing</h1>
            </div>
        </div>
        <div className="row">
            <div className="sigma-content col-lg-4 col-md-6 sigma-bg-lightgray text-center">
                <span className="sigma-icon fa fa-power-off"></span>
                <h2>Shared</h2>
                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
            </div>
            <div className="sigma-content col-lg-4 col-md-6 sigma-bg-gray text-center">
                <span className="sigma-icon fa fa-bolt"></span>
                <h2>Pro</h2>
                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
            </div>
            <div className="sigma-content col-lg-4 col-md-6 sigma-bg-darkgray text-center">
                <span className="sigma-icon fa fa-thumbs-up"></span>
                <h2>Enterprise</h2>
                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
            </div>
        </div>

    </div>

</section>

<section id="contact">

    <div className="container-fluid">

        <div className="row sigma-section-header">
            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center">
                <h1>Contact</h1>
                <p>Contact a member of sales</p>
            </div>
        </div>

        <div className="row">
            <div className="sigmano col-lg-8 col-md-12">

                <form action="#contact" method="post" id="contact-form">
                    <div className="col-md-6">
                        <fieldset className="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Write a full name"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>

                        </fieldset>
                    </div>
                    <div className="col-md-6">

                        <fieldset className="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label for="message">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Write a message"></textarea>
                        </fieldset>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> I am not a robot.
                            </label>
                        </div>

                        <button type="submit" className="btn btn-success btn-lg">Submit</button>
                    </div>
                </form>

            </div>

            <div className="sigma-content col-lg-4 col-md-12">
                <h3>Our Address</h3>
                <p>
                    Suspendisse dolor purus, malesuada ut luctus quis, consectetur vel ante.
                    Integer a pulvinar orci, eget sagittis enim.
                </p>
                <p><span className="contact-icon fa fa-envelope-o"></span> Email: info@company.com</p>
                <p><span className="contact-icon fa fa-phone"></span> Phone: 070-070-0880</p>
            </div>
        </div>

    </div>

</section>
 </div>
      </DocumentTitle>
    )
  }
}

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../assets/scss/page/payment.scss'

class PaymentPage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title

        return (
            <div className="wrapper style2">
                <Helmet title={siteTitle} />
                <div className="title">Our Services</div>
                <div id="main" className="container">
                    <a href="#" className="image featured">
                        <img src="images/pic01.jpg" alt="" />
                    </a>

                    <section id="features">
                        <header className="style1">
                            <h2>We customize our services to meet your individual needs</h2>
                            <p>Feugiat dolor nullam orci pretium phasellus justo</p>
                        </header>
                        <div className="feature-list">
                            <div className="row">
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-comment">
                                            Accounts Payable / Receivable
                    </h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-refresh">Reconcile and Balance</h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                            </div>
                            <div className="row">
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-picture-o">Payroll Reporting</h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-cog">Billing Services</h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                            </div>
                            <div className="row">
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-wrench">
                                            Aliquam consequat et feugiat
                    </h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <h3 className="icon fa-check">
                                            Dolore laoreet aliquam mattis
                    </h3>
                                        <p>
                                            Eget mattis at, laoreet vel et velit aliquam diam ante,
                                            aliquet sit amet vulputate. Eget mattis at, laoreet vel
                                            velit lorem.
                    </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <ul className="actions actions-centered">
                            <li>
                                <a href="#" className="button style1 big">
                                    Get Started
                </a>
                            </li>
                            <li>
                                <a href="#" className="button style2 big">
                                    More Info
                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

PaymentPage.propTypes = {
    route: React.PropTypes.object,
}

export default PaymentPage

export const pageQuery = graphql`
  query PaymentQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../assets/scss/page/homepage.scss'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div className="page-container">
        <Helmet title={siteTitle} />

        <div id="intro-wrapper" className="wrapper style1">
          <div className="title">The Introduction</div>
          <section id="intro" className="container">
            <p className="style1">About our Company</p>
            <p className="style2">
              Some other Jib-Jab
              <br className="mobile-hide" /> Certified{' '}
              <a
                href="https://quickbooks.intuit.com/accountants/training-certification/"
                className="nobr"
              >
                QuickBooks Pro Advisor
              </a>
            </p>
            <p className="style3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <strong>Lorem Ipsum</strong> has been the{' '}
              <strong>industry's standard</strong> dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <ul className="actions">
              <li>
                <a href="/our-team" className="button style3 big">
                  About the Team
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="wrapper style3">
          <div className="title">Success Stories</div>
          <div id="highlights" className="container">
            <div className="row 150%">
              <div className="4u 12u(mobile)">
                <section className="highlight">
                  <a href="#" className="image featured">
                    <img src={pic02} alt="" />
                  </a>
                  <h3>
                    <a href="#">Aliquam diam consequat</a>
                  </h3>
                  <p>
                    Eget mattis at, laoreet vel amet sed velit aliquam diam
                    ante, dolor aliquet sit amet vulputate mattis amet laoreet
                    lorem.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button style1">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="4u 12u(mobile)">
                <section className="highlight">
                  <a href="#" className="image featured">
                    <img src={pic03} alt="" />
                  </a>
                  <h3>
                    <a href="#">Nisl adipiscing sed lorem</a>
                  </h3>
                  <p>
                    Eget mattis at, laoreet vel amet sed velit aliquam diam
                    ante, dolor aliquet sit amet vulputate mattis amet laoreet
                    lorem.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button style1">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="4u 12u(mobile)">
                <section className="highlight">
                  <a href="#" className="image featured">
                    <img src={pic04} alt="" />
                  </a>
                  <h3>
                    <a href="#">Mattis tempus lorem</a>
                  </h3>
                  <p>
                    Eget mattis at, laoreet vel amet sed velit aliquam diam
                    ante, dolor aliquet sit amet vulputate mattis amet laoreet
                    lorem.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button style1">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

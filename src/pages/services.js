import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class ServicesPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />

        <div class="wrapper style2">
          <div class="title">Our Services</div>
          <div id="main" class="container">
            <a href="#" class="image featured">
              <img src="images/pic01.jpg" alt="" />
            </a>

            <section id="features">
              <header class="style1">
                <h2>We customize our services to meet your individual needs</h2>
                <p>Feugiat dolor nullam orci pretium phasellus justo</p>
              </header>
              <div class="feature-list">
                <div class="row">
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-comment">
                        Accounts Payable / Receivable
                      </h3>
                      <p>
                        Eget mattis at, laoreet vel et velit aliquam diam ante,
                        aliquet sit amet vulputate. Eget mattis at, laoreet vel
                        velit lorem.
                      </p>
                    </section>
                  </div>
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-refresh">Reconcile and Balance</h3>
                      <p>
                        Eget mattis at, laoreet vel et velit aliquam diam ante,
                        aliquet sit amet vulputate. Eget mattis at, laoreet vel
                        velit lorem.
                      </p>
                    </section>
                  </div>
                </div>
                <div class="row">
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-picture-o">Payroll Reporting</h3>
                      <p>
                        Eget mattis at, laoreet vel et velit aliquam diam ante,
                        aliquet sit amet vulputate. Eget mattis at, laoreet vel
                        velit lorem.
                      </p>
                    </section>
                  </div>
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-cog">Billing Services</h3>
                      <p>
                        Eget mattis at, laoreet vel et velit aliquam diam ante,
                        aliquet sit amet vulputate. Eget mattis at, laoreet vel
                        velit lorem.
                      </p>
                    </section>
                  </div>
                </div>
                <div class="row">
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-wrench">
                        Aliquam consequat et feugiat
                      </h3>
                      <p>
                        Eget mattis at, laoreet vel et velit aliquam diam ante,
                        aliquet sit amet vulputate. Eget mattis at, laoreet vel
                        velit lorem.
                      </p>
                    </section>
                  </div>
                  <div class="6u 12u(mobile)">
                    <section>
                      <h3 class="icon fa-check">
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
              <ul class="actions actions-centered">
                <li>
                  <a href="#" class="button style1 big">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#" class="button style2 big">
                    More Info
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

ServicesPage.propTypes = {
  route: React.PropTypes.object,
}

export default ServicesPage

export const pageQuery = graphql`
  query ServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header-wrapper" class="wrapper">
        <div id="header">
          <div id="logo">
            <h1>
              <a href="index.html">
                Sunrise <br /> Bookkeeping
              </a>
            </h1>
            <p>We Customize Our Services To Meet Your Individual Needs</p>
          </div>

          <nav id="nav">
            <ul>
              <li class="current">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="/our-team">Our Team</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/pay-online">Pay Online</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Header

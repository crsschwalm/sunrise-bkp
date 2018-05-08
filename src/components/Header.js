import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="header-wrapper" className="wrapper">
        <div id="header">
          <div id="logo">
            <h1>
              <a href="index">
                Sunrise <br /> Bookkeeping
              </a>
            </h1>
            <p>We Customize Our Services To Meet Your Individual Needs</p>
          </div>

          <nav id="nav">
            <ul>
              <li className="current">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/payment">Pay Online</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header

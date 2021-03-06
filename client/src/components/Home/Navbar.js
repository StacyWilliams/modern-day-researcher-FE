'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Navbar() {
  return (
    <styles.NavbarStyle>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">

            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </styles.NavbarStyle>
  )
}

/**
 * Export component
 */

module.exports = Navbar

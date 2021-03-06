'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const views = require('../views/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define router
 */

function UsersRouter({ mount }) {
  return (
    <>
      <Route path={`${mount}/signin`} render={(props) => <views.SignIn {...props} />} />
      <Route path={`${mount}/signup`} render={(props) => <views.SignUp {...props} />} />
      <Route path={`${mount}/login`} render={() => <Redirect to="/users/signin" />} />
      <Route path={`${mount}/register`} render={() => <Redirect to="/users/signup" />} />
    </>
  )
}

/**
 * Export router
 */

module.exports = UsersRouter

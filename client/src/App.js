'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const react_router_dom = require('react-router-dom')
const routes = require('./routes/index')
const store = require('./store/index')

/**
 * Constants
 */

const Provider = react_redux.Provider
const BrowserRouter = react_router_dom.BrowserRouter

/**
 * Importing global styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <routes.RootRouter mount="/" />
        <routes.UsersRouter mount="/users" />
      </BrowserRouter>
    </Provider>
  )
}

/**
 * Export component
 */

module.exports = App

'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style
 */

let MainContainerStyle = styled.div(() => `
  height: 100vh;
  background-color: #FFF;
`)

/**
 * Export style
 */

module.exports = MainContainerStyle

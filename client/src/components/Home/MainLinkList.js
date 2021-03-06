'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const styles = require('./styles/index')
const Link = require('./Link')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const getMainLinks = actions.getMainLinks

/**
 * Define component
 */

class MainLinkList extends Component {
  componentDidMount() {
    this.props.getMainLinks(this.props.current_user_id)
  }

  render() {
    return (
      <styles.MainLinkListStyle>
        <h4>All</h4>

        <hr/>

        <ul>
          {this.props.main_links.map((link, i) => <Link key={i} {...link} />)}
        </ul>
      </styles.MainLinkListStyle>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return {
    main_links: state.usersReducer.main_links,
    current_user_id: state.usersReducer.current_user_id
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { getMainLinks })(MainLinkList)

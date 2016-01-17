import React, { PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'

export default class AppNavBar extends React.Component {
	static propTypes = {
		appName: PropTypes.string.isRequired
  };
  render () {
  	return (
  		<AppBar
		    title={this.props.appName}
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  />
  	)
  }
}
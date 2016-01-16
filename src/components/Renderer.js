import React, { PropTypes } from 'react'

export default class Renderer extends React.Component {
  static propTypes = {
    rawMarkdown: PropTypes.func.isRequired,
    renderOutput: PropTypes.string.isRequired
  };
  render () {
    return (
    <div className='col-xs-12 col-sm-12 col-md-6'>
        <span dangerouslySetInnerHTML={this.props.rawMarkdown(this.props.renderOutput)} />
      </div>
    )
  }
}

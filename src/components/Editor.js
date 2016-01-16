import React, { PropTypes } from 'react'
import MarkDownInput from './MarkdownInput'

export default class Editor extends React.Component {
  static propTypes = {
    editInput: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
  };
  render () {
    return (
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <MarkDownInput value={this.props.editInput} update={this.props.update}/>
      </div>
    )
  }
}

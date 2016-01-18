import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class MarkDownInput extends React.Component {
  constructor () {
    super()
    this.update = this.update.bind(this)
  }

  static propTypes = {
    update: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  update () {
    let val = ReactDOM.findDOMNode(this.refs.inputValue).value
    this.props.update(val)
  }
  render () {
    return (
    <textarea
    className='form-control'
    rows='30' type='text'
    ref='inputValue'
    value={this.props.value}
    onChange={this.update} />)
  }
}

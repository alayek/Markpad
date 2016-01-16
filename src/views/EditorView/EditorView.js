import React from 'react'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'
import marked from 'marked'
import Editor from '../../components/Editor'
import Renderer from '../../components/Renderer'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class EditorView extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '#Testing *mark*down\n####What is there to test?\n****\n' +
          '+ Everything\n+ Nothing\n* Whatever you want!\n----\n' +
          '| Code        | None Code |\n' +
          '-------------- | -------------   |\n' +
          '| `*Hi*`        | *Hi*             |\n' +
          '| `**Bye**`   | **Bye**        |\n' +
          '| `~~Die~~` | ~~Die~~     |\n' +
          '____\n' +
          '```\nfunction hello_world() {\n' +
          '    alert("**HELLO WORLD**!");\n}\n```\n' +
          '>Notice that the `**` don\'t do anything\n\n' +
          '####Have fun with this!\n*~[Arijit Layek](http://freecodecamp.com/alayek)*'
    }
    this.update = this.update.bind(this)
  }

  update (editValue) {
    this.setState({
      value: editValue
    })
  }

  rawMarkdown (value) {
    return {
      __html: marked(value, {
        sanitize: true
      })
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row row-content'>
           <Editor
            editInput={this.state.value}
            update={this.update}/>
           <Renderer
            renderOutput={this.state.value}
            rawMarkdown={this.rawMarkdown}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(EditorView)
import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }
  render() {
    return (
      
        this.props.type === 'film'?
        <div>
          <input type="text" value={this.state.inputText} onChange={this.handleInput.bind(this)} />
          <button onClick={() => {this.search()}}>search</button>
          <button onClick={() => {this.goBack()}}>cancel</button>
        </div>:''
      
    )
  }
  handleInput(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  search() {
    if(this.state.inputText === '') return
    this.props.cb(this.state.inputText)
    this.setState({
      inputText: ''
    })
  }
  goBack() {
    window.history.go(-1)
  }
}

export default SearchBar

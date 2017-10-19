import React, { Component } from 'react'
import '../assets/style/searchBar'

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
        <div className='search_bar'>
          <form action="javascript:void(0)" onSubmit={this.handlePress.bind(this)}>
            <input
              ref='input'
              type="text" 
              value={this.state.inputText} 
              onChange={this.handleInput.bind(this)} />
           </form>
            <button className='cancel' onClick={() => {this.goBack()}}>取消</button>
          {//<button onClick={() => {this.search()}}>search</button>
          }
        </div>:''
      
    )
  }
  handleInput(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  handlePress(e) {
    e.preventDefault()
    this.search()
    this.refs.input.blur()
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

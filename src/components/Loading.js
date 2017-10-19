import React, { Component } from 'react'
import '../assets/style/loading'

class Loading extends Component {
  render() {
    return (
      <div className='cover'>
        <div className="loading">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    )
  }
}

export default Loading

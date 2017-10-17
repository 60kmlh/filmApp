import React, { Component } from 'react'
import '../assets/style/back'
// import createHashHistory from 'history/createHashHistory'

// const history = createHashHistory()

class Back extends Component {
  render() {
    return (
      <div className='arror_head'>
        <a className="arror" onClick={() => {this.goBack()}}> </a>
      </div>
    )
  }
  goBack() {
    window.history.go(-1)
  }
}

export default Back

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/tab'

class Tab extends Component {
  render() {
    return (
      <div className='tab tab_btn'>
        <span className='film_tab'>
          <Link to="/film">电影</Link>
        </span>
        <span>
          <Link to="/cinemas">影院</Link>
        </span>
      </div>
    )
  }
}

export default Tab

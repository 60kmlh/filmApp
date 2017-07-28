import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tab extends Component {
  render() {
    return (
      <div>
        <span>
          <Link to="/film/today">电影</Link>
        </span>
        <span>
          <Link to="/cinemas">影院</Link>
        </span>
      </div>
    )
  }
}

export default Tab

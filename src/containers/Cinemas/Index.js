import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NearbyCinemas from './NearbyCinemas'
import BookTicket from '../../components/BookTicket'

class Cinemas extends Component {
  render() {
    return (
      <div>
        <Route exact path='/cinemas' component={NearbyCinemas}></Route>
        <Route exact path='/cinemas/online' component={BookTicket}></Route>
      </div>
    )
  }
}

export default Cinemas

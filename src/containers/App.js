import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Head from '../components/Head'
import Film from './Film/Index'
import Cenimas from './Cinemas/Index'
import Tab from '../components/Tab'
import Search from '../components/Search'
import '../assets/style/app'

// import createHistory from 'history/createHashHistory'

// const history = createHistory()

// import asyncComponent from '../components/asyncComponent'

// const AsyncFilm = asyncComponent(() => import('./Film/Index'))
// const AsyncCenimas = asyncComponent(() => import('./Cinemas/Index'))

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Route exact path='/' component={Film}></Route>
        <Route path='/film' component={Film}></Route>
        <Route path='/cinemas' component={Cenimas}></Route>
        <Route path='/:type/search' component={Search}></Route>
        <Tab />
      </div>
    )
  }
}

// export default connect(mapStateToProps, null ,null, {pure:false})(App)
export default App

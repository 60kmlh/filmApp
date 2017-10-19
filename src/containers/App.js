import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Film from './Film/Index'
import Cenimas from './Cinemas/Index'
import Search from '../components/Search'
import Loading from '../components/Loading'
import '../assets/style/app'
import axios from 'axios'

// import createHistory from 'history/createHashHistory'

// const history = createHistory()

// import asyncComponent from '../components/asyncComponent'

// const AsyncFilm = asyncComponent(() => import('./Film/Index'))
// const AsyncCenimas = asyncComponent(() => import('./Cinemas/Index'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      ajaxStart: 0,
      ajaxEnd: 0
    }
  }
  componentWillMount() {
    this.setAxios()
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? <Loading /> : null}
        <Route exact path='/' component={Film}></Route>
        <Route path='/film' component={Film}></Route>
        <Route path='/cinemas' component={Cenimas}></Route>
        <Route path='/:type/search' component={Search}></Route>
      </div>
    )
  }
  setAxios() {
    var that = this
    axios.interceptors.request.use((config) => {
      that.setState({
        isLoading: true
      })
      return config
    })
    axios.interceptors.response.use((response) => {
      that.setState({
        isLoading: false
      })
      return response
    })
  }
}

// export default connect(mapStateToProps, null ,null, {pure:false})(App)
export default App

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCity } from '../actions/city'
import axios from 'axios'

class CityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityList: []
    }
  }
  componentDidMount() {
    this.getCityList()
  }
  render() {
    return (
      <div>
        {
          this.state.cityList.map((city, inedx) => {
            return (
              <li onClick={() => this.toggleCity(city.city_name)} key={city.id} style={{float:'left',listStyle:'none'}}>
                {city.city_name}
              </li>
            )
          })
        }
      </div>
    )
  }
  toggleCity(city) {
    this.props.dispatch(toggleCity(city))
  }
  getCityList() {
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/cities').then(res => {
      this.setState({
        cityList: res.data.result
      })
    })
  }
}

export default connect()(CityList)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCity } from '../actions/city'
import '../assets/style/cityList'

var codeIndex = 0

class CityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeIndex: 0,
      codeY: 0,
      codeIndexCp: 0
    }
  }
  render() {
    return (
      <div className={this.props.show?'cityList':'cityList hide'} ref='list'>
        <div className="indexList">
          <ul>
            {
              this.props.indexList.map((item, index) => {
                return (
                  <li
                   key={index} 
                   onTouchStart={(e) => this.handleTouchStart(e)}
                   onTouchMove={(e) => this.handleTouchMove(e)}
                   onTouchEnd={(e) =>this.handleTouchEnd(e)}
                   id={index}>{item}
                  </li>
                )
              })
            }
          </ul>
        </div>
        {
          this.props.cityList.map((item, index) => {
            return (
              // <li onClick={() => this.toggleCity(city)} key={city.id} style={{float:'left',listStyle:'none'}}>
              //   {city.city_name}
              // </li>
              <div key={index}>
                <h3>{item.pre}</h3>
                <ul className='city'>
                  {
                    item.list.map((city, index1) => {
                      return (
                        <li onClick={() => this.toggleCity(city)} key={city.id}>
                          {city.city_name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
  toggleCity(city) {
    this.props.dispatch(toggleCity(city))
  }
  handleTouchStart(e) {
    e.stopPropagation()
    e.preventDefault()
    this.setState({
      codeIndex: e.touches[0].target.id,
      codeY: e.touches[0].pageY,
      codeIndexCp: e.touches[0].target.id
    })
    this.refs.list.scrollTop = this.calHeight(e.touches[0].target.id)
  }
  handleTouchMove(e) {
    e.stopPropagation()
    e.preventDefault()
    var move = e.touches[0].pageY - this.state.codeY
    var moveIndex = Math.round(move/20)
    var endIndex = Number(this.state.codeIndex)+moveIndex
    if(endIndex < 0) {
      endIndex = 0
    }
    if(endIndex > this.props.indexList.length-1) {
      endIndex = this.props.indexList.length-1
    }
    codeIndex = endIndex
    this.setState({copyIndexCp:endIndex})
    this.refs.list.scrollTop = this.calHeight(endIndex)
    // this.setState((prevState, props) => {
    //   return {codeIndex: Number(prevState.codeIndex)+endIndex}
    // })
  }
  handleTouchEnd(e) {
  }
  calHeight(index) {
    var height = 0
    this.props.cityList.map((item, idx) => {
      if(idx < index) {
        height +=23
        height +=(25*Number(item.list.length))
      }
    return true
    })
    console.log(height);
    return height
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.city.cityList.resList,
    indexList: state.city.cityList.indexList
  }
}

export default connect(mapStateToProps)(CityList)

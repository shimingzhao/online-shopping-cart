import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import Router from './Router'
import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_SUCCESS } from './data/api'
import axios from 'axios'

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

// const restaurants = () =>{
//   axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
//     .then((response) => dispatch({
//       type: FETCH_RESTAURANTS_SUCCESS,
//       payload: response.data
//     })).catch((response) => dispatch({
//     type: FETCH_RESTAURANTS_FAILURE,
//     error: response.error
//   }))
// }

const loadItems = () =>{
  axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
    .then((response) => console.log(response.data))
    .catch((response) => console.log(response.error))
}

class App extends Component {

  componentDidMount(){
    loadItems()
  }

  render () {
    return(
        <div className='page-container'>
          <Navigation />
          <Router />
        </div>
      )
  }
}

export default App

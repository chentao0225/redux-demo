import React, { Component } from 'react'
import CounterContainer from './container/counter_container'
import PersonContainer from './container/person_container'
export default class App extends Component {
  
  render() {
    return (
     <div>
        <h2>Counter组件</h2>
        <CounterContainer/>
        <h2>Person组件</h2>
        <PersonContainer/>
     </div>
    )
  }
}


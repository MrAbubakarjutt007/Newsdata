import React, { Component } from 'react'
import spinn from './spinn.gif' 
export default class Spdata extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src={spinn} alt="spinn"/>
      </div>
    )
  }
}

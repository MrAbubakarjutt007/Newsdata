import React, { Component } from 'react'


export default class Hader extends Component {
  

  render() {
    return (
      <div className='container-fluid'>
        <div className="d-flex">
        <h1 className="datain">
        NewsData
        </h1>
        <div className="mx-2 my-3">
        <i className="fa-brands fa-twitter mx-2"></i>
        <i className="fa-brands fa-facebook mx-2"></i>
        <i className="fa-brands fa-instagram mx-2"></i>
        <i className="fa-brands fa-whatsapp mx-2"></i>
        </div>
        </div>
      </div>
    )
  }
}

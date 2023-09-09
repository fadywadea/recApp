import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
  state = {
    productDetails: "Toshiba c3"
  };
  render() {
    return <>
      <div className='container'>
        <div className='bg-dark p-4'>
          <h4 className='bg-white text-center' >Parent Component</h4>
          <Child brand={this.state.productDetails} />
        </div>
      </div>
    </>
  }
}

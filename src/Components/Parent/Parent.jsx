import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
  state = {
    productDetails: "Toshiba c3",
    user: { fullName: "John", age: 25, gender: "male" }
  };
  render() {
    return <>
      <div className='container'>
        <div className='bg-dark p-4'>
          <h4 className='bg-white text-center' >Parents Component</h4>
          <div className="row gy-4">
            {this.props.dodo.map((x) => <Child delete={this.props.delete} key={x.id} pro={x} />)}
            {/* <Child pro={this.state.products[0]}/>
            <Child pro={this.state.products[1]} />
            <Child pro={this.state.products[2]} />
            <Child pro={this.state.products[3]} />
            <Child pro={this.state.products[4]} /> 
            <Child pro={this.state.products[5]} />  */}
            {/*<Child  brand={this.state.productDetails} fofo={this.props.dodo} userDetails={this.state.user} /> */}
          </div>
        </div>
      </div>
    </>
  }
}

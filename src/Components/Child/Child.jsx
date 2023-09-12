import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { id, count, code, category, price, onSale } = this.props.pro;
    return (
      <>
        {/* <h4 className="text-white text-center">{this.props.userDetails.age}</h4>
        <h5 className="text-white text-center">{this.props.brand}</h5>
        <h3 className="text-white text-center">data from app {this.props.fofo}</h3> */}
        <div className="col-md-3">
          <div className="bg-white p-3 position-relative">
            <h5>Count : {count}</h5>
            <h5>Code : {code}</h5>
            <h5>Category : {category}</h5>
            <h5>Price : {price}</h5>
            {onSale === true ? <div className="text-white top-0 end-0 position-absolute bg-danger p-2">sale</div> : ''}
            <button onClick={() => this.props.delete(id)} className="btn btn-outline-danger btn-sm w-100">Delete</button>
          </div>
        </div>
      </>)
  }
}

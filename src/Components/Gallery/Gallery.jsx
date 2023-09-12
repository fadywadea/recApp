import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default class Gallery extends Component {
  state = {

  };

  render() {
    return <>
      <div className="container">
        <div>
          <h2>Gallery</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
            doloribus illum aliquam consequatur
            vitae quos veritatis sapiente necessitatibus nam.</p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li><Link to="">Mobile</Link></li>
              <li><Link to="web">Web</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  }
}

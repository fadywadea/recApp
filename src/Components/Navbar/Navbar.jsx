/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li>
              <Link className="nav-link" to="gallery">Gallery</Link>
            </li>
            <li>
              <Link className="nav-link" to="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
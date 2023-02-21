import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable dark mode
              </label>
            </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string,
};

Navbar.defaultProps = {
  title: "Title text here",
  aboutText: "About text here",
};

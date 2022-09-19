import React, { Component } from "react";
import "./style.css";
export default class NarBar extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul className="nav">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          </nav>
      </div>
    );
  }
}
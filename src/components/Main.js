import React, { Component } from "react";
import { filmsInformation } from "../shared/ListOfFilm";
import FilmsPresentation from "./FilmsPresentation";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: filmsInformation,
    };
  }
  render() {
    return <FilmsPresentation films={this.state.films} />;
  }
}
export default Main;

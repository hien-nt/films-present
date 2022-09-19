import React from 'react'
import { filmsInformation } from "../shared/ListOfFilm"
export default function FilmsPresentation({films}) {
    console.log(filmsInformation)
  return (
    <div className="container">
      {filmsInformation.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.img} alt=""/>
            
            <h3>{film.name}</h3>
            <p className="title">{film.nation}</p>
            
            <p>
              {film.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

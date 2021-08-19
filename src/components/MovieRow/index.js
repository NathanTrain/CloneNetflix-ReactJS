import React from "react";

import "./styles.scss";

function MovieRow({ title, items }) {
  // console.log(items);

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="listArea">

        <div className="list">

          {items.results?.length > 0 &&
            items.results.map((movie, key) => {
              return (
                <div className="movie" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </div>
              );
            })}
  
        </div>

      </div>

    </div>
  );
}

export default MovieRow;

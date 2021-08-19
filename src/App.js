import React, { useEffect, useState } from "react";

import './App.scss';

import apiFilms from "./API/Tmdb.js";

import MovieRow from "./components/MovieRow/index.js";

export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await apiFilms.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => {
          return <MovieRow title={item.title} items={item.items} key={key} />;
        })}
      </section>

    </div>
  );
}

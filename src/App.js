import React, { useEffect, useState } from "react";

import './App.scss';

import apiFilms from "./API/Tmdb.js";

import MovieRow from "./components/MovieRow/index.js";
import FeatureMovie from "./components/FeatureMovie/index.js";


export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await apiFilms.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await apiFilms.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);

    };

    loadAll();
  }, []);

  return (
    <div className="page">

      {featureData &&
        <FeatureMovie movie={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key) => {
          return <MovieRow title={item.title} items={item.items} key={key} />;
        })}
      </section>

    </div>
  );
}

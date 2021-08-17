import React from 'react';

import filmsLists from "./services/Tmdb.js"

// import { Container } from './styles';

export default function App() {

  console.log(filmsLists.getHomeList())

  return (
    <div>
      ola mundo
    </div>
  )
}

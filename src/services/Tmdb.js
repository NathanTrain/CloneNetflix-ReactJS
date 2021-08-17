const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY
const API_BASE = "https://api.themoviedb.org/3"
const LANGUAGE = "language=pt-BR"

/* ! o que vai ser escolhido da api
  * - originais netflix
  * - recomendados (destaque do momento) (tranding)
  * - em alta (topRated)
  * - ação
  * - comedia
  * - terror
  * - romance
  * - documentários
*/

const basicFetch = async (endpoint) => {
  const require = await fetch(`${API_BASE}${endpoint}${LANGUAGE}&api_key=${API_KEY}`)
  const json = await require.json();
  return json;
}

const filmsLists =  {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&`)
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?`)
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?`)
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&`)
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&`)
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&`)
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99&`)
      },
    ]
  }
}

export default filmsLists;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

/** Popular movies (home feed) */
export const getPopularMovies = async () => {
  const r = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!r.ok) throw new Error(`Failed to fetch popular: ${r.status}`);
  const data = await r.json();
  return data.results;
};

/** Search by text */
export const searchMovies = async (query) => {
  const r = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&include_adult=false`
  );
  if (!r.ok) throw new Error(`Failed to search: ${r.status}`);
  const data = await r.json();
  return data.results;
};

/** Movie details (+credits) */
export const getMovieDetails = async (id) => {
  const r = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
  );
  if (!r.ok) throw new Error(`Failed to fetch movie: ${r.status}`);
  return r.json();
};

/** Person profile + movie credits (robust: two requests) */
export const getPersonWithCredits = async (id) => {
  const pRes = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);
  if (!pRes.ok) throw new Error(`Failed to fetch person: ${pRes.status}`);
  const person = await pRes.json();

  const cRes = await fetch(
    `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`
  );
  if (!cRes.ok) throw new Error(`Failed to fetch movie credits: ${cRes.status}`);
  const credits = await cRes.json(); // { cast, crew }

  return { ...person, movie_credits: credits };
};

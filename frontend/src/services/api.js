const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error(`Failed to fetch popular: ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=false`
  );
  if (!response.ok) throw new Error(`Failed to search: ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
  );
  if (!response.ok) throw new Error(`Failed to fetch movie: ${response.status}`);
  return response.json();
};

export const getPersonWithCredits = async (id) => {
  // 1) פרטי אדם
  const pRes = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);
  if (!pRes.ok) throw new Error(`Failed to fetch person: ${pRes.status}`);
  const person = await pRes.json();

  // 2) קרדיטי סרטים (נפרד, ולא דרך append_to_response)
  const cRes = await fetch(`${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`);
  if (!cRes.ok) throw new Error(`Failed to fetch movie credits: ${cRes.status}`);
  const credits = await cRes.json(); // { cast: [...], crew: [...] }

  // מאחדים למבנה אחיד כמו שהיה צפוי מה-append
  return { ...person, movie_credits: credits };
};
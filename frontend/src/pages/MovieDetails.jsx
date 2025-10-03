import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import "../css/MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieDetails(id);
        if (!cancelled) setMovie(data);
      } catch (e) {
        if (!cancelled) setError(e.message || "Failed to load movie");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <div className="page-state">Loading...</div>;
  if (error)   return <div className="page-state error">{error}</div>;
  if (!movie)  return null;

  const IMG = "https://image.tmdb.org/t/p";
  const poster = movie?.poster_path ? `${IMG}/w342${movie.poster_path}` : null;
  const cast = movie?.credits?.cast?.slice(0, 10) ?? [];

  return (
    <div className="movie-details">
      {/* HERO */}
      <div className="movie-hero">
        <div className="poster">
          {poster ? (
            <img src={poster} alt={`${movie.title} poster`} loading="lazy" />
          ) : (
            <div className="poster poster--placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="info">
          <h1 className="title">
            {movie.title}{" "}
            {movie.release_date?.slice(0, 4) && (
              <span className="year">({movie.release_date.slice(0, 4)})</span>
            )}
          </h1>

          <div className="meta">
            <span className="badge" title="Rating">
              ⭐ {movie.vote_average?.toFixed?.(1) ?? "N/A"}
            </span>
            <span className="badge" title="Runtime">
              ⏱ {movie.runtime ?? "?"} min
            </span>
            <span className="badge" title="Release date">
              📅 {movie.release_date ?? "—"}
            </span>
          </div>

          {!!movie.genres?.length && (
            <div className="genres">
              {movie.genres.map((g) => (
                <span key={g.id} className="genre-chip">
                  {g.name}
                </span>
              ))}
            </div>
          )}

          {movie.overview && <p className="overview">{movie.overview}</p>}
        </div>
      </div>

      {/* CAST */}
      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-grid">
          {cast.map((person) => {
            const headshot = person.profile_path ? `${IMG}/w185${person.profile_path}` : null;
            return (
              <Link
                to={`/person/${person.id}`}
                key={person.cast_id ?? person.id}
                className="cast-card"
              >
                {headshot ? (
                  <img className="cast-head" src={headshot} alt={person.name} loading="lazy" />
                ) : (
                  <div className="cast-head" aria-hidden="true" />
                )}
                <div className="cast-name">{person.name}</div>
                <div className="cast-role">{person.character}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

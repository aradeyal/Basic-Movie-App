import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonWithCredits } from "../services/api";

export default function PersonDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("[PersonDetails] fetching person", id);
        const data = await getPersonWithCredits(id);
        console.log("[PersonDetails] data:", data);
        if (!cancel) setPerson(data);
      } catch (e) {
        console.error("[PersonDetails] error:", e);
        if (!cancel) setError(e.message || "Failed to load person");
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => { cancel = true; };
  }, [id]);

  const IMG = "https://image.tmdb.org/t/p";

  // UI בסיסי שגם במצב שגיאה מראה משהו
  if (loading) return <div style={{ padding: 16 }}>Loading person {id}…</div>;
  if (error)   return <div style={{ padding: 16, color: "crimson" }}>
    Failed to load person {id}: {error}
  </div>;
  if (!person) return <div style={{ padding: 16 }}>No person found for {id}</div>;

  const avatar = person.profile_path ? `${IMG}/w300${person.profile_path}` : null;
 const movies = (person.movie_credits?.cast || [])
  .filter(m => !!m.id)
  .sort((a,b) => (b.popularity ?? 0) - (a.popularity ?? 0));


  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <h1 style={{ marginTop: 0 }}>{person.name}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 20, alignItems: "start", marginBottom: 16 }}>
        {avatar
          ? <img src={avatar} alt={person.name} style={{ width: 180, borderRadius: 12 }} />
          : <div style={{ width: 180, height: 270, borderRadius: 12, background: "#2a2a3a" }} />
        }
        <div>
          <div style={{ opacity: .8, marginBottom: 8 }}>
            Known for: {person.known_for_department || "—"}
          </div>
          {person.biography && (
            <p style={{ opacity: .9, lineHeight: 1.6, whiteSpace: "pre-line" }}>
              {person.biography}
            </p>
          )}
        </div>
      </div>

      <h2 style={{ margin: "12px 0" }}>Movies</h2>
      {movies.length === 0 ? (
        <div>No movies found.</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12 }}>
          {movies.map(m => {
            const poster = m.poster_path ? `${IMG}/w342${m.poster_path}` : null;
            return (
              <Link key={m.id} to={`/movie/${m.id}`} className="movie-card" style={{ textDecoration: "none" }}>
                <div className="movie-poster" style={{ position: "relative" }}>
                  {poster
                    ? <img src={poster} alt={m.title} style={{ width: "100%", borderRadius: 12 }} loading="lazy" />
                    : <div style={{ width: "100%", aspectRatio: "2/3", borderRadius: 12, background: "#2a2a3a" }} />
                  }
                </div>
                <div className="movie-info" style={{ marginTop: 8 }}>
                  <h3 style={{ margin: 0, fontSize: "1rem" }}>{m.title}</h3>
                  <p style={{ margin: 0, opacity: .8 }}>{m.release_date?.slice(0,4) ?? ""}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

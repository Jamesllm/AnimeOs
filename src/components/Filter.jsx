//data
import { getItems } from "../data";
//react
import { useSearchParams, Link } from "react-router-dom";
//styles
import styles from "../styles/Card.module.css";
//Bootstrap

export default function Filter() {
  let Arrays = getItems();
  let animes = Arrays.filter((Array) => Array.category === "serie");
  let movies = Arrays.filter((Array) => Array.category === "movie");
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <input
        className="mb-3 w-100 p-1"
        placeholder="Buscar en Animelandia"
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {/* Animes*/}
      {animes
        .filter((anime) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let title = anime.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((anime) => (
          <Link
            to={`/${anime.category}/${anime.id}`}
            className={styles.link}
            key={anime.id}
          >
            <div className={styles.card_Filter}>
              <img
                loading="lazy"
                src={anime.poster}
                alt={anime.title}
                className={styles.card_Filter_Img}
              />
              <p>
                {anime.title} <strong>({anime.language})</strong>{" "}
              </p>
            </div>
          </Link>
        ))}
      {/* Movies*/}
      {movies
        .filter((movie) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let title = movie.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((movie) => (
          <Link
            to={`/${movie.category}/${movie.id}`}
            className={styles.link}
            key={movie.id}
          >
            <div className={styles.card_Filter}>
              <img
                loading="lazy"
                src={movie.poster}
                alt={movie.title}
                className={styles.card_Filter_Img}
              />
              <p>
                {movie.title} <strong>({movie.language})</strong>{" "}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

import "./movie-grid.scss";

import { useSearchParams } from "react-router-dom";
import MovieCard from "../movie-card/MovieCard";
import './input.scss'

export default function MovieGrid(props) {
  const items = props.category;
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <input
        className="mb-2 filter"
        placeholder="Buscar en AnimeOs"    
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
      <div className="movie-grid">
        {items
          .filter((anime) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let title = anime.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .map((item, i) => (
            <MovieCard category={props.category} item={item} key={i} />
          ))}
      </div>
    </div>
  );
}

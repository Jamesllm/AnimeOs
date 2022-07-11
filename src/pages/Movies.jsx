//data
import { OsContainer, getItems } from "../components/Ostrap/Ostrap";
import MovieGrid from "../components/movie-grid/MovieGrid";

export default function Movies() {
  let Arrays = getItems();
  let movies = Arrays.filter((Array) => Array.category === "movie");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={movies} />
    </OsContainer>
  );
}

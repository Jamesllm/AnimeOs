//data
import { OsContainer, getItems } from "../components/Ostrap/Ostrap";
import MovieGrid from "../components/movie-grid/MovieGrid";

export default function Animes() {
  let Arrays = getItems();
  let animes = Arrays.filter((Array) => Array.category === "serie");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={animes} />
    </OsContainer>
  );
}

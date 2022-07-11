//data
import { OsContainer, getItems } from "../components/Ostrap/Ostrap";
import MovieGrid from "../components/movie-grid/MovieGrid";

export default function SubSpanishs() {
  let Arrays = getItems();
  let sub_Spanishs = Arrays.filter((Array) => Array.language === "sub-español");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={sub_Spanishs} />
    </OsContainer>
  );
}

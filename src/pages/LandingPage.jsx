/* eslint-disable jsx-a11y/iframe-has-title */
import HeroSlide from "../components/HeroSlide/HeroSlide";
import { Link } from "react-router-dom";
import {
  OsContainer,
  OsOutlineButton,
  getItems,
} from "../components/Ostrap/Ostrap";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import MovieList from "../components/movie-list/MovieList";


export default function LandingPage() {
  let Arrays = getItems();
  //filtrado
  let extremes = Arrays.filter((Array) => Array.status === "extreme");
  let animes = Arrays.filter((Array) => Array.id > 1004 && Array.id < 1014);
  let movies = Arrays.filter((Array) => Array.category === "movie");
  let sub_Spanishs = Arrays.filter((Array) => Array.language === "sub-español");

  //total de items
  let totalAnime = Arrays.filter((Array) => Array.category === "serie");

  return (
    <div>
      <HeroSlide items={extremes} />
      <OsContainer>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Animes</h2>
            <Link to="/series">
              <OsOutlineButton className="small">
                Ver mas {totalAnime.length - 9}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={animes}></MovieList>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Sub-Español</h2>
            <Link to="/sub-spanish">
              <OsOutlineButton className="small">
                Ver mas {sub_Spanishs.length - 1}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={sub_Spanishs}></MovieList>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Peliculas</h2>
            <Link to="/movies">
              <OsOutlineButton className="small">
                Ver mas {movies.length - 1}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={movies}></MovieList>
        </div>
      </OsContainer>
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-has-content */
import { useParams } from "react-router-dom";
import "./detail.scss";
//data
import {
  OsBanner,
  OsContainer,
  OsIframe,
  getItems, getItem 
} from "../../components/Ostrap/Ostrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Disqus from "../../components/Disqus";
import MovieList from "../../components/movie-list/MovieList";
import { clickVideo, viewList, closeList } from "./Functions";

export default function AnimeDetails() {
  let params = useParams();
  let anime = getItem(parseInt(params.animeId));

  let Arrays = getItems();
  let extremes = Arrays.filter((Array) => Array.id > 1020 && Array.id < 1030);
  return (
    <div>
      {anime && (
        <>
          <OsBanner style={{ backgroundImage: `url(${anime.background})` }} />
          <OsContainer className="mb-3 movie-content">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{ backgroundImage: `url(${anime.poster})` }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h2 className="title">{anime.title}</h2>
              <div className="genres">
                <span className="genres__item">{anime.category}</span>
                <span className="genres__item">{anime.language}</span>
              </div>
              <p className="overview">{anime.information}</p>
              {/* VIDEO PLAYER */}
              <div>
                <OsIframe
                  src={anime.trailer}
                  title={anime.title}
                  className="video-frame"
                  id="vis"
                />
                {/* LIST VIDEO PC */}
                <div className="container_ep" id="pc">
                  <div className="container_ep_content">
                    <p>Estas viendo: {anime.title}</p>
                    <button
                      id="verList"
                      className="container_ep_content_button_list ver"
                      onClick={viewList}
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon="fa-solid fa-list"
                      />
                    </button>
                    <div id="mas" className="container_ep_content_link_src">
                      <button
                        id="verList"
                        className="container_ep_content_button_list ver"
                        onClick={closeList}
                      >
                        <FontAwesomeIcon
                          className="icon"
                          icon="fa-solid fa-xmark"
                        />
                      </button>
                      {/* TRAILER */}
                      <div
                        className="episode_active link_src"
                        onClick={clickVideo}
                      >
                        <a href={anime.trailer} frameBorder="0"></a>
                        <p className="no-selection">Trailer</p>
                      </div>
                      {/* END TRAILER */}
                      {anime.episodes.map((episode) => (
                        <div
                          key={episode.id}
                          className="link_src"
                          onClick={clickVideo}
                        >
                          <a href={episode.src} frameBorder="0"></a>
                          <p className="no-selection">Episodio: {episode.id}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* END LIST VIDEO PC */}

                {/* LIST VIDEO TABLET */}
                <div className="list_video_tab" id="tablet">
                  <h3>Episodios: </h3>
                  {/* TRAILER */}
                  <div
                    className="episode_active link_src tablet-list"
                    onClick={clickVideo}
                  >
                    <a href={anime.trailer} frameBorder="0"></a>
                    <p className="no-selection">Trailer</p>
                  </div>
                  {/* ENDTRAILER */}

                  {anime.episodes.map((episode) => (
                    <div
                      className="link_src tablet-list"
                      onClick={clickVideo}
                      key={episode.id}
                    >
                      <a href={episode.src} frameBorder="0"></a>
                      <p className="no-selection">Episodio: {episode.id}</p>
                    </div>
                  ))}
                </div>
                {/* END LIST VIDEO TABLET */}
              </div>
              {/* END VIDEO PLAYER */}
            </div>
          </OsContainer>
          <OsContainer className="interes-content  my-4">
            <h3 className="mb-2">Te puede interesar:</h3>
            <MovieList category={extremes} />
          </OsContainer>
        </>
      )}
    </div>
  );
}

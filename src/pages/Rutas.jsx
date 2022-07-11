import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getItems, OsModal } from "../components/Ostrap/Ostrap";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LandingPage from "./LandingPage";
import Animes from "./Animes";
import Movies from "./Movies";
import AnimeDetails from "../pages/details/AnimeDetails";
import MovieDetails from "../pages/details/MovieDetails";

import SubSpanishs from "./SubSpanishs";
import SearchBar from "../components/search/SearchBar";

export default function Rutas() {
  const img =
    "https://lh3.googleusercontent.com/lHuPjKRGXg-wS_IR2nnokWEkua-qfiUN6J2z35n4AJXxjvFS850tsKs17Bc1Jf1R0QzNcvl14lcNLAmeRddMED8Vnw=w640-h400-e365-rj-sc0x00ffffff";
  const link =
    "https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=es";

  let Arrays = getItems();
  return (
    <div>
      <Router>
        <OsModal
          backgroundModal="transparent"
          openIcon="fa-solid fa-magnifying-glass"
          closeIcon="fa-solid fa-xmark"
          positionBottom="3em"
          heightModal="19em"
          isActive={false}
        >
          <SearchBar placeholder="Buscar en AnimeOs" data={Arrays} />
        </OsModal>
        <OsModal
          backgroundModal="white"
          openIcon="fa-solid fa-question"
          closeIcon="fa-solid fa-xmark"
          displayModal="none"
          heightModal="24em"
          isActive={true}
        >
          <div>
            <img className="modal_img" src={img} alt="" />
            <p>
              Para una mejor experiencia le recomnedamos instalar la siguiente
              extension a su navegador
            </p>
            <a href={link}>Descargar aqui!</a>
          </div>
        </OsModal>
        <Header />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/serie/:animeId/" element={<AnimeDetails />} />
          <Route exact path="/series" element={<Animes />} />
          <Route exact path="/sub-spanish" element={<SubSpanishs />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/:movieId" element={<MovieDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "2rem" }}>
                <p>Pagina no encontrada 😥</p>
              </main>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
//react
import React, { useEffect, useState } from "react";
import "./App.scss";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Loading from "./components/loading/Loading";
//Rutas
import Rutas from "./pages/Rutas";

library.add(fas, faReact, faFontAwesome);

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return <div>{loading ? <Loading /> : <Rutas />}</div>;
}

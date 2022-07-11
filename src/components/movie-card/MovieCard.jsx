import React from "react";

import "./movie-card.scss";
import { Link } from "react-router-dom";
import { OsButton } from "../Ostrap/Ostrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = (props) => {
  const item = props.item;

  return (
    <Link to={`/${item.category}/${item.id}`}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${item.poster})` }}
      >
        <OsButton>
          <FontAwesomeIcon icon="fa-solid fa-play" />
        </OsButton>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;

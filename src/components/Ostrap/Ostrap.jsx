// Componentes unicos para la pagina AnimeOs
import React from "react";
import "./ostrap.scss";
import { DB_ANIME_OS } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Modal from "react-modal";

export const OsContainer = (props) => {
  return (
    <div className={`container ${props.className || undefined}`}>
      {props.children}
    </div>
  );
};

export const OsIframe = (props) => {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={props.src || undefined}
        title={props.title || undefined}
        className={props.className || undefined}
        allowFullScreen
        id={props.id || undefined}
      />
    </div>
  );
};

export const OsBanner = (props) => {
  return (
    <div className="banner" style={props.style || undefined}>
      {props.children}
    </div>
  );
};

export const OsModal = (props) => {
  const actionActive = props.isActive;
  const [modalIsOpen, setIsOpen] = React.useState(actionActive);

  const openIcon = props.openIcon;
  const closeIcon = props.closeIcon;
  const positionBottom = props.positionBottom;
  const displayModal = props.displayModal;
  const backgroundModal = props.backgroundModal;
  const heightModal = props.heightModal;
  return (
    <div
      className="get-modal"
      style={{
        bottom: `${positionBottom || undefined}`,
        display: `${displayModal || undefined}`,
      }}
    >
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={openIcon || undefined} />
      </button>
      <Modal
        style={{
          content: {
            backgroundColor: backgroundModal || undefined,
            height: heightModal || undefined,
          },
        }}
        isOpen={modalIsOpen || undefined}
        onRequestClose={() => setIsOpen(false)}
      >
        <button className="close-modal" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={closeIcon || undefined} />
        </button>
        {props.children}
      </Modal>
    </div>
  );
};

export const OsButton = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OsOutlineButton = (props) => {
  return (
    <OsButton
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </OsButton>
  );
};

OsButton.propTypes = {
  onClick: PropTypes.func,
};

//data para la pagina AnimeOs
export function getItems() {
  return DB_ANIME_OS;
}

export function getItem(id) {
  return DB_ANIME_OS.find((DB_ITEM) => DB_ITEM.id === id);
}

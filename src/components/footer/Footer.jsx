// Styles
import "./footer.scss";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer">
      <span>AnimeOs - {getCurrentYear()}</span>
      <p>Ningún vídeo se encuentra alojado en este sitio web</p>
    </footer>
  );
}

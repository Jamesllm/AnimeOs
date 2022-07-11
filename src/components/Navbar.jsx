import "../components/header/header.scss";
import logo from "../assets/AnimeOs.png";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

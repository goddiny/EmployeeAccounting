import "./Header.css";
import Navbar from "./Navbar";

const Header = (props) => {

  return (
    <div className="Header">
      <h1 className="header__logo">{props.title}</h1>
      <Navbar items={props.items}/>
    </div>
  );
};

export default Header;

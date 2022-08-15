import "./Navbar.css";

const Navbar = (props) => {
  console.log(props.items[0].link);
  return (
    <ul className="navbar__list">
      {props.items.map((item) => (
        <li key={item.id}>
          <a
            className={
              !item.link ? "navbar-item__link disabled" : "navbar-item__link"
            }
            href={item.link}
            target={!item.link ? "_self" : "_blank"}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

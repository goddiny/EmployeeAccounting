import "./EmployeesItem.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import arrowIcon from "../../assets/arrow.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";

const EmployeesItem = (props) => {
  const month = props.birthdate.toLocaleString("en-US", { month: "2-digit" });
  const day = props.birthdate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.birthdate.getFullYear();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="employees-item">
      <div
        className="employees-item__title"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={props.photo} alt={"Loading..."} />
        <h3>
          {props.name}
          <br />
          {props.surname}
        </h3>
        <CSSTransition
          in={isHovering}
          classNames="popup"
          timeout={300}
          unmountOnExit
        >
          <div className="employees-item__menu">
            <button className="btn promote">
              <img src={arrowIcon} alt="up" />
            </button>
            <button className="btn demote">
              <img src={arrowIcon} alt="down" />
            </button>
            <button className="btn edit">
              <img src={editIcon} alt="down" />
            </button>
            <button className="btn delete">
              <img src={deleteIcon} alt="down" />
            </button>
          </div>
        </CSSTransition>
      </div>
      <div className="employees-item__description">
        <p>
          <b>Date of birth:</b> {day}.{month}.{year}
        </p>
        <p>
          <b>Post:</b> {props.post}
        </p>
        {props.specific !== "" ? <p>Specific: {props.specific}</p> : ""}
      </div>
    </div>
  );
};

export default EmployeesItem;

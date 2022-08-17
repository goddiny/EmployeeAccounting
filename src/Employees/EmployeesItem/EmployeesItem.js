import "./EmployeesItem.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import editSvg from "../../assets/edit.svg";
import errorPng from "../../assets/error.png";
import ItemDropdown from "./ItemDropdown";
import ItemDescription from "./ItemDescription"

const EmployeesItem = (props) => {
  return (
    <div className="employees-item">
      <div className="employees-item__title">
	  <img src={props.photo === '' ? errorPng : props.photo} alt=''/>
        <h3>
          {props.name}
          <br />
          {props.surname}
        </h3>
      </div>
      <button className="employees-item__btn edit">
        <img src={editSvg} alt=''/>
      </button>

      {/* <CSSTransition
        //   in={}
        classNames="popup"
        timeout={300}
        unmountOnExit
      > */}
      {/* <ItemDropdown /> */}
      {/* </CSSTransition> */}

      <ItemDescription
        birthdate={props.birthdate}
        post={props.post}
        specific={props.specific}
      />
    </div>
  );
};

export default EmployeesItem;

import "./NewEmployee.css";
import { useState } from "react";
import plusSvg from "../assets/plus.svg";
import EmployeeForm from "./EmployeeForm";
import { v1 as uuidv1 } from 'uuid';

const NewEmployee = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveEmployeeDataHandler = (enteredEmployeeData) => {
    const employeeData = {
      ...enteredEmployeeData,
      id: uuidv1(),
    };
    props.onAddEmployee(employeeData);
    setIsEditing(false);
  };

  return (
    <div className={isEditing ? "new-employee" : "new-employee disabled"}>
      {!isEditing && (
        <button className="new-employee__btn" onClick={startEditingHandler}>
          <img src={plusSvg} alt="new employee" />
        </button>
      )}
      {!!isEditing && (
        <EmployeeForm
          onSaveEmployeeData={saveEmployeeDataHandler}
          onCansel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewEmployee;

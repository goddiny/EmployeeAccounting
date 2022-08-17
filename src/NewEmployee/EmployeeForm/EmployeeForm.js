import "./EmployeeForm.css";
import { useState } from "react";

const EmployeeForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurame] = useState("");
  const [enteredBirthdate, setEnteredBirthdate] = useState("");
  const [enteredPost, setEnteredPost] = useState("");
  const [enteredPhoto, setEnteredPhoto] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidSurname, setIsValidSurname] = useState(true);
  const [isValidBirthdate, setIsValidBirthdate] = useState(true);

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidName(true);
    }
    setEnteredName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidSurname(true);
    }
    setEnteredSurame(event.target.value);
  };

  const birthdateChangeHandler = (event) => {
    if (!!event.target.value) {
      setIsValidBirthdate(true);
    }
    setEnteredBirthdate(event.target.value);
  };

  const postChangeHandler = (event) => {
    setEnteredPost(event.target.value);
  };

  const photoChangeHandler = (event) => {
    setEnteredPhoto(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const employeeData = {
      name: enteredName,
      surname: enteredSurname,
      birthdate: new Date(enteredBirthdate),
      post: enteredPost,
      photo: enteredPhoto,
    };

	if (employeeData.name.trim().length === 0) {
		setIsValidName(false);
		return;
	}
	if (employeeData.surname.trim().length === 0) {
		setIsValidSurname(false);
		return;
	}
	if (!employeeData.birthdate) {
		setIsValidBirthdate(false);
		return;
	}

    props.onSaveEmployeeData(employeeData);
    setEnteredName("");
    setEnteredSurame("");
    setEnteredBirthdate("");
    setEnteredPost("");
    setEnteredPhoto("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="employee-form">
        <h1 className="employee-form__title">Create new employee</h1>
        <div className={`employee-form__control ${!isValidName ? "invalid" : ""}`}>
          <label>Enter name:</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={`employee-form__control ${!isValidSurname ? "invalid" : ""}`}>
          <label>Enter surname:</label>
          <input
            type="text"
            value={enteredSurname}
            onChange={surnameChangeHandler}
          />
        </div>
        <div className={`employee-form__control ${!isValidBirthdate ? "invalid" : ""}`}>
          <label>Enter birth date:</label>
          <input
            type="date"
            min="1900-01-01"
            value={enteredBirthdate}
            onChange={birthdateChangeHandler}
          />
        </div>
        <div className="employee-form__control">
          <label>Choose post:</label>
          <select onChange={postChangeHandler}>
            <option value="Trainee">Trainee</option>
            <option value="Worker">Worker</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Department head">Department head</option>
            <option value="Director">Director</option>
          </select>
        </div>
        {/* {selectedPost === "Trainee" || selectedPost === "Worker" || selectedPost === "Department head" ? 
		<div className="employee-form__control">
          <label>Enter :</label>
          <input
            type="date"
            min="1900-01-01"
            value={enteredBirthdate}
            onChange={birthdateChangeHandler}
          />
        </div> : ''} */}
        <div className="employee-form__control">
          <label>Photo link:</label>
          <input
            type="text"
            value={enteredPhoto}
            onChange={photoChangeHandler}
          />
        </div>
        <div className="employee-form__actions">
          <button className="btn cancel" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="btn create" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;

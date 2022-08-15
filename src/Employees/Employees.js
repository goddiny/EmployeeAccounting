import "./Employees.css";
import EmployeesItem from "./EmployeesItem";

const Employees = ({ employees }) => {
  return (
    <div className="employees-list">
      {employees.map((employee) => (
        <EmployeesItem
          key={employee.id}
          name={employee.name}
          surname={employee.surname}
          birthdate={employee.birthdate}
          photo={employee.photo}
		  post={employee.post}
		  specific={employee.specific}
        />
      ))}
    </div>
  );
};

export default Employees;

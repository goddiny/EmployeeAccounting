import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Employees from "./Employees";
import NewEmployee from "./NewEmployee/";

const navbarItems = [
  { id: 0, title: "Menu", link: "" },
  { id: 1, title: "Google", link: "https://www.google.com/" },
  { id: 2, title: "Yandex", link: "https://yandex.ru/" },
  { id: 3, title: "VK", link: "http://vk.com" },
];

const postsList = [
  { id: 0, title: "Creator", specific: "" },
  { id: 1, title: "Director", specific: "" },
  { id: 2, title: "Department head", specific: "Department" },
  { id: 3, title: "Supervisor", specific: "" },
  { id: 4, title: "Worker", specific: "Supervisor's name" },
  { id: 5, title: "Trainee", specific: "Supervisor's name" },
];

const initial_employees = [
  {
    id: 0,
    name: "Gleb",
    surname: "Barmakov",
    birthdate: new Date(2001, 7, 18),
    photo:
      "https://sun9-north.userapi.com/sun9-87/s/v1/ig2/VbYODsT_KyuNJKgxxhJLuU14nAbzm5LkR3Qlsdir5nxsyYz_UpmcpH6ahNZObNrlZEuakVK236v_OKeMKWBEOCTv.jpg?size=1080x1920&quality=96&type=album",
    post: "Creator",
    specific: "",
  },
  {
    id: 1,
    name: "Lyudmila",
    surname: "Klyueva",
    birthdate: new Date(2001, 4, 1),
    photo:
      "https://sun9-north.userapi.com/sun9-78/s/v1/ig2/AplmhTeyTEFpqTZ4ce7V-yIUgAE_BqN9zRQdEo0W5Ll235CVfC0iYSJPbyQ0shfnYLp2VQ8m8V-xYtAAAB58W7tD.jpg?size=1024x1280&quality=95&type=album",
    post: "Director",
    specific: "Department head",
  },
  {
    id: 2,
    name: "Susanne",
    surname: "Schneider",
    birthdate: new Date(1995, 3, 22),
    photo: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
    post: "Department head",
    specific: "Department - North",
  },
  {
    id: 3,
    name: "Antonio",
    surname: "Alahamora",
    birthdate: new Date(1988, 5, 12),
    photo:
      "https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg",
    post: "Supervisor",
    specific: "",
  },
  {
    id: 4,
    name: "Ferruccio",
    surname: "Lamborghini",
    birthdate: new Date(1916, 3, 28),
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ferruccio_Lamborghini.jpg/330px-Ferruccio_Lamborghini.jpg",
    post: "Worker",
    specific: "Supervisor's neme - Antonio",
  },
  {
    id: 5,
    name: "Tim",
    surname: "Cock",
    birthdate: new Date(1960, 10, 1),
    photo: "https://36627.selcdn.ru/jagajam-c90/TW:1636590253?time=1658077652",
    post: "Creator",
    specific: "",
  },
];

const App = () => {
  const [employees, setEmployees] = useState(initial_employees);

  const addEmployeeHandler = (employee) => {
    console.log("Your new employee is:");
    console.log(employee);
    setEmployees((prevEmployees) => {
      return [employee, ...prevEmployees];
    });
  };

  return (
    <div className="App">
      <Header title={"Employees Accounting"} items={navbarItems} />
      <NewEmployee onAddEmployee={addEmployeeHandler}/>
      <Employees employees={employees} />
    </div>
  );
};

export default App;

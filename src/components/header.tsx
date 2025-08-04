import { useContext, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { TasksContext } from "./TasksProvider";

interface HeaderProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}
function Header() {
  //   let [tasks, setTasks] = useState<string[]>(["eat", "drink", "sleep"]);
  const TaskList = useContext(TasksContext);
  if (!TaskList) throw new Error("error");
  const { tasks, setTasks } = TaskList;
  let [newTask, setnewTask] = useState<string>("");

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setnewTask("");
    }
  };

  return (
    <div className="d-flex flex-column gap-2 w-100 justify-content-center align-items-center mt-4">
      <span className="fs-1 fw-bolder">TO DO APP</span>
      <div
        //adding task
        className="d-flex gap-2 justify-content-center w-100"
      >
        <input
          className="bg-black text-white input-group-text w-25 "
          type="text"
          placeholder="Enter Task to Add"
          onChange={updateText}
          value={newTask}
        />
        <button className="btn btn-primary " onClick={addTask}>
          <i className="bi bi-bag-check"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;

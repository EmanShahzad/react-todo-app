import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import TaskList from "./components/TaskList";

function App() {
  let [tasks, setTasks] = useState<string[]>(["eat", "drink", "sleep"]);

  return (
    <div className="App container-fluid min-vh-100 mh-100 bg-black text-white d-flex flex-column align-items-center  gap-5">
      <Header tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

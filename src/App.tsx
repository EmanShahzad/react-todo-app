import { useState, createContext, ReactNode, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TasksProvider";

function App() {
  // let [tasks, setTasks] = useState<string[]>(["eat", "drink", "sleep"]);

  return (
    <TasksProvider>
      <div className="App container-fluid min-vh-100 mh-100 bg-black text-white d-flex flex-column align-items-center  gap-5">
        <Header />
        <TaskList />
      </div>
    </TasksProvider>
  );
}

export default App;

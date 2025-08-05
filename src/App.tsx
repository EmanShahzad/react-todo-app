import { useState, createContext, ReactNode, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TasksProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  // let [tasks, setTasks] = useState<string[]>(["eat", "drink", "sleep"]);

  return (
    <Provider store={store}>
      <TasksProvider>
        <div className="App container-fluid min-vh-100 mh-100 bg-black text-white d-flex flex-column align-items-center  gap-5">
          <Header />
          <TaskList />
        </div>
      </TasksProvider>
    </Provider>
  );
}

export default App;

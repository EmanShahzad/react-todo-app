import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface TaskListProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

function TaskList({ tasks, setTasks }: TaskListProps) {
  let [editingIndex, setEditingIndex] = useState<number>(-1);
  let [updatedTask, setUpdatedTask] = useState<string>("");
  let [toggleSearch, setToggleSearch] = useState<boolean>(false);
  let [searchTask, setSearchTask] = useState<string>("");
  let [findIndex, setFindIndex] = useState<number>(-1);

  const deleteTask = (deleteIndex: number) => {
    setTasks(tasks.filter((task, index) => index !== deleteIndex));
  };

  const editTask = (editingIndex: number) => {
    const tempTask: unknown = tasks.find(
      (task, index) => index === editingIndex
    );
    setEditingIndex(editingIndex);
    setUpdatedTask(tempTask as string);
  };

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask(event.target.value);
  };

  const saveTask = () => {
    setTasks(
      tasks.map((task, index) => (index === editingIndex ? updatedTask : task))
    );
    setEditingIndex(-1);
  };

  const moveUp = (index: number) => {
    const swap: number = index - 1;
    let tempArr = [...tasks];
    if (index > 0 && editingIndex === -1)
      [tempArr[index], tempArr[swap]] = [tempArr[swap], tempArr[index]];
    setTasks(tempArr);
    console.log(tasks);
  };

  const moveDown = (index: number) => {
    const swap: number = index + 1;
    let tempArr = [...tasks];
    if (swap < tasks.length && editingIndex === -1)
      [tempArr[index], tempArr[swap]] = [tempArr[swap], tempArr[index]];
    setTasks(tempArr);
    console.log(tasks);
  };

  const searchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTask(event.target.value);
    setFindIndex(tasks.indexOf(searchTask));
    console.log(findIndex);
  };

  const search = () => {
    setToggleSearch(true);
    setFindIndex(tasks.indexOf(searchTask));
    console.log(findIndex);
    if (findIndex === -1) {
      setTimeout(() => {
        setFindIndex(-1);
        setSearchTask("");
      }, 7000);
      setTimeout(() => {
        setToggleSearch(false);
      }, 10000);
    }
  };

  const sort = () => {
    setTasks([...tasks].sort());
    console.log(tasks);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 w-100">
      <div className="d-flex justify-content-end w-100 me-5">
        <div className="d-flex w-50 justify-content-between me-5">
          <span className="fs-4 fw-bold">
            <i className="bi bi-list-stars p-2"></i>Task List
          </span>
          <span className="me-5 d-flex gap-2">
            <button className="btn btn-outline-info" onClick={sort}>
              <i className="bi bi-sort-alpha-down"></i>
            </button>
            <button className="btn btn-warning" onClick={search}>
              <i className="bi bi-search"></i>
            </button>
            {toggleSearch ? (
              <input
                key="search"
                type="text"
                className="text-white input-group-text bg-black"
                placeholder="Search Task"
                onChange={searchText}
              />
            ) : null}
          </span>
        </div>
      </div>
      <div className="w-auto mx-5">
        <ul
          //task list display
          className="d-flex align-items-center justify-content-center list-group list-group-flush"
        >
          {tasks.map((task, index) =>
            index === editingIndex ? (
              //if editing
              <li
                key={index}
                className="bg-black text-white list-group-item d-flex gap-4 justify-content-between w-100"
              >
                <div className="d-flex justify-content-center align-items-center gap-2 w-100">
                  <input
                    className="bg-black text-white input-group-text w-75"
                    type="text"
                    placeholder={updatedTask}
                    onChange={changeText}
                    value={updatedTask}
                  />
                  <button className="btn btn-success" onClick={saveTask}>
                    <i className="bi bi-check2-square"></i>
                  </button>
                </div>
              </li>
            ) : (
              //if not editing
              <li
                key={index}
                className="bg-black text-white list-group-item d-flex gap-4 justify-content-between w-100"
              >
                {index === findIndex ? (
                  <div className="d-flex gap-2 flex-wrap w-75 text-warning">
                    <i className="bi bi-lightbulb-fill"></i>
                    {task}
                  </div>
                ) : (
                  <div className="d-flex flex-wrap w-75">{task}</div>
                )}
                <div className="d-flex gap-2 w-auto h-25">
                  <button
                    className="btn btn-danger rounded-circle btn-sm"
                    onClick={() => deleteTask(index)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  <button
                    className="btn btn-info rounded-circle btn-sm"
                    onClick={() => editTask(index)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-dark rounded-circle btn-sm"
                    onClick={() => moveUp(index)}
                  >
                    <i className="bi bi-arrow-up-short"></i>
                  </button>
                  <button
                    className="btn btn-dark rounded-circle btn-sm"
                    onClick={() => moveDown(index)}
                  >
                    <i className="bi bi-arrow-down-short"></i>
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;

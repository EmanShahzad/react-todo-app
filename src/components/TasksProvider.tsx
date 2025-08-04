import { useState, createContext, ReactNode } from "react";

interface TaskListProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}
export const TasksContext = createContext<TaskListProps | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  let [tasks, setTasks] = useState<string[]>(["eat", "drink", "sleep"]);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: string[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(
        (task, index) => index !== action.payload
      );
    },
    updateTask: (
      state,
      action: PayloadAction<{ index: number; updatedText: string }>
    ) => {
      state.tasks = state.tasks.map((task, index) =>
        index === action.payload.index ? action.payload.updatedText : task
      );
    },
  },
});

export const { addNewTask, deleteTask, updateTask } = taskSlice.actions;
export const tasks = (state: RootState) => state.tasks;
export default taskSlice.reducer;

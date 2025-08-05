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
    deleteTaskFromStore: (state, action: PayloadAction<number>) => {
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
    moveTaskUp: (
      state,
      action: PayloadAction<{ index: number; editingIndex: number }>
    ) => {
      const index: number = action.payload.index;
      const swap: number = index - 1;
      if (swap < state.tasks.length && action.payload.editingIndex === -1)
        [state.tasks[index], state.tasks[swap]] = [
          state.tasks[swap],
          state.tasks[index],
        ];
    },
    moveTaskDown: (
      state,
      action: PayloadAction<{ index: number; editingIndex: number }>
    ) => {
      const index: number = action.payload.index;
      const swap: number = index + 1;
      if (swap < state.tasks.length && action.payload.editingIndex === -1)
        [state.tasks[index], state.tasks[swap]] = [
          state.tasks[swap],
          state.tasks[index],
        ];
    },
  },
});

export const {
  addNewTask,
  deleteTaskFromStore,
  updateTask,
  moveTaskUp,
  moveTaskDown,
} = taskSlice.actions;
export const tasks = (state: RootState) => state.tasks;
export default taskSlice.reducer;

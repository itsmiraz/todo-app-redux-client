import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  desc: string;
  isCompleted: boolean;
};

type TInitState = {
  todos: TTodo[];
};

const initState: TInitState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

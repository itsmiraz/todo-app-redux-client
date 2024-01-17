import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  _id: string;
  id: string;
  title: string;
  desc: string;
  priority: string;
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
    deleteTodo: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

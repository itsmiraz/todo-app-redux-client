import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {},
});

export default todoSlice.reducer;

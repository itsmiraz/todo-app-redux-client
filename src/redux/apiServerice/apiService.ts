import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: data => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export type BaseApi = typeof baseApi;
export const { useGetTodosQuery, useAddTodosMutation, useDeleteTodoMutation } =
  baseApi;

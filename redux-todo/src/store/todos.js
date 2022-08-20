import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
	getTodosAsync,
	addTodoAsync,
	toggleTodoAsync,
	deleteTodoAsync,
} from "../service/httpService";

const initialState = {
	todos: [],
	status: "all",
	loading: false,
	error: false,
};

const slice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		deleteCompleteds: (state) => {
			state.todos = state.todos.filter((todo) => !todo.completed);
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
	},
	extraReducers: {
		[getTodosAsync.pending]: (state, action) => {
			state.loading = true;
		},
		[getTodosAsync.fulfilled]: (state, action) => {
			state.todos = action.payload;
			state.loading = false;
		},
		[getTodosAsync.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
		[addTodoAsync.fulfilled]: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
		[toggleTodoAsync.fulfilled]: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.completed = action.payload.completed;
				}
				return todo;
			});
		},
		[deleteTodoAsync.fulfilled]: (state, action) => {
			state.todos = action.payload;
		},
	},
});

export const useTodos = () => useSelector((state) => state.todos);

export const { setStatus, deleteCompleteds } = slice.actions;

export default slice.reducer;

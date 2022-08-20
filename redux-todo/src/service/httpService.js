import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodosAsync = createAsyncThunk("todos/getTodos", async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
	);
	return response.data;
});

export const addTodoAsync = createAsyncThunk("todos/addTodo", async (data) => {
	const response = await axios.post(
		`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
		{
			title: data,
		}
	);
	return response.data;
});

export const toggleTodoAsync = createAsyncThunk(
	"todos/toggleTodo",
	async ({ id, data }) => {
		const response = await axios.patch(
			`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,
			{ completed: data }
		);

		return response.data;
	}
);

export const deleteTodoAsync = createAsyncThunk(
	"todos/deleteTodo",
	async (id) => {
		const response = await axios.delete(
			`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`
		);

		return response.data;
	}
);

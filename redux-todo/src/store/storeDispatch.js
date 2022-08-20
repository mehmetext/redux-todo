import store from ".";
import { setStatus, deleteCompleteds } from "./todos";
import {
	getTodosAsync,
	addTodoAsync,
	toggleTodoAsync,
	deleteTodoAsync,
} from "../service/httpService";

export const setStatusDispatch = (status) => {
	store.dispatch(setStatus(status));
};

export const deleteCompletedsDispatch = (status) => {
	store.dispatch(deleteCompleteds());
};

export const getTodosAsyncDispatch = () => {
	store.dispatch(getTodosAsync());
};

export const addTodoAsyncDispatch = (todo) => {
	store.dispatch(addTodoAsync(todo));
};

export const toggleTodoAsyncDispatch = (data) => {
	store.dispatch(toggleTodoAsync(data));
};

export const deleteTodoAsyncDispatch = (id) => {
	store.dispatch(deleteTodoAsync(id));
};

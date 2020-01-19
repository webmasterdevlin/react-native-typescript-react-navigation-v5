import { ITodoModel } from './todo-model';
import { api } from '../api-config';

export async function getTodos() {
    return await api.get<ITodoModel[]>('todos');
}

export async function deleteTodo(id: string) {
    return await api.delete<void>('todos/' + id);
}

export async function postTodo(newTodo: ITodoModel) {
    return await api.post<ITodoModel>('todos', newTodo);
}

export async function putTodo(updatedTodo: ITodoModel) {
    return await api.put<void>(`todos/${updatedTodo.id}`, updatedTodo);
}


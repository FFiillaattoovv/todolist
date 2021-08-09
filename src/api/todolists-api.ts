import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '015f6ef9-f2e2-4c2d-a216-55334fed10bf'
    }
}

export type TodolistsType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: TodolistsType
    }
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

type UpdateTodolistTitleResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get<Array<TodolistsType>>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings);
    },
    createTodolist(title: string) {
        return axios.post<CreateTodolistResponseType>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings);
    },
    deleteTodolist(id: string) {
        return axios.delete<DeleteTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings);
    },
    updateTodolistTitle(id: string, title: string) {
        return axios.put<UpdateTodolistTitleResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title}, settings);
    },
}

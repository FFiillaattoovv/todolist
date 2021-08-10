import React, {useEffect, useState} from 'react'
import {todolistsAPI, UpdateTaskType} from '../api/todolists-api';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '015f6ef9-f2e2-4c2d-a216-55334fed10bf'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((response) => {
                setState(response.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('What to learn')
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '218049e9-9be9-45c3-9bd4-9ba15f760298'
        todolistsAPI.deleteTodolist(todolistId)
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fb2bcc1e-a4d3-4ad2-84c5-8a127e414f74'
        todolistsAPI.updateTodolistTitle(todolistId, 'New title')
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7c78bec1-592e-4706-8863-e7504023e539';
        todolistsAPI.getTasks(todolistId)
            .then((response) => {
                setState(response.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7c78bec1-592e-4706-8863-e7504023e539';
        todolistsAPI.createTask(todolistId, 'Milk')
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7c78bec1-592e-4706-8863-e7504023e539';
        const taskId = '076d4081-aada-40c8-850b-22bf51793686';
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '7c78bec1-592e-4706-8863-e7504023e539';
        const taskId = '64fb7287-16f3-4852-a97b-fb2cc7e6647b';
        const properties: UpdateTaskType = {
            title: 'New title',
            description: 'New description',
            completed: false,
            status: 0,
            priority: 0,
            startDate: '',
            deadline: ''
        };
        todolistsAPI.updateTask(todolistId, taskId, properties)
            .then((response) => {
                setState(response.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

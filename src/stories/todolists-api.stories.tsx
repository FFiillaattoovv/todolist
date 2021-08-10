import React, {useEffect, useState} from 'react'
import {todolistsAPI, UpdateTaskType} from '../api/todolists-api';

export default {
    title: 'API'
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
    const [state, setState] = useState<any>(null);
    const [todolistId, setTodolistId] = useState<string>('');
    const [taskId, setTaskId] = useState<string>('');

    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((response) => {
                setState(response.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input type="text"
                   placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(event) => {
                       setTodolistId(event.currentTarget.value);
                   }}/>
            <input type="text"
                   placeholder={'taskId'}
                   value={taskId}
                   onChange={(event) => {
                       setTaskId(event.currentTarget.value);
                   }}/>
            <button onClick={deleteTask}>Delete task</button>
        </div>
    </div>
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

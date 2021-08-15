import {TasksStateType} from '../App';
import {RemoveTodolistActionType} from './todolists-reducer';
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, TodolistType} from '../api/todolists-api';
import {Dispatch} from 'redux';

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    status: TaskStatuses
    todolistId: string
}

type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    newTitle: string
    todolistId: string
}

type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

type SetTodolistActionType = {
    type: 'SET-TODOLIST'
    todolists: Array<TodolistType>
}

type SetTasksActionType = {
    type: 'SET-TASKS',
    tasks: Array<TaskType>,
    todolistId: string
}

type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistActionType
    | SetTasksActionType

const initialState: TasksStateType = {};

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state};
            let tasks = state[action.todolistId];
            let filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state};
            let task: TaskType = {
                id: '0', title: action.title, status: TaskStatuses.New, todoListId: action.todolistId, description: '',
                startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low};
            let tasks = stateCopy[action.todolistId];
            let newTasks = [task, ...tasks];
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case 'CHANGE-TASK-STATUS': {
            let todolistTasks = state[action.todolistId];
            state[action.todolistId] = todolistTasks.map(t => t.id === action.taskId
                ? {...t, isDone: action.status}
                : t);
            return {...state};
        }
        case 'CHANGE-TASK-TITLE': {
            let todolistTasks = state[action.todolistId];
            let task = todolistTasks.find(t => t.id === action.taskId);
            if (task) {
                task.title = action.newTitle;
            }
            state[action.todolistId] = [...todolistTasks];
            return {...state};
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state};
            stateCopy[action.todolistId] = [];
            return stateCopy;
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy;
        }
        case 'SET-TODOLIST': {
            const stateCopy = {...state};
            action.todolists.forEach(tl => {
                stateCopy[tl.id] = [];
            })
            return stateCopy;
        }
        case 'SET-TASKS': {
            const stateCopy = {...state};
            stateCopy[action.todolistId] = action.tasks
            return stateCopy;
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title: title, todolistId: todolistId}
}

export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId: taskId, status, todolistId: todolistId}
}

export const changeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId: taskId, newTitle: newTitle, todolistId: todolistId}
}

export const setTasksAC = (tasks: Array<TaskType>, todolistId: string): SetTasksActionType => {
    return {type: 'SET-TASKS', tasks: tasks, todolistId: todolistId}
}

export const fetchTasksTC = (todolistId: string) => {
    return (dispatch: Dispatch) => {
        todolistsAPI.getTasks(todolistId)
            .then(response => {
                dispatch(setTasksAC(response.data.items, todolistId));
            })
    }
}

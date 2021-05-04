import {TasksStateType} from '../App';

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

type AddedTaskActionType = {
    type: ''
    todolistId: string
}

type ActionsType = RemoveTaskActionType | AddedTaskActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state};
            let tasks = state[action.todolistId];
            let filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        default:
            throw new Error('I don\'t understand this action type');
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}

export const addTaskAC = (todolistId: string): AddedTaskActionType => {
    return {type: '', todolistId: todolistId}
}
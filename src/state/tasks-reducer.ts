import {TasksStateType} from '../App';

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    id: string
}

type ActionCreator2 = {
    type: ''
    id: string
}

type ActionsType = RemoveTaskActionType | ActionCreator2

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return
        }
        default:
            throw new Error('I don\'t understand this action type');
    }
}

export const RemoveTaskAC = (todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', id: todolistId}
}
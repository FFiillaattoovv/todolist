import {v1} from 'uuid';
import {todolistsAPI, TodolistType} from '../api/todolists-api';
import {Dispatch} from 'redux';
import {RequestStatusType, setStatusAC, SetStatusActionType} from './app-reducer';

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    todolist: TodolistType
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

export type SetTodolistActionType = {
    type: 'SET-TODOLIST'
    todolists: Array<TodolistType>
}

export type FilterValuesType = 'all' | 'completed' | 'active';

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType,
    entityStatus: RequestStatusType
}

type ActionsType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType
    | SetTodolistActionType

type ThunkDispatch = Dispatch<ActionsType | SetStatusActionType>;

export const todolistId1 = v1();
export const todolistId2 = v1();

const initialState: Array<TodolistDomainType> = [];

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.id);
        }
        case 'ADD-TODOLIST': {
            return [
                {...action.todolist, filter: 'all', entityStatus: 'idle'},
                ...state
            ];
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [...state]
        }
        case 'SET-TODOLIST': {
            return action.todolists.map(tl => {
                return {
                    ...tl,
                    filter: 'all',
                    entityStatus: 'idle'
                }
            })
        }
        default:
            return state;
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistAC = (todolist: TodolistType): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', todolist: todolist}
}

export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}

export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: id}
}

export const setTodolistAC = (todolists: Array<TodolistType>): SetTodolistActionType => {
    return {type: 'SET-TODOLIST', todolists: todolists}
}

export const fetchTodolistsTC = () => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setStatusAC('loading'));
        todolistsAPI.getTodolists()
            .then(response => {
                dispatch(setTodolistAC(response.data));
                dispatch(setStatusAC('succeeded'));
            })
    }
}

export const removeTodolistTC = (todolistId: string) => {
    return (dispatch: Dispatch) => {
        todolistsAPI.deleteTodolist(todolistId)
            .then(response => {
                dispatch(removeTodolistAC(todolistId));
            })
    }
}

export const addTodolistTC = (title: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setStatusAC('loading'));
        todolistsAPI.createTodolist(title)
            .then(response => {
                dispatch(addTodolistAC(response.data.data.item));
                dispatch(setStatusAC('succeeded'));
            })
    }
}

export const changeTodolistTitleTC = (id: string, title: string) => {
    return (dispatch: Dispatch) => {
        todolistsAPI.updateTodolistTitle(id, title)
            .then(response => {
                dispatch(changeTodolistTitleAC(id, title));
            })
    }
}

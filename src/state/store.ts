import {combineReducers, createStore} from 'redux';
import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
});

export  const store = createStore(rootReducer);

export type AppStateRootType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
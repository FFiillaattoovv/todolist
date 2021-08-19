import {
    todolistsReducer,
    ChangeTodolistFilterActionType,
    removeTodolistAC,
    addTodolistAC,
    changeTodolistTitleAC,
    changeTodolistFilterAC,
    SetTodolistActionType,
    setTodolistAC,
    TodolistDomainType,
    FilterValuesType, ChangeTodolistEntityStatusActionType, changeTodolistEntityStatusAC
} from './todolists-reducer';
import {v1} from 'uuid';
import {RequestStatusType} from './app-reducer';

let todolistId1 = v1();
let todolistId2 = v1();

const startState: Array<TodolistDomainType> = [
    {id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0, entityStatus: 'idle'},
    {id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0, entityStatus: 'idle'}
];


test('correct todolist should be removed', () => {

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1));

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
})

test('correct todolist should be added', () => {

    let newTodolistTitle = 'New Todolist';

    const endState = todolistsReducer(startState, addTodolistAC({
        id: '',
        order: 0,
        title: newTodolistTitle,
        addedDate: ''
    }));

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
    expect(endState[0].filter).toBe('all');
})

test('correct todolist should change its name', () => {

    let newTodolistTitle = 'New Todolist';

    const action = changeTodolistTitleAC(todolistId2, newTodolistTitle);

    const endState = todolistsReducer(startState, action);

    expect(endState[0].title).toBe('What to learn');
    expect(endState[1].title).toBe(newTodolistTitle);
})

test('correct filter of todolist should be changed', () => {

    let newFilter: FilterValuesType = 'completed';

    const action: ChangeTodolistFilterActionType = changeTodolistFilterAC(newFilter, todolistId2);

    const endState = todolistsReducer(startState, action);

    expect(endState[0].filter).toBe('all');
    expect(endState[1].filter).toBe(newFilter);
})

test('todolist should be set to the state', () => {

    const action: SetTodolistActionType = setTodolistAC(startState);

    const endState = todolistsReducer([], action);

    expect(endState.length).toBe(2);
})

test('correct entity status of todolist should be changed', () => {

    let newStatus: RequestStatusType = 'loading';

    const action: ChangeTodolistEntityStatusActionType = changeTodolistEntityStatusAC(todolistId2, newStatus);

    const endState = todolistsReducer(startState, action);

    expect(endState[0].entityStatus).toBe('idle');
    expect(endState[1].entityStatus).toBe('loading');
})

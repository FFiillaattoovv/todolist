import {TasksStateType} from '../App';
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer} from './tasks-reducer';


test('correct task should be deleted from correct array', () => {

    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'JavaScript', isDone: true},
            {id: '3', title: 'React', isDone: false},
            {id: '4', title: 'Rest API', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'Book', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Egg', isDone: false},
            {id: '4', title: 'Fruits', isDone: true}
        ]
    };

    const endState = tasksReducer(startState, removeTaskAC('1', 'todolistId1'));

    expect(endState['todolistId1'].length).toBe(3);
    expect(endState['todolistId2'].length).toBe(4);
    expect(endState['todolistId1'].every(t => t.id !== '1')).toBeTruthy();
});

test('correct task should be added to correct array', () => {

    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'JavaScript', isDone: true},
            {id: '3', title: 'React', isDone: false},
            {id: '4', title: 'Rest API', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'Book', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Egg', isDone: false},
            {id: '4', title: 'Fruits', isDone: true}
        ]
    };

    const endState = tasksReducer(startState, addTaskAC('Test title', 'todolistId1'));

    expect(endState['todolistId1'].length).toBe(5);
    expect(endState['todolistId2'].length).toBe(4);
    expect(endState['todolistId1'][0].id).toBeDefined();
    expect(endState['todolistId1'][0].title).toBe('Test title');
    expect(endState['todolistId1'][0].isDone).toBe(false);
});

test('status of specified task should be changed', () => {
    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'JavaScript', isDone: true},
            {id: '3', title: 'React', isDone: false},
            {id: '4', title: 'Rest API', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'Book', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Egg', isDone: false},
            {id: '4', title: 'Fruits', isDone: true}
        ]
    };

    const endState = tasksReducer(startState, changeTaskStatusAC('2', false, 'todolistId1'))

    expect(endState['todolistId1'][1].isDone).toBeFalsy();
    expect(endState['todolistId2'][1].isDone).toBeTruthy();
});
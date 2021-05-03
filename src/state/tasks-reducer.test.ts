import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {addedTaskAC, removeTaskAC, tasksReducer} from './tasks-reducer';


test('correct task should be deleted from correct array', () => {

    const startState: TasksStateType = {
        ['todolistId1']: [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'JavaScript', isDone: true},
            {id: '3', title: 'React', isDone: false},
            {id: '4', title: 'Rest API', isDone: false}
        ],
        ['todolistId2']: [
            {id: '1', title: 'Book', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Egg', isDone: false},
            {id: '4', title: 'Fruits', isDone: true}
        ]
    };

    const endState = tasksReducer(startState, removeTaskAC('1', 'todolistId1'));

    expect(endState['todolistId1'].length).toBe(3);
});

test('correct task should be added to correct array', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: TasksStateType = {
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JavaScript', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Book', isDone: false},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Egg', isDone: false},
            {id: v1(), title: 'Fruits', isDone: true}
        ]
    };

    const endState = tasksReducer(startState, addedTaskAC(todolistId1));
})
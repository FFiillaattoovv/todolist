import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {RemoveTaskAC, tasksReducer} from './tasks-reducer';


test('correct task should be deleted from correct array', () => {
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

    const endState = tasksReducer(startState, RemoveTaskAC(todolistId1));

    expect(endState).toEqual({
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
    });
})
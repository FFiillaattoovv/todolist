import {TasksStateType} from '../App';
import {addTaskAC, removeTaskAC, setTasksAC, tasksReducer, updateTaskAC} from './tasks-reducer';
import {addTodolistAC, removeTodolistAC} from './todolists-reducer';
import {TaskPriorities, TaskStatuses} from '../api/todolists-api';

const startState: TasksStateType = {
    'todolistId1': [
        {id: '1', title: 'HTML&CSS', status: TaskStatuses.Completed, todoListId: 'todolistId1', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '2', title: 'JavaScript', status: TaskStatuses.Completed, todoListId: 'todolistId1', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '3', title: 'React', status: TaskStatuses.New, todoListId: 'todolistId1', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '4', title: 'Rest API', status: TaskStatuses.New, todoListId: 'todolistId1', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}
    ],
    'todolistId2': [
        {id: '1', title: 'Book', status: TaskStatuses.New, todoListId: 'todolistId2', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '2', title: 'Milk', status: TaskStatuses.Completed, todoListId: 'todolistId2', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '3', title: 'Egg', status: TaskStatuses.New, todoListId: 'todolistId2', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low},
        {id: '4', title: 'Fruits', status: TaskStatuses.Completed, todoListId: 'todolistId2', description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}
    ]
};

test('correct task should be deleted from correct array', () => {

    const endState = tasksReducer(startState, removeTaskAC('1', 'todolistId1'));

    expect(endState['todolistId1'].length).toBe(3);
    expect(endState['todolistId2'].length).toBe(4);
    expect(endState['todolistId1'].every(t => t.id !== '1')).toBeTruthy();
});

test('correct task should be added to correct array', () => {

    const endState = tasksReducer(startState, addTaskAC({
        id: 'test id',
        title: 'Test title',
        status: TaskStatuses.New,
        todoListId: 'todolistId1',
        description: '',
        order: 0,
        priority: TaskPriorities.Low,
        addedDate: '',
        startDate: '',
        deadline: ''
    }));

    expect(endState['todolistId1'].length).toBe(5);
    expect(endState['todolistId2'].length).toBe(4);
    expect(endState['todolistId1'][0].id).toBeDefined();
    expect(endState['todolistId1'][0].title).toBe('Test title');
    expect(endState['todolistId1'][0].status).toBe(TaskStatuses.New);
});

test('status of specified task should be changed', () => {

    const endState = tasksReducer(startState, updateTaskAC('2', {status: TaskStatuses.New}, 'todolistId1'));

    expect(endState['todolistId1'][1].status).toBe(TaskStatuses.New);
    expect(endState['todolistId2'][1].status).toBe(TaskStatuses.Completed);
});

test('title of specified task should be changed', () => {

    const endState = tasksReducer(startState, updateTaskAC('2', {title: 'New title'}, 'todolistId1'));

    expect(endState['todolistId1'][1].title).toBe('New title');
    expect(endState['todolistId2'][1].title).toBe('Milk');
});

test('new array should be added when new todolist is added', () => {

    const endState = tasksReducer(startState, addTodolistAC({
        id: 'todolistId3',
        order: 0,
        title: 'new todolist',
        addedDate: ''
    }));

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k !== 'todolistId1' && k !== 'todolistId2');
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {

    const endState = tasksReducer(startState, removeTodolistAC('todolistId2'));

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState['todolistId2']).not.toBeDefined();
});

test('tasks should be added for todolist', () => {

    const action = setTasksAC(startState['todolistId1'], 'todolistId1');

    const endState = tasksReducer({
        'todolistId2': [],
        'todolistId1': []
    }, action);

    expect(endState['todolistId1'].length).toBe(4);
    expect(endState['todolistId2'].length).toBe(0);
});

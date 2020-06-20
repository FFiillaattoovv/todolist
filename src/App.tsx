import styles from './App.module.css';
import React from 'react';
import {Todolist} from "./components/Todolist/Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks: Array<TaskType> = [
        { id: 1, title: 'CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true},
        { id: 3, title: 'React', isDone: false},
        { id: 4, title: 'Patterns', isDone: true},

    ];
    const tasks1: Array<TaskType> = [
        { id: 1, title: 'Run', isDone: true},
        { id: 2, title: 'breakfast', isDone: true},
        { id: 3, title: 'Learn', isDone: false},
        { id: 4, title: 'Dream', isDone: false}
    ];
    const tasks2: Array<TaskType> = [
        { id: 1, title: 'Milk', isDone: true},
        { id: 2, title: 'Fruits', isDone: false}
    ]
    return (
        <div className={styles.App}>
            <Todolist tasks={tasks} title="What to learn" />
            <Todolist tasks={tasks1} title="Day plan" />
            <Todolist tasks={tasks2} title="Shopping list" />
        </div>
    );
}

export default App;

import styles from './App.module.css';
import React from 'react';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const tasks: Array<TaskType> = [
        { id: v1(), title: 'CSS', isDone: true},
        { id: v1(), title: 'JS', isDone: true},
        { id: v1(), title: 'React', isDone: false},
        { id: v1(), title: 'Patterns', isDone: true},

    ];
    const tasks1: Array<TaskType> = [
        { id: v1(), title: 'Run', isDone: true},
        { id: v1(), title: 'breakfast', isDone: true},
        { id: v1(), title: 'Learn', isDone: false},
        { id: v1(), title: 'Dream', isDone: false}
    ];
    const tasks2: Array<TaskType> = [
        { id: v1(), title: 'Milk', isDone: true},
        { id: v1(), title: 'Fruits', isDone: false}
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

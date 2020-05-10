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
        { id: v1(), title: 'React', isDone: false}
    ];
    const tasks1: Array<TaskType> = [
        { id: v1(), title: 'CSS', isDone: true},
        { id: v1(), title: 'JS', isDone: true},
        { id: v1(), title: 'React', isDone: false}
    ];
    const tasks2: Array<TaskType> = [
        { id: v1(), title: 'CSS', isDone: true},
        { id: v1(), title: 'JS', isDone: true},
        { id: v1(), title: 'React', isDone: false}
    ]
    return (
        <div className={styles.App}>
            <Todolist tasks={tasks}/>
            <Todolist tasks={tasks}/>
            <Todolist tasks={tasks}/>
        </div>
    );
}

export default App;

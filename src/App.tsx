import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
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
    ]
    return (
        <div className="App">
            <Todolist />
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JavaScript", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
        </div>
    )
}

export default App;

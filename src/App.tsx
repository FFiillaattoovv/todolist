import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JavaScript", isDone: true},
        {id: 3, title: "React", isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title="What to learn"/>
            <Todolist title="Movies"/>
            <Todolist title="Songs"/>
        </div>
    )
}

export default App;

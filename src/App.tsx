import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Todolist/>
            <Todolist/>
            <Todolist/>
        </div>
    )
}

function Todolist() {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
                <ul>
                    <li><input type="checkbox" checked={true}/><span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/><span>JavaScript</span></li>
                    <li><input type="checkbox" checked={false}/><span>React</span></li>
                </ul>
            </div>
        </div>
    )
}

export default App;

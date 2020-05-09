import React from 'react';
import './App.css';
import {Header} from "./Header";
import {List} from "./List";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="todoList">
                <Header />
                <List />
                <Footer />
            </div>
        </div>
    );
}

export default App;

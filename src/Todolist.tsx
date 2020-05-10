import {Header} from "./Header";
import {List} from "./List";
import {Footer} from "./Footer";
import React from "react";
import {TaskType} from "./App";


type PropsType = {
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    return (
        <div className="todoList">
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
}
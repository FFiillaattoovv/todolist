import React, {useState} from "react";
import {FilterValuesType, TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: () => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle} onChange={() => { setNewTaskTitle("Hello")}}/>
                <button onClick={() => {props.addTask()}}>+</button>
                <ul>
                    {
                        props.tasks.map( t => <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => {props.removeTask(t.id)}}>+</button>
                        </li>)
                    }
                </ul>
                <div>
                    <button onClick={ () => {props.changeFilter("all")}}>All</button>
                    <button onClick={ () => {props.changeFilter("active")}}>Active</button>
                    <button onClick={ () => {props.changeFilter("completed")}}>Completed</button>
                </div>
            </div>
        </div>
    )
}
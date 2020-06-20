import React from "react";
import {TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>;
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
                <ul>
                    {
                        props.tasks.map( t => <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => {alert(t.id)}}>+</button>
                        </li>)
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}
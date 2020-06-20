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
                    <li><input type="checkbox" checked={true}/><span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/><span>JavaScript</span></li>
                    <li><input type="checkbox" checked={false}/><span>React</span></li>
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
import React from "react";
import Task from "./Task";
import {TaskType} from "./App";

type PropsType = {
    tasks: Array<TaskType>
}

export function List(props: PropsType) {
    return (
        <div className="styles.list">
            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
        </div>
    )

}
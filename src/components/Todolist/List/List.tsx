import React from "react";
import Task from "./Task/Task";
import {TaskType} from "../../../App";

type PropsType = {
    tasks: Array<TaskType>
}

export function List(props: PropsType) {
    return (
        <div className="styles.list">
            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
            <Task title={props.tasks[1].title} isDone={props.tasks[1].isDone} />
            <Task title={props.tasks[2].title} isDone={props.tasks[2].isDone} />
        </div>
    )

}
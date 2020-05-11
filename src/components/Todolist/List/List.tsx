import React from "react";
import Task from "./Task/Task";
import {TaskType} from "../../../App";

type PropsType = {
    tasks: Array<TaskType>
}

export function List(props: PropsType) {

    let jsxElements = props.tasks.map( (t) => {
        return <Task key={t.id} title={t.title} isDone={t.isDone} />
    })
    return (
        <div className="styles.list">
            {jsxElements}
        </div>
    )

}
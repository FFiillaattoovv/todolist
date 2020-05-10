import React from "react";

type PropsType = {
    title: string
    isDone: boolean
}

function Task(props: PropsType) {
    return (
        <div className="styles.list">
            <div className="styles.task">
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Task;
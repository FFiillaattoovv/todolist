import React from "react";
import styles from './style.module.css';

type PropsType = {
    title: string
    isDone: boolean
}

function Task(props: PropsType) {
    const css = props.isDone ? styles.done : "";
    return (
        <div className="styles.list">
            <div className={styles.task + " " + css}>
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Task;
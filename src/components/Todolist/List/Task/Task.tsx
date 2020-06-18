import React from "react";
import styles from './Task.module.css';
import cn from "classnames"

type PropsType = {
    title: string
    isDone: boolean
}

function Task(props: PropsType) {
    const css = cn({
        [styles.task]: true,
        [styles.done]: props.isDone
    });

    return (
        <div className="styles.list">
            <div className={css}>
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
                <button>x</button>
            </div>
        </div>
    )
}

export default Task;
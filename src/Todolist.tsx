import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterValuesType, TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    id: string
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const [error, setError] = useState<string | null>(null);

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            if (newTaskTitle.trim() === "") {
                setError("Title is required")
                return;
            }
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        }
    }

    const addTask = () => {
        if (newTaskTitle.trim() === "") {
            setError("Title is required")
            return;
        }
        props.addTask(newTaskTitle.trim());
        setNewTaskTitle("");
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);

    const onActiveClickHandler = () => props.changeFilter("active", props.id);

    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
                <ul>
                    {
                        props.tasks.map(t => {
                            const onRemoveHandler = () => {
                                props.removeTask(t.id)
                            }
                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(t.id, e.currentTarget.checked);
                            }
                            return <li className={t.isDone ? "is-done" : ""}>
                                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                                <span>{t.title}</span>
                                <button onClick={onRemoveHandler}>+</button>
                            </li>
                        })
                    }
                </ul>
                <div>
                    <button className={props.filter === "all" ? "active-filter": ""}
                            onClick={onAllClickHandler}>All
                    </button>
                    <button className={props.filter === "active" ? "active-filter": ""}
                            onClick={onActiveClickHandler}>Active
                    </button>
                    <button className={props.filter === "completed" ? "active-filter": ""}
                            onClick={onCompletedClickHandler}>Completed
                    </button>
                </div>
            </div>
        </div>
    )
}
import {Header} from "./Header/Header";
import {List} from "./List/List";
import {Footer} from "./Footer/Footer";
import React from "react";
import {TaskType} from "../../App";
import styles from './Todolist.module.css';


type PropsType = {
    tasks: Array<TaskType>
    title: string
}

export function Todolist(props: PropsType) {
    return (
        <div className={styles.todolist}>
            <Header title={props.title}/>
            <List tasks={props.tasks}/>
            <Footer />
        </div>
    )
}
import {Header} from "./Header/Header";
import {List} from "./List/List";
import {Footer} from "./Footer/Footer";
import React from "react";
import {TaskType} from "../../App";
import styles from './style.module.css';


type PropsType = {
    tasks: Array<TaskType>
}

export function Todolist(props: any) {
    return (
        <div className={styles.todolist}>
            <Header />
            <List />
            <Footer />
        </div>
    )
}
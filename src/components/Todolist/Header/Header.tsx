import React from "react";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {TaskType} from "../../../App";

type PropsType = {
    title: string
}

export function Header(props: PropsType) {
    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
            <div className="todoList-newTaskForm">
                <Input placeholder="New title"/>
                <Button text="Add"/>
            </div>
        </div>
    )

}
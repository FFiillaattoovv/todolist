import React from "react";
import Input from "./Input";
import Button from "./Button";


export function Header() {
    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">What to Learn</h3>
            <div className="todoList-newTaskForm">
                <Input/>
                <Button/>
            </div>
        </div>
    )

}
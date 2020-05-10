import React from "react";
import Button from "../../common/Button/Button"

export function Footer() {
    return (
        <div className="todoList-footer">
            <Button text="All" />
            <Button text="Completed" />
            <Button text="Active" />
        </div>
    )
}
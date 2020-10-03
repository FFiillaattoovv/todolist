import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {TextFields} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
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
            props.addItem(newTaskTitle.trim());
            setNewTaskTitle("");
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() === "") {
            setError("Title is required")
            return;
        }
        props.addItem(newTaskTitle.trim());
        setNewTaskTitle("");
    }

    return (
        <div>
            <TextField value={newTaskTitle}
                       variant={"outlined"}
                       label={"Type value"}
                       error={!!error}
                       helperText={error}
                   onChange={onNewTitleChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button onClick={addTask} variant={"contained"} color={"primary"}>+</Button>
        </div>
    )
}
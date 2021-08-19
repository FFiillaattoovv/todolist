import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from '@material-ui/core';
import {ControlPoint} from '@material-ui/icons';

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            if (newTaskTitle.trim() === '') {
                setError('Title is required')
                return;
            }
            props.addItem(newTaskTitle.trim());
            setNewTaskTitle('');
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() === '') {
            setError('Title is required')
            return;
        }
        props.addItem(newTaskTitle.trim());
        setNewTaskTitle('');
    }

    return (
        <div>
            <TextField value={newTaskTitle}
                       variant={'outlined'}
                       label={'Type value'}
                       error={!!error}
                       helperText={error}
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
            />
            <IconButton onClick={addTask} color={'primary'}>
                <ControlPoint/>
            </IconButton>
        </div>
    )
});
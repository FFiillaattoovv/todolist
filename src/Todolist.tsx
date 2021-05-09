import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType, TaskType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    id: string
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export const Todolist = React.memo((props: PropsType) => {

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id]);

    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id]);

    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id]);

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id]);

    const changeTodolistTitle = useCallback((newtitle: string) => {
        props.changeTodolistTitle(props.id, newtitle);
    }, [props.changeTodolistTitle, props.id]);

    let tasksForTodolist = props.tasks;

    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                <IconButton aria-label="delete" onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    props.tasks.map(t => <Task task={t}
                                               removeTask={props.removeTask}
                                               changeTaskStatus={props.changeTaskStatus}
                                               changeTaskTitle={props.changeTaskTitle}
                                               todolistId={props.id}
                                               key={t.id}
                    />)
                }
            </div>
            <div>
                <Button variant={props.filter === 'all' ? 'contained' : 'text'}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={'primary'} variant={props.filter === 'active' ? 'contained' : 'text'}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={'secondary'} variant={props.filter === 'completed' ? 'contained' : 'text'}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    )
})

type TaskPropsType = {
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    task: TaskType
    todolistId: string
};

const Task = (props: TaskPropsType) => {
    const onRemoveHandler = () => {
        props.removeTask(props.task.id, props.todolistId)
    }
    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todolistId);
    }
    const onChangeTitleHandler = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId);
    }
    return <div className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox checked={props.task.isDone} onChange={onChangeStatusHandler}/>
        <EditableSpan title={props.task.title} onChange={onChangeTitleHandler}/>
        <IconButton aria-label="delete" onClick={onRemoveHandler}>
            <Delete/>
        </IconButton>
    </div>
}


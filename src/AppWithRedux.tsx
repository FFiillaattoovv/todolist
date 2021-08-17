import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistTC,
    fetchTodolistsTC,
    FilterValuesType,
    TodolistDomainType, addTodolistTC, changeTodolistTitleTC
} from './state/todolists-reducer';
import {addTaskTC, changeTaskStatusAC, changeTaskTitleAC, removeTaskTC} from './state/tasks-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {TaskStatuses} from './api/todolists-api';
import {TasksStateType} from './App';

function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists);
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodolistsTC());
    }, [])


    const removeTodolist = useCallback((todolistId: string) => {
        dispatch(removeTodolistTC(todolistId));
    }, [dispatch]);

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistTC(title));
    }, [dispatch]);

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(changeTodolistFilterAC(value, todolistId));
    }, [dispatch]);

    const changeTodolistTitle = useCallback((id: string, newTitle: string) => {
        dispatch(changeTodolistTitleTC(id, newTitle));
    }, [dispatch]);


    const removeTask = useCallback((taskId: string, todolistId: string) => {
        dispatch(removeTaskTC(taskId, todolistId));
    }, [dispatch]);

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(addTaskTC(title, todolistId));
    }, [dispatch]);

    const changeStatus = useCallback((taskId: string, status: TaskStatuses, todolistId: string) => {
        dispatch(changeTaskStatusAC(taskId, status, todolistId));
    }, [dispatch]);

    const changeTaskTitle = useCallback((taskId: string, newTitle: string, todolistId: string) => {
        dispatch(changeTaskTitleAC(taskId, newTitle, todolistId));
    }, [dispatch]);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map((tl) => {
                            let tasksForTodolist = tasks[tl.id];

                            return (
                                <Grid item>
                                    <Paper style={{padding: '10px'}}>
                                        <Todolist
                                            key={tl.id}
                                            title={tl.title}
                                            tasks={tasksForTodolist}
                                            removeTask={removeTask}
                                            changeFilter={changeFilter}
                                            addTask={addTask}
                                            changeTaskStatus={changeStatus}
                                            changeTaskTitle={changeTaskTitle}
                                            filter={tl.filter}
                                            id={tl.id}
                                            removeTodolist={removeTodolist}
                                            changeTodolistTitle={changeTodolistTitle}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

        </div>
    )
}

export default AppWithRedux;

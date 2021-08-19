import {appReducer, InitialStateType, setAppErrorAC, setAppStatusAC} from './app-reducer';

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        status: 'idle',
        error: null
    }
});

test('correct error should be set', () => {
    const endState = appReducer(startState, setAppErrorAC('SOME ERROR'));

    expect(endState.error).toBe('SOME ERROR');
});

test('correct status should be set', () => {
    const endState = appReducer(startState, setAppStatusAC('loading'));

    expect(endState.status).toBe('loading');
});

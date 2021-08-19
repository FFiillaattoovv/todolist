export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type SetErrorActionType = ReturnType<typeof setErrorAC>;
export type SetStatusActionType = ReturnType<typeof setStatusAC>;

type ActionsType = SetErrorActionType | SetStatusActionType;

export const setErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error: error} as const ;
};

export const setStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status: status} as const ;
};

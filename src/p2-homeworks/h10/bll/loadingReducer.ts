const initState = {
IsLoading: false

}
export type initStateType = {
    IsLoading:boolean
}
const TOGGLE_OF_LOADING = 'TOGGLE_OF_LOADING'

export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_OF_LOADING': {
            return {...state,IsLoading:!state.IsLoading}
        }
        default: return state
    }
}
type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
    return{
        type: TOGGLE_OF_LOADING
    } as const
} // fix any
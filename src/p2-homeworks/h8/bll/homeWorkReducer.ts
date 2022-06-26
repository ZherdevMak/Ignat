import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: MainACType): UserType[] => {

    switch (action.type) {
        case 'sort':
            if (action.payload === "up") {
                let newState = [...state]
                newState.sort((a, b) => a.name > b.name ? 1 : -1);
                return newState
            } else {
                let newState = [...state]
                newState.sort((a, b) => a.name < b.name ? 1 : -1);
                return newState
            }

        case 'check': {
            let newState = [...state]
            return newState.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
export type SortUpACType = ReturnType<typeof SortUpAC>
export type SortDownACType = ReturnType<typeof SortDownAC>
export type CheckACType = ReturnType<typeof CheckAC>
export type MainACType = SortUpACType | SortDownACType | CheckACType

export const SortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}
export const SortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}
export const CheckAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}
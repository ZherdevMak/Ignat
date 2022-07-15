
export type initStateProps = {theme:string}
export const initState:initStateProps ={theme:'defolt'}



export const themeReducer = (state:initStateProps = initState, action: changeThemeACType): initStateProps => { // fix any
    switch (action.type) {
        case "TOGGLE_OF_THEME": {
            return {...state,theme:action.themeName};
        }
        default: return state;
    }
};
type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (themeName:string) => {
    return{
        type: 'TOGGLE_OF_THEME',
        themeName:themeName
    } as const
}; // fix any
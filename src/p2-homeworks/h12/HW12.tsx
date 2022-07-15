import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, initStateProps} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {arrType} from "../h7/HW7";

const themes:arrType = ['dark', 'red', 'defolt'];

function HW12() {
    const themeState = useSelector<AppStoreType, initStateProps>(state => state.theme)
    const dispatch = useDispatch()
    const theme = themeState.theme
    const onChangeOption = (value:string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}></SuperRadio>

            <hr/>
        </div>
    );
}

export default HW12;

import React from 'react'
import {AffairType} from "./HW2";
import css from './affair.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    key1: any
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void
}


function Affair(props: AffairPropsType) {

    let setColor =  props.affair.priority === 'high' ? css.high : props.affair.priority === 'middle' ?
        css.middle : props.affair.priority === 'low' ? css.low : ""


    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <table className={css.affair_table} key={props.key1}>
            <tbody>
            <tr>
                <th className={css.colomn}>
                    <span>{props.affair._id}</span>
                </th>
                <th className={css.colomn}>
                    <span>{props.affair.name}</span>
                </th>
                <th className={css.colomn_3}>
                    <span className={setColor}>{props.affair.priority}</span>
                    <button onClick={deleteCallback}>X</button>
                </th>
            </tr>
            </tbody>
        </table>
    )
}

export default Affair

import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    key1: any
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    return (
        <div key={props.key1}>
            <span>{props.affair._id} {props.affair.name} {props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

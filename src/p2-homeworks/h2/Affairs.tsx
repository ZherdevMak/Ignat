import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import css from './Affairs.module.css'
import {v1} from "uuid";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <div key={v1()}><Affair // should work
            key1={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
        </div>
    ))

const setAll = () =>
    {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={css.affairs} key={'1'}>

            {mappedAffairs}

            <button className={css.button} onClick={setAll}>All</button>
            <button className={css.button} onClick={setHigh}>High</button>
            <button className={css.button} onClick={setMiddle}>Middle</button>
            <button className={css.button} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

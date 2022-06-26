import React, {useState} from 'react'
import {CheckAC, homeWorkReducer, SortDownAC, SortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import stl from './HW8.module.css'
export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople:UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={stl.table} key={p._id}>
            <span >{p.name}</span>
            <span className={stl.spanElement}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortDownAC()))
    const Check = () => setPeople(homeWorkReducer(initialPeople, CheckAC()))


    return (
        <div className={stl.wrapper}>
            <hr/>
            homeworks 8
            <hr/>
            {/*should work (должно работать)*/}

            {finalPeople}

            <span className={stl.spanButton}><SuperButton onClick={sortUp}>Sort up</SuperButton></span>
            <span className={stl.spanButton}><SuperButton onClick={sortDown}>Sort down</SuperButton></span>
            <span ><SuperButton onClick={Check}>Check</SuperButton></span >


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

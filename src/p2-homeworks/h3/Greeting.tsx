import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (props: GreetingPropsType
                                               // {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = s.noError // need to fix with (?:)
    props.error ? inputClass = s.error : inputClass = s.noError

    return (
        <div>
            <SuperInputText value={props.name} className={inputClass} onChange={props.setNameCallback} error={props.error}/>
            <SuperButton children={"add"} onClick={props.addUser}/>
            <span>{props.totalUsers}</span>
            {/*<div>*/}
            {/*    <input value={props.name} onChange={props.setNameCallback}*/}
            {/*           className={inputClass}/>*/}
            {/*    <button onClick={props.addUser}>add</button>*/}
            {/*    <span>{props.totalUsers}</span>*/}
            {/*</div>*/}
            {/*<div><span className={s.errorMessege}>{props.error}</span></div>*/}
        </div>

    )
}

export default Greeting

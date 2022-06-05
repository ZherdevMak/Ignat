import React, {ChangeEvent, ChangeEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (el: string) => void // need to fix any
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
            <div>
                <input value={props.name} onChange={(e) => props.setNameCallback(e.currentTarget.value)}
                       className={inputClass}/>
                <button onClick={props.addUser}>add</button>
                <span>{props.totalUsers}</span>
            </div>
            <div><span className={s.errorMessege}>{props.error}</span></div>
        </div>

    )
}

export default Greeting

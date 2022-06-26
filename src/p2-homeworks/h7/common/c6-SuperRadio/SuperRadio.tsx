import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {arrType} from "../../HW7";
import {v1} from "uuid";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: arrType
    onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let changedValue = e.currentTarget.value
        onChangeOption(changedValue)
    }

    const mappedOptions = options ? options.map((o) => (

         <label key= {v1()}>
            <input
                type={'radio'}
                name={name}
            checked={(o === value)} value={o} onChange = {onChangeCallback}
            />{o}
        </label>
        )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

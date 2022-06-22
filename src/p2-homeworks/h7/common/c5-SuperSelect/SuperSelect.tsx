import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {v1} from "uuid";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption: (option: string) => void
    value:string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?.map((el:string) => {
        return (
            <option key={v1()} value={el} >{el}</option>
        )
    })

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        let selectedValue = e.currentTarget.value
        onChangeOption(selectedValue)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect

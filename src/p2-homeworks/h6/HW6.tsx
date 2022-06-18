import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import stl from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'
function HW6() {
    let [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        value = restoreState('editable-span-value', value)
        setValue(value)
    }



    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={stl.spanWrapper}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />


            </div>
            <SuperButton className={stl.spanWrappe} onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6

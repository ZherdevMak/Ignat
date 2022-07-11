import React, {useState} from 'react'
import {SuperDoubleRangeSlider} from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value1: number) => {
        setValue1(value1)
    }
    const onChangeRange2 = (values: [number, number]) => {
        setValue1(values[0])
        setValue2(values[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{width: 25, display: "inline-block"}}>{value1}</span>
                <SuperRange value1={value1}
                            onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <SuperDoubleRangeSlider onChangeRange2={onChangeRange2} value={[value1, value2]}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

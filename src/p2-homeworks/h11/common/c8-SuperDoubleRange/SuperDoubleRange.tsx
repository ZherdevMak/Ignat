import React, {ChangeEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange2: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}
const useStyles = makeStyles({
    root: {
        marginLeft: 10, width: 115, marginBottom: 0, opacity: 1
    },
    rail: {opacity: 1},
    track: {height: 8},
});


export const SuperDoubleRangeSlider: React.FC<SuperDoubleRangePropsType> = ({onChangeRange2, value, ...restProps}) => {

    const classes = useStyles();

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange2(newValue as [number, number]);

    };

    return (
        <div>
            <span style={{width: 25, display: "inline-block", verticalAlign: "middle", height: 42}}>{value[0]}</span>
            <div style={{display: "inline-block"}} className={classes.root}>
                <Typography id="range-slider" gutterBottom>

                </Typography>
                <Slider
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="range-slider"
                />

            </div>
            <span style={{
                width: 25,
                display: "inline-block",
                verticalAlign: "middle",
                height: 42,
                marginLeft: 20
            }}>{value[1]}</span>
        </div>
    );
}

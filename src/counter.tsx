import React from 'react';
import './App.css';


type PropsType = {
    count: number
    incrementCount: () => void
    resetCount: () => void
    start: number
    maxValue: number
    changeMinValue: (value: number) => void
    error: boolean;
}


export function Counter(props: PropsType) {

    let {count, incrementCount, resetCount, maxValue, start, error} = props;

    let disabledIncrementCount = count === maxValue || count < 0 || start > maxValue || start < 0 || maxValue < 0;
    let disabledResetCount = count === start || count <= 0;
    let colorCount = count === maxValue ? 'color' : '';
    let errorMess = error ? 'Error' : count;


    return <div style={{textAlign: "center", marginBottom: '5px'}}>
        <div className={colorCount}>{errorMess}</div>
        <button disabled={disabledIncrementCount} onClick={incrementCount}>Inc</button>
        <button disabled={disabledResetCount} onClick={resetCount}>Reset</button>
    </div>
}


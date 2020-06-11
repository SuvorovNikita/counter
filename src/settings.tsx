import React, {ChangeEvent} from "react";


type PropsType = {
    maxValue: number
    start: number
    setMaxValue: (value: number) => void
    setStart: (value: number) => void
    setSettings: () => void

}

export function Settings(props: PropsType) {
    let {setMaxValue, setStart, maxValue, start, setSettings} = props;

    function changeValueMax(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(+e.currentTarget.value)
    }

    function changeValueMin(e: ChangeEvent<HTMLInputElement>) {
        setStart(+e.currentTarget.value)
    }

    let disabled = maxValue <= 0 || start < 0 || start === maxValue
    let minError = start < 0 ? 'error' : ''
    let maxError = maxValue < 0 ? 'error' : ''


    return <div className='wrapperSettings'>
        <span> Max Value</span>
        <input
            className={maxError}
            onChange={changeValueMax}
            type="number"
            value={maxValue}
        />
        <span> Start Value</span>
        <input
            className={minError}
            value={start}
            onChange={changeValueMin}
            type="number"/>
        <button disabled={disabled} onClick={setSettings}>Set</button>
    </div>
}
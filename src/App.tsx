import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './counter';
import {Settings} from "./settings";


function App() {

    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [start, setStart] = useState(0)
    const [error, setError] = useState(false)


    const incrementCount = () => setCount(count + 1);
    const resetCount = () => setCount(start);

    function changeMaxValue(value: number) {
        if (value < 0) {
            setError(true);
        } else {
            setError(false)
        }
        setMaxValue(value)
    }

    function changeMinValue(value: number) {
        if (value < 0) {
            setError(true);
        } else {
            setError(false)
        }
        setStart(value)
    }

    function setSettings() {
        setCount(maxValue)
        setCount(start)
        localStorage.setItem('maxValue', (maxValue.toString()))
        localStorage.setItem('start', (start.toString()))
    }

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('maxValue')));
        setStart(Number(localStorage.getItem('start')));
    }, [])

    return (
        <div className="App">
            <Settings
                setSettings={setSettings}
                setStart={changeMinValue}
                setMaxValue={changeMaxValue}
                maxValue={maxValue}
                start={start}
            />
            <Counter count={count}
                     error={error}
                     changeMinValue={changeMinValue}
                     resetCount={resetCount}
                     incrementCount={incrementCount}
                     maxValue={maxValue}
                     start={start}
            />
        </div>
    );
}

export default App;

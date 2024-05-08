import React, { useState } from 'react'
import Button from '@mui/material/Button';
import '../App.css'
const Count = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleIncrementRandom = () => {
        const randomIncrement = Math.floor(Math.random() * 10) + 1;
        setCount(prevCount => prevCount + randomIncrement);
    };

    const handleIncrementToOdd = () => {
        setCount(prevCount => prevCount % 2 === 0 ? prevCount + 1 : prevCount + 2);
    };

    const handleDecrementByInput = () => {
        const decrementValue = parseInt(inputValue);
        if (!isNaN(decrementValue)) {
            setCount(prevCount => prevCount - decrementValue);
            setInputValue('');
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className='center-items'>
            <div >
                <h1 className='input-div-styles'>Count : &nbsp;  <span className='count_color'> {count}</span></h1>
                <Button size="small" variant="contained" color="secondary" onClick={handleIncrement}>Increment</Button> &nbsp;
                <Button size="small" variant="contained" color="success" onClick={handleIncrementRandom}>Increment Randomly</Button> &nbsp;
                <Button size="small" variant="contained" color='secondary' onClick={handleIncrementToOdd}>Increment to Odd</Button>
                <p> 
                    <div>This button decrements the count by the value entered in the input field :</div>
                   <div>
                   <input type="text" className='input-styles' value={inputValue} onChange={handleInputChange} /> &nbsp;
                <Button size="small" variant="contained" onClick={handleDecrementByInput}>Decrement by Input</Button>
                   </div>
                   </p>
               <div> Reset The Count: <Button size="small" variant="contained" color="secondary" onClick={handleReset}>Reset</Button></div>
            </div>
            </div>
        </>
    )
}

export default Count
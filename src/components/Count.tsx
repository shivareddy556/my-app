import React, { useReducer } from 'react';
import Button from '@mui/material/Button';
import '../App.css';

const initialState = {
  count: 0,
  inputValue: ''
};

const reducer = (state: { count: number; inputValue: string; }, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'INCREMENT_RANDOM':
      return { ...state, count: state.count + Math.floor(Math.random() * 10) + 1 };
    case 'INCREMENT_TO_ODD':
      return { ...state, count: state.count % 2 === 0 ? state.count + 1 : state.count + 2 };
    case 'DECREMENT_BY_INPUT':
      const decrementValue = parseInt(state.inputValue);
      return !isNaN(decrementValue)
        ? { ...state, count: state.count - decrementValue, inputValue: '' }
        : state;
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT', payload: 1 });
  };

  const handleIncrementRandom = () => {
    dispatch({
        type: 'INCREMENT_RANDOM',
        payload: null
    });
  };

  const handleIncrementToOdd = () => {
    dispatch({
        type: 'INCREMENT_TO_ODD',
        payload: null
    });
  };

  const handleDecrementByInput = () => {
    dispatch({
        type: 'DECREMENT_BY_INPUT',
        payload: null
    });
  };

  const handleReset = () => {
    dispatch({
        type: 'RESET',
        payload: null
    });
  };

  const handleInputChange = (e: { target: { value: any; }; }) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
  };

  return (
    <>
      <div className='center-items'>
        <div>
          <h1 className='input-div-styles'>Count : &nbsp;  <span className='count_color'> {state.count}</span></h1>
          <Button size="small" variant="contained" color="secondary" onClick={handleIncrement}>Increment</Button> &nbsp;
          <Button size="small" variant="contained" color="success" onClick={handleIncrementRandom}>Increment Randomly</Button> &nbsp;
          <Button size="small" variant="contained" color='secondary' onClick={handleIncrementToOdd}>Increment to Odd</Button>
          <p> 
            <div>This button decrements the count by the value entered in the input field :</div>
            <div>
              <input type="text" className='input-styles' value={state.inputValue} onChange={handleInputChange} /> &nbsp;
              <Button size="small" variant="contained" onClick={handleDecrementByInput}>Decrement by Input</Button>
            </div>
          </p>
          <div> Reset The Count: <Button size="small" variant="contained" color="secondary" onClick={handleReset}>Reset</Button></div>
        </div>
      </div>
    </>
  );
}

export default Count;

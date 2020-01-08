import React, { useState, useReducer } from 'react';

const myReducer = (state, action) => {
    switch(action.type)  {
        case('reset'):
            return  {
                ...state,
                count: action.initialCount
            };
        case('countUp'):
            return  {
                ...state,
                count: state.count + 1
            };
        case('countDown'):
            return  {
                ...state,
                count: state.count - 1
            };
        default:
            return  state;
    }
};

// 使用 useState
// function Counter({initialCount}) {
//     const [count, setCount] = useState(initialCount);
//     return (
//         <div>
//             Count: {count} &nbsp;
//             <button className={'btn'} onClick={() => setCount(initialCount)}>Reset</button>
//             <button className={'btn'} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//             <button className={'btn'} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//         </div>
//     );
// }

// 使用 useReducer
// function Counter({initialCount}) {
//     const [state, dispatch] = useReducer(myReducer, { count: initialCount });
//     return (
//         <div>
//             Count: {state.count} &nbsp;
//             <button className={'btn btn-default'} onClick={() => dispatch({ type: 'reset', initialCount: initialCount })}>Reset</button>&nbsp;
//             <button className={'btn btn-default'} onClick={() => dispatch({ type: 'countDown' })}>-</button>&nbsp;
//             <button className={'btn btn-default'} onClick={() => dispatch({ type: 'countUp' })}>+</button>
//         </div>
//     );
// }

// 创建自己的 Hooks
const useCounter = (initialCount) => {
    const [state, dispatch] = useReducer(myReducer, { count: initialCount });
    return [state, dispatch]
};

const Counter = ({initialCount}) => {
    const [state, dispatch] = useCounter(initialCount);
    return (
        <div>
            Count: {state.count} &nbsp;
            <button className={'btn btn-default'} onClick={() => dispatch({ type: 'reset', initialCount: initialCount })}>Reset</button>&nbsp;
            <button className={'btn btn-default'} onClick={() => dispatch({ type: 'countDown' })}>-</button>&nbsp;
            <button className={'btn btn-default'} onClick={() => dispatch({ type: 'countUp' })}>+</button>
        </div>
    );
};

export default Counter;
import React from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>React Counter</h1>
            <div className="count">{count}</div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

ReactDOM.render(<Counter />, document.getElementById('root'));

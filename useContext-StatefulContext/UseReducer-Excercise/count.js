import React, { createContext, useReducer } from "react";

/*
implement useReducer in this component
- set an initial state for count and likedNumbers as an object
- create a reducer function
    - make sure to always return a NEW object!
- dispatch actions from increment, decrement, and like
*/

func
const CountContext = createContext()

function CountProvider({ children }) {
    // const [count, setCount] = useState(0);
    // const [likedNumbers, setLikedNumbers] = useState({});
    const [] = useReducer
    
    function increment() {
        setCount((count) => count + 1);
    }

    function decrement() {
        setCount((count) => count - 1);
    }

    function like() {
        setLikedNumbers((likedNumbers) => {
            const likes = (likedNumbers[count] || 0) + 1;
            return {
                ...likedNumbers,
                [count]: likes,
            };
        });
    }
    
    const value = {
        count,
        likedNumbers,
        increment,
        decrement,
        like
    }
    
    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContext, CountProvid
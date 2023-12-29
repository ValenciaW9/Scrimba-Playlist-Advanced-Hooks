import React, { createContext, useState } from "react";
/*
create a CountContext and CountProvider
- wrap the application with CountProvider
- use the state variables in the Counter component as the values for CountContext
- connect the Counter, Controls, and Likes components to CountProvider
*/

const CountContext = createContext()

function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const [likedNumbers, setLikedNumbers] = useState({});
    
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

export { CountContext, CountProvider }
import React, { createContext, useReducer } from "react";

/*
implement useReducer in this component
- set an initial state for count and likedNumbers as an object
- create a reducer function
    - make sure to always return a NEW object!
- dispatch actions from increment, decrement, and like
*/ 

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1
            }
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            }
        case "likeNumber":
            return {
                ...state,
                likedNumbers: {
                    ...state.likedNumbers,
                    [state.count]: (state.likedNumbers[state.count] || 0) + 1
                }
            }
        default:
            return state
    }
}

const CountContext = createContext()

function CountProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        likedNumbers: {}
    })
    
    const { count, likedNumbers } = state
    
    // {count: 6, likedNumbers: {2: 4, 3: 5}}
    console.log(state)
    
    function increment() {
        dispatch({ type: "increment" })
    }

    function decrement() {
        dispatch({ type: "decrement" })
    }

    function like() {
        dispatch({ type: "likeNumber" })
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
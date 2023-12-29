import React, { createContext, useState } from "react";
import { CountProvider } from ".context/count"




const beforeContext = <img src="https://i.imgur.com/ihbDmf7.png" alt="before context" width="600" />
const aftercontext = <img src="https://i.imgur.com/lFesQRn.png" alt="after context" width="600" />

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
    
    const value = {
        count,
        setCount,
        likedNumbers,
        setLikedNumbers
    }
    
    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}
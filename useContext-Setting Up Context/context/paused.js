import React, { createContext } from "react"

// create the context object
const PauseContext = createContext()

// create the context provider (component)
function PauseProvider({ children }) {
    
    return (
        <PauseContext.Provider value={true}>
            {children}
        </PauseContext.Provider>
    )
}

// export
export { PauseContext, PauseProvider }

// ReactDOM.render(
//    <PausedProvider>
//      <App />
//    </PausedProvicer>
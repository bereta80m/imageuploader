"use client"
import { createContext,useContext, useState } from "react"

const GlobalContext = createContext({})

function GlobalProvider({children}) {
    const [progress, setProgress] = useState(0);
    const [onComplete, setOnComplete] = useState(false)

  return (
    <GlobalContext.Provider value={{progress, setProgress,onComplete, setOnComplete}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export const UseGlobal = ()=> useContext(GlobalContext)
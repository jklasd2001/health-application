import React, { createContext, ReactNode } from 'react'

const AppContext = createContext({
  token: '',
})

export const useAppContext = () => {
  return React.useContext(AppContext)
}

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  return <AppContext.Provider value={{ token: '' }}>{children}</AppContext.Provider>
}

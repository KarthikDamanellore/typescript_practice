import React, { useState, createContext, ReactNode, useContext } from 'react'


interface ArrayObjectContextTypes{
    arrayObjectValue:{key:string}[];
    setArrayObjectValue:(value:{key:string}[])=>void;
}

export const ArrayObjectContext=createContext<ArrayObjectContextTypes | undefined >(undefined)

interface ArrayObjectContextProviderProps{
    children:ReactNode;
}

export const ArrayObjectContextProvider = ({children}:ArrayObjectContextProviderProps) => {

    const [arrayObjectValue, setArrayObjectValue]=useState<{key:string}[]>([
    { key: 'Object 1' },
    { key: 'Object 2' },
    { key: 'Object 3' },]);
  return (
   <ArrayObjectContext.Provider value={{arrayObjectValue, setArrayObjectValue}}>
    {children}
   </ArrayObjectContext.Provider>
  )
}


export const useArrayObjectContext=()=>{
    const context = useContext(ArrayObjectContext)
    if(!context)
    {
        throw new Error('useArrayOfObjectContext must be used within an ArrayOfObjectContextProvider')
    }

    return context;
}
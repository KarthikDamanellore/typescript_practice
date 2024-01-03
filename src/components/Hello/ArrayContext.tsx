import React,{ReactNode, createContext, useContext, useState} from 'react'

interface ArrayContextType{
    arrayValue:string[];
    setArrayValue:(value:string[])=>void;
}

export const ArrayContext = createContext<ArrayContextType | undefined>(undefined);

interface ArrayContextProviderProps{
    children:ReactNode;
}

export const ArrayContextProvider = ({children}:ArrayContextProviderProps) => {

    const[arrayValue, setArrayValue]=useState<string[]>(['Item1', 'Item2', 'Item3'])
  return (
    <ArrayContext.Provider value={{arrayValue, setArrayValue}}>
        {children}
    </ArrayContext.Provider>
  ) 
}

export default ArrayContextProvider;

export const useArrayContext=()=>{
    const context = useContext(ArrayContext)
    if(!context)
    {
        throw  new Error('useArrayContext must be used within an ArrayContextProvider')
    }

    return context;
}
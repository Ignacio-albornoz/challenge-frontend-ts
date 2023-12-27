import React, { createContext, useState } from "react"

import { SearchContextType } from "../models/searchContextModel"

/**Contexto Search, es donde se guarda y consulta las busqueda del usuario */

export const SearchContext = createContext({})

// Remove the duplicate import statements

export function SearchProvider({ children }: { children: React.ReactNode }): SearchContextType {
    const [search, setSearch] = useState('')
    return (
        <SearchContext.Provider value={{
            search, setSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}
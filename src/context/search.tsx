import React, { createContext, useState } from "react"

import { SearchContextType } from "../models/searchContextModel"

/**Contexto Search, es donde se guarda y consulta las busqueda del usuario */

export const SearchContext = createContext<SearchContextType>({} as SearchContextType)

// Remove the duplicate import statements

export function SearchProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [search, setSearch] = useState<string>('')
    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}
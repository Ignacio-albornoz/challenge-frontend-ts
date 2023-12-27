import React, { createContext, useState } from "react"


/**Contexto Search, es donde se guarda y consulta las busqueda del usuario */

export const SearchContext = createContext({})

// Remove the duplicate import statements
// import React, { createContext, useState } from "react"

export function SearchProvider({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState('')
    return (
        <SearchContext.Provider value={{
            search, setSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}
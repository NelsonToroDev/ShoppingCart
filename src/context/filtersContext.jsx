import { createContext, useState } from 'react'

// 1. Create the context we will use this reference to consume from the context
export const FiltersContext = createContext()

// 2. Create the context provider with the object or state we want to share
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 100
  })
  
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

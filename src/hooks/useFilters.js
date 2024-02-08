import { useContext } from 'react'
import { FiltersContext } from '../context/filtersContext.jsx'

export function useFilters() {
  // 3. Consume the object specified in the context provider in this case { category: 'all', maxPrice: 100}
  const { filters, setFilters } = useContext(FiltersContext)
  console.log({ filters })

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price <= filters.maxPrice &&
        (filters.category === 'all' || product.category === filters.category)
    )
  }

  return { filters, filterProducts, setFilters }
}

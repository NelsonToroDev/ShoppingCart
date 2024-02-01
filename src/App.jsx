import { products as initialProducts } from './mocks/producs.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './components/config.js'

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 100
  })

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price <= filters.maxPrice &&
        (filters.category === 'all' || product.category === filters.category)
    )
  }

  return { filters, filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App

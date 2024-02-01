import { products as initialProducts } from './mocks/producs.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import Header from './components/Header.jsx'

function App() {
  const [products] = useState(initialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    maxPrice: 100
  })

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.price <= filter.maxPrice &&
        (filter.category === 'all' || product.category === filter.category)
    )
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App

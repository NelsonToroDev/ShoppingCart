import { products } from './mocks/producs.json'
import { Products } from './components/Products.jsx'

function App() {
  return (
    <>
      <h1>Shopping Cart 🛒 </h1>
      <Products products={products} />
    </>
  )
}

export default App

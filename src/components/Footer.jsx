import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

// Props drilling
export default function Footer() {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* Used as debugger to now values of some props */}
      {/* {JSON.stringify(filters, null, 2)} */}
      {cart.map((product) => product.title + " Qty: " + product.quantity)}
      <h4>Technical Practice with React</h4>
      <h5>Shopping Cart with useContext and useReducer</h5>
      {/* <Filters onChange={changeFilters} /> */}
    </footer>
  )
}

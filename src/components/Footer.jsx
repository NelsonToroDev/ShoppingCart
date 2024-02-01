import './Footer.css'

// Props drilling
export default function Footer({filters}) {
  return (
    <footer className='footer'>
      {/* Used as debugger to now values of some props */}
      {JSON.stringify(filters, null, 2)}
      <h4>Technical Practice with React</h4>
      <h5>Shopping Cart with useContext and useReducer</h5>
      {/* <Filters onChange={changeFilters} /> */}
    </footer>
  )
}

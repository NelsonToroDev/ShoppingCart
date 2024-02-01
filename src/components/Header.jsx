import Filters from './Filters.jsx'

// Props drilling
export default function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}

import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export default function Filters() {
  const { filters, setFilters } = useFilters()
  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMaxPriceFilter = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // Bad: We are sending the native function to update the state of a component to a child
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Max Price</label>
        <input
          type='range'
          id={maxPriceFilterId}
          min='10'
          max='10000'
          onChange={handleChangeMaxPriceFilter}
          value={filters.maxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>
      <div>
        <label htmlFor={{ categoryFilterId }}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}

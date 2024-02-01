import { useState, useId } from 'react'
import './Filters.css'

export default function Filters({ onChange }) {
  const [maxPriceFilter, setMaxPriceFilter] = useState(100)
  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMaxPriceFilter = (event) => {
    setMaxPriceFilter(event.target.value)
    onChange((prevState) => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // Bad: We are sending the native function to update the state of a component to a child
    onChange((prevState) => ({
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
        />
        <span>${maxPriceFilter}</span>
      </div>
      <div>
        <label htmlFor={{categoryFilterId}}>Category</label>
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

import React from 'react'
import Filter from '../filter/Filter'

function Sidebar({filter,setFilter, products}) {

  function resetFilter(){
      setFilter({
        price: null,
        size:[],
        brand: [],
        gender: "all"
      })
  }

  return (
    <div className='sidebar'>
        <button className='btn' onClick={resetFilter}>Reset</button>

        <Filter filter={filter} setFilter={setFilter} products={products} />
    </div>
  )
}

export default Sidebar
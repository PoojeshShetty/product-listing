import './App.css';
import products from './products.json'
import Navbar from './component/navbar/Navbar';
import ProductList from './component/productList/ProductList';
import Sidebar from './component/sidebar/Sidebar';
import { useState } from 'react';
import { filterPrice, filterByBrand, filterBySize, filterByGender } from './utils/utils'

function App() {

  const [filter, setFilter] = useState({
    price: null,
    size:[],
    brand: [],
    gender: "all"
  })

  console.log(filter)

  var initialProduct = products
  initialProduct = filterPrice(initialProduct,filter.price)
  initialProduct = filterByBrand(initialProduct, filter.brand)
  initialProduct = filterBySize(initialProduct, filter.size)
  initialProduct = filterByGender(initialProduct, filter.gender)
  
  return (
    <div className="App">
      <Navbar />

      <Sidebar filter={filter} setFilter={setFilter} products={products} />

      <ProductList products={initialProduct} />
      
    </div>
  );
}

export default App;

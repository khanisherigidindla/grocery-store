import React from 'react'
import { Link } from 'react-router-dom'

const SearchComp = () => {
  return (
    <div className='sidebarPanel'>
      <div className="sidebarHeader">
        <h2 className="sidebarTitle">🛒 Shop by Category</h2>
      </div>
      <nav className="categoryNav">
        <Link to="/all-products" className="categoryLink">
          <span className="categoryIcon">📦</span>
          All Products
        </Link>
        <Link to="/fruit-products" className="categoryLink">
          <span className="categoryIcon">🍎</span>
          Fresh Fruits
        </Link>
        <Link to="/vegetables" className="categoryLink">
          <span className="categoryIcon">🥬</span>
          Vegetables
        </Link>
        <Link to="/electronics" className="categoryLink">
          <span className="categoryIcon">📱</span>
          Electronics
        </Link>
        <Link to="/food-grains" className="categoryLink">
          <span className="categoryIcon">🌾</span>
          Food Grains
        </Link>
      </nav>
    </div>
  )
}

export default SearchComp
import React, { useState } from 'react';


const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    description: 'Freshly picked organic tomatoes from local farms.',
    price: 3.50,
    imgUrl: 'https://via.placeholder.com/150',
    category: 'Vegetable',
  },
  {
    id: 2,
    name: 'Fresh Potatoes',
    description: 'Locally harvested fresh potatoes, ideal for any dish.',
    price: 2.00,
    imgUrl: 'https://via.placeholder.com/150',
    category: 'Vegetable',
  },
  {
    id: 3,
    name: 'Handpicked Beans',
    description: 'Organic handpicked beans from the best farms.',
    price: 4.00,
    imgUrl: 'https://via.placeholder.com/150',
    category: 'Grain',
  },
  {
    id: 4,
    name: 'Free Range Eggs',
    description: 'Fresh, farm-raised eggs from free-range chickens.',
    price: 5.00,
    imgUrl: 'https://via.placeholder.com/150',
    category: 'Dairy',
  },
];

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-container">
      <h1 className="products-title">Shop Fresh Agricultural Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          <option value="Vegetable">Vegetables</option>
          <option value="Grain">Grains</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imgUrl} alt={product.name} className="product-img" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">${product.price.toFixed(2)} / kg</span>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

import React from 'react';


function AgriMarket() {
  return (
    <div className="agri-market-container">
      <h1 className="agri-market-title">Welcome to AgriMarket</h1>
      <p className="agri-market-description">
        AgriMarket is a platform for farmers and buyers to connect and exchange agricultural products.
        Discover fresh, locally grown produce, grains, and more directly from the fields to your doorstep.
      </p>
      
      <div className="product-list">
        <h2>Featured Products</h2>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <div className="product-details">
            <h3>Organic Tomatoes</h3>
            <p>Freshly picked organic tomatoes from local farms.</p>
            <span className="product-price">$3.50 / kg</span>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 2" />
          <div className="product-details">
            <h3>Fresh Potatoes</h3>
            <p>Locally harvested fresh potatoes, ideal for any dish.</p>
            <span className="product-price">$2.00 / kg</span>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product 3" />
          <div className="product-details">
            <h3>Handpicked Beans</h3>
            <p>Organic handpicked beans from the best farms.</p>
            <span className="product-price">$4.00 / kg</span>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="market-info">
        <h2>About AgriMarket</h2>
        <p>
          At AgriMarket, we prioritize sustainability and support local farmers. Our goal is to provide a seamless
          platform where you can easily find fresh, organic products grown right here in your community. Join us in
          supporting the local agricultural economy and eating fresh.
        </p>
      </div>
    </div>
  );
}

export default AgriMarket;

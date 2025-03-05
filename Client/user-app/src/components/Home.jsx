import React from 'react';


function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to FarmExchange Rwanda</h1>
        <p>Your go-to platform for fresh and locally sourced agricultural products</p>
        <a href="#products" className="cta-button">Browse Products</a>
      </header>

      <section className="home-about">
        <div className="about-text">
          <h2>Connecting Farmers and Consumers</h2>
          <p>
            At AgriMarket, we believe in making fresh and organic agricultural products accessible to everyone.
            Our platform connects local farmers with consumers to provide the freshest produce directly from the farm to your table.
            Whether you are looking for vegetables, grains, dairy products, or other farm goods, we’ve got you covered!
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://via.placeholder.com/500"
            alt="Farm produce"
            className="about-img"
          />
        </div>
      </section>

      <section className="home-highlights">
        <h2>Why Shop with Us?</h2>
        <div className="highlights">
          <div className="highlight">
            <h3>Fresh & Organic</h3>
            <p>We source only the freshest, organic products from trusted local farmers.</p>
          </div>
          <div className="highlight">
            <h3>Affordable Prices</h3>
            <p>Enjoy high-quality farm produce at affordable, competitive prices.</p>
          </div>
          <div className="highlight">
            <h3>Direct to Your Doorstep</h3>
            <p>Experience the convenience of having your farm-fresh goods delivered right to your doorstep.</p>
          </div>
        </div>
      </section>

      <section className="home-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"AgriMarket has transformed the way I shop for fresh produce. I love the convenience of ordering directly from local farmers. The quality is unmatched!"</p>
          <span>- John Doe, Regular Customer</span>
        </div>
        <div className="testimonial">
          <p>"As a farmer, I’m grateful for AgriMarket for helping me reach more customers. The platform is user-friendly and efficient."</p>
          <span>- Jane Smith, Local Farmer</span>
        </div>
      </section>

      <section className="home-call-to-action">
        <h2>Start Shopping Now</h2>
        <p>Don't miss out on our wide range of fresh products. Click below to explore and shop!</p>
        <a href="#products" className="cta-button">Shop Now</a>
      </section>
    </div>
  );
}

export default Home;

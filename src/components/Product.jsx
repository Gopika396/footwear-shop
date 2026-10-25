import React from "react";

import run from "../assets/images/run.jpg";
import walk from "../assets/images/walk.jpg";
import training from "../assets/images/training.jpg";
import street from "../assets/images/street.jpg";
import highTop from "../assets/images/high-top.jpg";
import women from "../assets/images/women.jpg";
import casual from "../assets/images/casual.jpg";
import tennis from "../assets/images/tennis.jpg";
import gym from "../assets/images/gym.jpg";
import formal from "../assets/images/formal.jpg";
import slides from "../assets/images/slides.jpg";
import hiking from "../assets/images/hiking.jpg";

function Product() {

  const products = [
    {
      name: "Velocity Run",
      image: run,
      price: "₹3,999",
      category: "Running"
    },
    {
      name: "Daily Walk",
      image: walk,
      price: "₹2,699",
      category: "Walking"
    },
    {
      name: "Train X",
      image: training,
      price: "₹3,599",
      category: "Training"
    },
    {
      name: "Street One",
      image: street,
      price: "₹2,999",
      category: "Street"
    },
    {
      name: "High Street",
      image: highTop,
      price: "₹3,499",
      category: "Sneakers"
    },
    {
      name: "Aura Women",
      image: women,
      price: "₹2,799",
      category: "Lifestyle"
    },
    {
      name: "Urban Move",
      image: casual,
      price: "₹2,499",
      category: "Casual"
    },
    {
      name: "Court Pro",
      image: tennis,
      price: "₹3,299",
      category: "Tennis"
    },
    {
      name: "Gym Force",
      image: gym,
      price: "₹3,199",
      category: "Training"
    },
    {
      name: "Executive Lace",
      image: formal,
      price: "₹3,899",
      category: "Formal"
    },
    {
      name: "Aero Slides",
      image: slides,
      price: "₹1,499",
      category: "Slides"
    },
    {
      name: "Trail Peak",
      image: hiking,
      price: "₹4,499",
      category: "Outdoor"
    }
  ];

  const addToCart = (name, price) => {

    console.log(
      `${name} added to cart - ${price}`
    );

    alert(`${name} added to cart`);
  };

  return (
    <main className="aura-page">

      <section className="aura-title">

        <div className="container">

          <div className="title-number">
            02
          </div>

          <h1>
            THE COLLECTION
          </h1>

          <p>
            Performance, lifestyle and everyday footwear.
          </p>

        </div>

      </section>

      <section className="aura-products">

        <div className="container">

          <div className="row g-4">

            {products.map((product, index) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
              >

                <div className="aura-product-card">

                  <div className="aura-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span>
                      {product.category}
                    </span>

                  </div>

                  <div className="aura-product-info">

                    <h3>
                      {product.name}
                    </h3>

                    <strong>
                      {product.price}
                    </strong>

                    <button
                      onClick={() =>
                        addToCart(
                          product.name,
                          product.price
                        )
                      }
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Product;
import React, { useState } from "react";

function Cart() {

  const [cart, setCart] = useState([
    {
      name: "Velocity Run",
      price: 3999,
      quantity: 1
    }
  ]);

  const changeQuantity = (index, amount) => {

    const updated = [...cart];

    updated[index].quantity += amount;

    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }

    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <main className="aura-page">

      <section className="aura-title">

        <div className="container">

          <div className="title-number">
            03
          </div>

          <h1>
            YOUR CART
          </h1>

          <p>
            Review your selected footwear.
          </p>

        </div>

      </section>

      <section className="aura-cart">

        <div className="container">

          {cart.length === 0 ? (

            <div className="aura-empty">

              <h2>
                Your cart is empty.
              </h2>

              <p>
                Choose a pair from our collection.
              </p>

            </div>

          ) : (

            <div className="row g-5">

              <div className="col-lg-8">

                {cart.map((item, index) => (

                  <div
                    className="aura-cart-item"
                    key={index}
                  >

                    <div>

                      <span>
                        PRODUCT
                      </span>

                      <h3>
                        {item.name}
                      </h3>

                    </div>

                    <div className="aura-quantity">

                      <button
                        onClick={() =>
                          changeQuantity(index, -1)
                        }
                      >
                        -
                      </button>

                      <strong>
                        {item.quantity}
                      </strong>

                      <button
                        onClick={() =>
                          changeQuantity(index, 1)
                        }
                      >
                        +
                      </button>

                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>

                ))}

              </div>

              <div className="col-lg-4">

                <div className="aura-summary">

                  <span>
                    ORDER TOTAL
                  </span>

                  <h2>
                    ₹{total}
                  </h2>

                  <p>
                    Standard delivery included.
                  </p>

                  <button>
                    PROCEED TO CHECKOUT
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Cart;
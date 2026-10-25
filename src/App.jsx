import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Check from "./components/Check";

function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg aura-navbar fixed-top">
        <div className="container">

          <Link className="navbar-brand" to="/">
            STEPAURA
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#auraNav"
            aria-controls="auraNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="auraNav"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link size-link" to="/check">
                  Check Size
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      {/* PAGE ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/check" element={<Check />} />
      </Routes>

      {/* FOOTER */}

      <footer className="aura-footer">

        <div className="container">

          <div className="row gy-5">

            <div className="col-lg-4 col-md-6">

              <h2>STEPAURA</h2>

              <p>
                Performance-inspired footwear for people
                who keep moving.
              </p>

            </div>

            <div className="col-lg-4 col-md-6">

              <h5>Navigation</h5>

              <div className="aura-footer-links">

                <Link to="/">
                  Home
                </Link>

                <Link to="/product">
                  Product
                </Link>

                <Link to="/cart">
                  Cart
                </Link>

                <Link to="/about">
                  About
                </Link>

                <Link to="/contact">
                  Contact
                </Link>

                <Link to="/check">
                  Check Foot Size
                </Link>

              </div>

            </div>

            <div className="col-lg-4 col-md-12">

              <h5>Contact</h5>

              <p>
                Phone: 0000000
              </p>

              <p>
                Email: support@stepaura.com
              </p>

              <p>
                Monday - Saturday
              </p>

            </div>

          </div>

          <div className="aura-bottom">
            © 2026 StepAura. All Rights Reserved.
          </div>

        </div>

      </footer>
    </>
  );
}

export default App;
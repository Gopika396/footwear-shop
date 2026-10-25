import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import run from "../assets/images/run.jpg";
import walk from "../assets/images/walk.jpg";
import training from "../assets/images/training.jpg";

function Home() {
  return (
    <main className="aura-main">

      {/* HERO */}

      <section className="aura-hero">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <div className="hero-number">
                01
              </div>

              <h1>
                MOVE
                <br />
                WITHOUT
                <br />
                LIMITS.
              </h1>

              <p>
                Footwear created for running, training,
                everyday movement and modern street style.
              </p>

              <Link
                to="/product"
                className="aura-btn"
              >
                SHOP NOW
              </Link>

            </div>

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <div className="aura-hero-image">

                <img
                  src={hero}
                  alt="Modern footwear"
                />

                <div className="hero-tag">
                  NEW SEASON
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="aura-intro">

        <div className="container">

          <div
            className="intro-content"
            data-aos="fade-up"
          >

            <span>
              BUILT TO MOVE
            </span>

            <h2>
              Find the pair that
              matches your pace.
            </h2>

            <p>
              From morning walks to evening training,
              StepAura brings together different footwear
              styles for different ways of moving.
            </p>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="aura-categories">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
            >

              <div className="aura-category">

                <img
                  src={run}
                  alt="Running shoes"
                />

                <div>

                  <span>
                    01
                  </span>

                  <h3>
                    Running
                  </h3>

                  <p>
                    Light and responsive.
                  </p>

                </div>

              </div>

            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="aura-category">

                <img
                  src={walk}
                  alt="Walking shoes"
                />

                <div>

                  <span>
                    02
                  </span>

                  <h3>
                    Walking
                  </h3>

                  <p>
                    Comfort for every step.
                  </p>

                </div>

              </div>

            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="aura-category">

                <img
                  src={training}
                  alt="Training shoes"
                />

                <div>

                  <span>
                    03
                  </span>

                  <h3>
                    Training
                  </h3>

                  <p>
                    Made for active sessions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SIZE SECTION */}

      <section className="aura-banner">

        <div className="container">

          <div
            className="banner-content"
            data-aos="zoom-in"
          >

            <span>
              YOUR SIZE MATTERS
            </span>

            <h2>
              Not sure about your size?
            </h2>

            <p>
              Follow our simple foot measurement guide
              before ordering.
            </p>

            <Link to="/check">
              Check Your Foot Size
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
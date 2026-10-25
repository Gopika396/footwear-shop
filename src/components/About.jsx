import React from "react";

function About() {
  return (
    <main className="aura-page">

      <section className="aura-title">

        <div className="container">

          <div className="title-number">
            04
          </div>

          <h1>
            ABOUT STEPAURA
          </h1>

          <p>
            Footwear for different ways of moving.
          </p>

        </div>

      </section>

      <section className="aura-about">

        <div className="container">

          <div className="row g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <span>
                OUR APPROACH
              </span>

              <h2>
                Different feet.
                Different movement.
                One goal.
              </h2>

            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <p>
                StepAura is built around the idea that
                footwear should support the way people
                actually move.
              </p>

              <p>
                Our collection combines athletic-inspired
                footwear with casual, formal and outdoor
                options.
              </p>

              <p>
                We focus on practical designs, comfortable
                construction and styles that fit modern life.
              </p>

            </div>

          </div>

          <div className="row g-4 aura-values">

            <div className="col-md-4">

              <div>

                <strong>
                  01
                </strong>

                <h3>
                  Movement
                </h3>

                <p>
                  Designed around active lifestyles.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div>

                <strong>
                  02
                </strong>

                <h3>
                  Comfort
                </h3>

                <p>
                  Made for longer days and longer walks.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div>

                <strong>
                  03
                </strong>

                <h3>
                  Choice
                </h3>

                <p>
                  Different styles for different needs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
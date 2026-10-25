import React, { useState } from "react";

function Check() {

  const [length, setLength] = useState("");
  const [size, setSize] = useState("");

  const checkSize = () => {

    const value = Number(length);

    if (!value) {
      alert("Please enter your foot length.");
      return;
    }

    if (value < 23) {
      setSize("EU 36 - 37");
    } else if (value < 24) {
      setSize("EU 38");
    } else if (value < 25) {
      setSize("EU 39 - 40");
    } else if (value < 26) {
      setSize("EU 41");
    } else if (value < 27) {
      setSize("EU 42");
    } else if (value < 28) {
      setSize("EU 43");
    } else if (value < 29) {
      setSize("EU 44");
    } else {
      setSize("EU 45+");
    }
  };

  return (
    <main className="aura-page">

      <section className="aura-title">

        <div className="container">

          <div className="title-number">
            06
          </div>

          <h1>
            CHECK YOUR FOOT SIZE
          </h1>

          <p>
            Measure your foot before choosing your size.
          </p>

        </div>

      </section>

      <section className="size-section">

        <div className="container">

          <div className="row g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <span>
                STEP 01
              </span>

              <h2>
                Place your foot on a sheet of paper.
              </h2>

              <p>
                Stand normally with your heel against
                a wall. Keep your full foot flat.
              </p>

              <span>
                STEP 02
              </span>

              <h2>
                Mark the longest point.
              </h2>

              <p>
                Mark the end of your longest toe.
                Measure from the heel to that mark.
              </p>

              <span>
                STEP 03
              </span>

              <h2>
                Enter the measurement.
              </h2>

              <p>
                Measure in centimeters and enter the
                number in the box.
              </p>

            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <div className="size-calculator">

                <span>
                  SIZE CHECKER
                </span>

                <h2>
                  Find your approximate size
                </h2>

                <label>
                  Foot length in centimeters
                </label>

                <input
                  type="number"
                  step="0.1"
                  placeholder="Example: 26.2"
                  value={length}
                  onChange={(e) =>
                    setLength(e.target.value)
                  }
                />

                <button onClick={checkSize}>
                  CHECK SIZE
                </button>

                {size && (

                  <div className="size-result">

                    <span>
                      RECOMMENDED SIZE
                    </span>

                    <strong>
                      {size}
                    </strong>

                  </div>

                )}

              </div>

            </div>

          </div>

          <div className="measurement-note">

            <h3>
              Important
            </h3>

            <p>
              Measure both feet and use the measurement
              of the larger foot. Footwear sizing can vary
              slightly between different designs, so use
              this guide as an approximate starting point.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Check;
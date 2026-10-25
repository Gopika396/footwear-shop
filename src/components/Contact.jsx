import React from "react";

function Contact() {

  const submitForm = (e) => {

    e.preventDefault();

    console.log(
      "StepAura contact form submitted"
    );

    alert(
      "Your message has been sent."
    );
  };

  return (
    <main className="aura-page">

      <section className="aura-title">

        <div className="container">

          <div className="title-number">
            05
          </div>

          <h1>
            CONTACT
          </h1>

          <p>
            We are ready to help.
          </p>

        </div>

      </section>

      <section className="aura-contact">

        <div className="container">

          <div className="row g-5">

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <span>
                CONTACT DETAILS
              </span>

              <h2>
                Let's talk about your next pair.
              </h2>

              <div className="contact-block">

                <strong>
                  PHONE
                </strong>

                <p>
                  0000000
                </p>

                <strong>
                  EMAIL
                </strong>

                <p>
                  support@stepaura.com
                </p>

                <strong>
                  HOURS
                </strong>

                <p>
                  Monday - Saturday
                </p>

              </div>

            </div>

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <form
                className="aura-form"
                onSubmit={submitForm}
              >

                <label>
                  Name
                </label>

                <input
                  type="text"
                  required
                />

                <label>
                  Email
                </label>

                <input
                  type="email"
                  required
                />

                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  required
                ></textarea>

                <button type="submit">
                  SEND MESSAGE
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
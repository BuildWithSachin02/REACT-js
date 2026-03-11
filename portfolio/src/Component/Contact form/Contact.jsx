import "../Contact form/Contact.css";

const Contactform = () => {
  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-4">
            <h2>Sachin Dev</h2>
          </div>
          <div className="col-8">
            <form
              action="https://formspree.io/f/{FORM_ID}"
              class="fs-form"
              target="_top"
              method="POST"
            >
              <div class="fs-field">
                <label class="fs-label" for="name">
                  Name
                </label>
                <input class="fs-input" id="name" name="name" required />
              </div>
              <div class="fs-field">
                <label class="fs-label" for="email">
                  Email Address
                </label>
                <input class="fs-input" id="email" name="email" required />
              </div>
              <div class="fs-field">
                <label class="fs-label" for="number">
                  Phone Number
                </label>
                <input class="fs-input" id="number" name="number" />
              </div>
              <div class="fs-field">
                <label class="fs-label" for="message">
                  Inquiry Message
                </label>
                <textarea
                  class="fs-textarea"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="fs-button-group">
                <button class="fs-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contactform;

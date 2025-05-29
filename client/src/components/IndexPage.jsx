const IndexPage = () => {
  return (
    <div className="hero-div">
      {/* Hero Section */}
      <div className="text-center bg-light py-5">
        <h1 className="display-5 fw-semibold hero-head">Indian Cultural Hub</h1>
        <p className="lead fw-medium">Connecting Indian Culture to Science</p>
      </div>

      {/* Discover Section */}
      <div className="bg-beige py-5 px-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="discover-text p-5 m-3">
              Discover The Different Facts And Knowledge About Indian Culture
              Which Is Connected To The Science With Our Wide Range Of Topics
              And Research Materials.
            </h5>
            <button className="btn btn-danger px-5 discover-btn">Learn More</button>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="src/assets/image/undraw_reading-time_gcvc.png"
              alt="Cultural Illustration"
              className="img-fluid rounded shadow discover-img my-3"
            />
          </div>
        </div>
      </div>

       {/* Articles Section */}
      <div className="text-center py-5 bg-light">
        <h5 className="text-muted">Articles</h5>
        <h2 className="text-danger">Discover the Latest Articles</h2>
        <p>Stay Informed with our Insightful Articles</p>

        <div className="d-flex justify-content-center flex-wrap">
          {/* Article 1 */}
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="src/assets/image/Diwali Image.png" className="card-img-top" alt="Diwali and The Diyas" />
            <div className="card-body">
              <h6 className="card-title text-danger">Diwali and The Diyas</h6>
              <p className="card-text">Why we celebrate Diwali?</p>
              <a href="#" className="text-decoration-none">Read More &gt;</a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="src/assets/image/DuserraImage.png" className="card-img-top" alt="Dussehra and Cleaning" />
            <div className="card-body">
              <h6 className="card-title text-danger">Dussehra and Cleaning</h6>
              <p className="card-text">Why we Clean?</p>
              <a href="#" className="text-decoration-none">Read More &gt;</a>
            </div>
          </div>

          {/* Article 3 */}
          <div className="card m-3" style={{ width: "16rem" }}>
            <img src="src/assets/image/ImageHoli.png" className="card-img-top" alt="Holi and Colours" />
            <div className="card-body">
              <h6 className="card-title text-danger">Holi and Colours</h6>
              <p className="card-text">Why we celebrate Holi?</p>
              <a href="#" className="text-decoration-none">Read More &gt;</a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-beige py-5 text-center">
        <h2 className="text-danger">Join Us On Our Beautiful Journey</h2>
        <p>
          Discover The Indian Culture And The Science Behind It. Join Our
          Community.
        </p>
        <button className="btn btn-danger">Join Community</button>
      </div>

      {/* Readers Feedback Section */}
      <div className="text-center py-5 bg-light">
        <h2 className="text-danger">Readers Thoughts On Our Articles</h2>
        <p>Here Are Some Thoughts Of Readers</p>
        <div className="d-flex justify-content-center flex-wrap">
          {["Akash Patil", "Shruti Chavan", "Sanket Kedar", "Sushil Dhepe"].map(
            (name, i) => (
              <div className="card m-3 p-2" key={i} style={{ width: "12rem" }}>
                <div className="card-body">
                  <h6 className="card-title text-danger">{name}</h6>
                  <p className="card-text">Nice Work 👍</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center py-5">
        <h2 className="text-danger">Stay Updated with Our Newsletter</h2>
        <p>Subscribe To Our NewsLetter For Latest Articles</p>
        <div className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-25"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-danger ms-2">Sign In</button>
        </div>
        <small className="d-block mt-2">
          By signing up, you agree to our terms and conditions
        </small>
      </div>

      {/* Suggestion Box */}
      <div className="bg-beige py-5 text-center">
        <h4 className="text-danger">
          If You Are Curious About Other Traditions That Doesn’t Have Article
          Here.
          <br />
          Please Send It On Below Details..
        </h4>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
          <div className="mb-3 w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="w-50">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Information About Tradition"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="text-danger mb-0">Indian Heritage Hub</p>
        <small>&copy;2024 HorizonEdge &mdash; All rights are reserved.</small>
        <br />
        <div>
          <a href="#" className="text-decoration-none px-2">
            About Us
          </a>
          <a href="#" className="text-decoration-none px-2">
            Terms & Conditions
          </a>
          <a href="#" className="text-decoration-none px-2">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

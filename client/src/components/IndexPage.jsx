import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Adjust path if needed

const IndexPage = () => {
  return (
    <div>
      

      {/* Hero Section */}
      <div className="text-center bg-light py-5">
        <h1 className="display-5 text-dark">Indian Cultural Hub</h1>
        <p className="lead">Connecting Indian Culture to Science</p>
      </div>

      {/* Discover Section */}
      <div className="bg-beige py-5 px-4 d-md-flex align-items-center">
        <div className="col-md-6">
          <h5 className="text-danger">Discover The Different Facts And Knowledge About Indian Culture Which Is Connected To The Science With Our Wide Range Of Topics And Research Materials.</h5>
          <button className="btn btn-danger mt-3">Learn More</button>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img src="https://via.placeholder.com/250x200" alt="Reading Illustration" />
        </div>
      </div>

      {/* Articles Section */}
      <div className="text-center py-5 bg-light">
        <h5 className="text-muted">Articles</h5>
        <h2 className="text-danger">Discover the Latest Articles</h2>
        <p>Stay Informed with our Insightful Articles</p>

        <div className="d-flex justify-content-center flex-wrap">
          {["Diwali and The Diyas", "Duserra and Cleaning", "Holi And Colours"].map((title, i) => (
            <div className="card m-3" key={i} style={{ width: "18rem" }}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title text-danger">{title}</h6>
                <p className="card-text">Why we {title.includes("Cleaning") ? "Clean" : "celebrate"}?</p>
                <a href="#" className="text-decoration-none">Read More &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-beige py-5 text-center">
        <h2 className="text-danger">Join Us On Our Beautiful Journey</h2>
        <p>Discover The Indian Culture And The Science Behind It. Join Our Community.</p>
        <button className="btn btn-danger">Join Community</button>
      </div>

      {/* Readers Feedback Section */}
      <div className="text-center py-5 bg-light">
        <h2 className="text-danger">Readers Thoughts On Our Articles</h2>
        <p>Here Are Some Thoughts Of Readers</p>
        <div className="d-flex justify-content-center flex-wrap">
          {["Akash Patil", "Shruti Chavan", "Sanket Kedar", "Sushil Dhepe"].map((name, i) => (
            <div className="card m-3 p-2" key={i} style={{ width: "12rem" }}>
              <div className="card-body">
                <h6 className="card-title text-danger">{name}</h6>
                <p className="card-text">Nice Work 👍</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center py-5">
        <h2 className="text-danger">Stay Updated with Our Newsletter</h2>
        <p>Subscribe To Our NewsLetter For Latest Articles</p>
        <div className="d-flex justify-content-center">
          <input type="email" className="form-control w-25" placeholder="Enter Your Email Address" />
          <button className="btn btn-danger ms-2">Sign In</button>
        </div>
        <small className="d-block mt-2">By signing up, you agree to our terms and conditions</small>
      </div>

      {/* Suggestion Box */}
      <div className="bg-beige py-5 text-center">
        <h4 className="text-danger">
          If You Are Curious About Other Traditions That Doesn’t Have Article Here.<br />
          Please Send It On Below Details..
        </h4>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
          <div className="mb-3 w-50">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="w-50">
            <textarea className="form-control" rows="4" placeholder="Information About Tradition"></textarea>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="text-danger mb-0">Indian Heritage Hub</p>
        <small>&copy;2024 HorizonEdge &mdash; All rights are reserved.</small><br />
        <div>
          <a href="#" className="text-decoration-none px-2">About Us</a>
          <a href="#" className="text-decoration-none px-2">Terms & Conditions</a>
          <a href="#" className="text-decoration-none px-2">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
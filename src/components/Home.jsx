import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">📚 Online Book Shop</h1>
      <p className="mb-4">Welcome to the best online book store! Please login to explore more.</p>
      <Link className="btn btn-primary px-4" to="/login">
        Login Here
      </Link>
    </div>
  );
};

export default Home;

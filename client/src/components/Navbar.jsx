import { react } from "react";
import { Link, useNavigate } from "react-router";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-index">
            <a className="navbar-brand fw-bold fst-italic px-4 navbar-title" Link="#">Indian Heritage Hub</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end mx-3" id="navbarSupportedContent">
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link fw-bold px-3 nav-comp" Link="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold px-3 nav-comp" Link="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold px-3 nav-comp" Link="#">Articles</a>
                    </li>
                    <button class="btn fw-bold my-2 rounded-5 px-3 my-sm-0 btn-nav" type="submit">Sign In</button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
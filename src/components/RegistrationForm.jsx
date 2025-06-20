import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignUp } from "../services/users";

const RegistrationForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    passwd: "",
    mobile: "",
    Bio: "",
    dob:"",
  });
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSignUpClick = async (e) => {
		try {
			// register user using REST api
			const user = await userSignUp(
				info.email,
				info.passwd,
				info.name,
				info.mobile,
				info.Bio,
        info.dob
			);
			toast.success("User registered with id: " + user.id);
			// then go to login page
			navigate("/login");
		} catch (err) {
			toast.error(err.message);
		}
	};

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevents page reload

    if (!profilePic) {
      toast.error("Please select a profile picture.");
      return;
    }



    const formData = new FormData();
    Object.entries(info).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("profilePic", profilePic);

    try {
      const user = await userSignUp(formData);
      toast.success("Registered! Your user ID: " + user.id);
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {["name", "email", "passwd", "mobile", "Bio","dob"].map((field) => (
            <div className="form-group mb-3" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "passwd" ? "password" : "text"}
                className="form-control"
                name={field}
                placeholder={`Enter your ${field}`}
                value={info[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="form-group mb-3">
            <label>Profile Photo</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3" onClick={handleSignUpClick}>
            Register
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;



const LoginForm = () => {

    return(
        <div className="container col border-2 shadow-lg p-5 mt-5 justify-content-center login-main-div">
            
            <div className="d-flex align-items-center justify-content-center gap-5">

                <div>
                    <img src="/src/assets/image/undraw_Fingerprint_login_re_t71l.png" alt="loginImage" 
                    className="m-3 img-fluid img-login border border-dark" />
                </div>

                <div className="text-center login-div p-3">
                    <div className="mb-3 login-head">
                        <h2 className="fw-bold fs-1">Login Form</h2>
                    </div>

                    <div className="mb-3 p-3">
				    
                        <label className="form-label login-label fw-semibold fs-5">Email :</label>
				    
                        <input
					        className="form-control input-box text-center"
					        name="email"
					        type="text"
				        />

			        </div>

			        <div className="mb-3 p-3">
				        <label className="form-label login-label fw-semibold fs-5">Password :</label>
				        <input
					        className="form-control input-box text-center"
					        name="passwd"
					        type="password"
				        />
			        </div>

			        <button className="btn btn-outline-success py-2 my-3 mx-5 px-5 fw-bold rounded-5" type="button">Sign In</button>

                    <button className="btn btn-outline-info py-2 px-5 mx-5 fw-bold rounded-5" type="button">Sign Up</button>

                </div>

            </div>

        </div>
    );
}

export default LoginForm;
const LoginForm = () => {
    return (
        <div className="container border-2 shadow-lg p-4 mt-5 login-main-div rounded-4">
            <div className="row justify-content-center align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="/src/assets/image/undraw_Fingerprint_login_re_t71l.png"
                        alt="login"
                        className="img-fluid img-login border border-dark rounded-3"
                        style={{ maxWidth: '80%', height: 'auto' }}
                    />
                </div>

                {/* Form Section */}
                <div className="col-12 col-md-6">
                    <div className="text-center login-div p-3">
                        <div className="mb-3 login-head">
                            <h2 className="fw-bold fs-2">Login Form</h2>
                        </div>

                        <div className="mb-3">
                            <label className="form-label login-label fw-semibold fs-5">Email:</label>
                            <input
                                className="form-control input-box text-center"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label login-label fw-semibold fs-5">Password:</label>
                            <input
                                className="form-control input-box text-center"
                                name="passwd"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                            <button className="btn btn-outline-success fw-bold rounded-5 px-4 py-2" type="button">Sign In</button>
                            <button className="btn btn-outline-info fw-bold rounded-5 px-4 py-2" type="button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

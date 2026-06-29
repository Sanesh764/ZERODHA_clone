
function SignUp () {
    return(
       <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "430px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Create Account</h2>
          <p className="text-muted">
            Start investing with Zerodha
          </p>
        </div>

        <form action="/signup" method="POST">

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
          >
            Sign Up
          </button>

          <p className="text-center text-muted mt-3 mb-0">
            Already have an account?
            <a href="/login" className="text-decoration-none ms-1">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
    )
}
export default SignUp;